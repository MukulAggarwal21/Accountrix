import React from 'react';
import { CurrencyDollarIcon, PlusCircleIcon, TrashIcon } from '@heroicons/react/24/outline';

const FundingForm = ({ formData, handleInputChange, handleInvestorChange, addInvestor, removeInvestor }) => {
  return (
    <div className="mb-8">
      <div className="bg-green-50 rounded-lg p-5 border border-green-100 mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
          <CurrencyDollarIcon className="h-5 w-5 mr-2 text-green-500" />
          Company Funding Details
        </h3>
        <p className="text-gray-600 mb-2">
          Share your company's funding history to build credibility with potential candidates.
        </p>
        <p className="text-sm text-gray-500">
          This information helps candidates understand your company's financial stability and growth trajectory.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label htmlFor="totalRounds" className="block text-sm font-medium text-gray-700 mb-1">
            Total Funding Rounds <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="totalRounds"
            name="totalRounds"
            value={formData.totalRounds}
            onChange={handleInputChange}
            min="0"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
            required
          />
        </div>

        <div>
          <label htmlFor="lastRoundDate" className="block text-sm font-medium text-gray-700 mb-1">
            Last Round Date
          </label>
          <input
            type="date"
            id="lastRoundDate"
            name="lastRoundDate"
            value={formData.lastRoundDate}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
          />
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-700 mb-4">Key Investors</h3>

      <div className="space-y-4">
        {formData.investors.map((investor, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200"
          >
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Investor Name {index === 0 && <span className="text-red-500">*</span>}
              </label>
              <input
                type="text"
                value={investor.name}
                onChange={(e) => handleInvestorChange(index, 'name', e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                required={index === 0}
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Investor Company
              </label>
              <input
                type="text"
                value={investor.company}
                onChange={(e) => handleInvestorChange(index, 'company', e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                value={investor.location}
                onChange={(e) => handleInvestorChange(index, 'location', e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              />
            </div>
            <div className="flex items-end sm:w-auto">
              <button
                type="button"
                onClick={() => removeInvestor(index)}
                className="w-full sm:w-auto px-4 py-3 text-gray-500 hover:text-red-500 transition-all duration-200"
                disabled={formData.investors.length === 1}
              >
                <TrashIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={addInvestor}
        className="mt-4 px-5 py-2 border border-green-500 text-green-600 rounded-lg hover:bg-green-50 transition-all duration-200 flex items-center"
      >
        <PlusCircleIcon className="h-5 w-5 mr-2" />
        Add Another Investor
      </button>
    </div>
  );
};

export default FundingForm;
