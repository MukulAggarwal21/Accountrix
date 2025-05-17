import React, { useState } from 'react';
import { motion } from "framer-motion";

import {
  UserIcon,
  BuildingOfficeIcon,
  UsersIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  CloudArrowUpIcon,
  TrashIcon,
  PlusCircleIcon,
  CheckIcon,
  CurrencyDollarIcon,
  HeartIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';
import CompanyInfoForm from './components/CompanyInfoForm';
import ProgressBar from './components/ProgressBar';
import Footer from './components/Footer';
import PersonalInfoForm from './components/PersonalInfoForm';
import CompanyBranding from './components/CompanyBranding';
import CompletionStep from './components/CompletionStep';
import TeamSetupForm from './components/TeamSetupForm';
import FundingForm from './components/FundingForm';
import CompanyCultureForm from './components/CompanyCultureForm';

const RecruiterSetup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Company info
    companyName: '',
    logo: null,
    workEmail: '',
    website: '',
    location: '',
    market: '',
    employeeCount: '',
    pitch: '',
    // Personal info
    profilePhoto: null,
    name: '',
    phone: '',
    role: '',
    agreeToTerms: false,
    // Team members
    teamMembers: [{ email: '', role: 'recruiter' }],
    // Additional options
    jobPostingPackage: '',
    receiveUpdates: true,
    allowAiMatching: true,
    companyColors: {
      primary: '#3b82f6',
      secondary: '#ffffff'
    },
    // Funding info
    totalRounds: '',
    lastRoundDate: '',
    investors: [{ name: '', company: '', location: '' }],
    // Company Culture info
    cultureValues: [],
    marketValues: [],
    cultureDescription: '',
    linkedin: '',
    twitter: '',
    facebook: '',
    instagram: '',
    benefit1: '',
    benefit2: '',
    benefit3: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleFileUpload = (name, file) => {
    setFormData({
      ...formData,
      [name]: file,
    });
  };

  const handleTeamMemberChange = (index, field, value) => {
    const updatedTeamMembers = [...formData.teamMembers];
    updatedTeamMembers[index] = {
      ...updatedTeamMembers[index],
      [field]: value,
    };
    setFormData({ ...formData, teamMembers: updatedTeamMembers });
  };

  const addTeamMember = () => {
    setFormData({
      ...formData,
      teamMembers: [...formData.teamMembers, { email: '', role: 'recruiter' }],
    });
  };

  const removeTeamMember = (index) => {
    if (formData.teamMembers.length > 1) {
      const updatedTeamMembers = formData.teamMembers.filter((_, i) => i !== index);
      setFormData({ ...formData, teamMembers: updatedTeamMembers });
    }
  };

  const handleInvestorChange = (index, field, value) => {
    const updatedInvestors = [...formData.investors];
    updatedInvestors[index] = {
      ...updatedInvestors[index],
      [field]: value,
    };
    setFormData({ ...formData, investors: updatedInvestors });
  };

  const addInvestor = () => {
    setFormData({
      ...formData,
      investors: [...formData.investors, { name: '', company: '', location: '' }],
    });
  };

  const removeInvestor = (index) => {
    if (formData.investors.length > 1) {
      const updatedInvestors = formData.investors.filter((_, i) => i !== index);
      setFormData({ ...formData, investors: updatedInvestors });
    }
  };

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Submit form data to backend
  //   console.log('Form submitted:', formData);
  //   setCurrentStep(5); // Move to completion step
  // };


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get recruiterId from localStorage (set this after recruiter signup/login)
    const recruiterId = localStorage.getItem('recruiterId');
    if (!recruiterId) {
      alert("Recruiter ID not found. Please login again.");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/company/onboard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ recruiterId, ...formData }),
        credentials: 'include'
      });

      const data = await response.json();

      if (response.ok) {
        // Success logic: show a message, move to completion step, etc.
        console.log('Company onboarded:', data);
        setCurrentStep(5); // Move to completion step
      } else {
        // Error logic: show error message
        alert(data.message || "Failed to onboard company.");
      }
    } catch (err) {
      // Handle network or other errors
      console.error('Error submitting company onboarding:', err);
      alert("An error occurred while submitting the form.");
    }
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Accountrix
          </h1>
          <p className="mt-3 text-xl text-gray-600">One portal. Endless career possibilities.</p>
        </div>


        {/* Progress Steps */}
        <ProgressBar currentStep={currentStep} totalSteps={5} />


        {/* Form Card Container */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-5xl mx-auto mb-16 transform transition duration-300 hover:shadow-2xl">

          {/* Page 1: Company & Personal Info */}
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Create Your Recruiter Account</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">

                {/* Company Information */}
                <CompanyInfoForm formData={formData} handleInputChange={handleInputChange} handleFileUpload={handleFileUpload} />

                {/* Personal Information & Additional Options */}
                <PersonalInfoForm formData={formData} handleInputChange={handleInputChange} handleFileUpload={handleFileUpload} setFormData={setFormData} />
              </div>

              <div className="flex justify-end mt-10">
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 shadow-md transition-all duration-300 flex items-center"
                >
                  Continue to Team Setup
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </button>
              </div>
            </motion.div>
          )}

          {/* Page 2: Team Members */}
          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Team Members Setup</h2>

              <TeamSetupForm formData={formData} handleTeamMemberChange={handleTeamMemberChange} addTeamMember={addTeamMember} removeTeamMember={removeTeamMember} />

              {/* Company Branding */}
              <CompanyBranding formData={formData} setFormData={setFormData} />

              {/* Action Buttons */}
              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-all duration-200 flex items-center"
                >
                  <ArrowLeftIcon className="h-5 w-5 mr-2" />
                  Back to Account
                </button>

                <button
                  type="button"
                  onClick={nextStep}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 shadow-md transition-all duration-300 flex items-center"
                >
                  Continue to Culture
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </button>
              </div>
            </motion.div>
          )}

          {/* Page 3: Company Culture */}
          {currentStep === 3 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Company Culture</h2>

              <CompanyCultureForm formData={formData} handleInputChange={handleInputChange} setFormData={setFormData} />

              {/* Action Buttons */}
              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-all duration-200 flex items-center"
                >
                  <ArrowLeftIcon className="h-5 w-5 mr-2" />
                  Back to Team Setup
                </button>

                <button
                  type="button"
                  onClick={nextStep}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 shadow-md transition-all duration-300 flex items-center"
                >
                  Continue to Funding
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </button>
              </div>
            </motion.div>
          )}

          {/* Page 4: Funding Information */}
          {currentStep === 4 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Funding Information</h2>

              <FundingForm
                formData={formData}
                handleInputChange={handleInputChange}
                handleInvestorChange={handleInvestorChange}
                addInvestor={addInvestor}
                removeInvestor={removeInvestor}
              />

              {/* Action Buttons */}
              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-all duration-200 flex items-center"
                >
                  <ArrowLeftIcon className="h-5 w-5 mr-2" />
                  Back to Culture
                </button>

                <button
                  type="button"
                  onClick={handleSubmit}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 shadow-md transition-all duration-300 flex items-center"
                >
                  Complete Setup
                  <CheckIcon className="ml-2 h-5 w-5" />
                </button>
              </div>
            </motion.div>
          )}

          {/* Page 5: Completion */}
          {currentStep === 5 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8 text-center"
            >
              <CompletionStep />
            </motion.div>
          )}
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default RecruiterSetup;