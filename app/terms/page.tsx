export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Header */}
      <header className="relative z-10 pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
              Terms of Service
            </span>
          </h1>
        </div>
      </header>

      {/* Content */}
      <article className="relative z-10 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 md:p-10 shadow-2xl">
            <div className="prose prose-lg prose-dark max-w-none space-y-6 text-white/90">
          <section>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Moby Labs website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">2. Use of Services</h2>
            <p>
              Moby Labs provides AI-powered whale detection technology and related services. You agree to use our services only for lawful purposes and in accordance with these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">3. Intellectual Property</h2>
            <p>
              All content, technology, and materials on this website are the property of Moby Labs and are protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">4. Disclaimer of Warranties</h2>
            <p>
              Our services are provided "as is" without warranties of any kind, either express or implied. Moby Labs does not guarantee that our services will be uninterrupted or error-free.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">5. Limitation of Liability</h2>
            <p>
              Moby Labs shall not be liable for any indirect, incidental, special, or consequential damages arising from the use or inability to use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">6. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">7. Contact</h2>
            <p>
              For questions about these Terms of Service, please contact us at{" "}
              <a href="mailto:contact@mobylabs.org" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                contact@mobylabs.org
              </a>
            </p>
          </section>

          <p className="text-sm text-white/40 mt-8">
            Last updated: January 8, 2026
          </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
