import Link from "next/link";
import { ArrowRight, ZoomIn } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { projectsData } from "../data/projects";

export default function RecentWorks() {
  // Taking the first 6 projects to show on the homepage
  const recentProjects = projectsData.slice(0, 6);

  return (
    <section className="py-24 relative overflow-hidden z-10 bg-slate-950/20 border-t border-slate-800/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Section Title */}
        <ScrollReveal className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16">
          <div className="text-left">
            <h2 className="text-xs font-bold tracking-widest text-primary-500 uppercase mb-3">Portfolio</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white">Recent Works</h3>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-primary-500 hover:text-white font-bold text-sm group transition-colors duration-300"
          >
            View All Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </ScrollReveal>

        {/* Curated Works Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {recentProjects.map((project, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className="glass-card rounded-3xl overflow-hidden hover:-translate-y-1.5 hover:border-primary-500/30 transition-all duration-300 group h-full flex flex-col">
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-900 border-b border-slate-800 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <Link
                      href={`/portfolio?project=${encodeURIComponent(project.title)}`}
                      className="w-10 h-10 rounded-xl bg-primary-500 text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300"
                      aria-label="Zoom Project"
                    >
                      <ZoomIn className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary-500 bg-primary-500/10 px-2.5 py-1 rounded-md">
                    {project.category}
                  </span>
                  <h4 className="text-base font-extrabold text-white mt-3 leading-tight group-hover:text-primary-500 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-xs text-slate-400 font-body mt-2.5 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* View All Button (Mobile) */}
        <ScrollReveal className="flex justify-center md:hidden">
          <Link
            href="/portfolio"
            className="btn-gradient px-8 py-3.5 rounded-xl font-bold text-sm tracking-wider uppercase text-white shadow-lg flex items-center gap-2"
          >
            Explore Full Portfolio <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
