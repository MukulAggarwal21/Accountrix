import React from 'react'
import { User, Building, Mail, Globe, MapPin, Users, Phone, Edit, Clock, Calendar, Briefcase, Check } from 'lucide-react';

export default function MainContent({ profileData, companyData }) {
  return (
    <div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Company Information</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <Building className="h-5 w-5 text-gray-400 mt-1 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Company Name</p>
                    <p className="mt-1">{companyData.companyName}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-gray-400 mt-1 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Work Email</p>
                    <p className="mt-1">{companyData.workEmail}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Globe className="h-5 w-5 text-gray-400 mt-1 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Website</p>
                    <p className="mt-1">{companyData.website}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-400 mt-1 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Location</p>
                    <p className="mt-1">{companyData.location}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Briefcase className="h-5 w-5 text-gray-400 mt-1 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Market</p>
                    <p className="mt-1"> <div className="grid grid-cols-4 gap-4">
                      {companyData.marketValues.map((value, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium text-center"
                        >
                          {value}
                        </span>
                      ))}
                    </div></p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-5 w-5 text-gray-400 mt-1 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Employees</p>
                    <p className="mt-1">{companyData.employeeCount}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow overflow-hidden mt-6">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Your Information</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <User className="h-5 w-5 text-gray-400 mt-1 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Name</p>
                    <p className="mt-1">{companyData.name}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-gray-400 mt-1 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Phone</p>
                    <p className="mt-1">{companyData.phone}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Briefcase className="h-5 w-5 text-gray-400 mt-1 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Your Role</p>
                    <p className="mt-1">{companyData.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Subscription Plan</h2>
            </div>
            <div className="p-6">
              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-blue-700">{profileData.planType}</h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Active</span>
                </div>
              </div>
              <ul className="space-y-2">
                {profileData.planFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check size={16} className="text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                  Manage Subscription
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow overflow-hidden mt-6">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Company Branding</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Primary Color</p>
                  <div className="mt-1 flex items-center">
                    <div
                      className="h-6 w-6 rounded-full mr-2"
                      style={{ backgroundColor: companyData.companyColors.primary }}
                    />
                    <span>{companyData.companyColors.secondary }</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Secondary Color</p>
                  <div className="mt-1 flex items-center">
                    <div
                      className="h-6 w-6 rounded-full mr-2"
                      style={{ backgroundColor: companyData.companyColors.secondary }}
                    />
                    <span>{companyData.companyColors.secondary}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                    <Edit size={16} className="mr-2" />
                    Edit Branding
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
