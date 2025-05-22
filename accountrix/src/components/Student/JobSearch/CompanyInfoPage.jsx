
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  FaTwitter,
  FaLinkedin,
  FaShareAlt, FaHeartbeat, FaDumbbell, FaHome, FaStar, FaSeedling
} from "react-icons/fa";
const CompanyInfoPage = ({ job, companyId }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [jobs, setJobs] = useState([]);
  // const [company, setCompany] = useState({});
  const [company, setCompany] = useState(job.company || {});


  useEffect(() => {
    // If company is already provided, don't fetch
    if (job.company) {
      setCompany(job.company);
      return;
    }
    // Fallback: fetch by companyId if needed
    const companyId = job.company?._id || job.company;
    if (!companyId) return;
    axios.get(`http://localhost:5000/company/${companyId}`)
      .then(res => setCompany(res.data))
      .catch(err => console.error("Error fetching company:", err));
  }, [job]);

  if (!company) return <div>Loading company info...</div>;


  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <>
            <div>
              <h2 className="text-xl font-bold mb-2">{company.companyName}</h2>
              <h3 className="text-lg font-semibold mb-2">{company.pitch}</h3>
              <p className="text-gray-700 text-sm leading-6">
                {job.jobDescription}    </p>
            </div>

            {/* Jobs Link */}
            <div className="bg-white py-6 w-full max-w-md rounded-md space-y-4 text-sm text-gray-800">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl  font-bold">Jobs</h2>
                <a href="#" className="text-sm text-gray-500 hover:underline">
                  View all jobs →
                </a>
              </div>

              {jobs.map((job, idx) => (
                <div key={idx} className="border-b pb-4">
                  <h3 className="text-blue-700 font-semibold hover:underline cursor-pointer">
                    {job.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {job.location} {job.posted && <span className="ml-1">• {job.posted}</span>}
                  </p>
                  <p className="mt-1 font-medium">{job.salary}</p>
                  {job.showActions && (
                    <div className="flex gap-2 mt-2">
                      <button className="border border-gray-400 text-sm px-3 py-1 rounded-md hover:bg-gray-100">
                        Save
                      </button>
                      <button className="border border-black text-sm font-medium px-3 py-1 rounded-md hover:bg-gray-900 hover:text-white">
                        Apply
                      </button>
                    </div>
                  )}
                </div>
              ))}

            </div>


            <div className="py-6 bg-white text-black space-y-10">
              {/* Founders Section */}
              <section>
                <h2 className="text-xl font-semibold mb-4">Founders</h2>
                <div className="flex items-center gap-6 border rounded-lg p-4 w-fit shadow-sm">
                  <img
                    src="https://avatars.githubusercontent.com/u/9919?s=280&v=4" // Replace with actual founder image
                    alt="Founder"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-sm">Emil Soman</h3>
                    <p className="text-sm">Co-Founder &amp; CTO</p>
                    <p className="text-sm text-gray-500">Founder at Dockup (YC W19)</p>
                  </div>
                </div>
              </section>

              {/* Funding Section */}
              <section>
                <h2 className="text-xl font-semibold mb-4">Funding</h2>
                <div className="flex gap-6">
                  <div className="border p-4 rounded-lg shadow-sm w-40">
                    <p className="text-xs text-gray-500">FUNDED OVER</p>
                    <p className="text-lg font-medium">1 round</p>
                  </div>
                  <div className="border p-4 rounded-lg shadow-sm w-60">
                    <p className="text-xs text-gray-500">LATEST ROUND</p>
                    <p className="text-lg font-medium">Seed (Aug 2022)</p>
                  </div>
                </div>
              </section>

              {/* Culture Section */}
              <section>
                <h2 className="text-xl font-semibold mb-4">Culture</h2>
                <div className="flex flex-wrap gap-4">
                  {[
                    { label: 'Healthcare benefits', icon: '🩺' },
                    { label: 'Remote friendly', icon: '🏠' },
                    { label: 'Wellness benefits', icon: '🏋️' },
                    { label: 'Miscellaneous', icon: '✨' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-2 border px-4 py-2 rounded-md shadow-sm"
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </>
        );
      case 'people':
        return (
          <div className="p-6 w-full max-w-md text-gray-800">
            <h2 className="text-xl font-semibold mb-1">People at Superfuel AI</h2>
            <h3 className="text-lg font-semibold mb-4">Founders</h3>

            <div className="border rounded-lg overflow-hidden shadow-sm">
              {/* Top Section */}
              <div className="flex justify-between items-center p-4">
                <div>
                  <h4 className="text-lg font-semibold">Emil Soman</h4>
                  <p className="text-sm text-gray-600">Co-Founder & CTO</p>
                  <p className="text-sm text-gray-500">Bengaluru</p>
                  <p className="text-sm text-gray-700 mt-2">
                    Founder at <span className="text-blue-700">Dockup (YC W19)</span>
                  </p>
                </div>
                <img
                  src="https://tse3.mm.bing.net/th?id=OIP.5SvTNEacBHqDax8KkGovBQHaHa&pid=Api&P=0&h=180"// Replace with actual image URL or local image
                  alt="Emil Soman"
                  className="w-14 h-14 rounded-full object-cover"
                />
              </div>

              {/* Background Section */}
              <div className="bg-indigo-50 p-4">
                <p className="uppercase text-xs text-gray-500 font-semibold mb-2">
                  Background
                </p>

                {/* Entries */}
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <p className="font-semibold">Dockup</p>
                    <p className="text-sm text-gray-600">Founder</p>
                  </div>
                  <img
                    src="https://tse3.mm.bing.net/th?id=OIP.5SvTNEacBHqDax8KkGovBQHaHa&pid=Api&P=0&h=180" // Dockup logo
                    alt="Dockup"
                    className="w-6 h-6"
                  />
                </div>

                <div className="flex justify-between items-center mb-2">
                  <div>
                    <p className="font-semibold">Brb</p>
                    <p className="text-sm text-gray-600">Founder</p>
                  </div>
                  <img
                    src="https://tse3.mm.bing.net/th?id=OIP.5SvTNEacBHqDax8KkGovBQHaHa&pid=Api&P=0&h=180" // Brb logo
                    alt="Brb"
                    className="w-6 h-6"
                  />
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">Codemancers</p>
                    <p className="text-sm text-gray-600">Director</p>
                  </div>
                  <img
                    src="https://tse3.mm.bing.net/th?id=OIP.5SvTNEacBHqDax8KkGovBQHaHa&pid=Api&P=0&h=180" // Codemancers logo
                    alt="Codemancers"
                    className="w-6 h-6"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case 'culture':
        return (
          <>
            <div>
              <h2 className="text-xl font-bold mb-2">Culture & Benefits</h2>
              <p className="text-gray-700 text-sm leading-6">We believe in remote-first flexibility, wellness support, and flat hierarchies. From flexible hours to wellness reimbursements, we care about your well-being as much as your output.</p>
            </div>
            <div className="p-6 max-w-4xl mx-auto text-gray-800">
              <h2 className="text-2xl font-semibold mb-4">Culture and benefits at Superfuel AI</h2>

              {/* Remote Policy Section */}
              <div className="flex flex-wrap justify-between mb-8">
                <div className="mb-4">
                  <h3 className="text-md font-semibold mb-1">Remote policy</h3>
                  <p className="text-sm text-gray-600 mb-1">Locations</p>
                  <span className="px-3 py-1 rounded-full border text-sm text-gray-700">
                    Bengaluru
                  </span>
                </div>
                <div className="mb-4">
                  <h3 className="text-md font-semibold mb-1">Remote policy</h3>
                  <span className="px-3 py-1 rounded-full border text-sm text-gray-700">
                    Remote only
                  </span>
                </div>
              </div>

              {/* Perks and Benefits Section */}
              <h3 className="text-lg font-semibold mb-4">Perks and benefits</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Item */}
                <div className="flex items-center gap-3">
                  <div className="p-2 border rounded-md bg-indigo-50 text-indigo-600 text-xl">
                    <FaHeartbeat />
                  </div>
                  <p>Healthcare benefits</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 border rounded-md bg-indigo-50 text-indigo-600 text-xl">
                    <FaHome />
                  </div>
                  <p>Remote friendly</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 border rounded-md bg-indigo-50 text-indigo-600 text-xl">
                    <FaDumbbell />
                  </div>
                  <p>Wellness benefits</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 border rounded-md bg-indigo-50 text-indigo-600 text-xl">
                    <FaStar />
                  </div>
                  <p>Miscellaneous</p>
                </div>
              </div>
            </div>
          </>


        );
      case 'funding':
        return (
          <>
            <div>
              <h2 className="text-xl font-bold mb-2">Funding Details</h2>
              <p className="text-gray-700 text-sm leading-6">Superfuel AI secured seed funding in August 2022, with the investment round led by Accel, a prominent venture capital firm based in San Francisco. While the exact amount remains undisclosed, this early-stage funding marks a significant milestone for the company, enabling it to scale its technology, expand its team, and accelerate product development. The involvement of Accel underscores strong investor confidence in Superfuel AI’s vision and potential within the AI landscape..</p>
            </div>

            <div className="max-w-4xl mx-auto p-6 text-gray-800">
              {/* Funding Rounds */}
              <div className="mb-10">
                <h2 className="text-xl font-semibold mb-4">Funding Rounds</h2>
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex items-center px-2 py-1 bg-orange-100 rounded">
                    <FaSeedling className="text-orange-500 mr-1" />
                  </div>
                  <h1 className="text-2xl font-bold">Undisclosed amount</h1>
                </div>
                <div className="flex gap-6 text-sm text-gray-500">
                  <p>Seed</p>
                  <p>Aug 2022</p>
                </div>
              </div>

              {/* Investors */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Investors of Superfuel AI</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="border rounded-md p-4 shadow-sm">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-md">Accel</h3>
                        <p className="text-sm text-gray-500">VC Firm • San Francisco</p>
                      </div>
                      <div className="border rounded-md px-2 py-1 text-xs text-gray-600">
                        Accel
                      </div>
                    </div>

                    <div className="mt-4">
                      <p className="text-xs text-gray-400 font-semibold mb-1">ROUNDS</p>
                      <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-orange-100 rounded text-xs text-orange-600">
                        <FaSeedling />
                        Seed
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>


        );
      case 'jobs':
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">Open Positions</h2>
            {/* {jobs.map((job, idx) => (
              <div key={idx} className="border-b pb-4 mb-4">
                <h3 className="text-blue-700 font-semibold hover:underline cursor-pointer">{job.title}</h3>
                <p className="text-gray-600 text-sm">
                  {job.location} {job.posted && <span className="ml-1">• {job.posted}</span>}
                </p>
                <p className="mt-1 font-medium">{job.salary}</p>
                {job.showActions && (
                  <div className="flex gap-2 mt-2">
                    <button className="border border-gray-400 text-sm px-3 py-1 rounded-md hover:bg-gray-100">Save</button>
                    <button className="border border-black text-sm font-medium px-3 py-1 rounded-md hover:bg-gray-900 hover:text-white">Apply</button>
                  </div>
                )}
              </div>
            ))} */}

            <ul>
              {jobs.map(job => (
                <li key={job._id}>{job.jobTitle} - {job.jobLocation}</li>
              ))}
            </ul>

          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-blue-100  flex justify-center items-center  pt-10 rounded-4xl ">
      <div className="bg-white p-4 rounded-xl shadow-lg  flex flex-col lg:flex-row w-full max-w-7xl">


        {/* Left Section */}
        <div className="flex-1 px-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="bg-blue-500 p-2 rounded-md">
                <span className="text-white font-bold text-xl">⚡</span>
              </div>
              <div>
                <h1 className="font-semibold text-xl">{job.companyName} <span className="text-green-600">• Actively Hiring</span></h1>
                <p className="text-gray-600 text-sm">AI employee for {job.companyName} sellers</p>
                <p className="text-gray-500 text-xs">{job.employeeCount} Employees</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-3 py-1 border rounded-md text-sm">+ Follow</button>
              <FaShareAlt className="text-gray-600 cursor-pointer" />
            </div>
          </div>

          {/* Nav */}
          <div className="flex gap-6 border-b pb-2 text-sm text-gray-600 font-medium mb-4">
            <a onClick={() => setActiveTab('overview')} className={`cursor-pointer ${activeTab === 'overview' ? 'border-b-2 border-black pb-1 text-black' : ''}`}>Overview</a>
            <a onClick={() => setActiveTab('people')} className={`cursor-pointer ${activeTab === 'people' ? 'border-b-2 border-black pb-1 text-black' : ''}`}>People</a>
            <a onClick={() => setActiveTab('culture')} className={`cursor-pointer ${activeTab === 'culture' ? 'border-b-2 border-black pb-1 text-black' : ''}`}>Culture and benefits</a>
            <a onClick={() => setActiveTab('funding')} className={`cursor-pointer ${activeTab === 'funding' ? 'border-b-2 border-black pb-1 text-black' : ''}`}>Funding</a>
            <a onClick={() => setActiveTab('jobs')} className={`cursor-pointer flex items-center gap-1 ${activeTab === 'jobs' ? 'border-b-2 border-black pb-1 text-black' : ''}`}>
              Jobs <span className="bg-gray-200 px-2 py-0.5 rounded-full text-xs">4</span>
            </a>

          </div>

          {renderContent()}

          {/* Overview Section */}

        </div>

        {/* Right Section */}
        <div className="w-full lg:w-80 border rounded-md p-4 shadow-sm">
          <h4 className="text-sm font-bold text-gray-700 mb-2">ABOUT {job.companyName}</h4>
          <p>Website</p>
          <div className="text-sm text-blue-600 underline mb-4">

            <a href="https://superfuel.io" target="_blank" rel="noreferrer">{job.website}</a>
          </div>
          <div className="text-sm text-gray-600 mb-4">📍<span className="text-blue-600 underline">{job.jobLocation}</span></div>
          <div className="text-sm text-gray-700 mb-1">Company size: <span className="text-black">{job.employeeCount} people</span></div>
          <div className="text-sm text-gray-700 mb-4">Company type: <span className="text-black">SaaS</span></div>

          <div>
            <h5 className="text-sm font-semibold mb-1">Markets</h5>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="bg-gray-200 px-2 py-1 rounded-md">SaaS</span>
              <span className="bg-gray-200 px-2 py-1 rounded-md">B2B</span>
              <span className="bg-gray-200 px-2 py-1 rounded-md">Artificial Intelligence</span>
              <span className="bg-gray-200 px-2 py-1 rounded-md">Ecommerce</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-xl text-gray-600">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>


      </div>

    </div>
  );
};

export default CompanyInfoPage;

