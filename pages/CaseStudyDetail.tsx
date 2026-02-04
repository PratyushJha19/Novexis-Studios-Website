import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2, PlayCircle } from "lucide-react";
import { getCaseStudyBySlug } from "../services/dataService";
import { getYoutubeEmbedUrl } from "../utils/videoUtils";

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = getCaseStudyBySlug(slug || "");

  if (!project) return <Navigate to="/portfolio" />;

  const embedUrl = getYoutubeEmbedUrl(project.videoUrl || "");

  return (
    <>
      <title>{`${project.title} | Novexis Studios`}</title>
      <meta name="description" content={project.description} />

      <div className="max-w-5xl mx-auto px-6 py-20">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white mb-12 transition-colors group"
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Portfolio
        </Link>

        <div className="space-y-16">
          <header className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-blue-500 font-bold tracking-widest uppercase text-sm">
                {project.category}
              </span>
              {embedUrl && (
                <span className="flex items-center gap-2 text-[10px] bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full font-black uppercase tracking-widest">
                  <PlayCircle size={12} /> Video Breakdown Available
                </span>
              )}
            </div>
            <h1 className="text-6xl md:text-7xl font-heading font-black tracking-tighter uppercase leading-[0.9]">
              {project.title}
            </h1>
            <p className="text-2xl text-white/60 font-light leading-relaxed">
              {project.description}
            </p>
          </header>

          {/* Optional Video Section / Image Fallback */}
          <div className="aspect-video rounded-[2.5rem] overflow-hidden glass border border-white/10 shadow-2xl">
            {embedUrl ? (
              <iframe
                src={embedUrl}
                title={`${project.title} Case Study Video`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
            <div className="md:col-span-2 space-y-16">
              <section className="space-y-6">
                <h2 className="text-3xl font-heading font-black uppercase tracking-tight flex items-center gap-4">
                  <span className="w-1.5 h-8 bg-blue-600 rounded-full"></span>
                  The Challenge
                </h2>
                <p className="text-xl text-white/50 leading-relaxed font-light">
                  {project.problem}
                </p>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-heading font-black uppercase tracking-tight flex items-center gap-4">
                  <span className="w-1.5 h-8 bg-purple-600 rounded-full"></span>
                  The System Built
                </h2>
                <p className="text-xl text-white/50 leading-relaxed font-light">
                  {project.solution}
                </p>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-heading font-black uppercase tracking-tight flex items-center gap-4">
                  <span className="w-1.5 h-8 bg-white rounded-full"></span>
                  The Outcome
                </h2>
                <p className="text-xl text-white/50 leading-relaxed font-light">
                  {project.outcome}
                </p>
              </section>
            </div>

            <aside className="space-y-10">
              <div className="glass p-10 rounded-[2rem] border border-white/5">
                <h4 className="font-black mb-8 text-xs uppercase tracking-[0.3em] text-white/30">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-white/5 rounded-xl text-[11px] font-bold text-white/70 border border-white/5 uppercase tracking-widest"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass p-10 rounded-[2rem] border border-white/5">
                <h4 className="font-black mb-8 text-xs uppercase tracking-[0.3em] text-white/30">
                  Efficiency Report
                </h4>
                <ul className="space-y-6">
                  {[
                    "Fully Automated",
                    "Performance Optimized",
                    "Cloud Native",
                  ].map((stat) => (
                    <li
                      key={stat}
                      className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-white/60"
                    >
                      <CheckCircle2 size={18} className="text-blue-500" />
                      {stat}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudyDetail;
