import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, ArrowRight, CheckCircle, AlertCircle, X } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<{ type: 'success' | 'error', message: string } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };

    try {
      const response = await fetch('https://etrolit.io/api/contact.php',
         {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      
      if (result.success) {
        setNotification({ type: 'success', message: 'Message sent! We\'ll reach out shortly.' });
        formRef.current?.reset();
      } else {
        setNotification({ type: 'error', message: result.message || 'Submission failed.' });
      }
    } catch (err) {
      setNotification({ type: 'error', message: 'Connection failed. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col relative bg-page">
       {/* High-speed Notification Toast */}
       {notification && (
        <div className="fixed top-24 right-6 z-[60] animate-in slide-in-from-right-10 fade-in duration-200">
          <div className={`flex items-center gap-3 px-6 py-4 rounded-2xl border shadow-2xl backdrop-blur-xl ${
            notification.type === 'success' 
              ? 'bg-emerald-50 border-emerald-200 text-emerald-700' 
              : 'bg-red-50 border-red-200 text-red-700'
          }`}>
            {notification.type === 'success' ? <CheckCircle className="h-5 w-5" /> : <AlertCircle className="h-5 w-5" />}
            <p className="font-bold text-sm tracking-tight">{notification.message}</p>
            <button onClick={() => setNotification(null)} className="ml-2 hover:opacity-70 transition-opacity">
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

       {/* Page Hero */}
       <section className="relative pt-40 pb-20 bg-page">
          {/* Background Blobs */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
             <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-200/40 rounded-full blur-[100px] animate-blob"></div>
             <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[100px] animate-blob delay-700"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
             <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mb-6">Get in Touch</h1>
             <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
                Ready to automate your operations? Our team is standing by to help.
             </p>
          </div>
       </section>

       <section className="py-20 pb-40 bg-page relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Left: Info */}
                <div>
                   <h2 className="text-3xl font-display font-bold text-slate-900 mb-8">Contact Channels</h2>
                   
                   <div className="space-y-10">
                      <div className="space-y-6">
                         <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white border border-transparent hover:border-slate-200 transition-all duration-300">
                            <div className="p-3 bg-white border border-slate-200 rounded-lg shadow-sm">
                              <Mail className="h-6 w-6 text-brand-600" />
                            </div>
                            <div>
                               <h4 className="text-slate-900 font-bold text-lg">Email Us</h4>
                               <p className="text-slate-600 font-medium">support@etrolit.io</p>
                               <p className="text-slate-400 text-sm mt-1">Response time: &lt; 24 hours</p>
                            </div>
                         </div>
                         <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white border border-transparent hover:border-slate-200 transition-all duration-300">
                            <div className="p-3 bg-white border border-slate-200 rounded-lg shadow-sm">
                              <Phone className="h-6 w-6 text-brand-600" />
                            </div>
                            <div>
                               <h4 className="text-slate-900 font-bold text-lg">Call Us</h4>
                               <p className="text-slate-600 font-medium">+94 77 686 9094</p>
                               <p className="text-slate-400 text-sm mt-1">Mon-Fri, 9am - 6pm EST</p>
                            </div>
                         </div>
                         <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white border border-transparent hover:border-slate-200 transition-all duration-300">
                            <div className="p-3 bg-white border border-slate-200 rounded-lg shadow-sm">
                              <MapPin className="h-6 w-6 text-brand-600" />
                            </div>
                            <div>
                               <h4 className="text-slate-900 font-bold text-lg">Address</h4>
                               <p className="text-slate-600 font-medium">Colombo, Sri Lanka</p>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Right: Form */}
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-brand-300 to-purple-300 rounded-[32px] blur-2xl opacity-20"></div>
                  <div className="relative bg-white/90 backdrop-blur-xl border border-white rounded-[32px] p-8 md:p-10 shadow-2xl overflow-hidden">
                      <form onSubmit={handleFormSubmit} ref={formRef} id="contactForm" className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                            <input 
                              required 
                              name="name"
                              type="text" 
                              placeholder="John Doe"
                              disabled={loading}
                              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-500 focus:bg-white transition-all disabled:opacity-50"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                            <input 
                              required 
                              name="email"
                              type="email" 
                              placeholder="john@example.com"
                              disabled={loading}
                              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-500 focus:bg-white transition-all disabled:opacity-50"
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700 ml-1">Subject</label>
                          <div className="relative">
                            <select 
                              required
                              name="subject"
                              disabled={loading}
                              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:border-brand-500 focus:bg-white transition-all appearance-none disabled:opacity-50 cursor-pointer font-medium">
                              <option value="General Inquiry">General Inquiry</option>
                              <option value="AI Chatbot Development">AI Chatbot Development</option>
                              <option value="Workflow Automation">Workflow Automation</option>
                              <option value="Strategic Consulting">Strategic Consulting</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                               <ArrowRight className="h-4 w-4 rotate-90" />
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                          <textarea 
                            required 
                            name="message"
                            rows={4} 
                            placeholder="Tell us about your project..."
                            disabled={loading}
                            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-500 focus:bg-white transition-all resize-none disabled:opacity-50"
                          ></textarea>
                        </div>

                        <button 
                          type="submit" 
                          disabled={loading}
                          className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-brand-600/30 flex items-center justify-center gap-2 group transition-all disabled:opacity-50 active:scale-95 hover:shadow-brand-600/50"
                        >
                          {loading ? (
                            <>
                                <Loader2 className="h-5 w-5 animate-spin" />
                                <span>Sending...</span>
                            </>
                          ) : (
                            <>
                                <span>Send Inquiry</span>
                                <Send className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </>
                          )}
                        </button>
                      </form>
                  </div>
                </div>
             </div>
          </div>
       </section>
    </div>
  );
};