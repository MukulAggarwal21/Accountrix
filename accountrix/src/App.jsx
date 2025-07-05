import './App.css'
import Landing from './components/Landing/Landing'
import JobSeach from './components/Student/JobSearch/JobSearchHeroSection';
import JobSearchInfoPage from './components/Student/JobSearch/JobSearchInfoPage';
import BrandHiring from './components/Student/BrandHiring/BrandHiring';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect, createContext, useContext } from 'react';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';

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
import ApplicantProfile from './components/Student/ApplicantProfile';
import JobApplicationsPage from './components/Recruiter/Dashboard/PostedJobs/JobApplicationsPage';

// Auth Context
const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Auth Provider Component
function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState(null);

  // Check authentication status on app load and when localStorage changes
  useEffect(() => {
    const checkAuthStatus = () => {
      const recruiterId = localStorage.getItem('recruiterId');
      const userId = localStorage.getItem('userId');
      
      if (recruiterId) {
        setIsAuthenticated(true);
        setUserType('recruiter');
      } else if (userId) {
        setIsAuthenticated(true);
        setUserType('student');
      } else {
        setIsAuthenticated(false);
        setUserType(null);
      }
    };

    checkAuthStatus();

    // Listen for storage changes (when user logs out from another tab)
    const handleStorageChange = () => {
      checkAuthStatus();
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const login = (type) => {
    setIsAuthenticated(true);
    setUserType(type);
  };

  const logout = () => {
    localStorage.removeItem('recruiterId');
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    localStorage.removeItem('companyId');
    setIsAuthenticated(false);
    setUserType(null);
  };

  const value = {
    isAuthenticated,
    userType,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// Public Route Component - prevents authenticated users from accessing public routes
function PublicRoute({ children }) {
  const { isAuthenticated, userType } = useAuth();
  const recruiterId = localStorage.getItem('recruiterId');
  const userId = localStorage.getItem('userId');

  // If user is authenticated, redirect them to their appropriate dashboard
  if (isAuthenticated) {
    if (userType === 'recruiter' && recruiterId) {
      return <Navigate to="/dashboard" replace />;
    } else if (userType === 'student' && userId) {
      return <Navigate to="/brandhiring" replace />;
    }
  }

  // If not authenticated, show the public route
  return children;
}
function App() {
  return (
    <AuthProvider>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          {/* Public Route - only accessible when not authenticated */}
          <Route path='/' element={
            <PublicRoute>
              <Landing />
            </PublicRoute>
          } />
          <Route path='/jobsearch' element={<JobSeach />} />
          <Route path='/brandhiring' element={
            <ProtectedRoute allowedTypes={['student']}>
              <BrandHiring />
            </ProtectedRoute>
          } />
          <Route path='/jobsearchinfopage' element={<JobSearchInfoPage />} />
          <Route path="/dashboard" element={
            <ProtectedRoute allowedTypes={['recruiter']}>
              <Dashboard />
            </ProtectedRoute>
          }>
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
          <Route path='/profile' element={
            <ProtectedRoute allowedTypes={['student']}>
              <ApplicantProfile userId={localStorage.getItem('userId')} />
            </ProtectedRoute>
          } />
          <Route path="/job/:jobId/applications" element={<JobApplicationsPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
