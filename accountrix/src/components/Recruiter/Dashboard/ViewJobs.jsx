import React from 'react';

const ViewJobs = () => {
    const jobs = [
        { id: 1, title: 'Software Engineer', location: 'New York', salary: '$120,000' },
        { id: 2, title: 'Product Manager', location: 'San Francisco', salary: '$140,000' },
    ];

    return (
        <div className="bg-white shadow-lg rounded-lg p-8">
            <h1 className="text-3xl font-bold mb-6">Your Posted Jobs</h1>
            <div className="space-y-4">
                {jobs.map((job) => (
                    <div
                        key={job.id}
                        className="p-4 border rounded-lg flex justify-between items-center"
                    >
                        <div>
                            <h2 className="text-xl font-bold">{job.title}</h2>
                            <p>{job.location}</p>
                            <p>{job.salary}</p>
                        </div>
                        <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ViewJobs;