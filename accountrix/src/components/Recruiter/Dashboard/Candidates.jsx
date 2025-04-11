import React from 'react';

const Candidates = () => {
  const candidates = [
    { id: 1, name: 'John Doe', position: 'Software Engineer', status: 'Shortlisted' },
    { id: 2, name: 'Jane Smith', position: 'Product Manager', status: 'Pending' },
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">Candidates</h1>
      <div className="space-y-4">
        {candidates.map((candidate) => (
          <div
            key={candidate.id}
            className="p-4 border rounded-lg flex justify-between items-center"
          >
            <div>
              <h2 className="text-xl font-bold">{candidate.name}</h2>
              <p>{candidate.position}</p>
              <p>Status: {candidate.status}</p>
            </div>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Candidates;