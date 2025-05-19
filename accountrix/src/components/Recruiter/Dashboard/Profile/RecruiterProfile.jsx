import { useState, useEffect } from 'react';
import axios from 'axios';
import { User, Building, Mail, Globe, MapPin, Users, Award, Phone, Edit, Clock, Calendar, Briefcase, Check } from 'lucide-react';
import ProfileStatsCard from './ProfileStatsCard';
import MainContent from './MainContent';
import { ToastContainer, toast } from 'react-toastify';

export default function RecruiterProfile({ companyId, recruiterId }) {
  const [activeTab, setActiveTab] = useState('profile');

  const [companyData, setCompanyData] = useState(null);

  useEffect(() => {
    if (!companyId) return;
    axios.get(`http://localhost:5000/company/${companyId}`)
      .then(res => setCompanyData(res.data))
      .catch(err => console.error('Error fetching company:', err));
  }, [companyId]);

  if (!companyData) {
    return <div>Loading...</div>;
  }

  const handleDeleteCompany = async () => {
    if (!window.confirm("Are you sure you want to delete this company? This action cannot be undone.")) return;
    try {
      await axios.delete(`http://localhost:5000/company/${companyId}`);
      toast.success("Company deleted successfully.");
      setTimeout(() => {
        window.location.href = "/"; // or navigate to login/home
      }, 2000);
    } catch (error) {
      toast.error("Failed to delete company: " + (error.response?.data?.message || error.message));
    }
  };
  // Sample data - in a real app this would come from API/props
  const profileData = {
    name: "Sarah Johnson",
    role: "Senior Recruiter",
    company: "TechTalent Solutions",
    email: "sarah.johnson@techtalent.com",
    phone: "(555) 123-4567",
    website: "www.techtalent.com",
    location: "San Francisco, CA",
    market: "Technology",
    employees: "201-500",
    pitch: "Connecting top tech talent with innovative companies since 2018",
    planType: "Professional",
    planFeatures: ["25 job postings", "AI-powered matching", "Advanced analytics"],
    activeJobs: 14,
    candidatesReviewed: 287,
    hiresMade: 42,
    teamMembers: [
      { name: "Alex Rivera", role: "HR Manager", email: "alex@techtalent.com" },
      { name: "Jamie Lee", role: "Hiring Manager", email: "jamie@techtalent.com" },
      { name: "Taylor Smith", role: "Recruiter", email: "taylor@techtalent.com" }
    ],
    colors: {
      primary: "#3366FF",
      secondary: "#F0F4FF"
    },
    activity: [
      { action: "Posted new job", details: "Senior Frontend Developer", time: "Today, 10:45 AM" },
      { action: "Reviewed candidate", details: "Michael Chen for UX Designer", time: "Yesterday, 3:20 PM" },
      { action: "Scheduled interview", details: "Sarah Miller for Product Manager", time: "Apr 12, 2:00 PM" },
      { action: "Updated job description", details: "Data Scientist position", time: "Apr 10, 11:30 AM" }
    ]
  };

  return (
    <div className="bg-gray-50  p-6 overflow-y-auto">
      {/* Main Content */}
      <div className="max-w-7xl  mx-auto">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow overflow-hidden mb-6">
          <div
            className="h-32 w-full"
            style={{ backgroundColor: companyData.companyColors.primary }}
          />
          <div className="px-6 py-4 flex flex-col md:flex-row items-start md:items-end relative">
            <div className="absolute -top-16 left-6 md:relative md:-mt-16 md:left-0">
              <div className="h-32 w-32 rounded-xl bg-white p-1 shadow-lg">
                <div className="h-full w-full rounded-lg bg-blue-100 flex items-center justify-center">
                  <span className="text-5xl font-bold text-blue-600">{companyData.companyName.charAt(0).toUpperCase()}</span>
                </div>
              </div>
            </div>
            <div className="mt-20 md:mt-0 md:ml-6 flex-grow">
              <h1 className="text-2xl font-bold text-gray-900">{companyData.companyName}</h1>
              <p className="text-gray-600">{companyData.pitch}</p>
            </div>
            <div className="mt-4 md:mt-0">
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Edit size={18} className="mr-2" />
                Edit Profile
              </button>
            </div>
          </div>
          <div className="border-t border-gray-200">
            <nav className="flex overflow-x-auto">
              <button
                onClick={() => setActiveTab('profile')}
                className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${activeTab === 'profile'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
                  }`}
              >
                Profile
              </button>
              <button
                onClick={() => setActiveTab('team')}
                className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${activeTab === 'team'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
                  }`}
              >
                Team
              </button>
              <button
                onClick={() => setActiveTab('activity')}
                className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${activeTab === 'activity'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
                  }`}
              >
                Activity
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${activeTab === 'settings'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
                  }`}
              >
                Settings
              </button>
            </nav>
          </div>
        </div>

        {/* Profile Stats Cards */}

        <ProfileStatsCard profileData={profileData} companyId={companyId} recruiterId={recruiterId} />

        {/* Main Content Area */}
        {activeTab === 'profile' && (
          <MainContent profileData={profileData} companyData={companyData} />
        )}
        {/* Team Tab */}
        {activeTab === 'team' && (
          <div className="bg-white rounded-xl shadow">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-lg font-medium text-gray-900">Team Members</h2>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Invite Team Member
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Role
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {companyData.teamMembers.map((member, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-medium">
                            {member.name.charAt(0)}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{member.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{member.role.toUpperCase()}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{member.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Active
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900">Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Activity Tab */}
        {activeTab === 'activity' && (
          <div className="bg-white rounded-xl shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
            </div>
            <div className="p-6">
              <div className="flow-root">
                <ul className="divide-y divide-gray-200">
                  {profileData.activity.map((item, index) => (
                    <li key={index} className="py-4">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                            {item.action.includes("Posted") && <Briefcase size={20} className="text-blue-600" />}
                            {item.action.includes("Reviewed") && <Users size={20} className="text-blue-600" />}
                            {item.action.includes("Scheduled") && <Calendar size={20} className="text-blue-600" />}
                            {item.action.includes("Updated") && <Edit size={20} className="text-blue-600" />}
                          </div>
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-gray-900">
                            {item.action}
                          </p>
                          <p className="text-sm text-gray-500">
                            {item.details}
                          </p>
                        </div>
                        <div className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500 flex items-center">
                          <Clock size={14} className="mr-1" />
                          {item.time}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 text-center">
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  View All Activity
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-medium text-gray-900">Account Settings</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Email Notifications</h3>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="new-applications" name="new-applications" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" defaultChecked />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="new-applications" className="font-medium text-gray-700">New applications</label>
                            <p className="text-gray-500">Get notified when candidates apply to your job postings</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="new-messages" name="new-messages" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" defaultChecked />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="new-messages" className="font-medium text-gray-700">New messages</label>
                            <p className="text-gray-500">Get notified when you receive messages from candidates</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="market-updates" name="market-updates" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="market-updates" className="font-medium text-gray-700">Market updates</label>
                            <p className="text-gray-500">Receive updates about job market trends and insights</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-5 border-t border-gray-200">
                      <h3 className="text-sm font-medium text-gray-900">Privacy Settings</h3>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="profile-visibility" name="profile-visibility" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" defaultChecked />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="profile-visibility" className="font-medium text-gray-700">Public company profile</label>
                            <p className="text-gray-500">Allow job seekers to view your company profile</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="analytics-consent" name="analytics-consent" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" defaultChecked />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="analytics-consent" className="font-medium text-gray-700">Analytics consent</label>
                            <p className="text-gray-500">Allow us to collect usage data to improve our services</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-medium text-gray-900">Security</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-left">
                      Change Password
                    </button>
                    <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-left">
                      Enable Two-Factor Authentication
                    </button>

                  </div>


                  <div onClick={handleDeleteCompany}

                    className="mt-6 pt-6 border-t border-gray-200">
                    <ToastContainer />
                    <h3 className="text-sm font-medium text-gray-900 mb-4">Account Actions</h3>
                    <button className="w-full px-4 py-2 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors text-left">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div >
  );
}