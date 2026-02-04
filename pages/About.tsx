import React from "react";
import { motion } from "framer-motion";
import {
  Linkedin,
  Github,
  Instagram,
  ExternalLink,
  Mail,
  ShieldCheck,
  Zap,
  Globe,
} from "lucide-react";
import SEO from "@/components/SEO";

const founders = [
  {
    name: "Pratyush Jha",
    role: "Co-Founder | Technology & Systems",
    bio: "Pratyush is a systems architect with a decade of experience in building distributed high-frequency trading platforms and enterprise cloud systems. He leads the technical engineering vision at Novexis, ensuring every deployment is resilient and scalable. His approach focuses on high-concurrency architectures and absolute system security.",
    expertise: [
      "Full-stack development (React, Node.js, Go)",
      "System architecture & distributed networks",
      "Automation logic & Cloud-native engineering",
    ],
    responsibilities: [
      "Technical strategy & architecture roadmap",
      "Core backend systems & API development",
      "Infrastructure security & global scalability",
    ],
    email: "pratyush@novexis.com",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Amogh Tiwari",
    role: "Co-Founder | Creative & Media",
    bio: "With a background in cinematic direction and visual effects, Amogh bridges the gap between raw data and emotional storytelling. He oversees the studio's media pipeline, blending traditional filmmaking with high-end CGI/VFX systems. He ensures that every frame produced by the studio meets global broadcast standards.",
    expertise: [
      "Cinema-grade video production",
      "High-end post-production & color grading",
      "Advanced motion graphics & VFX",
    ],
    responsibilities: [
      "Creative direction & brand visual strategy",
      "Media production pipelines & asset systems",
      "Visual storytelling & high-fidelity editing",
    ],
    email: "amogh@novexis.com",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Sumit Singh Bisht",
    role: "Co-Founder | Design & Product",
    bio: "Sumit is a product visionary focused on the intersection of human psychology and digital interfaces. He developed the studio's proprietary design system, ensuring that every interaction is as intuitive as it is aesthetically superior. His design philosophy is rooted in minimalism, performance, and accessibility.",
    expertise: [
      "UI/UX architecture & product design",
      "Atomic design systems & brand language",
      "User-centric interaction & visual design",
    ],
    responsibilities: [
      "Design systems & visual brand identity",
      "User experience research & product mapping",
      "Visual design QA & asset library management",
    ],
    email: "sumit@novexis.com",
    linkedin: "#",
    portfolio: "#",
  },
];

