
import React, { useEffect } from "react";
import { useState } from "react";
import { Bookmark, ExternalLink, Flag, EyeOff } from "lucide-react";
import JobSearchInfoPage from "../Student/JobSearch/JobSearchInfoPage";
import CompanyInfoPage from "../Student/JobSearch/CompanyInfoPage";

import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


const JobCard = () => {

  const [showDetails, setShowDetails] = useState(false);
  const [detailType, setDetailType] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [isHidden, setIsHidden] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null); // Track the selected job


  const options = [
    'Low quality or incomplete data',
    'They are posting spam',
    'They are being abusive or harmful',
    'This is a duplicate profile',
    'Other',
  ];
  useEffect(() => {
    const fetchjobs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/jobs');
        console.log('Fetched jobs:', response.data); // Debugging log

        setJobs(response.data)
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    }

    fetchjobs();
  }, []);


  if (isHidden) return null;

  return (
    <div>
      {jobs.map((job, index) => (

        <div key={index} className="max-w-7xl mx-auto  border-4 border-blue-450 bg-white rounded-md  shadow-sm px-6 py-5  mb-10 space-y-4">
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
                    className="text-blue-600 pr-4 font-semibold text-lg hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {job.companyName}
                  </a>
                  <div className="flex items-center space-x-2 text-sm mt-0.5">
                    <span className="text-green-600 font-semibold"> ● Actively Hiring</span>
                    <span className="text-xs bg-gray-200 px-2 py-0.5 rounded text-gray-600">
                      PROMOTED
                    </span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mt-1">AI employee for Amazon sellers</p>
                <p className="text-sm text-gray-500 italic"> {job.employeeCount}  Employees</p>
              </div>
            </div>

            {/* Arrow */}

            <div

              onClick={() => {
                setDetailType("company");
                setSelectedJob(job); // Set the selected job
                setShowDetails(true); // Show the details modal
                setShowDetails(true)
              }}

              className="text-gray-400 hover:text-gray-600 mt-2">
              <ExternalLink size={18} />
            </div>
          </div>

          <hr />


          <div className="flex justify-between items-between  px-2 flex-col sm:flex-row border-1 border-gray-700">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center ">
              <div className="flex flex-wrap items-center space-x-4">
                <p className="font-semibold text-base">  {job.jobTitle}</p>
                <span className="text-gray-500 text-sm">{job.workPolicy}  <span className="text-blue-700 font-bold">• {job.salary.currency} {job.salary.amount}</span>  </span>
              </div>
            </div>
            {/* Recruiter Info */}
            <div className="text-sm text-green-600 font-medium justify-end ">
              <p>RECRUITER RECENTLY ACTIVE</p>
              <p className="text-gray-400 text-xs mt-1"> POSTED {Math.floor((new Date() - new Date(job.postedDate)) / (1000 * 60 * 60 * 24))} DAYS AGO
              </p>
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

                onClick={() => {
                  setDetailType("job");
                  setSelectedJob(job); // Set the selected job
                  setShowDetails(true); // Show the details modal
                  setShowDetails(true)
                }}


                className="bg-black text-white px-4 py-1 my-1 rounded text-sm hover:opacity-90"
              >
                Learn more
              </button>
            </div>
          </div>


          {/* Footer: Report & Hide */}
          <div className="flex justify-end space-x-6 text-gray-500 text-sm">
            <button className="flex items-center space-x-1 hover:text-black " onClick={() => { setShowDialog(true) }}>
              <Flag size={14} />
              <span>Report</span>
            </button>
            <button
              onClick={() => setIsHidden(true)}
              className="flex items-center space-x-1 hover:text-black">
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


                {detailType === "job" ? <JobSearchInfoPage job={selectedJob} /> : <CompanyInfoPage />}
              </div>
            </div>
          )}


          {showDialog && (
            <Dialog open={showDialog} onOpenChange={setShowDialog}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Report the Company?</DialogTitle>
                  <DialogDescription>
                    <div className="p-4 space-y-3">
                      {options.map((option, index) => (
                        <label key={index} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="radio"
                            name="reportReason"
                            value={option}
                            checked={selectedOption === option}
                            onChange={(e) => setSelectedOption(e.target.value)}
                            className="form-radio text-blue-600 h-4 w-4"
                          />
                          <span className="text-gray-800">{option}</span>
                        </label>
                      ))}
                    </div>
                    <textarea placeholder="Please Specify Your Issue" className="border border-3  p-2 w-full  border-black" name="reportarea" id="report"></textarea>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          )}


        </div>
      )
      )}
    </div>

  )






};

export default JobCard;