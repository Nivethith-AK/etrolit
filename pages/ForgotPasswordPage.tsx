import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, Loader2, AlertCircle, Key, CheckCircle, ArrowRight } from 'lucide-react';

const API_FORGOT_ENDPOINT = '/api/forgot_password.php';

export const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setFeedbackMessage('');

    try {
      const response = await fetch(API_FORGOT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setStatus('success');
        setFeedbackMessage(data.status || 'If an account exists with this email, you will receive a reset link shortly.');
      } else {
        setStatus('error');
        setFeedbackMessage(data.error || data.status || 'Could not process password reset request.');
      }
    } catch (error) {
      console.error('Password reset connection error:', error);
      setStatus('error');
      setFeedbackMessage('Communication error with the server. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen pt-40 pb-20 px-4 flex items-center justify-center bg-page relative overflow-hidden">
      {/* Background Orb - Synchronized */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-600/5 rounded-full blur-[120px] -z-10 animate-in fade-in duration-1000"></div>

      <div className="max-w-md w-full relative animate-in fade-in slide-in-from-bottom-12 duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
        <div className="relative bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 md:p-10 shadow-2xl">
          
          {status === 'success' ? (
            <div className="text-center py-6 animate-in fade-in zoom-in duration-300">
              <div className="w-20 h-20 bg-accent-emerald/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-accent-emerald/20 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                <CheckCircle className="h-10 w-10 text-accent-emerald" />
              </div>
              <h1 className="text-3xl font-display font-bold text-white mb-4">Request Sent</h1>
              <p className="text-slate-400 mb-8 leading-relaxed">
                {feedbackMessage}
              </p>
              <Link 
                to="/login"
                className="w-full bg-brand-600 hover:bg-brand-500 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-brand-600/20 active:scale-95"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Return to Sign In</span>
              </Link>
            </div>
          ) : (
            <>
              <div className="text-center mb-10 animate-in fade-in slide-in-from-top-4 duration-500 fill-mode-both delay-[200ms]">
                <div className="w-16 h-16 bg-brand-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-brand-500/20 shadow-[0_0_20px_rgba(37,99,235,0.1)]">
                    <Key className="h-8 w-8 text-brand-400" />
                </div>
                <h1 className="text-3xl font-display font-bold text-white mb-2">Forgot Password?</h1>
                <p className="text-slate-400">Enter your email and we'll send a reset link.</p>
              </div>

              {status === 'error' && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-400 text-sm animate-in fade-in zoom-in duration-300">
                  <AlertCircle className="h-4 w-4 flex-shrink-0" />
                  <p>{feedbackMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2 animate-in fade-in slide-in-from-left-4 duration-500 fill-mode-both delay-[300ms]">
                  <label className="text-sm font-medium text-slate-400 ml-1">Account Email</label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 group-focus-within:text-brand-400 transition-colors" />
                    <input 
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full bg-slate-950/50 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder:text-slate-700 focus:outline-none focus:border-brand-500 transition-all"
                    />
                  </div>
                </div>

                <div className="pt-2 animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both delay-[400ms]">
                    <button 
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full bg-brand-600 hover:bg-brand-500 disabled:bg-brand-600/50 text-white font-bold py-4 rounded-xl shadow-lg shadow-brand-600/30 flex items-center justify-center gap-2 group transition-all active:scale-95"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span>Sending link...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Reset Link</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                </div>
              </form>

              <div className="mt-8 text-center animate-in fade-in duration-700 fill-mode-both delay-[500ms]">
                <Link to="/login" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-brand-400 transition-colors group">
                  <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  Back to Sign In
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};