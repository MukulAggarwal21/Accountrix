import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Eye, Calendar, Mail, User, MessageSquare } from 'lucide-react';
import { scheduleInterview } from '../../../../lib/utils';

export default function JobApplicationsPage({ jobId: propJobId }) {
  const params = useParams();
  const jobId = propJobId || params.jobId;
  const [applications, setApplications] = useState([]);
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [scheduledInterviews, setScheduledInterviews] = useState([]); // [{applicantId, jobId}]
  const [modalOpen, setModalOpen] = useState(false);
  const [modalApp, setModalApp] = useState(null);
  const [interviewDate, setInterviewDate] = useState('');
  const [interviewTime, setInterviewTime] = useState('');
  const [scheduling, setScheduling] = useState(false);
  const recruiterId = localStorage.getItem('recruiterId');

  useEffect(() => {
    setLoading(true);
    Promise.all([
      axios.get(`http://localhost:5000/applications/job/${jobId}`),
      axios.get(`http://localhost:5000/jobs/${jobId}`)
    ])
      .then(([appsRes, jobRes]) => {
        setApplications(appsRes.data);
        setJob(jobRes.data);
        setLoading(false);
      })
      .catch(() => {
        setApplications([]);
        setJob(null);
        setError('Failed to load applications or job info.');
        setLoading(false);
      });
  }, [jobId]);

  // Fetch scheduled interviews for this job (for button state)
  useEffect(() => {
    if (!recruiterId) return;
    axios.get(`http://localhost:5000/interviews/byRecruiter/${recruiterId}`)
      .then(res => {
        setScheduledInterviews(res.data.map(i => ({ applicantId: i.candidate?._id, jobId: i.job?._id })));
      })
      .catch(() => setScheduledInterviews([]));
  }, [recruiterId, jobId, scheduling]);

  const isScheduled = (applicantId) => {
    return scheduledInterviews.some(i => i.applicantId === applicantId && i.jobId === jobId);
  };

  const openModal = (app) => {
    setModalApp(app);
    setInterviewDate('');
    setInterviewTime('');
    setModalOpen(true);
  };

  const handleSchedule = async () => {
    if (!modalApp || !interviewDate || !interviewTime) return;
    setScheduling(true);
    try {
      await scheduleInterview({
        candidate: modalApp.applicant._id,
        job: jobId,
        recruiter: recruiterId,
        date: interviewDate,
        time: interviewTime
      });
      setModalOpen(false);
      setModalApp(null);
      setInterviewDate('');
      setInterviewTime('');
    } catch (err) {
      alert('Failed to schedule interview.');
    } finally {
      setScheduling(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Unknown';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="w-full flex-1 bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-600 mx-auto mb-4"></div>
          <p className="text-slate-600 text-lg">Loading applications...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full flex-1 bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-lg font-medium">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header Section */}
        {job && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                  Applications for {job.jobTitle}
                </h1>
                <div className="flex items-center text-gray-600 space-x-4">
                  <span className="font-medium">{job.companyName}</span>
                  <span className="text-gray-400">•</span>
                  <span>{job.jobLocation}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500 mb-1">Total Applications</div>
                <div className="text-3xl font-bold text-slate-700">{applications.length}</div>
              </div>
            </div>
          </div>
        )}

        {/* Applications Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {applications.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-2">
                <MessageSquare className="h-12 w-12 mx-auto" />
              </div>
              <p className="text-gray-500 text-lg">No applications received yet</p>
              <p className="text-gray-400 text-sm mt-1">Applications will appear here once candidates apply</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>Candidate</span>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4" />
                        <span>Contact</span>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      <div className="flex items-center space-x-2">
                        <MessageSquare className="h-4 w-4" />
                        <span>Message</span>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>Applied</span>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Action
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Interview
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {applications.map((app, index) => (
                    <tr 
                      key={app._id} 
                      className={`hover:bg-gray-50 transition-colors duration-150 ${
                        index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'
                      }`}
                    >
                      <td className="px-6 py-5">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center mr-3">
                            <span className="text-slate-600 font-medium text-sm">
                              {(app.applicant?.fullName || 'U').charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {app.applicant?.fullName || 'Unknown'}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="text-sm text-gray-700">
                          {app.applicant?.email}
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="max-w-xs">
                          {app.message ? (
                            <div className="text-sm text-gray-700 line-clamp-3 leading-relaxed">
                              {app.message}
                            </div>
                          ) : (
                            <span className="text-sm text-gray-400 italic">No message provided</span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="text-sm text-gray-600">
                          {formatDate(app.appliedDate || app.timestamp)}
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <Link
                          to={`/student-profile/${app.applicant?._id}`}
                          className="inline-flex items-center space-x-2 bg-slate-600 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150 shadow-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Eye className="h-4 w-4" />
                          <span>View Profile</span>
                        </Link>
                      </td>
                      <td className="px-6 py-5">
                        {isScheduled(app.applicant?._id) ? (
                          <button className="inline-flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium cursor-not-allowed" disabled>
                            Scheduled
                          </button>
                        ) : (
                          <button
                            className="inline-flex items-center space-x-2 bg-slate-600 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150 shadow-sm"
                            onClick={() => openModal(app)}
                          >
                            Schedule Interview
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Footer Stats */}
        {applications.length > 0 && (
          <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>Showing {applications.length} application{applications.length !== 1 ? 's' : ''}</span>
              <span>Last updated: {new Date().toLocaleDateString()}</span>
            </div>
          </div>
        )}
      </div>

      {/* Schedule Interview Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full relative">
            <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl font-bold" onClick={() => setModalOpen(false)}>&times;</button>
            <h2 className="text-xl font-semibold mb-4">Schedule Interview</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={interviewDate}
                onChange={e => setInterviewDate(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
              <input
                type="time"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={interviewTime}
                onChange={e => setInterviewTime(e.target.value)}
              />
            </div>
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold text-lg disabled:opacity-50"
              onClick={handleSchedule}
              disabled={!interviewDate || !interviewTime || scheduling}
            >
              {scheduling ? 'Scheduling...' : 'Schedule Interview'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}