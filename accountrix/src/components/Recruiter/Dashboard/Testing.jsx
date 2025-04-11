import React from "react";
import { Card, CardContent } from "../../ui/card";
import { Button } from '../../ui/button';
import { Briefcase, Users, PlusCircle, Bell } from "lucide-react";

const Testing = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Recruiter Dashboard</h1>
        <Button className="flex gap-2">
          <Bell className="w-5 h-5" /> Notifications
        </Button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        <Card className="shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Total Jobs Posted</p>
                <h2 className="text-2xl font-bold text-gray-800">24</h2>
              </div>
              <Briefcase className="w-10 h-10 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Active Applications</p>
                <h2 className="text-2xl font-bold text-gray-800">132</h2>
              </div>
              <Users className="w-10 h-10 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Interviews Scheduled</p>
                <h2 className="text-2xl font-bold text-gray-800">18</h2>
              </div>
              <Users className="w-10 h-10 text-yellow-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">New Applicants</p>
                <h2 className="text-2xl font-bold text-gray-800">5</h2>
              </div>
              <PlusCircle className="w-10 h-10 text-red-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <section className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Recent Job Posts</h2>
        <ul className="space-y-4">
          {["Frontend Developer", "Backend Developer", "UI/UX Designer"].map((job, index) => (
            <li key={index} className="border-b pb-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">{job}</span>
                <Button variant="outline" size="sm">View Applicants</Button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Testing;
