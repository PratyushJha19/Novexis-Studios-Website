import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { getPublishedCaseStudies } from '../services/dataService';
import { CaseStudy } from '../types';

const Portfolio = () => {
  const [projects, setProjects] = useState<CaseStudy[]>([]);

  useEffect(() => {
    setProjects(getPublishedCaseStudies());
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="mb-32 text-left max-w-4xl">
        <h1 className="text-6xl md:text-8xl font-heading font-black tracking-tighter mb-8 uppercase">Case Studies.</h1>
        <p className="text-2xl text-white/50 leading-relaxed font-light">
          A showcase of our most complex architectural deployments and creative masterpieces. We don't just deliver projects; we solve structural challenges using a mix of advanced engineering, cinema-grade visual storytelling, and high-performance cloud infrastructure.
        </p>
        <p className="text-xl text-white/30 leading-relaxed font-light mt-6">
          Explore how we help global brands and startups migrate legacy systems, automate high-volume content, and build the future of interactive media.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <Link to={`/portfolio/${project.slug}`} className="group block space-y-8">
              <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden glass border border-white/10 shadow-2xl">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-10">
                  <span className="flex items-center gap-3 text-white font-bold text-xl uppercase tracking-wider">
                    Analyze System <ArrowUpRight size={24} />
                  </span>
                </div>
              </div>
              <div className="px-2">
                <span className="text-blue-500 text-sm font-bold tracking-[0.3em] uppercase mb-4 block">{project.category}</span>
                <h3 className="text-3xl font-heading font-black mb-4 group-hover:text-blue-400 transition-colors uppercase tracking-tight">{project.title}</h3>
                <p className="text-white/50 text-lg line-clamp-2 font-light leading-relaxed">{project.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;