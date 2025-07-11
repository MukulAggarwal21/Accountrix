// // import React from 'react';
// // import { useState } from 'react';
// // // export default function ScheduledInterviewsTab({ userId }) {
// // //   // TODO: Replace with real API call when available
// // //   return (
// // //     <div className="py-2 px-1">
// // //       <div className="text-base font-semibold text-indigo-700 mb-4">Scheduled Interviews</div>
// // //       <div className="text-gray-400 text-sm">Scheduled interviews will appear here once available.</div>
// // //     </div>
// // //   );
// // // } 
// // import { FaUser, FaBriefcase, FaCalendarAlt, FaArrowLeft, FaSignOutAlt, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaClock, FaBuilding, FaCheckCircle, FaExclamationCircle, FaHourglassHalf } from 'react-icons/fa';

// // const mockInterviews = [
// //   {
// //     _id: "1",
// //     jobTitle: "Full Stack Developer",
// //     companyName: "TechCorp Inc.",
// //     interviewDate: "2024-07-15T14:00:00.000Z",
// //     interviewType: "Technical Interview",
// //     location: "Virtual - Zoom",
// //     duration: "60 minutes",
// //     interviewer: "John Smith, Senior Developer"
// //   },
// //   {
// //     _id: "2",
// //     jobTitle: "Senior React Developer",
// //     companyName: "Innovation Labs",
// //     interviewDate: "2024-07-18T10:30:00.000Z",
// //     interviewType: "HR Interview",
// //     location: "Office - Downtown",
// //     duration: "45 minutes",
// //     interviewer: "Sarah Wilson, HR Manager"
// //   },
// //   {
// //     _id: "3",
// //     jobTitle: "Frontend Engineer",
// //     companyName: "StartupXYZ",
// //     interviewDate: "2024-07-22T16:00:00.000Z",
// //     interviewType: "Final Round",
// //     location: "Virtual - Google Meet",
// //     duration: "90 minutes",
// //     interviewer: "Mike Johnson, CTO"
// //   }
// // ];



// // export default function ScheduledInterviewsTab({ userId }) {
// //   const [interviews, setInterviews] = useState(mockInterviews);
// //   const [loading, setLoading] = useState(false);

// //   if (loading) return <div className="flex justify-center items-center h-64"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div></div>;

// //   return (
// //     <div className="space-y-6">
// //       <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
// //         <h1 className="text-2xl font-bold text-gray-900 mb-2">Scheduled Interviews</h1>
// //         <p className="text-gray-600">Manage your upcoming interview schedule</p>
// //       </div>

// //       {interviews && interviews.length > 0 ? (
// //         <div className="space-y-4">
// //           {interviews.map((interview) => (
// //             <div key={interview._id} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
// //               <div className="flex items-start space-x-4">
// //                 <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
// //                   <FaCalendarAlt className="text-green-600" size={18} />
// //                 </div>
// //                 <div className="flex-1">
// //                   <h3 className="text-lg font-semibold text-gray-900 mb-1">
// //                     {interview.jobTitle}
// //                   </h3>
// //                   <p className="text-indigo-600 font-medium mb-2 flex items-center">
// //                     <FaBuilding className="mr-2" size={14} />
// //                     {interview.companyName}
// //                   </p>
// //                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
// //                     <div className="flex items-center">
// //                       <FaClock className="mr-2 text-gray-400" size={12} />
// //                       {new Date(interview.interviewDate).toLocaleDateString('en-US', { 
// //                         weekday: 'long',
// //                         year: 'numeric', 
// //                         month: 'long', 
// //                         day: 'numeric',
// //                         hour: '2-digit',
// //                         minute: '2-digit'
// //                       })}
// //                     </div>
// //                     <div className="flex items-center">
// //                       <FaMapMarkerAlt className="mr-2 text-gray-400" size={12} />
// //                       {interview.location}
// //                     </div>
// //                   </div>
// //                   <div className="mt-3">
// //                     <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium border border-blue-200">
// //                       {interview.interviewType}
// //                     </span>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       ) : (
// //         <div className="bg-white rounded-2xl p-12 border border-gray-200 text-center">
// //           <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
// //             <FaCalendarAlt className="text-gray-400" size={24} />
// //           </div>
// //           <h3 className="text-lg font-medium text-gray-900 mb-2">No Interviews Scheduled</h3>
// //           <p className="text-gray-500">Your upcoming interviews will appear here once scheduled.</p>
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


// // Interviews Tab Component
// export default function ScheduledInterviewsTab({ userId }) {
//   const [interviews] = useState(mockInterviews);

//   const getStatusBadge = (status) => {
//     const statusConfig = {
//       scheduled: { color: 'bg-blue-100 text-blue-800', text: 'Scheduled' },
//       completed: { color: 'bg-green-100 text-green-800', text: 'Completed' },
//       cancelled: { color: 'bg-red-100 text-red-800', text: 'Cancelled' }
//     };
//     return statusConfig[status] || statusConfig.scheduled;
//   };

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-2xl font-semibold text-gray-900">Scheduled Interviews</h1>
//           <p className="text-gray-600">Manage your upcoming interview schedule</p>
//         </div>
//         <div className="text-sm text-gray-500">
//           {interviews.length} interviews
//         </div>
//       </div>

