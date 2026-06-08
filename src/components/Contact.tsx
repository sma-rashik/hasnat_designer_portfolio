"use client";

import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    
    const waNumber = "8801810291297";
    const waMessage = `*New Contact Form Submission*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Subject:* ${subject}%0A*Message:* ${message}`;
    const waUrl = `https://wa.me/${waNumber}?text=${waMessage}`;
    
    window.open(waUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden z-10 bg-slate-950/20 border-t border-slate-800/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Section Title */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-xs font-bold tracking-widest text-primary-500 uppercase mb-3">Get In Touch</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">Let's Work Together</h3>
        </ScrollReveal>

        <div className="grid md:grid-cols-12 gap-12 max-w-5xl mx-auto">
          {/* Left Column: Contact details */}
          <div className="md:col-span-5 space-y-8">
            <ScrollReveal>
              <h4 className="text-2xl font-bold text-white">Contact Details</h4>
              <p className="text-sm text-slate-400 font-body leading-relaxed">
                Feel free to reach out for freelance projects, agency collaboration, design audits, or organizational design inquiries.
              </p>

              <div className="space-y-6 mt-8">
                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center shrink-0">
                    <Phone className="text-primary-500 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Phone</p>
                    <a href="tel:01810291297" className="text-sm font-semibold text-white hover:text-primary-500 transition-colors">01810291297</a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-secondary-500/10 border border-secondary-500/20 flex items-center justify-center shrink-0">
                    <Mail className="text-secondary-500 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Email</p>
                    <a href="mailto:hasnatsabbir26@gmail.com" className="text-sm font-semibold text-white hover:text-secondary-500 transition-colors">hasnatsabbir26@gmail.com</a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-500 w-5 h-5">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">LinkedIn</p>
                    <a href="https://linkedin.com/in/hasnatsabbirr" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white hover:text-accent-500 transition-colors">linkedin.com/in/hasnatsabbirr</a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center justify-center shrink-0">
                    <MapPin className="text-slate-400 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Location</p>
                    <p className="text-sm font-semibold text-white">Chattogram, Bangladesh</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Glassmorphic form */}
          <div className="md:col-span-7">
            <ScrollReveal delay={0.2}>
              <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-semibold text-slate-300">Your Name</label>
                    <input type="text" id="name" value={formData.name} onChange={handleChange} required className="w-full glass-input px-4 py-3 rounded-xl text-sm text-slate-100 outline-none transition-all duration-300" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-semibold text-slate-300">Your Email</label>
                    <input type="email" id="email" value={formData.email} onChange={handleChange} required className="w-full glass-input px-4 py-3 rounded-xl text-sm text-slate-100 outline-none transition-all duration-300" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-semibold text-slate-300">Subject</label>
                  <input type="text" id="subject" value={formData.subject} onChange={handleChange} required className="w-full glass-input px-4 py-3 rounded-xl text-sm text-slate-100 outline-none transition-all duration-300" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-semibold text-slate-300">Message</label>
                  <textarea id="message" rows={5} value={formData.message} onChange={handleChange} required className="w-full glass-input px-4 py-3 rounded-xl text-sm text-slate-100 outline-none transition-all duration-300 resize-none"></textarea>
                </div>

                <button type="submit" className="btn-gradient w-full py-4 rounded-xl font-bold text-sm tracking-wide uppercase text-white shadow-lg transition-transform duration-300 active:scale-[0.98]">
                  Send Message
                </button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
