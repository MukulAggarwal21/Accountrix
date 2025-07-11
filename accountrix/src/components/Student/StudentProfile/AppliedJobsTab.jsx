// // import React, { useEffect, useState } from 'react';

// // // export default function AppliedJobsTab({ userId }) {
// // //   const id = userId || localStorage.getItem('userId');
// // //   const [appliedJobs, setAppliedJobs] = useState([]);
// // //   const [loading, setLoading] = useState(true);

// // //   useEffect(() => {
// // //     setLoading(true);
// // //     fetch(`http://localhost:5000/applications/user/${id}`)
// // //       .then(res => res.json())
// // //       .then(jobs => {
// // //         setAppliedJobs(jobs);
// // //         setLoading(false);
// // //       })
// // //       .catch(() => {
// // //         setAppliedJobs([]);
// // //         setLoading(false);
// // //       });
// // //   }, [id]);

// // //   if (loading) return <div className="py-8 text-center text-gray-500 text-base">Loading...</div>;

// // //   return (
// // //     <div className="py-2 px-1">
// // //       <div className="text-base font-semibold text-indigo-700 mb-4">Applied Jobs</div>
// // //       {appliedJobs && appliedJobs.length > 0 ? (
// // //         <ul className="divide-y divide-gray-100">
// // //           {appliedJobs.map((app) => (
// // //             <li key={app._id} className="py-4">
// // //               <div className="font-semibold text-gray-900">{app.job?.jobTitle || 'Job Title'}</div>
// // //               <div className="text-gray-500">{app.job?.companyName || 'Company'}</div>
// // //               <div className="text-xs text-gray-400 mt-1">Status: {app.status || 'pending'} | Applied on {app.appliedDate ? new Date(app.appliedDate).toLocaleDateString() : ''}</div>
// // //             </li>
// // //           ))}
// // //         </ul>
// // //       ) : (
// // //         <div className="text-gray-400 text-sm">You haven't applied to any jobs yet.</div>
// // //       )}
// // //     </div>
// // //   );
// // // } 
// // import { FaUser, FaBriefcase, FaCalendarAlt, FaArrowLeft, FaSignOutAlt, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaClock, FaBuilding, FaCheckCircle, FaExclamationCircle, FaHourglassHalf } from 'react-icons/fa';

// // const mockAppliedJobs = [
// //   {
// //     _id: "1",
// //     job: {
// //       jobTitle: "Full Stack Developer",
// //       companyName: "TechCorp Inc."
// //     },
// //     status: "interview",
// //     appliedDate: "2024-06-15T00:00:00.000Z"
// //   },
// //   {
// //     _id: "2",
// //     job: {
// //       jobTitle: "Frontend Developer",
// //       companyName: "StartupXYZ"
// //     },
// //     status: "pending",
// //     appliedDate: "2024-06-10T00:00:00.000Z"
// //   },
// //   {
// //     _id: "3",
// //     job: {
// //       jobTitle: "Software Engineer",
// //       companyName: "BigTech Solutions"
// //     },
// //     status: "rejected",
// //     appliedDate: "2024-06-05T00:00:00.000Z"
// //   },
// //   {
// //     _id: "4",
// //     job: {
// //       jobTitle: "React Developer",
// //       companyName: "Innovation Labs"
// //     },
// //     status: "pending",
// //     appliedDate: "2024-06-20T00:00:00.000Z"
// //   }
// // ];



// // export default function AppliedJobsTab({ userId }) {
// //   const [appliedJobs, setAppliedJobs] = useState(mockAppliedJobs);
// //   const [loading, setLoading] = useState(false);

// //   const getStatusIcon = (status) => {
// //     switch(status) {
// //       case 'interview':
// //         return <FaCheckCircle className="text-green-500" size={16} />;
// //       case 'rejected':
// //         return <FaExclamationCircle className="text-red-500" size={16} />;
// //       default:
// //         return <FaHourglassHalf className="text-yellow-500" size={16} />;
// //     }
// //   };

// //   const getStatusColor = (status) => {
// //     switch(status) {
// //       case 'interview':
// //         return 'bg-green-100 text-green-800 border-green-200';
// //       case 'rejected':
// //         return 'bg-red-100 text-red-800 border-red-200';
// //       default:
// //         return 'bg-yellow-100 text-yellow-800 border-yellow-200';
// //     }
// //   };

// //   if (loading) return <div className="flex justify-center items-center h-64"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div></div>;

// //   return (
// //     <div className="space-y-6">
// //       <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
// //         <h1 className="text-2xl font-bold text-gray-900 mb-2">Applied Jobs</h1>
// //         <p className="text-gray-600">Track your job applications and their current status</p>
// //       </div>

