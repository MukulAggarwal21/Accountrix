

import Navbar from '../Navbar'
import LoginRegister from '../Card/LoginRegister'

import Whatweoffer from '../offering/whatweoffer'
import FAQSection from '../FAQ/faqQuestion'
import Footer from '../Footer/footer'
function Landing() {


    return (
        <>
            <div className="min-h-screen relative bg-black overflow-hidden flex flex-col items-center">
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,200,0.3)_0%,rgba(0,0,0,0.9)_70%)] pointer-events-none z-0"></div>

                {/* Navbar */}
                <Navbar />

                {/* Main Content */}
                <main className="relative z-5 flex flex-col lg:flex-row justify-center items-center px-6 py-16 lg:h-[calc(100vh-76px)] w-full max-w-7xl gap-20">
                    {/* Hero Section - Left Side */}
                    <div className="text-white lg:w-3/5 w-full flex flex-col justify-center">
                        <h2 className="text-lg font-semibold mb-4">FUTURE TALENT</h2>
                        <h1 className="text-5xl font-bold mb-8 leading-tight">
                            One portal. Endless career possibilities. <span className="text-4xl align-middle">✨</span>
                        </h1>
                        <div className="mb-10 space-y-4 text-lg">
                            <div className="flex items-center gap-2">
                                <span className="text-xl">🎯</span>
                                <span> Powered by precision, not just numbers.</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-xl">💡</span>
                                <span> Skip the crowd. Discover the right fit faster.</span>
                            </div>
                        </div>
                        <button className="bg-blue-600 text-white rounded px-6 py-3 font-medium w-fit hover:bg-blue-700 transition-colors">
                            Explore our products
                        </button>
                    </div>

                    {/* Login/register Card - Right Side */}
                    <LoginRegister />

                </main>

            </div>
            <Whatweoffer />
            <FAQSection />
            <Footer />
        </>


    )
}

export default Landing
