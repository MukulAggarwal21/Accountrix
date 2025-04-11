// import React, { useState } from 'react';

// const ProfileSetup = () => {
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         designation: '',
//         companyName: '',
//         description: '',
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = () => {
//         console.log('Profile Data:', formData);
//     };

//     return (
//         <div className="p-6">
//             <h1 className="text-3xl font-bold mb-4">Complete Your Profile</h1>
//             <form className="space-y-4">
//                 <input
//                     type="text"
//                     name="firstName"
//                     placeholder="First Name"
//                     className="w-full p-2 border rounded"
//                     onChange={handleChange}
//                 />
//                 <input
//                     type="text"
//                     name="lastName"
//                     placeholder="Last Name"
//                     className="w-full p-2 border rounded"
//                     onChange={handleChange}
//                 />
//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     className="w-full p-2 border rounded"
//                     onChange={handleChange}
//                 />
//                 <input
//                     type="text"
//                     name="designation"
//                     placeholder="Designation"
//                     className="w-full p-2 border rounded"
//                     onChange={handleChange}
//                 />
//                 <input
//                     type="text"
//                     name="companyName"
//                     placeholder="Company Name"
//                     className="w-full p-2 border rounded"
//                     onChange={handleChange}
//                 />
//                 <textarea
//                     name="description"
//                     placeholder="Company Description"
//                     className="w-full p-2 border rounded"
//                     onChange={handleChange}
//                 />
//                 <button
//                     type="button"
//                     className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//                     onClick={handleSubmit}
//                 >
//                     Submit
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default ProfileSetup;

import React, { useState } from 'react';

const ProfileSetup = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        designation: '',
        companyName: '',
        description: '',
        logo: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, logo: e.target.files[0] });
    };

    const handleSubmit = () => {
        console.log('Profile Data:', formData);
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Complete Your Profile</h1>
                <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            className="w-full p-3 border rounded-lg"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            className="w-full p-3 border rounded-lg"
                            onChange={handleChange}
                        />
                    </div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full p-3 border rounded-lg"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="designation"
                        placeholder="Designation"
                        className="w-full p-3 border rounded-lg"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="companyName"
                        placeholder="Company Name"
                        className="w-full p-3 border rounded-lg"
                        onChange={handleChange}
                    />
                    <textarea
                        name="description"
                        placeholder="Company Description"
                        className="w-full p-3 border rounded-lg"
                        rows="4"
                        onChange={handleChange}
                    />
                    <div>
                        <label className="block text-gray-700 mb-2">Upload Company Logo</label>
                        <input
                            type="file"
                            className="w-full p-3 border rounded-lg"
                            onChange={handleFileChange}
                        />
                    </div>
                    <button
                        type="button"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProfileSetup;