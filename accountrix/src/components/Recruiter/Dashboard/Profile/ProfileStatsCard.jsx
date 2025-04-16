import React from 'react'
import {  Users, Award,  Briefcase } from 'lucide-react';

export default function ProfileStatsCard({profileData}) {
  return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Active Jobs</p>
                <p className="text-3xl font-bold">{profileData.activeJobs}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Briefcase size={24} className="text-blue-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Candidates Reviewed</p>
                <p className="text-3xl font-bold">{profileData.candidatesReviewed}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                <Users size={24} className="text-green-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Hires Made</p>
                <p className="text-3xl font-bold">{profileData.hiresMade}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                <Award size={24} className="text-purple-600" />
              </div>
            </div>
          </div>
        </div>
  )
}
