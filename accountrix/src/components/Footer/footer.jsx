
import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();


    const handlenotice = () => {
        navigate('/noticeboard')
    }

    return (
        <footer className="bg-gray-900 text-white py-8 max-sm:py-10 sm-md:py-6 w-full">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start space-y-4 md:space-y-0 md:space-x-8 ">
                    <div className="text-gray-400">
                        <h2 className="text-2xl font-semibold text-white">
                            Account<span className="text-gray-400">rix</span>
                        </h2>
                        <p>© Copyright 2024 Accountrix</p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Blogs</h3>
                        <ul className="space-y-2">
                            <li className="text-gray-400">Assisted Hiring is Future</li>

                            <li className="text-gray-400">Top Hiring Trends in 2025 </li>
                            <li className="text-gray-400">How to Build a Winning Job Posting</li>
                            <li className="text-gray-400"> Real-Time Resume Databases:Hire Faster, Smarter</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Socials</h3>
                        <ul className="space-y-2">
                            <li className="text-gray-400">📸 Instagram</li>
                            <li className="text-gray-400">💬 WhatsApp</li>
                        </ul>
                        <button onClick={handlenotice} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700">
                            📌 Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;