//       <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead className="bg-gray-50 border-b border-gray-200">
//               <tr>
//                 <th className="text-left py-3 px-6 text-sm font-semibold text-gray-900">Job Title</th>
//                 <th className="text-left py-3 px-6 text-sm font-semibold text-gray-900">Company</th>
//                 <th className="text-left py-3 px-6 text-sm font-semibold text-gray-900">Date & Time</th>
//                 <th className="text-left py-3 px-6 text-sm font-semibold text-gray-900">Type</th>
//                 <th className="text-left py-3 px-6 text-sm font-semibold text-gray-900">Location</th>
//                 <th className="text-left py-3 px-6 text-sm font-semibold text-gray-900">Duration</th>
//                 <th className="text-left py-3 px-6 text-sm font-semibold text-gray-900">Interviewer</th>
//                 <th className="text-left py-3 px-6 text-sm font-semibold text-gray-900">Status</th>
//                 <th className="text-left py-3 px-6 text-sm font-semibold text-gray-900">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {interviews.map((interview) => {
//                 const statusConfig = getStatusBadge(interview.status);
//                 return (
//                   <tr key={interview._id} className="hover:bg-gray-50">
//                     <td className="py-4 px-6">
//                       <div className="font-medium text-gray-900">{interview.jobTitle}</div>
//                     </td>
//                     <td className="py-4 px-6">
//                       <div className="flex items-center space-x-2">
//                         <FaBuilding className="text-gray-400" size={14} />
//                         <span className="text-gray-900">{interview.companyName}</span>
//                       </div>
//                     </td>
//                     <td className="py-4 px-6">
//                       <div className="flex items-center space-x-2">
//                         <FaCalendarAlt className="text-gray-400" size={14} />
//                         <div>
//                           <div className="text-gray-900">
//                             {new Date(interview.interviewDate).toLocaleDateString('en-US', { 
//                               month: 'short', 
//                               day: 'numeric',
//                               year: 'numeric'
//                             })}
//                           </div>
//                           <div className="text-sm text-gray-500">
//                             {new Date(interview.interviewDate).toLocaleTimeString('en-US', { 
//                               hour: '2-digit',
//                               minute: '2-digit'
//                             })}
//                           </div>
//                         </div>
//                       </div>
//                     </td>
//                     <td className="py-4 px-6">
//                       <span className="text-gray-900">{interview.interviewType}</span>
//                     </td>
//                     <td className="py-4 px-6">
//                       <div className="flex items-center space-x-2">
//                         <FaMapMarkerAlt className="text-gray-400" size={14} />
//                         <span className="text-gray-600">{interview.location}</span>
//                       </div>
//                     </td>
//                     <td className="py-4 px-6">
//                       <div className="flex items-center space-x-2">
//                         <FaClock className="text-gray-400" size={14} />
//                         <span className="text-gray-600">{interview.duration}</span>
//                       </div>
//                     </td>
//                     <td className="py-4 px-6">
//                       <span className="text-gray-900">{interview.interviewer}</span>
//                     </td>
//                     <td className="py-4 px-6">
//                       <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${statusConfig.color}`}>
//                         {statusConfig.text}
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
import { FaUser, FaBriefcase, FaCalendarAlt, FaArrowLeft, FaSignOutAlt, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaClock, FaBuilding, FaCheckCircle, FaExclamationCircle, FaHourglassHalf, FaEdit, FaEye, FaChevronRight } from 'react-icons/fa';

const mockInterviews = [
  {
    _id: "1",
    jobTitle: "Full Stack Developer",
    companyName: "TechCorp Inc.",
    interviewDate: "2024-07-15T14:00:00.000Z",
    interviewType: "Technical Interview",
    location: "Virtual - Zoom",
    duration: "60 minutes",
    interviewer: "John Smith, Senior Developer",
    status: "scheduled"
  },
  {
    _id: "2",
    jobTitle: "Senior React Developer",
    companyName: "Innovation Labs",
    interviewDate: "2024-07-18T10:30:00.000Z",
    interviewType: "HR Interview",
    location: "Office - Downtown",
    duration: "45 minutes",
    interviewer: "Sarah Wilson, HR Manager",
    status: "scheduled"
  },
  {
    _id: "3",
    jobTitle: "Frontend Engineer",
    companyName: "StartupXYZ",
    interviewDate: "2024-07-22T16:00:00.000Z",
    interviewType: "Final Round",
    location: "Virtual - Google Meet",
    duration: "90 minutes",
    interviewer: "Mike Johnson, CTO",
    status: "completed"
  }
];

