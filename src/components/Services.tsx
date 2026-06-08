import { Image as ImageIcon, Share2, Award, Megaphone, MessageSquare, FileText } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Services() {
  const services = [
    {
      icon: <ImageIcon className="w-6 h-6 text-primary-500" />,
      title: "Poster Design",
      desc: "High-impact, concept-driven poster layouts designed to convey complex messages, event campaigns, and artistic print projects.",
      color: "primary"
    },
    {
      icon: <Share2 className="w-6 h-6 text-secondary-500" />,
      title: "Social Media Design",
      desc: "Engaging, visual-heavy graphics tailored for Facebook, Instagram, and LinkedIn to generate clicks, registrations, and page growth.",
      color: "secondary"
    },
    {
      icon: <Award className="w-6 h-6 text-accent-500" />,
      title: "Event Branding",
      desc: "Cohesive design suites for campus, social, and corporate events including standees, banners, invitations, and ID cards.",
      color: "accent"
    },
    {
      icon: <Megaphone className="w-6 h-6 text-primary-500" />,
      title: "Promotional Graphics",
      desc: "Eye-catching and actionable promotional visuals optimized to capture user attention instantly and elevate brand messages.",
      color: "primary"
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-secondary-500" />,
      title: "Visual Communication",
      desc: "Translating core organizational messages or data into striking diagrams, infographics, or visual representations.",
      color: "secondary"
    },
    {
      icon: <FileText className="w-6 h-6 text-accent-500" />,
      title: "Creative Marketing Materials",
      desc: "Brochures, digital flyer designs, presentation decks, and web banners designed to convert viewers into clients or leads.",
      color: "accent"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden z-10 bg-slate-950/20 border-t border-slate-800/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Section Title */}
        <ScrollReveal className="text-center mb-20">
          <h2 className="text-xs font-bold tracking-widest text-secondary-500 uppercase mb-3">Offerings</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">What I Do</h3>
          <p className="text-slate-400 font-body text-sm max-w-lg mx-auto mt-4">
            Providing end-to-end creative visual assets that help brands and organizations stand out in print and digital channels.
          </p>
        </ScrollReveal>

        {/* Service Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className={`glass-card rounded-3xl p-8 hover:-translate-y-2 hover:border-${svc.color}-500/40 hover:shadow-[0_15px_30px_rgba(var(--color-${svc.color}-500-rgb),0.1)] transition-all duration-500 group h-full`}>
                <div className={`w-14 h-14 rounded-2xl bg-${svc.color}-500/10 border border-${svc.color}-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {svc.icon}
                </div>
                <h4 className={`text-xl font-bold text-white mb-3 group-hover:text-${svc.color}-500 transition-colors`}>
                  {svc.title}
                </h4>
                <p className="text-slate-400 font-body text-sm leading-relaxed">
                  {svc.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
