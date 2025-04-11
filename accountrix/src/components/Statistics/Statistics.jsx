// import React from 'react';

// const Statistics = () => {
//   const stats = [
//     { label: "Jobs Posted", value: "10,000+" },
//     { label: "Registered Users", value: "50,000+" },
//     { label: "Companies", value: "1,000+" },
//   ];

//   return (
//     <section className="py-16 bg-gradient-to-r from-green-100 to-blue-100">
//       <div className="container mx-auto px-6 text-center">
//         <h2 className="text-3xl font-bold mb-8">Our Achievements</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {stats.map((stat, index) => (
//             <div key={index} className="p-6 bg-white rounded-lg shadow-md">
//               <h3 className="text-4xl font-bold text-blue-600">{stat.value}</h3>
//               <p className="text-gray-600">{stat.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Statistics;



import React from 'react';

const Statistics = () => {
  const stats = [
    { label: "Jobs Posted", value: "10,000+" },
    { label: "Registered Users", value: "50,000+" },
    { label: "Companies", value: "1,000+" },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-green-100 to-blue-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 text-blue-800">Our Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-4xl font-bold text-blue-600">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;