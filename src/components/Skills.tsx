import { Layers, Brush } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SkillBar from "./SkillBar";

export default function Skills() {
  return (
    <section className="py-24 relative overflow-hidden z-10 border-t border-slate-800/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Section Title */}
        <ScrollReveal className="text-center mb-20">
          <h2 className="text-xs font-bold tracking-widest text-primary-500 uppercase mb-3">Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">Skills & Toolkit</h3>
        </ScrollReveal>

        {/* Skills Layout */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Core Tools & Strategy */}
          <ScrollReveal className="space-y-6">
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Layers className="text-primary-500 w-5 h-5" /> Software & Core Competencies
            </h4>
            
            <SkillBar name="Adobe Illustrator" percentage={95} colorClass="bg-gradient-to-r from-primary-500 to-secondary-500 text-primary-500" />
            <SkillBar name="Canva (Fast Ideation & Templates)" percentage={90} colorClass="bg-gradient-to-r from-primary-500 to-secondary-500 text-primary-500" />
            <SkillBar name="Creative Strategy & Visual Storytelling" percentage={85} colorClass="bg-gradient-to-r from-primary-500 to-secondary-500 text-primary-500" />
            <SkillBar name="Marketing Graphics & Campaign Execution" percentage={88} colorClass="bg-gradient-to-r from-primary-500 to-secondary-500 text-primary-500" />
          </ScrollReveal>

          {/* Design Verticals */}
          <ScrollReveal className="space-y-6" delay={0.2}>
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Brush className="text-secondary-500 w-5 h-5" /> Design Specialties
            </h4>

            <SkillBar name="Poster & Banner Design" percentage={95} colorClass="bg-gradient-to-r from-secondary-500 to-accent-500 text-secondary-500" />
            <SkillBar name="Social Media Creatives" percentage={92} colorClass="bg-gradient-to-r from-secondary-500 to-accent-500 text-secondary-500" />
            <SkillBar name="Visual Communication & Layouts" percentage={90} colorClass="bg-gradient-to-r from-secondary-500 to-accent-500 text-secondary-500" />
            <SkillBar name="Branding Design & Identity" percentage={88} colorClass="bg-gradient-to-r from-secondary-500 to-accent-500 text-secondary-500" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
