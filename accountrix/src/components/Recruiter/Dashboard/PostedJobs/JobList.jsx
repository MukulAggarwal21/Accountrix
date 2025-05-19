



import { useState, useEffect } from 'react';
import { Edit, Trash, Eye, Users, Plus, Search, X } from 'lucide-react';
import axios from 'axios';

export default function JobList( {companyId} ) {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewingJob, setViewingJob] = useState(null);
  const [editingJob, setEditingJob] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);
  const [showAddJobModal, setShowAddJobModal] = useState(false);
    const recruiterId = localStorage.getItem('recruiterId'); // <-- Add this line

  // const [newJob, setNewJob] = useState({
  //   title: '',
  //   description: '',
  //   companyName: '',
  //   location: '',
  //   website: '',
  //   companyDescription: '',
  //   skills: [],
  //   skillInput: '',
  //   workPolicy: 'On-site', // Default value
  //   salary: {
  //     currency: 'INR',
  //     amount: '',
  //   },
  //   status: 'Active',
  // });
  const [newJob, setNewJob] = useState({
    jobTitle: '',
    jobDescription: '',
    companyName: '',
    companyLocation: '',
    website: '',
    companyDescription: '',
    skills: [],
    skillInput: '',
    workPolicy: 'On-site', // Default value
    salary: {
      currency: 'INR',
      amount: '',
    },
    status: 'Active',
  });



  // useEffect(() => {
  //   const fetchJobs = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:5000/jobs');
  //       setJobs(response.data); // response.data is the array of jobs
  //     } catch (error) {
  //       console.error('Error fetching jobs:', error);
  //     }
  //   };

  //   fetchJobs();
  // }, []);
  // useEffect(() => {
  //   if (!companyId) return; // Wait for companyId to be available
  //   const fetchJobs = async () => {
  //     try {
  //       const response = await axios.get(`http://localhost:5000/jobs/byCompany/${companyId}`);
  //       setJobs(response.data); // Only jobs for this company
  //     } catch (error) {
  //       console.error('Error fetching jobs:', error);
  //     }
  //   };
  //   fetchJobs();
  // }, [companyId]);


