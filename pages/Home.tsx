import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  Film,
  Cloud,
  Palette,
  Shield,
  Zap,
  Target,
  Cpu,
  BarChart3,
  Share2,
  Gamepad2,
} from "lucide-react";
import { Link } from "react-router-dom";
import Hero3D from "../components/Hero3D";
import SEO from "../components/SEO";
import "../styles/HomeStyle.css";

const Home = () => {
  return (
    <>
      <SEO
        title="Novexis Studios | AI, Dev, Video, Marketing, Design & Creative Content Systems"
        description="Novexis Studios engineers high-performance web apps, AI integrations, and game development combined with elite video editing, design systems, content creation, and marketing analytics."
      />
      <div className="relative bg-transparent min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[100svh] flex items-center justify-center px-4 sm:px-6 overflow-hidden py-12 md:py-20">
          {/* Note: In Hero3D, ensure OrbitControls has enableRotate={false} and enableZoom={false} to fully kill interactivity */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Hero3D />
          </div>

          <div className="relative z-10 w-full max-w-7xl text-center space-y-8 md:space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <h1 className="text-[clamp(2.5rem,10vw,9rem)] font-heading font-black tracking-tighter mb-4 md:mb-8 leading-[0.9] md:leading-[0.85] uppercase">
                ARCHITECTURAL <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-white bg-clip-text text-transparent">
                  PRECISION.
                </span>
              </h1>

              <p className="text-base sm:text-xl md:text-3xl text-white/60 font-heading font-bold tracking-[0.1em] md:tracking-[0.2em] uppercase max-w-[90%] md:max-w-none mx-auto">
                Creative Strategy × Engineering Excellence
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-10 pt-6"
            >
              <Link
                to="/portfolio"
                className="w-full sm:w-auto text-center group relative px-8 md:px-14 py-4 md:py-6 bg-white text-black font-bold rounded-full transition-all hover:scale-105 active:scale-95 text-xs md:text-sm uppercase tracking-[0.1em] shadow-2xl shadow-white/10"
              >
                Explore Work
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto text-center px-8 md:px-14 py-4 md:py-6 glass text-white font-bold rounded-full border border-white/20 hover:border-blue-500/50 transition-all hover:bg-blue-600/10 text-xs md:text-sm uppercase tracking-[0.1em]"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>

          {/* Scroll Indicator - Hidden on very small screens to save space */}
          <div className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-4">
            <span className="text-[10px] md:text-[14px] font-bold uppercase tracking-[0.5em] text-white/30">
              Scroll to Explore
            </span>
            <div className="w-[1px] h-12 md:h-20 rounded-full bg-gradient-to-b from-blue-600 to-transparent"></div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="py-20 md:py-40 px-4 sm:px-6 max-w-7xl mx-auto bg-transparent">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 lg:gap-32 items-start mb-24">
            <div className="space-y-6 md:space-y-12 lg:sticky lg:top-32">
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black tracking-tighter leading-[0.9] uppercase">
                SYSTEM-FIRST <br />
                METHODOLOGY.
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-white/50 leading-relaxed font-light">
                We bridge the gap between creative vision and technical
                execution. From{" "}
                <strong className="text-white/80">
                  Full stack Web/App development, AI automation & integration,
                  2D/3D artistry, Designing, UI/UX, Video Editing, Marketing,
                  Social Media Management and Data Intelligence
                </strong>
                , we build integrated growth engines.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {[
                {
                  icon: <Code />,
                  title: "Engineering",
                  text: "Full-stack SaaS & Custom Software.",
                },
                {
                  icon: <Film />,
                  title: "Media Art",
                  text: "Elite Video Editing & 3D Artistry.",
                },
                {
                  icon: <Cpu />,
                  title: "AI Systems",
                  text: "AI Integration & Workflow Automation.",
                },
                {
                  icon: <Gamepad2 />,
                  title: "Game Dev",
                  text: "Immersive 3D & Interactive Experiences.",
                },
                {
                  icon: <BarChart3 />,
                  title: "Analytics",
                  text: "Data Intelligence & Growth SEO.",
                },
                {
                  icon: <Share2 />,
                  title: "Social",
                  text: "Social Media Systems & Brand Growth.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  className="glass p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-white/5 hover:border-blue-500/30 transition-all group"
                >
                  <div className="mb-4 text-blue-500 group-hover:scale-110 transition-transform">
                    {React.cloneElement(item.icon as React.ReactElement, {
                      size: 24,
                    })}
                  </div>
                  <h3 className="text-lg md:text-xl font-heading font-extrabold mb-2 uppercase">
                    {item.title}
                  </h3>
                  <p className="text-[10px] md:text-xs text-white/40 uppercase font-bold tracking-wider leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 md:py-32 px-4 sm:px-6 relative overflow-hidden bg-transparent">
          <div className="relative z-10 max-w-5xl mx-auto glass p-8 sm:p-16 md:p-20 rounded-[2rem] md:rounded-[3rem] text-center border border-white/10 shadow-2xl">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black tracking-tighter mb-6 md:mb-8 leading-[0.9] uppercase">
              READY TO <br /> EVOLVE?
            </h2>
            <p className="text-white/40 mb-10 text-xs sm:text-lg max-w-xl mx-auto uppercase tracking-widest font-medium px-4">
              Join Novexis Studios to build the systems of the future.
            </p>

            {/* Wrapper to ensure center alignment on all screens */}
            <div className="flex w-full">
              <Link
                to="/contact"
                className="
      inline-flex items-center justify-center gap-3 sm:gap-6 
      mx-auto w-auto
      px-6 sm:px-14 
      py-5 md:py-6 
      bg-gradient-to-r from-blue-600 to-purple-700 
      text-white font-bold rounded-full 
      transition-all hover:scale-105 active:scale-95 
      shadow-2xl shadow-blue-500/30 
      uppercase tracking-[0.1em] sm:tracking-[0.15em] 
      text-[11px] sm:text-sm md:text-base
    "
              >
                <span>Start Consultation</span>
                <ArrowRight size={18} className="shrink-0" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
