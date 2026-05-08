import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Bot, Sparkles } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

// --- Embedded Chat (Contact Section) ---
export const EmbeddedChatbot: React.FC = () => {
  const [messages, setMessages] = useState<{role: 'user' | 'agent', text: string}[]>([
    { role: 'agent', text: "Hello! I'm the ETROLIT AI Agent. I can help you understand our services or schedule a demo. How can I assist you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMessage = { role: 'user' as const, text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      // Initialize Gemini AI client with the provided API key from environment variables
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // Requesting content generation with chat history
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: messages.concat(userMessage).map(msg => ({
          role: msg.role === 'agent' ? 'model' : 'user',
          parts: [{ text: msg.text }]
        })),
        config: {
          systemInstruction: "You are the ETROLIT AI Agent. ETROLIT is an AI Project Management & Engineering Agency specializing in E-commerce platforms. Your expertise includes AI Chatbot Development, Workflow Automation, Custom AI Solutions, and Strategic AI Consulting. You aim to help business owners automate workflows, reduce support costs, and scale effectively. Encourage users to book a demo at /book-demo. Maintain a professional, technical, yet friendly tone."
        }
      });

      // Safely extracting the text property from the response
      const aiText = response.text || "I'm sorry, I'm having trouble thinking right now. Please try again or contact our support team.";
      setMessages(prev => [...prev, { role: 'agent', text: aiText }]);
    } catch (error) {
      console.error("Gemini AI failed:", error);
      setMessages(prev => [...prev, { role: 'agent', text: "I encountered an error connecting to my neural network. Please try again later or email us at support@etrolit.io." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-950">
      {/* Header */}
      <div className="p-4 bg-slate-900 border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-600 to-accent-cyan flex items-center justify-center shadow-lg shadow-brand-500/20">
              <Bot className="h-6 w-6 text-white" />
            </div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-accent-emerald rounded-full border-2 border-slate-900"></div>
          </div>
          <div>
            <h3 className="font-bold text-white">ETROLIT Agent</h3>
            <p className="text-xs text-brand-400 flex items-center gap-1">
              <Sparkles className="h-3 w-3" /> AI Powered
            </p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-grow overflow-y-auto p-4 space-y-4" ref={scrollRef}>
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] rounded-2xl px-4 py-3 shadow-md ${
              msg.role === 'user' 
                ? 'bg-brand-600 text-white rounded-br-none' 
                : 'bg-slate-900 border border-white/5 text-slate-200 rounded-bl-none'
            }`}>
              <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
            </div>
          </div>
        ))}
        {isTyping && (
           <div className="flex justify-start">
             <div className="bg-slate-900 border border-white/5 rounded-2xl rounded-bl-none px-4 py-3 flex items-center gap-1">
               <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"></span>
               <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce delay-75"></span>
               <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce delay-150"></span>
             </div>
           </div>
        )}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-white/5 bg-slate-900">
        <div className="flex items-center gap-2">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && !isTyping && handleSend()}
            placeholder="Type your message..."
            className="flex-grow bg-slate-950 border border-slate-800 rounded-full px-4 py-2 text-white focus:outline-none focus:border-brand-500 text-sm placeholder:text-slate-600"
          />
          <button 
            onClick={handleSend}
            disabled={isTyping}
            className="p-2 rounded-full bg-brand-600 hover:bg-brand-500 disabled:bg-brand-600/50 text-white transition-colors shadow-lg shadow-brand-500/20"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Floating Widget (Global) ---
export const FloatingChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-80 h-96 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 animate-in slide-in-from-bottom-5 fade-in duration-300">
           <div className="h-full relative">
             <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 z-10 p-1 rounded-full hover:bg-white/10 text-white"
             >
               <X className="h-4 w-4" />
             </button>
             <EmbeddedChatbot />
           </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-white border border-slate-200 shadow-[0_0_20px_rgba(37,99,235,0.25)] flex items-center justify-center transition-transform hover:scale-110"
          aria-label="Open ETROLIT assistant"
        >
          <img src="/logo.png?v=2" alt="ETROLIT logo" className="w-8 h-8 object-contain" />
        </button>
      )}
    </div>
  );
};