
import { useState } from 'react';
import { Calendar, Clock, MapPin, MessageSquare, User, Briefcase, Filter, Plus, Trash2, ArrowLeft, Search, CheckCircle, XCircle, FileText, ExternalLink, Edit, ChevronDown, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';

const CalendarView = ({ interviews, onClickInterview, months }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('All');

  // Filter interviews based on search term and status
  const filteredInterviews = interviews.filter(interview => {
    const matchesSearch = interview.candidate.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         interview.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'All' || interview.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  // Group interviews by month
  const groupedByMonth = filteredInterviews.reduce((acc, interview) => {
    const month = months[interview.date.getMonth()];
    if (!acc[month]) acc[month] = [];
    acc[month].push(interview);
    return acc;
  }, {});

  // Check if there are active filters
  const hasActiveFilters = searchTerm !== '' || selectedStatus !== 'All';
  
  // Group by day within each month for better organization
  const groupedByMonthAndDay = Object.keys(groupedByMonth).reduce((acc, month) => {
    acc[month] = groupedByMonth[month].reduce((dayAcc, interview) => {
      const day = interview.date.getDate();
      if (!dayAcc[day]) dayAcc[day] = [];
      dayAcc[day].push(interview);
      return dayAcc;
    }, {});
    return acc;
  }, {});

  const getStatusColor = (status) => {
    switch(status) {
      case 'Scheduled': return 'bg-blue-100 text-blue-700 border-blue-300';
      case 'Completed': return 'bg-green-100 text-green-700 border-green-300';
      case 'Cancelled': return 'bg-red-100 text-red-700 border-red-300';
      case 'Pending': return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      default: return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const monthColors = {
    January: 'bg-blue-50',
    February: 'bg-indigo-50',
    March: 'bg-purple-50',
    April: 'bg-pink-50',
    May: 'bg-red-50',
    June: 'bg-orange-50',
    July: 'bg-amber-50',
    August: 'bg-yellow-50',
    September: 'bg-lime-50',
    October: 'bg-green-50',
    November: 'bg-emerald-50',
    December: 'bg-teal-50'
  };

  return (
    <div className="space-y-6 mx-auto">
      {/* Header and Search Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-lg shadow">
        <div className="flex items-center mb-4 md:mb-0">
          <CalendarIcon className="w-6 h-6 text-blue-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-800">
            Calendar View
          </h2>
        </div>
        <div className="flex space-x-2 w-full md:w-auto">
          <div className="relative flex-grow md:flex-grow-0 md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input 
              type="text"
              placeholder="Search interviews..."
              className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button 
            className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
            onClick={() => {}}
          >
            <Plus className="w-4 h-4 mr-1" />
            <span className="hidden md:inline">New</span>
          </button>
          <button 
            className={`flex items-center ${showFilters ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'} px-4 py-2 rounded-lg transition`}
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="w-4 h-4 mr-1" />
            <span className="hidden md:inline">Filters</span>
          </button>
        </div>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="bg-white p-4 rounded-lg shadow animate-fadeIn">
          <div className="flex flex-wrap gap-3">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">Status</label>
              <div className="flex space-x-2">
                {['All', 'Scheduled', 'Completed', 'Cancelled', 'Pending'].map(status => (
                  <button
                    key={status}
                    className={`px-3 py-1 rounded-full text-sm ${selectedStatus === status ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                    onClick={() => setSelectedStatus(status)}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filter indicator */}
      {hasActiveFilters && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-center justify-between">
          <div className="flex items-center">
            <Filter className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-blue-800">
              Showing filtered results {searchTerm && <span>for "{searchTerm}"</span>} 
              {selectedStatus !== 'All' && <span>{searchTerm ? ' with' : ''} status: {selectedStatus}</span>}
            </span>
          </div>
          <button 
            onClick={() => {
              setSearchTerm('');
              setSelectedStatus('All');
            }}
            className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
          >
            Clear all filters
            <XCircle className="w-4 h-4 ml-1" />
          </button>
        </div>
      )}

      {/* Empty State */}
      {Object.keys(groupedByMonth).length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 bg-white rounded-lg shadow">
          <Calendar className="w-16 h-16 text-gray-300 mb-4" />
          <h3 className="text-xl font-medium text-gray-800">No interviews found</h3>
          <p className="text-gray-500 mt-2">Try adjusting your search or filters</p>
        </div>
      )}

      {/* Calendar Grid */}
      {Object.keys(groupedByMonth).map((month) => (
        <div key={month} className="bg-white rounded-lg shadow overflow-hidden">
          <div className={`p-4 ${monthColors[month] || 'bg-blue-50'} border-b border-gray-200`}>
            <div className="flex items-center">
              <Calendar className="w-5 h-5 text-gray-700 mr-2" />
              <h2 className="text-xl font-bold text-gray-800">{month}</h2>
              <span className="ml-2 text-sm text-gray-600 bg-white px-2 py-1 rounded-full">
                {Object.values(groupedByMonthAndDay[month]).flat().length} interviews
              </span>
            </div>
          </div>

          <div className="p-6">
            {Object.keys(groupedByMonthAndDay[month])
              .sort((a, b) => parseInt(a) - parseInt(b))
              .map(day => (
                <div key={`${month}-${day}`} className="mb-6 last:mb-0">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-2">
                      {day}
                    </div>
                    <h3 className="text-lg font-medium text-gray-800">
                      {new Date(new Date().getFullYear(), months.indexOf(month), day).toLocaleDateString(undefined, { weekday: 'long' })}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pl-10">
                    {groupedByMonthAndDay[month][day].map((interview) => (
                      <div
                        key={interview.id}
                        className={`p-4 bg-white rounded-lg border ${getStatusColor(interview.status)} hover:shadow-md transition cursor-pointer relative`}
                        onClick={() => onClickInterview(interview)}
                      >
                        {/* Time indicator */}
                        <div className="absolute -left-10 top-4 flex flex-col items-center">
                          <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                          <div className="text-xs font-medium text-gray-600 mt-1 transform -rotate-90">
                            {interview.time}
                          </div>
                        </div>

                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-1">{interview.candidate}</h3>
                            <div className="flex items-center">
                              <Briefcase className="w-3 h-3 text-gray-500 mr-1" />
                              <p className="text-sm text-gray-600">{interview.role}</p>
                            </div>
                          </div>
                          <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(interview.status)}`}>
                            {interview.status}
                          </span>
                        </div>
                        
                        <div className="mt-3 space-y-2">
                          <div className="flex items-center text-gray-600">
                            <MapPin className="w-4 h-4 mr-1 text-gray-500" />
                            <span className="text-sm truncate">{interview.location}</span>
                          </div>
                          
                          {interview.interviewers && (
                            <div className="flex items-center text-gray-600">
                              <User className="w-4 h-4 mr-1 text-gray-500" />
                              <span className="text-sm truncate">{interview.interviewers}</span>
                            </div>
                          )}
                        </div>

                        {interview.notes && (
                          <div className="mt-3 p-2 bg-gray-50 rounded text-xs text-gray-700 max-h-12 overflow-hidden">
                            <MessageSquare className="w-3 h-3 inline mr-1 text-gray-500" />
                            {interview.notes}
                          </div>
                        )}
                        
                        <div className="mt-3 pt-3 border-t border-gray-100 flex justify-end">
                          <button className="text-xs text-blue-600 hover:text-blue-800 flex items-center">
                            View details
                            <ChevronRight className="w-3 h-3 ml-1" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CalendarView;