const About = () => {
  return (
    <>
      <SEO
        title="About | Novexis Studios"
        description="Novexis Studios | AI, Dev, Video, Marketing, Design & Creative Content Systems"
        url="/about"
      />
      <div className="max-w-7xl mx-auto px-6 py-20">
        <section className="mb-40">
          <h1 className="text-7xl md:text-9xl font-heading font-black tracking-tighter mb-10 uppercase leading-none">
            THE STUDIO.
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <p className="text-2xl text-white/60 leading-relaxed font-light">
                Novexis Studios is a premier creative-technology studio
                dedicated to building the systems that power modern digital
                experiences.
              </p>
              <p className="text-xl text-white/40 leading-relaxed">
                We work at the intersection of high-end media production,
                scalable software engineering, and intelligent automation.
                Unlike traditional agencies, we merge technical rigor with
                creative intuition, ensuring every system we build is both
                beautiful and resilient.
              </p>
              <p className="text-xl text-white/40 leading-relaxed">
                Based on a digital-first global operation, we partner with
                production houses, tech startups, and visionary brands to
                develop infrastructure that scales with their growth.
              </p>
            </div>
            <div className="glass p-12 rounded-[3rem] border border-white/10 space-y-10 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
              <div className="flex items-center gap-8">
                <ShieldCheck className="text-blue-500" size={36} />
                <p className="text-xl font-heading font-bold uppercase tracking-widest">
                  Enterprise grade
                </p>
              </div>
              <div className="flex items-center gap-8">
                <Zap className="text-purple-500" size={36} />
                <p className="text-xl font-heading font-bold uppercase tracking-widest">
                  Velocity focused
                </p>
              </div>
              <div className="flex items-center gap-8">
                <Globe className="text-white/60" size={36} />
                <p className="text-xl font-heading font-bold uppercase tracking-widest">
                  Global operations
                </p>
              </div>
              <p className="text-base text-white/30 italic pt-8 border-t border-white/5">
                "Our mission is to help brands and founders move beyond static
                content and into dynamic, resilient systems that grow with
                them."
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="text-center mb-24">
            <h2 className="text-5xl font-heading font-black tracking-tighter uppercase mb-4">
              THE LEADERSHIP.
            </h2>
            <p className="text-white/30 uppercase tracking-[0.4em] text-sm font-bold">
              System Architects & Creative Directors
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {founders.map((founder, i) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-12 rounded-[3rem] border border-white/5 relative group hover:border-blue-500/30 transition-all shadow-2xl"
              >
                <div className="absolute top-8 right-12 text-white/5 group-hover:text-blue-500/10 transition-colors pointer-events-none">
                  <span className="text-8xl font-heading font-black">
                    0{i + 1}
                  </span>
                </div>
                <div className="relative z-10 space-y-8">
                  <div>
                    <h3 className="text-4xl font-heading font-black mb-2 uppercase tracking-tighter">
                      {founder.name}
                    </h3>
                    <p className="text-blue-400 font-heading font-bold text-sm uppercase tracking-widest">
                      {founder.role}
                    </p>
                  </div>

                  <p className="text-white/50 text-lg leading-relaxed font-light">
                    {founder.bio}
                  </p>

                  <div className="space-y-8">
                    <div>
                      <h5 className="text-[14px] uppercase tracking-[0.3em] text-white/20 font-black mb-4">
                        Expertise
                      </h5>
                      <ul className="space-y-3">
                        {founder.expertise.map((exp, idx) => (
                          <li
                            key={idx}
                            className="text-lg text-white/60 leading-relaxed flex items-start gap-3"
                          >
                            <span className="w-2 h-2 rounded-full bg-blue-500/50 mt-1.5 shrink-0"></span>
                            {exp}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-[14px] uppercase tracking-[0.3em] text-white/20 font-black mb-4">
                        Responsibilities
                      </h5>
                      <ul className="space-y-3">
                        {founder.responsibilities.map((res, idx) => (
                          <li
                            key={idx}
                            className="text-lg text-white/60 leading-relaxed flex items-start gap-3"
                          >
                            <span className="w-2 h-2 rounded-full bg-purple-500/50 mt-1.5 shrink-0"></span>
                            {res}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-6 pt-10 border-t border-white/5">
                    <a
                      href={`mailto:${founder.email}`}
                      className="text-white/30 hover:text-white transition-colors"
                      title="Email"
                    >
                      <Mail size={22} />
                    </a>
                    {founder.linkedin && (
                      <a
                        href={founder.linkedin}
                        className="text-white/30 hover:text-blue-500 transition-colors"
                        title="LinkedIn"
                      >
                        <Linkedin size={22} />
                      </a>
                    )}
                    {founder.github && (
                      <a
                        href={founder.github}
                        className="text-white/30 hover:text-white transition-colors"
                        title="GitHub"
                      >
                        <Github size={22} />
                      </a>
                    )}
                    {founder.instagram && (
                      <a
                        href={founder.instagram}
                        className="text-white/30 hover:text-purple-500 transition-colors"
                        title="Instagram"
                      >
                        <Instagram size={22} />
                      </a>
                    )}
                    {founder.portfolio && (
                      <a
                        href={founder.portfolio}
                        className="text-white/30 hover:text-white transition-colors"
                        title="Portfolio"
                      >
                        <ExternalLink size={22} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Reduced Height Bottom Section */}
        <section className="mt-16 text-center py-12 border-t border-white/5">
          <h2 className="text-3xl font-heading font-black mb-4 uppercase tracking-tighter">
            Initialize Partnership.
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto mb-8 text-xl font-light">
            Connect with our leadership team to begin building your studio-grade
            digital infrastructure.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
            <a
              href="#/contact"
              className="
      px-6 sm:px-14 
      py-4 
      bg-white text-black 
      font-bold 
      rounded-full 
      uppercase 
      tracking-[0.1em] sm:tracking-[0.15em] 
      text-xs sm:text-sm 
      shadow-2xl shadow-white/10 
      hover:bg-blue-600 hover:text-white 
      transition-all
      whitespace-nowrap
    "
            >
              Initialize Connection
            </a>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default About;
