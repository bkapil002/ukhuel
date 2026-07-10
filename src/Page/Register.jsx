import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import JoinHuel from './JoinHuel';
import loginPageImage from "../image/loginPageImage.webp";

export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');

  // Password requirements evaluation
  const isLengthValid = password.length >= 12;
  const isCaseValid = /[a-z]/.test(password) && /[A-Z]/.test(password);
  const isCharValid = /[0-9]/.test(password) || /[^A-Za-z0-9]/.test(password);

  const handleSubmit = (e) => {
    e.preventDefault();
    // registration submit action
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

        {/* Right Column: Natural Scrolling Content (No overflow-y-auto to allow body scroll) */}
        <div className="w-full flex flex-col justify-between py-12 px-6 sm:px-12 lg:px-20 bg-white">
          
          <div className="max-w-[420px] mx-auto w-full">
            {/* Tab Navigation */}
            <div className="flex border-b border-neutral-200 mb-8 max-w-[260px] mx-auto">
              <button
                type="button"
                onClick={() => navigate('/login')}
                className="flex-grow pb-3.5 text-[14px] font-semibold text-neutral-400 hover:text-neutral-600 transition-colors relative cursor-pointer text-center"
              >
                Sign in
              </button>
              <button
                type="button"
                className="flex-grow pb-3.5 text-[14px] font-semibold text-black relative cursor-pointer text-center"
              >
                Join us
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-black" />
              </button>
            </div>

            {/* Form Heading & Subtitle */}
            <div className="text-center mb-8">
              <h1 className="text-[28px] font-extrabold text-black tracking-tight mb-2.5">
                Create an account
              </h1>
              <p className="text-[13px] font-medium text-neutral-500 leading-normal max-w-[320px] mx-auto">
                Easily manage your orders, update your subscriptions, and edit your details.
              </p>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Email Address */}
              <div>
                <label className="block text-[13px] font-semibold text-neutral-800 mb-1">Email address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 text-[14px] font-medium rounded-lg border border-neutral-300 focus:ring-1 focus:ring-black focus:border-black outline-none bg-white transition-all"
                  required
                />
              </div>

              {/* First name & Last name (Side by Side) */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-semibold text-neutral-800 mb-1">First name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 text-[14px] font-medium rounded-lg border border-neutral-300 focus:ring-1 focus:ring-black focus:border-black outline-none bg-white transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold text-neutral-800 mb-1">Last name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 text-[14px] font-medium rounded-lg border border-neutral-300 focus:ring-1 focus:ring-black focus:border-black outline-none bg-white transition-all"
                    required
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-[13px] font-semibold text-neutral-800 mb-1">Phone number</label>
                <div className="flex items-center w-full px-4 py-3 rounded-lg border border-neutral-300 focus-within:ring-1 focus-within:ring-black focus-within:border-black bg-white transition-all">
                  {/* Flag drop down preview */}
                  <div className="flex items-center gap-1.5 mr-3 select-none text-black">
                    <span className="text-lg leading-none">🇬🇧</span>
                    {/* Small chevron */}
                    <svg className="h-3 w-3 text-neutral-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  {/* Country code prefix */}
                  <span className="text-[14px] font-bold text-black mr-4">+44</span>
                  {/* Phone Input */}
                  <input
                    type="tel"
                    placeholder="7400123456"
                    className="w-full text-[14px] font-medium outline-none bg-white text-black placeholder-neutral-400"
                    required
                  />
                </div>
                <p className="text-[11px] text-neutral-500 mt-1.5 pl-0.5">
                  Receive order updates via text message (sms)
                </p>
              </div>

              {/* Password */}
              <div>
                <label className="block text-[13px] font-semibold text-neutral-800 mb-1">Password</label>
                <div className="relative rounded-lg border border-neutral-300 focus-within:ring-1 focus-within:ring-black bg-white transition-all">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 text-[14px] font-medium pr-12 outline-none rounded-lg border-none bg-white"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-neutral-700 underline hover:text-black cursor-pointer"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>

                {/* Password Strength Meter (three segments) */}
                <div className="flex gap-1.5 mt-3 px-0.5">
                  <div className={`h-1 flex-1 rounded transition-colors duration-300 ${password.length > 0 ? (isLengthValid && isCaseValid && isCharValid ? 'bg-[#1a6b36]' : 'bg-[#e0b034]') : 'bg-neutral-200'}`} />
                  <div className={`h-1 flex-1 rounded transition-colors duration-300 ${password.length >= 6 ? (isLengthValid && isCaseValid && isCharValid ? 'bg-[#1a6b36]' : 'bg-[#e0b034]') : 'bg-neutral-200'}`} />
                  <div className={`h-1 flex-1 rounded transition-colors duration-300 ${isLengthValid && isCaseValid && isCharValid ? 'bg-[#1a6b36]' : 'bg-neutral-200'}`} />
                </div>

                {/* Password requirements list */}
                <div className="mt-3.5 space-y-2 pl-0.5">
                  <p className="text-[12px] font-medium text-neutral-500">Passwords must contain:</p>
                  
                  {/* Requirement 1: 12 chars */}
                  <div className="flex items-center gap-2.5 text-[12px] font-semibold text-neutral-800">
                    <div className={`h-[18px] w-[18px] rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                      isLengthValid ? 'border-[#1a6b36] text-[#1a6b36] bg-[#d2f2dc]' : 'border-neutral-400 text-neutral-400'
                    }`}>
                      <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>At least 12 characters</span>
                  </div>

                  {/* Requirement 2: Case */}
                  <div className="flex items-center gap-2.5 text-[12px] font-semibold text-neutral-800">
                    <div className={`h-[18px] w-[18px] rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                      isCaseValid ? 'border-[#1a6b36] text-[#1a6b36] bg-[#d2f2dc]' : 'border-neutral-400 text-neutral-400'
                    }`}>
                      <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Upper and lowercase letter</span>
                  </div>

                  {/* Requirement 3: Numbers/special chars */}
                  <div className="flex items-center gap-2.5 text-[12px] font-semibold text-neutral-800">
                    <div className={`h-[18px] w-[18px] rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                      isCharValid ? 'border-[#1a6b36] text-[#1a6b36] bg-[#d2f2dc]' : 'border-neutral-400 text-neutral-400'
                    }`}>
                      <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>At least one number or special character</span>
                  </div>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="pt-1">
                <label className="block text-[13px] font-semibold text-neutral-800 mb-1">Confirm password</label>
                <div className="relative rounded-lg border border-neutral-300 focus-within:ring-1 focus-within:ring-black bg-white transition-all">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    className="w-full px-4 py-3 text-[14px] font-medium pr-12 outline-none rounded-lg border-none bg-white"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-neutral-700 underline hover:text-black cursor-pointer"
                  >
                    {showConfirmPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Opt-out Checkbox */}
              <div className="flex items-start gap-3 pt-2.5">
                <input
                  id="opt-out-checkbox"
                  type="checkbox"
                  className="mt-1 h-5 w-5 rounded border-neutral-300 text-black focus:ring-black cursor-pointer shrink-0"
                />
                <label htmlFor="opt-out-checkbox" className="text-[13px] font-semibold text-neutral-800 leading-tight cursor-pointer">
                  Opt out of Huel's marketing emails packed with exciting news and offers
                </label>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-5">
                <button
                  type="submit"
                  className="w-full max-w-[130px] mx-auto py-3 bg-[#eef0f1] hover:bg-neutral-200 text-[14px] font-bold text-neutral-600 hover:text-black rounded-full transition-colors cursor-pointer"
                >
                  Submit
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>

 
    </div>
  );
}
