import { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, MessageSquare, User, Briefcase, Filter, Plus, Trash2, ArrowLeft, Search, CheckCircle, XCircle, FileText, ExternalLink, Edit, ChevronDown, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';
import CalendarView from './CalenderView';
import ListView from './ListView';
import { getInterviewsByRecruiter } from '../../../../lib/utils';

export default function InterviewSchedule() {
  const [interviews, setInterviews] = useState([]);
  const [selectedInterview, setSelectedInterview] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentView, setCurrentView] = useState('calendar'); // calendar or list
  const recruiterId = localStorage.getItem('recruiterId');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!recruiterId) return;
    setLoading(true);
    getInterviewsByRecruiter(recruiterId)
      .then(data => {
        setInterviews(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch interviews.');
        setLoading(false);
      });
  }, [recruiterId]);

  // Filter interviews based on active filter and search term
  const filteredInterviews = interviews.filter(interview => {
    const matchesFilter =
      activeFilter === 'all' ||
      (activeFilter === 'upcoming' && interview.status === 'scheduled') ||
      (activeFilter === 'completed' && interview.status === 'completed');
    const matchesSearch =
      (interview.candidate?.fullName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (interview.job?.jobTitle || '').toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Handle opening interview details
  const handleOpenDetails = (interview) => {
    setSelectedInterview(interview);
    setIsDetailModalOpen(true);
  };

  // Handle closing detail modal
  const handleCloseDetails = () => {
    setSelectedInterview(null);
    setIsDetailModalOpen(false);
  };

  return (
    <div className="h-full px-4 sm:px-6 lg:px-8 pt-4 bg-white">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-semibold">Interview Schedule</h1>
        <div className="flex items-center"></div>
      </div>
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={() => setCurrentView('calendar')}
            className={`mr-4 text-gray-600 hover:text-blue-500 focus:outline-none underline ${currentView === 'calendar' ? 'font-semibold text-blue-500' : ''}`}
          >
            Calendar View
          </button>
          <button
            onClick={() => setCurrentView('list')}
            className={`text-gray-600 hover:text-blue-500 focus:outline-none underline ${currentView === 'list' ? 'font-semibold text-blue-500' : ''}`}
          >
            List View
          </button>
        </div>
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      ) : error ? (
        <div className="flex justify-center items-center h-64">
          <div className="text-red-500 text-lg font-medium">{error}</div>
        </div>
      ) : currentView === 'calendar' ? (
        <CalendarView interviews={filteredInterviews} onClickInterview={handleOpenDetails} months={["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]} />
      ) : (
        <ListView interviews={filteredInterviews} onClickInterview={handleOpenDetails} />
      )}
      {/* Detail Modal (if needed) */}
      {/* ...You can add a modal for interview details here if you want... */}
    </div>
  );
}