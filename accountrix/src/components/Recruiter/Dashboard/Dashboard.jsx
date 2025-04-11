import { useState } from 'react';
import {
  Search,
  BriefcaseBusiness,
  Users,
  Calendar,
  MessageSquare,
  BarChart3,
  Settings,
  BellRing,
  Menu,
  X,
  User,
  Filter,
  ChevronDown,
  Star
} from 'lucide-react';

import { useNavigate } from 'react-router-dom';



export default function Dashboard() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Sample data
  const stats = [
    { label: 'Active Jobs', value: '24', change: '+3', positive: true },
    { label: 'Total Applicants', value: '642', change: '+28', positive: true },
    { label: 'Interviews', value: '38', change: '-5', positive: false },
    { label: 'Hired', value: '12', change: '+2', positive: true },
  ];

  const recentApplications = [
    { id: 1, name: 'Sarah Johnson', role: 'Senior Frontend Developer', company: 'Tech Solutions Inc', experience: '5 years', rating: 4.8, status: 'review' },
    { id: 2, name: 'Michael Chen', role: 'Product Manager', company: 'Global Innovations', experience: '7 years', rating: 4.5, status: 'interview' },
    { id: 3, name: 'Priya Sharma', role: 'UX Designer', company: 'Creative Minds', experience: '4 years', rating: 4.6, status: 'review' },
    { id: 4, name: 'James Wilson', role: 'Backend Developer', company: 'Data Systems', experience: '6 years', rating: 4.2, status: 'shortlisted' },
  ];

  const upcomingInterviews = [
    { id: 1, name: 'Michael Chen', role: 'Product Manager', time: '10:00 AM', date: 'Today' },
    { id: 2, name: 'Alex Rodriguez', role: 'DevOps Engineer', time: '2:30 PM', date: 'Today' },
    { id: 3, name: 'Emily Wong', role: 'Marketing Specialist', time: '11:15 AM', date: 'Tomorrow' }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-indigo-700 transition-all duration-300 lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
        <div className="flex h-16 items-center justify-center">
          <h1 className="text-2xl font-bold text-white">TalentHub</h1>
          <button
            className="absolute right-4 top-4 text-white lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 space-y-1 px-2 py-4">
          <div className="flex items-center rounded-lg bg-indigo-800 px-4 py-3 text-white">
            <BriefcaseBusiness className="mr-3" size={20} />
            <span className="text-sm font-medium">Dashboard</span>
          </div>

          <div className="flex items-center rounded-lg px-4 py-3 text-indigo-100 hover:bg-indigo-800">
            <Users className="mr-3" size={20} />
            <span className="text-sm font-medium">Candidates</span>
          </div>

          <div className="flex items-center rounded-lg px-4 py-3 text-indigo-100 hover:bg-indigo-800">
            <Calendar className="mr-3" size={20} />
            <span className="text-sm font-medium">Interviews</span>
          </div>

          <div className="flex items-center rounded-lg px-4 py-3 text-indigo-100 hover:bg-indigo-800">
            <MessageSquare className="mr-3" size={20} />
            <span className="text-sm font-medium">Messages</span>
          </div>

          <div className="flex items-center rounded-lg px-4 py-3 text-indigo-100 hover:bg-indigo-800">
            <BarChart3 className="mr-3" size={20} />
            <span className="text-sm font-medium">Analytics</span>
          </div>

          <div className="flex items-center rounded-lg px-4 py-3 text-indigo-100 hover:bg-indigo-800">
            <Settings className="mr-3" size={20} />
            <span className="text-sm font-medium">Settings</span>
          </div>
        </div>

        <div className="flex items-center border-t border-indigo-800 p-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white">
            <User size={16} />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-white">Alex Morgan</p>
            <p className="text-xs text-indigo-200">Senior Recruiter</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="flex h-16 items-center justify-between border-b bg-white px-6">
          <div className="flex items-center">
            <button
              className="mr-4 text-gray-600 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search candidates, jobs..."
                className="rounded-lg border border-gray-300 pl-10 pr-4 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="relative text-gray-600 hover:text-gray-900">
              <BellRing size={22} />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                3
              </span>
            </button>
            <div className="h-8 w-8 overflow-hidden rounded-full bg-gray-200">
              <img
                src="/api/placeholder/40/40"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </header>

        {/* Main Dashboard */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">Recruiter Dashboard</h2>
            <button onClick={() => {
              navigate('/jobposting')
            }} className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
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
                  <div className={`ml-2 text-xs font-medium ${stat.positive ? 'text-green-600' : 'text-red-600'
                    }`}>
                    {stat.change}
                  </div>
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
                      <th className="pb-3 pl-4 pr-3">Candidate</th>
                      <th className="px-3 pb-3">Position</th>
                      <th className="px-3 pb-3">Rating</th>
                      <th className="px-3 pb-3">Status</th>
                      <th className="px-3 pb-3">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {recentApplications.map((applicant) => (
                      <tr key={applicant.id} className="hover:bg-gray-50">
                        <td className="whitespace-nowrap py-4 pl-4 pr-3">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-200">
                              <img
                                src="/api/placeholder/40/40"
                                alt={applicant.name}
                                className="h-10 w-10 rounded-full"
                              />
                            </div>
                            <div className="ml-4">
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
                          <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${applicant.status === 'review'
                              ? 'bg-blue-100 text-blue-800'
                              : applicant.status === 'interview'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-purple-100 text-purple-800'
                            }`}>
                            {applicant.status === 'review'
                              ? 'In Review'
                              : applicant.status === 'interview'
                                ? 'Interview'
                                : 'Shortlisted'}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4">
                          <button className="text-sm font-medium text-indigo-600 hover:text-indigo-900">
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 text-center">
                <button className="text-sm font-medium text-indigo-600 hover:text-indigo-900">
                  View All Applications
                </button>
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
                <button className="w-full rounded-lg border border-indigo-600 px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50">
                  View Calendar
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

