"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const brand = {
  bg: "#0b0f13",
  text: "#e6f1ff",
  neon: "#08d2ff",
  neonSoft: "#6ee7ff",
};

const LogoMark = ({ size = 48 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="drop-shadow-[0_0_12px_rgba(8,210,255,0.6)]"
  >
    <circle cx="50" cy="50" r="46" stroke={brand.neon} strokeWidth="6" />
    <rect x="30" y="48" width="6" height="16" rx="3" fill={brand.neon} />
    <rect x="42" y="40" width="6" height="32" rx="3" fill={brand.neon} />
    <rect x="54" y="44" width="6" height="24" rx="3" fill={brand.neon} />
    <rect x="66" y="48" width="6" height="16" rx="3" fill={brand.neon} />
  </svg>
);

const NeonButton = ({
  children,
  href = "#",
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  className?: string;
}) => (
  <a
    href={href}
    onClick={onClick}
    className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 text-base font-semibold tracking-wide border border-cyan-300/30 bg-cyan-500/10 hover:bg-cyan-500/20 transition-colors shadow-[0_0_24px_rgba(8,210,255,0.25)] ${className}`}
    style={{ color: brand.text }}
  >
    {children}
  </a>
);

const Section = ({
  id,
  title,
  kicker,
  children,
}: {
  id: string;
  title: string;
  kicker?: string;
  children: React.ReactNode;
}) => (
  <section id={id} className="relative py-20 md:py-28">
    <div className="absolute inset-0 -z-10">
      <div
        className="pointer-events-none mx-auto h-64 w-64 rounded-full blur-3xl opacity-20"
        style={{
          background: `radial-gradient(closest-side, ${brand.neon} 0%, transparent 70%)`,
        }}
      />
    </div>
    <div className="mx-auto max-w-6xl px-6">
      {kicker && (
        <p className="mb-2 text-sm uppercase tracking-[0.25em] text-cyan-300/80">
          {kicker}
        </p>
      )}
      <h2 className="mb-6 text-3xl md:text-5xl font-extrabold text-white drop-shadow-[0_0_24px_rgba(8,210,255,0.25)]">
        {title}
      </h2>
      <div className="text-cyan-50/90 leading-relaxed text-lg">{children}</div>
    </div>
  </section>
);

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ background: brand.bg, color: brand.text }}>
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="flex items-center gap-3">
              <LogoMark size={34} />
              <div className="leading-tight">
                <span className="block text-xs tracking-[0.2em] text-cyan-200">PROJECT</span>
                <span className="block text-base font-bold">Records LLC</span>
              </div>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm">
              {[
                ["Services", "#services"],
                ["Work", "#work"],
                ["About", "#about"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a key={label} href={href} className="text-cyan-100/80 hover:text-white transition-colors">
                  {label}
                </a>
              ))}
              <NeonButton href="#contact">Book a Session</NeonButton>
            </nav>
            <button
              aria-label="Open menu"
              className="md:hidden rounded-xl border border-white/10 p-2 text-cyan-100/80"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-t border-white/10 bg-black/60"
            >
              <div className="px-6 py-4 flex flex-col gap-3">
                {[
                  ["Services", "#services"],
                  ["Work", "#work"],
                  ["About", "#about"],
                  ["Contact", "#contact"],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="text-cyan-100/90 py-2"
                  >
                    {label}
                  </a>
                ))}
                <NeonButton href="#contact" className="mt-2">Book a Session</NeonButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute -top-24 left-1/2 -translate-x-1/2 h-[42rem] w-[42rem] rounded-full blur-[140px]"
            style={{ background: `radial-gradient(circle, ${brand.neon} 0%, transparent 60%)`, opacity: 0.25 }}
          />
        </div>
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-36">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/30 bg-cyan-500/10 px-3 py-1 mb-5 text-xs text-cyan-100/80">
                <span className="h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />
                Now booking Q4 sessions
              </div>
              <h1 className="text-4xl md:text-6xl font-black leading-[1.02] text-white drop-shadow-[0_0_32px_rgba(8,210,255,0.25)]">
                PROJECT <span className="text-cyan-200">RECORDS</span>
                <span className="block mt-2 text-xl md:text-2xl font-medium tracking-wide text-cyan-100/90">
                  Music • Podcasts • Mastering
                </span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-cyan-100/85 max-w-xl">
                A neon-clean studio aesthetic with boutique engineering. From capture to release, we handle your sound with precision.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <NeonButton href="#contact">Book a Session</NeonButton>
                <a href="#work" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-white/10 text-cyan-100/80 hover:text-white hover:border-cyan-300/30 transition-colors">
                  See our work
                </a>
              </div>
              <div className="mt-8 flex items-center gap-6 text-xs text-cyan-200/70">
                <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-cyan-300 rounded-full"/>Mixing</div>
                <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-cyan-300 rounded-full"/>Mastering</div>
                <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-cyan-300 rounded-full"/>Podcast Prod.</div>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-full flex items-center justify-center border border-cyan-300/30 bg-gradient-to-b from-cyan-500/10 to-transparent shadow-[0_0_60px_rgba(8,210,255,0.35)]"
              >
                <LogoMark size={220} />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Section id="services" title="Services" kicker="What we do">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Recording", desc: "Vocal booths and mobile capture with pristine preamps and noise-controlled environments." },
            { title: "Mixing", desc: "Punchy, balanced, and wide. Hybrid ITB/analog approach with meticulous automation." },
            { title: "Mastering", desc: "Streaming-optimized loudness, translation checks, and delivery in all required formats." },
            { title: "Podcast Production", desc: "Editing, cleanup, music beds, and loudness normalization for broadcast consistency." },
            { title: "Sound Design", desc: "Custom cues and branded idents for intros, reels, and trailers." },
            { title: "Artist Development", desc: "Release planning, visual identity guidance, and distribution prep." },
          ].map((card) => (
            <div key={card.title} className="rounded-2xl p-6 border border-white/10 bg-white/5 hover:bg-white/[0.08] transition-colors shadow-[0_0_24px_rgba(8,210,255,0.15)]">
              <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
              <p className="text-cyan-100/85">{card.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <NeonButton href="#contact">Get a quote</NeonButton>
        </div>
      </Section>

      <Section id="work" title="Selected Work" kicker="Listen & watch">
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-transparent flex items-center justify-center">
                <span className="text-cyan-100/70">Video/Audio Placeholder #{i}</span>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-white">Project Title {i}</h4>
                <p className="text-sm text-cyan-100/80 mt-1">Short description of the work, role, and result.</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="about" title="About Project Records" kicker="Who we are">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <p>
            Based in the Carolinas, Project Records LLC blends cinematic taste with engineering discipline. Whether it’s a
            van-life field recording session or a controlled studio capture, we obsess over clarity, feel, and release-ready polish.
          </p>
          <ul className="space-y-3 text-cyan-100/85">
            <li>• Fast turnarounds with collaborative feedback rounds</li>
            <li>• Transparent pricing and clear deliverables</li>
            <li>• Flexible booking: remote, on-location, or studio</li>
          </ul>
        </div>
      </Section>

      <Section id="contact" title="Book a Session" kicker="Get in touch">
        <form
          className="grid md:grid-cols-2 gap-6 max-w-3xl"
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget as HTMLFormElement);
            const subject = encodeURIComponent(`Session inquiry – ${data.get("name")}`);
            const body = encodeURIComponent(
              `Name: ${data.get("name")}
Email: ${data.get("email")}
Type: ${data.get("type")}

Message:
${data.get("message")}`
            );
            window.location.href = `mailto:hello@projectrecords.example?subject=${subject}&body=${body}`;
          }}
        >
          <div className="space-y-4">
            <label className="block">
              <span className="block text-sm text-cyan-100/80 mb-1">Your name</span>
              <input name="name" required className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400/50" />
            </label>
            <label className="block">
              <span className="block text-sm text-cyan-100/80 mb-1">Email</span>
              <input type="email" name="email" required className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400/50" />
            </label>
            <label className="block">
              <span className="block text-sm text-cyan-100/80 mb-1">Project type</span>
              <select name="type" className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400/50">
                <option>Recording</option>
                <option>Mixing</option>
                <option>Mastering</option>
                <option>Podcast Production</option>
                <option>Sound Design</option>
              </select>
            </label>
          </div>
          <div className="flex flex-col">
            <label className="block flex-1">
              <span className="block text-sm text-cyan-100/80 mb-1">Message</span>
              <textarea name="message" rows={8} className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400/50" placeholder="Tell us about your project, goals, and timeline." />
            </label>
            <div className="mt-4">
              <NeonButton href="#" className="w-full md:w-auto">Send via Email</NeonButton>
            </div>
          </div>
        </form>
      </Section>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <LogoMark size={28} />
            <span className="text-sm text-cyan-100/80">© {new Date().getFullYear()} Project Records LLC</span>
          </div>
          <div className="flex items-center gap-5 text-cyan-100/70">
            <a href="#" aria-label="Instagram" className="hover:text-white">Instagram</a>
            <a href="#" aria-label="YouTube" className="hover:text-white">YouTube</a>
            <a href="#" aria-label="SoundCloud" className="hover:text-white">SoundCloud</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
