
import { useState } from 'react';
import {
  ChevronLeft,
  X,
  Clock,
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
  Plus,
  Minus
} from 'lucide-react';

export default function JobPosting() {
  const [currentStep, setCurrentStep] = useState(1);
  const [jobType, setJobType] = useState('full-time');
  const [remotePolicy, setRemotePolicy] = useState('');
  const [relocate, setRelocate] = useState('');
  const [visa, setVisa] = useState('');
  const [remoteCulture, setRemoteCulture] = useState('');
  const [tags, setTags] = useState([]);
  const [skills, setSkills] = useState([]);
  const [tagInput, setTagInput] = useState('');
  const [skillInput, setSkillInput] = useState('');
  const [showTimezoneSelector, setShowTimezoneSelector] = useState(false);

  const totalSteps = 5;

  const jobRoles = [
    'Software Engineer', 'Product Manager', 'UX Designer', 'Data Scientist',
    'DevOps Engineer', 'Marketing Specialist', 'Sales Representative',
    'Customer Success Manager', 'Human Resources', 'Financial Analyst'
  ];

  const experienceLevels = [
    'Entry level (0-2 years)', 'Mid level (3-5 years)',
    'Senior (5-8 years)', 'Lead/Principal (8+ years)', 'Executive'
  ];

  const companyBenefits = [
    { id: 1, name: 'Health Insurance', selected: true },
    { id: 2, name: 'Dental Insurance', selected: true },
    { id: 3, name: 'Vision Insurance', selected: true },
    { id: 4, name: '401(k) Plan', selected: false },
    { id: 5, name: 'Flexible Work Hours', selected: false },
    { id: 6, name: 'Remote Work Option', selected: false },
    { id: 7, name: 'Professional Development', selected: false },
    { id: 8, name: 'Paid Time Off', selected: true },
    { id: 9, name: 'Parental Leave', selected: false },
    { id: 10, name: 'Gym Membership', selected: false },
  ];

  const timezones = ['GMT-12', 'GMT-11', 'GMT-10', 'GMT-9', 'GMT-8', 'GMT-7', 'GMT-6', 'GMT-5', 'GMT-4', 'GMT-3', 'GMT-2', 'GMT-1', 'GMT+0', 'GMT+1', 'GMT+2', 'GMT+3', 'GMT+4', 'GMT+5', 'GMT+6', 'GMT+7', 'GMT+8', 'GMT+9', 'GMT+10', 'GMT+11', 'GMT+12'];

  const handleAddTag = () => {
    if (tagInput && !tags.includes(tagInput)) {
      setTags([...tags, tagInput]);
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleAddSkill = () => {
    if (skillInput && !skills.includes(skillInput)) {
      setSkills([...skills, skillInput]);
      setSkillInput('');
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Job Description <span className="text-red-500">*</span>
            </label>
            <div className="border border-gray-300 rounded-lg overflow-hidden">
              <div className="bg-gray-50 border-b border-gray-300 px-4 py-2 flex items-center justify-between">
                <div className="flex space-x-4">
                  <button className="text-gray-600 hover:text-gray-900">
                    <span className="font-medium">B</span>
                  </button>
                  <button className="text-gray-600 hover:text-gray-900">
                    <span className="italic">I</span>
                  </button>
                  <button className="text-gray-600 hover:text-gray-900">
                    <span className="underline">U</span>
                  </button>
                  <button className="text-gray-600 hover:text-gray-900">
                    • List
                  </button>
                </div>
                <button className="text-xs text-indigo-600 hover:text-indigo-800">
                  Use AI to generate description
                </button>
              </div>
              <textarea
                rows="6"
                placeholder="Describe the responsibilities of the position. You can always update this later."
                className="w-full px-4 py-2 border-none focus:outline-none"
              ></textarea>
            </div>
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
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
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
          {skills.map((skill, idx) => (
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
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900">Job Benefits</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Benefits Offered
          </label>
          <div className="grid grid-cols-2 gap-2">
            {companyBenefits.map((benefit) => (
              <label key={benefit.id} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={benefit.selected}
                  onChange={() =>
                    setCompanyBenefits((prev) =>
                      prev.map((b) =>
                        b.id === benefit.id
                          ? { ...b, selected: !b.selected }
                          : b
                      )
                    )
                  }
                />
                <span>{benefit.name}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const renderStep5 = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900">Review & Submit</h2>

      <div className="space-y-4">
        <p className="text-gray-700">
          Please review all the details you have entered before submitting the
          job posting.
        </p>
        <button
          
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Submit Job Posting
        </button>
      </div>
    </div>
  );
};
 return (
  <div className="max-w-4xl mx-auto px-4 py-8">
    {renderProgressBar()}
    {currentStep === 1 && renderStep1()}
    {currentStep === 2 && renderStep2()}
    {currentStep === 3 && renderStep3()}
    {currentStep === 4 && renderStep4()}
    {currentStep === 5 && renderStep5()}

    <div className="mt-8 flex justify-between">
      <button
        onClick={handlePrevStep}
        disabled={currentStep === 1}
        className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50"
      >
        <ChevronLeft className="inline-block w-4 h-4 mr-1" /> Previous
      </button>
      <button
        onClick={handleNextStep}
        disabled={currentStep === totalSteps}
        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
      >
        Next
      </button>
    </div>
  </div>
);
}