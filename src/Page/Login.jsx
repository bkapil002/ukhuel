import React from 'react';
import { useNavigate } from 'react-router-dom';
import JoinHuel from './JoinHuel';
import loginPageImage from "../image/loginPageImage.webp";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // login submit action
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased flex flex-col">
      {/* Middle Part: Split Screen Layout */}
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-2">
        
        {/* Left Column: Fixed Background Image (Visible on Desktop only) */}
        <div className="hidden lg:block lg:sticky lg:top-[80px] lg:h-[calc(100vh-80px)] overflow-hidden bg-[#faf9f6]">
          <img 
            src={loginPageImage}
            alt="Huel Shaker Bottle on Shelf with Plants"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Column: Natural Scrolling Content */}
        <div className="w-full flex flex-col justify-center py-12 px-6 sm:px-12 lg:px-20 bg-white">
          
          <div className="max-w-[420px] mx-auto w-full animate-fadeIn">
            {/* Tab Navigation */}
            <div className="flex border-b border-neutral-200 mb-8 max-w-[260px] mx-auto">
              <button
                type="button"
                className="flex-grow pb-3.5 text-[14px] font-semibold text-black relative cursor-pointer text-center"
              >
                Sign in
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-black" />
              </button>
              <button
                type="button"
                onClick={() => navigate('/register')}
                className="flex-grow pb-3.5 text-[14px] font-semibold text-neutral-400 hover:text-neutral-600 transition-colors relative cursor-pointer text-center"
              >
                Join us
              </button>
            </div>

            {/* Form Heading */}
            <div className="text-center mb-8">
              <h1 className="text-[28px] font-extrabold text-black tracking-tight mb-2.5">
                Welcome Back
              </h1>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Email Address */}
              <div>
                <label className="block text-[13px] font-semibold text-neutral-800 mb-1">Email address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 text-[14px] font-medium rounded-lg border border-neutral-300 focus:ring-1 focus:ring-black focus:border-black outline-none bg-white transition-all"
                  required
                />
              </div>

              {/* Continue Button */}
              <div className="text-center pt-2">
                <button
                  type="submit"
                  className="w-full max-w-[130px] mx-auto py-3 bg-[#eef0f1] hover:bg-neutral-200 text-[14px] font-bold text-neutral-600 hover:text-black rounded-full transition-colors cursor-pointer"
                >
                  Continue
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>

    
    </div>
  );
}
