import React, { useEffect } from 'react';

export const PrivacyPolicyPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Privacy Policy | ETROLIT';

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

    const description = 'Read ETROLIT’s Privacy Policy to understand how we collect, process, and protect personal data across our AI engineering and automation services.';
    setMeta('description', description);
    setMeta('robots', 'index, follow');
    setMeta('og:title', 'Privacy Policy | ETROLIT', true);
    setMeta('og:description', description, true);
    setMeta('twitter:title', 'Privacy Policy | ETROLIT');
    setMeta('twitter:description', description);

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${window.location.origin}/privacy-policy`);
  }, []);

  return (
    <div className="pt-28 md:pt-36 pb-12 md:pb-16 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="mb-12 border-b border-slate-300 pb-8">
             <h1 className="text-4xl font-display font-bold text-slate-900 mb-4">Privacy Policy</h1>
             <p className="text-slate-700">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>
        
           <div className="prose prose-slate prose-sm sm:prose-base max-w-none space-y-8 md:space-y-10 [&_h1]:!text-slate-900 [&_h2]:!text-slate-900 [&_h3]:!text-slate-900 [&_h4]:!text-slate-900 [&_p]:!text-slate-700 [&_li]:!text-slate-700 [&_th]:!text-slate-900 [&_td]:!text-slate-700">
            
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Purpose of This Privacy Policy</h3>
              <p className="text-slate-400 mb-4">ETROLIT respects your privacy and is committed to protecting your personal data.</p>
              <p className="text-slate-400">
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, interact with our AI tools, or submit information through our forms. It also informs you of your privacy rights and how applicable data protection laws protect you.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">Important Information</h3>
              <p className="text-slate-400 mb-4">
                This Privacy Policy aims to give you information on how ETROLIT collects and processes your personal data through your use of our website, including any data you may provide when you:
              </p>
              <ul className="list-disc pl-5 text-slate-400 space-y-1 mb-4">
                <li>Book a demo</li>
                <li>Contact us</li>
                <li>Interact with our AI chatbot or AI agent</li>
                <li>Sign in or register (if applicable)</li>
                <li>Communicate with us for services, support, or inquiries</li>
              </ul>
              <p className="text-slate-400 mb-2">Our website includes:</p>
              <ul className="list-disc pl-5 text-slate-400 space-y-1 mb-4">
                <li>A single-page homepage</li>
                <li>Dedicated Services page</li>
                <li>Book a Demo page</li>
                <li>Terms & Conditions page</li>
              </ul>
              <p className="text-slate-400">
                This website is not intended for children, and we do not knowingly collect personal data from children.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">Contact Details</h3>
              <p className="text-slate-400 mb-4">If you have any questions about this Privacy Policy or our privacy practices, please contact us using the details below:</p>
              <div className="bg-slate-100 p-6 rounded-lg border border-slate-300">
                <p className="text-slate-700"><span className="font-semibold text-slate-900">Legal Entity Name:</span> ETROLIT.IO</p>
                <p className="text-slate-700"><span className="font-semibold text-slate-900">Business Description:</span> AI Project Management & Engineering Agency for E-commerce Platforms</p>
                <p className="text-slate-700"><span className="font-semibold text-slate-900">Email Address:</span> support@etrolit.io</p>
              </div>
              <p className="text-slate-400 mt-4">
                You have the right to make a complaint at any time to your local data protection authority. We would, however, appreciate the opportunity to address your concerns directly before you contact a regulator, so please contact us first.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">Information We Collect</h3>
              <h4 className="text-lg font-semibold text-white mb-2">Information You Provide Directly</h4>
              <p className="text-slate-400 mb-4">We may collect personal information that you voluntarily provide to us, including:</p>
              <ul className="list-disc pl-5 text-slate-400 space-y-1 mb-6">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Preferred date and time (for demo bookings)</li>
                <li>Any information submitted through Book a Demo form, Contact section, AI chatbot interactions, or Feedback channels.</li>
              </ul>

              <h4 className="text-lg font-semibold text-white mb-2">Technical Information We Collect Automatically</h4>
              <p className="text-slate-400 mb-4">
                When you visit or interact with the ETROLIT website, we may automatically collect technical data, including:
              </p>
              <ul className="list-disc pl-5 text-slate-400 space-y-1 mb-4">
                <li>IP address</li>
                <li>Device identifiers</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referring URLs</li>
                <li>Pages viewed and time spent</li>
                <li>Metadata and usage behavior</li>
              </ul>
              <p className="text-slate-400">
                This data helps us understand how visitors use our website and allows us to improve performance, security, and user experience.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">Analytics and Third-Party Tools</h3>
              <p className="text-slate-400">
                We use third-party analytics tools to measure website usage and interaction patterns. These tools may collect information sent by your device or browser, including usage data and technical identifiers, to help us improve our services and website functionality.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">How We Use Your Information</h3>
              <p className="text-slate-400 mb-4">We use your personal data for the following purposes:</p>
              <ul className="list-disc pl-5 text-slate-400 space-y-1">
                <li>To respond to demo requests and inquiries</li>
                <li>To communicate with you about our services</li>
                <li>To provide access to AI chatbot and AI agent interactions</li>
                <li>To improve website functionality, content, and user experience</li>
                <li>To monitor website traffic, usage patterns, and performance</li>
                <li>To diagnose technical issues and ensure platform security</li>
                <li>To develop, test, and improve new features and services</li>
                <li>To comply with legal and regulatory obligations</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">Lawful Bases for Processing</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-slate-400 border-collapse">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="py-2 font-semibold text-white">Purpose</th>
                      <th className="py-2 font-semibold text-white">Lawful Basis</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    <tr><td className="py-2">Booking demos and responding to inquiries</td><td className="py-2">Performance of a contract</td></tr>
                    <tr><td className="py-2">Providing services and communications</td><td className="py-2">Performance of a contract</td></tr>
                    <tr><td className="py-2">Website analytics and optimization</td><td className="py-2">Legitimate interests</td></tr>
                    <tr><td className="py-2">Security, fraud prevention, and IT maintenance</td><td className="py-2">Legitimate interests</td></tr>
                    <tr><td className="py-2">Legal and regulatory compliance</td><td className="py-2">Legal obligation</td></tr>
                    <tr><td className="py-2">Marketing communications</td><td className="py-2">Consent / Legitimate interests</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">Marketing Communications</h3>
              <p className="text-slate-400 mb-4">
                <strong>Promotional Messages:</strong> We may send you marketing communications about our services if you requested information or booked a demo, and you have not opted out of receiving such communications.
              </p>
              <p className="text-slate-400">
                <strong>Opting Out:</strong> You can opt out of marketing communications at any time by using the unsubscribe link in our emails, or contacting us at <span className="text-brand-400">support@etrolit.io</span>. Opting out of marketing messages will not affect service-related or transactional communications.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">Cookies</h3>
              <p className="text-slate-400">
                ETROLIT uses cookies and similar technologies to enhance website functionality and user experience. You can set your browser to refuse or alert you about cookies. If you disable cookies, some parts of the website may not function properly.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">Change of Purpose</h3>
              <p className="text-slate-400">
                We will only use your personal data for the purposes for which it was collected unless we reasonably consider another use to be compatible with the original purpose. If we need to use your data for an unrelated purpose, we will notify you and explain the legal basis.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">Sharing Your Information</h3>
              <p className="text-slate-400 mb-4">We do not sell or rent your personal data to third parties. We may share information only in the following circumstances:</p>
              <ul className="list-disc pl-5 text-slate-400 space-y-1">
                <li>With trusted service providers under confidentiality agreements</li>
                <li>With analytics and hosting providers to support website functionality</li>
                <li>When required by law or legal process</li>
                <li>To protect ETROLIT’s rights, property, or safety</li>
                <li>In anonymized or aggregated form for business insights</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">How We Store and Protect Your Information</h3>
              <p className="text-slate-400">
                We use commercially reasonable technical and organizational security measures to protect your personal data. However, no system is completely secure, and we cannot guarantee absolute security. You are responsible for keeping your account credentials confidential (if applicable). We may retain personal data for a reasonable period for legal, audit, or business purposes after interactions end.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">Data Retention & Deletion</h3>
              <p className="text-slate-400">
                If you wish to request deletion of your personal data, please contact us at: <span className="text-brand-400 font-medium">support@etrolit.io</span>. We will respond in accordance with applicable data protection laws.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">Children’s Privacy</h3>
              <p className="text-slate-400">
                ETROLIT does not knowingly collect personal data from children under the age of 13. If we become aware that such data has been collected without parental consent, we will delete it promptly. If you believe we may have collected information from a child, please contact us immediately.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">Third-Party Websites and Services</h3>
              <p className="text-slate-400">
                Our website may contain links to third-party websites or services. This Privacy Policy does not apply to those third parties, and we are not responsible for their privacy practices. We encourage you to review their privacy policies before providing any personal data.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">Your Data Protection Rights</h3>
              <p className="text-slate-400 mb-4">Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-5 text-slate-400 space-y-1 mb-4">
                <li>Access your personal data</li>
                <li>Request correction or updates</li>
                <li>Request deletion of your data</li>
                <li>Object to or restrict processing</li>
                <li>Request data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="text-slate-400">To exercise these rights, please contact us at <span className="text-brand-400 font-medium">support@etrolit.io</span></p>
            </div>

            <div className="pt-8 border-t border-slate-300">
              <h3 className="text-xl font-bold text-white mb-4">Changes to This Privacy Policy</h3>
              <p className="text-slate-400">
                ETROLIT may update this Privacy Policy from time to time. Any changes will be posted on this page, and where appropriate, we may notify you via email or website notice. Continued use of our website or services after changes indicates acceptance of the updated Privacy Policy.
              </p>
            </div>
            
        </div>
      </div>
    </div>
  );
};