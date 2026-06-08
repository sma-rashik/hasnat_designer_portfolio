import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Image as ImageIcon } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen relative flex items-center justify-center pt-32 pb-20 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-12 gap-12 items-center">
        {/* Left side text content */}
        <div className="md:col-span-7 flex flex-col items-start text-left z-10">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-500 font-semibold text-xs uppercase tracking-wider mb-6 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-primary-500"></span> Creative Graphic Designer
          </span>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
            Designing Visual <br className="hidden sm:block" />
            <span className="text-glow-gradient">Experiences</span> That Inspire
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-slate-400 font-body leading-relaxed max-w-xl mb-8">
            Hi, I'm <strong className="text-slate-100 font-semibold">Hasnat Sabbir</strong>, a creative graphic designer crafting visual solutions that strengthen brand communication. Specialize in high-impact <span className="text-slate-200 font-medium border-b border-primary-500/55 pb-0.5">Poster Design</span>, dynamic <span className="text-slate-200 font-medium border-b border-secondary-500/55 pb-0.5">Social Media creatives</span>, event promotions, and visual campaigns.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <Link
              href="/portfolio"
              className="btn-gradient px-8 py-4 rounded-xl font-semibold text-sm tracking-wide text-white shadow-lg shadow-primary-500/10 flex items-center gap-2 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              View Portfolio <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl border border-slate-700/80 bg-slate-800/20 text-slate-300 hover:text-white hover:border-slate-500 hover:bg-slate-800/40 font-semibold text-sm tracking-wide flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right side graphics / portrait */}
        <div className="md:col-span-5 flex justify-center relative z-10 md:mt-0 mt-8">
          {/* Decorative background glow for portrait */}
          <div className="absolute w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-primary-500/20 to-secondary-500/20 blur-[60px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"></div>

          {/* Premium Frame Container */}
          <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-3xl p-3 bg-gradient-to-b from-white/10 to-transparent border border-white/10 shadow-2xl backdrop-blur-md group overflow-visible">
            {/* Portrait Image */}
            <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 relative">
              <img
                src="/assets/optimized/Hasnat.jpeg"
                alt="Md. Hasnat Sabbir Biplob"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* FLOATING DESIGN BADGES */}
            {/* Adobe Illustrator Badge */}
            <div className="absolute -top-6 -left-6 bg-slate-950/80 backdrop-blur-md border border-slate-800 rounded-2xl p-3 shadow-xl flex items-center gap-3 animate-float">
              <div className="w-10 h-10 rounded-xl bg-[#FF9A00]/10 border border-[#FF9A00]/20 flex items-center justify-center font-bold text-[#FF9A00]">
                Ai
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Expertise</p>
                <h4 className="text-xs font-extrabold text-white">Illustrator</h4>
              </div>
            </div>

            {/* Canva Badge */}
            <div className="absolute bottom-12 -right-10 bg-slate-950/80 backdrop-blur-md border border-slate-800 rounded-2xl p-3 shadow-xl flex items-center gap-3 animate-float-delayed">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center font-bold text-cyan-400 text-sm">
                Cv
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Expertise</p>
                <h4 className="text-xs font-extrabold text-white">Canva Designer</h4>
              </div>
            </div>

            {/* 20+ Posters Badge */}
            <div className="absolute -bottom-6 -left-4 bg-slate-950/80 backdrop-blur-md border border-slate-800 rounded-xl px-4 py-2.5 shadow-xl flex items-center gap-2 animate-float">
              <ImageIcon className="w-4.5 h-4.5 text-secondary-500" />
              <span className="text-xs font-extrabold text-white">20+ Poster Designs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
