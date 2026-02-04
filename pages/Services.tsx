import React from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Settings,
  Cpu,
  LineChart,
  Layout as LayoutIcon,
  Video,
} from "lucide-react";
import { SERVICES } from "../constants";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <SEO
        title="Solutions & Capabilities | Novexis Studios"
        description="Explore our systemic approach to Full-Stack Dev, AI Integration, Video Artistry, Design Systems, UI/UX, Marketing, Social Media Management, and Data Intelligence. We engineer bespoke digital ecosystems."
        url="/services"
      />
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 bg-transparent min-h-screen">
        {/* Hero Header - Refined Size and Alignment */}
        <div className="max-w-4xl mb-32 md:mb-48">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-sm mb-6 block">
              Capabilities & Solutions
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-black tracking-tighter mb-8 leading-tight uppercase">
              Systemic <span className="text-white/30">Architecture.</span>
            </h1>
            <p className="text-2xl md:text-3xl text-white/40 leading-relaxed font-light">
              We deliver robust, high-performance infrastructure by bridging the
              gap between advanced creative direction and engineering precision.
            </p>
          </motion.div>
        </div>

        <div className="space-y-40 md:space-y-60">
          {SERVICES.map((category, idx) => (
            <section
              key={category.title}
              className="border-t border-white/10 pt-16"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
                <div className="lg:col-span-4">
                  <span className="text-[14px] font-heading font-black tracking-[0.5em] text-blue-600 uppercase mb-8 block">
                    MODULE {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter leading-tight uppercase mb-6">
                    {category.title}
                  </h2>
                  <p className="text-base text-white/40 font-medium max-w-xs uppercase tracking-wider leading-relaxed">
                    Bespoke digital ecosystems engineered for technical
                    dominance.
                  </p>
                </div>
                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                  {category.items.map((service, sIdx) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: sIdx * 0.1 }}
                      className="glass p-12 rounded-[2.5rem] group hover:border-blue-600/40 transition-all duration-500 shadow-xl border border-white/5"
                    >
                      <div className="flex justify-between items-start mb-8">
                        <h3 className="text-2xl font-heading font-black tracking-tighter group-hover:text-blue-500 transition-colors leading-tight">
                          {service.name}
                        </h3>
                        <ChevronRight
                          className="text-white/10 group-hover:text-blue-600 group-hover:translate-x-1 transition-all"
                          size={24}
                        />
                      </div>
                      <p className="text-white/50 text-xl leading-relaxed font-normal group-hover:text-white/80 transition-colors">
                        {service.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Technical Analysis Section - Consistently Sized */}
        <section className="mt-32 md:mt-48 relative">
          <div className="absolute inset-0 bg-blue-600/5 blur-[120px] rounded-full -z-10"></div>
          <div className="glass p-16 md:p-24 rounded-[3rem] border border-white/10 text-center shadow-2xl overflow-hidden relative">
            <div className="flex justify-center gap-10 mb-12 text-white/10">
              <Settings size={40} />
              <Cpu size={40} />
              <LineChart size={40} />
            </div>

            <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter mb-10 uppercase">
              Technical Audit & Roadmap
            </h2>
            <p className="text-xl md:text-2xl text-white/50 mb-16 max-w-3xl mx-auto font-light leading-relaxed">
              Request a comprehensive analysis of your current digital stack. We
              provide a detailed technical roadmap for enterprise system
              integrations, proprietary engine development, and media scaling.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/contact"
                  className="
      inline-block
      px-16 py-6
      bg-white text-black
      text-base font-bold
      uppercase tracking-[0.1em]
      rounded-full
      hover:bg-blue-600 hover:text-white
      transition-all
      shadow-2xl
    "
                >
                  Initialize Session
                </Link>
              </motion.div>
              <p className="text-[13px] font-bold text-white/30 uppercase tracking-[0.4em]">
                Response Window: 12 Hours
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
