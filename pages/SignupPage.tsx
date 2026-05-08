import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, UserPlus, Loader2, AlertCircle, ShieldCheck, CheckCircle2 } from 'lucide-react';

const API_SIGNUP_ENDPOINT = '/api/signup.php';

export const SignupPage: React.FC = () => {
  const [formData, setFormData] = useState({ 
    fullName: '', 
    email: '', 
    password: '',
    confirmPassword: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch(API_SIGNUP_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          full_name: formData.fullName,
          email: formData.email,
          password: formData.password,
          confirm_password: formData.confirmPassword
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setStatus('success');
        setTimeout(() => navigate('/login'), 1500);
      } else {
        setStatus('error');
        setErrorMessage(data.error || data.status || 'Registration failed.');
      }
    } catch (error) {
      console.error('Signup connection error:', error);
      setStatus('error');
      setErrorMessage('Communication error with the server. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen pt-40 pb-20 px-4 flex items-center justify-center bg-page relative overflow-hidden">
      {/* Background Orb - Synchronized */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-600/5 rounded-full blur-[120px] -z-10 animate-in fade-in duration-1000"></div>

      <div className="max-w-md w-full relative animate-in fade-in slide-in-from-bottom-12 duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
        <div className="relative bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 md:p-10 shadow-2xl">
          
          {/* Header Icon Box - Standardized aesthetic */}
          <div className="text-center mb-10 animate-in fade-in slide-in-from-top-4 duration-500 fill-mode-both delay-[200ms]">
            <div className="w-16 h-16 bg-brand-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-brand-500/20 shadow-[0_0_20px_rgba(37,99,235,0.1)]">
                <UserPlus className="h-8 w-8 text-brand-400" />
            </div>
            <h1 className="text-3xl font-display font-bold text-white mb-2">Create Account</h1>
            <p className="text-slate-400">Join ETROLIT today</p>
          </div>

          {status === 'error' && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-400 text-sm animate-in fade-in zoom-in duration-300">
              <AlertCircle className="h-4 w-4 flex-shrink-0" />
              <p>{errorMessage}</p>
            </div>
          )}

          {status === 'success' && (
            <div className="mb-6 p-4 bg-accent-emerald/10 border border-accent-emerald/20 rounded-xl flex items-center gap-3 text-accent-emerald text-sm animate-in fade-in zoom-in duration-300">
              <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
              <p>Account created successfully!</p>
            </div>
          )}

          <form onSubmit={handleSignup} className="space-y-5">
            <div className="space-y-2 animate-in fade-in slide-in-from-left-4 duration-500 fill-mode-both delay-[300ms]">
              <label className="text-sm font-medium text-slate-400 ml-1">Full Name</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 group-focus-within:text-brand-400 transition-colors" />
                <input 
                  required
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Jane Cooper"
                  className="w-full bg-slate-950/50 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder:text-slate-700 focus:outline-none focus:border-brand-500 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2 animate-in fade-in slide-in-from-left-4 duration-500 fill-mode-both delay-[350ms]">
              <label className="text-sm font-medium text-slate-400 ml-1">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 group-focus-within:text-brand-400 transition-colors" />
                <input 
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="jane@company.com"
                  className="w-full bg-slate-950/50 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder:text-slate-700 focus:outline-none focus:border-brand-500 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2 animate-in fade-in slide-in-from-left-4 duration-500 fill-mode-both delay-[400ms]">
              <label className="text-sm font-medium text-slate-400 ml-1">Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 group-focus-within:text-brand-400 transition-colors" />
                <input 
                  required
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Min. 8 characters"
                  className="w-full bg-slate-950/50 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder:text-slate-700 focus:outline-none focus:border-brand-500 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2 animate-in fade-in slide-in-from-left-4 duration-500 fill-mode-both delay-[450ms]">
              <label className="text-sm font-medium text-slate-400 ml-1">Confirm Password</label>
              <div className="relative group">
                <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 group-focus-within:text-brand-400 transition-colors" />
                <input 
                  required
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  className="w-full bg-slate-950/50 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder:text-slate-700 focus:outline-none focus:border-brand-500 transition-all"
                />
              </div>
            </div>

            <div className="pt-2 animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both delay-[550ms]">
                <button 
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className="w-full bg-brand-600 hover:bg-brand-500 disabled:bg-brand-600/50 text-white font-bold py-4 rounded-xl shadow-lg shadow-brand-600/30 flex items-center justify-center gap-2 group transition-all active:scale-95"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Creating...</span>
                    </>
                  ) : (
                    <>
                      <span>Create Account</span>
                      <UserPlus className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
            </div>
          </form>

          <div className="mt-8 text-center text-sm text-slate-400 animate-in fade-in duration-700 fill-mode-both delay-[650ms]">
            Already have an account? <Link to="/login" className="text-brand-400 font-semibold hover:text-brand-300">Log in</Link>
          </div>
        </div>
      </div>
    </div>
  );
};