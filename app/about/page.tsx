import { Profile } from "@/components/about/Profile";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen relative">
      {/* Animated mesh gradient background - matching Hero */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]" />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
      </div>

      {/* Floating particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-cyan-400/40 rounded-full animate-float" />
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-blue-400/30 rounded-full animate-float-delayed" />
        <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-cyan-300/50 rounded-full animate-float" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Header Section */}
        <section className="pt-32 px-6">
          <div className="max-w-7xl mx-auto text-center">

            {/* Main headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[0.95] tracking-tight">
              <span className="block bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
                Who Are We?
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-white/80 mb-6 max-w-3xl mx-auto font-light leading-relaxed">
              Two dudes trying to save the whales
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-10 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <Profile
                name="Matthew Li"
                role="Co-Founder & CEO"
                bio="Hi! I'm Matthew, and I'm pretty good at AI stuff."
                imgSrc="/ML.png"
                skills={["AI/ML", "Computer Vision"]}
                website="https://www.linkedin.com/in/matthew-li-a49516258/"
              />
              <Profile
                name="Taha Rawjani"
                role="Co-Founder & CTO"
                bio="Hi! I'm Taha, and I'm pretty good at embedded stuff."
                imgSrc="/TR.jpg"
                skills={["Research", "Embedded Systems"]}
                website="https://taharawjani.org"
              />
            </div>
          </div>
        </section>

        

        <Footer />
      </div>
    </div>
  );
}
