"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { X, ZoomIn, Info } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { projectsData, Project } from "@/data/projects";

function PortfolioContent() {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxProject, setLightboxProject] = useState<Project | null>(null);

  // Extract unique categories from projectsData
  const categories = ["All", ...Array.from(new Set(projectsData.map(p => p.category)))];

  const filteredProjects = activeCategory === "All"
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  // Handle URL parameters for direct project viewing
  useEffect(() => {
    const projectTitle = searchParams.get("project");
    if (projectTitle) {
      const project = projectsData.find(p => p.title === projectTitle);
      if (project) {
        setLightboxProject(project);
      }
    }
  }, [searchParams]);

  // Handle body scroll locking when lightbox is open
  useEffect(() => {
    if (lightboxProject) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [lightboxProject]);

  return (
    <>
      <main className="pt-32 pb-24 min-h-screen relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          {/* Header */}
          <div className="text-center mb-16 reveal-on-scroll active">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Complete <span className="text-glow-gradient">Portfolio</span></h1>
            <p className="text-slate-400 font-body text-sm max-w-2xl mx-auto">
              Explore my curated collection of posters, event branding, social media campaigns, and marketing creatives.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16 reveal-on-scroll active">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full font-semibold text-xs tracking-wider uppercase transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] border border-primary-400"
                    : "bg-slate-800/50 text-slate-300 border border-slate-700 hover:bg-slate-800 hover:border-primary-500/50 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <ScrollReveal key={idx} delay={(idx % 6) * 0.1}>
                <div className="glass-card rounded-3xl overflow-hidden hover:-translate-y-1.5 hover:border-primary-500/30 transition-all duration-300 group h-full flex flex-col cursor-pointer" onClick={() => setLightboxProject(project)}>
                  <div className="aspect-[4/3] w-full overflow-hidden bg-slate-900 border-b border-slate-800 relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="w-10 h-10 rounded-xl bg-primary-500 text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300">
                        <ZoomIn className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-grow">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary-500 bg-primary-500/10 px-2.5 py-1 rounded-md">
                      {project.category}
                    </span>
                    <h4 className="text-base font-extrabold text-white mt-3 leading-tight group-hover:text-primary-500 transition-colors">
                      {project.title}
                    </h4>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-400 font-body text-lg">No projects found for this category.</p>
            </div>
          )}
        </div>
      </main>

      {/* Lightbox Overlay */}
      <div
        className={`fixed inset-0 w-full h-screen bg-dark-900/98 backdrop-blur-xl z-[100] flex justify-center items-center transition-all duration-500 ${
          lightboxProject ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setLightboxProject(null)}
          className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-primary-500 hover:border-primary-500 hover:scale-110 flex items-center justify-center transition-all duration-300 shadow-xl"
        >
          <X className="w-6 h-6" />
        </button>

        {lightboxProject && (
          <div className="w-full h-full p-4 sm:p-12 md:p-16 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
            {/* Image Section */}
            <div className="w-full lg:w-2/3 max-h-[70vh] lg:max-h-[85vh] flex justify-center items-center">
              <div className="relative w-full h-full max-h-[70vh] lg:max-h-[85vh] rounded-2xl overflow-hidden border border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <img
                  src={lightboxProject.image}
                  alt={lightboxProject.title}
                  className="w-full h-full object-contain bg-slate-950"
                />
              </div>
            </div>

            {/* Info Section */}
            <div className="w-full lg:w-1/3 max-w-md bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-3xl p-8 shadow-2xl flex flex-col transform translate-y-0 opacity-100 transition-all duration-500 delay-200">
              <span className="inline-block px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-500 text-xs font-bold uppercase tracking-wider mb-4 w-max">
                {lightboxProject.category}
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 leading-tight">
                {lightboxProject.title}
              </h3>
              
              <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-6"></div>

              <div className="flex gap-4">
                <Info className="w-6 h-6 text-slate-500 shrink-0 mt-0.5" />
                <p className="text-slate-300 font-body text-sm leading-relaxed">
                  {lightboxProject.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default function Portfolio() {
  return (
    <>
      <Header />
      <Suspense fallback={<div className="min-h-screen bg-dark-900 text-white flex items-center justify-center">Loading...</div>}>
        <PortfolioContent />
      </Suspense>
      <Footer />
    </>
  );
}
