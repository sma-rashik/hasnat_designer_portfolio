import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Hasnat Sabbir | Premium Graphic Designer Portfolio",
  description: "Professional Graphic Designer Portfolio showcasing poster design, branding projects, social media graphics, event promotions, and creative visual solutions.",
  keywords: "Graphic Designer, Hasnat Sabbir, Md. Hasnat Sabbir Biplob, Poster Design, Social Media Design, Event Branding, Bangladesh, Chattogram, EEE",
  authors: [{ name: "Md. Hasnat Sabbir Biplob" }],
  icons: {
    icon: "/assets/optimized/hasnat_sabbir.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${poppins.variable} ${inter.variable} font-sans bg-dark-900 text-slate-100 selection:bg-primary-500 selection:text-white overflow-x-hidden antialiased`}
      >
        {/* Ambient Glow Background Circles */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary-500/10 blur-[120px] animate-pulse-slow"></div>
          <div className="absolute top-[40%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-secondary-500/10 blur-[130px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-[10%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-accent-500/10 blur-[110px] animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
        </div>

        {children}
      </body>
    </html>
  );
}
