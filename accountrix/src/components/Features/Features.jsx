// import React from 'react';

// const Features = () => {
//   const features = [
//     {
//       title: "AI-Powered Matching",
//       description: "Get matched with the best opportunities using our AI-driven algorithms.",
//       icon: "🤖",
//     },
//     {
//       title: "Verified Recruiters",
//       description: "Connect with trusted recruiters and companies in the CA industry.",
//       icon: "✅",
//     },
//     {
//       title: "Career Resources",
//       description: "Access blogs, guides, and tools to enhance your career prospects.",
//       icon: "📚",
//     },
//   ];

//   return (
//     <section className="py-16 bg-white">
//       <div className="container mx-auto px-6 text-center">
//         <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <div key={index} className="p-6 bg-gray-50 rounded-lg shadow-md">
//               <div className="text-4xl mb-4">{feature.icon}</div>
//               <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
//               <p className="text-gray-600">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;


import React from 'react';

const Features = () => {
  const features = [
    {
      title: "AI-Powered Matching",
      description: "Get matched with the best opportunities using our AI-driven algorithms.",
      icon: "🤖",
    },
    {
      title: "Verified Recruiters",
      description: "Connect with trusted recruiters and companies in the CA industry.",
      icon: "✅",
    },
    {
      title: "Career Resources",
      description: "Access blogs, guides, and tools to enhance your career prospects.",
      icon: "📚",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-8 text-blue-800">Why Choose Us?</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;