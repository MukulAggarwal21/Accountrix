import React from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';

const CompletionStep = () => {
  return (
    <>
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
    </>
   
  );
};

export default CompletionStep;