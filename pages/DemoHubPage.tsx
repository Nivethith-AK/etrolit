import React, { useState, useEffect } from 'react';
import { 
  Bot, 
  Zap, 
  Shield, 
  BarChart3, 
  ArrowRight, 
  Sparkles, 
  Calendar,
  Layers,
  Play,
  ChevronLeft,
  Mail,
  Phone,
  Clock,
  Video,
  User,
  Send,
  CheckCircle,
  Loader2,
  Activity,
  Target,
  Database
} from 'lucide-react';

// --- Types ---
enum DemoView {
  SELECTION = 'SELECTION',
  PRE_RECORDED = 'PRE_RECORDED',
  LIVE = 'LIVE'
}

interface DemoVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  category: string;
}

// --- Data ---
const PRE_RECORDED_DEMOS: DemoVideo[] = [
  {
    id: '1',
    title: 'E-commerce Support Bot',
    category: 'Customer Experience',
    description: 'Advanced NLP bot that handles order tracking and returns 24/7 with human-like reasoning.',
    thumbnail: 'https://images.unsplash.com/photo-1531746790731-6c087fecd05a?q=80&w=800&auto=format&fit=crop',
    duration: '04:20'
  },
  {
    id: '2',
    title: 'Workflow Automator',
    category: 'Logistics',
    description: 'Seamless inventory synchronization across multiple sales channels and shipping partners.',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    duration: '03:15'
  },
  {
    id: '3',
    title: 'Sentiment & Insight Engine',
    category: 'Analytics',
    description: 'Real-time monitoring of customer feedback and market trends to predict demand spikes.',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    duration: '02:45'
  },
  {
    id: '4',
    title: 'Security & Fraud Shield',
    category: 'Security',
    description: 'AI-driven behavioral analysis to prevent fraudulent transactions before they occur.',
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop',
    duration: '05:10'
  }
];

// --- Sub-Components ---

const SelectionView = ({ onSelect }: { onSelect: (v: DemoView) => void }) => (
  <div className="max-w-5xl mx-auto text-center animate-fade-up">
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-brand-600 text-xs font-bold mb-8 shadow-sm">
      <Sparkles className="h-3.5 w-3.5" /> INTERACTIVE EXPERIENCE
    </div>
    <h1 className="text-4xl md:text-6xl font-display font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
      Experience the <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-cyan">Automated Future</span>
    </h1>
    <p className="text-xl text-slate-600 mb-16 max-w-2xl mx-auto font-medium">
      Choose your path. Explore our pre-built module library or schedule a deep-dive strategy session with our lead engineers.
    </p>

    <div className="grid md:grid-cols-2 gap-8">
      {/* Option 1: Pre-recorded */}
      <button 
        onClick={() => onSelect(DemoView.PRE_RECORDED)}
        className="group relative overflow-hidden bg-white/80 backdrop-blur-xl p-12 rounded-[40px] border border-white/40 hover:border-brand-300 transition-all duration-500 shadow-2xl shadow-slate-200/50 text-left hover:-translate-y-2"
      >
        <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 group-hover:scale-110 transition-all duration-700">
          <Video className="w-48 h-48 text-brand-700" />
        </div>
        <div className="w-16 h-16 bg-brand-50 text-brand-700 rounded-2xl flex items-center justify-center mb-8 border border-brand-100 group-hover:bg-brand-600 group-hover:text-white transition-all duration-500 shadow-sm">
          <Play className="h-6 w-6" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand-700 transition-colors">Watch Walkthroughs</h3>
        <p className="text-slate-600 mb-10 font-medium leading-relaxed">
          Instant access to our curated library of AI module walkthroughs. See ETROLIT in action without a call.
        </p>
        <div className="flex items-center text-brand-700 font-bold group-hover:translate-x-2 transition-transform">
          Watch Now <ArrowRight className="ml-2 h-5 w-5" />
        </div>
      </button>

      {/* Option 2: Live Demo */}
      <button 
        onClick={() => onSelect(DemoView.LIVE)}
        className="group relative overflow-hidden bg-white/80 backdrop-blur-xl p-12 rounded-[40px] border border-white/40 hover:border-brand-300 transition-all duration-500 shadow-2xl shadow-slate-200/50 text-left hover:-translate-y-2"
      >
        <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 group-hover:scale-110 transition-all duration-700">
          <Calendar className="w-48 h-48 text-brand-700" />
        </div>
        <div className="w-16 h-16 bg-brand-50 text-brand-700 rounded-2xl flex items-center justify-center mb-8 border border-brand-100 group-hover:bg-brand-600 group-hover:text-white transition-all duration-500 shadow-sm">
          <Calendar className="h-6 w-6" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand-700 transition-colors">Book Strategy Call</h3>
        <p className="text-slate-600 mb-10 font-medium leading-relaxed">
          A one-on-one session with senior architects to audit your stack and map out a custom automation roadmap.
        </p>
        <div className="flex items-center text-brand-700 font-bold group-hover:translate-x-2 transition-transform">
          Schedule Session <ArrowRight className="ml-2 h-5 w-5" />
        </div>
      </button>
    </div>
  </div>
);

const PreRecordedSection = ({ onBack, onSwitchLive }: { onBack: () => void; onSwitchLive: () => void }) => {
  const [selectedDemo, setSelectedDemo] = useState<DemoVideo>(PRE_RECORDED_DEMOS[0]);

  return (
    <div className="max-w-6xl mx-auto animate-fade-up">
      <div className="flex items-center justify-between mb-10">
        <button 
          onClick={onBack}
          className="flex items-center text-slate-600 hover:text-brand-600 font-bold transition-colors group"
        >
          <ChevronLeft className="mr-1 h-5 w-5 group-hover:-translate-x-1 transition-transform" /> Back
        </button>
        <div className="flex items-center gap-3">
           <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
           <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest font-mono">Module Library</h2>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Player */}
        <div className="lg:col-span-8">
          <div className="bg-slate-950 rounded-[32px] overflow-hidden shadow-2xl aspect-video relative group border border-white/5">
            <img 
              src={selectedDemo.thumbnail} 
              alt={selectedDemo.title}
              className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-[1500ms]"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-colors">
              <button className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white text-3xl shadow-2xl hover:scale-110 transition-transform border border-white/20">
                <Play className="h-10 w-10 fill-current ml-2" />
              </button>
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
               <div className="px-4 py-1.5 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white uppercase tracking-[0.2em]">
                  Encrypted Stream Active
               </div>
            </div>
          </div>
          <div className="mt-8 px-2">
            <span className="text-brand-600 font-bold text-xs uppercase tracking-[0.25em] mb-4 block">{selectedDemo.category}</span>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">{selectedDemo.title}</h1>
            <p className="text-slate-600 text-lg leading-relaxed font-medium max-w-2xl">
              {selectedDemo.description}
            </p>
          </div>
        </div>

        {/* Playlist */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white/80 backdrop-blur-xl p-8 rounded-[32px] shadow-xl border border-white/40">
            <h3 className="font-bold text-slate-900 mb-6 flex items-center text-lg">
              <Layers className="mr-3 text-brand-600 h-5 w-5" /> Module Selection
            </h3>
            <div className="space-y-4">
              {PRE_RECORDED_DEMOS.map((demo) => (
                <button
                  key={demo.id}
                  onClick={() => setSelectedDemo(demo)}
                  className={`w-full text-left p-4 rounded-2xl transition-all flex items-start gap-4 border ${
                    selectedDemo.id === demo.id 
                    ? 'bg-brand-50 border-brand-200 shadow-md ring-1 ring-brand-100' 
                    : 'bg-white border-transparent hover:border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="w-20 h-14 bg-slate-200 rounded-xl overflow-hidden flex-shrink-0 shadow-inner">
                    <img src={demo.thumbnail} alt={demo.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <p className={`font-bold text-sm truncate ${selectedDemo.id === demo.id ? 'text-brand-700' : 'text-slate-900'}`}>
                      {demo.title}
                    </p>
                    <div className="flex items-center gap-1.5 mt-1">
                      <Clock className="h-3 w-3 text-slate-400" />
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{demo.duration}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 p-8 rounded-[32px] text-white shadow-2xl relative overflow-hidden group border border-white/10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500 opacity-20 blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000"></div>
            <h4 className="font-bold text-xl mb-3 relative z-10">Custom Built?</h4>
            <p className="text-slate-400 text-sm mb-8 font-medium relative z-10 leading-relaxed">
              Our library is just a fraction of our capability. Book a session to discuss proprietary solutions.
            </p>
            <button 
              onClick={onSwitchLive}
              className="w-full bg-brand-600 text-white py-4 rounded-xl font-bold text-sm hover:bg-brand-500 transition-all shadow-lg active:scale-95"
            >
              Switch to Live Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const LiveDemoForm = ({ onBack }: { onBack: () => void }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    schedule: '',
    description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://etrolit.io/api/contact2.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          schedule: formData.schedule,
          description: formData.description
        })
      });

      const result = await response.json();

      if (!response.ok || !result?.success) {
        throw new Error(result?.message || 'Submission failed.');
      }

      setIsSuccess(true);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Submission failed.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="max-w-xl mx-auto text-center py-20 animate-fade-up">
        <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-10 border border-emerald-200 shadow-xl shadow-emerald-500/10">
           <CheckCircle className="h-12 w-12 text-emerald-600" />
        </div>
        <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">You're All Set!</h2>
        <p className="text-slate-600 mb-12 font-medium text-lg">
          An ETROLIT representative will contact you via email within the next few hours to confirm your invitation.
        </p>
        <button onClick={onBack} className="px-12 py-5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all shadow-2xl active:scale-95">
          Return to Hub
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto animate-fade-up">
      <button 
        onClick={onBack}
        className="flex items-center text-slate-600 hover:text-brand-600 font-bold transition-colors group mb-8"
      >
        <ChevronLeft className="mr-1 h-5 w-5 group-hover:-translate-x-1 transition-transform" /> Back
      </button>

      <div className="bg-white/80 backdrop-blur-xl rounded-[48px] shadow-3xl overflow-hidden border border-white/60 grid lg:grid-cols-5 min-h-[650px]">
        {/* Value Sidebar */}
        <div className="lg:col-span-2 bg-slate-950 p-12 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-brand-600 opacity-20 blur-[100px]"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 leading-tight">Secure Your <br/><span className="text-brand-400">Strategy Call</span></h2>
            <p className="text-slate-400 mb-12 font-medium leading-relaxed opacity-90">
              Audit your infrastructure and map out an autonomous AI roadmap with our senior engineering team.
            </p>

            <ul className="space-y-10">
              <li className="flex items-start">
                <div className="w-12 h-12 rounded-2xl bg-brand-500/10 flex items-center justify-center text-brand-400 mr-6 mt-1 border border-brand-500/20">
                  <Activity className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Stack Audit</h4>
                  <p className="text-slate-500 text-sm font-medium">Identifying bottlenecks in your current CRM and OMS.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-accent-cyan mr-6 mt-1 border border-cyan-500/20">
                  <Target className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">ROI Projections</h4>
                  <p className="text-slate-500 text-sm font-medium">Calculated savings on support and fulfillment ops.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-12 pt-10 border-t border-white/5 relative z-10">
             <p className="text-xs text-slate-500 font-bold tracking-widest uppercase mb-4">Trusted Engineering</p>
             <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/150?u=et_${i}`} className="w-10 h-10 rounded-full border-2 border-slate-950" alt="team" />
                ))}
                <div className="w-10 h-10 rounded-full bg-brand-600 border-2 border-slate-950 flex items-center justify-center text-[10px] font-bold text-white">
                  +2k
                </div>
             </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="lg:col-span-3 p-12 bg-white/40">
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div className="col-span-2 md:col-span-1 space-y-2">
              <label className="text-xs font-bold text-slate-500 ml-1 uppercase tracking-widest">Full Name</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-brand-600 transition-colors" />
                <input required type="text" placeholder="John Doe" className="w-full bg-white/50 border border-slate-200 rounded-2xl pl-12 pr-4 py-4 focus:bg-white focus:border-brand-500 outline-none transition-all font-medium text-slate-900 shadow-sm" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 space-y-2">
              <label className="text-xs font-bold text-slate-500 ml-1 uppercase tracking-widest">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-brand-600 transition-colors" />
                <input required type="email" placeholder="john@company.com" className="w-full bg-white/50 border border-slate-200 rounded-2xl pl-12 pr-4 py-4 focus:bg-white focus:border-brand-500 outline-none transition-all font-medium text-slate-900 shadow-sm" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-8">
            <div className="col-span-2 md:col-span-1 space-y-2">
              <label className="text-xs font-bold text-slate-500 ml-1 uppercase tracking-widest">Phone Number</label>
              <div className="relative group">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-brand-600 transition-colors" />
                <input required type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-white/50 border border-slate-200 rounded-2xl pl-12 pr-4 py-4 focus:bg-white focus:border-brand-500 outline-none transition-all font-medium text-slate-900 shadow-sm" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 space-y-2">
              <label className="text-xs font-bold text-slate-500 ml-1 uppercase tracking-widest">Preferred Date</label>
              <div className="relative group">
                <Clock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-brand-600 transition-colors" />
                <input required type="datetime-local" className="w-full bg-white/50 border border-slate-200 rounded-2xl pl-12 pr-4 py-4 focus:bg-white focus:border-brand-500 outline-none transition-all font-medium text-slate-900 shadow-sm" value={formData.schedule} onChange={e => setFormData({...formData, schedule: e.target.value})} />
              </div>
            </div>
          </div>

          <div className="mb-10 space-y-2">
            <label className="text-xs font-bold text-slate-500 ml-1 uppercase tracking-widest">How can we help?</label>
            <textarea rows={4} placeholder="Tell us about your operational bottlenecks..." className="w-full bg-white/50 border border-slate-200 rounded-2xl px-6 py-5 focus:bg-white focus:border-brand-500 outline-none transition-all resize-none font-medium text-slate-900 shadow-sm" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})}></textarea>
          </div>

          {errorMessage && (
            <p className="mb-4 text-sm font-semibold text-red-600">{errorMessage}</p>
          )}
          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-brand-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-brand-700 transition-all shadow-xl shadow-brand-600/30 flex items-center justify-center group active:scale-[0.98] disabled:opacity-70"
          >
            {isSubmitting ? <Loader2 className="h-6 w-6 animate-spin" /> : <>Request Invitaiton <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>}
          </button>
        </form>
      </div>
    </div>
  );
};

