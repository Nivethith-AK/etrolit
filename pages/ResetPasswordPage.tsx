import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ShieldCheck, Lock, Loader2, AlertCircle, CheckCircle, ArrowRight } from 'lucide-react';

const API_RESET_ENDPOINT = '/api/reset_password.php';

export const ResetPasswordPage: React.FC = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Get token from URLSearchParams
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get('token');

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!token) {
      setFeedbackMessage('Invalid or missing reset token.');
      setStatus('error');
      return;
    }

    if (newPassword !== confirmPassword) {
      setFeedbackMessage('Passwords do not match.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setFeedbackMessage('');

    try {
      const response = await fetch(API_RESET_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ token, new_password: newPassword }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setStatus('success');
        setFeedbackMessage(data.status || 'Password has been reset successfully.');
        setTimeout(() => navigate('/login'), 2000);
      } else {
        setStatus('error');
        setFeedbackMessage(data.error || data.status || 'Token expired or invalid.');
      }
    } catch (error) {
      console.error('Reset connection error:', error);
      setStatus('error');
      setFeedbackMessage('Communication error with the server.');
    }
  };

  return (
    <div className="min-h-screen pt-40 pb-20 px-4 flex items-center justify-center bg-page relative overflow-hidden">
      {/* Background Orb - Synchronized */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-600/5 rounded-full blur-[120px] -z-10 animate-in fade-in duration-1000"></div>

      <div className="max-w-md w-full relative animate-in fade-in slide-in-from-bottom-12 duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
        <div className="relative bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 md:p-10 shadow-2xl">
          
          <div className="text-center mb-10 animate-in fade-in slide-in-from-top-4 duration-500 fill-mode-both delay-[200ms]">
            <div className="w-16 h-16 bg-brand-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-brand-500/20 shadow-[0_0_20px_rgba(37,99,235,0.1)]">
                <ShieldCheck className="h-8 w-8 text-brand-400" />
            </div>
            <h1 className="text-3xl font-display font-bold text-white mb-2">New Password</h1>
            <p className="text-slate-400">Secure your account with a new password</p>
          </div>

          {status === 'error' && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-400 text-sm animate-in fade-in zoom-in duration-300">
              <AlertCircle className="h-4 w-4 flex-shrink-0" />
              <p>{feedbackMessage}</p>
            </div>
          )}

          {status === 'success' && (
            <div className="mb-6 p-4 bg-accent-emerald/10 border border-accent-emerald/20 rounded-xl flex items-center gap-3 text-accent-emerald text-sm animate-in fade-in zoom-in duration-300">
              <CheckCircle className="h-4 w-4 flex-shrink-0" />
              <p>{feedbackMessage} Redirecting...</p>
            </div>
          )}

          <form onSubmit={handleReset} className="space-y-6">
            <div className="space-y-2 animate-in fade-in slide-in-from-left-4 duration-500 fill-mode-both delay-[300ms]">
              <label className="text-sm font-medium text-slate-400 ml-1">New Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 group-focus-within:text-brand-400 transition-colors" />
                <input 
                  required
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Min. 8 characters"
                  className="w-full bg-slate-950/50 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder:text-slate-700 focus:outline-none focus:border-brand-500 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2 animate-in fade-in slide-in-from-left-4 duration-500 fill-mode-both delay-[400ms]">
              <label className="text-sm font-medium text-slate-400 ml-1">Confirm New Password</label>
              <div className="relative group">
                <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 group-focus-within:text-brand-400 transition-colors" />
                <input 
                  required
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-slate-950/50 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder:text-slate-700 focus:outline-none focus:border-brand-500 transition-all"
                />
              </div>
            </div>

            <div className="pt-2 animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both delay-[500ms]">
                <button 
                  type="submit"
                  disabled={status === 'loading' || status === 'success' || !token}
                  className="w-full bg-brand-600 hover:bg-brand-500 disabled:bg-brand-600/50 text-white font-bold py-4 rounded-xl shadow-lg shadow-brand-600/30 flex items-center justify-center gap-2 group transition-all active:scale-95"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Saving Password...</span>
                    </>
                  ) : (
                    <>
                      <span>Reset Password</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
            </div>
          </form>

          <div className="mt-8 text-center text-sm text-slate-400 animate-in fade-in duration-700 fill-mode-both delay-[600ms]">
            Return to <Link to="/login" className="text-brand-400 font-semibold hover:text-brand-300">Log in</Link>
          </div>
        </div>
      </div>
    </div>
  );
};