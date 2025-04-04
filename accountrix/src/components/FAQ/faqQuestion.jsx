
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQSection = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const faqs = [
        {
            question: "What is Accountrix?",
            answer:
                "Accountrix is an all-in-one hiring platform designed to simplify recruitment for businesses. From job posting to resume database access and assisted hiring, Accountrix helps companies find the right talent faster and smarter",
        },
        {
            question: "How is Accountrix different from other hiring platforms?",
            answer:
                "Unlike traditional job portals, Accountrix offers AI-driven candidate matching, assisted hiring by experts, real-time access to an extensive resume database, and smart filters with analytics to speed up shortlisting.",
        },
        {
            question: ". How does Assisted Hiring work?",
            answer:
                "Our hiring experts take care of the sourcing and shortlisting process for you. You just focus on interviewing the best candidates we deliver, saving you time and effor"
        },
        {
            question: " Is there a free trial available?",
            answer:
                "Yes! Accountrix offers a free trial to let you explore our platform, post jobs, and experience our candidate matching system before committing to a plan."
        },
        // {
        //     question: "Can I access candidates in real-time?",
        //     answer:
        //         "Absolutely. Our Resume Database is updated continuously and allows real-time access to over 10 crore+ active jobseekers.",
        // },
        // {
        //     question: " How secure is my data on Accountrix?",
        //     answer:
        //         "We use industry-standard encryption and follow best practices in data security to ensure your company's information and candidate data are completely protected",
        // },
        // {
        //     question: "How do I get started with Accountrix?",
        //     answer:
        //         "Simply sign up on our platform, choose a plan that fits your needs, and start posting jobs or exploring the resume database immediately. Our team is always available to guide you.",
        // },
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 max-sm:mt-10">
            <div className="max-w-5xl w-full mx-auto mb-20">
                <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div key={index} className="rounded-lg shadow-lg overflow-hidden">
                            {/* Question Box */}
                            <button
                                className={`w-full px-6 py-5 text-left text-black font-semibold flex justify-between items-center hover:bg-blue-50 transition-colors duration-300 ${activeFaq === index ? "bg-blue-100" : "bg-white"
                                    }`}
                                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                            >
                                <span className="flex items-center gap-2">
                                    <span
                                        className={`w-3 h-3 rounded-full ${activeFaq === index ? "bg-blue-600" : "bg-gray-400"
                                            }`}
                                    ></span>
                                    {faq.question}
                                </span>
                                {activeFaq === index ? (
                                    <FaChevronUp className="text-blue-600" />
                                ) : (
                                    <FaChevronDown className="text-gray-500" />
                                )}
                            </button>

                            {/* Answer Box */}
                            {activeFaq === index && (
                                <div className="px-6 py-4 mt-2 bg-blue-50 border-l-4 border-blue-600 rounded-lg shadow-md">
                                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQSection;