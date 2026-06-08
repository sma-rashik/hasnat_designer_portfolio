import ScrollReveal from "./ScrollReveal";

export default function Achievements() {
  const achievements = [
    {
      value: "20+",
      title: "Posters Designed",
      desc: "Successfully conceptualized and designed over 20+ custom event promotion posters, national day tributes, and social cause campaigns.",
      color: "primary"
    },
    {
      value: "3+",
      title: "Organizations Served",
      desc: "Provided creative design services, brand asset management, and social media direction for key campus organizations and groups.",
      color: "secondary"
    },
    {
      value: "4+",
      title: "Leadership Roles",
      desc: "Served as IT Head at PCIU Volunteers, IT Captain at ONE MAN ARMY, and Media Specialist at PCIU Placement Cell.",
      color: "accent"
    },
    {
      value: "10+",
      title: "Event Branding Campaigns",
      desc: "Managed complete visual sets for high-attendance campaigns, including stage banners, digital flyers, tickets, and sponsor slides.",
      color: "primary"
    },
    {
      value: "100%",
      title: "Creative Dedication",
      desc: "Fusing technical engineering precision with modern graphic design theories to produce highly aesthetic visual assets.",
      color: "secondary"
    },
    {
      value: "25%",
      title: "Outreach Growth",
      desc: "Elevated organizational online engagement by 25-40% through consistent layout guidelines, striking typography, and custom visuals.",
      color: "accent"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden z-10 border-t border-slate-800/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Section Title */}
        <ScrollReveal className="text-center mb-20">
          <h2 className="text-xs font-bold tracking-widest text-secondary-500 uppercase mb-3">Highlights</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">Achievements & Impact</h3>
        </ScrollReveal>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className={`glass-card rounded-3xl p-8 hover:border-${item.color}-500/20 transition-all duration-300 h-full`}>
                <div className={`text-${item.color}-500 text-3xl font-extrabold mb-4`}>{item.value}</div>
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-slate-400 font-body text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
