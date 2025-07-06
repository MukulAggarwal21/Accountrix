import React from 'react';
import { Calendar, Filter, ChevronDown, Star } from 'lucide-react';
import { useDashboard } from './DashboardContext';

export default function MainDashboard({ setStep }) {
  const { dashboardData, loading, error } = useDashboard();

  if (loading) {
    return (
      <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
        <div className="flex items-center justify-center h-64">
          <div className="text-lg text-gray-600">Loading dashboard...</div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
        <div className="flex items-center justify-center h-64">
          <div className="text-lg text-red-600">{error}</div>
        </div>
      </main>
    );
  }

  // Prepare stats
  const stats = [
    { label: 'Active Jobs', value: dashboardData.activeJobs, change: '', positive: true },
    { label: 'Total Applicants', value: dashboardData.totalApplications, change: '', positive: true },
    { label: 'Interviews', value: dashboardData.interviewsCount, change: '', positive: true },
    { label: 'Hired', value: dashboardData.hiredCount, change: '', positive: true },
  ];

  // Transform recent applications for frontend
  const recentApplications = (dashboardData.recentApplications || []).map(app => ({
    id: app._id,
    name: app.applicant.fullName,
    role: app.job.jobTitle,
    company: app.job.companyName,
    experience: '5 years exp',
    rating: 4.5,
    status: app.status
  }));

  // Transform upcoming interviews for frontend
  const upcomingInterviews = (dashboardData.upcomingInterviews || []).map(interview => ({
    id: interview._id,
    name: interview.candidate.fullName,
    role: interview.job.jobTitle,
    time: interview.time,
    date: new Date(interview.date).toLocaleDateString()
  }));

  return (
    <>
      <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">Recruiter Dashboard</h2>
          <button onClick={() => setStep(8)} className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            + Post New Job
          </button>
        </div>
        {/* Stats */}
        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="overflow-hidden rounded-lg bg-white p-6 shadow">
              <div className="text-sm font-medium text-gray-500">{stat.label}</div>
              <div className="mt-2 flex items-baseline">
                <div className="text-3xl font-semibold text-gray-900">{stat.value}</div>
                <div className={`ml-2 text-xs font-medium ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>{stat.change}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Recent Applications */}
          <div className="col-span-2 rounded-lg bg-white p-6 shadow">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">Recent Applications</h3>
              <div className="flex items-center">
                <button className="flex items-center rounded-lg border border-gray-300 px-3 py-1 text-sm text-gray-600 hover:bg-gray-50">
                  <Filter size={16} className="mr-1" />
                  Filter
                  <ChevronDown size={16} className="ml-1" />
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="border-b text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    <th className="pb-3 pl-4 pr-3">S. No.</th>
                    <th className="pb-3 pl-4 pr-3">Candidate</th>
                    <th className="px-3 pb-3">Position</th>
                    <th className="px-3 pb-3">Rating</th>
                    <th className="px-3 pb-3">Status</th>
                    <th className="px-3 pb-3">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {recentApplications.map((applicant, idx) => (
                    <tr key={applicant.id} className="hover:bg-gray-50">
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 font-semibold text-gray-700">{idx + 1}</td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3">
                        <div className="flex items-center">
                          <div className="ml-0">
                            <div className="font-medium text-gray-900">{applicant.name}</div>
                            <div className="text-xs text-gray-500">{applicant.experience} exp</div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4">
                        <div className="text-sm text-gray-900">{applicant.role}</div>
                        <div className="text-xs text-gray-500">{applicant.company}</div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4">
                        <div className="flex items-center">
                          <Star size={16} className="text-yellow-400" fill="currentColor" />
                          <span className="ml-1 text-sm text-gray-700">{applicant.rating}</span>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4">
                        <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${applicant.status === 'review' ? 'bg-blue-100 text-blue-800' : applicant.status === 'interview' ? 'bg-green-100 text-green-800' : 'bg-purple-100 text-purple-800'}`}>
                          {applicant.status === 'review' ? 'In Review' : applicant.status === 'interview' ? 'Interview' : 'Shortlisted'}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4">
                        <button className="text-sm font-medium text-indigo-600 hover:text-indigo-900">View</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-center">
              <button onClick={() => setStep(2)} className="text-sm font-medium text-indigo-600 hover:text-indigo-900">View All Applications</button>
            </div>
          </div>
          {/* Upcoming Interviews */}
          <div className="rounded-lg bg-white p-6 shadow">
            <h3 className="mb-6 text-lg font-medium text-gray-900">Upcoming Interviews</h3>
            <div className="space-y-4">
              {upcomingInterviews.map((interview) => (
                <div key={interview.id} className="flex items-center rounded-lg border border-gray-200 p-4">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                    <Calendar size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{interview.name}</div>
                    <div className="text-sm text-gray-500">{interview.role}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">{interview.time}</div>
                    <div className="text-xs text-gray-500">{interview.date}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <button onClick={() => { setStep(3); }} className="w-full rounded-lg border border-indigo-600 px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50">View Full Schedule</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
