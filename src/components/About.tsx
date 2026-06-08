import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden z-10 border-t border-slate-800/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Section Title */}
        <ScrollReveal className="text-center md:text-left mb-16">
          <h2 className="text-xs font-bold tracking-widest text-primary-500 uppercase mb-3">Biography</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">About Me</h3>
        </ScrollReveal>

        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Left Side: Image collage/frame */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <ScrollReveal>
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl group">
                <img
                  src="/assets/optimized/hasnat_sabbir.webp"
                  alt="Md. Hasnat Sabbir Biplob Presentation"
                  className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs text-primary-500 font-bold uppercase tracking-widest mb-1 block">Creative Speaker</span>
                  <h4 className="text-lg font-bold text-white">Md. Hasnat Sabbir Biplob</h4>
                  <p className="text-xs text-slate-400">Media Specialist & Creative Designer</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Grid statistics */}
            <ScrollReveal delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card rounded-2xl p-5 text-center hover:border-primary-500/30 transition-colors duration-300">
                  <h4 className="text-3xl font-extrabold text-white text-glow-gradient mb-1">20+</h4>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Posters Designed</p>
                </div>
                <div className="glass-card rounded-2xl p-5 text-center hover:border-secondary-500/30 transition-colors duration-300">
                  <h4 className="text-3xl font-extrabold text-white text-glow-gradient mb-1">3+</h4>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Orgs Served</p>
                </div>
                <div className="glass-card rounded-2xl p-5 text-center hover:border-accent-500/30 transition-colors duration-300">
                  <h4 className="text-3xl font-extrabold text-white text-glow-gradient mb-1">4+</h4>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Leadership Roles</p>
                </div>
                <div className="glass-card rounded-2xl p-5 text-center hover:border-primary-500/30 transition-colors duration-300">
                  <h4 className="text-3xl font-extrabold text-white text-glow-gradient mb-1">100%</h4>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Commitment</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Side: Details text */}
          <div className="md:col-span-7 flex flex-col justify-center">
            <ScrollReveal delay={0.2}>
              <h4 className="text-2xl font-bold text-white mb-6">Fusing Engineering Logic with Creative Design</h4>

              <div className="space-y-6 text-slate-400 font-body text-sm leading-relaxed">
                <p>
                  I am <strong className="text-slate-100">Md. Hasnat Sabbir Biplob</strong>, a creative designer based in <strong className="text-slate-100">Chattogram, Bangladesh</strong>. Currently holding a Bachelor of Science in Electrical & Electronic Engineering (EEE) from Port City International University, I combine a rigorous engineering mindset with an intense passion for visual design.
                </p>

                <p>
                  My design philosophy lies in creating clean, modern, and highly effective visual assets that tell a story. Over the past few years, I have served in key leadership roles like the <strong className="text-slate-100">IT Head at PCIU Volunteers</strong>, <strong className="text-slate-100">IT Captain at ONE MAN ARMY</strong>, and <strong className="text-slate-100">Media Specialist at PCIU Networking & Placement Cell</strong>. In these roles, I spearhead event campaigns, poster promotions, and brand communications that drive engagement.
                </p>

                <blockquote className="border-l-4 border-primary-500 pl-4 py-1.5 italic text-slate-300 bg-slate-800/10 rounded-r-xl">
                  "Creative and motivated Graphic Designer seeking opportunities to create visually appealing and effective content, strengthen brand communication, and contribute to organizational success."
                </blockquote>

                <p>
                  Whether it is drafting typography for a national day poster, engineering a cohesive social media campaign, or designing professional branding assets, I bring structure, precision, and raw creativity to every canvas.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="#contact"
                  className="btn-gradient px-6 py-3 rounded-xl font-semibold text-xs tracking-wider uppercase text-white shadow-md flex items-center gap-2 hover:-translate-y-0.5 transition-transform"
                >
                  Start Project <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#experience"
                  className="px-6 py-3 rounded-xl border border-slate-700 bg-slate-800/10 hover:bg-slate-800/30 text-slate-300 font-semibold text-xs tracking-wider uppercase transition-colors hover:-translate-y-0.5"
                >
                  View Experience
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
