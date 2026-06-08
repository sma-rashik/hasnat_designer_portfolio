"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "glass-nav shadow-xl py-4 border-b border-slate-800/40"
            : "py-6 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative z-50" onClick={closeMobileMenu}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-500 to-secondary-500 flex items-center justify-center font-bold text-lg text-white shadow-lg shadow-primary-500/20 group-hover:scale-105 transition-all duration-300">
              H
            </div>
            <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-primary-500 transition-colors">
              Hasnat <span className="text-primary-500 font-extrabold group-hover:text-white transition-colors">Sabbir</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="font-medium text-sm text-primary-500 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/portfolio" className="font-medium text-sm text-slate-300 hover:text-primary-500 transition-colors">
              Portfolio
            </Link>
            <a href="/#about" className="font-medium text-sm text-slate-300 hover:text-primary-500 transition-colors">
              About Me
            </a>
            <a href="/#contact" className="font-medium text-sm text-slate-300 hover:text-primary-500 transition-colors">
              Contact Me
            </a>
          </nav>

          {/* CTA Action Button */}
          <div className="hidden md:flex items-center">
            <a
              href="/#contact"
              className="btn-gradient px-6 py-2.5 rounded-xl font-semibold text-xs tracking-wider uppercase text-white shadow-lg transition-all duration-300"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden relative z-50 text-slate-300 hover:text-white focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 transition-transform" />
            ) : (
              <Menu className="w-6 h-6 transition-transform" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Slide-Down Menu Overlay */}
      <div
        className={`fixed inset-0 w-full h-screen bg-dark-900/98 backdrop-blur-xl z-40 flex flex-col justify-center items-center gap-8 transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 text-center">
          <Link href="/" className="text-2xl font-bold text-primary-500" onClick={closeMobileMenu}>
            Home
          </Link>
          <Link
            href="/portfolio"
            className="text-2xl font-semibold text-slate-200 hover:text-primary-500 transition-colors"
            onClick={closeMobileMenu}
          >
            Portfolio
          </Link>
          <a
            href="/#about"
            className="text-2xl font-semibold text-slate-200 hover:text-primary-500 transition-colors"
            onClick={closeMobileMenu}
          >
            About Me
          </a>
          <a
            href="/#contact"
            className="text-2xl font-semibold text-slate-200 hover:text-primary-500 transition-colors"
            onClick={closeMobileMenu}
          >
            Contact Me
          </a>
        </nav>
        <a
          href="/#contact"
          className="btn-gradient px-8 py-3 rounded-xl font-bold text-sm tracking-wider uppercase text-white shadow-lg mt-4"
          onClick={closeMobileMenu}
        >
          Hire Me
        </a>
      </div>
    </>
  );
}