// --- Page Wrapper ---

export const DemoHubPage: React.FC = () => {
  const [view, setView] = useState<DemoView>(DemoView.SELECTION);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  return (
    <div className="min-h-screen bg-page pt-44 pb-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-brand-200/20 rounded-full blur-[180px] animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-cyan-200/20 rounded-full blur-[140px] animate-blob delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {view === DemoView.SELECTION && <SelectionView onSelect={setView} />}
        {view === DemoView.PRE_RECORDED && (
          <PreRecordedSection
            onBack={() => setView(DemoView.SELECTION)}
            onSwitchLive={() => setView(DemoView.LIVE)}
          />
        )}
        {view === DemoView.LIVE && <LiveDemoForm onBack={() => setView(DemoView.SELECTION)} />}

        {/* Ecosystem Upsell Section (Static) */}
        {view === DemoView.SELECTION && (
          <div className="mt-40 animate-fade-up delay-700">
             <div className="text-center mb-16">
                <h2 className="text-3xl font-display font-bold text-slate-900">Explore Our Ecosystem</h2>
                <p className="text-slate-500 font-medium max-w-xl mx-auto mt-4">
                  Beyond individual modules, we provide a unified intelligence layer for your entire commerce operation.
                </p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Database, title: "Data Analytics", desc: "Real-time visualization of KPIs." },
                  { icon: Zap, title: "Rapid Deploy", desc: "Live in weeks, not months." },
                  { icon: Shield, title: "Compliance", desc: "Enterprise-grade data security." },
                  { icon: Bot, title: "LLM Training", desc: "Models fine-tuned on your data." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/60 backdrop-blur-md p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group">
                     <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                        <item.icon className="h-6 w-6" />
                     </div>
                     <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                     <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                  </div>
                ))}
             </div>
          </div>
        )}
      </div>
    </div>
  );
};