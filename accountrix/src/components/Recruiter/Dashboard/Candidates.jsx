import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Search, Filter, User, Briefcase, Star, Calendar, ChevronDown, MoreHorizontal, ArrowUpDown } from 'lucide-react';
import SearchBarFilter from './Applications/SearchBarFilter';
import Pagination from './Applications/Pagination';

const Candidates = ({ isActive }) => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const cacheRef = useRef({});
  const debounceTimeout = useRef();

  // Debounced fetch
  useEffect(() => {
    if (!isActive) return;
    setLoading(true);
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    debounceTimeout.current = setTimeout(() => {
      const cacheKey = `${currentPage}_${activeFilter}_${searchQuery}`;
      if (cacheRef.current[cacheKey]) {
        const cached = cacheRef.current[cacheKey];
        setCandidates(cached.candidates);
        setTotalPages(cached.totalPages);
        setLoading(false);
        return;
      }
      const fetchCandidates = async () => {
        try {
          const recruiterId = localStorage.getItem('recruiterId');
          const companyId = localStorage.getItem('companyId');
          if (!recruiterId) {
            console.error('No recruiter ID found');
            setLoading(false);
            return;
          }
          const response = await axios.get(`http://localhost:5000/dashboard/candidates/${recruiterId}`, {
            params: {
              companyId,
              page: currentPage,
              limit: 10,
              status: activeFilter,
              search: searchQuery
            }
          });
          setCandidates(response.data.candidates);
          setTotalPages(response.data.totalPages);
          cacheRef.current[cacheKey] = {
            candidates: response.data.candidates,
            totalPages: response.data.totalPages
          };
        } catch (error) {
          console.error('Error fetching candidates:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchCandidates();
    }, 300); // 300ms debounce
    return () => clearTimeout(debounceTimeout.current);
  }, [isActive, currentPage, activeFilter, searchQuery]);

  const statusColors = {
    "pending": "bg-blue-100 text-blue-800",
    "reviewed": "bg-purple-100 text-purple-800",
    "accepted": "bg-green-100 text-green-800",
    "rejected": "bg-red-100 text-red-800",
    "withdrawn": "bg-gray-100 text-gray-800"
  };

  const filters = ['All', 'Pending', 'Reviewed', 'Accepted', 'Rejected', 'Withdrawn'];

  const changeStatus = (id, newStatus) => {
    setCandidates(candidates.map(candidate => 
      candidate.id === id ? {...candidate, status: newStatus} : candidate
    ));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg text-gray-600">Loading candidates...</div>
      </div>
    );
  }

  return (
    <div className="max-h-[calc(100vh-66px)] overflow-y-auto bg-gray-50 flex flex-col">
      {/* Header - Fixed at top */}
      <header className="bg-white shadow top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">All Candidates</h1>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md font-medium flex items-center gap-2">
            <User size={18} />
            <span>Add Candidate</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6 sm:px-6 lg:px-8 flex flex-col">
        {/* Search Bar and Filter */}
        <SearchBarFilter 
          filters={filters} 
          setActiveFilter={setActiveFilter} 
          activeFilter={activeFilter} 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
        />

        {/* Candidates List */}
        <div className="max-h-[calc(100vh-345px)] rounded-lg shadow flex-1 flex flex-col overflow-y-auto">
          {/* Table Header */}
          <div className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center sticky top-0 z-10">
            <div className="w-8">S. No.</div>
            <div className="w-1/4 flex items-center gap-1">
              <span>Candidate</span>
              <ArrowUpDown size={14} className="ml-1" />
            </div>
            <div className="w-1/4 flex items-center gap-1">
              <span>Position</span>
              <ArrowUpDown size={14} className="ml-1" />
            </div>
            
            <div className="w-1/6 flex items-center gap-1">
              <span>Rating</span>
              <ArrowUpDown size={14} className="ml-1" />
            </div>
            <div className="w-1/6 flex items-center gap-1">
              <span>Status</span>
              <ArrowUpDown size={14} className="ml-1" />
            </div>
            <div className="w-1/6 text-right">Actions</div>
          </div>

          {/* Candidates Table */}
          <div className="bg-white">
            {candidates.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">No candidates found</p>
              </div>
            ) : (
              candidates.map((candidate, idx) => (
                <div key={candidate.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <div className="px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div className="w-8 flex items-center justify-center font-semibold text-gray-700">{idx + 1}</div>
                      <div className="flex items-center w-1/4">
                        <div className="ml-0">
                          <div className="font-medium text-gray-900">{candidate.name}</div>
                          <div className="text-sm text-gray-500">{candidate.experience}</div>
                        </div>
                      </div>
                      <div className="w-1/4">
                        <div className="text-sm font-medium text-gray-900">{candidate.position}</div>
                        <div className="text-sm text-gray-500">{candidate.company}</div>
                      </div>
                      <div className="w-1/6">
                        <div className="flex items-center">
                          <Star size={16} className="text-yellow-400" fill="currentColor" />
                          <span className="ml-1 text-sm text-gray-700">{candidate.rating}</span>
                        </div>
                      </div>
                      <div className="w-1/6">
                        <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${statusColors[candidate.status] || 'bg-gray-100 text-gray-800'}`}>
                          {candidate.status.charAt(0).toUpperCase() + candidate.status.slice(1)}
                        </span>
                      </div>
                      <div className="w-1/6 text-right">
                        <button className="text-sm font-medium text-indigo-600 hover:text-indigo-900">
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Pagination */}
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={setCurrentPage} 
          />
        </div>
      </main>
    </div>
  );
};

export default Candidates;