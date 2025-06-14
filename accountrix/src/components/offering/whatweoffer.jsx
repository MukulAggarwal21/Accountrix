import React from 'react';
import {
  Briefcase,
  Users,
  Sparkles,
  Globe,
  Database,
  Handshake,
} from 'lucide-react';

const offers = [
  {
    id: 1,
    icon: <Briefcase size={28} className="text-blue-600" />,
    title: "Job Posting",
    description:
      "Post jobs and instantly reach thousands of relevant candidates. Smart filters and analytics help you shortlist the best talent quickly.",
  },
  {
    id: 2,
    icon: <Database size={28} className="text-green-600" />,
    title: "Resume Database",
    description:
      "Access a real-time pool of 10 crore+ jobseekers. Find, filter, and connect with candidates that match your requirements.",
  },
  {
    id: 3,
    icon: <Handshake size={28} className="text-purple-600" />,
    title: "Assisted Hiring",
    description:
      "Let our hiring experts handle sourcing and shortlisting. Focus on interviewing only the best-matched candidates.",
  },
  {
    id: 4,
    icon: <Users size={28} className="text-pink-600" />,
    title: "Diverse Connections",
    description:
      "Build your network with professionals from various industries and backgrounds. Expand your reach and opportunities.",
  },
  {
    id: 5,
    icon: <Sparkles size={28} className="text-yellow-500" />,
    title: "AI-Powered Matching",
    description:
      "Our AI engine matches your jobs with the most suitable candidates, saving you time and improving hiring outcomes.",
  },
  {
    id: 6,
    icon: <Globe size={28} className="text-indigo-600" />,
    title: "Remote & Global Talent",
    description:
      "Hire from anywhere. Tap into a global talent pool and manage remote teams with ease.",
  },
];

const whatweoffer = () => {
  return (
    <section className="py-8 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-5xl mx-auto px-2 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600 mb-2">
          What Accountrix Offers
        </h2>
        <p className="text-gray-600 text-base max-w-xl mx-auto mb-8">
          We handle everything—from planning and branding to sourcing—so you can
          focus on hiring the best talent. Discover our modern solutions for
          every hiring need.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto px-2">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-100 p-5 flex flex-col items-center text-center relative overflow-hidden hover:-translate-y-0.5 hover:scale-[1.015] transition-transform"
          >
            <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 group-hover:from-blue-200 group-hover:to-indigo-200 transition">
              {offer.icon}
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {offer.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{offer.description}</p>
            <a
              href="#"
              className="inline-block mt-auto px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium text-sm shadow hover:from-blue-700 hover:to-indigo-700 transition-all duration-150"
            >
              Learn More
            </a>
            <span className="absolute -top-8 -right-8 w-20 h-20 bg-blue-100 rounded-full opacity-20 blur-2xl group-hover:opacity-40 transition"></span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default whatweoffer;

            
