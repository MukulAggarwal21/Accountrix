// // // src/components/JobSearchHeader.js

// // import React from 'react';

// // const JobSeach = () => {
// //   return (
// //     <div className="bg-[#f8f6fb] min-h-screen flex flex-col justify-between">
// //       {/* Header Section */}
// //       <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 items-center">
// //         {/* Text Content */}
// //         <div className="space-y-4">
// //           <h4 className="text-green-800 font-semibold uppercase tracking-wide">India’s #1 Job Platform</h4>
// //           <h1 className="text-5xl font-bold text-gray-900">Your job search ends here</h1>
// //           <p className="text-lg text-gray-700">Discover 50 lakh+ career opportunities</p>

// //           {/* Search Bar */}
// //           <div className="mt-6 flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden">
// //             <input
// //               type="text"
// //               placeholder="Search jobs by 'skill'"
// //               className="flex-1 px-4 py-3 border-b md:border-b-0 md:border-r outline-none"
// //             />
// //             <select className="px-4 py-3 border-b md:border-b-0 md:border-r outline-none">
// //               <option>Your Experience</option>
// //               <option>Fresher</option>
// //               <option>1-3 Years</option>
// //               <option>3+ Years</option>
// //             </select>
// //             <input
// //               type="text"
// //               placeholder="Search for an area or location"
// //               className="flex-1 px-4 py-3 border-b md:border-b-0 md:border-r outline-none"
// //             />
// //             <button className="bg-green-700 text-white px-6 py-3 hover:bg-green-800 transition-all">
// //               Search jobs
// //             </button>
// //           </div>
// //         </div>

// //         {/* Image Section */}
// //         <div className="flex justify-center mt-10 md:mt-0">
// //           <img
// //             src="https://i.imgur.com/7A9vG1Y.png" // Placeholder or your own image
// //             alt="app-promo"
// //             className="w-64 md:w-80 object-contain"
// //           />
// //         </div>
// //       </div>

// //       {/* Logos Section */}
// //       <div className="bg-white py-8 px-4 border-t">
// //         <div className="max-w-7xl mx-auto">
// //           <h3 className="text-xl font-semibold mb-4 text-gray-800">Proud to Support</h3>
// //           <div className="flex items-center gap-8 flex-wrap">
// //             <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Emblem_of_India.svg" alt="Ministry" className="h-10" />
// //             <img src="https://www.aicte-india.org/sites/default/files/aicteLogo.png" alt="AICTE" className="h-10" />
// //             <img src="https://www.startupindia.gov.in/content/dam/invest-india/logo/startupindia.png" alt="DPIIT" className="h-10" />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default JobSeach;

// import React from 'react';
// import Navbar from '../Navbar';
// const JobSearch = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
//       <div className="container mx-auto px-4 py-16">
//         <div className="flex flex-col md:flex-row">
//           {/* Left content section */}
//           <div className="md:w-1/2 pt-10">
//             <div className="text-green-600 font-medium mb-4">
//               INDIA'S #1 JOB PLATFORM
//             </div>
            
//             <h1 className="text-5xl md:text-6xl font-bold text-purple-950 mb-6">
//               Your job search ends here
//             </h1>
            
//             <p className="text-xl md:text-2xl text-gray-800 mb-10">
//               Discover 50 lakh+ career opportunities
//             </p>
            
//             {/* Search form */}
//             <div className="bg-white rounded-lg shadow-lg p-2 flex flex-col md:flex-row items-stretch">
//               <div className="flex items-center border-b md:border-b-0 md:border-r border-gray-200 px-3 py-2 flex-1">
//                 <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
//                 </svg>
//                 <input 
//                   type="text" 
//                   placeholder="Search jobs by 'company, role...'"
//                   className="w-full px-3 py-1 outline-none"
//                 />
//               </div>
              
//               <div className="flex items-center border-b md:border-b-0 md:border-r border-gray-200 px-3 py-2 flex-1">
//                 <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//                 </svg>
//                 <div className="flex items-center justify-between w-full">
//                   <span className="text-gray-500">Your Experience</span>
//                   <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//                   </svg>
//                 </div>
//               </div>
              
//               <div className="flex items-center px-3 py-2 flex-1">
//                 <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
//                 </svg>
//                 <input 
//                   type="text" 
//                   placeholder="Search for an area or..."
//                   className="w-full px-3 py-1 outline-none"
//                 />
//               </div>
              
//               <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-md mt-2 md:mt-0">
//                 Search jobs
//               </button>
//             </div>
            
//             {/* Proud to Support section */}
//             <div className="mt-16">
//               <p className="text-lg font-bold text-gray-800 mb-4">Proud to Support</p>
//               <div className="flex flex-wrap items-center gap-6">
//                 {/* Ministry logo */}
//                 <div className="grayscale hover:grayscale-0 transition-all">
//                   <img src="/api/placeholder/120/40" alt="Ministry of Labour & Employment" className="h-10 object-contain" />
//                 </div>
                
//                 {/* Certification logo */}
//                 <div className="grayscale hover:grayscale-0 transition-all">
//                   <img src="/api/placeholder/60/60" alt="Certification" className="h-12 object-contain" />
//                 </div>
                
//                 {/* DPIIT Startup India logo */}
//                 <div className="grayscale hover:grayscale-0 transition-all">
//                   <img src="/api/placeholder/120/40" alt="DPIIT Startup India" className="h-10 object-contain" />
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Right image section */}
//           <div className="md:w-1/2 mt-10 md:mt-0 flex justify-end">
//             <img src="/api/placeholder/400/500" alt="Person holding phone" className="object-contain" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobSearch;


import React, { useState, useEffect, useRef } from 'react';

const JobSearch = () => {
  // Refs for detecting clicks outside dropdowns
  const expDropdownRef = useRef(null);
  const locDropdownRef = useRef(null);
  
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-green-100 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200 rounded-full filter blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-6 py-16 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left content section */}
          <div className="md:w-1/2 pt-8 text-center md:text-left">
            <div className="inline-block text-green-600 font-semibold px-5 py-2 mb-8 bg-green-50 rounded-full shadow-sm border border-green-100 transform hover:scale-105 transition-transform duration-300">
              INDIA'S #1 JOB PLATFORM
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-purple-950 mb-8 leading-tight">
              Your job search 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-purple-500 block mt-2">ends here</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-800 mb-12">
              Discover <span className="font-semibold bg-yellow-100 px-2 py-1 rounded-md">50 lakh+</span> career opportunities
            </p>
            
            {/* Search form with improved styling */}
            <div className="bg-white rounded-2xl shadow-xl p-4 flex flex-col md:flex-row items-stretch mb-12 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
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
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg mt-3 md:mt-0 transition-all duration-300 hover:shadow-lg transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Search jobs</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </div>
            
            {/* Quick categories */}
            <div className="flex flex-wrap gap-3 mb-16 justify-center md:justify-start">
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
            
            {/* Proud to Support section */}
            <div className="mt-8">
              <p className="text-lg font-bold text-gray-800 mb-8 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-1 after:bg-green-200 after:rounded-full">
                Proud to Support
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-10">
                {/* Ministry logo */}
                <div className="grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-110 bg-white p-3 rounded-lg shadow-sm">
                  <img src="/api/placeholder/120/40" alt="Ministry of Labour & Employment" className="h-12 object-contain" />
                </div>
                
                {/* Certification logo */}
                <div className="grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-110 bg-white p-3 rounded-lg shadow-sm">
                  <img src="/api/placeholder/60/60" alt="Certification" className="h-14 object-contain" />
                </div>
                
                {/* DPIIT Startup India logo */}
                <div className="grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-110 bg-white p-3 rounded-lg shadow-sm">
                  <img src="/api/placeholder/120/40" alt="DPIIT Startup India" className="h-12 object-contain" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Right image section - Enhanced with shadow and animation */}
          <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
            <div className="relative">
              {/* Glowing effect behind image */}
              <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-purple-500 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
              
              {/* Main image with hover effects */}
              <div className="relative transform transition-all duration-700 hover:translate-y-2 group">
                <img 
                  src="/api/placeholder/500/600" 
                  alt="Person holding phone" 
                  className="object-contain rounded-3xl shadow-2xl relative z-10 border-2 border-white"
                />
                
                {/* App logo circle */}
                <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 z-20">
                  <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold text-2xl">apna</span>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute top-1/4 -left-6 bg-white p-2 rounded-lg shadow-lg z-20 transform -rotate-6 group-hover:-rotate-12 transition-transform duration-300">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <span className="text-xs font-medium">50L+ Jobs</span>
                  </div>
                </div>
                
                <div className="absolute top-1/2 -right-8 bg-white p-2 rounded-lg shadow-lg z-20 transform rotate-6 group-hover:rotate-12 transition-transform duration-300">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                    <span className="text-xs font-medium">All Industries</span>
                  </div>
                </div>
                
                <div className="absolute bottom-1/4 -left-8 bg-white p-2 rounded-lg shadow-lg z-20 transform rotate-6 group-hover:rotate-12 transition-transform duration-300">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                    <span className="text-xs font-medium">Verified Jobs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSearch;