export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-blue-800 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Moby Labs website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-800 mb-4">2. Use of Services</h2>
            <p>
              Moby Labs provides AI-powered whale detection technology and related services. You agree to use our services only for lawful purposes and in accordance with these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-800 mb-4">3. Intellectual Property</h2>
            <p>
              All content, technology, and materials on this website are the property of Moby Labs and are protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-800 mb-4">4. Disclaimer of Warranties</h2>
            <p>
              Our services are provided "as is" without warranties of any kind, either express or implied. Moby Labs does not guarantee that our services will be uninterrupted or error-free.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-800 mb-4">5. Limitation of Liability</h2>
            <p>
              Moby Labs shall not be liable for any indirect, incidental, special, or consequential damages arising from the use or inability to use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-800 mb-4">6. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-800 mb-4">7. Contact</h2>
            <p>
              For questions about these Terms of Service, please contact us at{" "}
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
