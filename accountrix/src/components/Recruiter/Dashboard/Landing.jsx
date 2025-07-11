import { useState, useEffect, useRef } from 'react';
import JobApplicationsPage from '../Dashboard/PostedJobs/JobApplicationsPage'

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
import JobList from './PostedJobs/JobList';
import ComingSoon from './ComingSoon';
import InterviewSchedule from './Interview/InterviewSchedule';
import JobPosting from './JobPosting';
import AllApplication from './Applications/AllApplication';
import RecruiterProfile from './Profile/RecruiterProfile';
import RecruiterBlogDashboard from './Blog/Blog';
import axios from 'axios';
import { DashboardProvider } from './DashboardContext.jsx';
import Candidates from './Candidates';
// import { response } from 'express';

export default function Dashboard() {
  // const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [jobs, setJobs] = useState([]);
  const [change, setChange] = useState(0);
  const [positive, setPositive] = useState(true);

  const [company, setCompany] = useState(null);
  const companyId = localStorage.getItem('companyId');
  const recruiterId = localStorage.getItem('recruiterId');

  const [selectedJobId, setSelectedJobId] = useState(null);

  // Function to fetch and set companyId if missing
  const fetchAndSetCompanyId = async () => {
    const currentCompanyId = localStorage.getItem('companyId');
    const currentRecruiterId = localStorage.getItem('recruiterId');
    
    // If companyId is missing but recruiterId exists, fetch company data
    if (!currentCompanyId && currentRecruiterId) {
      try {
        const response = await axios.get(`http://localhost:5000/company/byRecruiter/${currentRecruiterId}`);
        if (response.data && response.data._id) {
          localStorage.setItem('companyId', response.data._id);
          setCompany(response.data);
          console.log('CompanyId fetched and set:', response.data._id);
        }
      } catch (error) {
        console.error('Error fetching company data:', error);
      }
    }
  };

  // Fetch company data and set companyId if missing
  useEffect(() => {
    fetchAndSetCompanyId();
  }, []);

  // Fetch company data for display
  useEffect(() => {
    const recruiterId = localStorage.getItem('recruiterId');
    if (recruiterId) {
      axios.get(`http://localhost:5000/company/byRecruiter/${recruiterId}`)
        .then(res => {
          setCompany(res.data);
          if (res.data && res.data._id) {
            localStorage.setItem('companyId', res.data._id);
          }
        })
        .catch(err => {
          setCompany(null);
          console.error('Error fetching company info:', err);
        });
    }
  }, []);

  const prevJobCountRef = useRef(0); // To keep previous jobs count

  const job = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/jobs/byCompanyAndRecruiter/${companyId}/${recruiterId}`);
      const currentJobs = response.data;
      const currentJobCount = currentJobs.length;
      const prevJobCount = prevJobCountRef.current;

      if (prevJobCount !== null) { // Compare only after first fetch
        const jobDifference = currentJobCount - prevJobCount;

        if (jobDifference !== 0) {
          setChange(Math.abs(jobDifference));
          setPositive(jobDifference > 0);
        }
        // If no change, do NOT update 'change' or 'positive' state
      }

      setJobs(currentJobs);
      prevJobCountRef.current = currentJobCount; // update previous after comparison

    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  useEffect(() => {
    job(); // First fetch

    const interval = setInterval(() => {
      job(); // Re-fetch every 5 seconds
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <DashboardProvider>
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
            <h1 className="text-2xl font-bold text-white">    {company ? company.companyName : "Accountrix"}
            </h1>
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
              <p className="text-sm font-medium text-white">Recruiter</p>
              <p className="text-xs text-indigo-200">Dashboard</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-1 flex-col overflow-hidden">
          {/* Top Navigation */}
          <Navigation setSidebarOpen={setSidebarOpen} />
          <div className="flex-1 overflow-y-auto">
            {step == 1 && <MainDashboard setStep={setStep} />}
            {step == 2 && <Candidates isActive={step === 2} />}
            {step == 3 && <InterviewSchedule />}
            {step == 4 && <ComingSoon />}
            {/* {step == 5 && <JobList companyId={company?._id} />} */}
            {step == 5 && <JobList companyId={companyId} setStep={setStep} step={step} selectedJobId={selectedJobId} setSelectedJobId={setSelectedJobId} />}
            {step == 6 && <RecruiterBlogDashboard />}
            {step == 7 && <RecruiterProfile  />}
            {step == 8 && <JobPosting setStep={setStep} step={step} />}
            {step== 9 && <JobApplicationsPage jobId={selectedJobId} setStep={setStep} />}
          </div>
        </div>
      </div>
    </DashboardProvider>
  );
}

