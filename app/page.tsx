"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const brand = {
  bg: "#0b0f13",
  text: "#e6f1ff",
  neon: "#08d2ff",
};

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
    target={href.startsWith("http") ? "_blank" : undefined}
    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 text-base font-semibold tracking-wide border border-cyan-300/30 bg-cyan-500/10 hover:bg-cyan-500/20 transition-colors ${className}`}
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
    <div className="mx-auto max-w-6xl px-6">
      {kicker && (
        <p className="mb-2 text-sm uppercase tracking-[0.25em] text-cyan-300/80">
          {kicker}
        </p>
      )}
      <h2 className="mb-6 text-3xl md:text-5xl font-extrabold text-white">
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
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="flex items-center gap-3">
              <img
                src="/brand/project-records-lockup.png"
                alt="Project Records LLC"
                width={36}
                height={36}
                style={{ display: "block", objectFit: "contain" }}
              />
              <div className="leading-tight">
                <span className="block text-xs tracking-[0.2em] text-cyan-200">PROJECT</span>
                <span className="block text-base font-bold">Records LLC</span>
              </div>
            </a>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-3 text-sm">
              <a href="#listen" className="px-3 py-2 rounded-xl text-cyan-100/80 hover:text-white">Listen</a>
              <a href="#work" className="px-3 py-2 rounded-xl text-cyan-100/80 hover:text-white">Work</a>
              <a href="#about" className="px-3 py-2 rounded-xl text-cyan-100/80 hover:text-white">About</a>
              <a href="#contact" className="px-3 py-2 rounded-xl text-cyan-100/80 hover:text-white">Contact</a>

              {/* External quick buttons */}
              <a
                href="https://soundcloud.com/projectrecordsllc"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 inline-flex items-center rounded-2xl px-4 py-2 border border-cyan-300/30 bg-cyan-500/10 hover:bg-cyan-500/20 font-semibold"
              >
                SoundCloud
              </a>
              <a
                href="https://www.youtube.com/@project-recordsllc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-2xl px-4 py-2 border border-cyan-300/30 bg-cyan-500/10 hover:bg-cyan-500/20 font-semibold"
              >
                YouTube
              </a>
              <a
                href="#contact"
                className="ml-2 inline-flex items-center rounded-2xl px-4 py-2 border border-cyan-300/30 bg-cyan-500/10 hover:bg-cyan-500/20 font-semibold"
              >
                Book a Session
              </a>
            </nav>

            {/* MOBILE MENU BUTTON */}
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

        {/* MOBILE NAV PANEL */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-t border-white/10 bg-black/60"
            >
              <div className="px-6 py-4 flex flex-col gap-2">
                <a href="#listen" onClick={() => setMenuOpen(false)} className="py-2 text-cyan-100/90">Listen</a>
                <a href="#work" onClick={() => setMenuOpen(false)} className="py-2 text-cyan-100/90">Work</a>
                <a href="#about" onClick={() => setMenuOpen(false)} className="py-2 text-cyan-100/90">About</a>
                <a href="#contact" onClick={() => setMenuOpen(false)} className="py-2 text-cyan-100/90">Contact</a>

                <a
                  href="https://soundcloud.com/projectrecordsllc"
                  target="_blank" rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 inline-flex items-center justify-center rounded-2xl px-5 py-3 border border-cyan-300/30 bg-cyan-500/10 hover:bg-cyan-500/20 font-semibold"
                >
                  SoundCloud
                </a>
                <a
                  href="https://www.youtube.com/@project-recordsllc"
                  target="_blank" rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center justify-center rounded-2xl px-5 py-3 border border-cyan-300/30 bg-cyan-500/10 hover:bg-cyan-500/20 font-semibold"
                >
                  YouTube
                </a>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center justify-center rounded-2xl px-5 py-3 border border-cyan-300/30 bg-cyan-500/10 hover:bg-cyan-500/20 font-semibold"
                >
                  Book a Session
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO */}
      <section id="home" className="relative">
        <div className="mx-auto max-w-6xl px-6 pt-6 pb-16 md:pt-8 md:pb-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-black leading-[1.02] text-white">
                PROJECT <span className="text-cyan-200">RECORDS</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-cyan-100/85 max-w-xl">
                Follow us while we streamline services — music and videos are live.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <NeonButton href="#listen">Listen</NeonButton>
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-white/10 text-cyan-100/80 hover:text-white hover:border-cyan-300/30 transition-colors"
                >
                  See our work
                </a>
              </div>
            </div>
<div className="relative flex justify-start">
  {/* Glowing orb (bottom layer) */}
  <div className="absolute -inset-12 rounded-full bg-cyan-500/25 blur-[120px]" />

  {/* Dark shield behind logo (middle layer) */}
  <div className="absolute inset-0 rounded-full bg-black/40 z-10" />

  {/* Logo (top layer) */}
  <img
    src="/brand/project-records-lockup.png"
    alt="Project Records LLC"
    className="relative z-20 max-w-full h-auto"
  />
</div>

          </div>
        </div>
      </section>

      {/* LISTEN */}
      <Section id="listen" title="Listen" kicker="Follow & stream">
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
          <NeonButton href="https://soundcloud.com/projectrecordsllc" className="w-full text-center">
            SoundCloud → soundcloud.com/projectrecordsllc
          </NeonButton>
          <NeonButton href="https://www.youtube.com/@project-recordsllc" className="w-full text-center">
            YouTube → @project-recordsllc
          </NeonButton>
        </div>
      </Section>

      {/* WORK */}
      <Section id="work" title="Selected Work" kicker="Listen & watch">
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-transparent flex items-center justify-center">
                <span className="text-cyan-100/70">Video/Audio Placeholder #{i}</span>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-white">Project Title {i}</h4>
                <p className="text-sm text-cyan-100/80 mt-1">
                  Short description of the work, role, and result.
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ABOUT */}
      <Section id="about" title="About Project Records" kicker="Who we are">
        <p>
          Based in the Carolinas, Project Records LLC blends cinematic taste with engineering discipline.
          Whether it’s a van-life field recording session or a controlled studio capture, we obsess over
          clarity, feel, and release-ready polish.
        </p>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Book a Session" kicker="Get in touch">
        <form
          className="grid md:grid-cols-2 gap-6 max-w-3xl"
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget as HTMLFormElement);
            const subject = encodeURIComponent(`Session inquiry – ${data.get("name")}`);
            const body = encodeURIComponent(
              `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nType: ${data.get("type")}\n\nMessage:\n${data.get("message")}`
            );
            window.location.href = `mailto:tom@project-records.com?subject=${subject}&body=${body}`;
          }}
        >
          <div className="space-y-4">
            <label className="block">
              <span className="block text-sm text-cyan-100/80 mb-1">Your name</span>
              <input
                name="name"
                required
                className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400/50"
              />
            </label>
            <label className="block">
              <span className="block text-sm text-cyan-100/80 mb-1">Email</span>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400/50"
              />
            </label>
            <label className="block">
              <span className="block text-sm text-cyan-100/80 mb-1">Project type</span>
              <input
                name="type"
                className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400/50"
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label className="block flex-1">
              <span className="block text-sm text-cyan-100/80 mb-1">Message</span>
              <textarea
                name="message"
                rows={8}
                className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400/50"
                placeholder="Tell us about your project, goals, and timeline."
              />
            </label>
            <div className="mt-4">
              <NeonButton href="#" className="w-full md:w-auto">
                Send via Email
              </NeonButton>
            </div>
          </div>
        </form>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src="/brand/project-records-lockup.png"
              alt="Project Records LLC"
              width={24}
              height={24}
              style={{ display: "block", objectFit: "contain" }}
            />
            <span className="text-sm text-cyan-100/80">
              © {new Date().getFullYear()} Project Records LLC
            </span>
          </div>
          <div className="flex items-center gap-5 text-cyan-100/70">
            <a href="https://soundcloud.com/projectrecordsllc" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              SoundCloud
            </a>
            <a href="https://www.youtube.com/@project-recordsllc" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              YouTube
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

