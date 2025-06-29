import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Mail, Phone, MapPin, Briefcase, Award, GraduationCap, X, ArrowLeft } from 'lucide-react';

export default function ApplicantProfile({ userId, onBack }) {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!userId) {
        setLoading(false);
        return;
      }
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`http://localhost:5000/user/${userId}`);
        setUserProfile(response.data);
      } catch (err) {
        console.error('Error fetching user profile:', err);
        setError('Failed to fetch user profile.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [userId]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading profile...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 mt-8">{error}</div>;
  }

  if (!userProfile) {
    return <div className="text-center text-gray-500 mt-8">No user profile found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col">
      <header className="bg-white shadow top-0 z-10 p-4 rounded-md flex justify-between items-center">
        <div className="flex items-center">
          {onBack && (
            <button
              onClick={onBack}
              className="mr-4 p-2 rounded-full hover:bg-gray-200"
              title="Back to Applications"
            >
              <ArrowLeft size={24} />
            </button>
          )}
          <h1 className="text-2xl font-bold text-gray-900">Applicant Profile: {userProfile.fullName}</h1>
        </div>
      </header>

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="flex items-center mb-6">
              <img
                className="h-24 w-24 rounded-full object-cover mr-6"
                src={userProfile.profilePicture || `https://ui-avatars.com/api/?name=${userProfile.fullName}&background=random`}
                alt={userProfile.fullName}
              />
              <div>
                <h2 className="text-3xl font-bold text-gray-900">{userProfile.fullName}</h2>
                <p className="text-gray-600">{userProfile.role}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center text-gray-700">
                <Mail size={20} className="mr-2 text-gray-500" />
                <span>{userProfile.email}</span>
              </div>
              {userProfile.phone && (
                <div className="flex items-center text-gray-700">
                  <Phone size={20} className="mr-2 text-gray-500" />
                  <span>{userProfile.phone}</span>
                </div>
              )}
              {userProfile.location && (
                <div className="flex items-center text-gray-700">
                  <MapPin size={20} className="mr-2 text-gray-500" />
                  <span>{userProfile.location}</span>
                </div>
              )}
              {userProfile.experience && (
                <div className="flex items-center text-gray-700">
                  <Briefcase size={20} className="mr-2 text-gray-500" />
                  <span>{userProfile.experience} years of experience</span>
                </div>
              )}
            </div>

            {userProfile.skills && userProfile.skills.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {userProfile.skills.map((skill, index) => (
                    <span key={index} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {userProfile.education && userProfile.education.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Education</h3>
                <ul className="list-disc list-inside space-y-2">
                  {userProfile.education.map((edu, index) => (
                    <li key={index} className="text-gray-700">
                      <GraduationCap size={16} className="inline mr-2 text-gray-500" />
                      {edu.degree} in {edu.fieldOfStudy} from {edu.institution} ({edu.startYear} - {edu.endYear})
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {userProfile.appliedJobs && userProfile.appliedJobs.length > 0 && ( // Display applied jobs
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Applied Jobs</h3>
                <ul className="list-disc list-inside space-y-2">
                  {userProfile.appliedJobs.map((jobApp) => (
                    <li key={jobApp._id} className="text-gray-700">
                      <Briefcase size={16} className="inline mr-2 text-gray-500" />
                      {jobApp.job?.title} at {jobApp.job?.companyName} (Status: {jobApp.status}) - Applied on {new Date(jobApp.appliedDate).toLocaleDateString()}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => onBack()}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
              >
                Close Profile
              </button>
            </div>

          </div>
        </div>
 </main>