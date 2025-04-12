
import React from 'react';

import {
  BuildingOfficeIcon,
 
  CloudArrowUpIcon,
} from '@heroicons/react/24/outline'

const CompanyInfoForm = ({ formData, handleInputChange, handleFileUpload }) => {
  return (
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
  );
};

export default CompanyInfoForm;