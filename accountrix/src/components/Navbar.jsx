// import React from 'react'
// import accountrixLogo from '../assets/accountrix-logo.png'
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuIndicator,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   NavigationMenuViewport,
// } from "../components/ui/navigation-menu"
// export default function Navbar({ backgroundColor }) {

    
//     return (
//         <nav className={`relative z-10 py-4 w-full   flex justify-between items-center px-6 ${backgroundColor}`}>
        
//             <img src={accountrixLogo} alt="Accountrix" className="h-14" />
//             <div className="hidden md:flex gap-6">
//                 <button className="text-white">Our offerings ▼</button>
//                 <button className="text-white flex items-center gap-1">
//                     Accountrix Talent Cloud
//                     <span className="bg-red-600 text-white text-xs px-1 py-0.5 rounded">NEW</span> ▼
//                 </button>
//             </div>
//             <div className="flex items-center gap-4">
//                 <button className="hidden md:block text-white px-4 py-2 rounded">📞 +91 9839384799</button>
//                 <button className="text-white text-2xl">☰</button>
//             </div>
//         </nav>

//     )
// }



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import accountrixLogo from "../assets/accountrix-logo.png";
import { FaUserCircle, FaSignOutAlt, FaCog, FaBriefcase, FaBell } from "react-icons/fa";

export default function Navbar({ isAuthenticated, setIsAuthenticated , backgroundColor }) {
  const navigate = useNavigate();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <nav className={`${backgroundColor} text-white shadow-lg  top-0 left-0 w-full z-50`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img
            src={accountrixLogo}
            alt="Accountrix"
            className="h-12 cursor-pointer"
            onClick={() => navigate("/")}
          />
          <span className="text-2xl font-bold hidden sm:block">Accountrix</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 items-center">
          {/* Explore Careers Dropdown */}
          <div className="relative group">
            <button className="hover:text-green-300 transition font-medium">Explore Careers</button>
            <div className="absolute left-0 mt-2 hidden group-hover:flex flex-col bg-white text-gray-800 rounded-lg shadow-xl py-4 z-20 w-72">
              <button
                className="px-6 py-3 hover:bg-gray-100 text-left font-medium"
                onClick={() => navigate("/jobsearch")}
              >
                Job Search
              </button>
              <button
                className="px-6 py-3 hover:bg-gray-100 text-left font-medium"
                onClick={() => navigate("/internships")}
              >
                Internships
              </button>
              <button
                className="px-6 py-3 hover:bg-gray-100 text-left font-medium"
                onClick={() => navigate("/freelance")}
              >
                Freelance Projects
              </button>
              <button
                className="px-6 py-3 hover:bg-gray-100 text-left font-medium"
                onClick={() => navigate("/remotejobs")}
              >
                Remote Jobs
              </button>
              <button
                className="px-6 py-3 hover:bg-gray-100 text-left font-medium"
                onClick={() => navigate("/parttime")}
              >
                Part-Time Jobs
              </button>
            </div>
          </div>

          {/* Resources Dropdown */}
          <div className="relative group">
            <button className="hover:text-green-300 transition font-medium">Resources</button>
            <div className="absolute left-0 mt-2 hidden group-hover:flex flex-col bg-white text-gray-800 rounded-lg shadow-xl py-4 z-20 w-72">
              <button
                className="px-6 py-3 hover:bg-gray-100 text-left font-medium"
                onClick={() => navigate("/blogs")}
              >
                Blogs
              </button>
              <button
                className="px-6 py-3 hover:bg-gray-100 text-left font-medium"
                onClick={() => navigate("/guides")}
              >
                Career Guides
              </button>
              <button
                className="px-6 py-3 hover:bg-gray-100 text-left font-medium"
                onClick={() => navigate("/faq")}
              >
                FAQs
              </button>
              <button
                className="px-6 py-3 hover:bg-gray-100 text-left font-medium"
                onClick={() => navigate("/webinars")}
              >
                Webinars
              </button>
              <button
                className="px-6 py-3 hover:bg-gray-100 text-left font-medium"
                onClick={() => navigate("/ebooks")}
              >
                Free E-Books
              </button>
            </div>
          </div>

          {/* About Us Dropdown */}
          <div className="relative group">
            <button className="hover:text-green-300 transition font-medium">About Us</button>
            <div className="absolute left-0 mt-2 hidden group-hover:flex flex-col bg-white text-gray-800 rounded-lg shadow-xl py-4 z-20 w-72">
              <button
                className="px-6 py-3 hover:bg-gray-100 text-left font-medium"
                onClick={() => navigate("/about")}
              >
                Our Story
              </button>
              <button
                className="px-6 py-3 hover:bg-gray-100 text-left font-medium"
                onClick={() => navigate("/team")}
              >
                Meet the Team
              </button>
              <button
                className="px-6 py-3 hover:bg-gray-100 text-left font-medium"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </button>
              <button
                className="px-6 py-3 hover:bg-gray-100 text-left font-medium"
                onClick={() => navigate("/careers")}
              >
                Careers at Accountrix
              </button>
              <button
                className="px-6 py-3 hover:bg-gray-100 text-left font-medium"
                onClick={() => navigate("/testimonials")}
              >
                Testimonials
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Notification Icon */}
          {isAuthenticated && (
            <button className="relative">
              <FaBell className="text-2xl hover:text-green-300 transition" />
              <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1">
                3
              </span>
            </button>
          )}

          {/* Profile Section */}
          {isAuthenticated ? (
            <div className="relative">
              <button
                className="text-3xl hover:text-green-300 transition"
                onClick={() => setShowProfileDropdown(!showProfileDropdown)}
              >
                <FaUserCircle />
              </button>
              {showProfileDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg py-2 z-20">
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => navigate("/profile")}
                  >
                    <FaCog className="inline-block mr-2" /> Profile
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => navigate("/myjobs")}
                  >
                    <FaBriefcase className="inline-block mr-2" /> My Jobs
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={handleLogout}
                  >
                    <FaSignOutAlt className="inline-block mr-2" /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
              onClick={() => navigate("/getstarted")}
            >
              Get Started
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}