// //       {appliedJobs && appliedJobs.length > 0 ? (
// //         <div className="space-y-4">
// //           {appliedJobs.map((app) => (
// //             <div key={app._id} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
// //               <div className="flex items-start justify-between">
// //                 <div className="flex items-start space-x-4">
// //                   <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
// //                     <FaBriefcase className="text-indigo-600" size={18} />
// //                   </div>
// //                   <div className="flex-1">
// //                     <h3 className="text-lg font-semibold text-gray-900 mb-1">
// //                       {app.job?.jobTitle || 'Job Title'}
// //                     </h3>
// //                     <p className="text-indigo-600 font-medium mb-2 flex items-center">
// //                       <FaBuilding className="mr-2" size={14} />
// //                       {app.job?.companyName || 'Company'}
// //                     </p>
// //                     <p className="text-sm text-gray-500 flex items-center">
// //                       <FaClock className="mr-2" size={12} />
// //                       Applied on {app.appliedDate ? new Date(app.appliedDate).toLocaleDateString('en-US', { 
// //                         year: 'numeric', 
// //                         month: 'long', 
// //                         day: 'numeric' 
// //                       }) : 'N/A'}
// //                     </p>
// //                   </div>
// //                 </div>
// //                 <div className="flex items-center space-x-2">
// //                   {getStatusIcon(app.status)}
// //                   <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(app.status)}`}>
// //                     {app.status === 'interview' ? 'Interview' : app.status === 'rejected' ? 'Rejected' : 'Pending'}
// //                   </span>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       ) : (
// //         <div className="bg-white rounded-2xl p-12 border border-gray-200 text-center">
// //           <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
// //             <FaBriefcase className="text-gray-400" size={24} />
// //           </div>
// //           <h3 className="text-lg font-medium text-gray-900 mb-2">No Applications Yet</h3>
// //           <p className="text-gray-500">You haven't applied to any jobs yet. Start exploring opportunities!</p>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }


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
// export default function AppliedJobsTab({ userId }) {
//   const [appliedJobs] = useState(mockAppliedJobs);

//   const getStatusBadge = (status) => {
//     const statusConfig = {
//       interview: { color: 'bg-green-100 text-green-800', icon: <FaCheckCircle size={14} />, text: 'Interview' },
//       rejected: { color: 'bg-red-100 text-red-800', icon: <FaExclamationCircle size={14} />, text: 'Rejected' },
//       pending: { color: 'bg-yellow-100 text-yellow-800', icon: <FaHourglassHalf size={14} />, text: 'Pending' }
//     };
//     return statusConfig[status] || statusConfig.pending;
//   };

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-2xl font-semibold text-gray-900">Applied Jobs</h1>
//           <p className="text-gray-600">Track your job applications and their current status</p>
//         </div>
//         <div className="text-sm text-gray-500">
//           {appliedJobs.length} applications
//         </div>
//       </div>

//       <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead className="bg-gray-50 border-b border-gray-200">
//               <tr>
//                 <th className="text-left py-3 px-6 text-sm font-semibold text-gray-900">Job Title</th>
//                 <th className="text-left py-3 px-6 text-sm font-semibold text-gray-900">Company</th>
//                 <th className="text-left py-3 px-6 text-sm font-semibold text-gray-900">Location</th>
//                 <th className="text-left py-3 px-6 text-sm font-semibold text-gray-900">Salary</th>
//                 <th className="text-left py-3 px-6 text-sm font-semibold text-gray-900">Applied Date</th>
//                 <th className="text-left py-3 px-6 text-sm font-semibold text-gray-900">Status</th>
//                 <th className="text-left py-3 px-6 text-sm font-semibold text-gray-900">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {appliedJobs.map((app) => {
//                 const statusConfig = getStatusBadge(app.status);
//                 return (
//                   <tr key={app._id} className="hover:bg-gray-50">
//                     <td className="py-4 px-6">
//                       <div className="font-medium text-gray-900">{app.job.jobTitle}</div>
//                     </td>
//                     <td className="py-4 px-6">
//                       <div className="flex items-center space-x-2">
//                         <FaBuilding className="text-gray-400" size={14} />
//                         <span className="text-gray-900">{app.job.companyName}</span>
//                       </div>
//                     </td>
//                     <td className="py-4 px-6">
//                       <div className="flex items-center space-x-2">
//                         <FaMapMarkerAlt className="text-gray-400" size={14} />
//                         <span className="text-gray-600">{app.job.location}</span>
//                       </div>
//                     </td>
//                     <td className="py-4 px-6">
//                       <span className="text-gray-900">{app.job.salary}</span>
//                     </td>
//                     <td className="py-4 px-6">
//                       <span className="text-gray-600">
//                         {new Date(app.appliedDate).toLocaleDateString('en-US', { 
//                           year: 'numeric', 
//                           month: 'short', 
//                           day: 'numeric' 
//                         })}
//                       </span>
//                     </td>
//                     <td className="py-4 px-6">
//                       <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium ${statusConfig.color}`}>
//                         {statusConfig.icon}
//                         <span>{statusConfig.text}</span>
//                       </span>
//                     </td>
//                     <td className="py-4 px-6">
//                       <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
//                         View Details
//                       </button>
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { FaBuilding, FaMapMarkerAlt, FaCheckCircle, FaExclamationCircle, FaHourglassHalf, FaEye } from 'react-icons/fa';

const mockAppliedJobs = [
  {
    _id: "1",
    job: {
      jobTitle: "Full Stack Developer",
      companyName: "TechCorp Inc.",
      location: "San Francisco, CA",
      salary: "$85,000 - $105,000"
    },
    status: "interview",
    appliedDate: "2024-06-15T00:00:00.000Z"
  },
  {
    _id: "2",
    job: {
      jobTitle: "Frontend Developer",
      companyName: "StartupXYZ",
      location: "Remote",
      salary: "$75,000 - $90,000"
    },
    status: "pending",
    appliedDate: "2024-06-10T00:00:00.000Z"
  },
  {
    _id: "3",
    job: {
      jobTitle: "Software Engineer",
      companyName: "BigTech Solutions",
      location: "Seattle, WA",
      salary: "$95,000 - $120,000"
    },
    status: "rejected",
    appliedDate: "2024-06-05T00:00:00.000Z"
  },
  {
    _id: "4",
    job: {
      jobTitle: "React Developer",
      companyName: "Innovation Labs",
      location: "Austin, TX",
      salary: "$80,000 - $100,000"
    },
    status: "pending",
    appliedDate: "2024-06-20T00:00:00.000Z"
  }
];

export default function AppliedJobsTab({ userId }) {
  const [appliedJobs] = useState(mockAppliedJobs);

  const getStatusBadge = (status) => {
    const statusConfig = {
      interview: { color: 'bg-green-100 text-green-800', icon: <FaCheckCircle size={12} />, text: 'Interview' },
      rejected: { color: 'bg-red-100 text-red-800', icon: <FaExclamationCircle size={12} />, text: 'Rejected' },
      pending: { color: 'bg-yellow-100 text-yellow-800', icon: <FaHourglassHalf size={12} />, text: 'Pending' }
    };
    return statusConfig[status] || statusConfig.pending;
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">Applied Jobs</h1>
          <p className="text-gray-600">Track your job applications and their current status</p>
        </div>
        <div className="text-sm text-gray-500">
          {appliedJobs.length} applications
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-6 text-sm font-semibold text-gray-900">Job Title</th>
                <th className="text-left py-3 px-6 text-sm font-semibold text-gray-900">Company</th>
                <th className="text-left py-3 px-6 text-sm font-semibold text-gray-900">Location</th>
                <th className="text-left py-3 px-6 text-sm font-semibold text-gray-900">Salary</th>
                <th className="text-left py-3 px-6 text-sm font-semibold text-gray-900">Applied Date</th>
                <th className="text-left py-3 px-6 text-sm font-semibold text-gray-900">Status</th>
                <th className="text-left py-3 px-6 text-sm font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {appliedJobs.map((app) => {
                const statusConfig = getStatusBadge(app.status);
                return (
                  <tr key={app._id} className="hover:bg-gray-50">
                    <td className="py-4 px-6">
                      <div className="font-medium text-gray-900">{app.job.jobTitle}</div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <FaBuilding className="text-gray-400" size={14} />
                        <span className="text-gray-900">{app.job.companyName}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <FaMapMarkerAlt className="text-gray-400" size={14} />
                        <span className="text-gray-600">{app.job.location}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-gray-900">{app.job.salary}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-gray-600">
                        {new Date(app.appliedDate).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium ${statusConfig.color}`}>
                        {statusConfig.icon}
                        <span>{statusConfig.text}</span>
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                        View Details
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="lg:hidden space-y-4">
        {appliedJobs.map((app) => {
          const statusConfig = getStatusBadge(app.status);
          return (
            <div key={app._id} className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{app.job.jobTitle}</h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <FaBuilding className="text-gray-400" size={14} />
                    <span className="text-gray-700">{app.job.companyName}</span>
                  </div>
                </div>
                <span className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${statusConfig.color}`}>
                  {statusConfig.icon}
                  <span>{statusConfig.text}</span>
                </span>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <FaMapMarkerAlt className="text-gray-400" size={12} />
                  <span className="text-gray-600">{app.job.location}</span>
                </div>
                <div className="text-gray-900 font-medium">{app.job.salary}</div>
                <div className="text-gray-500">
                  Applied on {new Date(app.appliedDate).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </div>
              </div>
              
              <div className="mt-3 pt-3 border-t border-gray-200">
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center space-x-1">
                  <FaEye size={12} />
                  <span>View Details</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}