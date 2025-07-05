import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaUserCircle, FaEnvelope, FaPhone, FaMapMarkerAlt, FaSignOutAlt, FaBriefcase, FaGraduationCap } from 'react-icons/fa';

export default function ApplicantProfile() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5000/user/${id}`)
      .then(res => {
        setStudent(res.data);
        setLoading(false);
      })
      .catch(() => {
        setStudent(null);
        setError('Failed to load student profile.');
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    const fetchAppliedJobs = async () => {
      try {
        const res = await fetch(`http://localhost:5000/applications/user/${id}`);
        if (!res.ok) throw new Error('Failed to fetch jobs');
        const jobs = await res.json();
        setAppliedJobs(jobs);
      } catch (err) {
        // ignore for now
      }
    };
    fetchAppliedJobs();
  }, [id]);

  const handleLogout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    localStorage.removeItem('recruiterId');
    localStorage.removeItem('userType');
    window.location.reload();
  };

  if (loading) return <div className="flex justify-center items-center h-64 text-lg">Loading...</div>;
  if (error) return <div className="flex justify-center items-center h-64 text-red-600">{error}</div>;
  if (!student) return <div className="flex justify-center items-center h-64 text-gray-500">No student found.</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6 bg-white shadow-md">
        <div className="flex items-center gap-4">
          <FaUserCircle className="text-5xl text-blue-600" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{student.fullName}</h1>
            <p className="text-gray-600">Student</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition font-semibold text-lg"
        >
          <FaSignOutAlt /> Logout
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* User Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-xl font-semibold mb-4 text-blue-700">Contact Information</h2>
              <div className="flex items-center gap-3 mb-2 text-gray-700">
                <FaEnvelope className="text-blue-400" />
                <span>{student.email}</span>
              </div>
              {student.phone && (
                <div className="flex items-center gap-3 mb-2 text-gray-700">
                  <FaPhone className="text-blue-400" />
                  <span>{student.phone}</span>
                </div>
              )}
              {student.location && (
                <div className="flex items-center gap-3 mb-2 text-gray-700">
                  <FaMapMarkerAlt className="text-blue-400" />
                  <span>{student.location}</span>
                </div>
              )}
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4 text-blue-700">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {student.skills && student.skills.length > 0 ? (
                  student.skills.map((skill, idx) => (
                    <span key={idx} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))
                ) : (
                  <span className="text-gray-400">No skills added</span>
                )}
              </div>
            </div>
          </div>

          {/* Education */}
          {student.education && student.education.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-blue-700">Education</h2>
              <ul className="space-y-2">
                {student.education.map((edu, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <FaGraduationCap className="text-blue-400" />
                    <span>{edu.degree} in {edu.fieldOfStudy} at {edu.institution} ({edu.startYear} - {edu.endYear})</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Applied Jobs */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-blue-700">Applied Jobs</h2>
            {appliedJobs && appliedJobs.length > 0 ? (
              <ul className="divide-y divide-gray-200">
                {appliedJobs.map((app) => (
                  <li key={app._id} className="py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <FaBriefcase className="text-green-500" />
                      <div>
                        <div className="font-semibold text-gray-900">{app.job?.jobTitle || 'Job Title'}</div>
                        <div className="text-gray-500 text-sm">{app.job?.companyName || 'Company'}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {app.status || 'pending'}
                      </span>
                      <span className="text-gray-400 text-xs">Applied on {app.appliedDate ? new Date(app.appliedDate).toLocaleDateString() : ''}</span>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-gray-400">You haven't applied to any jobs yet.</div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
} 