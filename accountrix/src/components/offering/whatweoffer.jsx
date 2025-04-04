import React from 'react'
import { AnimatedListDemo } from '../codemagicui/animated-list';
import { AnimatedBeamDemo } from '../codemagicui/animated-beam';
const whatweoffer = () => {
    const offers = [
        {
            id: 1,
            image: "/job-posting.png", // Ensure this image path is correct
            title: "Job Posting",
            description:
                "Receive applications and quickly connect with high-quality, relevant candidates",
            link: "#",
        },
        {
            id: 2,
            image: "/resume-database.png",
            title: "Resume Database (Resdex)",
            description:
                "Access & attract from a pool of 10 crore+ jobseekers - all in real-time!",
            link: "#",
        },
        {
            id: 3,
            image: "/assisted-hiring.png",
            title: "Assisted Hiring",
            description:
                "Leave sourcing & shortlisting to our hiring experts, you focus on interviewing the best",
            link: "#",
        },
        {
            id: 4,
            image: "/connection.png", // Ensure this image path is correct
            title: "Diverse Connections",
            description:
                "Receive applications and quickly connect with high-quality, relevant candidates",
            link: "#",
        },
        {
            id: 5,
            image: "/resume-database.png",
            title: "Resume Database (Resdex)",
            description:
                "Access & attract from a pool of 10 crore+ jobseekers - all in real-time!",
            link: "#",
        },
        {
            id: 6,
            image: "/assisted-hiring.png",
            title: "Assisted Hiring",
            description:
                "Leave sourcing & shortlisting to our hiring experts, you focus on interviewing the best",
            link: "#",
        },
    ];

    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-blue-600 md:text-4xl">
                    What Accountrix Offers
                </h2>
                <p className="text-gray-600 mt-2 text-lg">
                    We handle everything—from planning and branding to sourcing, so you
                    can focus on hiring the best talent.
                </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
                {offers.map((offer) => (
                    <div
                        key={offer.id}
                        className="bg-white p-6 rounded-xl shadow-md text-center border hover:shadow-lg transition duration-300"
                    >

                        {offer.title && offer.title === "Job Posting" ? <div className="w-full h-40 flex items-center justify-center overflow-hidden">
                            <AnimatedListDemo />
                        </div> :
                            offer.title && offer.title === "Diverse Connections" ? <div className="w-full h-40 flex items-center justify-center overflow-hidden">
                                <AnimatedBeamDemo />
                            </div> : <div className="w-full h-40 flex items-center justify-center">
                                <img
                                    src={offer.image}
                                    alt={offer.title}
                                    className="w-auto h-full object-contain"
                                />
                            </div>
                        }
                        <div className=''>
                            <h3 className="text-xl font-semibold text-gray-900 mt-4">
                                {offer.title}
                            </h3>
                            <p className="text-gray-600 mt-2">{offer.description}</p>
                            <a
                                href={offer.link}
                                className="text-blue-600 font-medium mt-4 inline-block"
                            >
                                View plans
                            </a>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
};

export default whatweoffer;
