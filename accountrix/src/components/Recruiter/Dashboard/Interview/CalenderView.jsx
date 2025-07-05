import React, { useState } from 'react';
import {
  Calendar,
  Search,
  Plus,
  ChevronLeft,
  ChevronRight,
  Filter,
  Video,
  Phone,
  MapPin,
  Clock,
  User,
  MoreHorizontal,
  Bell,
  Star,
} from 'lucide-react';

const CalendarView = ({ interviews = [], onClickInterview = () => {} }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [viewMode, setViewMode] = useState('month'); // month, week, day
  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Get current year and month for dynamic dates
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  
  // Sample data for demo with dynamic dates based on current month
  const sampleInterviews = interviews.length > 0 ? interviews : [
    {
      _id: '1',
      candidate: { fullName: 'Sarah Chen', role: 'Senior Frontend Developer' },
      date: new Date(currentYear, currentMonth, 5).toISOString().split('T')[0],
      time: '10:30',
      duration: 60,
      status: 'scheduled',
      type: 'video',
      priority: 'high',
      stage: 'Technical Round'
    },
    {
      _id: '2',
      candidate: { fullName: 'Marcus Johnson', role: 'Product Manager' },
      date: new Date(currentYear, currentMonth, 5).toISOString().split('T')[0],
      time: '14:00',
      duration: 45,
      status: 'completed',
      type: 'phone',
      priority: 'medium',
      stage: 'Final Interview'
    },
    {
      _id: '2b',
      candidate: { fullName: 'Jennifer Lee', role: 'Marketing Specialist' },
      date: new Date(currentYear, currentMonth, 5).toISOString().split('T')[0],
      time: '16:30',
      duration: 30,
      status: 'scheduled',
      type: 'video',
      priority: 'low',
      stage: 'Initial Screening'
    },
    {
      _id: '3',
      candidate: { fullName: 'Emma Thompson', role: 'UX Designer' },
      date: new Date(currentYear, currentMonth, 8).toISOString().split('T')[0],
      time: '11:00',
      duration: 90,
      status: 'scheduled',
      type: 'video',
      priority: 'high',
      stage: 'Portfolio Review'
    },
    {
      _id: '4',
      candidate: { fullName: 'James Wilson', role: 'Data Scientist' },
      date: new Date(currentYear, currentMonth, 12).toISOString().split('T')[0],
      time: '15:30',
      duration: 75,
      status: 'pending',
      type: 'video',
      priority: 'medium',
      stage: 'Technical Assessment'
    },
    {
      _id: '4b',
      candidate: { fullName: 'Michelle Davis', role: 'Business Analyst' },
      date: new Date(currentYear, currentMonth, 12).toISOString().split('T')[0],
      time: '10:00',
      duration: 60,
      status: 'scheduled',
      type: 'phone',
      priority: 'high',
      stage: 'Case Study Review'
    },
    {
      _id: '4c',
      candidate: { fullName: 'Ryan Zhang', role: 'Software Architect' },
      date: new Date(currentYear, currentMonth, 12).toISOString().split('T')[0],
      time: '17:45',
      duration: 90,
      status: 'scheduled',
      type: 'video',
      priority: 'high',
      stage: 'Architecture Review'
    },
    {
      _id: '5',
      candidate: { fullName: 'Lisa Park', role: 'Backend Developer' },
      date: new Date(currentYear, currentMonth, 15).toISOString().split('T')[0],
      time: '09:00',
      duration: 60,
      status: 'scheduled',
      type: 'video',
      priority: 'high',
      stage: 'System Design'
    },
    {
      _id: '6',
      candidate: { fullName: 'David Kim', role: 'DevOps Engineer' },
      date: new Date(currentYear, currentMonth, 18).toISOString().split('T')[0],
      time: '16:00',
      duration: 45,
      status: 'scheduled',
      type: 'phone',
      priority: 'medium',
      stage: 'Infrastructure Interview'
    },
    {
      _id: '7',
      candidate: { fullName: 'Anna Martinez', role: 'UI/UX Designer' },
      date: new Date(currentYear, currentMonth, 22).toISOString().split('T')[0],
      time: '13:30',
      duration: 120,
      status: 'scheduled',
      type: 'video',
      priority: 'high',
      stage: 'Design Challenge'
    },
    {
      _id: '8',
      candidate: { fullName: 'Robert Taylor', role: 'Software Engineer' },
      date: new Date(currentYear, currentMonth, 25).toISOString().split('T')[0],
      time: '11:15',
      duration: 90,
      status: 'pending',
      type: 'video',
      priority: 'medium',
      stage: 'Coding Interview'
    }
  ];

  // Calendar logic
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    
    return days;      
  };

  const getInterviewsForDate = (date) => {
    if (!date) return [];
    const dateString = date.toISOString().split('T')[0];
    return sampleInterviews.filter(interview => {
      // Handle both date string formats
      const interviewDate = interview.date.split('T')[0];
      return interviewDate === dateString;
    });
  };

  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const isToday = (date) => {
    if (!date) return false;
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const handleDateClick = (date, dayInterviews) => {
    if (dayInterviews.length > 0) {
      setSelectedDate(date);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedDate(null);
  };

  const isCurrentMonth = (date) => {
    if (!date) return false;
    return date.getMonth() === currentDate.getMonth();
  };

  const formatSelectedDate = (date) => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'scheduled': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'completed': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'pending': return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'cancelled': return 'bg-rose-100 text-rose-700 border-rose-200';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-rose-500';
      case 'medium': return 'bg-amber-500';
      case 'low': return 'bg-emerald-500';
      default: return 'bg-slate-400';
    }
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Add this before return
  const selectedDateInterviews = selectedDate ? getInterviewsForDate(selectedDate) : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-white/20 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-slate-800">Interview Calendar</h1>
                  <p className="text-sm text-slate-500">Manage your interview schedule</p>
                </div>
              </div>
              
              {/* Month Navigation */}
              <div className="flex items-center space-x-4 bg-white/60 rounded-xl px-4 py-2 border border-white/40">
                <button 
                  onClick={() => navigateMonth(-1)}
                  className="p-1 hover:bg-white/80 rounded-lg transition-colors"
                >
                  <ChevronLeft className="w-4 h-4 text-slate-600" />
                </button>
                <span className="text-lg font-medium text-slate-800 min-w-[140px] text-center">
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </span>
                <button 
                  onClick={() => navigateMonth(1)}
                  className="p-1 hover:bg-white/80 rounded-lg transition-colors"
                >
                  <ChevronRight className="w-4 h-4 text-slate-600" />
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search interviews..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-64 bg-white/60 border border-white/40 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:bg-white/80 transition-all placeholder-slate-400"
                />
              </div>
              
              <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-4 py-2 rounded-xl font-medium transition-all shadow-lg shadow-blue-500/25">
                <Plus className="w-4 h-4" />
                <span>Schedule</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/40 overflow-hidden shadow-xl shadow-slate-200/50">
          
          {/* Week Days Header */}
          <div className="grid grid-cols-7 bg-gradient-to-r from-slate-50 to-blue-50 border-b border-slate-200/50">
            {weekDays.map((day) => (
              <div key={day} className="p-4 text-center">
                <span className="text-sm font-medium text-slate-600">{day}</span>
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7">
            {getDaysInMonth(currentDate).map((date, index) => {
              const dayInterviews = getInterviewsForDate(date);
              const isCurrentDay = isToday(date);
              const isInCurrentMonth = isCurrentMonth(date);
              
              return (
                <div
                  key={index}
                  onClick={() => handleDateClick(date, dayInterviews)}
                  className={`min-h-32 p-2 border-r border-b border-slate-200/30 transition-all hover:bg-white/40 ${
                    !isInCurrentMonth ? 'bg-slate-50/30' : 'bg-white/20'
                  } ${isCurrentDay ? 'bg-blue-50/60 ring-2 ring-blue-500/20' : ''} ${
                    dayInterviews.length > 0 ? 'cursor-pointer hover:bg-blue-50/40' : ''
                  }`}
                >
                  {date && (
                    <>
                      {/* Date Number */}
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-sm font-medium ${
                          isCurrentDay 
                            ? 'w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs' 
                            : isInCurrentMonth 
                              ? 'text-slate-700' 
                              : 'text-slate-400'
                        }`}>
                          {date.getDate()}
                        </span>
                        {dayInterviews.length > 0 && (
                          <span className="w-5 h-5 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center">
                            {dayInterviews.length}
                          </span>
                        )}
                      </div>

                      {/* Interviews Preview or Count */}
                      <div className="space-y-1">
                        {dayInterviews.length === 1 ? (
                          // Show single interview preview
                          <div
                            onClick={(e) => {
                              e.stopPropagation();
                              onClickInterview(dayInterviews[0]);
                            }}
                            className="group cursor-pointer"
                          >
                            <div className={`p-2 rounded-lg border transition-all hover:shadow-md ${getStatusColor(dayInterviews[0].status)} hover:scale-105`}>
                              <div className="flex items-center space-x-2 mb-1">
                                <div className={`w-2 h-2 rounded-full ${getPriorityColor(dayInterviews[0].priority)}`}></div>
                                <span className="text-xs font-medium truncate">{dayInterviews[0].candidate.fullName}</span>
                              </div>
                              
                              <div className="flex items-center justify-between text-xs">
                                <div className="flex items-center space-x-1">
                                  <Clock className="w-3 h-3" />
                                  <span>{dayInterviews[0].time}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  {dayInterviews[0].type === 'video' ? (
                                    <Video className="w-3 h-3" />
                                  ) : dayInterviews[0].type === 'phone' ? (
                                    <Phone className="w-3 h-3" />
                                  ) : (
                                    <MapPin className="w-3 h-3" />
                                  )}
                                </div>
                              </div>
                              
                              <div className="text-xs text-current/70 mt-1 truncate">
                                {dayInterviews[0].candidate.role}
                              </div>
                            </div>
                          </div>
                        ) : dayInterviews.length > 1 ? (
                          // Show count badge for multiple interviews
                          <div className="text-center py-4">
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-110">
                              {dayInterviews.length}
                            </div>
                            <p className="text-xs text-slate-600 mt-2 font-medium">interviews</p>
                          </div>
                        ) : null}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Today's Schedule Sidebar */}
        <div className="mt-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/40 p-6 shadow-xl shadow-slate-200/50">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-slate-800">Today's Schedule</h3>
            <div className="flex items-center space-x-2">
              <Bell className="w-4 h-4 text-slate-500" />
              <span className="text-sm text-slate-500">
                {sampleInterviews.filter(interview => {
                  const today = new Date();
                  const interviewDate = new Date(interview.date);
                  return interviewDate.toDateString() === today.toDateString();
                }).length} interviews today
              </span>
            </div>
          </div>

          <div className="space-y-4">
            {sampleInterviews
              .filter(interview => {
                const today = new Date();
                const interviewDate = new Date(interview.date);
                return interviewDate.toDateString() === today.toDateString();
              })
              .map((interview) => (
              <div
                key={interview._id}
                onClick={() => onClickInterview(interview)}
                className="flex items-center space-x-4 p-4 bg-white/60 rounded-xl border border-white/40 hover:bg-white/80 cursor-pointer transition-all hover:shadow-lg"
              >
                <div className="text-center min-w-[60px]">
                  <div className="text-lg font-semibold text-slate-800">{interview.time}</div>
                  <div className="text-xs text-slate-500">{interview.duration}min</div>
                </div>

                <div className={`w-1 h-12 rounded-full ${getPriorityColor(interview.priority)}`}></div>

                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-medium text-slate-800">{interview.candidate.fullName}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(interview.status)}`}>
                      {interview.status}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600">{interview.candidate.role}</p>
                  <p className="text-xs text-slate-500">{interview.stage}</p>
                </div>

                <div className="flex items-center space-x-2">
                  {interview.type === 'video' ? (
                    <Video className="w-4 h-4 text-blue-500" />
                  ) : (
                    <Phone className="w-4 h-4 text-green-500" />
                  )}
                  <MoreHorizontal className="w-4 h-4 text-slate-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interview Details Modal */}
      {showModal && selectedDate && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/40 w-full max-w-2xl max-h-[80vh] overflow-hidden">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-6 border-b border-slate-200/50">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-slate-800 mb-1">
                    {formatSelectedDate(selectedDate)}
                  </h2>
                  <p className="text-slate-600">
                    {selectedDateInterviews.length} interview{selectedDateInterviews.length !== 1 ? 's' : ''} scheduled
                  </p>
                </div>
                <button 
                  onClick={closeModal}
                  className="w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors"
                >
                  <span className="text-slate-500 text-xl">×</span>
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div className="space-y-4">
                {selectedDateInterviews
                  .sort((a, b) => a.time.localeCompare(b.time))
                  .map((interview, index) => (
                  <div
                    key={interview._id}
                    onClick={() => {
                      onClickInterview(interview);
                      closeModal();
                    }}
                    className="flex items-center space-x-4 p-4 bg-white/80 hover:bg-white rounded-2xl border border-slate-200/50 hover:border-slate-300/50 cursor-pointer transition-all hover:shadow-lg group"
                  >
                    {/* Time */}
                    <div className="text-center min-w-[80px] bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-3">
                      <div className="text-lg font-bold text-slate-800">{interview.time}</div>
                      <div className="text-xs text-slate-500">{interview.duration}min</div>
                    </div>

                    {/* Priority Indicator */}
                    <div className={`w-1 h-16 rounded-full ${getPriorityColor(interview.priority)}`}></div>

                    {/* Interview Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-slate-800 truncate">
                          {interview.candidate.fullName}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(interview.status)}`}>
                          {interview.status}
                        </span>
                      </div>
                      
                      <p className="text-slate-600 mb-1 font-medium">{interview.candidate.role}</p>
                      <p className="text-sm text-slate-500 mb-2">{interview.stage}</p>
                      
                      <div className="flex items-center space-x-4 text-sm text-slate-500">
                        <div className="flex items-center space-x-1">
                          {interview.type === 'video' ? (
                            <Video className="w-4 h-4 text-blue-500" />
                          ) : interview.type === 'phone' ? (
                            <Phone className="w-4 h-4 text-green-500" />
                          ) : (
                            <MapPin className="w-4 h-4 text-purple-500" />
                          )}
                          <span className="capitalize">{interview.type} call</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{interview.duration} minutes</span>
                        </div>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="text-slate-300 group-hover:text-slate-400 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-gradient-to-r from-slate-50 to-blue-50 px-6 py-4 border-t border-slate-200/50">
              <div className="flex justify-between items-center">
                <div className="text-sm text-slate-500">
                  Click on any interview to view details
                </div>
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-xl font-medium transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarView;