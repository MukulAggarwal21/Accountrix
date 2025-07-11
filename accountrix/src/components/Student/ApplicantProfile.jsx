// import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { FaUserCircle, FaEnvelope, FaPhone, FaMapMarkerAlt, FaSignOutAlt, FaBriefcase, FaGraduationCap, FaUser, FaCalendarAlt, FaArrowLeft } from 'react-icons/fa';
import PersonalInfoTab from './StudentProfile/PersonalInfoTab';
import AppliedJobsTab from './StudentProfile/AppliedJobsTab';
import ScheduledInterviewsTab from './StudentProfile/ScheduledInterviewsTab';

// const tabList = [
//   { key: 'personal', label: 'Personal Info', icon: <FaUser className="text-gray-400 mr-2" size={16} /> },
//   { key: 'applied', label: 'Applied Jobs', icon: <FaBriefcase className="text-gray-400 mr-2" size={16} /> },
//   { key: 'interviews', label: 'Scheduled Interviews', icon: <FaCalendarAlt className="text-gray-400 mr-2" size={16} /> },
// ];

// // export default function ApplicantProfile({ userId }) {
// //   const id = userId || localStorage.getItem('userId');
// //   const [student, setStudent] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [appliedJobs, setAppliedJobs] = useState([]);
// //   const [activeTab, setActiveTab] = useState('personal');

// //   useEffect(() => {
// //     setLoading(true);
// //     axios.get(`http://localhost:5000/user/${id}`)
// //       .then(res => {
// //         setStudent(res.data);
// //         setLoading(false);
// //       })
// //       .catch(() => {
// //         setStudent(null);
// //         setError('Failed to load student profile.');
// //         setLoading(false);
// //       });
// //   }, [id]);

// //   useEffect(() => {
// //     const fetchAppliedJobs = async () => {
// //       try {
// //         const res = await fetch(`http://localhost:5000/applications/user/${id}`);
// //         if (!res.ok) throw new Error('Failed to fetch jobs');
// //         const jobs = await res.json();
// //         setAppliedJobs(jobs);
// //       } catch (err) {
// //         // ignore for now
// //       }
// //     };
// //     fetchAppliedJobs();
// //   }, [id]);

// //   const handleLogout = () => {
// //     localStorage.removeItem('userId');
// //     localStorage.removeItem('userName');
// //     localStorage.removeItem('recruiterId');
// //     localStorage.removeItem('userType');
// //     window.location.reload();
// //   };

// //   const handleBack = () => {
// //     window.history.back();
// //   };

// //   if (loading) return <div className="flex justify-center items-center h-64 text-lg">Loading...</div>;
// //   if (error) return <div className="flex justify-center items-center h-64 text-red-600">{error}</div>;
// //   if (!student) return <div className="flex justify-center items-center h-64 text-gray-500">No student found.</div>;

// //   return (
// //     <div className="min-h-screen flex bg-gray-50">
// //       {/* Sidebar */}
// //       <aside className="w-56 bg-white border-r border-gray-200 flex flex-col py-8 px-4 min-h-screen">
// //         <button onClick={handleBack} className="mb-8 text-gray-600 text-sm font-medium text-left">Back</button>
// //         <nav className="flex-1 flex flex-col gap-1">
// //           {tabList.map(tab => (
// //             <button
// //               key={tab.key}
// //               className={`w-full flex items-center text-left px-3 py-2 rounded-lg text-base font-medium transition-colors ${activeTab === tab.key ? 'bg-gray-100 font-semibold text-indigo-700' : 'text-gray-700 hover:bg-gray-50'}`}
// //               onClick={() => setActiveTab(tab.key)}
// //               style={{ boxShadow: 'none', border: 'none', background: 'none' }}
// //             >
// //               {tab.icon} {tab.label}
// //             </button>
// //           ))}
// //         </nav>
// //         <button
// //           onClick={handleLogout}
// //           className="mt-8 text-red-500 text-sm font-medium text-left"
// //         >
// //           Logout
// //         </button>
// //       </aside>
// //       {/* Main Content */}
// //       <main className="flex-1 flex flex-col items-center justify-start py-12 px-8">
// //         <div className="w-full max-w-2xl">
// //           {activeTab === 'personal' && (
// //             <div className="bg-white rounded-xl shadow p-8">
// //               <PersonalInfoTab userId={userId} />
// //             </div>
// //           )}
// //           {activeTab === 'applied' && (
// //             <div className="bg-white rounded-xl shadow p-8">
// //               <AppliedJobsTab userId={userId} />
// //             </div>
// //           )}
// //           {activeTab === 'interviews' && (
// //             <div className="bg-white rounded-xl shadow p-8">
// //               <ScheduledInterviewsTab userId={userId} />
// //             </div>
// //           )}
// //         </div>
// //       </main>
// //     </div>
// //   );
// // } 


// export default function ApplicantProfile({ userId }) {
//   const [activeTab, setActiveTab] = useState('personal');

//   const handleLogout = () => {
//     // localStorage.removeItem('userId');
//     // localStorage.removeItem('userName');
//     // localStorage.removeItem('recruiterId');
//     // localStorage.removeItem('userType');
//     // window.location.reload();
//     console.log('Logout clicked');
//   };

//   const handleBack = () => {
//     // window.history.back();
//     console.log('Back clicked');
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="flex">
//         {/* Sidebar */}
//         <aside className="w-72 bg-white border-r border-gray-200 min-h-screen">
//           <div className="p-6">
//             <button 
//               onClick={handleBack} 
//               className="flex items-center text-gray-600 hover:text-gray-900 mb-8 p-2 rounded-lg hover:bg-gray-50 transition-colors"
//             >
//               <FaArrowLeft className="mr-2" size={14} />
//               Back to Dashboard
//             </button>
            
//             <nav className="space-y-2">
//               {tabList.map(tab => (
//                 <button
//                   key={tab.key}
//                   className={`w-full flex items-center text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
//                     activeTab === tab.key 
//                       ? 'bg-indigo-50 text-indigo-700 border border-indigo-200' 
//                       : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
//                   }`}
//                   onClick={() => setActiveTab(tab.key)}
//                 >
//                   <span className="mr-3">{tab.icon}</span>
//                   {tab.label}
//                 </button>
//               ))}
//             </nav>
//           </div>
          
//           <div className="absolute bottom-6 left-6 right-6">
//             <button
//               onClick={handleLogout}
//               className="w-full flex items-center text-left px-4 py-3 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
//             >
//               <FaSignOutAlt className="mr-3" size={16} />
//               Logout
//             </button>
//           </div>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1">
//           <div className="p-8">
//             <div className="max-w-4xl mx-auto">
//               {activeTab === 'personal' && <PersonalInfoTab userId={userId} />}
//               {activeTab === 'applied' && <AppliedJobsTab userId={userId} />}
//               {activeTab === 'interviews' && <ScheduledInterviewsTab userId={userId} />}
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }


// import React, { useState } from 'react';
// import { FaUser, FaBriefcase, FaCalendarAlt, FaArrowLeft, FaSignOutAlt, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaClock, FaBuilding, FaCheckCircle, FaExclamationCircle, FaHourglassHalf, FaEdit, FaEye } from 'react-icons/fa';

// // Mock data
// const mockStudent = {
//   fullName: "Sarah Johnson",
//   email: "sarah.johnson@email.com",
//   phone: "+1 (555) 123-4567",
//   location: "New York, NY",
//   university: "Stanford University",
//   major: "Computer Science",
//   graduationYear: "2024",
//   gpa: "3.85",
//   skills: ["JavaScript", "React", "Node.js", "Python", "SQL", "MongoDB", "AWS", "Git"],
//   education: [
//     {
//       degree: "Bachelor of Science",
//       fieldOfStudy: "Computer Science",
//       institution: "Stanford University",
//       startYear: "2020",
//       endYear: "2024",
//       gpa: "3.85"
//     },
//     {
//       degree: "High School Diploma",
//       fieldOfStudy: "Science",
//       institution: "Lincoln High School",
//       startYear: "2016",
//       endYear: "2020",
//       gpa: "3.92"
//     }
//   ]
// };

// const mockAppliedJobs = [
//   {
//     _id: "1",
//     job: {
//       jobTitle: "Full Stack Developer",
//       companyName: "TechCorp Inc.",
//       location: "San Francisco, CA",
//       salary: "$85,000 - $105,000"
//     },
//     status: "interview",
//     appliedDate: "2024-06-15T00:00:00.000Z"
//   },
//   {
//     _id: "2",
//     job: {
//       jobTitle: "Frontend Developer",
//       companyName: "StartupXYZ",
//       location: "Remote",
//       salary: "$75,000 - $90,000"
//     },
//     status: "pending",
//     appliedDate: "2024-06-10T00:00:00.000Z"
//   },
//   {
//     _id: "3",
//     job: {
//       jobTitle: "Software Engineer",
//       companyName: "BigTech Solutions",
//       location: "Seattle, WA",
//       salary: "$95,000 - $120,000"
//     },
//     status: "rejected",
//     appliedDate: "2024-06-05T00:00:00.000Z"
//   },
//   {
//     _id: "4",
//     job: {
//       jobTitle: "React Developer",
//       companyName: "Innovation Labs",
//       location: "Austin, TX",
//       salary: "$80,000 - $100,000"
//     },
//     status: "pending",
//     appliedDate: "2024-06-20T00:00:00.000Z"
//   }
// ];

// const mockInterviews = [
//   {
//     _id: "1",
//     jobTitle: "Full Stack Developer",
//     companyName: "TechCorp Inc.",
//     interviewDate: "2024-07-15T14:00:00.000Z",
//     interviewType: "Technical Interview",
//     location: "Virtual - Zoom",
//     duration: "60 minutes",
//     interviewer: "John Smith, Senior Developer",
//     status: "scheduled"
//   },
//   {
//     _id: "2",
//     jobTitle: "Senior React Developer",
//     companyName: "Innovation Labs",
//     interviewDate: "2024-07-18T10:30:00.000Z",
//     interviewType: "HR Interview",
//     location: "Office - Downtown",
//     duration: "45 minutes",
//     interviewer: "Sarah Wilson, HR Manager",
//     status: "scheduled"
//   },
//   {
//     _id: "3",
//     jobTitle: "Frontend Engineer",
//     companyName: "StartupXYZ",
//     interviewDate: "2024-07-22T16:00:00.000Z",
//     interviewType: "Final Round",
//     location: "Virtual - Google Meet",
//     duration: "90 minutes",
//     interviewer: "Mike Johnson, CTO",
//     status: "completed"
//   }
// ];

// const tabList = [
//   { key: 'personal', label: 'Personal Info', icon: <FaUser size={16} /> },
//   { key: 'applied', label: 'Applied Jobs', icon: <FaBriefcase size={16} /> },
//   { key: 'interviews', label: 'Interviews', icon: <FaCalendarAlt size={16} /> },
// ];


// // Main Component
// export default function ApplicantProfile({ userId }) {
//   const [activeTab, setActiveTab] = useState('personal');

//   const handleLogout = () => {
//     console.log('Logout clicked');
//   };

//   const handleBack = () => {
//     console.log('Back clicked');
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="flex">
//         {/* Sidebar */}
//         <aside className="w-64 bg-white border-r border-gray-200 min-h-screen fixed">
//           <div className="p-6">
//             <button 
//               onClick={handleBack} 
//               className="flex items-center text-gray-600 hover:text-gray-900 mb-8 p-2 rounded-lg hover:bg-gray-50 transition-colors"
//             >
//               <FaArrowLeft className="mr-2" size={14} />
//               Back to Dashboard
//             </button>
            
//             <nav className="space-y-2">
//               {tabList.map(tab => (
//                 <button
//                   key={tab.key}
//                   className={`w-full flex items-center text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
//                     activeTab === tab.key 
//                       ? 'bg-blue-50 text-blue-700 border border-blue-200' 
//                       : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
//                   }`}
//                   onClick={() => setActiveTab(tab.key)}
//                 >
//                   <span className="mr-3">{tab.icon}</span>
//                   {tab.label}
//                 </button>
//               ))}
//             </nav>
//           </div>
          
//           <div className="absolute bottom-6 left-6 right-6">
//             <button
//               onClick={handleLogout}
//               className="w-full flex items-center text-left px-4 py-3 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
//             >
//               <FaSignOutAlt className="mr-3" size={16} />
//               Logout
//             </button>
//           </div>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 ml-64">
//           <div className="p-8">
//             {activeTab === 'personal' && <PersonalInfoTab userId={userId} />}
//             {activeTab === 'applied' && <AppliedJobsTab userId={userId} />}
//             {activeTab === 'interviews' && <ScheduledInterviewsTab userId={userId} />}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import { FaUser, FaBriefcase, FaCalendarAlt, FaArrowLeft, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';
// import PersonalInfoTab from './PersonalInfoTab';
// import AppliedJobsTab from './AppliedJobsTab';
// import ScheduledInterviewsTab from './ScheduledInterviewsTab';

const tabList = [
  { key: 'personal', label: 'Personal Info', icon: <FaUser size={16} /> },
  { key: 'applied', label: 'Applied Jobs', icon: <FaBriefcase size={16} /> },
  { key: 'interviews', label: 'Interviews', icon: <FaCalendarAlt size={16} /> },
];

export default function ApplicantProfile({ userId: propUserId }) {
  const userId = propUserId || localStorage.getItem('userId');
  const [activeTab, setActiveTab] = useState('personal');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    console.log('Logout clicked');
  };

  const handleBack = () => {
    console.log('Back clicked');
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
    setSidebarOpen(false); // Close sidebar on mobile after selecting tab
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Mobile Header */}
        <div className="lg:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 px-4 py-3 z-30 flex items-center justify-between">
          <button 
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {sidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
          <h1 className="text-lg font-semibold text-gray-900">Student Profile</h1>
          <div className="w-10"></div> {/* Spacer for centering */}
        </div>

        {/* Sidebar Overlay for Mobile */}
        {sidebarOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside className={`
          w-64 bg-white border-r border-gray-200 min-h-screen fixed lg:relative z-50 transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <div className="p-6">
            <button 
              onClick={handleBack} 
              className="flex items-center text-gray-600 hover:text-gray-900 mb-8 p-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <FaArrowLeft className="mr-2" size={14} />
              <span className="hidden sm:inline">Back to Dashboard</span>
            </button>
            
            <nav className="space-y-2">
              {tabList.map(tab => (
                <button
                  key={tab.key}
                  className={`w-full flex items-center text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeTab === tab.key 
                      ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                  onClick={() => handleTabClick(tab.key)}
                >
                  <span className="mr-3">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
          
          <div className="absolute bottom-6 left-6 right-6">
            <button
              onClick={handleLogout}
              className="w-full flex items-center text-left px-4 py-3 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
            >
              <FaSignOutAlt className="mr-3" size={16} />
              Logout
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="p-4 sm:p-6 lg:p-8 pt-20 lg:pt-8">
            {activeTab === 'personal' && <PersonalInfoTab userId={userId} />}
            {activeTab === 'applied' && <AppliedJobsTab userId={userId} />}
            {activeTab === 'interviews' && <ScheduledInterviewsTab userId={userId} />}
          </div>
        </main>
      </div>
    </div>
  );
}