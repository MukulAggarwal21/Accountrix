import React from 'react';
import { UserIcon } from '@heroicons/react/24/outline';

const PersonalInfoForm = ({ formData, handleInputChange, handleFileUpload, setFormData }) => {
  return (
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
                className={`border rounded-lg p-3 cursor-pointer ${formData.jobPostingPackage === 'starter'
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300'
                  }`}
                onClick={() => setFormData({ ...formData, jobPostingPackage: 'starter' })}
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
                className={`border rounded-lg p-3 cursor-pointer ${formData.jobPostingPackage === 'professional'
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300'
                  }`}
                onClick={() => setFormData({ ...formData, jobPostingPackage: 'professional' })}
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
                className={`border rounded-lg p-3 cursor-pointer ${formData.jobPostingPackage === 'enterprise'
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300'
                  }`}
                onClick={() => setFormData({ ...formData, jobPostingPackage: 'enterprise' })}
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
  );
};

export default PersonalInfoForm;