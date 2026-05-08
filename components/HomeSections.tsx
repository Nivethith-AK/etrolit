import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cog, BarChart3, Users, CheckCircle2, Play, Zap, Database, ArrowUpRight, Target, Shield, Mail, Phone, MapPin, Send, CheckCircle, Loader2, AlertCircle, X, Sparkles, Bot } from 'lucide-react';

const FloatingRobotCore = () => (
  <div className="relative w-80 h-80 animate-float select-none pointer-events-none">
    <div className="absolute inset-0 border border-slate-300 rounded-full animate-spin-slow">
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-brand-500 rounded-full shadow-[0_0_20px_#3b82f6] blur-[1px]"></div>
      <div className="absolute top-1/2 -right-1 w-2 h-2 bg-accent-cyan rounded-full shadow-[0_0_10px_#06b6d4]"></div>
    </div>
    <div className="absolute inset-12 border border-slate-300 rounded-full animate-spin-reverse-slow">
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-accent-cyan rounded-full shadow-[0_0_15px_#06b6d4] blur-[1px]"></div>
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-32 h-32 bg-white/90 backdrop-blur-xl border border-white rounded-3xl rotate-45 shadow-[0_20px_50px_rgba(37,99,235,0.15)] flex items-center justify-center overflow-hidden z-10 group pointer-events-auto transition-all duration-700 hover:scale-105 hover:shadow-[0_20px_60px_rgba(37,99,235,0.25)]">
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-50 to-accent-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"></div>
        <div className="transform -rotate-45 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-[-40deg]">
          <Bot className="h-16 w-16 text-brand-600 drop-shadow-sm" strokeWidth={1.5} />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-brand-500/5 to-transparent -translate-y-full animate-[spin_3s_linear_infinite] opacity-30"></div>
      </div>
      <div className="absolute w-48 h-48 bg-brand-400/10 rounded-full blur-[60px] -z-10 animate-pulse"></div>
    </div>
  </div>
);

export const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-page">
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
       <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-200/40 rounded-full blur-[100px] animate-blob"></div>
       <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[100px] animate-blob delay-700"></div>
       <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-cyan-100/60 rounded-full blur-[80px] animate-blob delay-200"></div>
    </div>
    <div className="absolute top-1/2 right-[5%] lg:right-[8%] -translate-y-1/2 hidden xl:block z-0 animate-fade-in opacity-0 fill-mode-both delay-300">
        <FloatingRobotCore />
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center xl:items-start xl:text-left relative z-10">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-300 text-brand-700 text-sm font-semibold mb-8 opacity-0 animate-fade-up fill-mode-both shadow-sm">
        <Sparkles className="h-4 w-4 text-brand-600" /> Engineering the Automated Future
      </div>
      <h1 className="text-5xl md:text-7xl font-sans font-extrabold text-slate-900 tracking-tight mb-8 opacity-0 animate-fade-up fill-mode-both delay-100 drop-shadow-sm">
        AI Automation Management <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 to-accent-cyan"> & Engineering Agency</span>
      </h1>
      <p className="max-w-2xl text-lg md:text-xl text-slate-700 font-medium mb-10 leading-relaxed opacity-0 animate-fade-up fill-mode-both delay-200">
        We build intelligent workflows and custom AI solutions for E-commerce platforms. 
        Scale your operations with automated precision and data-driven strategies.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up fill-mode-both delay-300">
        <Link 
          to="/demo"
          className="group relative inline-flex items-center justify-center px-10 py-5 rounded-2xl bg-brand-600 text-white font-bold text-lg transition-all duration-300 hover:scale-105 shadow-[0_10px_30px_rgba(37,99,235,0.25)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.35)] border border-brand-500 overflow-hidden"
        >
          <span className="relative z-10">Book a Demo</span>
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out"></div>
        </Link>
        <button 
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          className="inline-flex items-center justify-center px-10 py-5 rounded-2xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-bold text-lg transition-all duration-300 shadow-sm hover:shadow-md hover:translate-x-1"
        >
          Explore Services <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </div>
  </section>
);

export const WhatWeServeSection = () => (
  <section id="about" className="min-h-screen py-24 bg-page relative overflow-hidden flex flex-col justify-center">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-100/50 to-transparent"></div>
    <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent-cyan/10 rounded-full blur-[90px]"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-16">
      <div className="text-center mb-16 opacity-0 animate-fade-up fill-mode-both">
         <span className="text-brand-700 font-mono text-sm tracking-widest uppercase mb-4 block font-bold">About Us</span>
         <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
            Solving E-commerce Complexity <br /> with <span className="text-brand-600">Intelligent AI</span>
         </h2>
         <p className="text-slate-700 font-medium text-lg max-w-2xl mx-auto">
            E-commerce brands face scaling challenges: chaotic support, manual workflows, and data silos. 
            We provide the engineering backbone to automate and optimize.
         </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <div className="relative opacity-0 animate-fade-up fill-mode-both delay-100">
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-200 to-accent-cyan/30 rounded-2xl opacity-50 blur-2xl animate-pulse"></div>
          <div className="relative bg-white/90 backdrop-blur-xl border border-white rounded-2xl p-2 shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
             <div className="aspect-video rounded-xl overflow-hidden bg-slate-50 relative group cursor-pointer border border-slate-200">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-white via-slate-50 to-white transition-colors duration-500">
                  <div className="text-center transform transition-transform duration-500 group-hover:scale-105">
                     <div className="w-20 h-20 rounded-full bg-brand-50 flex items-center justify-center mx-auto mb-6 border border-brand-200 shadow-xl shadow-brand-100">
                       <div className="w-14 h-14 rounded-full bg-brand-600 flex items-center justify-center shadow-lg shadow-brand-600/30 relative z-10">
                         <Play className="h-6 w-6 text-white ml-1" fill="currentColor" />
                       </div>
                     </div>
                     <p className="text-slate-600 font-bold group-hover:text-brand-600 transition-colors">Intro Video</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
        <div className="opacity-0 animate-fade-up fill-mode-both delay-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">The E-commerce Scaling Paradox</h3>
          <p className="text-slate-700 text-lg mb-8 leading-relaxed font-medium">
             As you grow, complexity increases exponentially. Traditional scaling requires hiring more humans, leading to slow response times and massive overhead.
          </p>
          <div className="space-y-6">
            <div className="flex gap-4 p-4 rounded-xl hover:bg-white transition-all duration-300 border border-transparent hover:border-slate-200 group cursor-default shadow-sm hover:shadow-md">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center border border-red-200 shadow-sm group-hover:scale-110 transition-all duration-300">
                <Users className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-slate-900 font-bold text-lg">Pain Point: Support Overload</h3>
                <p className="text-slate-600">High volume queries leading to lost sales and poor CX.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-xl hover:bg-white transition-all duration-300 border border-transparent hover:border-slate-200 group cursor-default shadow-sm hover:shadow-md">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center border border-emerald-200 shadow-sm group-hover:scale-110 transition-all duration-300">
                <CheckCircle2 className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-slate-900 font-bold text-lg">Solution: AI Automation</h3>
                <p className="text-slate-600">24/7 intelligent agents and automated backend workflows.</p>
              </div>
            </div>
          </div>
          <div className="mt-10 text-brand-700 font-bold hover:text-brand-800 inline-flex items-center gap-2 group transition-colors cursor-pointer" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Start your transformation <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ServiceCard = ({ icon: Icon, title, desc, comingSoon = false, delay }: { icon: any, title: string, desc: string, comingSoon?: boolean, delay: string }) => (
  <div className={`group flex flex-col h-full p-8 rounded-2xl bg-white border border-slate-200 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-500 relative overflow-hidden hover:-translate-y-2 opacity-0 animate-fade-up fill-mode-both ${delay}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-brand-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="w-14 h-14 rounded-xl bg-brand-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10 border border-brand-100 shadow-sm">
      <Icon className="h-7 w-7 text-brand-600 transition-colors duration-500" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10 group-hover:text-brand-700 transition-colors duration-300">{title}</h3>
    <p className="text-slate-600 font-medium mb-6 relative z-10 flex-grow text-sm leading-relaxed group-hover:text-slate-700 transition-colors duration-300">{desc}</p>
    <div className="relative z-10 mt-auto">
      {comingSoon ? (
        <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-500 tracking-wide cursor-not-allowed select-none">
          Coming Soon
        </span>
      ) : (
        <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center text-sm font-bold text-brand-600 group-hover:text-brand-700 transition-colors">
          View Details <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </button>
      )}
    </div>
  </div>
);

export const ServicesSummarySection = () => (
  <section id="services" className="min-h-screen py-24 bg-page relative flex flex-col justify-center">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
      <div className="text-center mb-20 opacity-0 animate-fade-up fill-mode-both">
        <span className="text-brand-700 font-mono text-sm tracking-widest uppercase mb-4 block font-bold">Our Expertise</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Comprehensive AI Engineering</h2>
        <p className="text-slate-700 font-medium max-w-2xl mx-auto text-lg">
          Tailored solutions for modern commerce. We don't just use AI; we engineer it into your business DNA.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-20">
        <ServiceCard icon={Zap} title="AI Chatbot Dev" desc="Intelligent customer support agents that handle queries and track orders." delay="delay-100" />
        <ServiceCard icon={Cog} title="Workflow Automation" desc="Automate CRM, inventory management, and internal processing." delay="delay-200" />
        <ServiceCard icon={Database} title="Custom AI Solutions" desc="Tailored algorithms and analysis for your unique business needs." comingSoon={true} delay="delay-300" />
        <ServiceCard icon={BarChart3} title="AI Consulting" desc="Strategic roadmaps and ROI optimization for AI adoption." comingSoon={true} delay="delay-500" />
      </div>
      <div className="bg-white rounded-3xl p-12 border border-slate-200 shadow-xl opacity-0 animate-fade-up fill-mode-both delay-700">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            <div className="p-4 hover:bg-slate-50 transition-colors rounded-xl duration-300">
              <div className="text-5xl font-bold text-red-500 mb-4 animate-pulse">45%</div>
              <p className="text-slate-700 font-bold">Reduction in support costs</p>
            </div>
            <div className="p-4 hover:bg-slate-50 transition-colors rounded-xl duration-300">
              <div className="text-5xl font-bold text-brand-600 mb-4 animate-pulse delay-100">24/7</div>
              <p className="text-slate-700 font-bold">Autonomous operation uptime</p>
            </div>
            <div className="p-4 hover:bg-slate-50 transition-colors rounded-xl duration-300">
              <div className="text-5xl font-bold text-accent-emerald mb-4 animate-pulse delay-200">3x</div>
              <p className="text-slate-700 font-bold">ROI in first 6 months</p>
            </div>
          </div>
      </div>
    </div>
  </section>
);

export const PortfolioSection = () => {
  const projects = [
    { id: 1, title: "Global Fashion Retailer", category: "Support Automation", stat: "45% Cost Reduction", image: "https://picsum.photos/600/400?random=1" },
    { id: 2, title: "Tech Electronics Brand", category: "Inventory Workflow", stat: "99.9% Stock Accuracy", image: "https://picsum.photos/600/400?random=2" },
    { id: 3, title: "Beauty & Cosmetics Giant", category: "Personalized AI", stat: "30% AOV Increase", image: "https://picsum.photos/600/400?random=3" },
    { id: 4, title: "Home Decor Marketplace", category: "Visual Search", stat: "2x Conversion Rate", image: "https://picsum.photos/600/400?random=4" },
    { id: 5, title: "Subscription Box Service", category: "Churn Prediction", stat: "15% Churn Reduction", image: "https://picsum.photos/600/400?random=5" },
    { id: 6, title: "Automotive Parts Supplier", category: "B2B Processing", stat: "60h Weekly Saved", image: "https://picsum.photos/600/400?random=6" }
  ];

  return (
    <section id="portfolio" className="min-h-screen py-24 bg-page border-y border-slate-200 relative flex flex-col justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-100 to-transparent -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
        <div className="text-center mb-20 opacity-0 animate-fade-up fill-mode-both">
           <span className="text-accent-cyan font-mono text-sm tracking-widest uppercase mb-4 block font-bold text-brand-700">Success Stories</span>
           <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Our Work</h2>
           <p className="text-slate-700 max-w-2xl mx-auto text-lg font-medium">
             Real results for ambitious brands. Explore how we've deployed AI to solve critical business challenges.
           </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={project.id} 
              className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-brand-300 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-900/10 h-96 flex flex-col opacity-0 animate-fade-up fill-mode-both"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="h-48 overflow-hidden relative">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out opacity-90 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow relative z-10 bg-white/80 backdrop-blur-sm transition-colors group-hover:bg-white">
                <span className="text-xs font-bold text-brand-600 uppercase tracking-wide mb-2 block transform group-hover:translate-x-1 transition-transform duration-300">{project.category}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2 transform group-hover:translate-x-1 transition-transform duration-300 delay-75">{project.title}</h3>
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-emerald-600 font-bold text-sm">{project.stat}</span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-brand-600 transition-all duration-300 group-hover:scale-110">
                    <ArrowUpRight className="h-4 w-4 text-slate-600 group-hover:text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ContactSection = () => {
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
      const response = await fetch('https://etrolit.io/api/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (result.success) {
        setNotification({ type: 'success', message: 'Message sent! We\'ll be in touch.' });
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
    <section id="contact" className="min-h-screen py-24 bg-page relative flex flex-col justify-center overflow-hidden">
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
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-100/60 rounded-full blur-[120px] -z-10 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-100/60 rounded-full blur-[100px] -z-10 animate-blob delay-500"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12 opacity-0 animate-fade-up fill-mode-both">
            <div>
              <span className="text-brand-700 font-mono text-sm tracking-widest uppercase mb-4 block font-bold">Contact Us</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
                Let's Build the <br /> <span className="text-brand-600">Next Big Thing</span> Together
              </h2>
              <p className="text-slate-700 text-lg max-w-md font-medium">
                Have a project in mind? Our team of senior engineers is ready to help you scale your commerce operations with custom AI.
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex items-start gap-5 group p-4 rounded-xl transition-colors hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center group-hover:bg-brand-50 group-hover:border-brand-200 transition-all duration-300 shadow-sm">
                  <Mail className="h-6 w-6 text-brand-600 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-lg">Email Us</h4>
                  <p className="text-slate-600 group-hover:text-brand-600 transition-colors font-medium">support@etrolit.io</p>
                </div>
              </div>
              <div className="flex items-start gap-5 group p-4 rounded-xl transition-colors hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center group-hover:bg-brand-50 group-hover:border-brand-200 transition-all duration-300 shadow-sm">
                  <Phone className="h-6 w-6 text-brand-600 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-lg">Call Us</h4>
                  <p className="text-slate-600 group-hover:text-brand-600 transition-colors font-medium">+94 77 686 9094</p>
                </div>
              </div>
              <div className="flex items-start gap-5 group p-4 rounded-xl transition-colors hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center group-hover:bg-brand-50 group-hover:border-brand-200 transition-all duration-300 shadow-sm">
                  <MapPin className="h-6 w-6 text-brand-600 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-lg">Address</h4>
                  <p className="text-slate-600 group-hover:text-brand-600 transition-colors font-medium">Colombo, Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative opacity-0 animate-fade-up fill-mode-both delay-300">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-300 to-purple-300 rounded-[32px] blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative bg-white/90 backdrop-blur-xl border border-white rounded-[32px] p-8 md:p-10 shadow-2xl overflow-hidden">
                <form onSubmit={handleFormSubmit} ref={formRef} id="contactForm" className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                      <input required name="name" type="text" placeholder="John Doe" disabled={loading} className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-500 focus:bg-white transition-all disabled:opacity-50" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                      <input required name="email" type="email" placeholder="john@example.com" disabled={loading} className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-500 focus:bg-white transition-all disabled:opacity-50" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Subject</label>
                    <div className="relative">
                      <select required name="subject" disabled={loading} className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:border-brand-500 focus:bg-white transition-all appearance-none disabled:opacity-50 cursor-pointer font-medium">
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
                    <textarea required name="message" rows={4} placeholder="Tell us about your project..." disabled={loading} className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-500 focus:bg-white transition-all resize-none disabled:opacity-50"></textarea>
                  </div>
                  <button type="submit" disabled={loading} className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-brand-600/30 flex items-center justify-center gap-2 group transition-all disabled:opacity-50 active:scale-95 hover:shadow-brand-600/50">
                    {loading ? (
                        <><Loader2 className="h-5 w-5 animate-spin" /><span>Sending...</span></>
                    ) : (
                        <><span>Send Inquiry</span><Send className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                    )}
                  </button>
                </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};