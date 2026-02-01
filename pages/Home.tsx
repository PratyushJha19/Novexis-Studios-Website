import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Film, Cloud, Palette, Shield, Zap, Target, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero3D from '../components/Hero3D';

const Home = () => {
  return (
    <div className="relative bg-transparent min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-6 overflow-hidden">
        <Hero3D />
        
        <div className="relative z-10 max-w-7xl text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-[9rem] font-heading font-black tracking-tighter mb-8 leading-[0.85] uppercase">
              ARCHITECTURAL <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-white bg-clip-text text-transparent">
                PRECISION.
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-white/60 font-heading font-bold tracking-[0.2em] uppercase mt-8">
              Creative Strategy × Engineering Excellence
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="flex flex-col md:flex-row items-center justify-center gap-10 pt-10"
          >
            <Link to="/portfolio" className="group relative px-14 py-6 bg-white text-black font-bold rounded-full transition-all hover:scale-105 active:scale-95 text-[15px] uppercase tracking-[0.1em] shadow-2xl shadow-white/10">
                Explore Work
            </Link>
            <Link to="/contact" className="px-14 py-6 glass text-white font-bold rounded-full border border-white/20 hover:border-blue-500/50 transition-all hover:bg-blue-600/10 text-[15px] uppercase tracking-[0.1em]">
              Contact Us
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
            <span className="text-[14px] font-bold uppercase tracking-[0.5em] text-white/30">Scroll to Explore</span>
            <div className="w-1 h-20 rounded-full bg-gradient-to-b from-blue-600 to-transparent"></div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-40 px-6 max-w-7xl mx-auto bg-transparent">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="space-y-12">
            <h2 className="text-5xl md:text-7xl font-heading font-black tracking-tighter leading-[0.9] uppercase">SYSTEM-FIRST <br/>METHODOLOGY.</h2>
            <div className="space-y-8">
              <p className="text-2xl text-white/50 leading-relaxed font-light">
                Novexis Studios operates at the junction of high-fidelity aesthetics and enterprise-grade performance. We don't just build websites or videos; we engineer digital ecosystems that are scalable by design and visually uncompromised.
              </p>
              <p className="text-xl text-white/30 leading-relaxed font-light">
                Our team integrates the creative intuition of a production house with the technical rigor of a software engineering firm. Whether it's a cross-platform app or a global brand film, we treat every project as a piece of infrastructure.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 border border-blue-500/20">
                  <Shield size={32} />
                </div>
                <h4 className="font-heading font-black uppercase tracking-widest text-lg">Security Protocols</h4>
                <p className="text-base text-white/40 leading-relaxed font-medium">Encrypted data layers and resilient, failsafe infrastructure integrated into every deployment as a standard protocol.</p>
              </div>
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-purple-600/10 flex items-center justify-center text-purple-500 border border-purple-500/20">
                  <Cloud size={32} />
                </div>
                <h4 className="font-heading font-black uppercase tracking-widest text-lg">Scalable Cloud</h4>
                <p className="text-base text-white/40 leading-relaxed font-medium">Cloud-native architectures built for global deployment across AWS and GCP nodes, supporting millions of concurrent users.</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { icon: <Film size={32} />, title: "Media Artistry", text: "Cinema-grade video production and post-processing for digital brands." },
              { icon: <Code size={32} />, title: "Engineering", text: "Robust full-stack systems built for performance, security, and global scale." },
              { icon: <Palette size={32} />, title: "Design Systems", text: "Atomic design principles applied to visual identities and UI/UX architecture." },
              { icon: <Cloud size={32} />, title: "Automation", text: "Intelligent business logic and marketing automations powered by custom AI." },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -12 }}
                className="glass p-12 rounded-[2.5rem] border border-white/5 group hover:border-blue-500/40 transition-all duration-500 shadow-xl"
              >
                <div className="mb-8 text-blue-500 group-hover:scale-125 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-heading font-black mb-4 uppercase tracking-tighter">{item.title}</h3>
                <p className="text-sm text-white/50 font-semibold tracking-wide uppercase leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Novexis - Detailed Section */}
      <section className="py-40 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-8xl font-heading font-black tracking-tighter uppercase mb-6">WHY NOVEXIS.</h2>
          <p className="text-white/40 max-w-3xl mx-auto text-2xl font-light">We bridge the gap between creative vision and technical execution.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-8">
            <Zap className="text-blue-500" size={48} />
            <h3 className="text-3xl font-heading font-black uppercase tracking-tighter">Velocity</h3>
            <p className="text-white/50 leading-relaxed text-lg font-medium">We operate with the speed of a startup and the precision of an enterprise. Our automated pipelines allow us to deploy high-fidelity systems faster than traditional agencies.</p>
          </div>
          <div className="space-y-8">
            <Target className="text-purple-500" size={48} />
            <h3 className="text-3xl font-heading font-black uppercase tracking-tighter">Precision</h3>
            <p className="text-white/50 leading-relaxed text-lg font-medium">Every pixel and every line of code is intentional. We build custom solutions, not templates, ensuring your brand stands out in a crowded digital landscape.</p>
          </div>
          <div className="space-y-8">
            <Cpu className="text-white/60" size={48} />
            <h3 className="text-3xl font-heading font-black uppercase tracking-tighter">Ecosystems</h3>
            <p className="text-white/50 leading-relaxed text-lg font-medium">We don't deliver isolated assets. We build integrated ecosystems where your marketing, tech, and media work together to drive measurable growth.</p>
          </div>
        </div>
      </section>

      {/* CTA Section - Resized for Better Proportion */}
      <section className="py-24 px-6 relative overflow-hidden bg-transparent">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="relative z-10 max-w-5xl mx-auto glass p-16 md:p-20 rounded-[3rem] text-center border border-white/10 shadow-2xl">
          <h2 className="text-5xl md:text-7xl font-heading font-black tracking-tighter mb-8 leading-[0.9] uppercase">READY TO <br/>EVOLVE?</h2>
          <p className="text-white/50 max-w-2xl mx-auto mb-12 text-xl font-light">Partner with Novexis to build the digital systems of the future. Our consultation phase provides you with a full technical and creative roadmap.</p>
          <Link to="/contact" className="inline-flex items-center gap-6 px-14 py-6 bg-gradient-to-r from-blue-600 to-purple-700 text-white font-bold rounded-full transition-all hover:scale-105 shadow-2xl shadow-blue-500/30 uppercase tracking-[0.15em] text-base">
            Start Consultation <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;