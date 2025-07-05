import { useState } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  MessageSquare,
  User,
  Briefcase,
  Filter,
  Plus,
  Trash2,
  Search,
  Edit,
  ChevronRight,
  FileText,
} from 'lucide-react';

const ListView = ({ interviews, onClickInterview, onDeleteInterview }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('All');

  // Group interviews by date
  const groupedInterviews = interviews.reduce((groups, interview) => {
    const dateObj = new Date(interview.date);
    const date = dateObj.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
    });
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(interview);
    return groups;
  }, {});

  // Filter interviews based on search term and status
  const filteredDates = Object.keys(groupedInterviews).filter((date) => {
    return groupedInterviews[date].some((interview) => {
      const candidateName =
        typeof interview.candidate === 'string'
          ? interview.candidate
          : (interview.candidate?.fullName || '');
      const matchesSearch =
        candidateName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (interview.role || interview.job?.jobTitle || '').toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus =
        selectedStatus === 'All' || interview.status === selectedStatus;
      return matchesSearch && matchesStatus;
    });
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Scheduled':
        return 'bg-blue-100 text-blue-700';
      case 'Completed':
        return 'bg-green-100 text-green-700';
      case 'Cancelled':
        return 'bg-red-100 text-red-700';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-4 mx-auto max-h-[calc(100vh-200px)] overflow-y-auto">
      {/* Header and Search Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">List View</h2>
        <div className="flex space-x-2 w-full md:w-auto">
          <div className="relative flex-grow md:flex-grow-0 md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search candidates or roles..."
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
            <span>New</span>
          </button>
          <button
            className={`flex items-center ${
              showFilters ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'
            } px-4 py-2 rounded-lg transition`}
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
                {['All', 'Scheduled', 'Completed', 'Cancelled', 'Pending'].map((status) => (
                  <button
                    key={status}
                    className={`px-3 py-1 rounded-full text-sm ${
                      selectedStatus === status
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700'
                    }`}
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

      {/* Interview List */}
      <div className="space-y-6">
        {filteredDates.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 bg-white rounded-lg shadow">
            <FileText className="w-16 h-16 text-gray-300 mb-4" />
            <h3 className="text-xl font-medium text-gray-800">No interviews found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your search or filters</p>
          </div>
        )}

        {filteredDates.map((date) => (
          <div key={date} className="space-y-2">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">{date}</h3>
            </div>

            <div className="space-y-3">
              {groupedInterviews[date]
                .filter((interview) => {
                  const candidateName =
                    typeof interview.candidate === 'string'
                      ? interview.candidate
                      : (interview.candidate?.fullName || '');
                  const matchesSearch =
                    candidateName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    (interview.role || interview.job?.jobTitle || '').toLowerCase().includes(searchTerm.toLowerCase());
                  const matchesStatus =
                    selectedStatus === 'All' || interview.status === selectedStatus;
                  return matchesSearch && matchesStatus;
                })
                .map((interview) => (
                  <div
                    key={interview.id}
                    className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden border-l-4 border-blue-500"
                  >
                    <div className="flex flex-col md:flex-row">
                      {/* Time Column */}
                      <div className="bg-gray-50 p-4 flex flex-row md:flex-col items-center justify-center md:w-32">
                        <Clock className="w-5 h-5 text-gray-500 md:mb-2" />
                        <span className="ml-2 md:ml-0 text-gray-700 font-medium">
                          {interview.time}
                        </span>
                      </div>

                      {/* Main Content */}
                      <div className="flex-grow p-4" onClick={() => onClickInterview(interview)}>
                        <div className="flex justify-between items-start">
                          <div className="cursor-pointer">
                            <div className="flex items-center">
                              <h3 className="text-lg font-bold text-gray-900">{typeof interview.candidate === 'string' ? interview.candidate : (interview.candidate?.fullName || '')}</h3>
                              <span
                                className={`ml-2 text-xs px-2 py-1 rounded-full ${getStatusColor(
                                  interview.status
                                )}`}
                              >
                                {interview.status}
                              </span>
                            </div>

                            <div className="flex items-center mt-1">
                              <Briefcase className="w-4 h-4 text-gray-500 mr-1" />
                              <p className="text-gray-700">{interview.role || interview.job?.jobTitle || ''}</p>
                            </div>

                            <div className="flex flex-wrap mt-3 gap-y-2">
                              <div className="flex items-center text-gray-600 mr-4">
                                <MapPin className="w-4 h-4 mr-1" />
                                <span className="text-sm">{interview.location}</span>
                              </div>

                              {interview.interviewers && (
                                <div className="flex items-center text-gray-600">
                                  <User className="w-4 h-4 mr-1" />
                                  <span className="text-sm">{interview.interviewers}</span>
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="flex space-x-2">
                            <button
                              className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition"
                              onClick={(e) => {
                                e.stopPropagation();
                                // Handle edit function
                              }}
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onDeleteInterview(interview.id);
                              }}
                              className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        {interview.notes && (
                          <div className="mt-3 p-2 bg-gray-50 rounded text-sm text-gray-700 border-l-2 border-gray-300">
                            <MessageSquare className="w-3 h-3 inline mr-1" />
                            {interview.notes}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="px-4 py-2 bg-gray-50 flex justify-end">
                      <button
                        className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
                        onClick={() => onClickInterview(interview)}
                      >
                        <span>View details</span>
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListView;