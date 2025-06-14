import React, { useState, useEffect, useRef } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    text: "Accountrix transformed our financial reporting workflow, resulting in a 40% increase in efficiency and significant cost reduction.",
    name: "Sarah Johnson",
    title: "CFO",
    company: "TechVision Solutions"
  },
  {
    text: "The tax planning strategies recommended by Accountrix saved our business over $150,000 in the last fiscal year alone.",
    name: "Michael Chen",
    title: "Financial Director",
    company: "Global Enterprises"
  },
  {
    text: "Accountrix's cloud-based accounting platform provides real-time insights that help us make data-driven decisions with confidence.",
    name: "Priya Sharma",
    title: "Controller",
    company: "Innovation Labs"
  },
  {
    text: "Their team's expertise in compliance matters ensured we navigated regulatory changes seamlessly during our international expansion.",
    name: "James Wilson",
    title: "VP of Finance",
    company: "Quantum Industries"
  },
  {
    text: "The personalized dashboard Accountrix created for our executive team has revolutionized how we monitor business performance.",
    name: "Emma Rodriguez",
    title: "CEO",
    company: "Nexus Ventures"
  },
  {
    text: "Accountrix provided strategic financial guidance that was instrumental in helping us secure our Series B funding round.",
    name: "David Park",
    title: "Founder",
    company: "Elevate Startups"
  },
  {
    text: "Their audit preparation services reduced our annual audit stress and cut preparation time by half. Truly exceptional service.",
    name: "Olivia Taylor",
    title: "Accounting Manager",
    company: "Pioneer Group"
  },
  {
    text: "Accountrix's forecasting models helped us accurately predict cash flow during market volatility, allowing us to make critical decisions with confidence.",
    name: "Robert Garcia",
    title: "Treasury Director",
    company: "Horizon Capital"
  }
];

const TestimonialSection = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [screenSize, setScreenSize] = useState('large'); // 'small', 'medium', 'large'
  const totalSlides = testimonials.length;
  
  // Check screen size for responsive behavior
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 640) { // sm breakpoint
        setScreenSize('small');
      } else if (width < 1024) { // lg breakpoint
        setScreenSize('medium');
      } else {
        setScreenSize('large');
      }
    };
    
    // Initial check
    checkScreenSize();
    
    // Add listener for resize
    window.addEventListener('resize', checkScreenSize);
    
    // Clean up
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  
  // Determine how many items to show per slide based on screen size
  const itemsPerSlide = screenSize === 'large' ? 2 : 1;
  
  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      // Ensure index is within bounds
      const maxIndex = totalSlides - itemsPerSlide;
      const boundedIndex = Math.max(0, Math.min(index, maxIndex));
      setActiveIndex(boundedIndex);
      
      // Calculate position based on items per slide
      const slideWidth = scrollRef.current.clientWidth / itemsPerSlide;
      scrollRef.current.scrollTo({
        left: boundedIndex * slideWidth,
        behavior: 'smooth'
      });
    }
  };

  const scrollLeft = () => {
    scrollToIndex(activeIndex - itemsPerSlide);
  };

  const scrollRight = () => {
    scrollToIndex(activeIndex + itemsPerSlide);
  };

  // Auto-scroll functionality every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = activeIndex + itemsPerSlide;
      if (nextIndex >= totalSlides) {
        // Reset to beginning when reached the end
        scrollToIndex(0);
      } else {
        scrollToIndex(nextIndex);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex, itemsPerSlide, totalSlides]);

  return (
    <div className="bg-gray-900 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Only change flex direction on smallest screens (mobile) */}
        <div className="flex flex-col sm:flex-row gap-8 lg:gap-12">
          {/* Left Side - Fixed Quote */}
          <div className="sm:w-1/3 flex flex-col gap-6 md:gap-8 sm:sticky sm:top-24 sm:self-start">
            <div className="relative">
              <FaQuoteLeft className="text-5xl md:text-6xl text-blue-500 opacity-90" />
              <div className="absolute top-0 left-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full filter blur-2xl opacity-30"></div>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-sans">
              Trusted by finance leaders worldwide
            </h2>
            
            <p className="text-lg md:text-xl font-light leading-relaxed text-gray-300">
              Discover how Accountrix delivers exceptional financial solutions that drive growth and success.
            </p>
            
            <div className="flex gap-4 mt-4 md:mt-6">
              <button 
                onClick={scrollLeft} 
                className="p-3 md:p-4 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-blue-900/20"
                aria-label="Scroll left"
              >
                <FaChevronLeft className="text-blue-400 text-lg md:text-xl" />
              </button>
              <button 
                onClick={scrollRight} 
                className="p-3 md:p-4 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-purple-900/20"
                aria-label="Scroll right"
              >
                <FaChevronRight className="text-blue-400 text-lg md:text-xl" />
              </button>
            </div>
          </div>

          {/* Right Side - Scrolling Testimonials (responsive - 1 or 2 visible) */}
          <div className="sm:w-2/3 relative mt-8 sm:mt-0">
            <div 
              ref={scrollRef}
              className="w-full overflow-x-hidden"
            >
              <div className="flex flex-nowrap transition-all duration-500">
                {testimonials.map((t, index) => (
                  <div 
                    key={index} 
                    className={`testimonial-card flex-shrink-0 p-2 md:p-3 ${
                      screenSize === 'large' ? 'w-1/2' : 'w-full'
                    }`}
                  >
                    <div className="bg-gray-800 rounded-xl md:rounded-2xl shadow-xl overflow-hidden h-80 md:h-96 border border-gray-700 hover:border-blue-500 transition-all duration-300 group">
                      <div className="p-6 md:p-8 h-3/4 flex items-center">
                        <p className="text-gray-100 leading-relaxed group-hover:text-white transition-colors duration-300 text-base md:text-lg font-light tracking-wide">
                          "{t.text}"
                        </p>
                      </div>
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 md:p-6 h-1/4 flex items-center">
                        <div>
                          <p className="font-bold text-white text-lg md:text-xl tracking-wide">{t.name}</p>
                          <p className="text-blue-100 font-medium text-sm md:text-base mt-1">{t.title} • {t.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Indicator dots for slides - adjust based on items per slide */}
            <div className="flex justify-center gap-2 md:gap-3 mt-6 md:mt-8">
              {Array.from({ length: Math.ceil(totalSlides / itemsPerSlide) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index * itemsPerSlide)}
                  className={`transition-all duration-300 ${
                    Math.floor(activeIndex / itemsPerSlide) === index 
                      ? "w-6 md:w-8 h-2 bg-blue-500 rounded-full" 
                      : "w-2 h-2 bg-gray-600 rounded-full"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-64 md:w-96 h-64 md:h-96 bg-blue-600 rounded-full filter blur-3xl opacity-5"></div>
      <div className="absolute bottom-20 right-10 w-64 md:w-96 h-64 md:h-96 bg-purple-600 rounded-full filter blur-3xl opacity-5"></div>
    </div>
  );
};

export default TestimonialSection;