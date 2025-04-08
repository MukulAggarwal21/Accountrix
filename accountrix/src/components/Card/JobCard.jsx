
import React from "react";
import { useState } from "react";
import { Bookmark, ExternalLink, Flag, EyeOff } from "lucide-react";
import JobSearchInfoPage from "../JobSearch/JobSearchInfoPage";

const JobCard = () => {
  const [showDetails, setShowDetails] = useState(false);

  // const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto  border-4 border-blue-450 bg-white rounded-md  shadow-sm px-6 py-5  mb-10 space-y-4">
      {/* Top Section */}
      <div className="flex items-start justify-between">
        {/* Logo + Info */}
        <div className="flex space-x-4">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.UhM0q1SI4l7km0gakOv0hgHaE8&pid=Api&P=0&h=180"
            alt="Superfuel AI"
            className="w-14 h-14 rounded"
          />
          <div>
            <div className="flex flex-row">
              <a
                href="https://superfuel.ai"
                className="text-blue-600 font-semibold text-lg hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Superfuel AI
              </a>
              <div className="flex items-center space-x-2 text-sm mt-0.5">
                <span className="text-green-600 font-semibold"> ● Actively Hiring</span>
                <span className="text-xs bg-gray-200 px-2 py-0.5 rounded text-gray-600">
                  PROMOTED
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-600 mt-1">AI employee for Amazon sellers</p>
            <p className="text-sm text-gray-500 italic">1–10 Employees</p>
          </div>
        </div>

        {/* Arrow */}
        <div className="text-gray-400 hover:text-gray-600 mt-2">
          <ExternalLink size={18} />
        </div>
      </div>

      <hr />


      <div className="flex justify-between items-between  px-2 flex-col sm:flex-row border-1 border-gray-700">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center ">
          <div className="flex flex-wrap items-center space-x-4">
            <p className="font-semibold text-base">Product Engineer</p>
            <span className="text-gray-500 text-sm">Remote only • ₹17L – ₹25L</span>
          </div>
        </div>
        {/* Recruiter Info */}
        <div className="text-sm text-green-600 font-medium justify-end ">
          <p>RECRUITER RECENTLY ACTIVE</p>
          <p className="text-gray-400 text-xs mt-1">POSTED 5 DAYS AGO</p>
        </div>

        {/* Save & Learn More Buttons */}
        <div className="flex space-x-2 mt-4 sm:mt-0">
          <button
            onClick={() => alert("Saved!")}
            className="border border-gray-300 px-4 py-1 my-1 rounded hover:bg-gray-100 text-sm"
          >
            Save
          </button>


          <button

            onClick={() => setShowDetails(true)}


            className="bg-black text-white px-4 py-1 my-1 rounded text-sm hover:opacity-90"
          >
            Learn more
          </button>
        </div>
      </div>


      {/* Footer: Report & Hide */}
      <div className="flex justify-end space-x-6 text-gray-500 text-sm">
        <button className="flex items-center space-x-1 hover:text-black">
          <Flag size={14} />
          <span>Report</span>
        </button>
        <button className="flex items-center space-x-1 hover:text-black">
          <EyeOff size={14} />
          <span>Hide</span>
        </button>
      </div>
      
      {showDetails && (
        
        <div className="fixed inset-0 z-50    bg-white/30 flex items-end justify-center h-full">
        
          <div className="w-full  h-[80vh] overflow-y-auto   rounded-4xl shadow-lg animate-slideUp relative">
            {/* Close Button */}
            
            <button
              className="absolute top-3 right-4 text-gray-500 hover:text-black text-xl"
              onClick={() => setShowDetails(false)}
            >
              ✕
            </button>

            {/* Job Info Component */}
            <JobSearchInfoPage />
          </div>
        </div>
      )}
    </div>

  );
};

export default JobCard;
// import React, { useState } from "react";
// import JobSearchInfoPage from "../JobSearch/JobSearchInfoPage";

// const JobCard = () => {
//   const [showDetails, setShowDetails] = useState(false);

//   return (
//     <>
//       {/* Job Card Preview */}
//       <div
//         className="cursor-pointer bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-all"
//         onClick={() => setShowDetails(true)}
//       >
//         <h2 className="text-xl font-semibold">Frontend Developer</h2>
//         <p className="text-sm text-gray-600">Remote | Full-time</p>
//       </div>

//       {/* Slide-up Job Details with blurred background */}
//       {showDetails && (
//         <div className="fixed inset-0 z-50 backdrop-blur-lg bg-white/30 flex items-end justify-center">
//           <div className="w-full max-w-6xl h-[90vh] overflow-y-auto bg-white rounded-t-xl shadow-lg animate-slideUp relative">
//             {/* Close Button */}
//             <button
//               className="absolute top-3 right-4 text-gray-500 hover:text-black text-xl"
//               onClick={() => setShowDetails(false)}
//             >
//               ✕
//             </button>

//             {/* Job Info Component */}
//             <JobSearchInfoPage />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default JobCard;
