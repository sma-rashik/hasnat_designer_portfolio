import { GraduationCap, BookOpen } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Education() {
  return (
    <section className="py-24 relative overflow-hidden z-10 border-t border-slate-800/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Section Title */}
        <ScrollReveal className="text-center mb-20">
          <h2 className="text-xs font-bold tracking-widest text-primary-500 uppercase mb-3">Academic Base</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">Education</h3>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* EEE Bachelor */}
          <ScrollReveal>
            <div className="glass-card h-full rounded-3xl p-8 hover:border-primary-500/30 transition-colors duration-300 flex flex-col sm:flex-row gap-6">
              <div className="w-12 h-12 rounded-2xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center shrink-0">
                <GraduationCap className="text-primary-500 w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-primary-500 font-semibold tracking-wider uppercase">Bachelor of Science (B.Sc.)</span>
                <h4 className="text-xl font-extrabold text-white mt-1">Electrical & Electronic Engineering (EEE)</h4>
                <p className="text-sm text-slate-300 font-semibold mt-2">Port City International University</p>
                <p className="text-xs text-slate-400 mt-4 font-body leading-relaxed">
                  Applying problem-solving, structural analytical planning, and organization layouts developed during engineering studies to creative graphics and UI structures.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Diploma in Electrical */}
          <ScrollReveal delay={0.2}>
            <div className="glass-card h-full rounded-3xl p-8 hover:border-secondary-500/30 transition-colors duration-300 flex flex-col sm:flex-row gap-6">
              <div className="w-12 h-12 rounded-2xl bg-secondary-500/10 border border-secondary-500/20 flex items-center justify-center shrink-0">
                <BookOpen className="text-secondary-500 w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-secondary-500 font-semibold tracking-wider uppercase">Diploma in Engineering</span>
                <h4 className="text-xl font-extrabold text-white mt-1">Electrical Engineering</h4>
                <p className="text-sm text-slate-300 font-semibold mt-2">Bangladesh Sweden Polytechnic Institute</p>
                <p className="text-xs text-slate-400 mt-4 font-body leading-relaxed">
                  Strong technical background in electrical systems, automation fundamentals, and structured documentation workflows.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
