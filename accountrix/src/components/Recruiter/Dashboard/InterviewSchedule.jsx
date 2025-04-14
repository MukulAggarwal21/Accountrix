import { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, MessageSquare, User, Briefcase, Filter, Plus, Trash2, ArrowLeft, Search, CheckCircle, XCircle, FileText, ExternalLink, Edit, ChevronDown, ChevronRight } from 'lucide-react';
import CalendarView from './CalenderView';
import ListView from './ListView';
// Mock data for interviews
const initialInterviews = [
    {
        id: 1,
        candidate: "Michael Chen",
        role: "Product Manager",
        time: "10:00 AM",
        date: new Date(2025, 3, 13), // Today
        status: "upcoming",
        location: "Conference Room A",
        resume: "/resume-link",
        email: "michael.chen@example.com",
        phone: "(555) 123-4567",
        description: "First round interview for the Product Manager position. Focus on product strategy and leadership experience.",
        interviewer: "Sarah Johnson"
    },
    {
        id: 2,
        candidate: "Alex Rodriguez",
        role: "DevOps Engineer",
        time: "2:30 PM",
        date: new Date(2025, 3, 13), // Today
        status: "upcoming",
        location: "Virtual (Zoom)",
        resume: "/resume-link",
        email: "alex.rodriguez@example.com",
        phone: "(555) 987-6543",
        description: "Technical interview for DevOps position. Focus on CI/CD pipelines and cloud architecture.",
        interviewer: "David Kim"
    },
    {
        id: 3,
        candidate: "Emily Wong",
        role: "Marketing Specialist",
        time: "11:15 AM",
        date: new Date(2025, 3, 14), // Tomorrow
        status: "upcoming",
        location: "Conference Room B",
        resume: "/resume-link",
        email: "emily.wong@example.com",
        phone: "(555) 234-5678",
        description: "Discussing marketing campaign experience and creative portfolio review.",
        interviewer: "Jessica Lee"
    },
    {
        id: 4,
        candidate: "James Wilson",
        role: "Software Engineer",
        time: "3:00 PM",
        date: new Date(2025, 3, 10), // Past
        status: "completed",
        location: "Virtual (Teams)",
        resume: "/resume-link",
        feedback: "Strong technical skills, good cultural fit. Recommend moving to next round.",
        rating: 4,
        email: "james.wilson@example.com",
        interviewer: "Robert Chen"
    },
    {
        id: 5,
        candidate: "Sophia Garcia",
        role: "UX Designer",
        time: "1:30 PM",
        date: new Date(2025, 3, 11), // Past
        status: "completed",
        location: "Design Studio",
        resume: "/resume-link",
        feedback: "Excellent portfolio, innovative approach to problem-solving. Highly recommended.",
        rating: 5,
        email: "sophia.garcia@example.com",
        interviewer: "Michelle Park"
    },
    {
        id: 6,
        candidate: "Raj Patel",
        role: "Data Scientist",
        time: "9:30 AM",
        date: new Date(2025, 3, 15), // Future
        status: "upcoming",
        location: "Virtual (Zoom)",
        resume: "/resume-link",
        email: "raj.patel@example.com",
        phone: "(555) 876-5432",
        description: "Technical assessment focusing on machine learning models and data analysis experience.",
        interviewer: "Andrew Thompson"
    }
];

// Format date for display
const formatDate = (date) => {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    if (date.toDateString() === today.toDateString()) {
        return "Today";
    } else if (date.toDateString() === tomorrow.toDateString()) {
        return "Tomorrow";
    } else {
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    }
};

