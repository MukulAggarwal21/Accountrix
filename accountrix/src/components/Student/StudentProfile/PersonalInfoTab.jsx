import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaEdit, FaUser, FaGlobe, FaLinkedin, FaGithub, FaTwitter, FaPlus, FaCamera, FaBriefcase, FaTrophy } from 'react-icons/fa';

export default function PersonalInfoTab({ userId }) {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({});

  useEffect(() => {
    if (!userId) return;
    
    setLoading(true);
    fetch(`http://localhost:5000/user/${userId}`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch user');
        return res.json();
      })
      .then(data => {
        setStudent(data);
        setForm(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load student profile.' , err);
        setLoading(false);
      });
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleAvatarChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setForm(prev => ({ ...prev, avatar: URL.createObjectURL(e.target.files[0]) }));
    }
  };

  const handleAddArrayItem = (field, emptyObj) => {
    setForm(prev => ({ ...prev, [field]: [...(prev[field] || []), emptyObj] }));
  };
  
  const handleRemoveArrayItem = (field, idx) => {
    setForm(prev => ({ ...prev, [field]: prev[field].filter((_, i) => i !== idx) }));
  };
  
  const handleArrayChange = (field, idx, subfield, value) => {
    setForm(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === idx ? { ...item, [subfield]: value } : item)
    }));
  };
  
  const handleArraySimpleChange = (field, idx, value) => {
    setForm(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === idx ? value : item)
    }));
  };

  const handleSave = async () => {
    // TODO: Implement save logic (PATCH to backend)
    setStudent(form);
    setEditMode(false);
  };

  if (loading) return <div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="text-gray-600">Loading...</div></div>;
  if (error) return <div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="text-red-500">{error}</div></div>;
  if (!student) return <div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="text-gray-400">No student found.</div></div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img 
                  src={form.avatar || '/default-avatar.png'} 
                  alt="Profile" 
                  className="w-16 h-16 rounded-full object-cover ring-2 ring-blue-100"
                />
                {editMode && (
                  <label className="absolute -bottom-1 -right-1 bg-blue-500 text-white rounded-full p-1.5 cursor-pointer hover:bg-blue-600 transition-colors shadow-lg">
                    <FaCamera className="w-3 h-3" />
                    <input type="file" accept="image/*" className="hidden" onChange={handleAvatarChange} />
                  </label>
                )}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{student.fullName || 'Name not provided'}</h1>
                <p className="text-gray-600 flex items-center gap-1">
                  <FaMapMarkerAlt className="w-4 h-4" />
                  {student.location || 'Location not provided'}
                </p>
              </div>
            </div>
            <button 
              onClick={() => setEditMode(!editMode)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                editMode 
                  ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                  : 'bg-blue-500 text-white hover:bg-blue-600 shadow-lg hover:shadow-xl'
              }`}
            >
              <FaEdit className="w-4 h-4" />
              {editMode ? 'Cancel' : 'Edit Profile'}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-6">
            {/* About Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">About</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaUser className="w-4 h-4 text-gray-500" />
                  {editMode ? (
                    <input 
                      name="primaryRole" 
                      value={form.primaryRole || ''} 
                      onChange={handleChange} 
                      className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Primary Role"
                    />
                  ) : (
                    <span className="text-gray-700">{student.primaryRole || 'Role not specified'}</span>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <FaBriefcase className="w-4 h-4 text-gray-500" />
                  {editMode ? (
                    <input 
                      name="yearsOfExperience" 
                      value={form.yearsOfExperience || ''} 
                      onChange={handleChange} 
                      className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Years of Experience"
                    />
                  ) : (
                    <span className="text-gray-700">{student.yearsOfExperience ? `${student.yearsOfExperience} years experience` : 'Experience not specified'}</span>
                  )}
                </div>
                <div className="pt-2">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Bio</h3>
                  {editMode ? (
                    <textarea 
                      name="bio" 
                      value={form.bio || ''} 
                      onChange={handleChange} 
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      rows={4}
                      placeholder="Tell us about yourself..."
                    />
                  ) : (
                    <p className="text-gray-600 text-sm leading-relaxed">{student.bio || 'No bio provided'}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Social Links</h2>
              <div className="space-y-3">
                {[
                  { icon: FaGlobe, key: 'website', label: 'Website', color: 'text-gray-600' },
                  { icon: FaLinkedin, key: 'linkedin', label: 'LinkedIn', color: 'text-blue-600' },
                  { icon: FaGithub, key: 'github', label: 'GitHub', color: 'text-gray-800' },
                  { icon: FaTwitter, key: 'twitter', label: 'Twitter', color: 'text-blue-400' }
                ].map(({ icon: Icon, key, label, color }) => (
                  <div key={key} className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${color}`} />
                    {editMode ? (
                      <input 
                        value={form.socialProfiles?.[key] || ''} 
                        onChange={e => setForm(prev => ({ ...prev, socialProfiles: { ...prev.socialProfiles, [key]: e.target.value } }))}
                        className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder={label}
                      />
                    ) : (
                      <a 
                        href={student.socialProfiles?.[key]} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-700 hover:text-blue-600 transition-colors text-sm"
                      >
                        {student.socialProfiles?.[key]?.replace('https://', '') || `No ${label} added`}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Skills</h2>
                {editMode && (
                  <button 
                    onClick={() => handleAddArrayItem('skills', '')}
                    className="text-blue-500 hover:text-blue-600 text-sm flex items-center gap-1"
                  >
                    <FaPlus className="w-3 h-3" />
                    Add
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {(editMode ? form.skills : student.skills)?.length > 0 ? (
                  (editMode ? form.skills : student.skills)?.map((skill, idx) => (
                    editMode ? (
                      <div key={idx} className="relative">
                        <input 
                          value={skill} 
                          onChange={e => handleArraySimpleChange('skills', idx, e.target.value)}
                          className="px-3 py-1 border border-gray-200 rounded-full text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Skill"
                        />
                        <button 
                          onClick={() => handleRemoveArrayItem('skills', idx)}
                          className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white rounded-full text-xs flex items-center justify-center hover:bg-red-600"
                        >
                          ×
                        </button>
                      </div>
                    ) : (
                      <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    )
                  ))
                ) : (
                  <span className="text-gray-500 text-sm">No skills added</span>
                )}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Open Roles Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Open to Opportunities</h2>
              {editMode ? (
                <input 
                  name="openRoles" 
                  value={form.openRoles ? form.openRoles.join(', ') : ''} 
                  onChange={e => setForm(prev => ({ ...prev, openRoles: e.target.value.split(',').map(r => r.trim()) }))}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g. Frontend Developer, Backend Developer"
                />
              ) : (
                <div className="flex flex-wrap gap-2">
                  {student.openRoles?.length > 0 ? (
                    student.openRoles.map((role, idx) => (
                      <span key={idx} className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                        {role}
                      </span>
                    ))
                  ) : (
                    <span className="text-gray-500 text-sm">No open roles specified</span>
                  )}
                </div>
              )}
            </div>

            {/* Work Experience Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Work Experience</h2>
                {editMode && (
                  <button 
                    onClick={() => handleAddArrayItem('workExperience', { title: '', company: '', startDate: '', endDate: '', description: '' })}
                    className="text-blue-500 hover:text-blue-600 text-sm flex items-center gap-1"
                  >
                    <FaPlus className="w-3 h-3" />
                    Add Experience
                  </button>
                )}
              </div>
              <div className="space-y-6">
                {(editMode ? form.workExperience : student.workExperience)?.length > 0 ? (
                  (editMode ? form.workExperience : student.workExperience)?.map((exp, idx) => (
                    <div key={idx} className="relative border-l-2 border-blue-100 pl-6 pb-6">
                      <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-2 top-0"></div>
                      {editMode && (
                        <button 
                          onClick={() => handleRemoveArrayItem('workExperience', idx)}
                          className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white rounded-full text-xs flex items-center justify-center hover:bg-red-600"
                        >
                          ×
                        </button>
                      )}
                      <div className="space-y-3">
                        <div>
                          {editMode ? (
                            <input 
                              value={exp.title} 
                              onChange={e => handleArrayChange('workExperience', idx, 'title', e.target.value)}
                              className="font-semibold text-lg text-gray-900 w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="Job Title"
                            />
                          ) : (
                            <h3 className="font-semibold text-lg text-gray-900">{exp.title || 'Title not provided'}</h3>
                          )}
                          <div className="flex items-center gap-2 mt-1">
                            {editMode ? (
                              <>
                                <input 
                                  value={exp.company} 
                                  onChange={e => handleArrayChange('workExperience', idx, 'company', e.target.value)}
                                  className="px-3 py-1 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                  placeholder="Company"
                                />
                                <span className="text-gray-400">•</span>
                                <input 
                                  value={exp.startDate} 
                                  onChange={e => handleArrayChange('workExperience', idx, 'startDate', e.target.value)}
                                  className="px-3 py-1 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-20"
                                  placeholder="Start"
                                />
                                <span className="text-gray-400">-</span>
                                <input 
                                  value={exp.endDate} 
                                  onChange={e => handleArrayChange('workExperience', idx, 'endDate', e.target.value)}
                                  className="px-3 py-1 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-20"
                                  placeholder="End"
                                />
                              </>
                            ) : (
                              <>
                                <span className="text-blue-600 font-medium">{exp.company || 'Company not provided'}</span>
                                <span className="text-gray-400">•</span>
                                <span className="text-gray-500">{exp.startDate || 'Start date not provided'} - {exp.endDate || 'End date not provided'}</span>
                              </>
                            )}
                          </div>
                        </div>
                        {editMode ? (
                          <textarea 
                            value={exp.description} 
                            onChange={e => handleArrayChange('workExperience', idx, 'description', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                            rows={3}
                            placeholder="Description"
                          />
                        ) : (
                          <p className="text-gray-600 leading-relaxed">{exp.description || 'No description provided'}</p>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-gray-500 text-sm">No work experience added</div>
                )}
              </div>
            </div>

            {/* Education Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Education</h2>
                {editMode && (
                  <button 
                    onClick={() => handleAddArrayItem('education', { degree: '', fieldOfStudy: '', institution: '', startYear: '', endYear: '', gpa: '' })}
                    className="text-blue-500 hover:text-blue-600 text-sm flex items-center gap-1"
                  >
                    <FaPlus className="w-3 h-3" />
                    Add Education
                  </button>
                )}
              </div>
              <div className="space-y-6">
                {(editMode ? form.education : student.education)?.length > 0 ? (
                  (editMode ? form.education : student.education)?.map((edu, idx) => (
                    <div key={idx} className="relative border-l-2 border-green-100 pl-6 pb-6">
                      <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-2 top-0"></div>
                      {editMode && (
                        <button 
                          onClick={() => handleRemoveArrayItem('education', idx)}
                          className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white rounded-full text-xs flex items-center justify-center hover:bg-red-600"
                        >
                          ×
                        </button>
                      )}
                      <div className="space-y-2">
                        {editMode ? (
                          <input 
                            value={edu.degree} 
                            onChange={e => handleArrayChange('education', idx, 'degree', e.target.value)}
                            className="font-semibold text-lg text-gray-900 w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Degree"
                          />
                        ) : (
                          <h3 className="font-semibold text-lg text-gray-900">{edu.degree || 'Degree not provided'}</h3>
                        )}
                        <div className="flex items-center gap-2">
                          {editMode ? (
                            <>
                              <input 
                                value={edu.fieldOfStudy} 
                                onChange={e => handleArrayChange('education', idx, 'fieldOfStudy', e.target.value)}
                                className="px-3 py-1 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Field of Study"
                              />
                              <span className="text-gray-400">@</span>
                              <input 
                                value={edu.institution} 
                                onChange={e => handleArrayChange('education', idx, 'institution', e.target.value)}
                                className="px-3 py-1 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Institution"
                              />
                            </>
                          ) : (
                            <>
                              <span className="text-gray-600">{edu.fieldOfStudy || 'Field not provided'}</span>
                              <span className="text-gray-400">@</span>
                              <span className="text-blue-600 font-medium">{edu.institution || 'Institution not provided'}</span>
                            </>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          {editMode ? (
                            <>
                              <input 
                                value={edu.startYear} 
                                onChange={e => handleArrayChange('education', idx, 'startYear', e.target.value)}
                                className="px-3 py-1 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-16"
                                placeholder="Start"
                              />
                              <span>-</span>
                              <input 
                                value={edu.endYear} 
                                onChange={e => handleArrayChange('education', idx, 'endYear', e.target.value)}
                                className="px-3 py-1 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-16"
                                placeholder="End"
                              />
                              <span>GPA:</span>
                              <input 
                                value={edu.gpa} 
                                onChange={e => handleArrayChange('education', idx, 'gpa', e.target.value)}
                                className="px-3 py-1 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-16"
                                placeholder="GPA"
                              />
                            </>
                          ) : (
                            <>
                              <span>{edu.startYear || 'Start year not provided'} - {edu.endYear || 'End year not provided'}</span>
                              <span>•</span>
                              <span>GPA: {edu.gpa || 'Not provided'}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-gray-500 text-sm">No education details added</div>
                )}
              </div>
            </div>

            {/* Achievements Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <FaTrophy className="w-5 h-5 text-yellow-500" />
                  Achievements
                </h2>
                {editMode && (
                  <button 
                    onClick={() => handleAddArrayItem('achievements', '')}
                    className="text-blue-500 hover:text-blue-600 text-sm flex items-center gap-1"
                  >
                    <FaPlus className="w-3 h-3" />
                    Add Achievement
                  </button>
                )}
              </div>
              <div className="space-y-4">
                {(editMode ? form.achievements : student.achievements)?.length > 0 ? (
                  (editMode ? form.achievements : student.achievements)?.map((achievement, idx) => (
                    <div key={idx} className="relative flex items-start gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                      {editMode ? (
                        <div className="flex-1 relative">
                          <textarea 
                            value={achievement} 
                            onChange={e => handleArraySimpleChange('achievements', idx, e.target.value)}
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                            rows={2}
                            placeholder="Achievement description"
                          />
                          <button 
                            onClick={() => handleRemoveArrayItem('achievements', idx)}
                            className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white rounded-full text-xs flex items-center justify-center hover:bg-red-600"
                          >
                            ×
                          </button>
                        </div>
                      ) : (
                        <p className="text-gray-700 leading-relaxed">{achievement}</p>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="text-gray-500 text-sm">No achievements added</div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        {editMode && (
          <div className="fixed bottom-6 right-6 z-50">
            <button 
              onClick={handleSave}
              className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
}