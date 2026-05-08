import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, CheckCircle } from 'lucide-react';

export const BookDemoPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => setSubmitted(true), 1000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-48 pb-32 flex items-center justify-center px-4 bg-page">
        <div className="max-w-md w-full bg-white border border-slate-200 rounded-2xl p-8 text-center shadow-2xl">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Request Received!</h2>
          <p className="text-slate-600 mb-8 font-medium">
            Our team will review your request and confirm your time slot shortly. Check your email for a calendar invite.
          </p>
          <Link 
            to="/"
            className="block w-full py-3 rounded-lg bg-slate-100 text-slate-900 hover:bg-slate-200 transition-colors text-center font-bold"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-48 pb-32 px-4 sm:px-6 lg:px-8 flex flex-col items-center bg-page">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 border border-brand-200 text-brand-700 text-sm font-bold mb-4">
          <Calendar className="h-4 w-4" /> Schedule a Consultation
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">Book a Demo</h1>
        <p className="text-slate-700 max-w-xl mx-auto font-medium text-lg">
          See how ETROLIT can transform your e-commerce operations. Fill out the form below to schedule a call with our engineering team.
        </p>
      </div>

      <div className="w-full max-w-2xl bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-8 md:p-12 shadow-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-bold text-slate-800">Full Name</label>
              <input 
                required
                type="text" 
                id="name"
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500/20 transition-colors placeholder:text-slate-400"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-bold text-slate-800">Phone Number</label>
              <input 
                required
                type="tel" 
                id="phone"
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500/20 transition-colors placeholder:text-slate-400"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-bold text-slate-800">Email Address</label>
            <input 
              required
              type="email" 
              id="email"
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500/20 transition-colors placeholder:text-slate-400"
              placeholder="john@company.com"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="datetime" className="text-sm font-bold text-slate-800">Preferred Date & Time</label>
            <input 
              required
              type="datetime-local" 
              id="datetime"
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500/20 transition-colors [color-scheme:light]"
            />
          </div>

          <div className="pt-4">
            <button 
              type="submit"
              className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.01] shadow-lg"
            >
              Submit Request
            </button>
            <p className="text-center text-xs text-slate-500 mt-4 font-medium">
              By submitting this form, you agree to our Terms & Conditions.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};