import React from 'react';

import { 
  BuildingOfficeIcon, 
  UsersIcon, 
  CheckCircleIcon,
} from '@heroicons/react/24/outline'

const ProgressBar = ({ currentStep }) => {
  return (
  <div className="max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col items-center">
              <div className={`h-12 w-12 rounded-full flex items-center justify-center ${currentStep >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                } transition-all duration-300`}>
                <BuildingOfficeIcon className="h-6 w-6" />
              </div>
              <span className="mt-2 text-sm font-medium text-gray-700">Company</span>
            </div>

            <div className={`h-1 flex-1 mx-2 ${currentStep >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`} />

            <div className="flex flex-col items-center">
              <div className={`h-12 w-12 rounded-full flex items-center justify-center ${currentStep >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                } transition-all duration-300`}>
                <UsersIcon className="h-6 w-6" />
              </div>
              <span className="mt-2 text-sm font-medium text-gray-700">Team</span>
            </div>

            <div className={`h-1 flex-1 mx-2 ${currentStep >= 3 ? 'bg-blue-600' : 'bg-gray-200'}`} />

            <div className="flex flex-col items-center">
              <div className={`h-12 w-12 rounded-full flex items-center justify-center ${currentStep >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                } transition-all duration-300`}>
                <CheckCircleIcon className="h-6 w-6" />
              </div>
              <span className="mt-2 text-sm font-medium text-gray-700">Complete</span>
            </div>
          </div>
        </div>
  );
};

export default ProgressBar;