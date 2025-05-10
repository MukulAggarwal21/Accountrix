
import React from 'react';

const JobSearchInfoPage = ({ job }) => {

  if (!job) return null;
  return (

    <div>

      <div className="min-h-screen bg-blue-100  flex justify-center items-center  pt-10 rounded-4xl ">
        <div className="bg-white rounded-xl shadow-lg  flex flex-col lg:flex-row w-full max-w-7xl">
          {/* Left Section */}
          <div className="w-full lg:w-2/3 p-6 ">
            <div className="flex items-center gap-3">
              <img src="https://tse3.mm.bing.net/th?id=OIP.UhM0q1SI4l7km0gakOv0hgHaE8&pid=Api&P=0&h=180"
                alt="Lucio AI" className="w-12 h-12 rounded-lg" />
              <div>
                <h2 className="font-semibold text-lg">{job.companyName} <span className="text-green-600">• Actively Hiring</span></h2>
                <p className="text-sm text-gray-500">AI platform for lawyers, by lawyers</p>
                <div className="flex gap-2 mt-1">
                  <span className="bg-purple-100 text-purple-700 text-xs px-2 py-0.5 rounded-full">Top 5% of responders</span>
                  <span className="bg-pink-100 text-pink-700 text-xs px-2 py-0.5 rounded-full">Growing fast</span>
                </div>
              </div>
            </div>

            <h1 className="mt-4 text-xl font-bold">{job.jobTitle}</h1>
            <p className="text-gray-700 mt-1">{job.salary.currency}{job.salary.amount} • No equity | {job.workPolicy} •{job.location} | 2 years of exp | Full Time</p>
            <p className="text-sm text-gray-500 mt-1">Posted: today • Recruiter recently active</p>

            <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
              <div>
                <p className="font-semibold">Visa Sponsorship</p>
                <p className="text-gray-600">Not Available</p>
              </div>
              <div>
                <p className="font-semibold"> Work Policy</p>
                <p className="text-gray-600">{job.workPolicy} only</p>
              </div>
              <div>
                <p className="font-semibold">Hires remotely in</p>
                <p className="text-blue-600 underline">India</p>
              </div>
              <div>
                <p className="font-semibold">Relocation</p>
                <p className="text-gray-600">Not Allowed</p>
              </div>
            </div>


            <div className="mt-6">
              <p className="font-semibold mb-2">Skills</p>
              <div className="flex gap-2 flex-wrap">
                {job.skills && job.skills.map((skill, index) => (
                  <span key={index} className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* About the Job Section */}
            <div className="mt-6">
              <p className="font-bold mb-2 text-2xl">About the Job</p>
              <div className="text-gray-700 text-sm space-y-4 leading-relaxed">
                {job.jobDescription}
              </div>
            </div>

          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/3 border-t lg:border-t-0 lg:border-l p-6 bg-gray-50">
            <h2 className="font-semibold text-lg mb-3">Apply to {job.companyName}</h2>
            <p className="text-sm text-gray-600 mb-2">
              Is your profile up to date? Click <a href="#" className="text-blue-600 underline">here</a> to verify how you will appear to recruiters.
            </p>
            <label className="block text-sm font-medium mb-1">What interests you about working for this company?</label>
            <textarea className="w-full border border-gray-300 rounded-md p-2 h-24 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <button className="bg-black text-white px-5 py-2 rounded hover:bg-gray-800 w-full">Apply</button>

          </div>


        </div>

      </div>



    </div>


  );
};

export default JobSearchInfoPage;
