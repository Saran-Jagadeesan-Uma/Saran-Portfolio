// src/App.jsx
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

import RoleToggle from "./components/RoleToggle";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ResumeModal from "./components/ResumeModal";
import ProfileModal from "./components/ProfileModal";
import { ROLE_META, PROJECTS, SKILLS, ROLES } from "./data/content";

/* ---------------- Theme hook ---------------- */
function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved) return saved;
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    try { localStorage.setItem("theme", theme); } catch {}
  }, [theme]);

  return [theme, setTheme];
}

/* ---------------- Inline Theme Toggle (simple) ---------------- */
function InlineThemeToggle({ theme, setTheme }) {
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="p-2 rounded-md border hover:bg-slate-100 dark:hover:bg-slate-700"
      title="Toggle dark / light"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}

/* ---------------- Typewriter Hero ---------------- */
const HERO_LINES = [
  "Hi — I'm Saran.",
  "I build practical, scalable web & cloud systems.",
  "I write clean code, ship features, and measure impact."
];

function Hero({ onCTAClick, onOpenResume }) {
  const [text, setText] = useState("");
  const [li, setLi] = useState(0);
  const [char, setChar] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => {
      if (char < HERO_LINES[li].length) {
        setText((s) => s + HERO_LINES[li][char]);
        setChar((c) => c + 1);
      } else {
        setTimeout(() => {
          setText("");
          setChar(0);
          setLi((n) => (n + 1) % HERO_LINES.length);
        }, 1200);
      }
    }, 35);
    return () => clearTimeout(t);
  }, [li, char]);

  return (
    <section className="grid md:grid-cols-2 gap-8 items-center py-12 main-container">
      <div>
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight hero-title"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <span className="text-sky-600">Saran</span> Jagadeesan Uma
        </motion.h1>

        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 min-h-[3rem] hero-sub">
          <span>{text}</span>
          <span className="inline-block animate-pulse ml-1">█</span>
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={() => onCTAClick && onCTAClick("projects")}
            className="px-4 py-2 rounded-lg bg-sky-600 text-white font-medium shadow hover:brightness-95"
          >
            See Projects
          </button>

          <button
            onClick={() => onOpenResume && onOpenResume()}
            className="inline-block ml-0 sm:ml-3 px-4 py-2 rounded-lg border border-slate-200 text-sm bg-white hover:shadow"
          >
            Resume
          </button>

          <a
            href="https://github.com/Saran-Jagadeesan-Uma"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-lg border border-slate-200 text-sm"
          >
            GitHub
          </a>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-slate-700 dark:text-slate-300">
          <div>
            <p className="font-semibold">Location</p>
            <p>Boston, MA</p>
          </div>
          <div>
            <p className="font-semibold">Open to</p>
            <p>Full-time SDE roles · Internships · Remote/Hybrid</p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow p-6 section-card">
        <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100">Highlights</h3>
        <ul className="mt-4 space-y-2 text-slate-700 dark:text-slate-200">
          <li>Strong fundamentals: Data Structures, Algorithms, OOP</li>
          <li>Languages: Java, Python, JavaScript, C++</li>
          <li>Technologies: React, Node.js, MongoDB, MySQL, Docker</li>
          <li>Experience: Full-stack projects, RESTful APIs, CI/CD</li>
          <li>Available: May 2026</li>
        </ul>
      </div>
    </section>
  );
}

/* ---------------- Main App ---------------- */
export default function App() {
  const [theme, setTheme] = useTheme();

  const [role, setRole] = useState(() => {
    try { return localStorage.getItem("selectedRole") || ROLES.SOFTWARE; } catch { return ROLES.SOFTWARE; }
  });
  useEffect(() => { try { localStorage.setItem("selectedRole", role); } catch {} }, [role]);

  const meta = useMemo(() => ROLE_META[role], [role]);
  const currentProjects = useMemo(() => PROJECTS.filter(p => p.role === role), [role]);
  const currentSkills = useMemo(() => SKILLS[role] || [], [role]);

  const [resumeOpen, setResumeOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  // small-screen friendly scroll helper
  function scrollTo(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-sky-50 dark:from-slate-900 dark:via-slate-900 text-slate-900 dark:text-slate-100">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-4 sm:px-6 md:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setProfileOpen(true)}
            className="avatar-button"
            aria-label="Open profile preview"
            title="Open profile"
            style={{ display: "inline-block" }}
          >
            <img
              src="/profile_small.jpg"
              srcSet="/profile_small.jpg 1x, /profile_small.jpg 2x"
              alt="Saran Jagadeesan Uma"
              width="44"
              height="44"
              loading="eager"
              decoding="async"
            />
          </button>

          <div>
            <h1 className="text-base sm:text-lg font-semibold">Saran Jagadeesan Uma</h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">MS Computer Science — Northeastern</p>
          </div>
        </div>

        <nav className="flex items-center gap-3">
          <button onClick={() => scrollTo("projects")} className="text-sm hover:underline hidden sm:inline">Projects</button>
          <button onClick={() => scrollTo("skills")} className="text-sm hover:underline hidden sm:inline">Skills</button>
          <button onClick={() => scrollTo("contact")} className="text-sm hover:underline hidden sm:inline">Contact</button>

          {/* on tiny screens, show a compact menu: below we simply keep toggle + resume */}
          <RoleToggle value={role} onChange={setRole} />

          <button
            onClick={() => setResumeOpen(true)}
            className="ml-2 px-3 py-2 rounded-md border border-slate-200 text-sm bg-white"
          >
            Resume
          </button>

          <div className="ml-2">
            <InlineThemeToggle theme={theme} setTheme={setTheme} />
          </div>
        </nav>
      </header>

      {/* Main content */}
      <motion.main className="max-w-6xl mx-auto px-4 sm:px-6 md:px-6 pb-20" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
        {/* Hero with typewriter */}
        <Hero onCTAClick={(id) => scrollTo(id)} onOpenResume={() => setResumeOpen(true)} />

        {/* Role highlight banner */}
        <section className="mb-6">
          <div className={`rounded-2xl p-5 md:p-6 shadow-lg bg-gradient-to-br ${meta.accent}`}>
            <div className="text-white md:flex md:items-center md:justify-between">
              <div>
                <h3 className="text-lg md:text-xl font-semibold">{meta.label}</h3>
                <p className="text-sm md:text-base mt-1 text-white/90 max-w-2xl">{meta.short}</p>
              </div>
              <div className="mt-4 md:mt-0">
                <button onClick={() => setResumeOpen(true)} className="px-4 py-2 rounded-md bg-white text-slate-900 font-medium">View Resume</button>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-2xl font-bold">Selected Projects — {meta.label}</h3>
            <div className="text-sm text-slate-500">Role-tailored projects</div>
          </div>
          <Projects items={currentProjects} />
        </section>

        {/* Skills */}
        <section id="skills" className="py-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-2xl font-bold">Skills — {meta.label}</h3>
            <div className="text-sm text-slate-500">Primary tools & techniques</div>
          </div>
          <Skills list={currentSkills} />
        </section>

        {/* Experience (kept compact on mobile) */}
        <section id="experience" className="py-6">
          <h3 className="text-2xl font-bold mb-3">Experience</h3>
          <div className="space-y-4">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 md:p-5 shadow section-card">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold">Teaching Assistant — Northeastern University</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Sept 2025 — Present</p>
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Boston, MA</div>
              </div>
              <ul className="mt-3 text-sm text-slate-700 dark:text-slate-200 list-disc list-inside">
                <li>Guided students on Git/GitHub workflows, API testing with Postman, and collaborative code review practices.</li>
                <li>Mentored teams building MERN stack applications, emphasizing scalable design and deployment best practices.</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 md:p-5 shadow section-card">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold">Software Engineering Intern — Dubai Technologies</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">June 2023 — July 2023</p>
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Dubai, UAE</div>
              </div>
              <ul className="mt-3 text-sm text-slate-700 dark:text-slate-200 list-disc list-inside">
                <li>Developed an IoT-enabled mobile app with cloud backend; implemented RESTful APIs and redundancy/failover mechanisms to improve availability.</li>
                <li>Contributed to backend services and reduced integration errors by improving API contracts and tests.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-6">
          <h3 className="text-2xl font-bold mb-3">Contact</h3>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow">
              <p className="text-sm text-slate-700 dark:text-slate-200">Email: jagadeesanuma.s@northeastern.edu</p>
              <p className="text-sm text-slate-700 dark:text-slate-200 mt-2">Location: Boston, MA</p>
              <p className="text-sm text-slate-700 dark:text-slate-200 mt-2">Available: May 2026</p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow">
              <p className="text-sm text-slate-700 dark:text-slate-200">Prefer to connect on LinkedIn or GitHub — links are at the top. For quick access to my resume, click the Resume button in the header.</p>
            </div>
          </div>
        </section>

        <footer className="mt-10 text-center text-sm text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} Saran Jagadeesan Uma — Built with React & Tailwind</footer>
      </motion.main>

      {/* Modals */}
      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} currentRole={role} />
      <ProfileModal open={profileOpen} onClose={() => setProfileOpen(false)} src="/profile.jpg" name="Saran Jagadeesan Uma" />
    </div>
  );
}
