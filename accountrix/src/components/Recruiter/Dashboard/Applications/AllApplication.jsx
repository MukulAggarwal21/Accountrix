import { useState } from 'react';
import { Search, Filter, User, Briefcase, Star, Calendar, ChevronDown, MoreHorizontal, ArrowUpDown } from 'lucide-react';
import SearchBarFilter from './SearchBarFilter';
import Pagination from './Pagination';

export default function AllApplication() {
  const [applications, setApplications] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      image: "/api/placeholder/64/64",
      experience: "5 years exp",
      position: "Senior Frontend Developer",
      company: "Tech Solutions Inc",
      rating: 4.8,
      status: "In Review",
      applied: "April 10, 2025",
      skills: ["React", "TypeScript", "Tailwind CSS", "GraphQL"],
      education: "BS Computer Science, MIT",
      email: "sarah.j@example.com",
      phone: "+1 (555) 123-4567",
      expanded: false
    },
    {
      id: 2,
      name: "Michael Chen",
      image: "/api/placeholder/64/64",
      experience: "7 years exp",
      position: "Product Manager",
      company: "Global Innovations",
      rating: 4.5,
      status: "Interview",
      applied: "April 8, 2025",
      skills: ["Product Strategy", "User Research", "Agile", "Roadmapping"],
      education: "MBA, Stanford University",
      email: "m.chen@example.com",
      phone: "+1 (555) 234-5678",
      expanded: false
    },
    {
      id: 3,
      name: "Priya Sharma",
      image: "/api/placeholder/64/64",
      experience: "4 years exp",
      position: "UX Designer",
      company: "Creative Minds",
      rating: 4.6,
      status: "In Review",
      applied: "April 11, 2025",
      skills: ["Figma", "User Testing", "Wireframing", "Prototyping"],
      education: "BFA Design, RISD",
      email: "priya.s@example.com",
      phone: "+1 (555) 345-6789",
      expanded: false
    },
    {
      id: 4,
      name: "James Wilson",
      image: "/api/placeholder/64/64",
      experience: "6 years exp",
      position: "Backend Developer",
      company: "Data Systems",
      rating: 4.2,
      status: "Shortlisted",
      applied: "April 5, 2025",
      skills: ["Node.js", "Python", "MongoDB", "AWS"],
      education: "MS Software Engineering, Georgia Tech",
      email: "j.wilson@example.com",
      phone: "+1 (555) 456-7890",
      expanded: false
    },
    {
      id: 5,
      name: "Emma Rodriguez",
      image: "/api/placeholder/64/64",
      experience: "3 years exp",
      position: "Marketing Specialist",
      company: "Brand Elevate",
      rating: 4.4,
      status: "New",
      applied: "April 14, 2025",
      skills: ["Content Strategy", "SEO", "Social Media", "Analytics"],
      education: "BA Marketing, NYU",
      email: "emma.r@example.com",
      phone: "+1 (555) 567-8901",
      expanded: false
    },
    {
      id: 6,
      name: "David Kim",
      image: "/api/placeholder/64/64",
      experience: "8 years exp",
      position: "DevOps Engineer",
      company: "Cloud Systems",
      rating: 4.7,
      status: "Interview",
      applied: "April 7, 2025",
      skills: ["Docker", "Kubernetes", "CI/CD", "Terraform"],
      education: "BS Computer Engineering, UC Berkeley",
      email: "d.kim@example.com", 
      phone: "+1 (555) 678-9012",
      expanded: false
    },
    {
      id: 7,
      name: "Olivia Martinez",
      image: "/api/placeholder/64/64",
      experience: "4 years exp",
      position: "Data Scientist",
      company: "Analytics Pro",
      rating: 4.6,
      status: "New",
      applied: "April 12, 2025",
      skills: ["Python", "Machine Learning", "SQL", "Data Visualization"],
      education: "MS Data Science, Columbia University",
      email: "o.martinez@example.com", 
      phone: "+1 (555) 789-0123",
      expanded: false
    },
    {
      id: 8,
      name: "Thomas Lee",
      image: "/api/placeholder/64/64",
      experience: "6 years exp",
      position: "Project Manager",
      company: "Tech Innovate",
      rating: 4.3,
      status: "In Review",
      applied: "April 9, 2025",
      skills: ["Agile", "Scrum", "Jira", "Resource Management"],
      education: "MBA, University of Chicago",
      email: "t.lee@example.com", 
      phone: "+1 (555) 890-1234",
      expanded: false
    }
  ]);

  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const statusColors = {
    "New": "bg-blue-100 text-blue-800",
    "In Review": "bg-purple-100 text-purple-800",
    "Interview": "bg-orange-100 text-orange-800",
    "Shortlisted": "bg-green-100 text-green-800",
    "Rejected": "bg-red-100 text-red-800"
  };

  const filters = ['All', 'New', 'In Review', 'Interview', 'Shortlisted', 'Rejected'];

  const changeStatus = (id, newStatus) => {
    setApplications(applications.map(app => 
      app.id === id ? {...app, status: newStatus} : app
    ));
  };

  const toggleExpand = (id) => {
    
    setApplications(applications.map(app => 
      app.id === id ? {...app, expanded: !app.expanded} : app
    ));
  };

  const filteredApplications = applications.filter(app => {
    const matchesFilter = activeFilter === 'All' || app.status === activeFilter;
    const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        app.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        app.company.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className=" max-h-[calc(100vh-66px)] overflow-y-auto   bg-gray-50 flex flex-col">
      {/* Header - Fixed at top */}
      <header className="bg-white shadow  top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Applications Management</h1>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md font-medium flex items-center gap-2">
            <User size={18} />
            <span>Add Candidate</span>
          </button>
        </div>
      </header>

      {/* Main Content - With proper height management */}

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6 sm:px-6 lg:px-8 flex flex-col">
      {/* Search Bar and Filter */}
        <SearchBarFilter filters={filters} setActiveFilter={ setActiveFilter} activeFilter={activeFilter} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />


        {/* Applications List - Scrollable container with fixed height */}
        <div className=" bg-red-600  max-h-[calc(100vh-345px)]  rounded-lg shadow flex-1 flex flex-col overflow-y-auto">
          {/* Table Header - Sticky within scrollable area */}
          <div className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center sticky top-0 z-10">
            <div className="w-8"></div>
            <div className="w-1/4 flex items-center gap-1">
              <span>Candidate</span>
              <ArrowUpDown size={14} className="ml-1" />
            </div>
            <div className="w-1/5 lg:flex items-center gap-1 hidden">
              <span>Position</span>
              <ArrowUpDown size={14} className="ml-1" />
            </div>
            <div className="w-1/6 lg:flex items-center gap-1 hidden">
              <span>Rating</span>
              <ArrowUpDown size={14} className="ml-1" />
            </div>
            <div className="w-1/6 flex items-center gap-1">
              <span>Status</span>
              <ArrowUpDown size={14} className="ml-1" />
            </div>
            <div className="w-1/5 lg:flex items-center gap-1 hidden">
              <span>Applied</span>
              <ArrowUpDown size={14} className="ml-1" />
            </div>
            <div className="w-8"></div>
          </div>

          {/* Scrollable content area */}
          <div className="overflow-y-auto" style={{ maxHeight: "calc(100vh - 265px)" }}>
            <div className="divide-y divide-gray-200">
              {filteredApplications.length > 0 ? (
                filteredApplications.map(candidate => (
                  <div key={candidate.id} className="bg-white">
                    {/* Main candidate row */}
                    <div className="px-6 py-4 flex items-center hover:bg-gray-50 cursor-pointer" onClick={() => toggleExpand(candidate.id)}>
                      <div className="w-8">
                        <ChevronDown size={20} className={`text-gray-400 transform transition-transform ${candidate.expanded ? 'rotate-180' : ''}`} />
                      </div>
                      <div className="w-1/4 flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src={candidate.image} alt={candidate.name} />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{candidate.name}</div>
                          <div className="text-sm text-gray-500">{candidate.experience}</div>
                        </div>
                      </div>
                      <div className="w-1/5 lg:block hidden">
                        <div className="text-sm text-gray-900">{candidate.position}</div>
                        <div className="text-xs text-gray-500">{candidate.company}</div>
                      </div>
                      <div className="w-1/6 lg:flex hidden items-center">
                        <div className="flex items-center">
                          <Star size={16} className="text-yellow-400 fill-current" />
                          <span className="ml-1 text-sm text-gray-700">{candidate.rating}</span>
                        </div>
                      </div>
                      <div className="w-1/6">
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${statusColors[candidate.status]}`}>
                          {candidate.status}
                        </span>
                      </div>
                      <div className="w-1/5 text-sm text-gray-500 lg:block hidden">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {candidate.applied}
                        </div>
                      </div>
                      <div className="w-8 flex justify-end">
                        <button className="text-gray-400 hover:text-gray-500">
                          <MoreHorizontal size={20} />
                        </button>
                      </div>
                    </div>

                    {/* Expanded details */}
                    {candidate.expanded && (
                      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="space-y-4">
                            <h3 className="text-lg font-medium text-gray-900">Contact Information</h3>
                            <div>
                              <p className="text-sm text-gray-500">Email</p>
                              <p className="text-sm font-medium text-gray-900">{candidate.email}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Phone</p>
                              <p className="text-sm font-medium text-gray-900">{candidate.phone}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Education</p>
                              <p className="text-sm font-medium text-gray-900">{candidate.education}</p>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <h3 className="text-lg font-medium text-gray-900">Skills</h3>
                            <div className="flex flex-wrap gap-2">
                              {candidate.skills.map((skill, index) => (
                                <span key={index} className="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <h3 className="text-lg font-medium text-gray-900">Application Status</h3>
                            <div className="flex flex-col gap-2">
                              <p className="text-sm text-gray-500">Current Status</p>
                              <div className="flex flex-wrap gap-2">
                                {["New", "In Review", "Interview", "Shortlisted", "Rejected"].map((status) => (
                                  <button
                                    key={status}
                                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                                      candidate.status === status
                                        ? statusColors[status]
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      changeStatus(candidate.id, status);
                                    }}
                                  >
                                    {status}
                                  </button>
                                ))}
                              </div>
                            </div>
                            <div className="flex items-center space-x-2 mt-4">
                              <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded">
                                Schedule Interview
                              </button>
                              <button className="bg-white border border-gray-300 text-gray-700 text-sm px-4 py-2 rounded hover:bg-gray-50">
                                Download Resume
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="px-6 py-12 text-center">
                  <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
                    <User size={36} className="text-gray-400" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">No candidates found</h3>
                  <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Pagination - Fixed at bottom */}
      <Pagination filteredApplications={filteredApplications} applications={applications} />

      </main>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}