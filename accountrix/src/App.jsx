
import './App.css'
import Landing from './components/Landing/Landing'
import JobSeach from './components/Student/JobSearch/JobSearchHeroSection';
import JobSearchInfoPage from './components/Student/JobSearch/JobSearchInfoPage';
import BrandHiring from './components/Student/BrandHiring/BrandHiring';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ProfileSetup from './components/Recruiter/ProfileSetup';
import Dashboard from './components/Recruiter/Dashboard/Dashboard';
import ViewJobs from './components/Recruiter/Dashboard/ViewJobs';
import PostJob from './components/Recruiter/Dashboard/PostJob';
import Candidates from './components/Recruiter/Dashboard/Candidates';
import Analytics from './components/Recruiter/Dashboard/Analytics';
import Testing from './components/Recruiter/Dashboard/testing';
import JobPosting from './components/Recruiter/Dashboard/JobPosting';
import Info from './components/Recruiter/SignupInfo/Info';
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/jobsearch' element={<JobSeach />} />
        <Route path='/brandhiring' element={<BrandHiring />} />
        <Route path='/jobsearchinfopage' element={<JobSearchInfoPage />} />
        <Route path="/profile-setup" element={<ProfileSetup />} />
        {/* <Route path="/dashboard/*" element={<Dashboard />} /> */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="post-job" element={<PostJob />} />
          <Route path="view-jobs" element={<ViewJobs />} />
          <Route path="candidates" element={<Candidates />} />
          <Route path="analytics" element={<Analytics />} />
        </Route>
        <Route path="/testing" element={<Testing />} />
        <Route path="/jobposting" element={<JobPosting />} />
        <Route path="/info" element={<Info/>} />
      </Routes>

    </Router>
  )
}

export default App