export default function ScheduledInterviewsTab({ userId }) {
  const [interviews] = useState(mockInterviews);

  const getStatusBadge = (status) => {
    const statusConfig = {
      scheduled: { color: 'bg-blue-100 text-blue-800', text: 'Scheduled' },
      completed: { color: 'bg-green-100 text-green-800', text: 'Completed' },
      cancelled: { color: 'bg-red-100 text-red-800', text: 'Cancelled' }
    };
    return statusConfig[status] || statusConfig.scheduled;
  };

  return (
    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">Scheduled Interviews</h1>
          <p className="text-sm sm:text-base text-gray-600 mt-1">Manage your upcoming interview schedule</p>
        </div>
        <div className="text-sm text-gray-500 sm:text-right">
          {interviews.length} interview{interviews.length !== 1 ? 's' : ''}
        </div>
      </div>

      {/* Desktop Table View - Hidden on mobile */}
      <div className="hidden lg:block bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-6 text-sm font-semibold text-gray-900">Job Title</th>
                <th className="text-left py-3 px-6 text-sm font-semibold text-gray-900">Company</th>
                <th className="text-left py-3 px-6 text-sm font-semibold text-gray-900">Date & Time</th>
                <th className="text-left py-3 px-6 text-sm font-semibold text-gray-900">Type</th>
                <th className="text-left py-3 px-6 text-sm font-semibold text-gray-900">Location</th>
                <th className="text-left py-3 px-6 text-sm font-semibold text-gray-900">Duration</th>
                <th className="text-left py-3 px-6 text-sm font-semibold text-gray-900">Interviewer</th>
                <th className="text-left py-3 px-6 text-sm font-semibold text-gray-900">Status</th>
                <th className="text-left py-3 px-6 text-sm font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {interviews.map((interview) => {
                const statusConfig = getStatusBadge(interview.status);
                return (
                  <tr key={interview._id} className="hover:bg-gray-50">
                    <td className="py-4 px-6">
                      <div className="font-medium text-gray-900">{interview.jobTitle}</div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <FaBuilding className="text-gray-400" size={14} />
                        <span className="text-gray-900">{interview.companyName}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <FaCalendarAlt className="text-gray-400" size={14} />
                        <div>
                          <div className="text-gray-900">
                            {new Date(interview.interviewDate).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </div>
                          <div className="text-sm text-gray-500">
                            {new Date(interview.interviewDate).toLocaleTimeString('en-US', { 
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-gray-900">{interview.interviewType}</span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <FaMapMarkerAlt className="text-gray-400" size={14} />
                        <span className="text-gray-600">{interview.location}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <FaClock className="text-gray-400" size={14} />
                        <span className="text-gray-600">{interview.duration}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-gray-900">{interview.interviewer}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${statusConfig.color}`}>
                        {statusConfig.text}
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

      {/* Mobile/Tablet Card View - Visible on mobile and tablet */}
      <div className="lg:hidden space-y-4">
        {interviews.map((interview) => {
          const statusConfig = getStatusBadge(interview.status);
          return (
            <div key={interview._id} className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow">
              {/* Header with Job Title and Status */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{interview.jobTitle}</h3>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <FaBuilding className="text-gray-400" size={14} />
                    <span className="font-medium">{interview.companyName}</span>
                  </div>
                </div>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${statusConfig.color} flex-shrink-0`}>
                  {statusConfig.text}
                </span>
              </div>

              {/* Date and Time */}
              <div className="flex items-center space-x-2 mb-3">
                <FaCalendarAlt className="text-gray-400" size={16} />
                <div>
                  <div className="text-gray-900 font-medium">
                    {new Date(interview.interviewDate).toLocaleDateString('en-US', { 
                      weekday: 'long',
                      month: 'short', 
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                  <div className="text-sm text-gray-500">
                    {new Date(interview.interviewDate).toLocaleTimeString('en-US', { 
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </div>
                </div>
              </div>

              {/* Interview Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <div className="flex items-center space-x-2">
                  <FaMapMarkerAlt className="text-gray-400" size={14} />
                  <div>
                    <div className="text-xs text-gray-500">Location</div>
                    <div className="text-sm text-gray-900">{interview.location}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <FaClock className="text-gray-400" size={14} />
                  <div>
                    <div className="text-xs text-gray-500">Duration</div>
                    <div className="text-sm text-gray-900">{interview.duration}</div>
                  </div>
                </div>
              </div>

              {/* Interview Type and Interviewer */}
              <div className="space-y-2 mb-4">
                <div className="text-xs text-gray-500">Interview Type</div>
                <div className="text-sm font-medium text-gray-900">{interview.interviewType}</div>
                <div className="text-xs text-gray-500">Interviewer</div>
                <div className="text-sm text-gray-900">{interview.interviewer}</div>
              </div>

              {/* Action Button */}
              <div className="flex justify-end pt-3 border-t border-gray-100">
                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 text-sm font-medium">
                  <span>View Details</span>
                  <FaChevronRight size={12} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {interviews.length === 0 && (
        <div className="bg-white border border-gray-200 rounded-lg p-8 sm:p-12 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaCalendarAlt className="text-gray-400" size={24} />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Interviews Scheduled</h3>
          <p className="text-gray-500 text-sm sm:text-base">Your upcoming interviews will appear here once scheduled.</p>
        </div>
      )}
    </div>
  );
}