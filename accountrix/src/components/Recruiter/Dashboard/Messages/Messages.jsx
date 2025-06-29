import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Send, MessageSquare, ChevronLeft, UserCircle } from 'lucide-react';

export default function Messages({ recruiterId, onBack }) {
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchConversations = async () => {
      if (!recruiterId) {
        setLoading(false);
        setError('Recruiter ID is missing.');
        return;
      }
      setLoading(true);
      setError(null);
      try {
        // Fetch messages where this recruiter is either sender or receiver
        const response = await axios.get(`http://localhost:5000/messages/user/${recruiterId}`);
        
        // Group messages into conversations
        const groupedConversations = {};
        response.data.forEach(msg => {
          const otherParticipantId = msg.sender._id === recruiterId ? msg.receiver._id : msg.sender._id;
          const conversationId = otherParticipantId;

          if (!groupedConversations[conversationId]) {
            groupedConversations[conversationId] = {
              id: conversationId,
              participant: msg.sender._id === recruiterId ? msg.receiver : msg.sender,
              messages: []
            };
          }
          groupedConversations[conversationId].messages.push(msg);
        });

        // Sort messages within each conversation by timestamp
        Object.values(groupedConversations).forEach(conv => {
          conv.messages.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        });

        setConversations(Object.values(groupedConversations));
      } catch (err) {
        console.error('Error fetching conversations:', err);
        setError('Failed to load messages.');
      } finally {
        setLoading(false);
      }
    };

    fetchConversations();

    // Poll for new messages every few seconds (optional, for real-time)
    const interval = setInterval(fetchConversations, 10000); 
    return () => clearInterval(interval);

  }, [recruiterId]);

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !selectedConversation) return;

    try {
      const response = await axios.post('http://localhost:5000/messages', {
        sender: recruiterId,
        senderModel: 'Company', // Assuming recruiter is part of Company model
        receiver: selectedConversation.participant._id,
        receiverModel: selectedConversation.participant.role === 'recruiter' ? 'Company' : 'User', // Determine model based on participant role
        content: newMessage
      });

      setConversations(prevConversations => 
        prevConversations.map(conv => 
          conv.id === selectedConversation.id 
            ? { ...conv, messages: [...conv.messages, response.data.message] } 
            : conv
        )
      );
      setNewMessage('');
    } catch (err) {
      console.error('Error sending message:', err);
      alert('Failed to send message.');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading messages...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 mt-8">{error}</div>;
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Conversation List / Sidebar */}
      <div className={`w-full md:w-1/3 border-r border-gray-200 bg-white flex flex-col ${selectedConversation ? 'hidden md:flex' : 'flex'}`}>
        <div className="px-4 py-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">Messages</h2>
          {onBack && (
            <button
              onClick={onBack}
              className="p-2 rounded-full hover:bg-gray-200"
              title="Back to Dashboard"
            >
              <ChevronLeft size={20} />
            </button>
          )}
        </div>
        <div className="flex-1 overflow-y-auto">
          {conversations.length === 0 ? (
            <p className="text-center text-gray-500 py-8">No conversations yet.</p>
          ) : (
            conversations.map(conv => (
              <div
                key={conv.id}
                className={`flex items-center p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-100 ${selectedConversation?.id === conv.id ? 'bg-gray-100' : ''}`}
                onClick={() => setSelectedConversation(conv)}
              >
                <UserCircle size={40} className="text-gray-400 mr-3" />
                <div>
                  <p className="font-semibold text-gray-900">{conv.participant.fullName || conv.participant.name || 'Unknown User'}</p>
                  <p className="text-sm text-gray-500 line-clamp-1">{conv.messages[conv.messages.length - 1]?.content || ''}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Message View */}
      <div className={`w-full md:w-2/3 flex flex-col ${selectedConversation ? 'flex' : 'hidden md:flex'}`}>
        {selectedConversation ? (
          <>
            <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center shadow-sm">
              <button
                onClick={() => setSelectedConversation(null)}
                className="md:hidden mr-3 p-1 rounded-full hover:bg-gray-100"
                title="Back to conversations"
              >
                <ChevronLeft size={24} />
              </button>
              <UserCircle size={40} className="text-gray-400 mr-3" />
              <h3 className="text-lg font-semibold text-gray-900">{selectedConversation.participant.fullName || selectedConversation.participant.name || 'Unknown User'}</h3>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-100">
              {selectedConversation.messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.sender._id === recruiterId ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg shadow-md ${msg.sender._id === recruiterId
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-gray-800'
                      }`}
                  >
                    <p className="text-sm">{msg.content}</p>
                    <span className="text-xs opacity-75 mt-1 block text-right">{new Date(msg.createdAt).toLocaleTimeString()}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white border-t border-gray-200 p-4 flex items-center">
              <textarea
                className="flex-1 border border-gray-300 rounded-md p-2 mr-3 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
                rows="1"
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button
                onClick={handleSendMessage}
                className="bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 transition-colors"
                title="Send message"
              >
                <Send size={20} />
              </button>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            <MessageSquare size={48} className="mr-2" />
            Select a conversation to view messages.
          </div>
        )}
      </div>
    </div>
  );
} 