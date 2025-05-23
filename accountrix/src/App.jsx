
import './App.css'
import Landing from './components/Landing/Landing'
import JobSeach from './components/Student/JobSearch/JobSearchHeroSection';
import JobSearchInfoPage from './components/Student/JobSearch/JobSearchInfoPage';
import BrandHiring from './components/Student/BrandHiring/BrandHiring';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Dashboard from './components/Recruiter/Dashboard/Landing';
import ViewJobs from './components/Recruiter/Dashboard/ViewJobs';
import PostJob from './components/Recruiter/Dashboard/PostJob';
import Candidates from './components/Recruiter/Dashboard/Candidates';
import Analytics from './components/Recruiter/Dashboard/Analytics';
import Testing from './components/Recruiter/Dashboard/testing';
import JobPosting from './components/Recruiter/Dashboard/JobPosting';
import RecruiterSetup from './components/Recruiter/SignupInfo/RecruiterSetup';
import JobList from './components/Recruiter/Dashboard/PostedJobs/JobList';
import InterviewSchedule from './components/Recruiter/Dashboard/Interview/InterviewSchedule';
import AllApplication from './components/Recruiter/Dashboard/Applications/AllApplication';
import RecruiterProfile from './components/Recruiter/Dashboard/Profile/RecruiterProfile';
import BlogPage from './components/Recruiter/Dashboard/Blog/Blog';
import NotificationPage from './components/Recruiter/Dashboard/Notification/Notification';
import CompanyCultureForm from './components/Recruiter/SignupInfo/components/CompanyCultureForm';
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/jobsearch' element={<JobSeach />} />
        <Route path='/brandhiring' element={<BrandHiring />} />
        <Route path='/jobsearchinfopage' element={<JobSearchInfoPage />} />
        {/* <Route path="/dashboard/*" element={<Dashboard />} /> */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="post-job" element={<PostJob />} />
          <Route path="view-jobs" element={<ViewJobs />} />
          <Route path="candidates" element={<Candidates />} />
          <Route path="analytics" element={<Analytics />} />
        </Route>
        <Route path="/testing" element={<Testing />} />
        <Route path="/jobposting" element={<JobPosting />} />
        <Route path="/recruitersetup" element={<RecruiterSetup />} />
        <Route path="/joblist" element={<JobList />} />
        <Route path="/allapplication" element={<AllApplication />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/notification" element={<NotificationPage />} />
        <Route path="/company" element={<CompanyCultureForm />} />

      </Routes>

    </Router>
  )
}

export default App
