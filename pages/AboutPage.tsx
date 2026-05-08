import React from 'react';
import { Users, CheckCircle2, Play, Target, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Page Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-20 bg-page overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#2e1065_0%,_#0b0512_70%)] opacity-50"></div>
         <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">About ETROLIT</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
               We are the architects of the automated future. Bridging the gap between traditional commerce and artificial intelligence.
            </p>
         </div>
      </section>

      {/* Intro Video Section (Expanded) */}
      <section className="py-32 bg-page border-y border-white/5 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
                <h2 className="text-3xl font-display font-bold text-white mb-6">Who We Are</h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                   ETROLIT is a premier AI engineering agency dedicated to transforming e-commerce operations. We don't just build chatbots; we construct entire automated ecosystems that learn, adapt, and scale with your business.
                </p>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                   Founded by senior engineers and product managers, we understand the nuances of high-volume retail. Our mission is to eliminate operational friction so you can focus on growth.
                </p>
                <div className="flex gap-6">
                   <div className="flex flex-col">
                      <span className="text-3xl font-bold text-brand-500">50+</span>
                      <span className="text-sm text-slate-500">Enterprise Clients</span>
                   </div>
                   <div className="flex flex-col">
                      <span className="text-3xl font-bold text-accent-cyan">10M+</span>
                      <span className="text-sm text-slate-500">Automated Interactions</span>
                   </div>
                </div>
             </div>
             <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-[0_0_60px_rgba(139,92,246,0.15)] group cursor-pointer">
                {/* Placeholder for Video */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
                  <div className="text-center">
                     <div className="w-20 h-20 rounded-full bg-brand-600/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-brand-500/30 shadow-[0_0_30px_rgba(124,58,237,0.3)]">
                       <div className="w-14 h-14 rounded-full bg-brand-600 flex items-center justify-center shadow-lg shadow-brand-600/40 relative z-10">
                         <Play className="h-6 w-6 text-white ml-1" fill="currentColor" />
                       </div>
                     </div>
                     <p className="text-slate-300 font-medium group-hover:text-white transition-colors">Our Story (2 min)</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions (Expanded) */}
      <section className="py-32 bg-page relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">The E-commerce Scaling Paradox</h2>
             <p className="text-slate-400 max-w-2xl mx-auto">
                As you grow, complexity increases exponentially. We solve the specific pain points that throttle expansion.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center border border-red-500/20 mb-6">
                <Users className="h-6 w-6 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">The Problem: Support Saturation</h3>
              <p className="text-slate-400 leading-relaxed">
                 Traditional scaling requires hiring more humans. This leads to slow response times, inconsistent answers, and massive overhead costs. When a sale spike hits, your support team drowns.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-accent-emerald/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-accent-emerald/10 flex items-center justify-center border border-accent-emerald/20 mb-6">
                <CheckCircle2 className="h-6 w-6 text-accent-emerald" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">The ETROLIT Solution</h3>
              <p className="text-slate-400 leading-relaxed">
                 We deploy AI agents that don't sleep. They handle 90% of routine inquiries instantly. For complex issues, they draft answers for human approval. You get infinite scale with zero degradation in quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section (To add height/content) */}
      <section className="py-32 bg-slate-900/30 border-t border-white/5">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-display font-bold text-white mb-12 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto bg-brand-900/50 rounded-full flex items-center justify-center mb-6">
                     <Target className="h-8 w-8 text-brand-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Precision</h3>
                  <p className="text-slate-400">We believe in data-driven accuracy. No hallucinations, just results.</p>
               </div>
               <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto bg-brand-900/50 rounded-full flex items-center justify-center mb-6">
                     <Shield className="h-8 w-8 text-brand-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Reliability</h3>
                  <p className="text-slate-400">Systems built to withstand Black Friday traffic peaks without faltering.</p>
               </div>
               <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto bg-brand-900/50 rounded-full flex items-center justify-center mb-6">
                     <Zap className="h-8 w-8 text-brand-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Speed</h3>
                  <p className="text-slate-400">Latency kills conversion. We optimize for millisecond response times.</p>
               </div>
            </div>
            
            <div className="mt-20 text-center">
               <Link 
                  to="/book-demo"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 text-white font-medium transition-all"
               >
                  Join our Team
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
};