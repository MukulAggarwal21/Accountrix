import React, { useState } from 'react';

const PostJob = () => {
    const [jobData, setJobData] = useState({
        title: '',
        description: '',
        location: '',
        salary: '',
        requirements: '',
    });

     const handleChange = (e) => {
        const { name, value } = e.target;
        setJobData({ ...jobData, [name]: value });
    };

    const handleSubmit = () => {
        console.log('Job Data:', jobData);
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-8">
            <h1 className="text-3xl font-bold mb-6">Post a Job</h1>
            <form className="space-y-4">
                <input
                    type="text"
                    name="title"
                    placeholder="Job Title"
                    className="w-full p-3 border rounded-lg"
                    onChange={handleChange}
                />
                <textarea
                    name="description"
                    placeholder="Job Description"
                    className="w-full p-3 border rounded-lg"
                    rows="4"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    className="w-full p-3 border rounded-lg"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="salary"
                    placeholder="Salary"
                    className="w-full p-3 border rounded-lg"
                    onChange={handleChange}
                />
                <textarea
                    name="requirements"
                    placeholder="Requirements"
                    className="w-full p-3 border rounded-lg"
                    rows="4"
                    onChange={handleChange}
                />
                <button
                    type="button"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
                    onClick={handleSubmit}
                >
                    Post Job
                </button>
            </form>
        </div>
    );
};

export default PostJob;