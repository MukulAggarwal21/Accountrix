import { useState } from 'react';
import { Edit, Trash, Eye, Users, Plus, Search, X } from 'lucide-react';

export default function JobList() {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: 'Senior Frontend Developer',
      applicants: 24,
      description: 'Develop and maintain frontend applications using React.',
      location: 'Remote',
      salary: '$120,000 - $150,000',
      postedDate: '2 days ago',
      status: 'Active'
    },
    {
      id: 2,
      title: 'Product Manager',
      applicants: 18,
      description: 'Lead product development and manage cross-functional teams.',
      location: 'New York, NY',
      salary: '$110,000 - $140,000',
      postedDate: '1 week ago',
      status: 'Active'
    },
    {
      id: 3,
      title: 'UX Designer',
      applicants: 12,
      description: 'Design user-friendly interfaces and improve user experience.',
      location: 'San Francisco, CA',
      salary: '$90,000 - $120,000',
      postedDate: '3 days ago',
      status: 'Active'
    },
     {
      id: 4,
      title: 'Senior Frontend Developer',
      applicants: 24,
      description: 'Develop and maintain frontend applications using React.',
      location: 'Remote',
      salary: '$120,000 - $150,000',
      postedDate: '2 days ago',
      status: 'Active'
    },
     {
      id: 5,
      title: 'Senior Frontend Developer',
      applicants: 24,
      description: 'Develop and maintain frontend applications using React.',
      location: 'Remote',
      salary: '$120,000 - $150,000',
      postedDate: '2 days ago',
      status: 'Active'
    },
     {
      id: 6,
      title: 'Senior Frontend Developer',
      applicants: 24,
      description: 'Develop and maintain frontend applications using React.',
      location: 'Remote',
      salary: '$120,000 - $150,000',
      postedDate: '2 days ago',
      status: 'Active'
    },
  ]);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [viewingJob, setViewingJob] = useState(null);
  const [editingJob, setEditingJob] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);
  const [showAddJobModal, setShowAddJobModal] = useState(false);
  const [newJob, setNewJob] = useState({
    title: '',
    description: '',
    location: '',
    salary: '',
    status: 'Active'
  });

  // Filter jobs based on search term
  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleView = (job) => {
    setViewingJob(job);
    setEditingJob(null);
  };

  const handleEdit = (job) => {
    setEditingJob({...job});
    setViewingJob(null);
  };

  const handleDelete = (id) => {
    setShowDeleteConfirm(id);
  };

  const confirmDelete = () => {
    setJobs(jobs.filter(job => job.id !== showDeleteConfirm));
    setShowDeleteConfirm(null);
  };

  const handleSaveEdit = () => {
    setJobs(jobs.map(job => job.id === editingJob.id ? editingJob : job));
    setEditingJob(null);
  };

  const handleAddJob = () => {
    const newId = Math.max(...jobs.map(job => job.id), 0) + 1;
    const jobToAdd = {
      ...newJob,
      id: newId,
      applicants: 0,
      postedDate: 'Just now'
    };
    setJobs([jobToAdd, ...jobs]);
    setShowAddJobModal(false);
    setNewJob({
      title: '',
      description: '',
      location: '',
      salary: '',
      status: 'Active'
    });
  };

  return (
    <div className="bg-gray-50  overflow-y-auto">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Posted Jobs</h1>
            <p className="mt-1 text-sm text-gray-500">Manage and monitor your job postings</p>
          </div>
          <div className="mt-4 md:mt-0">
            <button 
              onClick={() => setShowAddJobModal(true)}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              <Plus size={18} className="mr-2" />
              Add New Job
            </button>
          </div>
        </div>

        {/* <div className="bg-white p-4 rounded-lg shadow mb-6">
          <div className="relative">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search jobs by title, description, or location..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div> */}

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.map((job) => (
            <div 
              key={job.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    job.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {job.status}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-1">{job.location}</p>
                <p className="text-sm font-medium text-gray-700 mt-2">{job.salary}</p>
                <p className="text-sm text-gray-600 mt-3 line-clamp-2">{job.description}</p>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-600">
                      <Users className="mr-2" size={16} />
                      <span className="text-sm">{job.applicants} Applicants</span>
                    </div>
                    <span className="text-xs text-gray-500">{job.postedDate}</span>
                  </div>
                  
                  <div className="mt-4 flex justify-between items-center">
                    <button 
                      onClick={() => handleView(job)}
                      className="flex items-center text-sm text-blue-600 hover:text-blue-800"
                    >
                      <Eye size={16} className="mr-1" />
                      View
                    </button>
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => handleEdit(job)}
                        className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-green-100 hover:text-green-600 transition-colors"
                      >
                        <Edit size={16} />
                      </button>
                      <button 
                        onClick={() => handleDelete(job.id)}
                        className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-red-100 hover:text-red-600 transition-colors"
                      >
                        <Trash size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-500">No jobs found matching your search criteria.</p>
          </div>
        )}
      </div>

      {/* View Job Modal */}
      {viewingJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold text-gray-900">{viewingJob.title}</h2>
                <button 
                  onClick={() => setViewingJob(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">{viewingJob.location}</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">{viewingJob.salary}</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">{viewingJob.status}</span>
              </div>
              
              <div className="mb-4">
                <h3 className="font-medium text-gray-900 mb-2">Description</h3>
                <p className="text-gray-700">{viewingJob.description}</p>
              </div>
              
              <div className="flex items-center text-gray-600 mb-4">
                <Users className="mr-2" size={18} />
                <span>{viewingJob.applicants} Applicants</span>
                <span className="mx-2">•</span>
                <span>Posted {viewingJob.postedDate}</span>
              </div>
              
              <div className="flex justify-end space-x-2 mt-6">
                <button 
                  onClick={() => setViewingJob(null)} 
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Close
                </button>
                <button 
                  onClick={() => {
                    handleEdit(viewingJob);
                    setViewingJob(null);
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Edit Job
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Job Modal */}
      {editingJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-xl font-bold text-gray-900">Edit Job</h2>
                <button 
                  onClick={() => setEditingJob(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                  <input
                    type="text"
                    value={editingJob.title}
                    onChange={(e) => setEditingJob({...editingJob, title: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    value={editingJob.description}
                    onChange={(e) => setEditingJob({...editingJob, description: e.target.value})}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                    <input
                      type="text"
                      value={editingJob.location}
                      onChange={(e) => setEditingJob({...editingJob, location: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Salary</label>
                    <input
                      type="text"
                      value={editingJob.salary}
                      onChange={(e) => setEditingJob({...editingJob, salary: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select
                    value={editingJob.status}
                    onChange={(e) => setEditingJob({...editingJob, status: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="Active">Active</option>
                    <option value="Paused">Paused</option>
                    <option value="Closed">Closed</option>
                  </select>
                </div>
              </div>
              
              <div className="flex justify-end space-x-2 mt-6">
                <button 
                  onClick={() => setEditingJob(null)} 
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleSaveEdit}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
            <div className="p-6">
              <h2 className="text-xl font-medium text-gray-900 mb-4">Confirm Deletion</h2>
              <p className="text-gray-600">Are you sure you want to delete this job? This action cannot be undone.</p>
              
              <div className="flex justify-end space-x-2 mt-6">
                <button 
                  onClick={() => setShowDeleteConfirm(null)} 
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button 
                  onClick={confirmDelete}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Job Modal */}
      {showAddJobModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-xl font-bold text-gray-900">Add New Job</h2>
                <button 
                  onClick={() => setShowAddJobModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                  <input
                    type="text"
                    value={newJob.title}
                    onChange={(e) => setNewJob({...newJob, title: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g. Senior Developer"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    value={newJob.description}
                    onChange={(e) => setNewJob({...newJob, description: e.target.value})}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter job description..."
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                    <input
                      type="text"
                      value={newJob.location}
                      onChange={(e) => setNewJob({...newJob, location: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g. Remote, New York, etc."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Salary</label>
                    <input
                      type="text"
                      value={newJob.salary}
                      onChange={(e) => setNewJob({...newJob, salary: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g. $80,000 - $100,000"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select
                    value={newJob.status}
                    onChange={(e) => setNewJob({...newJob, status: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="Active">Active</option>
                    <option value="Paused">Paused</option>
                  </select>
                </div>
              </div>
              
              <div className="flex justify-end space-x-2 mt-6">
                <button 
                  onClick={() => setShowAddJobModal(false)} 
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleAddJob}
                  disabled={!newJob.title || !newJob.description}
                  className={`px-4 py-2 rounded-md ${
                    !newJob.title || !newJob.description ? 
                    'bg-blue-300 cursor-not-allowed' : 
                    'bg-blue-600 hover:bg-blue-700'
                  } text-white`}
                >
                  Add Job
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}