// Month names for grouping
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function InterviewSchedule() {
    const [interviews, setInterviews] = useState(initialInterviews);
    const [selectedInterview, setSelectedInterview] = useState(null);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const [activeFilter, setActiveFilter] = useState("all");


    const [searchTerm, setSearchTerm] = useState("");
    const [newInterview, setNewInterview] = useState({
        candidate: "",
        role: "",
        date: "",
        time: "",
        location: "",
        description: "",
        email: "",
        phone: "",
        interviewer: "",
        status: "upcoming"
    });

    const [currentView, setCurrentView] = useState("calendar"); // calendar or list

    // Filter interviews based on active filter and search term
    const filteredInterviews = interviews.filter(interview => {
        const matchesFilter =
            activeFilter === "all" ||
            (activeFilter === "upcoming" && interview.status === "upcoming") ||
            (activeFilter === "completed" && interview.status === "completed");

        const matchesSearch =
            interview.candidate.toLowerCase().includes(searchTerm.toLowerCase()) ||
            interview.role.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesFilter && matchesSearch;
    });

    // Group interviews by month for calendar view


    // Handle opening interview details
    const handleOpenDetails = (interview) => {
        setSelectedInterview(interview);
        setIsDetailModalOpen(true);
    };

    // Handle adding a new interview
    const handleAddInterview = () => {
        const formattedDate = new Date(newInterview.date);

        const newId = Math.max(...interviews.map(i => i.id)) + 1;

        setInterviews([
            ...interviews,
            {
                ...newInterview,
                id: newId,
                date: formattedDate,
                status: "upcoming"
            }
        ]);

        setIsAddModalOpen(false);
        setNewInterview({
            candidate: "",
            role: "",
            date: "",
            time: "",
            location: "",
            description: "",
            email: "",
            phone: "",
            interviewer: "",
            status: "upcoming"
        });
    };



    // Handle submitting feedback
    const handleSubmitFeedback = (id, feedback, rating) => {
        setInterviews(interviews.map(interview =>
            interview.id === id
                ? { ...interview, feedback, rating, status: "completed" }
                : interview
        ));
        setIsDetailModalOpen(false);
    };

    // Interview Card Component
    const InterviewCard = ({ interview }) => {
        const isPast = interview.status === "completed";

        return (
            <div
                className={`p-4 rounded-lg shadow-md mb-4 cursor-pointer transition-all hover:shadow-lg ${isPast ? 'bg-gray-50' : 'bg-white border-l-4 border-blue-500'}`}
                onClick={() => handleOpenDetails(interview)}
            >
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="font-semibold text-lg">{interview.candidate}</h3>
                        <div className="flex items-center text-gray-600 mt-1">
                            <Briefcase className="w-4 h-4 mr-1" />
                            <span>{interview.role}</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-end">
                        <div className="flex items-center text-gray-700">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{interview.time}</span>
                        </div>
                        <div className="text-gray-600 mt-1">
                            {formatDate(interview.date)}
                        </div>
                    </div>
                </div>

                <div className="mt-3 flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{interview.location}</span>
                </div>

                {isPast && (
                    <div className="mt-2 flex items-center">
                        <div className="flex items-center">
                            <span className="text-sm font-medium mr-1">Rating:</span>
                            <div className="flex">
                                {[...Array(interview.rating)].map((_, index) => (
                                    <CheckCircle key={index} className="w-4 h-4 text-blue-500" />
                                ))}
                                {[...Array(5 - interview.rating)].map((_, index) => (
                                    <XCircle key={index} className="w-4 h-4 text-gray-300" />
                                ))}
                            </div>
                        </div>
                        <ExternalLink className="w-4 h-4 ml-4 text-blue-500 cursor-pointer" />
                    </div>
                )}
            </div>
        );
    };

    // Handle opening interview details
const handleViewDetails = (interview) => {
    setSelectedInterview(interview); // Set the selected interview
    setIsDetailModalOpen(true); // Open the detail modal
};




 


    // Modal for adding new interview
    const AddInterviewModal = () => {
        const handleInputChange = (e) => {
            const { name, value } = e.target;
            setNewInterview(prev => ({
                ...prev,
                [name]: value
            }));
        };

        return (
            <div className={`fixed inset-0 flex items-center justify-center z-50 ${isAddModalOpen ? 'block' : 'hidden'}`}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative bg-white w-full max-w-md mx-auto rounded-lg shadow-lg z-50 overflow-y-auto">
                    <div className="p-6">
                        <h2 className="text-xl font-semibold mb-4">Add New Interview</h2>

                        <div className="mb-4">
                            <label htmlFor="candidate" className="block text-sm font-medium text-gray-700">Candidate Name</label>
                            <input type="text" id="candidate" name="candidate" value={newInterview.candidate} onChange={handleInputChange} className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                        </div>

                        {/* Other input fields for role, date, time, location, description, email, phone, and interviewer */}

                        <div className="flex justify-end mt-6">
                            <button onClick={handleAddInterview} className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Add Interview</button>
                            <button onClick={() => setIsAddModalOpen(false)} className="ml-2 inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-transparent rounded-md shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    // Modal for detailed interview view
    const DetailModal = ({ interview }) => {
        const [feedback, setFeedback] = useState(interview.feedback || "");
        const [rating, setRating] = useState(interview.rating || 0);

        const handleFeedbackChange = (e) => {
            setFeedback(e.target.value);
        };

        const handleRatingChange = (value) => {
            setRating(value);
        };

        const handleSaveFeedback = () => {
            handleSubmitFeedback(interview.id, feedback, rating);
        };

        return (
            <div className={`fixed inset-0 flex items-center justify-center z-50 ${isDetailModalOpen ? 'block' : 'hidden'}`}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative bg-white w-full max-w-lg mx-auto rounded-lg shadow-lg z-50 overflow-y-auto">
                    <div className="p-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-semibold">Interview Details</h2>
                            <button onClick={() => setIsDetailModalOpen(false)} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                                <XCircle className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="mt-4">
                            <div className="flex items-center text-gray-600 mb-2">
                                <Calendar className="w-4 h-4 mr-1" />
                                <span>{formatDate(interview.date)}</span>
                            </div>

                            <div className="flex items-center text-gray-600 mb-2">
                                <Clock className="w-4 h-4 mr-1" />
                                <span>{interview.time}</span>
                            </div>

                            <div className="flex items-center text-gray-600 mb-2">
                                <MapPin className="w-4 h-4 mr-1" />
                                <span>{interview.location}</span>
                            </div>

                            <div className="flex items-center text-gray-600 mb-4">
                                <User className="w-4 h-4 mr-1" />
                                <span>{interview.interviewer}</span>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-1">Feedback</label>
                                <textarea id="feedback" value={feedback} onChange={handleFeedbackChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" rows="3"></textarea>
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                                <div className="flex items-center">
                                    {[1, 2, 3, 4, 5].map((value) => (
                                        <button key={value} onClick={() => handleRatingChange(value)} className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium mr-2 focus:outline-none ${rating >= value ? 'text-blue-500 bg-blue-100' : 'text-gray-300 bg-gray-100'}`}>
                                            {value}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <button onClick={handleSaveFeedback} className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Save Feedback</button>
                                <button onClick={() => setIsDetailModalOpen(false)} className="ml-2 inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-transparent rounded-md shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="h-full     px-4 sm:px-6 lg:px-8 pt-4 ">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-4xl font-semibold">Interview Schedule</h1>
                <div className="flex items-center">
                  
          
                </div>
            </div>

            <div className="mb-6 flex  items-center justify-between">
                <div className="flex items-center">
                    <button onClick={() => setCurrentView('calendar')} className={`mr-4 text-gray-600 hover:text-blue-500 focus:outline-none underline ${currentView === 'calendar' ? 'font-semibold text-blue-500' : ''}`}>
                        Calendar View
                    </button>
                    <button onClick={() => setCurrentView('list')} className={`text-gray-600 hover:text-blue-500 focus:outline-none underline ${currentView === 'list' ? 'font-semibold text-blue-500' : ''}`}>
                        List View
                    </button>
                </div>

            </div>

            {/* Calendar and List Views */}
            {currentView === 'calendar' ? (
                <CalendarView interviews={filteredInterviews} onClickInterview={handleViewDetails} months={months}/>
            ) : (
                <ListView interviews={filteredInterviews} onClickInterview={handleViewDetails} />
            )}

            {/* Modals */}
            <AddInterviewModal />
            {selectedInterview && <DetailModal interview={selectedInterview} />}
        </div>
    );
};
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   

// import { useState } from 'react';
// import {
//   Calendar,
//   Clock,
//   MapPin,
//   Briefcase,
//   Filter,
//   Plus,
//   Search,
//   ChevronRight,
//   Calendar as CalendarIcon,
// } from 'lucide-react';

// const CalendarView = ({ interviews, onClickInterview, months }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showFilters, setShowFilters] = useState(false);
//   const [selectedStatus, setSelectedStatus] = useState('All');

//   // Filter interviews based on search term and status
//   const filteredInterviews = interviews.filter((interview) => {
//     const matchesSearch =
//       interview.candidate.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       interview.role.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesStatus = selectedStatus === 'All' || interview.status === selectedStatus;
//     return matchesSearch && matchesStatus;
//   });

//   // Group interviews by month
//   const groupedByMonth = filteredInterviews.reduce((acc, interview) => {
//     const month = months[interview.date.getMonth()];
//     if (!acc[month]) acc[month] = [];
//     acc[month].push(interview);
//     return acc;
//   }, {});

//   // Group by day within each month for better organization
//   const groupedByMonthAndDay = Object.keys(groupedByMonth).reduce((acc, month) => {
//     acc[month] = groupedByMonth[month].reduce((dayAcc, interview) => {
//       const day = interview.date.getDate();
//       if (!dayAcc[day]) dayAcc[day] = [];
//       dayAcc[day].push(interview);
//       return dayAcc;
//     }, {});
//     return acc;
//   }, {});

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'Scheduled':
//         return 'bg-blue-100 text-blue-700 border-blue-300';
//       case 'Completed':
//         return 'bg-green-100 text-green-700 border-green-300';
//       case 'Cancelled':
//         return 'bg-red-100 text-red-700 border-red-300';
//       case 'Pending':
//         return 'bg-yellow-100 text-yellow-700 border-yellow-300';
//       default:
//         return 'bg-gray-100 text-gray-700 border-gray-300';
//     }
//   };

//   const monthColors = {
//     January: 'bg-blue-50',
//     February: 'bg-indigo-50',
//     March: 'bg-purple-50',
//     April: 'bg-pink-50',
//     May: 'bg-red-50',
//     June: 'bg-orange-50',
//     July: 'bg-amber-50',
//     August: 'bg-yellow-50',
//     September: 'bg-lime-50',
//     October: 'bg-green-50',
//     November: 'bg-emerald-50',
//     December: 'bg-teal-50',
//   };

//   return (
//     <div className="flex flex-col h-[calc(100vh-150px)]">
//       {/* Header and Search Bar */}
//       <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-lg shadow mb-4">
//         <div className="flex items-center mb-4 md:mb-0">
//           <CalendarIcon className="w-6 h-6 text-blue-600 mr-2" />
//           <h2 className="text-2xl font-bold text-gray-800">Calendar View</h2>
//         </div>
//         <div className="flex space-x-2 w-full md:w-auto">
//           <div className="relative flex-grow md:flex-grow-0 md:w-64">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//             <input
//               type="text"
//               placeholder="Search interviews..."
//               className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
//           <button
//             className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
//             onClick={() => {}}
//           >
//             <Plus className="w-4 h-4 mr-1" />
//             <span className="hidden md:inline">New</span>
//           </button>
//           <button
//             className={`flex items-center ${
//               showFilters ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'
//             } px-4 py-2 rounded-lg transition`}
//             onClick={() => setShowFilters(!showFilters)}
//           >
//             <Filter className="w-4 h-4 mr-1" />
//             <span className="hidden md:inline">Filters</span>
//           </button>
//         </div>
//       </div>

//       {/* Scrollable Content */}
//       <div className="flex-grow overflow-y-auto space-y-6">
//         {/* Calendar Grid */}
//         {Object.keys(groupedByMonth).map((month) => (
//           <div key={month} className="bg-white rounded-lg shadow overflow-hidden">
//             <div className={`p-4 ${monthColors[month] || 'bg-blue-50'} border-b border-gray-200`}>
//               <div className="flex items-center">
//                 <Calendar className="w-5 h-5 text-gray-700 mr-2" />
//                 <h2 className="text-xl font-bold text-gray-800">{month}</h2>
//                 <span className="ml-2 text-sm text-gray-600 bg-white px-2 py-1 rounded-full">
//                   {Object.values(groupedByMonthAndDay[month]).flat().length} interviews
//                 </span>
//               </div>
//             </div>

//             <div className="p-6">
//               {Object.keys(groupedByMonthAndDay[month])
//                 .sort((a, b) => parseInt(a) - parseInt(b))
//                 .map((day) => (
//                   <div key={`${month}-${day}`} className="mb-6 last:mb-0">
//                     <div className="flex items-center mb-3">
//                       <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-2">
//                         {day}
//                       </div>
//                       <h3 className="text-lg font-medium text-gray-800">
//                         {new Date(new Date().getFullYear(), months.indexOf(month), day).toLocaleDateString(undefined, {
//                           weekday: 'long',
//                         })}
//                       </h3>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pl-10">
//                       {groupedByMonthAndDay[month][day].map((interview) => (
//                         <div
//                           key={interview.id}
//                           className={`p-4 bg-white rounded-lg border ${getStatusColor(interview.status)} hover:shadow-md transition cursor-pointer relative`}
//                           onClick={() => onClickInterview(interview)}
//                         >
//                           <div className="absolute -left-10 top-4 flex flex-col items-center">
//                             <div className="w-2 h-2 rounded-full bg-blue-600"></div>
//                             <div className="text-xs font-medium text-gray-600 mt-1 transform -rotate-90">
//                               {interview.time}
//                             </div>
//                           </div>

//                           <div className="flex justify-between items-start">
//                             <div>
//                               <h3 className="text-lg font-bold text-gray-900 mb-1">{interview.candidate}</h3>
//                               <div className="flex items-center">
//                                 <Briefcase className="w-3 h-3 text-gray-500 mr-1" />
//                                 <p className="text-sm text-gray-600">{interview.role}</p>
//                               </div>
//                             </div>
//                             <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(interview.status)}`}>
//                               {interview.status}
//                             </span>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CalendarView;