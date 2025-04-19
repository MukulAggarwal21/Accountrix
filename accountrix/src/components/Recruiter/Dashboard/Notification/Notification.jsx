import { useState } from 'react';
import { Bell, Check, X, MoreHorizontal, User, Settings } from 'lucide-react';

export default function NotificationPage() {
  const [activeTab, setActiveTab] = useState('all');
  
  // Sample notification data
  const notifications = [
    {
      id: 1,
      type: 'message',
      title: 'New message received',
      message: 'Sarah sent you a new message about the project',
      time: '2 minutes ago',
      isRead: false
    },
    {
      id: 2,
      type: 'alert',
      title: 'System update completed',
      message: 'The system has been updated to version 2.4.0',
      time: '1 hour ago',
      isRead: false
    },
    {
      id: 3,
      type: 'reminder',
      title: 'Meeting reminder',
      message: 'Team meeting starts in 30 minutes',
      time: '30 minutes ago',
      isRead: true
    },
    {
      id: 4,
      type: 'message',
      title: 'John commented on your post',
      message: 'Nice work! I really like what you did with the design.',
      time: '3 hours ago',
      isRead: true
    },
    {
      id: 5,
      type: 'alert',
      title: 'New feature available',
      message: 'Try our new dashboard analytics tools',
      time: 'Yesterday',
      isRead: true
    }
  ];

  // Filter notifications based on active tab
  const filteredNotifications = activeTab === 'all' 
    ? notifications 
    : activeTab === 'unread'
      ? notifications.filter(n => !n.isRead)
      : notifications.filter(n => n.type === activeTab);

  // Get icon based on notification type
  const getIcon = (type) => {
    switch(type) {
      case 'message':
        return <User size={18} className="text-blue-500" />;
      case 'alert':
        return <Bell size={18} className="text-red-500" />;
      case 'reminder':
        return <Bell size={18} className="text-yellow-500" />;
      default:
        return <Bell size={18} className="text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Bell size={24} className="text-indigo-600" />
              <h1 className="ml-2 text-xl font-semibold text-gray-900">Notifications</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-1 rounded-full text-gray-500 hover:bg-gray-100">
                <Settings size={20} />
              </button>
              <button className="p-1 rounded-full text-gray-500 hover:bg-gray-100">
                <Check size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="flex -mb-px space-x-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'all'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab('unread')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'unread'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Unread
            </button>
            <button
              onClick={() => setActiveTab('message')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'message'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Messages
            </button>
            <button
              onClick={() => setActiveTab('alert')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'alert'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Alerts
            </button>
          </nav>
        </div>

        {/* Notifications list */}
        <div className="space-y-4">
          {filteredNotifications.length > 0 ? (
            filteredNotifications.map((notification) => (
              <div 
                key={notification.id} 
                className={`bg-white rounded-lg shadow p-4 flex ${
                  !notification.isRead ? 'border-l-4 border-indigo-500' : ''
                }`}
              >
                <div className="mr-4 mt-1">
                  <div className="p-2 bg-gray-100 rounded-full">
                    {getIcon(notification.type)}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className={`font-medium ${!notification.isRead ? 'text-gray-900' : 'text-gray-600'}`}>
                      {notification.title}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-500">{notification.time}</span>
                      <button className="p-1 rounded-full hover:bg-gray-100">
                        <MoreHorizontal size={16} className="text-gray-400" />
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{notification.message}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <Bell size={40} className="mx-auto text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No notifications</h3>
              <p className="mt-1 text-sm text-gray-500">
                You don't have any {activeTab !== 'all' ? activeTab : ''} notifications at the moment.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}