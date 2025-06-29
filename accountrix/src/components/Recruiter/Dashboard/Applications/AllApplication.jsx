import { useState, useEffect } from 'react';
import { Search, Filter, User, Briefcase, Star, Calendar, ChevronDown, MoreHorizontal, ArrowUpDown, ArrowLeft } from 'lucide-react';
import SearchBarFilter from './SearchBarFilter';
import Pagination from './Pagination';
import axios from 'axios';
import ApplicantProfile from '../../../../src/components/Student/ApplicantProfile';

export default function AllApplication({ jobId, onBack }) {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedApplicantId, setSelectedApplicantId] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchApplications = async () => {
      if (!jobId) {
        setLoading(false);
        return;
      }
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`http://localhost:5000/applications/job/${jobId}`);
        setApplications(response.data);
      } catch (err) {
        console.error('Error fetching applications:', err);
        setError('Failed to fetch applications.');
        setApplications([]);
      } finally {
        setLoading(false);
      }
    };
    fetchApplications();
  }, [jobId]);

  const statusColors = {
    "pending": "bg-blue-100 text-blue-800",
    "reviewed": "bg-purple-100 text-purple-800",
    "accepted": "bg-green-100 text-green-800",
    "rejected": "bg-red-100 text-red-800",
    "withdrawn": "bg-gray-100 text-gray-800"
  };

  const filters = ['All', 'pending', 'reviewed', 'accepted', 'rejected', 'withdrawn'];

  const changeStatus = async (id, newStatus) => {
    try {
      await axios.put(`http://localhost:5000/applications/${id}/status`, { status: newStatus });
      setApplications(applications.map(app =>
        app._id === id ? { ...app, status: newStatus } : app
      ));
    } catch (err) {
      console.error('Error updating application status:', err);
      alert('Failed to update application status.');
    }
  };

  const toggleExpand = (id) => {
    setApplications(applications.map(app =>
      app._id === id ? { ...app, expanded: !app.expanded } : app
    ));
  };

  const filteredApplications = applications.filter(app => {
    const matchesFilter = activeFilter === 'All' || app.status === activeFilter;
    const matchesSearch = app.applicant?.fullName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          app.job?.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          app.message?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading applications...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 mt-8">{error}</div>;
  }

  return (
    <div className=" max-h-[calc(100vh-66px)] overflow-y-auto   bg-gray-50 flex flex-col">
      {/* Header - Fixed at top */}
      <header className="bg-white shadow  top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            {onBack && (
              <button
                onClick={onBack}
                className="mr-4 p-2 rounded-full hover:bg-gray-200"
                title="Back to Job List"
              >
                <ArrowLeft size={24} />
              </button>
            )}
            <h1 className="text-2xl font-bold text-gray-900">Applications for Job ID: {jobId}</h1>
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md font-medium flex items-center gap-2">
            <User size={18} />
            <span>Add Candidate</span>
          </button>
        </div>
      </header>

      {/* Main Content - With proper height management */}

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6 sm:px-6 lg:px-8 flex flex-col">
      {/* Search Bar and Filter */}
        <SearchBarFilter filters={filters} setActiveFilter={ setActiveFilter} activeFilter={activeFilter} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />


        {/* Applications List - Scrollable container with fixed height */}
        <div className="  max-h-[calc(100vh-345px)]  rounded-lg shadow flex-1 flex flex-col overflow-y-auto">
          {/* Table Header - Sticky within scrollable area */}
          <div className="border-b  border-gray-200 bg-gray-50 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center sticky top-0 z-10">
            <div className="w-8"></div>
            <div className="w-1/4 flex items-center gap-1">
              <span>Candidate</span>
              <ArrowUpDown size={14} className="ml-1" />
            </div>
            <div className="w-1/5 lg:flex items-center gap-1 hidden">
              <span>Position</span>
              <ArrowUpDown size={14} className="ml-1" />
            </div>
            <div className="w-1/6 lg:flex items-center gap-1 hidden">
              <span>Rating</span>
              <ArrowUpDown size={14} className="ml-1" />
            </div>
            <div className="w-1/6 flex items-center gap-1">
              <span>Status</span>
              <ArrowUpDown size={14} className="ml-1" />
            </div>
            <div className="w-1/5 lg:flex items-center gap-1 hidden">
              <span>Applied</span>
              <ArrowUpDown size={14} className="ml-1" />
            </div>
            <div className="w-8"></div>
          </div>

          {/* Scrollable content area */}
          <div className="overflow-y-auto" style={{ maxHeight: "calc(100vh - 265px)" }}>
            <div className="divide-y  divide-gray-200 ">
              {filteredApplications.length > 0 ? (
                filteredApplications.map(app => (
                  <div key={app._id} className="bg-white">
                    {/* Main candidate row */}
                    <div className="px-6 py-4 flex items-center hover:bg-gray-50 cursor-pointer" onClick={() => toggleExpand(app._id)}>
                      <div className="w-8">
                        <ChevronDown size={20} className={`text-gray-400 transform transition-transform ${app.expanded ? 'rotate-180' : ''}`} />
                      </div>
                      <div className="w-1/4 flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src={app.applicant?.profilePicture || `https://ui-avatars.com/api/?name=${app.applicant?.fullName}&background=random`} alt={app.applicant?.fullName} />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{app.applicant?.fullName}</div>
                          <div className="text-sm text-gray-500">{app.applicant?.email}</div>
                        </div>
                      </div>
                      <div className="w-1/5 lg:block hidden">
                        <div className="text-sm text-gray-900">{app.job?.title}</div>
                        <div className="text-xs text-gray-500">{app.job?.companyName}</div>
                      </div>
                      <div className="w-1/6 lg:flex hidden items-center">
                        <div className="flex items-center">
                          <Star size={16} className="text-yellow-400 fill-current" />
                          <span className="ml-1 text-sm text-gray-700">N/A</span>
                        </div>
                      </div>
                      <div className="w-1/6">
                        <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${statusColors[app.status]}`}>
                          {app.status}
                        </span>
                      </div>
                      <div className="w-1/5 lg:block hidden text-sm text-gray-500">
                        {new Date(app.appliedDate).toLocaleDateString()}
                      </div>
                      <div className="w-8">
                        <MoreHorizontal size={20} className="text-gray-400" />
                      </div>
                    </div>

                    {/* Expanded details row */}
                    {app.expanded && (
                      <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="font-medium text-gray-900">Applicant Message:</p>
                            <p className="text-gray-700 mt-1">{app.message || 'No message provided.'}</p>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">Contact Info:</p>
                            <p className="text-gray-700 mt-1">Email: {app.applicant?.email}</p>
                            <p className="text-gray-700">Phone: {app.applicant?.phone || 'N/A'}</p>
                          </div>
                        </div>
                        <div className="mt-4 flex space-x-3">
                          <button
                            onClick={() => setSelectedApplicantId(app.applicant._id)}
                            className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            <User size={14} className="mr-1.5" />
                            View Profile
                          </button>
                          <button
                            onClick={() => console.log('Send Message', app.applicant._id)}
                            className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            <MessageSquare size={14} className="mr-1.5" />
                            Send Message
                          </button>
                          <select
                            value={app.status}
                            onChange={(e) => changeStatus(app._id, e.target.value)}
                            className="ml-auto block w-auto pl-3 pr-10 py-1.5 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                          >
                            <option value="pending">Pending</option>
                            <option value="reviewed">Reviewed</option>
                            <option value="accepted">Accepted</option>
                            <option value="rejected">Rejected</option>
                            <option value="withdrawn">Withdrawn</option>
                          </select>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">
                  No applications found for this job.
                </div>
              )}
                      <div className="w-8 flex justify-end">
                        <button className="text-gray-400 hover:text-gray-500">
                          <MoreHorizontal size={20} />
                        </button>
                      </div>
                    </div>

                    {/* Expanded details */}
                    {candidate.expanded && (
                      <div className="px-6 py-4 bg-blue-200 border-t border-gray-100">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="space-y-4">
                            <h3 className="text-lg font-medium text-gray-900">Contact Information</h3>
                            <div>
                              <p className="text-sm text-gray-500">Email</p>
                              <p className="text-sm font-medium text-gray-900">{candidate.email}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Phone</p>
                              <p className="text-sm font-medium text-gray-900">{candidate.phone}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Education</p>
                              <p className="text-sm font-medium text-gray-900">{candidate.education}</p>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <h3 className="text-lg font-medium text-gray-900">Skills</h3>
                            <div className="flex flex-wrap gap-2">
                              {candidate.skills.map((skill, index) => (
                                <span key={index} className="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <h3 className="text-lg font-medium text-gray-900">Application Status</h3>
                            <div className="flex flex-col gap-2">
                              <p className="text-sm text-gray-500">Current Status</p>
                              <div className="flex flex-wrap gap-2">
                                {["New", "In Review", "Interview", "Shortlisted", "Rejected"].map((status) => (
                                  <button
                                    key={status}
                                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                                      candidate.status === status
                                        ? statusColors[status]
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      changeStatus(candidate.id, status);
                                    }}
                                  >
                                    {status}
                                  </button>
                                ))}
                              </div>
                            </div>
                            <div className="flex items-center space-x-2 mt-4">
                              <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded">
                                Schedule Interview
                              </button>
                              <button className="bg-white border border-gray-300 text-gray-700 text-sm px-4 py-2 rounded hover:bg-gray-50">
                                Download Resume
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="px-6 py-12 text-center">
                  <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
                    <User size={36} className="text-gray-400" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">No candidates found</h3>
                  <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Pagination - Fixed at bottom */}
      <Pagination filteredApplications={filteredApplications} applications={applications} />

      </main>

      {/* Applicant Profile Modal/View */}
      {selectedApplicantId && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <ApplicantProfile
              userId={selectedApplicantId}
              onBack={() => setSelectedApplicantId(null)}
            />
          </div>
        </div>
      )}

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}