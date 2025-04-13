import { Edit, Trash, Eye, Users } from 'lucide-react';

export default function JobList() {
  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      applicants: 24,
      description: 'Develop and maintain frontend applications using React.',
    },
    {
      id: 2,
      title: 'Product Manager',
      applicants: 18,
      description: 'Lead product development and manage cross-functional teams.',
    },
    {
      id: 3,
      title: 'UX Designer',
      applicants: 12,
      description: 'Design user-friendly interfaces and improve user experience.',
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Posted Jobs</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <div key={job.id} className="rounded-lg bg-white shadow p-4">
            <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{job.description}</p>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center text-gray-600">
                <Users className="mr-2" size={16} />
                <span>{job.applicants} Applicants</span>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200">
                  <Eye size={16} />
                </button>
                <button className="p-2 bg-green-100 text-green-600 rounded hover:bg-green-200">
                  <Edit size={16} />
                </button>
                <button className="p-2 bg-red-100 text-red-600 rounded hover:bg-red-200">
                  <Trash size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}