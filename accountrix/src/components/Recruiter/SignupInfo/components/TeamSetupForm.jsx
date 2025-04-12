import React from 'react';
import { TrashIcon, PlusCircleIcon , UsersIcon  } from '@heroicons/react/24/outline';

const TeamSetupForm = ({
  formData,
  handleTeamMemberChange,
  addTeamMember,
  removeTeamMember,
  
}) => {
  return (
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
  );
};

export default TeamSetupForm;