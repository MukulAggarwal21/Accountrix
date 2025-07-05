import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children, allowedTypes }) {
  const userType = localStorage.getItem('userType');
  const userId = localStorage.getItem('userId');
  const recruiterId = localStorage.getItem('recruiterId');

  if (
    (allowedTypes.includes('student') && userType === 'student' && userId) ||
    (allowedTypes.includes('recruiter') && userType === 'recruiter' && recruiterId)
  ) {
    return children;
  }
  return <Navigate to="/" replace />;
} 