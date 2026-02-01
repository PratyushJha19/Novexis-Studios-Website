
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ChevronRight } from 'lucide-react';
import { getCaseStudyBySlug } from '../services/dataService';

// Fixed: Removed React.FC requirement to prevent mandatory children errors during rendering
const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = getCaseStudyBySlug(slug || '');

  if (!project) return <Navigate to="/portfolio" />;

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <Link to="/portfolio" className="inline-flex items-center gap-2 text-white/40 hover:text-white mb-12 transition-colors">
        <ArrowLeft size={20} /> Back to Portfolio
      </Link>

      <div className="space-y-16">
        <header className="space-y-6">
          <span className="text-blue-500 font-bold tracking-widest uppercase">{project.category}</span>
          <h1 className="text-6xl md:text-7xl font-display font-bold">{project.title}</h1>
          <p className="text-2xl text-white/60 font-light">{project.description}</p>
        </header>

        <div className="aspect-video rounded-3xl overflow-hidden glass border border-white/10">
          <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
                The Challenge
              </h2>
              <p className="text-lg text-white/60 leading-relaxed">{project.problem}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-2 h-8 bg-purple-500 rounded-full"></span>
                The System Built
              </h2>
              <p className="text-lg text-white/60 leading-relaxed">{project.solution}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-2 h-8 bg-highlight rounded-full"></span>
                The Outcome
              </h2>
              <p className="text-lg text-white/60 leading-relaxed">{project.outcome}</p>
            </section>
          </div>

          <aside className="space-y-12">
            <div className="glass p-8 rounded-3xl border border-white/5">
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white/40">Technology Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/80 border border-white/10">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass p-8 rounded-3xl border border-white/5">
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white/40">Project Stats</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm">
                  <CheckCircle2 size={16} className="text-blue-500" /> Fully Automated
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <CheckCircle2 size={16} className="text-blue-500" /> Performance Optimized
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <CheckCircle2 size={16} className="text-blue-500" /> Cloud Native
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail;
