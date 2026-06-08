<!DOCTYPE html>
<html lang="en" className="scroll-smooth">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hasnat Sabbir | Premium Graphic Designer Portfolio</title>

  {/*  SEO Meta Tags  */}
  <meta name="title" content="Hasnat Sabbir | Graphic Designer Portfolio">
  <meta name="description"
    content="Professional Graphic Designer Portfolio showcasing poster design, branding projects, social media graphics, event promotions, and creative visual solutions.">
  <meta name="keywords"
    content="Graphic Designer, Hasnat Sabbir, Md. Hasnat Sabbir Biplob, Poster Design, Social Media Design, Event Branding, Bangladesh, Chattogram, EEE">
  <meta name="author" content="Md. Hasnat Sabbir Biplob">

  {/*  Favicon  */}
  <link rel="icon" type="image/png" href="assets/optimized/hasnat_sabbir.webp">

  {/*  Google Fonts (Poppins & Inter)  */}
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
    rel="stylesheet">

  {/*  Tailwind CSS CDN  */}
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            primary: {
              50: '#f0f5ff',
              100: '#e0ebff',
              500: '#2563EB', // Royal Blue
              600: '#1d4ed8',
              700: '#1d4ed8',
            },
            secondary: {
              500: '#7C3AED', // Deep Violet
              600: '#6d28d9',
            },
            accent: {
              500: '#06B6D4', // Teal
              600: '#0891b2',
            },
            dark: {
              900: '#0B0F19', // Deep dark blue-grey
              800: '#111827',
              700: '#1F2937',
              600: '#374151',
            },
            light: {
              900: '#F8FAFC',
              800: '#F1F5F9',
              700: '#E2E8F0',
            }
          },
          fontFamily: {
            sans: ['Poppins', 'sans-serif'],
            body: ['Inter', 'sans-serif'],
          },
          animation: {
            'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            'float': 'float 6s ease-in-out infinite',
            'float-delayed': 'float 6s ease-in-out infinite 3s',
            'glow-spin': 'glow-spin 8s linear infinite',
          },
          keyframes: {
            float: {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-15px)' },
            },
            'glow-spin': {
              '0%': { transform: 'rotate(0deg)' },
              '100%': { transform: 'rotate(360deg)' },
            }
          }
        }
      }
    }
  </script>

  {/*  Lucide Icons CDN  */}
  <script src="https://unpkg.com/lucide@latest"></script>

  <style>
    /* Premium custom scrollbar */
    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background: #0B0F19;
    }

    ::-webkit-scrollbar-thumb {
      background: #1F2937;
      border-radius: 4px;
      border: 2px solid #0B0F19;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #2563EB;
    }

    /* Glassmorphism Classes */
    .glass-nav {
      background: rgba(11, 15, 25, 0.5);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
    }

    .glass-card {
      background: rgba(17, 24, 39, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
    }

    .glass-input {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
    }

    .glass-input:focus {
      border-color: #2563EB;
      box-shadow: 0 0 15px rgba(37, 99, 235, 0.15);
    }

    /* Text Gradients */
    .text-glow-gradient {
      background: linear-gradient(135deg, #60A5FA 0%, #a78bfa 50%, #22d3ee 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .btn-gradient {
      background: linear-gradient(90deg, #2563EB 0%, #7C3AED 100%);
    }

    .btn-gradient:hover {
      background: linear-gradient(90deg, #1d4ed8 0%, #6d28d9 100%);
      box-shadow: 0 0 20px rgba(124, 58, 237, 0.4);
    }

    /* Timeline Line Glow */
    .timeline-line {
      background: linear-gradient(180deg, #2563EB 0%, #7C3AED 50%, #06B6D4 100%);
    }

    /* Reveal animations support */
    .reveal-on-scroll {
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .reveal-on-scroll.active {
      opacity: 1;
      transform: translateY(0);
    }
  </style>
</head>

<body
  className="bg-dark-900 text-slate-100 font-sans selection:bg-primary-500 selection:text-white overflow-x-hidden antialiased">

  {/*  Ambient Glow Background Background Circles  */}
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
    <div
      className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary-500/10 blur-[120px] animate-pulse-slow">
    </div>
    <div
      className="absolute top-[40%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-secondary-500/10 blur-[130px] animate-pulse-slow"
      style={{{animationDelay: '2s', }}}></div>
    <div
      className="absolute bottom-[10%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-accent-500/10 blur-[110px] animate-pulse-slow"
      style={{{animationDelay: '4s', }}}></div>
  </div>

  {/*  NAVIGATION HEADER  */}
  <header id="navbar"
    className="fixed top-0 left-0 w-full z-50 transition-all duration-300 py-6 border-b border-transparent">
    <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
      {/*  Logo  */}
      <a href="index.html" className="flex items-center gap-3 group relative z-50">
        <div
          className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-500 to-secondary-500 flex items-center justify-center font-bold text-lg text-white shadow-lg shadow-primary-500/20 group-hover:scale-105 transition-all duration-300">
          H
        </div>
        <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-primary-500 transition-colors">
          Hasnat <span className="text-primary-500 font-light group-hover:text-white transition-colors">Sabbir</span>
        </span>
      </a>

      {/*  Desktop Navigation Links  */}
      <nav className="hidden md:flex items-center gap-8">
        <a href="index.html" className="font-medium text-sm text-primary-500 hover:text-white transition-colors">Home</a>
        <a href="portfolio.html"
          className="font-medium text-sm text-slate-300 hover:text-primary-500 transition-colors">Portfolio</a>
        <a href="#about" className="font-medium text-sm text-slate-300 hover:text-primary-500 transition-colors">About
          Me</a>
        <a href="#contact" className="font-medium text-sm text-slate-300 hover:text-primary-500 transition-colors">Contact
          Me</a>
      </nav>

      {/*  CTA Action Button  */}
      <div className="hidden md:flex items-center">
        <a href="#contact"
          className="btn-gradient px-6 py-2.5 rounded-xl font-semibold text-xs tracking-wider uppercase text-white shadow-lg transition-all duration-300">
          Hire Me
        </a>
      </div>

      {/*  Mobile Hamburger Button  */}
      <button id="mobile-menu-btn" className="md:hidden relative z-50 text-slate-300 hover:text-white focus:outline-none"
        aria-label="Toggle Menu">
        <i data-lucide="menu" id="menu-icon" className="w-6 h-6 transition-transform"></i>
        <i data-lucide="x" id="close-icon" className="w-6 h-6 hidden transition-transform"></i>
      </button>
    </div>

    {/*  Mobile Slide-Down Menu Overlay  */}
    <div id="mobile-menu"
      className="hidden fixed inset-0 w-full h-screen bg-dark-900/98 backdrop-blur-xl z-40 flex flex-col justify-center items-center gap-8 transition-all duration-300">
      <nav className="flex flex-col items-center gap-6 text-center">
        <a href="index.html" className="mobile-nav-link text-2xl font-bold text-primary-500">Home</a>
        <a href="portfolio.html"
          className="mobile-nav-link text-2xl font-semibold text-slate-200 hover:text-primary-500 transition-colors">Portfolio</a>
        <a href="#about"
          className="mobile-nav-link text-2xl font-semibold text-slate-200 hover:text-primary-500 transition-colors">About
          Me</a>
        <a href="#contact"
          className="mobile-nav-link text-2xl font-semibold text-slate-200 hover:text-primary-500 transition-colors">Contact
          Me</a>
      </nav>
      <a href="#contact"
        className="mobile-nav-link btn-gradient px-8 py-3 rounded-xl font-bold text-sm tracking-wider uppercase text-white shadow-lg mt-4">
        Hire Me
      </a>
    </div>
  </header>

  {/*  SECTION 1: HERO SECTION  */}
  <section className="min-h-screen relative flex items-center justify-center pt-32 pb-20 overflow-hidden z-10">
    <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-12 gap-12 items-center">
      {/*  Left side text content  */}
      <div className="md:col-span-7 flex flex-col items-start text-left z-10">
        {/*  Badge  */}
        <span
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-500 font-semibold text-xs uppercase tracking-wider mb-6 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-primary-500"></span> Creative Graphic Designer
        </span>

        {/*  Main Heading  */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
          Designing Visual <br className="hidden sm:block" />
          <span className="text-glow-gradient">Experiences</span> That Inspire
        </h1>

        {/*  Subheading  */}
        <p className="text-base sm:text-lg text-slate-400 font-body leading-relaxed max-w-xl mb-8">
          Hi, I'm <strong className="text-slate-100 font-semibold">Hasnat Sabbir</strong>, a creative graphic designer
          crafting visual solutions that strengthen brand communication. Specialize in high-impact <span
            className="text-slate-200 font-medium border-b border-primary-500/55 pb-0.5">Poster Design</span>, dynamic <span
            className="text-slate-200 font-medium border-b border-secondary-500/55 pb-0.5">Social Media creatives</span>,
          event promotions, and visual campaigns.
        </p>

        {/*  CTA Buttons  */}
        <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
          <a href="portfolio.html"
            className="btn-gradient px-8 py-4 rounded-xl font-semibold text-sm tracking-wide text-white shadow-lg shadow-primary-500/10 flex items-center gap-2 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto justify-center">
            View Portfolio <i data-lucide="arrow-up-right" className="w-4 h-4"></i>
          </a>
          <a href="#contact"
            className="px-8 py-4 rounded-xl border border-slate-700/80 bg-slate-800/20 text-slate-300 hover:text-white hover:border-slate-500 hover:bg-slate-800/40 font-semibold text-sm tracking-wide flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto">
            Contact Me
          </a>
        </div>
      </div>

      {/*  Right side graphics / portrait  */}
      <div className="md:col-span-5 flex justify-center relative z-10 md:mt-0 mt-8">
        {/*  Decorative background glow for portrait  */}
        <div
          className="absolute w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-primary-500/20 to-secondary-500/20 blur-[60px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
        </div>

        {/*  Premium Frame Container  */}
        <div
          className="relative w-full max-w-[360px] aspect-[4/5] rounded-3xl p-3 bg-gradient-to-b from-white/10 to-transparent border border-white/10 shadow-2xl backdrop-blur-md group overflow-visible">

          {/*  Portrait Image  */}
          <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-800">
            <img src="assets/optimized/hasnat_sabbir.webp" alt="Md. Hasnat Sabbir Biplob"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" />
          </div>

          {/*  FLOATING DESIGN BADGES  */}
          {/*  Adobe Illustrator Badge  */}
          <div
            className="absolute -top-6 -left-6 bg-slate-950/80 backdrop-blur-md border border-slate-800 rounded-2xl p-3 shadow-xl flex items-center gap-3 animate-float">
            <div
              className="w-10 h-10 rounded-xl bg-[#FF9A00]/10 border border-[#FF9A00]/20 flex items-center justify-center font-bold text-[#FF9A00]">
              Ai
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Expertise</p>
              <h4 className="text-xs font-extrabold text-white">Illustrator</h4>
            </div>
          </div>

          {/*  Canva Badge  */}
          <div
            className="absolute bottom-12 -right-10 bg-slate-950/80 backdrop-blur-md border border-slate-800 rounded-2xl p-3 shadow-xl flex items-center gap-3 animate-float-delayed">
            <div
              className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center font-bold text-cyan-400 text-sm">
              Cv
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Expertise</p>
              <h4 className="text-xs font-extrabold text-white">Canva Designer</h4>
            </div>
          </div>

          {/*  20+ Posters Badge  */}
          <div
            className="absolute -bottom-6 -left-4 bg-slate-950/80 backdrop-blur-md border border-slate-800 rounded-xl px-4 py-2.5 shadow-xl flex items-center gap-2 animate-float">
            <i data-lucide="image" className="w-4.5 h-4.5 text-secondary-500"></i>
            <span className="text-xs font-extrabold text-white">20+ Poster Designs</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/*  SECTION 2: ABOUT ME  */}
  <section id="about" className="py-24 relative overflow-hidden z-10 border-t border-slate-800/30">
    <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">

      {/*  Section Title  */}
      <div className="text-center md:text-left mb-16 reveal-on-scroll">
        <h2 className="text-xs font-bold tracking-widest text-primary-500 uppercase mb-3">Biography</h2>
        <h3 className="text-3xl md:text-4xl font-extrabold text-white">About Me</h3>
      </div>

      <div className="grid md:grid-cols-12 gap-12 items-center">
        {/*  Left Side: Image collage/frame  */}
        <div className="md:col-span-5 flex flex-col gap-6 reveal-on-scroll">
          <div
            className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl group">
            <img src="assets/optimized/hasnat_sabbir.webp" alt="Md. Hasnat Sabbir Biplob Presentation"
              className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-80">
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs text-primary-500 font-bold uppercase tracking-widest mb-1 block">Creative
                Speaker</span>
              <h4 className="text-lg font-bold text-white">Md. Hasnat Sabbir Biplob</h4>
              <p className="text-xs text-slate-400">Media Specialist & Creative Designer</p>
            </div>
          </div>

          {/*  Grid statistics  */}
          <div className="grid grid-cols-2 gap-4">
            <div
              className="glass-card rounded-2xl p-5 text-center hover:border-primary-500/30 transition-colors duration-300">
              <h4 className="text-3xl font-extrabold text-white text-glow-gradient mb-1">20+</h4>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Posters Designed</p>
            </div>
            <div
              className="glass-card rounded-2xl p-5 text-center hover:border-secondary-500/30 transition-colors duration-300">
              <h4 className="text-3xl font-extrabold text-white text-glow-gradient mb-1">3+</h4>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Orgs Served</p>
            </div>
            <div
              className="glass-card rounded-2xl p-5 text-center hover:border-accent-500/30 transition-colors duration-300">
              <h4 className="text-3xl font-extrabold text-white text-glow-gradient mb-1">4+</h4>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Leadership Roles</p>
            </div>
            <div
              className="glass-card rounded-2xl p-5 text-center hover:border-primary-500/30 transition-colors duration-300">
              <h4 className="text-3xl font-extrabold text-white text-glow-gradient mb-1">100%</h4>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Commitment</p>
            </div>
          </div>
        </div>

        {/*  Right Side: Details text  */}
        <div className="md:col-span-7 flex flex-col justify-center reveal-on-scroll" style={{{transitionDelay: '0.2s', }}}>
          <h4 className="text-2xl font-bold text-white mb-6">Fusing Engineering Logic with Creative Design</h4>

          <div className="space-y-6 text-slate-400 font-body text-sm leading-relaxed">
            <p>
              I am <strong className="text-slate-100">Md. Hasnat Sabbir Biplob</strong>, a creative designer based in
              <strong className="text-slate-100">Chattogram, Bangladesh</strong>. Currently holding a Bachelor of Science in
              Electrical & Electronic Engineering (EEE) from Port City International University, I combine a rigorous
              engineering mindset with an intense passion for visual design.
            </p>

            <p>
              My design philosophy lies in creating clean, modern, and highly effective visual assets that tell a story.
              Over the past few years, I have served in key leadership roles like the <strong className="text-slate-100">IT
                Head at PCIU Volunteers</strong>, <strong className="text-slate-100">IT Captain at ONE MAN ARMY</strong>,
              and <strong className="text-slate-100">Media Specialist at PCIU Networking & Placement Cell</strong>. In these
              roles, I spearhead event campaigns, poster promotions, and brand communications that drive engagement.
            </p>

            <blockquote
              className="border-l-4 border-primary-500 pl-4 py-1.5 italic text-slate-300 bg-slate-800/10 rounded-r-xl">
              "Creative and motivated Graphic Designer seeking opportunities to create visually appealing and effective
              content, strengthen brand communication, and contribute to organizational success."
            </blockquote>

            <p>
              Whether it is drafting typography for a national day poster, engineering a cohesive social media campaign,
              or designing professional branding assets, I bring structure, precision, and raw creativity to every
              canvas.
            </p>
          </div>

          {/*  Buttons  */}
          <div className="flex flex-wrap gap-4 mt-8">
            <a href="#contact"
              className="btn-gradient px-6 py-3 rounded-xl font-semibold text-xs tracking-wider uppercase text-white shadow-md flex items-center gap-2">
              Start Project <i data-lucide="arrow-right" className="w-4 h-4"></i>
            </a>
            <a href="#experience"
              className="px-6 py-3 rounded-xl border border-slate-700 bg-slate-800/10 hover:bg-slate-800/30 text-slate-300 font-semibold text-xs tracking-wider uppercase">
              View Experience
            </a>
          </div>
        </div>
      </div>

    </div>
  </section>

  {/*  SECTION 3: SERVICES  */}
  <section className="py-24 relative overflow-hidden z-10 bg-slate-950/20 border-t border-slate-800/30">
    <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">

      {/*  Section Title  */}
      <div className="text-center mb-20 reveal-on-scroll">
        <h2 className="text-xs font-bold tracking-widest text-secondary-500 uppercase mb-3">Offerings</h2>
        <h3 className="text-3xl md:text-4xl font-extrabold text-white">What I Do</h3>
        <p className="text-slate-400 font-body text-sm max-w-lg mx-auto mt-4">
          Providing end-to-end creative visual assets that help brands and organizations stand out in print and digital
          channels.
        </p>
      </div>

      {/*  Service Cards Grid  */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {/*  Poster Design  */}
        <div
          className="glass-card rounded-3xl p-8 hover:-translate-y-2 hover:border-primary-500/40 hover:shadow-[0_15px_30px_rgba(37,99,235,0.1)] transition-all duration-500 group reveal-on-scroll">
          <div
            className="w-14 h-14 rounded-2xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <i data-lucide="image" className="w-6 h-6 text-primary-500"></i>
          </div>
          <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary-500 transition-colors">Poster Design
          </h4>
          <p className="text-slate-400 font-body text-sm leading-relaxed">
            High-impact, concept-driven poster layouts designed to convey complex messages, event campaigns, and
            artistic print projects.
          </p>
        </div>

        {/*  Social Media Design  */}
        <div
          className="glass-card rounded-3xl p-8 hover:-translate-y-2 hover:border-secondary-500/40 hover:shadow-[0_15px_30px_rgba(124,58,237,0.1)] transition-all duration-500 group reveal-on-scroll"
          style={{{transitionDelay: '0.1s', }}}>
          <div
            className="w-14 h-14 rounded-2xl bg-secondary-500/10 border border-secondary-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <i data-lucide="share-2" className="w-6 h-6 text-secondary-500"></i>
          </div>
          <h4 className="text-xl font-bold text-white mb-3 group-hover:text-secondary-500 transition-colors">Social Media
            Design</h4>
          <p className="text-slate-400 font-body text-sm leading-relaxed">
            Engaging, visual-heavy graphics tailored for Facebook, Instagram, and LinkedIn to generate clicks,
            registrations, and page growth.
          </p>
        </div>

        {/*  Event Branding  */}
        <div
          className="glass-card rounded-3xl p-8 hover:-translate-y-2 hover:border-accent-500/40 hover:shadow-[0_15px_30px_rgba(6,182,212,0.1)] transition-all duration-500 group reveal-on-scroll"
          style={{{transitionDelay: '0.2s', }}}>
          <div
            className="w-14 h-14 rounded-2xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <i data-lucide="award" className="w-6 h-6 text-accent-500"></i>
          </div>
          <h4 className="text-xl font-bold text-white mb-3 group-hover:text-accent-500 transition-colors">Event Branding
          </h4>
          <p className="text-slate-400 font-body text-sm leading-relaxed">
            Cohesive design suites for campus, social, and corporate events including standees, banners, invitations,
            and ID cards.
          </p>
        </div>

        {/*  Promotional Graphics  */}
        <div
          className="glass-card rounded-3xl p-8 hover:-translate-y-2 hover:border-primary-500/40 hover:shadow-[0_15px_30px_rgba(37,99,235,0.1)] transition-all duration-500 group reveal-on-scroll"
          style={{{transitionDelay: '0.3s', }}}>
          <div
            className="w-14 h-14 rounded-2xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <i data-lucide="megaphone" className="w-6 h-6 text-primary-500"></i>
          </div>
          <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary-500 transition-colors">Promotional
            Graphics</h4>
          <p className="text-slate-400 font-body text-sm leading-relaxed">
            Eye-catching and actionable promotional visuals optimized to capture user attention instantly and elevate
            brand messages.
          </p>
        </div>

        {/*  Visual Communication  */}
        <div
          className="glass-card rounded-3xl p-8 hover:-translate-y-2 hover:border-secondary-500/40 hover:shadow-[0_15px_30px_rgba(124,58,237,0.1)] transition-all duration-500 group reveal-on-scroll"
          style={{{transitionDelay: '0.4s', }}}>
          <div
            className="w-14 h-14 rounded-2xl bg-secondary-500/10 border border-secondary-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <i data-lucide="messages-square" className="w-6 h-6 text-secondary-500"></i>
          </div>
          <h4 className="text-xl font-bold text-white mb-3 group-hover:text-secondary-500 transition-colors">Visual
            Communication</h4>
          <p className="text-slate-400 font-body text-sm leading-relaxed">
            Translating core organizational messages or data into striking diagrams, infographics, or visual
            representations.
          </p>
        </div>

        {/*  Creative Marketing Materials  */}
        <div
          className="glass-card rounded-3xl p-8 hover:-translate-y-2 hover:border-accent-500/40 hover:shadow-[0_15px_30px_rgba(6,182,212,0.1)] transition-all duration-500 group reveal-on-scroll"
          style={{{transitionDelay: '0.5s', }}}>
          <div
            className="w-14 h-14 rounded-2xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <i data-lucide="file-text" className="w-6 h-6 text-accent-500"></i>
          </div>
          <h4 className="text-xl font-bold text-white mb-3 group-hover:text-accent-500 transition-colors">Creative Marketing
            Materials</h4>
          <p className="text-slate-400 font-body text-sm leading-relaxed">
            Brochures, digital flyer designs, presentation decks, and web banners designed to convert viewers into
            clients or leads.
          </p>
        </div>

      </div>

    </div>
  </section>

  {/*  SECTION 4: SKILLS  */}
  <section className="py-24 relative overflow-hidden z-10 border-t border-slate-800/30">
    <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">

      {/*  Section Title  */}
      <div className="text-center mb-20 reveal-on-scroll">
        <h2 className="text-xs font-bold tracking-widest text-primary-500 uppercase mb-3">Expertise</h2>
        <h3 className="text-3xl md:text-4xl font-extrabold text-white">Skills & Toolkit</h3>
      </div>

      {/*  Skills Layout  */}
      <div className="grid md:grid-cols-2 gap-12">
        {/*  Core Tools & Strategy  */}
        <div className="space-y-6 reveal-on-scroll">
          <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <i data-lucide="layers" className="text-primary-500 w-5 h-5"></i> Software & Core Competencies
          </h4>

          {/*  Adobe Illustrator  */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-300 font-semibold">Adobe Illustrator</span>
              <span className="text-primary-500 font-bold">95%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-1000 ease-out skill-bar"
                style={{{width: '0%', }}} data-width="95%"></div>
            </div>
          </div>

          {/*  Canva  */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-300 font-semibold">Canva (Fast Ideation & Templates)</span>
              <span className="text-primary-500 font-bold">90%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-1000 ease-out skill-bar"
                style={{{width: '0%', }}} data-width="90%"></div>
            </div>
          </div>

          {/*  Creative Strategy  */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-300 font-semibold">Creative Strategy & Visual Storytelling</span>
              <span className="text-primary-500 font-bold">85%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-1000 ease-out skill-bar"
                style={{{width: '0%', }}} data-width="85%"></div>
            </div>
          </div>

          {/*  Event Promotion & Marketing  */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-300 font-semibold">Marketing Graphics & Campaign Execution</span>
              <span className="text-primary-500 font-bold">88%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-1000 ease-out skill-bar"
                style={{{width: '0%', }}} data-width="88%"></div>
            </div>
          </div>
        </div>

        {/*  Design Verticals  */}
        <div className="space-y-6 reveal-on-scroll" style={{{transitionDelay: '0.2s', }}}>
          <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <i data-lucide="brush" className="text-secondary-500 w-5 h-5"></i> Design Specialties
          </h4>

          {/*  Poster Design  */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-300 font-semibold">Poster & Banner Design</span>
              <span className="text-secondary-500 font-bold">95%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-secondary-500 to-accent-500 transition-all duration-1000 ease-out skill-bar"
                style={{{width: '0%', }}} data-width="95%"></div>
            </div>
          </div>

          {/*  Social Media Design  */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-300 font-semibold">Social Media Creatives</span>
              <span className="text-secondary-500 font-bold">92%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-secondary-500 to-accent-500 transition-all duration-1000 ease-out skill-bar"
                style={{{width: '0%', }}} data-width="92%"></div>
            </div>
          </div>

          {/*  Visual Communication  */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-300 font-semibold">Visual Communication & Layouts</span>
              <span className="text-secondary-500 font-bold">90%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-secondary-500 to-accent-500 transition-all duration-1000 ease-out skill-bar"
                style={{{width: '0%', }}} data-width="90%"></div>
            </div>
          </div>

          {/*  Branding Design  */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-300 font-semibold">Branding Design & Identity</span>
              <span className="text-secondary-500 font-bold">88%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-secondary-500 to-accent-500 transition-all duration-1000 ease-out skill-bar"
                style={{{width: '0%', }}} data-width="88%"></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>

  {/*  SECTION 5: EXPERIENCE  */}
  <section id="experience" className="py-24 relative overflow-hidden z-10 bg-slate-950/20 border-t border-slate-800/30">
    <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">

      {/*  Section Title  */}
      <div className="text-center mb-20 reveal-on-scroll">
        <h2 className="text-xs font-bold tracking-widest text-accent-500 uppercase mb-3">Timeline</h2>
        <h3 className="text-3xl md:text-4xl font-extrabold text-white">Professional Experience</h3>
      </div>

      {/*  Experience Vertical Timeline  */}
      <div className="relative max-w-4xl mx-auto">
        {/*  Glowing Vertical Center Line  */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 timeline-line rounded-full -translate-x-1/2"></div>

        {/*  Experience Item 1: PCIU Volunteers  */}
        <div className="relative grid md:grid-cols-2 gap-8 md:gap-16 items-start mb-16 group reveal-on-scroll">
          {/*  Timeline Node  */}
          <div
            className="absolute left-4 md:left-1/2 top-4 w-4 h-4 rounded-full bg-primary-500 border-4 border-slate-950 shadow-[0_0_15px_#2563EB] -translate-x-1/2 z-10 group-hover:scale-125 transition-transform duration-300">
          </div>

          {/*  Content Left (Mobile: Right)  */}
          <div className="md:text-right md:pr-4 pl-10 md:pl-0">
            <span
              className="inline-block px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-500 text-xs font-bold uppercase tracking-wider mb-2">
              Leader & Lead Designer
            </span>
            <h4 className="text-xl font-extrabold text-white">PCIU Volunteers</h4>
            <h5 className="text-sm text-slate-300 font-semibold mt-1">IT Head</h5>
            <p className="text-xs text-slate-400 mt-1 font-body">2024 - Present</p>
          </div>
          {/*  Content Right  */}
          <div className="pl-10 md:pl-4">
            <div className="glass-card rounded-2xl p-6 hover:border-primary-500/30 transition-all duration-300">
              <ul className="space-y-3.5 text-sm text-slate-400 font-body">
                <li className="flex gap-2"><i data-lucide="check-circle-2"
                    className="text-primary-500 w-4 h-4 shrink-0 mt-0.5"></i> <span>Formulate and execute complete branding
                    packages for campus programs, charity campaigns, and social events.</span></li>
                <li className="flex gap-2"><i data-lucide="check-circle-2"
                    className="text-primary-500 w-4 h-4 shrink-0 mt-0.5"></i> <span>Manage and mentor a design team of 5+
                    junior volunteers, ensuring brand integrity.</span></li>
                <li className="flex gap-2"><i data-lucide="check-circle-2"
                    className="text-primary-500 w-4 h-4 shrink-0 mt-0.5"></i> <span>Conceptualized and designed the visual
                    identities for the flagship community drive "Sharing Happiness 6.0".</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/*  Experience Item 2: ONE MAN ARMY  */}
        <div className="relative grid md:grid-cols-2 gap-8 md:gap-16 items-start mb-16 group reveal-on-scroll">
          {/*  Timeline Node  */}
          <div
            className="absolute left-4 md:left-1/2 top-4 w-4 h-4 rounded-full bg-secondary-500 border-4 border-slate-950 shadow-[0_0_15px_#7C3AED] -translate-x-1/2 z-10 group-hover:scale-125 transition-transform duration-300">
          </div>

          {/*  Content Left (Mobile: Right) - Order reversal for layout  */}
          <div className="md:order-2 md:pl-4 pl-10">
            <span
              className="inline-block px-3 py-1 rounded-full bg-secondary-500/10 border border-secondary-500/20 text-secondary-500 text-xs font-bold uppercase tracking-wider mb-2">
              Campaign & IT Director
            </span>
            <h4 className="text-xl font-extrabold text-white">ONE MAN ARMY</h4>
            <h5 className="text-sm text-slate-300 font-semibold mt-1">IT Captain</h5>
            <p className="text-xs text-slate-400 mt-1 font-body">2023 - 2024</p>
          </div>
          {/*  Content Right (Mobile: Left)  */}
          <div className="md:order-1 md:text-right md:pr-4 pl-10 md:pl-0">
            <div className="glass-card rounded-2xl p-6 hover:border-secondary-500/30 transition-all duration-300">
              <ul className="space-y-3.5 text-sm text-slate-400 font-body md:text-left">
                <li className="flex gap-2"><i data-lucide="check-circle-2"
                    className="text-secondary-500 w-4 h-4 shrink-0 mt-0.5"></i> <span>Led digital transformation projects,
                    managing server channels and visual communication frameworks.</span></li>
                <li className="flex gap-2"><i data-lucide="check-circle-2"
                    className="text-secondary-500 w-4 h-4 shrink-0 mt-0.5"></i> <span>Developed highly engaging social media
                    promotional content, driving active student memberships.</span></li>
                <li className="flex gap-2"><i data-lucide="check-circle-2"
                    className="text-secondary-500 w-4 h-4 shrink-0 mt-0.5"></i> <span>Organized and designed branding setups
                    for event registrations and stage backdrops.</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/*  Experience Item 3: PCIU Networking Cell  */}
        <div className="relative grid md:grid-cols-2 gap-8 md:gap-16 items-start mb-16 group reveal-on-scroll">
          {/*  Timeline Node  */}
          <div
            className="absolute left-4 md:left-1/2 top-4 w-4 h-4 rounded-full bg-accent-500 border-4 border-slate-950 shadow-[0_0_15px_#06B6D4] -translate-x-1/2 z-10 group-hover:scale-125 transition-transform duration-300">
          </div>

          {/*  Content Left (Mobile: Right)  */}
          <div className="md:text-right md:pr-4 pl-10 md:pl-0">
            <span
              className="inline-block px-3 py-1 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-500 text-xs font-bold uppercase tracking-wider mb-2">
              Visual Design & Outreach
            </span>
            <h4 className="text-xl font-extrabold text-white font-sans">PCIU Networking & Placement Cell</h4>
            <h5 className="text-sm text-slate-300 font-semibold mt-1">Media Specialist</h5>
            <p className="text-xs text-slate-400 mt-1 font-body font-normal">2023 - Present</p>
          </div>
          {/*  Content Right  */}
          <div className="pl-10 md:pl-4">
            <div className="glass-card rounded-2xl p-6 hover:border-accent-500/30 transition-all duration-300">
              <ul className="space-y-3.5 text-sm text-slate-400 font-body">
                <li className="flex gap-2"><i data-lucide="check-circle-2"
                    className="text-accent-500 w-4 h-4 shrink-0 mt-0.5"></i> <span>Craft corporate speaker highlights,
                    webinar announcement banners, and placement alerts.</span></li>
                <li className="flex gap-2"><i data-lucide="check-circle-2"
                    className="text-accent-500 w-4 h-4 shrink-0 mt-0.5"></i> <span>Created marketing materials, booklets,
                    and corporate brochures to promote graduates.</span></li>
                <li className="flex gap-2"><i data-lucide="check-circle-2"
                    className="text-accent-500 w-4 h-4 shrink-0 mt-0.5"></i> <span>Maintained consistent branding styles
                    across Facebook pages, driving 35% higher student reach.</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/*  Experience Item 4: KSRM  */}
        <div className="relative grid md:grid-cols-2 gap-8 md:gap-16 items-start group reveal-on-scroll">
          {/*  Timeline Node  */}
          <div
            className="absolute left-4 md:left-1/2 top-4 w-4 h-4 rounded-full bg-slate-600 border-4 border-slate-950 shadow-[0_0_15px_#4b5563] -translate-x-1/2 z-10 group-hover:scale-125 transition-transform duration-300">
          </div>

          {/*  Content Left (Mobile: Right) - Order reversal for layout  */}
          <div className="md:order-2 md:pl-4 pl-10">
            <span
              className="inline-block px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">
              Engineering Apprenticeship
            </span>
            <h4 className="text-xl font-extrabold text-white">KSRM (Kabir Steel Re-Rolling Mills)</h4>
            <h5 className="text-sm text-slate-300 font-semibold mt-1">Electrical Engineering Intern</h5>
            <p className="text-xs text-slate-400 mt-1 font-body">Internship Phase</p>
          </div>
          {/*  Content Right (Mobile: Left)  */}
          <div className="md:order-1 md:text-right md:pr-4 pl-10 md:pl-0">
            <div className="glass-card rounded-2xl p-6 hover:border-slate-500/30 transition-all duration-300">
              <ul className="space-y-3.5 text-sm text-slate-400 font-body md:text-left">
                <li className="flex gap-2"><i data-lucide="check-circle-2"
                    className="text-slate-500 w-4 h-4 shrink-0 mt-0.5"></i> <span>Acquired electrical plant operations
                    knowledge, studying automated control units.</span></li>
                <li className="flex gap-2"><i data-lucide="check-circle-2"
                    className="text-slate-500 w-4 h-4 shrink-0 mt-0.5"></i> <span>Leveraged structured engineering thinking
                    to design project workflows and organize visual assets.</span></li>
              </ul>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>

  {/*  SECTION 6: EDUCATION  */}
  <section className="py-24 relative overflow-hidden z-10 border-t border-slate-800/30">
    <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">

      {/*  Section Title  */}
      <div className="text-center mb-20 reveal-on-scroll">
        <h2 className="text-xs font-bold tracking-widest text-primary-500 uppercase mb-3">Academic Base</h2>
        <h3 className="text-3xl md:text-4xl font-extrabold text-white">Education</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/*  EEE Bachelor  */}
        <div
          className="glass-card rounded-3xl p-8 hover:border-primary-500/30 transition-colors duration-300 flex gap-6 reveal-on-scroll">
          <div
            className="w-12 h-12 rounded-2xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center shrink-0">
            <i data-lucide="graduation-cap" className="text-primary-500 w-6 h-6"></i>
          </div>
          <div>
            <span className="text-xs text-primary-500 font-semibold tracking-wider uppercase">Bachelor of Science
              (B.Sc.)</span>
            <h4 className="text-xl font-extrabold text-white mt-1">Electrical & Electronic Engineering (EEE)</h4>
            <p className="text-sm text-slate-300 font-semibold mt-2">Port City International University</p>
            <p className="text-xs text-slate-400 mt-4 font-body leading-relaxed">
              Applying problem-solving, structural analytical planning, and organization layouts developed during
              engineering studies to creative graphics and UI structures.
            </p>
          </div>
        </div>

        {/*  Diploma in Electrical  */}
        <div
          className="glass-card rounded-3xl p-8 hover:border-secondary-500/30 transition-colors duration-300 flex gap-6 reveal-on-scroll"
          style={{{transitionDelay: '0.2s', }}}>
          <div
            className="w-12 h-12 rounded-2xl bg-secondary-500/10 border border-secondary-500/20 flex items-center justify-center shrink-0">
            <i data-lucide="book-open" className="text-secondary-500 w-6 h-6"></i>
          </div>
          <div>
            <span className="text-xs text-secondary-500 font-semibold tracking-wider uppercase">Diploma in
              Engineering</span>
            <h4 className="text-xl font-extrabold text-white mt-1">Electrical Engineering</h4>
            <p className="text-sm text-slate-300 font-semibold mt-2">Bangladesh Sweden Polytechnic Institute</p>
            <p className="text-xs text-slate-400 mt-4 font-body leading-relaxed">
              Strong technical background in electrical systems, automation fundamentals, and structured documentation
              workflows.
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>

  {/*  SECTION 7: RECENT WORKS  */}
  <section className="py-24 relative overflow-hidden z-10 bg-slate-950/20 border-t border-slate-800/30">
    <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">

      {/*  Section Title  */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16 reveal-on-scroll">
        <div className="text-left">
          <h2 className="text-xs font-bold tracking-widest text-primary-500 uppercase mb-3">Portfolio</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">Recent Works</h3>
        </div>
        <a href="portfolio.html"
          className="inline-flex items-center gap-2 text-primary-500 hover:text-white font-bold text-sm group transition-colors duration-300">
          View All Projects <i data-lucide="arrow-right"
            className="w-4 h-4 group-hover:translate-x-1 transition-transform"></i>
        </a>
      </div>

      {/*  Curated Works Grid  */}
      <div id="recent-works-grid" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {/*  Project 1  */}
        <div
          className="glass-card rounded-3xl overflow-hidden hover:-translate-y-1.5 hover:border-primary-500/30 transition-all duration-300 group">
          <div className="aspect-[4/3] w-full overflow-hidden bg-slate-900 border-b border-slate-800 relative">
            <img src="assets/optimized/Appreciation Ceremony Banner.webp" alt="Appreciation Ceremony Banner"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              loading="lazy" />
            <div
              className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <a href="portfolio.html?project=Appreciation%20Ceremony%20Banner"
                className="w-10 h-10 rounded-xl bg-primary-500 text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300"
                aria-label="Zoom Project">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  className="lucide lucide-zoom-in w-5 h-5">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" x2="16.65" y1="21" y2="16.65"></line>
                  <line x1="11" x2="11" y1="8" y2="14"></line>
                  <line x1="8" x2="14" y1="11" y2="11"></line>
                </svg>
              </a>
            </div>
          </div>
          <div className="p-6">
            <span
              className="text-[10px] font-bold uppercase tracking-wider text-primary-500 bg-primary-500/10 px-2.5 py-1 rounded-md">Event
              Promotion</span>
            <h4
              className="text-base font-extrabold text-white mt-3 leading-tight group-hover:text-primary-500 transition-colors">
              Appreciation Ceremony Banner</h4>
            <p className="text-xs text-slate-400 font-body mt-2.5 line-clamp-2">Grand event banner design for the PCIU
              Volunteers appreciation and recognition ceremony.</p>
          </div>
        </div>

        {/*  Project 2  */}
        <div
          className="glass-card rounded-3xl overflow-hidden hover:-translate-y-1.5 hover:border-primary-500/30 transition-all duration-300 group">
          <div className="aspect-[4/3] w-full overflow-hidden bg-slate-900 border-b border-slate-800 relative">
            <img src="assets/optimized/Bangla New Year.webp" alt="Bangla New Year Celebration"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              loading="lazy" />
            <div
              className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <a href="portfolio.html?project=Bangla%20New%20Year%20Celebration"
                className="w-10 h-10 rounded-xl bg-primary-500 text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300"
                aria-label="Zoom Project">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  className="lucide lucide-zoom-in w-5 h-5">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" x2="16.65" y1="21" y2="16.65"></line>
                  <line x1="11" x2="11" y1="8" y2="14"></line>
                  <line x1="8" x2="14" y1="11" y2="11"></line>
                </svg>
              </a>
            </div>
          </div>
          <div className="p-6">
            <span
              className="text-[10px] font-bold uppercase tracking-wider text-primary-500 bg-primary-500/10 px-2.5 py-1 rounded-md">Social
              Media</span>
            <h4
              className="text-base font-extrabold text-white mt-3 leading-tight group-hover:text-primary-500 transition-colors">
              Bangla New Year Celebration</h4>
            <p className="text-xs text-slate-400 font-body mt-2.5 line-clamp-2">Festive social media post celebrating Pohela
              Boishakh (Bangla New Year) with traditional motifs.</p>
          </div>
        </div>

        {/*  Project 3  */}
        <div
          className="glass-card rounded-3xl overflow-hidden hover:-translate-y-1.5 hover:border-primary-500/30 transition-all duration-300 group">
          <div className="aspect-[4/3] w-full overflow-hidden bg-slate-900 border-b border-slate-800 relative">
            <img src="assets/optimized/Champions poster.webp" alt="Champions Tournament Poster"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              loading="lazy" />
            <div
              className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <a href="portfolio.html?project=Champions%20Tournament%20Poster"
                className="w-10 h-10 rounded-xl bg-primary-500 text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300"
                aria-label="Zoom Project">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  className="lucide lucide-zoom-in w-5 h-5">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" x2="16.65" y1="21" y2="16.65"></line>
                  <line x1="11" x2="11" y1="8" y2="14"></line>
                  <line x1="8" x2="14" y1="11" y2="11"></line>
                </svg>
              </a>
            </div>
          </div>
          <div className="p-6">
            <span
              className="text-[10px] font-bold uppercase tracking-wider text-primary-500 bg-primary-500/10 px-2.5 py-1 rounded-md">Event
              Promotion</span>
            <h4
              className="text-base font-extrabold text-white mt-3 leading-tight group-hover:text-primary-500 transition-colors">
              Champions Tournament Poster</h4>
            <p className="text-xs text-slate-400 font-body mt-2.5 line-clamp-2">High-energy sports tournament promotional
              poster celebrating championship victory.</p>
          </div>
        </div>

        {/*  Project 4  */}
        <div
          className="glass-card rounded-3xl overflow-hidden hover:-translate-y-1.5 hover:border-primary-500/30 transition-all duration-300 group">
          <div className="aspect-[4/3] w-full overflow-hidden bg-slate-900 border-b border-slate-800 relative">
            <img src="assets/optimized/Donation poster.webp" alt="Charity Donation Campaign Poster"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              loading="lazy" />
            <div
              className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <a href="portfolio.html?project=Charity%20Donation%20Campaign%20Poster"
                className="w-10 h-10 rounded-xl bg-primary-500 text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300"
                aria-label="Zoom Project">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  className="lucide lucide-zoom-in w-5 h-5">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" x2="16.65" y1="21" y2="16.65"></line>
                  <line x1="11" x2="11" y1="8" y2="14"></line>
                  <line x1="8" x2="14" y1="11" y2="11"></line>
                </svg>
              </a>
            </div>
          </div>
          <div className="p-6">
            <span
              className="text-[10px] font-bold uppercase tracking-wider text-primary-500 bg-primary-500/10 px-2.5 py-1 rounded-md">Poster
              Design</span>
            <h4
              className="text-base font-extrabold text-white mt-3 leading-tight group-hover:text-primary-500 transition-colors">
              Charity Donation Campaign Poster</h4>
            <p className="text-xs text-slate-400 font-body mt-2.5 line-clamp-2">A clean, emotionally resonant poster
              advocating for voluntary contributions and community aid.</p>
          </div>
        </div>

        {/*  Project 5  */}
        <div
          className="glass-card rounded-3xl overflow-hidden hover:-translate-y-1.5 hover:border-primary-500/30 transition-all duration-300 group">
          <div className="aspect-[4/3] w-full overflow-hidden bg-slate-900 border-b border-slate-800 relative">
            <img src="assets/optimized/Movie Sequel poster.webp" alt="Cinematic Movie Fan Poster"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              loading="lazy" />
            <div
              className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <a href="portfolio.html?project=Cinematic%20Movie%20Fan%20Poster"
                className="w-10 h-10 rounded-xl bg-primary-500 text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300"
                aria-label="Zoom Project">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  className="lucide lucide-zoom-in w-5 h-5">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" x2="16.65" y1="21" y2="16.65"></line>
                  <line x1="11" x2="11" y1="8" y2="14"></line>
                  <line x1="8" x2="14" y1="11" y2="11"></line>
                </svg>
              </a>
            </div>
          </div>
          <div className="p-6">
            <span
              className="text-[10px] font-bold uppercase tracking-wider text-primary-500 bg-primary-500/10 px-2.5 py-1 rounded-md">Poster
              Design</span>
            <h4
              className="text-base font-extrabold text-white mt-3 leading-tight group-hover:text-primary-500 transition-colors">
              Cinematic Movie Fan Poster</h4>
            <p className="text-xs text-slate-400 font-body mt-2.5 line-clamp-2">Cinematic, high-contrast poster showcasing
              advanced image manipulation and compositing skills.</p>
          </div>
        </div>

        {/*  Project 6  */}
        <div
          className="glass-card rounded-3xl overflow-hidden hover:-translate-y-1.5 hover:border-primary-500/30 transition-all duration-300 group">
          <div className="aspect-[4/3] w-full overflow-hidden bg-slate-900 border-b border-slate-800 relative">
            <img src="assets/optimized/Alarming Poster.webp" alt="Climate Change awareness Poster"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              loading="lazy" />
            <div
              className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <a href="portfolio.html?project=Climate%20Change%20awareness%20Poster"
                className="w-10 h-10 rounded-xl bg-primary-500 text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300"
                aria-label="Zoom Project">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  className="lucide lucide-zoom-in w-5 h-5">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" x2="16.65" y1="21" y2="16.65"></line>
                  <line x1="11" x2="11" y1="8" y2="14"></line>
                  <line x1="8" x2="14" y1="11" y2="11"></line>
                </svg>
              </a>
            </div>
          </div>
          <div className="p-6">
            <span
              className="text-[10px] font-bold uppercase tracking-wider text-primary-500 bg-primary-500/10 px-2.5 py-1 rounded-md">Poster
              Design</span>
            <h4
              className="text-base font-extrabold text-white mt-3 leading-tight group-hover:text-primary-500 transition-colors">
              Climate Change awareness Poster</h4>
            <p className="text-xs text-slate-400 font-body mt-2.5 line-clamp-2">A dramatic visual poster designed to raise
              awareness about global warming and environmental crises.</p>
          </div>
        </div>

      </div>

      {/*  View All Projects Center Button  */}
      <div className="text-center mt-12 mb-8">
        <a href="portfolio.html"
          className="btn-gradient inline-flex items-center justify-center gap-2 px-10 py-5 rounded-xl font-bold text-base tracking-wide text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(124,58,237,0.6)]">
          View All Projects <i data-lucide="grid" className="w-5 h-5"></i>
        </a>
      </div>

    </div>
  </section>

  {/*  SECTION 8: ACHIEVEMENTS  */}
  <section className="py-24 relative overflow-hidden z-10 border-t border-slate-800/30">
    <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">

      {/*  Section Title  */}
      <div className="text-center mb-20 reveal-on-scroll">
        <h2 className="text-xs font-bold tracking-widest text-secondary-500 uppercase mb-3">Highlights</h2>
        <h3 className="text-3xl md:text-4xl font-extrabold text-white">Achievements & Impact</h3>
      </div>

      {/*  Achievements Grid  */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/*  1  */}
        <div
          className="glass-card rounded-3xl p-8 hover:border-primary-500/20 transition-all duration-300 reveal-on-scroll">
          <div className="text-primary-500 text-3xl font-extrabold mb-4">20+</div>
          <h4 className="text-lg font-bold text-white mb-2">Posters Designed</h4>
          <p className="text-slate-400 font-body text-xs leading-relaxed">
            Successfully conceptualized and designed over 20+ custom event promotion posters, national day tributes, and
            social cause campaigns.
          </p>
        </div>
        {/*  2  */}
        <div
          className="glass-card rounded-3xl p-8 hover:border-secondary-500/20 transition-all duration-300 reveal-on-scroll"
          style={{{transitionDelay: '0.1s', }}}>
          <div className="text-secondary-500 text-3xl font-extrabold mb-4">3+</div>
          <h4 className="text-lg font-bold text-white mb-2">Organizations Served</h4>
          <p className="text-slate-400 font-body text-xs leading-relaxed">
            Provided creative design services, brand asset management, and social media direction for key campus
            organizations and groups.
          </p>
        </div>
        {/*  3  */}
        <div className="glass-card rounded-3xl p-8 hover:border-accent-500/20 transition-all duration-300 reveal-on-scroll"
          style={{{transitionDelay: '0.2s', }}}>
          <div className="text-accent-500 text-3xl font-extrabold mb-4">4+</div>
          <h4 className="text-lg font-bold text-white mb-2">Leadership Roles</h4>
          <p className="text-slate-400 font-body text-xs leading-relaxed">
            Served as IT Head at PCIU Volunteers, IT Captain at ONE MAN ARMY, and Media Specialist at PCIU Placement
            Cell.
          </p>
        </div>
        {/*  4  */}
        <div className="glass-card rounded-3xl p-8 hover:border-primary-500/20 transition-all duration-300 reveal-on-scroll"
          style={{{transitionDelay: '0.3s', }}}>
          <div className="text-primary-500 text-3xl font-extrabold mb-4">10+</div>
          <h4 className="text-lg font-bold text-white mb-2">Event Branding Campaigns</h4>
          <p className="text-slate-400 font-body text-xs leading-relaxed">
            Managed complete visual sets for high-attendance campaigns, including stage banners, digital flyers,
            tickets, and sponsor slides.
          </p>
        </div>
        {/*  5  */}
        <div
          className="glass-card rounded-3xl p-8 hover:border-secondary-500/20 transition-all duration-300 reveal-on-scroll"
          style={{{transitionDelay: '0.4s', }}}>
          <div className="text-secondary-500 text-3xl font-extrabold mb-4">100%</div>
          <h4 className="text-lg font-bold text-white mb-2">Creative Dedication</h4>
          <p className="text-slate-400 font-body text-xs leading-relaxed">
            Fusing technical engineering precision with modern graphic design theories to produce highly aesthetic
            visual assets.
          </p>
        </div>
        {/*  6  */}
        <div className="glass-card rounded-3xl p-8 hover:border-accent-500/20 transition-all duration-300 reveal-on-scroll"
          style={{{transitionDelay: '0.5s', }}}>
          <div className="text-accent-500 text-3xl font-extrabold mb-4">25%</div>
          <h4 className="text-lg font-bold text-white mb-2">Outreach Growth</h4>
          <p className="text-slate-400 font-body text-xs leading-relaxed">
            Elevated organizational online engagement by 25-40% through consistent layout guidelines, striking
            typography, and custom visuals.
          </p>
        </div>
      </div>

    </div>
  </section>

  {/*  SECTION 9: CONTACT SECTION  */}
  <section id="contact" className="py-24 relative overflow-hidden z-10 bg-slate-950/20 border-t border-slate-800/30">
    <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">

      {/*  Section Title  */}
      <div className="text-center mb-16 reveal-on-scroll">
        <h2 className="text-xs font-bold tracking-widest text-primary-500 uppercase mb-3">Get In Touch</h2>
        <h3 className="text-3xl md:text-4xl font-extrabold text-white">Let's Work Together</h3>
      </div>

      <div className="grid md:grid-cols-12 gap-12 max-w-5xl mx-auto">
        {/*  Left Column: Contact details  */}
        <div className="md:col-span-5 space-y-8 reveal-on-scroll">
          <h4 className="text-2xl font-bold text-white">Contact Details</h4>
          <p className="text-sm text-slate-400 font-body leading-relaxed">
            Feel free to reach out for freelance projects, agency collaboration, design audits, or organizational design
            inquiries.
          </p>

          <div className="space-y-6">
            {/*  Phone  */}
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-2xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center shrink-0">
                <i data-lucide="phone" className="text-primary-500 w-5 h-5"></i>
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Phone</p>
                <a href="tel:01810291297"
                  className="text-sm font-semibold text-white hover:text-primary-500 transition-colors">01810291297</a>
              </div>
            </div>

            {/*  Email  */}
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-2xl bg-secondary-500/10 border border-secondary-500/20 flex items-center justify-center shrink-0">
                <i data-lucide="mail" className="text-secondary-500 w-5 h-5"></i>
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Email</p>
                <a href="mailto:hasnatsabbir26@gmail.com"
                  className="text-sm font-semibold text-white hover:text-secondary-500 transition-colors">hasnatsabbir26@gmail.com</a>
              </div>
            </div>

            {/*  LinkedIn  */}
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-2xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  className="lucide lucide-linkedin text-accent-500 w-5 h-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">LinkedIn</p>
                <a href="https://linkedin.com/in/hasnatsabbirr" target="_blank" rel="noopener noreferrer"
                  className="text-sm font-semibold text-white hover:text-accent-500 transition-colors">linkedin.com/in/hasnatsabbirr</a>
              </div>
            </div>

            {/*  Location  */}
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center justify-center shrink-0">
                <i data-lucide="map-pin" className="text-slate-400 w-5 h-5"></i>
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Location</p>
                <p className="text-sm font-semibold text-white">Chattogram, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>

        {/*  Right Column: Glassmorphic form  */}
        <div className="md:col-span-7 reveal-on-scroll" style={{{transitionDelay: '0.2s', }}}>
          <form id="contact-form" className="glass-card rounded-3xl p-8 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-semibold text-slate-300">Your Name</label>
                <input type="text" id="name" required
                  className="w-full glass-input px-4 py-3 rounded-xl text-sm text-slate-100 outline-none transition-all duration-300" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-semibold text-slate-300">Your Email</label>
                <input type="email" id="email" required
                  className="w-full glass-input px-4 py-3 rounded-xl text-sm text-slate-100 outline-none transition-all duration-300" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-xs font-semibold text-slate-300">Subject</label>
              <input type="text" id="subject" required
                className="w-full glass-input px-4 py-3 rounded-xl text-sm text-slate-100 outline-none transition-all duration-300" />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-semibold text-slate-300">Message</label>
              <textarea id="message" rows="5" required
                className="w-full glass-input px-4 py-3 rounded-xl text-sm text-slate-100 outline-none transition-all duration-300 resize-none"></textarea>
            </div>

            <button type="submit"
              className="btn-gradient w-full py-4 rounded-xl font-bold text-sm tracking-wide uppercase text-white shadow-lg transition-transform duration-300 active:scale-[0.98]">
              Send Message
            </button>
          </form>
        </div>
      </div>

    </div>
  </section>

  {/*  SECTION 10: FOOTER  */}
  <footer className="bg-dark-900 border-t border-slate-800/80 pt-16 pb-8 relative z-10">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid md:grid-cols-12 gap-12 pb-12 border-b border-slate-800">
        {/*  Logo Column  */}
        <div className="md:col-span-5 space-y-6">
          <a href="index.html" className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-500 to-secondary-500 flex items-center justify-center font-bold text-lg text-white shadow-lg shadow-primary-500/20">
              H
            </div>
            <span className="font-extrabold text-xl tracking-tight text-white">
              Hasnat <span className="text-primary-500 font-light">Sabbir</span>
            </span>
          </a>
          <p className="text-sm text-slate-400 font-body leading-relaxed max-w-sm">
            Creative Graphic Designer based in Bangladesh. Fusing structural logic with design theories to produce
            highly professional and inspiring visual materials.
          </p>
        </div>

        {/*  Quick Links  */}
        <div className="md:col-span-3 space-y-4">
          <h5 className="text-xs font-bold text-white uppercase tracking-widest">Quick Links</h5>
          <ul className="space-y-2.5 text-sm font-body">
            <li><a href="index.html" className="text-slate-400 hover:text-primary-500 transition-colors">Home</a></li>
            <li><a href="portfolio.html" className="text-slate-400 hover:text-primary-500 transition-colors">Portfolio</a>
            </li>
            <li><a href="#about" className="text-slate-400 hover:text-primary-500 transition-colors">About Me</a></li>
            <li><a href="#contact" className="text-slate-400 hover:text-primary-500 transition-colors">Contact Me</a></li>
          </ul>
        </div>

        {/*  Social Media links  */}
        <div className="md:col-span-4 space-y-4">
          <h5 className="text-xs font-bold text-white uppercase tracking-widest">Social Channels</h5>
          <div className="flex items-center gap-4">
            {/*  LinkedIn  */}
            <a href="https://linkedin.com/in/hasnatsabbirr" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-slate-800/80 hover:bg-primary-500 hover:text-white border border-slate-700 flex items-center justify-center text-slate-300 transition-all duration-300"
              aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                className="lucide lucide-linkedin w-5 h-5">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            {/*  Email  */}
            <a href="mailto:hasnatsabbir26@gmail.com"
              className="w-10 h-10 rounded-xl bg-slate-800/80 hover:bg-secondary-500 hover:text-white border border-slate-700 flex items-center justify-center text-slate-300 transition-all duration-300"
              aria-label="Email">
              <i data-lucide="mail" className="w-5 h-5"></i>
            </a>
            {/*  Phone  */}
            <a href="tel:01810291297"
              className="w-10 h-10 rounded-xl bg-slate-800/80 hover:bg-accent-500 hover:text-white border border-slate-700 flex items-center justify-center text-slate-300 transition-all duration-300"
              aria-label="Phone">
              <i data-lucide="phone" className="w-5 h-5"></i>
            </a>
          </div>
          <p className="text-xs text-slate-500 font-body">Available for remote and freelance work internationally.</p>
        </div>
      </div>

      {/*  Bottom bar  */}
      <div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4">
        <p className="text-xs text-slate-500 font-body text-center sm:text-left">
          &copy; <span id="current-year">2026</span> Hasnat Sabbir. All rights reserved.
        </p>
        <p className="text-xs text-slate-500 font-body text-center sm:text-right">
          Created By <a href="https://www.linkedin.com/in/sma-rashik/" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-white font-bold transition-colors">S M ABDUL RASHIK</a>
        </p>
      </div>
    </div>
  </footer>

  {/*  BACK TO TOP BUTTON  */}
  <button id="back-to-top"
    className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-primary-500 hover:shadow-lg shadow-black/30 hover:shadow-primary-500/20 translate-y-20 opacity-0 transition-all duration-300">
    <i data-lucide="arrow-up" className="w-5 h-5"></i>
  </button>

  {/*  PROJECTS DATA DATABASE  */}
  <script src="assets/js/projects.js"></script>

  {/*  GENERAL SCRIPT  */}
  <script>
    document.addEventListener("DOMContentLoaded", function () {
      // Initialize Lucide Icons
      lucide.createIcons();

      // Current Year copyright
      document.getElementById("current-year").textContent = new Date().getFullYear();

      // STICKY HEADER & SCROLL BEHAVIOR
      const navbar = document.getElementById("navbar");
      window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
          navbar.classList.add("glass-nav", "shadow-xl", "py-4", "border-slate-800/40");
          navbar.classList.remove("py-6", "border-transparent");
        } else {
          navbar.classList.remove("glass-nav", "shadow-xl", "py-4", "border-slate-800/40");
          navbar.classList.add("py-6", "border-transparent");
        }
      });

      // MOBILE NAVIGATION MENU
      const mobileMenuBtn = document.getElementById("mobile-menu-btn");
      const mobileMenu = document.getElementById("mobile-menu");
      const menuIcon = document.getElementById("menu-icon");
      const closeIcon = document.getElementById("close-icon");
      const mobileLinks = document.querySelectorAll(".mobile-nav-link");

      function toggleMobileMenu() {
        mobileMenu.classList.toggle("hidden");
        menuIcon.classList.toggle("hidden");
        closeIcon.classList.toggle("hidden");
        document.body.classList.toggle("overflow-hidden");
      }

      mobileMenuBtn.addEventListener("click", toggleMobileMenu);

      mobileLinks.forEach(link => {
        link.addEventListener("click", () => {
          if (!mobileMenu.classList.contains("hidden")) {
            toggleMobileMenu();
          }
        });
      });



      // REVEAL SECTIONS ON SCROLL
      const revealElements = document.querySelectorAll(".reveal-on-scroll");
      function checkReveal() {
        const triggerBottom = window.innerHeight * 0.85;
        revealElements.forEach(el => {
          const elTop = el.getBoundingClientRect().top;
          if (elTop < triggerBottom) {
            el.classList.add("active");

            // Trigger skill bars animations when skills section is revealed
            if (el.querySelector('.skill-bar')) {
              const skillBars = el.querySelectorAll('.skill-bar');
              skillBars.forEach(bar => {
                bar.style.width = bar.getAttribute('data-width');
              });
            }
          }
        });
      }

      window.addEventListener("scroll", checkReveal);
      checkReveal(); // Trigger once on load

      // BACK TO TOP
      const backToTopBtn = document.getElementById("back-to-top");
      window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
          backToTopBtn.classList.remove("translate-y-20", "opacity-0");
        } else {
          backToTopBtn.classList.add("translate-y-20", "opacity-0");
        }
      });

      backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });

      // CONTACT FORM ALERT (Modified for WhatsApp)
      const contactForm = document.getElementById("contact-form");
      if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
          e.preventDefault();

          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const subject = document.getElementById('subject').value;
          const message = document.getElementById('message').value;

          const whatsappNumber = "8801810291297"; // Using the provided phone number
          const whatsappMessage = `Hello Hasnat!%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Subject:* ${subject}%0A*Message:* ${message}`;

          const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

          window.open(whatsappUrl, '_blank');
          contactForm.reset();
        });
      }

      // Check reveal again for dynamic elements
      setTimeout(checkReveal, 100);
    });
  </script>
</body>

</html>