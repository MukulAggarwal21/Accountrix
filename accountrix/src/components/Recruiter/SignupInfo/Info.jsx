import React, { useState } from 'react';
// import { motion } from 'react-motion';
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
  CheckIcon
} from '@heroicons/react/24/outline';

const Info = () => {
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
    }
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

  const nextStep = () => {
    if (currentStep < 3) {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to backend
    console.log('Form submitted:', formData);
    nextStep();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            JobConnect
          </h1>
          <p className="mt-3 text-xl text-gray-600">Where talent meets opportunity</p>
        </div>

        {/* Progress Steps */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col items-center">
              <div className={`h-12 w-12 rounded-full flex items-center justify-center ${
                currentStep >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
              } transition-all duration-300`}>
                <BuildingOfficeIcon className="h-6 w-6" />
              </div>
              <span className="mt-2 text-sm font-medium text-gray-700">Company</span>
            </div>
            
            <div className={`h-1 flex-1 mx-2 ${currentStep >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`} />
            
            <div className="flex flex-col items-center">
              <div className={`h-12 w-12 rounded-full flex items-center justify-center ${
                currentStep >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
              } transition-all duration-300`}>
                <UsersIcon className="h-6 w-6" />
              </div>
              <span className="mt-2 text-sm font-medium text-gray-700">Team</span>
            </div>
            
            <div className={`h-1 flex-1 mx-2 ${currentStep >= 3 ? 'bg-blue-600' : 'bg-gray-200'}`} />
            
            <div className="flex flex-col items-center">
              <div className={`h-12 w-12 rounded-full flex items-center justify-center ${
                currentStep >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
              } transition-all duration-300`}>
                <CheckCircleIcon className="h-6 w-6" />
              </div>
              <span className="mt-2 text-sm font-medium text-gray-700">Complete</span>
            </div>
          </div>
        </div>

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
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-6 flex items-center">
                    <BuildingOfficeIcon className="h-5 w-5 mr-2 text-blue-500" />
                    About your Company
                  </h3>
                  
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                        Company Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Logo <span className="text-red-500">*</span>
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition-all duration-200 bg-gray-50 hover:bg-blue-50">
                        {formData.logo ? (
                          <div className="flex flex-col items-center">
                            <img 
                              src={URL.createObjectURL(formData.logo)} 
                              alt="Company logo preview" 
                              className="h-20 w-auto mb-3 rounded" 
                            />
                            <button 
                              onClick={() => handleFileUpload('logo', null)}
                              className="text-red-500 text-sm hover:text-red-700"
                            >
                              Remove
                            </button>
                          </div>
                        ) : (
                          <>
                            <CloudArrowUpIcon className="h-12 w-12 text-gray-400 mb-3" />
                            <p className="text-sm text-gray-600 text-center mb-1">
                              Drag and drop your logo here or <span className="text-blue-500">browse</span>
                            </p>
                            <p className="text-xs text-gray-500">PNG, JPG, SVG (max 5MB)</p>
                          </>
                        )}
                        <input
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={(e) => handleFileUpload('logo', e.target.files[0])}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="workEmail" className="block text-sm font-medium text-gray-700 mb-1">
                        Work Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="workEmail"
                        name="workEmail"
                        value={formData.workEmail}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                        required
                      />
                      <p className="mt-1 text-xs text-gray-500">Work email should match company domain</p>
                    </div>
                    
                    <div>
                      <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                        Website <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                        Location <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="market" className="block text-sm font-medium text-gray-700 mb-1">
                          Market <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="market"
                          name="market"
                          value={formData.market}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                          required
                        >
                          <option value="" disabled>Select market</option>
                          <option value="technology">Technology</option>
                          <option value="healthcare">Healthcare</option>
                          <option value="finance">Finance</option>
                          <option value="education">Education</option>
                          <option value="retail">Retail</option>
                          <option value="manufacturing">Manufacturing</option>
                          <option value="media">Media & Entertainment</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="employeeCount" className="block text-sm font-medium text-gray-700 mb-1">
                          Employees <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="employeeCount"
                          name="employeeCount"
                          value={formData.employeeCount}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                          required
                        >
                          <option value="" disabled>Select size</option>
                          <option value="1-10">1-10</option>
                          <option value="11-50">11-50</option>
                          <option value="51-200">51-200</option>
                          <option value="201-500">201-500</option>
                          <option value="501-1000">501-1000</option>
                          <option value="1000+">1000+</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="pitch" className="block text-sm font-medium text-gray-700 mb-1">
                        One-line pitch
                      </label>
                      <textarea
                        id="pitch"
                        name="pitch"
                        value={formData.pitch}
                        onChange={handleInputChange}
                        rows="2"
                        maxLength="100"
                        placeholder="Describe what your company does in just a few words"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      ></textarea>
                      <div className="flex justify-end">
                        <span className="text-xs text-gray-500">{formData.pitch.length}/100</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Personal Information & Additional Options */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-6 flex items-center">
                    <UserIcon className="h-5 w-5 mr-2 text-blue-500" />
                    About you
                  </h3>
                  
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Profile Photo
                      </label>
                      <div className="flex items-center space-x-4">
                        <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                          {formData.profilePhoto ? (
                            <img 
                              src={URL.createObjectURL(formData.profilePhoto)} 
                              alt="Profile" 
                              className="h-full w-full object-cover" 
                            />
                          ) : (
                            <UserIcon className="h-8 w-8 text-gray-400" />
                          )}
                        </div>
                        <button
                          type="button"
                          onClick={() => document.getElementById('profile-upload').click()}
                          className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-all duration-200 text-sm font-medium"
                        >
                          Upload a photo
                        </button>
                        <input
                          id="profile-upload"
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={(e) => handleFileUpload('profilePhoto', e.target.files[0])}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone (US only)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(xxx) xxx-xxxx"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                        Your role <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                        required
                      >
                        <option value="" disabled>Select your role</option>
                        <option value="hr">HR Manager</option>
                        <option value="recruiter">Recruiter</option>
                        <option value="hiring-manager">Hiring Manager</option>
                        <option value="executive">Executive</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    {/* Additional Options */}
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold text-gray-700 mb-4">Additional Options</h3>
                      
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-100 mb-4">
                        <h4 className="font-medium text-gray-800 mb-2">Choose a Plan</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <div
                            className={`border rounded-lg p-3 cursor-pointer ${
                              formData.jobPostingPackage === 'starter' 
                                ? 'border-blue-500 bg-blue-50' 
                                : 'border-gray-200 hover:border-blue-300'
                            }`}
                            onClick={() => setFormData({...formData, jobPostingPackage: 'starter'})}
                          >
                            <div className="flex justify-between items-center mb-1">
                              <h5 className="font-medium">Starter</h5>
                              {formData.jobPostingPackage === 'starter' && (
                                <CheckIcon className="h-4 w-4 text-blue-500" />
                              )}
                            </div>
                            <p className="text-sm text-gray-600">5 job postings</p>
                            <p className="font-semibold mt-1">Free</p>
                          </div>
                          
                          <div
                            className={`border rounded-lg p-3 cursor-pointer ${
                              formData.jobPostingPackage === 'professional' 
                                ? 'border-blue-500 bg-blue-50' 
                                : 'border-gray-200 hover:border-blue-300'
                            }`}
                            onClick={() => setFormData({...formData, jobPostingPackage: 'professional'})}
                          >
                            <div className="flex justify-between items-center mb-1">
                              <h5 className="font-medium">Professional</h5>
                              {formData.jobPostingPackage === 'professional' && (
                                <CheckIcon className="h-4 w-4 text-blue-500" />
                              )}
                            </div>
                            <p className="text-sm text-gray-600">25 job postings</p>
                            <p className="font-semibold mt-1">$99/mo</p>
                          </div>
                          
                          <div
                            className={`border rounded-lg p-3 cursor-pointer ${
                              formData.jobPostingPackage === 'enterprise' 
                                ? 'border-blue-500 bg-blue-50' 
                                : 'border-gray-200 hover:border-blue-300'
                            }`}
                            onClick={() => setFormData({...formData, jobPostingPackage: 'enterprise'})}
                          >
                            <div className="flex justify-between items-center mb-1">
                              <h5 className="font-medium">Enterprise</h5>
                              {formData.jobPostingPackage === 'enterprise' && (
                                <CheckIcon className="h-4 w-4 text-blue-500" />
                              )}
                            </div>
                            <p className="text-sm text-gray-600">Unlimited jobs</p>
                            <p className="font-semibold mt-1">$299/mo</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="receiveUpdates"
                            name="receiveUpdates"
                            checked={formData.receiveUpdates}
                            onChange={handleInputChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <label htmlFor="receiveUpdates" className="ml-2 block text-sm text-gray-700">
                            Receive updates about new features and job market trends
                          </label>
                        </div>
                        
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="allowAiMatching"
                            name="allowAiMatching"
                            checked={formData.allowAiMatching}
                            onChange={handleInputChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <label htmlFor="allowAiMatching" className="ml-2 block text-sm text-gray-700">
                            Enable AI-powered candidate matching for your job listings
                          </label>
                        </div>
                        
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="agreeToTerms"
                            name="agreeToTerms"
                            checked={formData.agreeToTerms}
                            onChange={handleInputChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            required
                          />
                          <label htmlFor="agreeToTerms" className="ml-2 block text-sm text-gray-700">
                            I have read and accepted the <a href="#" className="text-blue-600 hover:underline">Guidelines</a> and <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> <span className="text-red-500">*</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
              
              <div className="mb-8">
                <div className="bg-blue-50 rounded-lg p-5 border border-blue-100 mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                    <UsersIcon className="h-5 w-5 mr-2 text-blue-500" />
                    Invite Your Team
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Enter your team member's email, we will send them an invite to join JobConnect.
                  </p>
                  <p className="text-sm text-gray-500">
                    Team members can help you manage job postings, review applications, and schedule interviews.
                  </p>
                </div>
                
                <div className="space-y-4">
                  {formData.teamMembers.map((member, index) => (
                    <div 
                      key={index} 
                      className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200"
                    >
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address {index === 0 && <span className="text-red-500">*</span>}
                        </label>
                        <input
                          type="email"
                          value={member.email}
                          onChange={(e) => handleTeamMemberChange(index, 'email', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                          required={index === 0}
                        />
                      </div>
                      <div className="w-full sm:w-1/3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Role
                        </label>
                        <select
                          value={member.role}
                          onChange={(e) => handleTeamMemberChange(index, 'role', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                        >
                          <option value="recruiter">Recruiter</option>
                          <option value="hr">HR Manager</option>
                          <option value="hiring-manager">Hiring Manager</option>
                          <option value="admin">Admin</option>
                        </select>
                      </div>
                      <div className="flex items-end sm:w-auto">
                        <button
                          type="button"
                          onClick={() => removeTeamMember(index)}
                          className="w-full sm:w-auto px-4 py-3 text-gray-500 hover:text-red-500 transition-all duration-200"
                          disabled={formData.teamMembers.length === 1}
                        >
                          <TrashIcon className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button
                  type="button"
                  onClick={addTeamMember}
                  className="mt-4 px-5 py-2 border border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200 flex items-center"
                >
                  <PlusCircleIcon className="h-5 w-5 mr-2" />
                  Add Another Team Member
                </button>
              </div>
              
              {/* Company Branding */}
              <div className="mt-10 mb-10">
                <h3 className="text-xl font-semibold text-gray-800 mb-5">Company Branding</h3>
                <p className="text-gray-600 mb-5">
                  Customize your company colors to match your brand identity.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Primary Color
                    </label>
                    <div className="flex items-center space-x-3">
                      <div 
                        className="h-10 w-10 rounded-full border cursor-pointer"
                        style={{ backgroundColor: formData.companyColors.primary }}
                      ></div>
                     <input
                        type="color"
                        value={formData.companyColors.primary}
                        onChange={(e) => setFormData({
                          ...formData,
                          companyColors: {
                            ...formData.companyColors,
                            primary: e.target.value
                          }
                        })}
                        className="h-10 w-16 rounded border border-gray-300"
                      />
                      <input
                        type="text"
                        value={formData.companyColors.primary}
                        onChange={(e) => setFormData({
                          ...formData,
                          companyColors: {
                            ...formData.companyColors,
                            primary: e.target.value
                          }
                        })}
                        className="px-3 py-2 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 w-24"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Used for buttons, links, and accents</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Secondary Color
                    </label>
                    <div className="flex items-center space-x-3">
                      <div 
                        className="h-10 w-10 rounded-full border cursor-pointer"
                        style={{ backgroundColor: formData.companyColors.secondary }}
                      ></div>
                      <input
                        type="color"
                        value={formData.companyColors.secondary}
                        onChange={(e) => setFormData({
                          ...formData,
                          companyColors: {
                            ...formData.companyColors,
                            secondary: e.target.value
                          }
                        })}
                        className="h-10 w-16 rounded border border-gray-300"
                      />
                      <input
                        type="text"
                        value={formData.companyColors.secondary}
                        onChange={(e) => setFormData({
                          ...formData,
                          companyColors: {
                            ...formData.companyColors,
                            secondary: e.target.value
                          }
                        })}
                        className="px-3 py-2 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 w-24"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Used for backgrounds and highlights</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preview
                  </label>
                  <div className="p-4 rounded-lg border border-gray-200">
                    <div className="flex items-center">
                      <div 
                        className="h-10 w-10 mr-3 rounded-full flex items-center justify-center text-white font-bold"
                        style={{ backgroundColor: formData.companyColors.primary }}
                      >
                        {formData.companyName ? formData.companyName.charAt(0).toUpperCase() : 'J'}
                      </div>
                      <div>
                        <h4 className="font-medium">{formData.companyName || 'Your Company'}</h4>
                        <p 
                          className="text-sm"
                          style={{ color: formData.companyColors.primary }}
                        >
                          {formData.pitch || 'Your company description here'}
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 flex space-x-2">
                      <button
                        className="px-4 py-2 rounded-md text-white font-medium text-sm"
                        style={{ backgroundColor: formData.companyColors.primary }}
                      >
                        Apply Now
                      </button>
                      <button
                        className="px-4 py-2 rounded-md text-sm font-medium border"
                        style={{ 
                          color: formData.companyColors.primary,
                          borderColor: formData.companyColors.primary,
                          backgroundColor: formData.companyColors.secondary 
                        }}
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
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
                  onClick={handleSubmit}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 shadow-md transition-all duration-300 flex items-center"
                >
                  Complete Setup
                  <CheckIcon className="ml-2 h-5 w-5" />
                </button>
              </div>
            </motion.div>
          )}
          
          {/* Page 3: Completion */}
          {currentStep === 3 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8 text-center"
            >
              <div className="mb-8 flex justify-center">
                <div className="h-24 w-24 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckIcon className="h-12 w-12 text-green-600" />
                </div>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Setup Complete!</h2>
              <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                Your recruiter account has been successfully created. You can now start posting jobs 
                and finding the perfect candidates for your company.
              </p>
              
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 max-w-lg mx-auto mb-8">
                <h3 className="font-semibold text-gray-800 mb-2">Next Steps:</h3>
                <ul className="text-left space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 mt-1 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <span className="text-xs font-bold">1</span>
                    </div>
                    <span className="ml-2 text-gray-700">Complete your company profile to attract top talent</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 mt-1 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <span className="text-xs font-bold">2</span>
                    </div>
                    <span className="ml-2 text-gray-700">Create your first job posting</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 mt-1 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <span className="text-xs font-bold">3</span>
                    </div>
                    <span className="ml-2 text-gray-700">Set up your team's access permissions</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex justify-center space-x-4">
                <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all duration-200">
                  View Dashboard
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 shadow-md transition-all duration-300">
                  Post Your First Job
                </button>
              </div>
            </motion.div>
          )}
        </div>
        
        {/* Footer */}
        <div className="text-center text-gray-500 text-sm max-w-3xl mx-auto">
          <p className="mb-2">© 2025 JobConnect. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-gray-700 transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-gray-700 transition-colors duration-200">Terms of Service</a>
            <a href="#" className="hover:text-gray-700 transition-colors duration-200">Help Center</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;

// Additional Components

// This component could be used for a preview of the recruiter dashboard
const DashboardPreview = () => {
  return (
    <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
      <h3 className="text-lg font-medium text-gray-800 mb-4">Your Dashboard Preview</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
          <div className="flex justify-between items-center">
            <h4 className="font-medium text-gray-700">Active Jobs</h4>
            <span className="text-lg font-bold text-blue-600">0</span>
          </div>
        </div>
        
        <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
          <div className="flex justify-between items-center">
            <h4 className="font-medium text-gray-700">Applications</h4>
            <span className="text-lg font-bold text-purple-600">0</span>
          </div>
        </div>
        
        <div className="p-4 bg-green-50 rounded-lg border border-green-100">
          <div className="flex justify-between items-center">
            <h4 className="font-medium text-gray-700">Interviews</h4>
            <span className="text-lg font-bold text-green-600">0</span>
          </div>
        </div>
      </div>
      
      <p className="text-sm text-gray-600">
        Complete your setup to access your full recruiter dashboard
      </p>
    </div>
  );
};

// This component could be used for job posting templates
const JobTemplateSelector = () => {
  const templates = [
    { id: 1, title: "Software Engineer", category: "Technology" },
    { id: 2, title: "Product Manager", category: "Technology" },
    { id: 3, title: "Sales Representative", category: "Sales" },
    { id: 4, title: "Marketing Specialist", category: "Marketing" }
  ];
  
  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium text-gray-800 mb-3">Quick Start with Templates</h3>
      <p className="text-sm text-gray-600 mb-4">
        Use one of our pre-made templates to get started quickly
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {templates.map(template => (
          <div 
            key={template.id}
            className="p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all duration-200 cursor-pointer"
          >
            <h4 className="font-medium text-gray-800">{template.title}</h4>
            <p className="text-xs text-gray-500">{template.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};