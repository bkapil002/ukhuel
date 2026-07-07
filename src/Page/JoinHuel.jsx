import React from 'react';

const JoinHuel = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic
  };

  return (
    <section className="w-full bg-black text-white pt-16 sm:pt-20 pb-0">
      <div className="max-w-[1654px] mx-auto px-4 sm:px-6 lg:px-10 pb-0">
        
        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start pb-12 sm:pb-16">
          
          {/* Left Column (Information Text) */}
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Join the Huel community
            </h2>
            <p className="text-neutral-400 mt-4 text-sm sm:text-base leading-relaxed">
              Sign up to save £10 on your first order over £60 and be the first to hear about new products, exclusive offers, and more.
            </p>
          </div>

          {/* Right Column (Newsletter Subscription Form) */}
          <div className="w-full max-w-xl lg:ml-auto">
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <label 
                htmlFor="email-input" 
                className="text-xs font-bold tracking-wider text-white"
              >
                Your e-mail *
              </label>
              
              <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                <input
                  id="email-input"
                  type="email"
                  placeholder="example@domain.com"
                  className="bg-white text-black placeholder-neutral-400 text-sm px-4 py-3.5 rounded-lg flex-grow outline-none border-none focus:ring-2 focus:ring-neutral-500 transition-all duration-200"
                  required
                />
                <button
                  type="submit"
                  className="bg-black hover:bg-neutral-900 border border-neutral-600 hover:border-white text-white font-bold text-sm px-7 py-3 rounded-full transition-colors duration-200 cursor-pointer whitespace-nowrap"
                >
                  Sign up
                </button>
              </div>
            </form>

            {/* Terms and Privacy Text */}
            <p className="text-[11px] sm:text-xs text-neutral-400 mt-4 leading-relaxed font-normal">
              This site is protected by reCAPTCHA and the Google{' '}
              <a 
                href="https://policies.google.com/privacy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="underline hover:text-white transition-colors"
              >
                Privacy Policy
              </a>{' '}
              and{' '}
              <a 
                href="https://policies.google.com/terms" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="underline hover:text-white transition-colors"
              >
                Terms of Service
              </a>{' '}
              apply. You can unsubscribe at any time.{' '}
              <a 
                href="https://uk.huel.com/pages/privacy-policy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#3b82f6] hover:text-[#60a5fa] underline transition-colors font-medium"
              >
                Huel Privacy Policy
              </a>.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default JoinHuel;