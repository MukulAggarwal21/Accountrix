import { useState } from 'react';
import {

  BriefcaseBusiness,
  Users,
  Calendar,
  MessageSquare,
  BarChart3,
  Settings,
  X,
  User,
  Star,

} from 'lucide-react';

// import { useNavigate } from 'react-router-dom';
import MainDashboard from './MainDashboard';
import Navigation from './Navigation';
import ViewJobs from './ViewJobs';
import JobList from './JobList';
import ComingSoon from './ComingSoon';
import InterviewSchedule from './Interview/InterviewSchedule';
import JobPosting from './JobPosting';
import AllApplication from './Applications/AllApplication';


export default function Dashboard() {
  // const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [step, setStep] = useState(1)

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
          <h1 className="text-2xl font-bold text-white">Accountrix</h1>
          <button
            className="absolute right-4 top-4 text-white lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

       
        <div className="flex-1 space-y-1 px-2 py-4">
          <div
            onClick={() => setStep(1)}
            className={`flex items-center rounded-lg px-4 py-3 text-sm font-medium cursor-pointer ${step === 1 ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-800'
              }`}
          >
            <BriefcaseBusiness className="mr-3" size={20} />
            <span>Dashboard</span>
          </div>

          <div
            onClick={() => setStep(2)}
            className={`flex items-center rounded-lg px-4 py-3 text-sm font-medium cursor-pointer ${step === 2 ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-800'
              }`}
          >
            <Users className="mr-3" size={20} />
            <span>Candidates</span>
          </div>

          <div
            onClick={() => setStep(3)}
            className={`flex items-center rounded-lg px-4 py-3 text-sm font-medium cursor-pointer ${step === 3 ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-800'
              }`}
          >
            <Calendar className="mr-3" size={20} />
            <span>Interviews</span>
          </div>

          <div
            onClick={() => setStep(4)}
            className={`flex items-center rounded-lg px-4 py-3 text-sm font-medium cursor-pointer ${step === 4 ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-800'
              }`}
          >
            <MessageSquare className="mr-3" size={20} />
            <span>Messages</span>
          </div>

          <div
            onClick={() => setStep(5)}
            className={`flex items-center rounded-lg px-4 py-3 text-sm font-medium cursor-pointer ${step === 5 ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-800'
              }`}
          >
            <BarChart3 className="mr-3" size={20} />
            <span>Jobs</span>
          </div>

          <div
            onClick={() => setStep(6)}
            className={`flex items-center rounded-lg px-4 py-3 text-sm font-medium cursor-pointer ${step === 6 ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-800'
              }`}
          >
            <Star className="mr-3" size={20} />
            <span>Blogs</span>
          </div>

          <div
            onClick={() => setStep(7)}
            className={`flex items-center rounded-lg px-4 py-3 text-sm font-medium cursor-pointer ${step === 7 ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-800'
              }`}
          >
            <Users className="mr-3" size={20} />
            <span>Profile</span>
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
        <Navigation setSidebarOpen={setSidebarOpen} />


        {/* Main Dashboard */}
        {step == 1 && <MainDashboard upcomingInterviews={upcomingInterviews} stats={stats} recentApplications={recentApplications} setStep={setStep} />}

        {/* <MainDashboard upcomingInterviews={upcomingInterviews} stats={stats} recentApplications={recentApplications} /> */}
        {step == 2 && <AllApplication/>}
        {step == 3 && <InterviewSchedule/>}
        {step == 4 && <ComingSoon />}

        {step == 5 && <JobList />}
        {step == 6 && <ComingSoon />}
        {step == 7 && <ComingSoon />}


        {step == 8 && <JobPosting setStep={setStep} step={step}/>}
      </div>
    </div>
  );
}

