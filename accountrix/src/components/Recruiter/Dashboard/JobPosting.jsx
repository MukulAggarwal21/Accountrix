import { useState } from 'react';
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
export default function JobPosting({ step, setStep }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [jobData, setJobData] = useState({
    jobTitle: '',
    jobDescription: '',
    companyName: '',
    location: '',
    website: '',
    companyDescription: '',
    // detail: [{ label: '', value: '' }],
    skills: [],
    salary: { currency: 'INR', amount: '' },
    workPolicy: '',
  });

  const totalSteps = 4;


  // const addDetail = () => {
  //   setJobData({
  //     ...jobData,
  //     detail: [...jobData.detail, { label: '', value: '' }],
  //   })
  // }


  // const addDetail = () => {
  //   setJobData((prev) => ({
  //     ...prev,
  //     detail: [...prev.detail, { label: '', value: '' }],
  //   }));
  // };

  // const handleDetailChange = (index, field, value) => {
  //   const updatedDetails = [...jobData.detail];
  //   updatedDetails[index][field] = value;
  //   setJobData((prev) => ({
  //     ...prev,
  //     detail: updatedDetails,
  //   }));
  // };

  // const removeDetail = (index) => {
  //   const updatedDetails = jobData.detail.filter((_, i) => i !== index);
  //   setJobData((prev) => ({
  //     ...prev,
  //     detail: updatedDetails,
  //   }));
  // };

  const handleSubmit = async () => {
    const apiBaseUrl = 'http://localhost:5000';

    try {
      const response = await axios.post(`${apiBaseUrl}/jobs`, jobData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200 || response.status === 201) {
        console.log('Job posting submitted successfully:', response.data);
        setStep(1); // Reset the form or navigate to another page
      }
    } catch (error) {
      console.error('Error submitting job posting:', error);
    }
  };



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

          {/* <div className="space-y-4">
            {jobData.detail.map((detail, index) => (
              <div key={index} className="flex items-center space-x-4">
                <input
                  type="text"
                  placeholder="Label"
                  value={detail.label}
                  onChange={(e) => handleDetailChange(index, 'label', e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
                <input
                  type="text"
                  placeholder="Value"
                  value={detail.value}
                  onChange={(e) => handleDetailChange(index, 'value', e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
                <button
                  type="button"
                  onClick={() => removeDetail(index)}
                  className="px-3 py-2 text-red-600 hover:text-red-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={addDetail}
            className="mt-4 px-5 py-2 border border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200 flex items-center"
          >
            <PlusCircleIcon className="h-5 w-5 mr-2" />
            Add Another Detail
          </button> */}


          {/* New Salary Field */}
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

          {/* New Work Policy Field */}
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

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. New York, NY"
              value={jobData.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
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
      <div className="space-y-6  - overflow-y-auto">
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
              <h3 className="font-bold text-gray-900">Company Name:</h3>
              <p>{jobData.companyName}</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Location:</h3>
              <p>{jobData.location}</p>
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