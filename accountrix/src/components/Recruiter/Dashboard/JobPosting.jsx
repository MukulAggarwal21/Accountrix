import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  ChevronLeft, X, Clock,
  Building,
  MapPin,
  Globe,
  DollarSign,
  Calendar,
  Users,
  Briefcase,
  Tag,
  CheckCircle,
  Info,
  Upload,
  PlusCircleIcon,
  Plus,
  Minus
} from 'lucide-react';

import { HeartIcon, GlobeAltIcon, LinkIcon, XMarkIcon } from '@heroicons/react/24/outline';


export default function JobPosting({ step, setStep }) {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [company, setCompany] = useState(null);

  const [newMarketOption, setNewMarketOption] = useState('');
  const [jobData, setJobData] = useState({
    jobTitle: '',
    jobDescription: '',
    companyName: '',
    companyLocation: '',
    newMarketOption: '',
    jobLocation: '', // New field for Hybrid/In-Office work policy
    employeeCount: '',
    website: '',
    companyDescription: '',
    // companyTypes: [], // New field for company types
    marketTypeValues: [],

    // customCompanyType: '', // For custom company type input
    skills: [],
    skillInput: '',
    companyTypeInput: '', // For tracking company type dropdown input
    salary: { currency: 'INR', amount: '' },
    workPolicy: '',
  });

  const totalSteps = 4;

  const marketOptions = [
    'SaaS', 'B2B', 'B2C', 'AI', 'Machine Learning', 'Fintech', 'Healthcare',
    'EdTech', 'E-commerce', 'Cybersecurity', 'Cloud Services', 'IoT',
    'Mobile Apps', 'Enterprise Software', 'API Services', 'Gaming'
  ];


  const addMarketValue = () => {
    if (newMarketOption.trim() && !jobData.marketTypeValues.includes(newMarketOption.trim())) {
      setJobData({
        ...jobData,
        marketTypeValues: [...jobData.marketTypeValues, newMarketOption.trim()]
      });
      setNewMarketOption('');
    }
  };

  // Add a market from dropdown
  const addMarketFromDropdown = (option) => {
    if (!jobData.marketTypeValues.includes(option)) {
      setJobData({
        ...jobData,
        marketTypeValues: [...jobData.marketTypeValues, option]
      });
    }
  };

  // Remove market value
  const removeMarketValue = (value) => {
    setJobData({
      ...jobData,
      marketTypeValues: jobData.marketTypeValues.filter(v => v !== value)
    });
  };

  useEffect(() => {
    // Fetch company info for the logged-in recruiter
    const recruiterId = localStorage.getItem('recruiterId');
    if (recruiterId) {
      axios.get(`http://localhost:5000/company/byRecruiter/${recruiterId}`)
        .then(res => setCompany(res.data))
        .catch(err => {
          setCompany(null);
          console.error('Error fetching company info:', err);
        });
    }
  }, []);

  // const handleSubmit = async () => {
  //   const apiBaseUrl = 'http://localhost:5000';
  //   if (!company || !company._id) {
  //     alert("Company info not loaded. Please try again.");
  //     return;
  //   }
  //   if (!jobData.jobLocation) {
  //     alert("Job Location is required.");
  //     return;
  //   }
  //   try {

  //     const jobPayload = {
  //       ...jobData,
  //       company: company._id, // <-- This is required!
  //     };


  //     const response = await axios.post(`${apiBaseUrl}/jobs`, jobData, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });

  //     if (response.status === 200 || response.status === 201) {
  //       console.log('Job posting submitted successfully:', response.data);
  //       setStep(1); // Reset the form or navigate to another page
  //     }
  //   } catch (error) {
  //     console.error('Error submitting job posting:', error);
  //   }
  // };


  // ...existing code...


  //   const handleSubmit = async () => {
  //   const apiBaseUrl = 'http://localhost:5000';
  //   const recruiterId = localStorage.getItem('recruiterId');
  //   const companyId = localStorage.getItem('companyId');
  //   if (!companyId || !recruiterId) {
  //     alert("Company or recruiter info not loaded. Please try again.");
  //     return;
  //   }
  //   // ...validation...
  //   try {
  //     const jobPayload = {
  //       ...jobData,
  //       company: companyId,
  //       recruiter: recruiterId, // <-- Add this line!
  //     };
  //     const response = await axios.post(`${apiBaseUrl}/jobs`, jobPayload, {
  //       headers: { 'Content-Type': 'application/json' },
  //     });
  //     // ...existing code...
  //   } catch (error) {
  //     // ...existing code...
  //   }
  // };


  const handleSubmit = async () => {
    const apiBaseUrl = 'http://localhost:5000';
    const recruiterId = localStorage.getItem('recruiterId');
    const companyId = localStorage.getItem('companyId');
    if (!companyId || !recruiterId) {
      alert("Company or recruiter info not loaded. Please try again.");
      return;
    }
    try {
      const jobPayload = {
        ...jobData,
        company: companyId,
        recruiter: recruiterId,
      };
      const response = await axios.post(`${apiBaseUrl}/jobs`, jobPayload, {
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.status === 200 || response.status === 201) {
        toast.success('Job posted successfully!');
        setTimeout(() => {
          navigate('/dashboard');
        }, 1500); // Wait for toast to show
      }
    } catch (error) {
      toast.error('Failed to post job. Please try again.');
    }
  };


  // ...existing code...




  const handleInputChange = (field, value) => {
    setJobData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAddSkill = () => {
    if (jobData.skillInput && !jobData.skills.includes(jobData.skillInput)) {
      setJobData((prev) => ({
        ...prev,
        skills: [...prev.skills, jobData.skillInput],
        skillInput: '',
      }));
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setJobData((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill !== skillToRemove),
    }));
  };




  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const renderProgressBar = () => {
    return (
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">
            Step {currentStep} of {totalSteps}
          </span>
          <span className="text-sm font-medium text-gray-700">
            {Math.round((currentStep / totalSteps) * 100)}% Complete
          </span>
        </div>
        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-indigo-600 transition-all duration-300 ease-in-out"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div>
    );
  };

  const renderStep1 = () => {
    return (
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-gray-900">Job Details</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Job Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Senior Frontend Developer"
              value={jobData.jobTitle}
              onChange={(e) => handleInputChange('jobTitle', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Job Description <span className="text-red-500">*</span>
            </label>
            <textarea
              rows="6"
              placeholder="Describe the responsibilities of the position. You can always update this later."
              value={jobData.jobDescription}
              onChange={(e) => handleInputChange('jobDescription', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>

          {/* Salary Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Salary
            </label>
            <div className="flex gap-2">
              <select
                value={jobData.salary.currency}
                onChange={(e) =>
                  setJobData((prev) => ({
                    ...prev,
                    salary: { ...prev.salary, currency: e.target.value },
                  }))
                }
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="INR">INR</option>
                <option value="GBP">GBP</option>
              </select>
              <input
                type="number"
                placeholder="e.g. 50000"
                value={jobData.salary.amount}
                onChange={(e) =>
                  setJobData((prev) => ({
                    ...prev,
                    salary: { ...prev.salary, amount: e.target.value },
                  }))
                }
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Work Policy Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Work Policy
            </label>
            <select
              value={jobData.workPolicy}
              onChange={(e) => handleInputChange('workPolicy', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select Work Policy</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
              <option value="InOffice">In Office</option>
            </select>
          </div>

          {/* Conditional Office Location Field for Hybrid or InOffice */}
          {(jobData.workPolicy === 'Hybrid' || jobData.workPolicy === 'InOffice') && (
            <div className="transition-all duration-300">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Job Location <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. 123 Main St, New York, NY"
                value={jobData.jobLocation}
                onChange={(e) => handleInputChange('jobLocation', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderStep2 = () => {
    return (
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-gray-900">Company Details</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Acme Corporation"
              value={jobData.companyName}
              onChange={(e) => handleInputChange('companyName', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="flex justify-between gap-4">
            {/* Location */}
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                placeholder="e.g. New York, NY"
                value={jobData.companyLocation}
                onChange={(e) => handleInputChange('companyLocation', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Employee Count */}
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Employee Range
              </label>
              <input
                type="text"
                placeholder="e.g. 51-200"
                value={jobData.employeeCount}
                onChange={(e) => handleInputChange('employeeCount', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>




          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-800 mb-3">
              <span className="text-black-500">*Company Market</span>
            </label>

            {/* Selected Market Values */}
            <div className="flex flex-wrap gap-2 mb-3">
              {jobData.marketTypeValues.map((value, index) => (
                <div
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full flex items-center"
                >
                  <span className="mr-1.5">{value}</span>
                  <button
                    type="button"
                    onClick={() => removeMarketValue(value)}
                    className="text-blue-700 hover:text-blue-900"
                  >
                    <XMarkIcon className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              {/* Dropdown for preset market options */}
              <div className="flex-1">
                <select
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  onChange={(e) => {
                    if (e.target.value) {
                      addMarketFromDropdown(e.target.value);
                      e.target.value = '';
                    }
                  }}
                  value=""
                >
                  <option value="">Select or add your own...</option>
                  {marketOptions
                    .filter(option => !jobData.marketTypeValues.includes(option))
                    .map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))
                  }
                </select>
              </div>

              {/* Custom market input */}
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Add a custom market"
                  value={newMarketOption}
                  onChange={(e) => setNewMarketOption(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addMarketValue())}
                />
                <button
                  type="button"
                  onClick={addMarketValue}
                  className="px-4 py-3 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-all duration-200"
                >
                  <PlusCircleIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>


          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company Website
            </label>
            <input
              type="url"
              placeholder="https://yourcompany.com"
              value={jobData.website}
              onChange={(e) => handleInputChange('website', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company Description
            </label>
            <textarea
              rows="4"
              placeholder="Write a brief about the company"
              value={jobData.companyDescription}
              onChange={(e) => handleInputChange('companyDescription', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>
        </div>
      </div>
    );
  };

  const renderStep3 = () => {
    return (
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-gray-900">Required Skills</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Add Skills
            </label>
            <div className="flex gap-2">
              <input
                value={jobData.skillInput || ''}
                onChange={(e) => handleInputChange('skillInput', e.target.value)}
                placeholder="e.g. React, Node.js"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <button
                onClick={handleAddSkill}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Add
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {jobData.skills.map((skill, idx) => (
              <span
                key={idx}
                className="flex items-center px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full"
              >
                {skill}
                <X
                  className="ml-2 w-4 h-4 cursor-pointer hover:text-red-600"
                  onClick={() => handleRemoveSkill(skill)}
                />
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderStep4 = () => {
    return (
      <div className="space-y-6 overflow-y-auto">
        <h2 className="text-xl font-bold text-gray-900">Review & Submit</h2>

        <div className="space-y-4">
          <p className="text-gray-700">
            Please review all the details you have entered before submitting the
            job posting.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-gray-900">Job Title:</h3>
              <p>{jobData.jobTitle}</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Job Description:</h3>
              <p>{jobData.jobDescription}</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Work Policy:</h3>
              <p>{jobData.workPolicy}</p>
              {(jobData.workPolicy === 'Hybrid' || jobData.workPolicy === 'InOffice') && (
                <div>
                  <h3 className="font-bold text-gray-900">Office Location:</h3>
                  <p>{jobData.jobLocation}</p>
                </div>
              )}
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Salary:</h3>
              <p>{jobData.salary.currency} {jobData.salary.amount}</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Company Name:</h3>
              <p>{jobData.companyName}</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Location:</h3>
              <p>{jobData.companyLocation}</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Company Types:</h3>
              <p>{jobData.marketTypeValues.join(', ')}</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Employee Count:</h3>
              <p>{jobData.employeeCount}</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Company Website:</h3>
              <p>{jobData.website}</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Company Description:</h3>
              <p>{jobData.companyDescription}</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Skills:</h3>
              <p>{jobData.skills.join(', ')}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="px-8 py-8 overflow-y-auto">
      <ToastContainer />

      {renderProgressBar()}
      {currentStep === 1 && renderStep1()}
      {currentStep === 2 && renderStep2()}
      {currentStep === 3 && renderStep3()}
      {currentStep === 4 && renderStep4()}

      <div className="mt-8 flex justify-between">
        <button
          onClick={handlePrevStep}
          disabled={currentStep === 1}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50"
        >
          <ChevronLeft className="inline-block w-4 h-4 mr-1" /> Previous
        </button>

        <button
          onClick={currentStep === 4 ? handleSubmit : handleNextStep}
          className={`px-4 py-2 text-white rounded ${currentStep === 4
            ? 'bg-green-600 hover:bg-green-700'
            : 'bg-indigo-600 hover:bg-indigo-700'
            }`}
        >
          {currentStep === 4 ? 'Submit Job Posting' : 'Next'}
        </button>
      </div>
    </div>
  );
}