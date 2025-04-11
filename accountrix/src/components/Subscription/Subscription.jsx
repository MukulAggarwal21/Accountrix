// import React from 'react';

// const Newsletter = () => {
//   return (
//     <section className="py-16 bg-blue-800 text-white">
//       <div className="container mx-auto px-6 text-center">
//         <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
//         <p className="mb-6">Subscribe to our newsletter for the latest job updates and career tips.</p>
//         <form className="flex flex-col md:flex-row justify-center items-center gap-4">
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="px-4 py-3 rounded-lg text-gray-800 w-full md:w-1/2"
//           />
//           <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium transition">
//             Subscribe
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Newsletter;


import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-16 bg-blue-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="mb-6">Subscribe to our newsletter for the latest job updates and career tips.</p>
        <form className="flex flex-col md:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-lg text-gray-800 w-full md:w-1/2"
          />
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium transition">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;