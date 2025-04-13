import { useState } from 'react';
import { Clock, Mail, ArrowRight , Github, Linkedin, Twitter} from 'lucide-react';

export default function ComingSoon() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="h-full bg-gradient-to-b from-indigo-500 to-purple-900 flex flex-col items-center justify-center text-white p-4 relative overflow-hidden">
      {/* Animated particles background */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white opacity-10"
            style={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-lg w-full flex flex-col items-center relative z-10">
        {/* Clock icon at the top */}
        <div className="mb-8">
          <div className="bg-white/20 p-4 rounded-full">
            <Clock className="h-10 w-10 text-white" />
          </div>
        </div>
        
        {/* Tagline in the middle */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">This Functionality Is Coming Soon</h1>
          <p className="text-lg text-purple-200">
            We're working on something special for you. Stay tuned!
          </p>
        </div>
        
        {/* Notification box */}
        <div className="w-full bg-white/10 p-6 rounded-lg backdrop-blur-sm mb-12">
          {!isSubscribed ? (
            <>
              <h2 className="text-xl font-medium mb-4 text-center">Get Notified When We Launch</h2>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="flex items-center flex-1 bg-white/20 rounded-lg p-2">
                  <Mail className="h-5 w-5 text-purple-300 mx-2" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="bg-transparent border-none outline-none flex-1 text-white placeholder-purple-200"
                    required
                  />
                </div>
                <button 
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 transition-all px-6 py-2 rounded-lg font-medium flex items-center justify-center gap-2"
                >
                  Notify Me
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-4">
              <h2 className="text-xl font-semibold mb-2">Thank You!</h2>
              <p className="text-purple-200">We'll notify you when this feature launches.</p>
            </div>
          )}
        </div>
        
         <div className="flex flex-col md:flex-col items-center justify-between gap-4 text-sm text-purple-200">
          <div>
          <p>© 2025 YourCompany. All rights reserved.</p>

          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.1; }
          90% { opacity: 0.1; }
          100% { transform: translateY(-100vh) translateX(20vw); opacity: 0; }
        }
      `}</style>
    </div>
  );
}