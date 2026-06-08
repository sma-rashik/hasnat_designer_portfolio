"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Heart, Phone, Mail } from "lucide-react";

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="pt-20 pb-8 relative overflow-hidden z-10 bg-dark-900 border-t border-slate-800/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Brand Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-500 to-secondary-500 flex items-center justify-center font-bold text-lg text-white shadow-lg">
                  H
                </div>
                <span className="font-extrabold text-xl tracking-tight text-white">
                  Hasnat <span className="text-primary-500 font-extrabold">Sabbir</span>
                </span>
              </div>
              <p className="text-slate-400 font-body text-sm max-w-sm leading-relaxed">
                Elevating brands through strategic visual design, creative posters, and dynamic social media content.
              </p>
            </div>

            {/* Quick Contact & Socials */}
            <div className="md:text-right space-y-6">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Connect Directly</h4>
              <div className="flex flex-wrap md:justify-end gap-3">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/hasnatsabbirr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-800/80 hover:bg-primary-500 hover:text-white border border-slate-700 flex items-center justify-center text-slate-300 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/share/18z5RcxRHW/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-800/80 hover:bg-blue-600 hover:text-white border border-slate-700 flex items-center justify-center text-slate-300 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                {/* Email */}
                <a
                  href="mailto:hasnatsabbir26@gmail.com"
                  className="w-10 h-10 rounded-xl bg-slate-800/80 hover:bg-secondary-500 hover:text-white border border-slate-700 flex items-center justify-center text-slate-300 transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                {/* Phone */}
                <a
                  href="tel:01810291297"
                  className="w-10 h-10 rounded-xl bg-slate-800/80 hover:bg-accent-500 hover:text-white border border-slate-700 flex items-center justify-center text-slate-300 transition-all duration-300"
                  aria-label="Phone"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
              <p className="text-xs text-slate-500 font-body">Available for remote and freelance work internationally.</p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4">
            <p className="text-xs text-slate-500 font-body text-center sm:text-left">
              &copy; <span>{currentYear}</span> Hasnat Sabbir. All rights reserved.
            </p>
            <p className="text-xs text-slate-500 font-body text-center sm:text-right">
              Created By <a href="https://www.linkedin.com/in/sma-rashik/" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-white font-bold transition-colors">S M ABDUL RASHIK</a>
            </p>
          </div>
        </div>
      </footer>

      {/* BACK TO TOP BUTTON */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-40 w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-primary-500 hover:shadow-lg shadow-black/30 hover:shadow-primary-500/20 transition-all duration-300 ${
          showBackToTop ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </>
  );
}
