

// import Navbar from '../Navbar'
// import LandingMain from './LandingMain'
// import Whatweoffer from '../offering/whatweoffer'
// import FAQSection from '../FAQ/faqQuestion'
// import Footer from '../Footer/footer'
// import BrandHiring from '../BrandHiring/BrandHiring'
// import { useState } from 'react'

// function Landing() {
//     const [isAuthenticated, setIsAuthenticated] = useState(false); // Change this to true if the user is logged in


//     return (
//         <>
//             <div className={`min-h-screen bg- bg-black  relative overflow-hidden flex flex-col items-center
//             `}>
//                 {/* Background gradient overlay */}
//                 <div className={`absolute inset-0  pointer-events-none z-0
//                  ${isAuthenticated
//                         ? ' bg-gradient-to-r from-white to-gray-900'
//                         : 'bg-[radial-gradient(circle_at_center,rgba(0,0,200,0.3)_0%,rgba(0,0,0,0.9)_70%)]'
//                     }`}> </div>

//                 {/* Navbar */}
//                 <div>
//                     {/* <Navbar /> */}

//                 </div>


//                 {/* Main Content */}

//                 {isAuthenticated ? (
//                     <BrandHiring className="bg-red-900" />
//                 ) : (
//                     <LandingMain setIsAuthenticated={setIsAuthenticated} />
//                 )}


//             </div>
//             <Whatweoffer />
//             <FAQSection />
//             <Footer />
//         </>


//     )
// }

// export default Landing



import { useState } from 'react';
import Navbar from '../Navbar';
import LandingMain from './LandingMain';
import Whatweoffer from '../offering/whatweoffer';
import FAQSection from '../FAQ/faqQuestion';
import Footer from '../Footer/footer';
import BrandHiring from '../Student/BrandHiring/BrandHiring';
import HeroSection from '../HeroSection/HeroSection';
import Testimonials from '../Testimonials/Testimonials';
import Features from '../Features/Features';
import Statistics from '../Statistics/Statistics';
import Newsletter from '../Subscription/Subscription';
import Partners from '../Partners/Partners';
import Dashboard from '../Recruiter/Dashboard/Landing';
function Landing() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userType, setUserType] = useState(null); // 'student' or 'recruiter'

    return (
        <>
            {/* <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} /> */}
            <div className={`min-h-screen bg- bg-black  relative overflow-hidden flex flex-col items-center
            `}>
                {/* Background gradient overlay */}
                <div className={`absolute inset-0  pointer-events-none z-0
                 ${isAuthenticated
                        ? ' bg-gradient-to-r from-white to-gray-900'
                        : 'bg-[radial-gradient(circle_at_center,rgba(0,0,200,0.3)_0%,rgba(0,0,0,0.9)_70%)]'
                    }`}> </div>


                {isAuthenticated ? (
                    userType === 'student' ? (
                        <BrandHiring />
                    ) : (
                        <Dashboard/>
                    )
                ) : (
                    <LandingMain setIsAuthenticated={setIsAuthenticated} setUserType={setUserType} />
                )}
            </div>
            <HeroSection />

            <Features />
            <Whatweoffer />
            <Testimonials />
            {/* <Partners /> */}
            <Statistics />

            <Newsletter />
            <FAQSection />
            <Footer />

        </>
    );
}

export default Landing;