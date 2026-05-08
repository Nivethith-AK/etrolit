import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const PortfolioPage: React.FC = () => {
  const projects = [
    {
       id: 1,
       title: "Global Fashion Retailer",
       category: "Customer Support Automation",
       stat: "45% Cost Reduction",
       image: "https://picsum.photos/600/400?random=1"
    },
    {
       id: 2,
       title: "Tech Electronics Brand",
       category: "Inventory Workflow",
       stat: "99.9% Stock Accuracy",
       image: "https://picsum.photos/600/400?random=2"
    },
    {
       id: 3,
       title: "Beauty & Cosmetics Giant",
       category: "Personalized Shopping AI",
       stat: "30% AOV Increase",
       image: "https://picsum.photos/600/400?random=3"
    },
    {
       id: 4,
       title: "Home Decor Marketplace",
       category: "Visual Search Engine",
       stat: "2x Conversion Rate",
       image: "https://picsum.photos/600/400?random=4"
    },
    {
       id: 5,
       title: "Subscription Box Service",
       category: "Churn Prediction Model",
       stat: "15% Churn Reduction",
       image: "https://picsum.photos/600/400?random=5"
    },
    {
       id: 6,
       title: "Automotive Parts Supplier",
       category: "B2B Order Processing",
       stat: "60h Weekly Saved",
       image: "https://picsum.photos/600/400?random=6"
    }
  ];

  return (
    <div className="flex flex-col">
       {/* Page Hero */}
       <section className="relative min-h-[50vh] flex items-center justify-center pt-32 pb-12 bg-page">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-950/20 to-page"></div>
          <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
             <span className="text-accent-cyan font-mono text-sm tracking-widest uppercase mb-4 block">Case Studies</span>
             <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">Our Work</h1>
             <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Real results for ambitious brands. Explore how we've deployed AI to solve critical business challenges.
             </p>
          </div>
       </section>

       {/* Expanded Grid */}
       <section className="py-20 pb-40 bg-page">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                   <div key={project.id} className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-white/5 hover:border-brand-500/50 transition-all hover:shadow-2xl hover:shadow-brand-900/20 h-96 flex flex-col">
                      <div className="h-48 overflow-hidden relative">
                         <img 
                           src={project.image} 
                           alt={project.title} 
                           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" 
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                         <span className="text-xs font-bold text-brand-400 uppercase tracking-wide mb-2">{project.category}</span>
                         <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                         <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                            <span className="text-accent-emerald font-semibold text-sm">{project.stat}</span>
                            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-600 transition-colors">
                               <ArrowUpRight className="h-4 w-4 text-white" />
                            </div>
                         </div>
                      </div>
                   </div>
                ))}
             </div>
          </div>
       </section>
    </div>
  );
};