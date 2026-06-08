import { CheckCircle2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden z-10 bg-slate-950/20 border-t border-slate-800/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Section Title */}
        <ScrollReveal className="text-center mb-20">
          <h2 className="text-xs font-bold tracking-widest text-accent-500 uppercase mb-3">Timeline</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">Professional Experience</h3>
        </ScrollReveal>

        {/* Experience Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Glowing Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 timeline-line rounded-full -translate-x-1/2"></div>

          {/* Experience Item 1: PCIU Volunteers */}
          <div className="relative grid md:grid-cols-2 gap-8 md:gap-16 items-start mb-16 group">
            {/* Timeline Node */}
            <div className="absolute left-4 md:left-1/2 top-4 w-4 h-4 rounded-full bg-primary-500 border-4 border-slate-950 shadow-[0_0_15px_#2563EB] -translate-x-1/2 z-10 group-hover:scale-125 transition-transform duration-300"></div>

            {/* Content Left */}
            <ScrollReveal className="md:text-right md:pr-4 pl-10 md:pl-0">
              <span className="inline-block px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-500 text-xs font-bold uppercase tracking-wider mb-2">
                Leader & Lead Designer
              </span>
              <h4 className="text-xl font-extrabold text-white">PCIU Volunteers</h4>
              <h5 className="text-sm text-slate-300 font-semibold mt-1">IT Head</h5>
              <p className="text-xs text-slate-400 mt-1 font-body">2026, Feb - Present</p>
            </ScrollReveal>

            {/* Content Right */}
            <ScrollReveal className="pl-10 md:pl-4" delay={0.2}>
              <div className="glass-card rounded-2xl p-6 hover:border-primary-500/30 transition-all duration-300">
                <ul className="space-y-3.5 text-sm text-slate-400 font-body">
                  <li className="flex gap-2"><CheckCircle2 className="text-primary-500 w-4 h-4 shrink-0 mt-0.5" /> <span>Formulate and execute complete branding packages for campus programs, charity campaigns, and social events.</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="text-primary-500 w-4 h-4 shrink-0 mt-0.5" /> <span>Manage and mentor a design team of 5+ junior volunteers, ensuring brand integrity.</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="text-primary-500 w-4 h-4 shrink-0 mt-0.5" /> <span>Conceptualized and designed the visual identities for the flagship community drive "Sharing Happiness 6.0".</span></li>
                </ul>
              </div>
            </ScrollReveal>
          </div>

          {/* Experience Item 2: ONE MAN ARMY */}
          <div className="relative grid md:grid-cols-2 gap-8 md:gap-16 items-start mb-16 group">
            {/* Timeline Node */}
            <div className="absolute left-4 md:left-1/2 top-4 w-4 h-4 rounded-full bg-secondary-500 border-4 border-slate-950 shadow-[0_0_15px_#7C3AED] -translate-x-1/2 z-10 group-hover:scale-125 transition-transform duration-300"></div>

            {/* Content Left (Order reversed for layout) */}
            <ScrollReveal className="md:order-2 md:pl-4 pl-10" delay={0.2}>
              <span className="inline-block px-3 py-1 rounded-full bg-secondary-500/10 border border-secondary-500/20 text-secondary-500 text-xs font-bold uppercase tracking-wider mb-2">
                Campaign & IT Director
              </span>
              <h4 className="text-xl font-extrabold text-white">ONE MAN ARMY</h4>
              <h5 className="text-sm text-slate-300 font-semibold mt-1">IT Captain</h5>
              <p className="text-xs text-slate-400 mt-1 font-body">2025</p>
            </ScrollReveal>

            {/* Content Right */}
            <ScrollReveal className="md:order-1 md:text-right md:pr-4 pl-10 md:pl-0">
              <div className="glass-card rounded-2xl p-6 hover:border-secondary-500/30 transition-all duration-300">
                <ul className="space-y-3.5 text-sm text-slate-400 font-body md:text-left text-left">
                  <li className="flex gap-2"><CheckCircle2 className="text-secondary-500 w-4 h-4 shrink-0 mt-0.5" /> <span>Led digital transformation projects, managing server channels and visual communication frameworks.</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="text-secondary-500 w-4 h-4 shrink-0 mt-0.5" /> <span>Developed highly engaging social media promotional content, driving active student memberships.</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="text-secondary-500 w-4 h-4 shrink-0 mt-0.5" /> <span>Organized and designed branding setups for event registrations and stage backdrops.</span></li>
                </ul>
              </div>
            </ScrollReveal>
          </div>

          {/* Experience Item 3: PCIU Networking Cell */}
          <div className="relative grid md:grid-cols-2 gap-8 md:gap-16 items-start mb-16 group">
            {/* Timeline Node */}
            <div className="absolute left-4 md:left-1/2 top-4 w-4 h-4 rounded-full bg-accent-500 border-4 border-slate-950 shadow-[0_0_15px_#06B6D4] -translate-x-1/2 z-10 group-hover:scale-125 transition-transform duration-300"></div>

            {/* Content Left */}
            <ScrollReveal className="md:text-right md:pr-4 pl-10 md:pl-0">
              <span className="inline-block px-3 py-1 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-500 text-xs font-bold uppercase tracking-wider mb-2">
                Visual Design & Outreach
              </span>
              <h4 className="text-xl font-extrabold text-white font-sans">PCIU Networking & Placement Cell</h4>
              <h5 className="text-sm text-slate-300 font-semibold mt-1">Media Specialist</h5>
              <p className="text-xs text-slate-400 mt-1 font-body font-normal">2025</p>
            </ScrollReveal>

            {/* Content Right */}
            <ScrollReveal className="pl-10 md:pl-4" delay={0.2}>
              <div className="glass-card rounded-2xl p-6 hover:border-accent-500/30 transition-all duration-300">
                <ul className="space-y-3.5 text-sm text-slate-400 font-body">
                  <li className="flex gap-2"><CheckCircle2 className="text-accent-500 w-4 h-4 shrink-0 mt-0.5" /> <span>Craft corporate speaker highlights, webinar announcement banners, and placement alerts.</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="text-accent-500 w-4 h-4 shrink-0 mt-0.5" /> <span>Created marketing materials, booklets, and corporate brochures to promote graduates.</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="text-accent-500 w-4 h-4 shrink-0 mt-0.5" /> <span>Maintained consistent branding styles across Facebook pages, driving 35% higher student reach.</span></li>
                </ul>
              </div>
            </ScrollReveal>
          </div>

          {/* Experience Item 4: KSRM */}
          <div className="relative grid md:grid-cols-2 gap-8 md:gap-16 items-start group">
            {/* Timeline Node */}
            <div className="absolute left-4 md:left-1/2 top-4 w-4 h-4 rounded-full bg-slate-600 border-4 border-slate-950 shadow-[0_0_15px_#4b5563] -translate-x-1/2 z-10 group-hover:scale-125 transition-transform duration-300"></div>

            {/* Content Left (Mobile: Right) - Order reversal for layout */}
            <ScrollReveal className="md:order-2 md:pl-4 pl-10" delay={0.2}>
              <span className="inline-block px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">
                Engineering Apprenticeship
              </span>
              <h4 className="text-xl font-extrabold text-white">KSRM (Kabir Steel Re-Rolling Mills)</h4>
              <h5 className="text-sm text-slate-300 font-semibold mt-1">Electrical Engineering Intern</h5>
              <p className="text-xs text-slate-400 mt-1 font-body">Internship Phase</p>
            </ScrollReveal>

            {/* Content Right (Mobile: Left) */}
            <ScrollReveal className="md:order-1 md:text-right md:pr-4 pl-10 md:pl-0">
              <div className="glass-card rounded-2xl p-6 hover:border-slate-500/30 transition-all duration-300">
                <ul className="space-y-3.5 text-sm text-slate-400 font-body md:text-left text-left">
                  <li className="flex gap-2"><CheckCircle2 className="text-slate-500 w-4 h-4 shrink-0 mt-0.5" /> <span>Acquired electrical plant operations knowledge, studying automated control units.</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="text-slate-500 w-4 h-4 shrink-0 mt-0.5" /> <span>Leveraged structured engineering thinking to design project workflows and organize visual assets.</span></li>
                </ul>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
