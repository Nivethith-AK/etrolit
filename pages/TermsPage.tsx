import React, { useEffect } from 'react';

export const TermsPage: React.FC = () => {
    useEffect(() => {
        document.title = 'Terms of Service | ETROLIT';

        const setMeta = (name: string, content: string, isProperty = false) => {
            const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
            let meta = document.head.querySelector(selector) as HTMLMetaElement | null;
            if (!meta) {
                meta = document.createElement('meta');
                if (isProperty) {
                    meta.setAttribute('property', name);
                } else {
                    meta.setAttribute('name', name);
                }
                document.head.appendChild(meta);
            }
            meta.setAttribute('content', content);
        };

        const description = 'Review ETROLIT’s Terms of Service for our AI project management, automation, and engineering solutions for e-commerce businesses.';
        setMeta('description', description);
        setMeta('robots', 'index, follow');
        setMeta('og:title', 'Terms of Service | ETROLIT', true);
        setMeta('og:description', description, true);
        setMeta('twitter:title', 'Terms of Service | ETROLIT');
        setMeta('twitter:description', description);

        let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', `${window.location.origin}/terms`);
    }, []);

  return (
        <div className="pt-28 md:pt-36 pb-12 md:pb-16 min-h-screen">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="mb-12 border-b border-slate-300 pb-8">
               <h1 className="text-4xl font-display font-bold text-slate-900 mb-4">Terms of Service</h1>
               <p className="text-slate-700">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>

           <div className="prose prose-slate prose-sm sm:prose-base max-w-none space-y-8 md:space-y-10 [&_h1]:!text-slate-900 [&_h2]:!text-slate-900 [&_h3]:!text-slate-900 [&_h4]:!text-slate-900 [&_p]:!text-slate-700 [&_li]:!text-slate-700 [&_th]:!text-slate-900 [&_td]:!text-slate-700">
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              These Terms of Service (“Terms”) govern your access to and use of ETROLIT’s website, AI tools, and services.
              By accessing or using our services, you agree to be bound by these Terms.
            </p>
            
            <div>
                <h3 className="text-xl font-bold text-white mb-4">1. About ETROLIT</h3>
                <p className="text-slate-400">ETROLIT provides AI project management, engineering services, AI chatbot solutions, workflow automation, and consulting services for e-commerce platforms.</p>
            </div>

            <div>
                <h3 className="text-xl font-bold text-white mb-4">2. Eligibility</h3>
                <p className="text-slate-400">You must be at least 18 years old to use our services. By using our services, you confirm that you meet this requirement.</p>
            </div>

            <div>
                <h3 className="text-xl font-bold text-white mb-4">3. Services</h3>
                <p className="text-slate-400 mb-2">ETROLIT provides:</p>
                <ul className="list-disc pl-5 text-slate-400 space-y-1 mb-4">
                    <li>AI chatbot and AI agent services</li>
                    <li>AI workflow automation</li>
                    <li>Custom AI solutions</li>
                    <li>AI consulting and strategy</li>
                    <li>Demo booking and consultation services</li>
                </ul>
                <p className="text-slate-400">Services may evolve or change without prior notice.</p>
            </div>

            <div>
                <h3 className="text-xl font-bold text-white mb-4">4. User Responsibilities</h3>
                <p className="text-slate-400 mb-2">You agree to:</p>
                <ul className="list-disc pl-5 text-slate-400 space-y-1 mb-4">
                    <li>Provide accurate and lawful information</li>
                    <li>Not misuse AI tools for illegal, harmful, or unethical purposes</li>
                    <li>Not attempt to disrupt or compromise platform security</li>
                    <li>Maintain confidentiality of any account credentials</li>
                </ul>
            </div>

            <div>
                <h3 className="text-xl font-bold text-white mb-4">5. AI Services Disclaimer</h3>
                <p className="text-slate-400">
                    AI-generated outputs are provided “as is” and may not be error-free. 
                    ETROLIT does not guarantee accuracy, completeness, or suitability of AI outputs for legal, financial, or medical decisions. 
                    You are responsible for validating outputs before use.
                </p>
            </div>

            <div>
                <h3 className="text-xl font-bold text-white mb-4">6. Intellectual Property</h3>
                <p className="text-slate-400">
                    All content, software, AI models, branding, and materials belong to ETROLIT or its licensors. 
                    You may not copy, reproduce, or distribute any content without prior written permission.
                </p>
            </div>

            <div>
                <h3 className="text-xl font-bold text-white mb-4">7. Payments and Fees (If Applicable)</h3>
                <p className="text-slate-400 mb-2">Where services are paid:</p>
                <ul className="list-disc pl-5 text-slate-400 space-y-1">
                    <li>Fees are communicated prior to engagement</li>
                    <li>Payments are non-refundable unless stated otherwise</li>
                    <li>Late payments may result in service suspension</li>
                </ul>
            </div>

            <div>
                <h3 className="text-xl font-bold text-white mb-4">8. Limitation of Liability</h3>
                <p className="text-slate-400 mb-2">To the maximum extent permitted by law, ETROLIT shall not be liable for:</p>
                <ul className="list-disc pl-5 text-slate-400 space-y-1 mb-4">
                    <li>Indirect or consequential damages</li>
                    <li>Loss of data, profits, or business opportunities</li>
                    <li>Errors arising from AI-generated outputs</li>
                </ul>
                <p className="text-slate-400">Total liability shall not exceed the amount paid for services in the preceding 12 months.</p>
            </div>

            <div>
                <h3 className="text-xl font-bold text-white mb-4">9. Termination</h3>
                <p className="text-slate-400">ETROLIT may suspend or terminate access if these Terms are violated. You may stop using our services at any time.</p>
            </div>

            <div>
                <h3 className="text-xl font-bold text-white mb-4">10. Privacy</h3>
                <p className="text-slate-400">Use of our services is subject to our Privacy Policy and Data Processing Agreement.</p>
            </div>

            <div>
                <h3 className="text-xl font-bold text-white mb-4">11. Third-Party Services</h3>
                <p className="text-slate-400">ETROLIT may integrate or link to third-party services. We are not responsible for their content or practices.</p>
            </div>

            <div>
                <h3 className="text-xl font-bold text-white mb-4">12. Governing Law</h3>
                <p className="text-slate-400">These Terms shall be governed by the laws of the United Kingdom.</p>
            </div>

            <div>
                <h3 className="text-xl font-bold text-white mb-4">13. Contact</h3>
                <p className="text-slate-400">For questions or legal notices, contact: <span className="text-brand-400 font-medium">support@etrolit.io</span></p>
            </div>
        </div>
      </div>
    </div>
  );
};