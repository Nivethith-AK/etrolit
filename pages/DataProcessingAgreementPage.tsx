import React, { useEffect } from 'react';

export const DataProcessingAgreementPage: React.FC = () => {
    useEffect(() => {
        document.title = 'Data Processing Agreement | ETROLIT';

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

        const description = 'Read ETROLIT’s Data Processing Agreement outlining GDPR/UK GDPR/PDPL processing obligations, security controls, and data subject rights support.';
        setMeta('description', description);
        setMeta('robots', 'index, follow');
        setMeta('og:title', 'Data Processing Agreement | ETROLIT', true);
        setMeta('og:description', description, true);
        setMeta('twitter:title', 'Data Processing Agreement | ETROLIT');
        setMeta('twitter:description', description);

        let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', `${window.location.origin}/data-processing-agreement`);
    }, []);

  return (
        <div className="pt-28 md:pt-36 pb-12 md:pb-16 min-h-screen">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="mb-12 border-b border-slate-300 pb-8">
               <h1 className="text-4xl font-display font-bold text-slate-900 mb-4">Data Processing Agreement</h1>
               <p className="text-slate-700">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>

           <div className="prose prose-slate prose-sm sm:prose-base max-w-none space-y-8 md:space-y-10 [&_h1]:!text-slate-900 [&_h2]:!text-slate-900 [&_h3]:!text-slate-900 [&_h4]:!text-slate-900 [&_p]:!text-slate-700 [&_li]:!text-slate-700 [&_th]:!text-slate-900 [&_td]:!text-slate-700">
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              This Data Processing Agreement (“Agreement”) forms part of the agreement between ETROLIT (“Processor”) and the customer or user (“Controller”) and applies where ETROLIT processes personal data on behalf of the Controller in connection with its services.
            </p>

            <div>
                <h3 className="text-xl font-bold text-white mb-4">1. Definitions</h3>
                <ul className="list-disc pl-5 text-slate-400 space-y-1">
                    <li><strong>Applicable Data Protection Laws:</strong> GDPR, UK GDPR, and UAE PDPL.</li>
                    <li><strong>Personal Data:</strong> Any information relating to an identified or identifiable natural person.</li>
                    <li><strong>Processing:</strong> Any operation performed on personal data.</li>
                    <li><strong>Controller:</strong> The party determining the purposes and means of processing.</li>
                    <li><strong>Processor:</strong> ETROLIT, processing data on behalf of the Controller.</li>
                </ul>
            </div>

            <div>
                <h3 className="text-xl font-bold text-white mb-4">2. Scope and Purpose of Processing</h3>
                <p className="text-slate-400 mb-2">ETROLIT processes personal data solely for the purpose of providing:</p>
                <ul className="list-disc pl-5 text-slate-400 space-y-1 mb-4">
                    <li>AI chatbot and AI agent services</li>
                    <li>Demo booking and consultation services</li>
                    <li>AI project management and engineering services</li>
                    <li>Customer communication and support</li>
                </ul>
                <p className="text-slate-400">Processing activities include collection, storage, analysis, and deletion of data as required to deliver services.</p>
            </div>

            <div>
                <h3 className="text-xl font-bold text-white mb-4">3. Types of Personal Data</h3>
                <p className="text-slate-400 mb-2">Depending on service usage, ETROLIT may process:</p>
                <ul className="list-disc pl-5 text-slate-400 space-y-1 mb-4">
                    <li>Names</li>
                    <li>Email addresses</li>
                    <li>Phone numbers</li>
                    <li>Business information</li>
                    <li>Messages and inputs submitted through AI tools</li>
                    <li>Technical and usage data</li>
                </ul>
            </div>

            <div>
                <h3 className="text-xl font-bold text-white mb-4">4. Processor Obligations</h3>
                <p className="text-slate-400 mb-2">ETROLIT shall:</p>
                <ul className="list-disc pl-5 text-slate-400 space-y-1 mb-4">
                    <li>Process personal data only on documented instructions from the Controller</li>
                    <li>Ensure confidentiality of personal data</li>
                    <li>Implement appropriate technical and organizational security measures</li>
                    <li>Assist the Controller in fulfilling data subject rights requests</li>
                    <li>Assist with data protection impact assessments where applicable</li>
                    <li>Notify the Controller without undue delay of any personal data breach</li>
                </ul>
            </div>

            <div>
                <h3 className="text-xl font-bold text-white mb-4">5. Sub-Processors</h3>
                <p className="text-slate-400 mb-4">
                    The Controller authorizes ETROLIT to engage sub-processors for hosting, analytics, communication tools, and infrastructure services. 
                    ETROLIT ensures all sub-processors are bound by data protection obligations no less protective than this Agreement.
                </p>
            </div>

            <div>
                <h3 className="text-xl font-bold text-white mb-4">6. Data Security Measures</h3>
                <p className="text-slate-400 mb-2">ETROLIT implements safeguards including:</p>
                <ul className="list-disc pl-5 text-slate-400 space-y-1 mb-4">
                    <li>Access control and authentication</li>
                    <li>Encrypted data transmission where applicable</li>
                    <li>Secure hosting environments</li>
                    <li>Regular system monitoring</li>
                </ul>
                <p className="text-slate-400">No system is completely secure, and ETROLIT does not guarantee absolute security.</p>
            </div>

            <div>
                <h3 className="text-xl font-bold text-white mb-4">7. Data Subject Rights</h3>
                <p className="text-slate-400 mb-2">ETROLIT shall assist the Controller in responding to requests relating to:</p>
                <ul className="list-disc pl-5 text-slate-400 space-y-1 mb-4">
                    <li>Access</li>
                    <li>Rectification</li>
                    <li>Erasure</li>
                    <li>Restriction</li>
                    <li>Objection</li>
                    <li>Data portability</li>
                </ul>
            </div>

            <div>
                <h3 className="text-xl font-bold text-white mb-4">8. Data Transfers</h3>
                <p className="text-slate-400">Where personal data is transferred outside the EEA, UK, or UAE, ETROLIT ensures appropriate safeguards are in place.</p>
            </div>

            <div>
                <h3 className="text-xl font-bold text-white mb-4">9. Data Retention and Deletion</h3>
                <p className="text-slate-400">Upon termination of services or written request, ETROLIT shall delete or return personal data unless retention is required by law.</p>
            </div>

            <div>
                <h3 className="text-xl font-bold text-white mb-4">10. Liability</h3>
                <p className="text-slate-400">Each party shall be liable for damages caused by its own breach of this Agreement or applicable data protection laws.</p>
            </div>

            <div>
                <h3 className="text-xl font-bold text-white mb-4">11. Governing Law</h3>
                <p className="text-slate-400">This Agreement shall be governed by the laws of the United Kingdom.</p>
            </div>
            
        </div>
      </div>
    </div>
  );
};