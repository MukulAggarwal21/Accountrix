import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../App';
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
    const location = useLocation();
    const navigate = useNavigate();
    const { isAuthenticated, userType, logout } = useAuth();

    return (
        <>
            <div className={`min-h-screen bg-black relative overflow-hidden flex flex-col`}>
                {/* Background gradient overlay - only show when not authenticated */}
                {!isAuthenticated && (
                    <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,rgba(0,0,200,0.3)_0%,rgba(0,0,0,0.9)_70%)]"></div>
                )}

                {isAuthenticated ? (
                    userType === 'student' ? (
                        <BrandHiring onLogout={logout} />
                    ) : (
                        <Dashboard onLogout={logout} />
                    )
                ) : (
                    <LandingMain />
                )}
            </div>
            
            {/* Only show these sections when not authenticated */}
            {!isAuthenticated && (
                <>
                    <HeroSection />
                    <Features />
                    <Whatweoffer />
                    <Testimonials />
                    <Statistics />
                    <Newsletter />
                    <FAQSection />
                    <Footer />
                </>
            )}
        </>
    );
}

export default Landing;