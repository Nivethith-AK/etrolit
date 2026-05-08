import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Cog, Cpu, BarChart3, Check } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  return (
    <div className="pt-36 pb-16 bg-page">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
          AI Project Management & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-cyan">Engineering for E-commerce</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10 font-medium">
          Specialized solutions designed to bridge the gap between traditional retail operations and autonomous artificial intelligence.
        </p>
        <Link 
          to="/demo"
          className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-600 hover:bg-brand-500 text-white font-semibold text-lg transition-all shadow-lg hover:shadow-brand-500/40"
        >
          Book a Demo
        </Link>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="w-14 h-14 bg-brand-100 rounded-xl flex items-center justify-center mb-6 border border-brand-200">
              <Bot className="h-8 w-8 text-brand-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">AI Chatbot Development</h2>
            <p className="text-slate-600 mb-6 leading-relaxed font-medium">
              We engineer sophisticated conversational agents that go beyond simple scripts. Our bots integrate deeply with your OMS (Order Management System) to provide real-time updates, handle returns, and offer multilingual support.
            </p>
            <ul className="space-y-3">
              {['24/7 Customer Support', 'Real-time Order Tracking', 'Multilingual Capabilities', 'Sentiment Analysis'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                  <Check className="h-5 w-5 text-emerald-600" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2 bg-white rounded-2xl p-8 border border-slate-200 h-80 flex items-center justify-center shadow-xl shadow-slate-200/50">
            <div className="flex flex-col items-center gap-4">
               <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center border border-slate-200 animate-pulse">
                  <Bot className="h-8 w-8 text-slate-300" />
               </div>
               <span className="text-slate-400 font-mono text-sm tracking-tight">Support Agent Sandbox UI</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-2xl p-8 border border-slate-200 h-80 flex items-center justify-center shadow-xl shadow-slate-200/50">
             <div className="flex flex-col items-center gap-4">
                <div className="flex gap-2">
                   <div className="w-8 h-8 bg-slate-100 rounded animate-bounce"></div>
                   <div className="w-8 h-8 bg-slate-200 rounded animate-bounce delay-100"></div>
                   <div className="w-8 h-8 bg-slate-300 rounded animate-bounce delay-200"></div>
                </div>
                <span className="text-slate-400 font-mono text-sm tracking-tight">Workflow Visualization Engine</span>
             </div>
          </div>
          <div>
            <div className="w-14 h-14 bg-brand-100 rounded-xl flex items-center justify-center mb-6 border border-brand-200">
              <Cog className="h-8 w-8 text-brand-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">AI Workflow Automation</h2>
            <p className="text-slate-600 mb-6 leading-relaxed font-medium">
              Eliminate repetitive tasks. We build autonomous agents that manage inventory, process invoices, update CRMs, and trigger alerts for low stock or high-priority tickets.
            </p>
            <ul className="space-y-3">
              {['Automated Order Processing', 'Inventory Synchronization', 'CRM Data Entry', 'Internal Workflow Triggers'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                  <Check className="h-5 w-5 text-emerald-600" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-brand-300 transition-all group shadow-sm hover:shadow-xl shadow-slate-200/50">
              <div className="w-14 h-14 bg-brand-100 rounded-xl flex items-center justify-center mb-6 border border-brand-200">
                 <Cpu className="h-8 w-8 text-brand-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand-700 transition-colors">Custom AI Solutions</h3>
              <p className="text-slate-600 mb-4 font-medium leading-relaxed">
                Full-cycle development from business analysis and requirement mapping to model training, integration, and stress testing.
              </p>
           </div>
           <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-brand-300 transition-all group shadow-sm hover:shadow-xl shadow-slate-200/50">
              <div className="w-14 h-14 bg-brand-100 rounded-xl flex items-center justify-center mb-6 border border-brand-200">
                 <BarChart3 className="h-8 w-8 text-brand-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand-700 transition-colors">AI Consulting</h3>
              <p className="text-slate-600 mb-4 font-medium leading-relaxed">
                Strategic guidance on AI adoption. We help you define your roadmap, calculate ROI, and plan the implementation to minimize disruption.
              </p>
           </div>
        </div>
      </div>

      <section className="mt-24 py-16 bg-slate-100/50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Why Businesses Fail at Scaling</h2>
          <p className="text-slate-600 mb-12 font-medium">
            Statistics show that 60% of e-commerce scaling issues stem from manual bottlenecks. 
            ETROLIT removes these barriers.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-4xl font-bold text-red-600 mb-2">45%</div>
              <p className="text-sm text-slate-500 font-bold">Increase in cart abandonment due to slow support.</p>
            </div>
            <div className="p-6 border-x border-slate-200">
              <div className="text-4xl font-bold text-brand-600 mb-2">24/7</div>
              <p className="text-sm text-slate-500 font-bold">Operation uptime with our AI Agents.</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-emerald-600 mb-2">3x</div>
              <p className="text-sm text-slate-500 font-bold">ROI within the first 6 months of automation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 text-center pb-24">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Ready to Engineer Your Growth?</h2>
          <Link 
            to="/demo"
            className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-brand-600 hover:bg-brand-500 text-white font-bold text-xl transition-all hover:scale-105 shadow-2xl shadow-brand-900/20"
          >
            Explore the Demo Hub
          </Link>
          <p className="mt-4 text-slate-500 text-sm font-bold">Interactive session with a Senior Engineer.</p>
        </div>
      </section>
    </div>
  );
};