useEffect(() => {
  if (!companyId || !recruiterId) return; // Wait for both IDs
  const fetchJobs = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/jobs/byCompanyAndRecruiter/${companyId}/${recruiterId}`
      );
      setJobs(response.data); // Only jobs for this company and recruiter
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };
  fetchJobs();
}, [companyId, recruiterId]);


  // Filter jobs based on search term
  const filteredJobs = jobs.filter(job =>
    job.jobTitle?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.jobDescription?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.jobLocation?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleView = (job) => {
    setViewingJob(job);
    setEditingJob(null);
  };

  const handleEdit = (job) => {
    setEditingJob({
      ...job,
      id: job._id, // ensure id is properly set
    });
    setViewingJob(null);
  };

  const handleDelete = (id) => {
    setShowDeleteConfirm(id);
  };


  const confirmDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/jobs/${showDeleteConfirm}`);
      setJobs(jobs.filter((job) => job.id !== showDeleteConfirm));
      setShowDeleteConfirm(null);
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };


  const handleSaveEdit = async () => {
    try {
      const response = await axios.put(
        `http://localhost:5000/jobs/${editingJob.id}`,
        editingJob
      );
      setJobs(jobs.map((job) => (job.id === editingJob.id ? response.data : job)));
      setEditingJob(null);
    } catch (error) {
      console.error('Error saving job:', error);
    }
  };



  const handleAddJob = async () => {
    try {
      const companyId = localStorage.getItem('companyId'); // Get companyId from localStorage
      const jobData = {
        jobTitle: newJob.title,
        jobDescription: newJob.jobDescription,
        companyName: newJob.companyName,
        location: newJob.location,
        website: newJob.website,
        companyDescription: newJob.companyDescription,
        skills: newJob.skills,
        workPolicy: newJob.workPolicy,
        salary: {
          currency: newJob.salary.currency,
          amount: parseFloat(newJob.salary.amount) || 0,
        },
        company: companyId, // <-- Add this line to link job to company

      };

      const response = await axios.post('http://localhost:5000/jobs', jobData);
      setJobs([response.data, ...jobs]);
      setShowAddJobModal(false);
      setNewJob({
        jobTitle: '',
        jobDescription: '',
        companyName: '',
        jobLocation: '',
        website: '',
        companyDescription: '',
        skills: [],
        skillInput: '',
        workPolicy: 'On-site',
        salary: {
          currency: 'INR',
          amount: '',
        },
        status: 'Active',
      });
    } catch (error) {
      console.error('Error adding job:', error);
    }
  };

  const handleAddSkill = () => {
    if (newJob.skillInput && !newJob.skills.includes(newJob.skillInput)) {
      setNewJob((prev) => ({
        ...prev,
        skills: [...prev.skills, prev.skillInput],
        skillInput: '',
      }));
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setNewJob((prev) => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  const handleSkillInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddSkill();
    }
  };

  return (
    <div className="bg-gray-50 overflow-y-auto">
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

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.map((job) => (
            <div
              key={job.id || job._id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-gray-900">{job.title || job.jobTitle}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${job.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                    {job.status || 'Active'}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-1">{job.location}</p>
                <p className="text-sm font-medium text-gray-700 mt-2">
                  {job.salary?.currency || ''} {job.salary?.amount || job.salary || ''}
                </p>
                <p className="text-sm text-gray-600 mt-3 line-clamp-2">{job.description || job.jobDescription}</p>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-600">
                      <Users className="mr-2" size={16} />
                      <span className="text-sm">{job.applicants || 0} Applicants</span>
                    </div>
                    <span className="text-xs text-gray-500">{job.postedDate ? new Date(job.postedDate).toLocaleDateString() : 'Recently'}</span>
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
                        onClick={() => handleDelete(job.id || job._id)}
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
                <h2 className="text-xl font-bold text-gray-900">{viewingJob.title || viewingJob.jobTitle}</h2>
                <button
                  onClick={() => setViewingJob(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">{viewingJob.jobLocation}</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                  {viewingJob.salary?.currency || ''} {viewingJob.salary?.amount || viewingJob.salary || ''}
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">{viewingJob.status || 'Active'}</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">{viewingJob.workPolicy || 'Remote'}</span>

              </div>

              <div className="mb-4">
                <h3 className="font-medium text-gray-900 mb-2">Description</h3>
                <p className="text-gray-700">{viewingJob.description || viewingJob.jobDescription}</p>
              </div>

              {viewingJob.skills && viewingJob.skills.length > 0 && (
                <div className="mb-4">
                  <h3 className="font-medium text-gray-900 mb-2">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {viewingJob.skills.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-center text-gray-600 mb-4">
                <Users className="mr-2" size={18} />
                <span>{viewingJob.applicants || 0} Applicants</span>
                <span className="mx-2">•</span>
                <span>Posted {viewingJob.postedDate || 'Recently'}</span>
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
                    value={editingJob.title || editingJob.jobTitle}
                    onChange={(e) => setEditingJob({ ...editingJob, title: e.target.value, jobTitle: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    value={editingJob.description || editingJob.jobDescription}
                    onChange={(e) => setEditingJob({ ...editingJob, description: e.target.value, jobDescription: e.target.value })}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <input
                    type="text"
                    value={editingJob.location}
                    onChange={(e) => setEditingJob({ ...editingJob, location: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Salary</label>
                    <input
                      type="text"
                      value={editingJob.salary}
                      onChange={(e) => setEditingJob({ ...editingJob, salary: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div> */}

                <div className="  grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Currency</label>
                    <select
                      value={editingJob.salary.currency}
                      onChange={(e) =>
                        setEditingJob({
                          ...editingJob,
                          salary: { ...editingJob.salary, currency: e.target.value }
                        })
                      }
                      className=" w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="INR">INR</option>
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="GBP">GBP</option>
                      {/* Add more currencies if needed */}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Salary Amount</label>
                    <input
                      type="number"
                      value={editingJob.salary.amount}
                      onChange={(e) =>
                        setEditingJob({
                          ...editingJob,
                          salary: { ...editingJob.salary, amount: e.target.value }
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 mb-4"
                    />
                  </div>
                </div>




                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select
                    value={editingJob.status || 'Active'}
                    onChange={(e) => setEditingJob({ ...editingJob, status: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="Active">Active</option>
                    <option value="Paused">Paused</option>
                    <option value="Closed">Closed</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Work Policy</label>
                  <select
                    value={editingJob.workPolicy || 'Remote'}
                    onChange={(e) => setEditingJob({ ...editingJob, workPolicy: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="Hybrid">Hybrid</option>
                    <option value="Remote">Remote</option>
                    <option value="OnSite">OnSite</option>
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
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center p-4 z-50">
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
                {/* Job Details Section */}
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Job Details</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Job Title*</label>
                      <input
                        type="text"
                        value={newJob.title}
                        onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="e.g. Senior Developer"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Location*</label>
                      <input
                        type="text"
                        value={newJob.location}
                        onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="e.g. Remote, Bangalore, etc."
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Job Description*</label>
                    <textarea
                      value={newJob.description}
                      onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter detailed job description..."
                      required
                    />
                  </div>

                  {/* Skills Section */}
                  <div className="mt-4 space-y-4">
                    <h4 className="text-md font-medium text-gray-900">Required Skills</h4>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Add Skills</label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={newJob.skillInput}
                          onChange={(e) => setNewJob({ ...newJob, skillInput: e.target.value })}
                          onKeyDown={handleSkillInputKeyDown}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          placeholder="e.g. React, Node.js"
                        />
                        <button
                          onClick={handleAddSkill}
                          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        >
                          Add
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {newJob.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full"
                        >
                          {skill}
                          <X
                            size={16}
                            className="ml-2 cursor-pointer hover:text-red-600"
                            onClick={() => handleRemoveSkill(skill)}
                          />
                        </span>
                      ))}
                      {newJob.skills.length === 0 && (
                        <span className="text-sm text-gray-500">No skills added yet</span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Work Policy*</label>
                      <select
                        value={newJob.workPolicy}
                        onChange={(e) => setNewJob({ ...newJob, workPolicy: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        required
                      >
                        <option value="On-site">On-site</option>
                        <option value="Remote">Remote</option>
                        <option value="Hybrid">Hybrid</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                      <select
                        value={newJob.status}
                        onChange={(e) => setNewJob({ ...newJob, status: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="Active">Active</option>
                        <option value="Paused">Paused</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Company Details Section */}
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Company Details</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company Name*</label>
                      <input
                        type="text"
                        value={newJob.companyName}
                        onChange={(e) => setNewJob({ ...newJob, companyName: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="e.g. TechCorp"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Website*</label>
                      <input
                        type="text"
                        value={newJob.website}
                        onChange={(e) => setNewJob({ ...newJob, website: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="e.g. https://techcorp.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Description*</label>
                    <textarea
                      value={newJob.companyDescription}
                      onChange={(e) => setNewJob({ ...newJob, companyDescription: e.target.value })}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Describe the company..."
                      required
                    />
                  </div>
                </div>

                {/* Salary Section */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Salary Details</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Currency</label>
                      <select
                        value={newJob.salary.currency}
                        onChange={(e) => setNewJob({ ...newJob, salary: { ...newJob.salary, currency: e.target.value } })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="INR">INR</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Amount*</label>
                      <input
                        type="number"
                        value={newJob.salary.amount}
                        onChange={(e) => setNewJob({ ...newJob, salary: { ...newJob.salary, amount: e.target.value } })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="e.g. 100000"
                        required
                      />
                    </div>
                  </div>
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
                  disabled={!newJob.title || !newJob.description || !newJob.companyName || !newJob.location || !newJob.website || !newJob.companyDescription || !newJob.salary.amount}
                  className={`px-4 py-2 rounded-md ${!newJob.title || !newJob.description || !newJob.companyName || !newJob.location || !newJob.website || !newJob.companyDescription || !newJob.salary.amount ?
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