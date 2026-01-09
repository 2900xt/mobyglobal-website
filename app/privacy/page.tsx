export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-blue-800 mb-4">1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, including name, email address, and any other information you choose to provide when contacting us or using our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-800 mb-4">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and improve our services</li>
              <li>Respond to your inquiries and requests</li>
              <li>Send you updates about our technology and services</li>
              <li>Analyze usage patterns to enhance user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-800 mb-4">3. Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share information with service providers who assist us in operating our website and conducting our business, subject to confidentiality obligations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-800 mb-4">4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-800 mb-4">5. Cookies</h2>
            <p>
              Our website may use cookies to enhance your experience. You can choose to disable cookies through your browser settings, though this may affect website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-800 mb-4">6. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information. Contact us at{" "}
              <a href="mailto:contact@mobylabs.org" className="text-blue-600 hover:underline">
                contact@mobylabs.org
              </a>{" "}
              to exercise these rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-800 mb-4">7. Children's Privacy</h2>
            <p>
              Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-800 mb-4">8. Changes to Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-800 mb-4">9. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:contact@mobylabs.org" className="text-blue-600 hover:underline">
                contact@mobylabs.org
              </a>
            </p>
          </section>

          <p className="text-sm text-gray-500 mt-8">
            Last updated: January 8, 2026
          </p>
        </div>
      </div>
    </div>
  );
}
