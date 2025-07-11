import React, { useState, useEffect, useRef } from 'react';
import JobCard from '../../Card/JobCard';
import JobSearchResult from './JobSearchResult';
import JobseachAnimation from '../../../assets/Animations/jobsearch.json';
import Lottie from 'react-lottie';
import Navbar from '../../Navbar';
import { useAuth } from '../../../App';

const JobSearch = () => {
  const { isAuthenticated, userType } = useAuth();
  // Refs for detecting clicks outside dropdowns
  const expDropdownRef = useRef(null);
  const locDropdownRef = useRef(null);
  const jobSearchResultRef = useRef(null); // Ref for JobSearchResult section

  // Dropdown state management
  const [showExpDropdown, setShowExpDropdown] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);

  // Form field states
  const [selectedExp, setSelectedExp] = useState('Your Experience');
  const [jobSearch, setJobSearch] = useState('');
  const [locationSearch, setLocationSearch] = useState('');

  // Options for dropdowns
  const experienceOptions = ['0-1 years', '1-3 years', '3-5 years', '5-10 years', '10+ years'];
  const locationOptions = ['Bangalore', 'Mumbai', 'Delhi NCR', 'Hyderabad', 'Chennai', 'Pune', 'Kolkata', 'Ahmedabad', 'Remote'];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (expDropdownRef.current && !expDropdownRef.current.contains(event.target)) {
        setShowExpDropdown(false);
      }
      if (locDropdownRef.current && !locDropdownRef.current.contains(event.target)) {
        setShowLocationDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearchJobs = () => {
    if (jobSearchResultRef.current) {
      jobSearchResultRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-50 to-white overflow-hidden ">
      {/* Background decorative elements */}
      <Navbar isAuthenticated={isAuthenticated} userType={userType} />
      <div className="absolute  top-20 left-10 w-64 h-64 bg-green-100 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200 rounded-full filter blur-3xl opacity-30"></div>

      {/* Main content container with rightward shift */}
      <div className="container mx-auto pl-16 md:pl-24 lg:pl-32 pr-4 py-8  pt-10 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left content section with rightward shift */}
          <div className="md:w-1/2 pt-4 text-center md:text-left pr-4">
            <div className="inline-block text-green-600 font-semibold px-5 py-2 mb-6 bg-green-50 rounded-full shadow-sm border border-green-100 transform hover:scale-105 transition-transform duration-300">
              CA'S #1 JOB PLATFORM
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-purple-950 mb-6 leading-tight">
              Your job search <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-purple-500 block mt-2">ends here</span>
            </h1>

            <p className="text-lg md:text-2xl text-gray-800 mb-8">
              Discover <span className="font-semibold bg-yellow-100 px-2 py-1 rounded-md">50 lakh+</span> career opportunities
            </p>

            {/* Search form with improved styling */}
            <div className="rounded-2xl shadow-xl p-4 flex flex-col md:flex-row items-stretch mb-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              {/* Job search input */}
              <div className="flex items-center border-b md:border-b-0 md:border-r border-gray-200 px-4 py-3 flex-1 group">
                <svg className="w-5 h-5 text-green-600 group-hover:text-green-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                <input
                  type="text"
                  placeholder="Search jobs by 'company, role...'"
                  className="w-full px-3 py-2 outline-none text-gray-700 focus:placeholder-gray-400"
                  value={jobSearch}
                  onChange={(e) => setJobSearch(e.target.value)}
                />
              </div>

              {/* Experience dropdown with functionality */}
              <div
                ref={expDropdownRef}
                className="relative flex items-center border-b md:border-b-0 md:border-r border-gray-200 px-4 py-3 flex-1 group"
              >
                <svg className="w-5 h-5 text-green-600 group-hover:text-green-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <div
                  className="flex items-center justify-between w-full cursor-pointer"
                  onClick={() => {
                    setShowExpDropdown(!showExpDropdown);
                    setShowLocationDropdown(false);
                  }}
                >
                  <span className={`px-3 py-2 ${selectedExp === 'Your Experience' ? 'text-gray-500' : 'text-gray-700 font-medium'}`}>
                    {selectedExp}
                  </span>
                  <svg className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${showExpDropdown ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>

                {/* Dropdown menu */}
                {showExpDropdown && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white shadow-lg rounded-lg z-20 py-2 border border-gray-100">
                    {experienceOptions.map((option, index) => (
                      <div
                        key={index}
                        className="px-4 py-3 hover:bg-green-50 cursor-pointer text-gray-700 flex items-center"
                        onClick={() => {
                          setSelectedExp(option);
                          setShowExpDropdown(false);
                        }}
                      >
                        {option === selectedExp && (
                          <svg className="w-4 h-4 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                        )}
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Location input with dropdown */}
              <div
                ref={locDropdownRef}
                className="relative flex items-center px-4 py-3 flex-1 group"
              >
                <svg className="w-5 h-5 text-green-600 group-hover:text-green-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <div
                  className="flex items-center justify-between w-full cursor-pointer"
                  onClick={() => {
                    setShowLocationDropdown(!showLocationDropdown);
                    setShowExpDropdown(false);
                  }}
                >
                  <input
                    type="text"
                    placeholder="Search for an area or location"
                    className="w-full px-3 py-2 outline-none text-gray-700 cursor-pointer"
                    value={locationSearch}
                    onChange={(e) => setLocationSearch(e.target.value)}
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowLocationDropdown(true);
                      setShowExpDropdown(false);
                    }}
                  />
                  <svg className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${showLocationDropdown ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>

                {/* Location dropdown menu */}
                {showLocationDropdown && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white shadow-lg rounded-lg z-20 py-2 border border-gray-100 max-h-64 overflow-y-auto">
                    {locationOptions
                      .filter(loc => loc.toLowerCase().includes(locationSearch.toLowerCase()) || !locationSearch)
                      .map((option, index) => (
                        <div
                          key={index}
                          className="px-4 py-3 hover:bg-green-50 cursor-pointer text-gray-700"
                          onClick={() => {
                            setLocationSearch(option);
                            setShowLocationDropdown(false);
                          }}
                        >
                          <div className="flex items-center">
                            <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            </svg>
                            {option}
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </div>

              {/* Search button */}
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg mt-3 md:mt-0 transition-all duration-300 hover:shadow-lg transform hover:scale-105 flex items-center justify-center space-x-2"
                onClick={handleSearchJobs}
              >
                <span>Search jobs</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </div>

            {/* Quick categories */}
            <div className="flex flex-wrap gap-3 mb-10 justify-center md:justify-start">
              <div className="px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 text-sm font-medium text-gray-600 hover:bg-green-50 hover:text-green-600 cursor-pointer transition-colors">
                Popular Jobs
              </div>
              <div className="px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 text-sm font-medium text-gray-600 hover:bg-green-50 hover:text-green-600 cursor-pointer transition-colors">
                Remote
              </div>
              <div className="px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 text-sm font-medium text-gray-600 hover:bg-green-50 hover:text-green-600 cursor-pointer transition-colors">
                Tech Jobs
              </div>
              <div className="px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 text-sm font-medium text-gray-600 hover:bg-green-50 hover:text-green-600 cursor-pointer transition-colors">
                Freshers
              </div>
            </div>
          </div>

          {/* Right animation section - shifted more to the right */}
          <div className="md:w-1/2 flex items-center justify-end pr-8 md:pr-12 lg:pr-16">
            <div className="w-full max-w-lg">
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: JobseachAnimation,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice',
                  },
                }}
                height={420}
                width={420}
              />
            </div>
          </div>
        </div>
      </div>

      <div ref={jobSearchResultRef}>
        <JobSearchResult />
      </div>
    </div>
  );
};

export default JobSearch;