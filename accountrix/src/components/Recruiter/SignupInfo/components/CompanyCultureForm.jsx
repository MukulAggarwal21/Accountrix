import React, { useState } from 'react';
import { HeartIcon, GlobeAltIcon, LinkIcon, PlusCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';

const CompanyCultureForm = ({ formData, handleInputChange, setFormData }) => {
  const [newCultureOption, setNewCultureOption] = useState('');
  const [newMarketOption, setNewMarketOption] = useState('');
  
  // Culture options preset
  const cultureOptions = [
    'Remote-friendly', 'Flexible Hours', 'Healthcare', 'Mental Health Support',
    'Fitness Benefits', 'Professional Development', 'Parental Leave',
    'Unlimited PTO', 'Work-Life Balance', 'Diverse & Inclusive', 'Pet-friendly',
    'Casual Dress Code', 'Team Building Events', '401(k) Matching', 'Stock Options'
  ];
  
  // Market options preset
  const marketOptions = [
    'SaaS', 'B2B', 'B2C', 'AI', 'Machine Learning', 'Fintech', 'Healthcare',
    'EdTech', 'E-commerce', 'Cybersecurity', 'Cloud Services', 'IoT', 
    'Mobile Apps', 'Enterprise Software', 'API Services', 'Gaming'
  ];

  // Add a new culture value
  const addCultureValue = () => {
    if (newCultureOption.trim() && !formData.cultureValues.includes(newCultureOption.trim())) {
      setFormData({
        ...formData,
        cultureValues: [...formData.cultureValues, newCultureOption.trim()]
      });
      setNewCultureOption('');
    }
  };

  // Add a culture from dropdown
  const addCultureFromDropdown = (option) => {
    if (!formData.cultureValues.includes(option)) {
      setFormData({
        ...formData,
        cultureValues: [...formData.cultureValues, option]
      });
    }
  };

  // Remove culture value
  const removeCultureValue = (value) => {
    setFormData({
      ...formData,
      cultureValues: formData.cultureValues.filter(v => v !== value)
    });
  };

  // Add a new market
  const addMarketValue = () => {
    if (newMarketOption.trim() && !formData.marketValues.includes(newMarketOption.trim())) {
      setFormData({
        ...formData,
        marketValues: [...formData.marketValues, newMarketOption.trim()]
      });
      setNewMarketOption('');
    }
  };

  // Add a market from dropdown
  const addMarketFromDropdown = (option) => {
    if (!formData.marketValues.includes(option)) {
      setFormData({
        ...formData,
        marketValues: [...formData.marketValues, option]
      });
    }
  };

  // Remove market value
  const removeMarketValue = (value) => {
    setFormData({
      ...formData,
      marketValues: formData.marketValues.filter(v => v !== value)
    });
  };

  return (
    <div className="mb-8">
      {/* Company Culture Section */}
      <div className="bg-purple-50 rounded-lg p-5 border border-purple-100 mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
          <HeartIcon className="h-5 w-5 mr-2 text-purple-500" />
          Company Culture & Benefits
        </h3>
        <p className="text-gray-600 mb-2">
          Highlight what makes your company a great place to work.
        </p>
        <p className="text-sm text-gray-500">
          Candidates are increasingly looking for more than just a paycheck. Show them what sets your company apart.
        </p>
      </div>

      {/* Company Culture */}
      <div className="mb-8">
        <label className="block text-lg font-medium text-gray-800 mb-3">
          What's your company culture like? <span className="text-red-500">*</span>
        </label>
        
        {/* Selected Culture Values */}
        <div className="flex flex-wrap gap-2 mb-3">
          {formData.cultureValues.map((value, index) => (
            <div 
              key={index}
              className="bg-purple-100 text-purple-800 px-3 py-1.5 rounded-full flex items-center"
            >
              <span className="mr-1.5">{value}</span>
              <button
                type="button"
                onClick={() => removeCultureValue(value)}
                className="text-purple-700 hover:text-purple-900"
              >
                <XMarkIcon className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          {/* Dropdown for preset options */}
          <div className="flex-1">
            <select 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
              onChange={(e) => {
                if (e.target.value) {
                  addCultureFromDropdown(e.target.value);
                  e.target.value = '';
                }
              }}
              value=""
            >
              <option value="">Select or add your own...</option>
              {cultureOptions
                .filter(option => !formData.cultureValues.includes(option))
                .map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))
              }
            </select>
          </div>
          
          {/* Custom value input */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Add a custom value"
              value={newCultureOption}
              onChange={(e) => setNewCultureOption(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addCultureValue())}
            />
            <button
              type="button"
              onClick={addCultureValue}
              className="px-4 py-3 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-all duration-200"
            >
              <PlusCircleIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        {/* Description */}
        <div className="mb-6">
          <label htmlFor="cultureDescription" className="block text-sm font-medium text-gray-700 mb-1">
            Tell candidates more about your workplace culture
          </label>
          <textarea
            id="cultureDescription"
            name="cultureDescription"
            value={formData.cultureDescription}
            onChange={handleInputChange}
            placeholder="Describe what makes your company's culture special..."
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 min-h-32"
            rows={4}
          />
        </div>
      </div>

      {/* Company Markets */}
      <div className="mb-8">
        <label className="block text-lg font-medium text-gray-800 mb-3">
          What markets do you operate in? <span className="text-red-500">*</span>
        </label>
        
        {/* Selected Market Values */}
        <div className="flex flex-wrap gap-2 mb-3">
          {formData.marketValues.map((value, index) => (
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
                .filter(option => !formData.marketValues.includes(option))
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

      {/* Social Media Links */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
          <GlobeAltIcon className="h-5 w-5 mr-2 text-gray-500" />
          Social Media Links
        </h3>
        <p className="text-sm text-gray-500 mb-4">
          Add your company's social media profiles to give candidates more ways to engage with you.
        </p>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">
                LinkedIn
              </label>
              <div className="flex items-center">
                <span className="bg-gray-100 px-3 py-3 rounded-l-lg border border-r-0 border-gray-300 text-gray-500">
                  <LinkIcon className="h-5 w-5" />
                </span>
                <input
                  type="url"
                  id="linkedin"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                  placeholder="https://linkedin.com/company/..."
                  className="w-full px-4 py-3 rounded-r-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                />
              </div>
            </div>
            <div className="flex-1">
              <label htmlFor="twitter" className="block text-sm font-medium text-gray-700 mb-1">
                Twitter/X
              </label>
              <div className="flex items-center">
                <span className="bg-gray-100 px-3 py-3 rounded-l-lg border border-r-0 border-gray-300 text-gray-500">
                  <LinkIcon className="h-5 w-5" />
                </span>
                <input
                  type="url"
                  id="twitter"
                  name="twitter"
                  value={formData.twitter}
                  onChange={handleInputChange}
                  placeholder="https://twitter.com/..."
                  className="w-full px-4 py-3 rounded-r-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="facebook" className="block text-sm font-medium text-gray-700 mb-1">
                Facebook
              </label>
              <div className="flex items-center">
                <span className="bg-gray-100 px-3 py-3 rounded-l-lg border border-r-0 border-gray-300 text-gray-500">
                  <LinkIcon className="h-5 w-5" />
                </span>
                <input
                  type="url"
                  id="facebook"
                  name="facebook"
                  value={formData.facebook}
                  onChange={handleInputChange}
                  placeholder="https://facebook.com/..."
                  className="w-full px-4 py-3 rounded-r-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                />
              </div>
            </div>
            <div className="flex-1">
              <label htmlFor="instagram" className="block text-sm font-medium text-gray-700 mb-1">
                Instagram
              </label>
              <div className="flex items-center">
                <span className="bg-gray-100 px-3 py-3 rounded-l-lg border border-r-0 border-gray-300 text-gray-500">
                  <LinkIcon className="h-5 w-5" />
                </span>
                <input
                  type="url"
                  id="instagram"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleInputChange}
                  placeholder="https://instagram.com/..."
                  className="w-full px-4 py-3 rounded-r-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-800 mb-3">Key Benefits <span className="text-gray-500 text-sm font-normal ml-2">Optional</span></h3>
        <p className="text-sm text-gray-500 mb-4">
          List your top three benefits to attract candidates.
        </p>

        <div className="space-y-4">
          {[1, 2, 3].map((num) => (
            <div key={num}>
              <label htmlFor={`benefit${num}`} className="block text-sm font-medium text-gray-700 mb-1">
                Benefit {num}
              </label>
              <input
                type="text"
                id={`benefit${num}`}
                name={`benefit${num}`}
                value={formData[`benefit${num}`] || ''}
                onChange={handleInputChange}
                placeholder={`e.g. ${
                  num === 1 ? 'Comprehensive healthcare coverage' : 
                  num === 2 ? 'Flexible working hours' : 
                  'Generous 401(k) matching'
                }`}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyCultureForm;