// src/App.jsx
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

/* Components */
import RoleToggle from "./components/RoleToggle";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ResumeModal from "./components/ResumeModal";
import ProfileModal from "./components/ProfileModal";
import ThemeToggle from "./components/ThemeToggle"; // if you split it out; otherwise use inline version
// If you kept ThemeToggle inline previously, replace this import with the inline component below.

/* Data */
import { ROLE_META, PROJECTS, SKILLS, ROLES } from "./data/content";

/* -------------------------
   If you didn't extract ThemeToggle as a file, use this inline version instead.
   Remove this block if you have a separate ./components/ThemeToggle.jsx file.
   ------------------------- */
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
/* ------------------------- */

/* -------------------------
   Theme hook (persisted)
   ------------------------- */
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

/* -------------------------
   Main App
   ------------------------- */
export default function App() {
  const [theme, setTheme] = useTheme();

  // Role selection (persisted)
  const [role, setRole] = useState(() => {
    try { return localStorage.getItem("selectedRole") || ROLES.SOFTWARE; } catch { return ROLES.SOFTWARE; }
  });
  useEffect(() => {
    try { localStorage.setItem("selectedRole", role); } catch {}
  }, [role]);

  const meta = useMemo(() => ROLE_META[role], [role]);

  // modal states
  const [resumeOpen, setResumeOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  // scroll helper
  function scrollTo(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // current role-specific data
  const currentProjects = useMemo(() => PROJECTS.filter(p => p.role === role), [role]);
  const currentSkills = useMemo(() => SKILLS[role] || [], [role]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-sky-50 dark:from-slate-900 dark:via-slate-900 text-slate-900 dark:text-slate-100">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Profile avatar — clickable */}
          <button
            onClick={() => setProfileOpen(true)}
            className="relative w-11 h-11 rounded-full overflow-hidden bg-slate-200 ring-1 ring-slate-300 dark:ring-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
            aria-label="Open profile preview"
            title="Open profile"
          >
            <img src="/profile.jpg" alt="Saran Jagadeesan Uma" className="w-full h-full object-cover" />
            <span className="sr-only">Open profile preview</span>
          </button>

          <div>
            <h1 className="text-lg font-semibold">Saran Jagadeesan Uma</h1>
            <p className="text-sm text-slate-600 dark:text-slate-300">MS Computer Science — Northeastern</p>
          </div>
        </div>

        <nav className="flex items-center gap-4">
          <button onClick={() => scrollTo("projects")} className="text-sm hover:underline">Projects</button>
          <button onClick={() => scrollTo("skills")} className="text-sm hover:underline">Skills</button>
          <button onClick={() => scrollTo("contact")} className="text-sm hover:underline">Contact</button>

          <RoleToggle value={role} onChange={(r) => setRole(r)} />

          <button onClick={() => setResumeOpen(true)} className="ml-3 px-4 py-2 rounded-lg border border-slate-200 text-sm bg-white hover:shadow">
            Resume
          </button>

          {/* Theme toggle: use imported ThemeToggle component if you have it, otherwise Inline */}
          {typeof ThemeToggle !== "undefined" ? (
            <div className="ml-3">
              {/* If you created a component file, import it and use: <ThemeToggle theme={theme} setTheme={setTheme} /> */}
              {/* Fallback to inline if not */}
              <InlineThemeToggle theme={theme} setTheme={setTheme} />
            </div>
          ) : (
            <div className="ml-3">
              <InlineThemeToggle theme={theme} setTheme={setTheme} />
            </div>
          )}
        </nav>
      </header>

      {/* Main content with subtle entrance animation */}
      <motion.main
        className="max-w-6xl mx-auto px-6 pb-20"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        {/* Hero / Intro */}
        <section className="grid md:grid-cols-2 gap-8 items-center py-12">
          <div>
            <h2 className="text-4xl font-extrabold leading-tight">Hello — I'm Saran.</h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">{meta.short}</p>

            <div className="mt-6 flex gap-3">
              <button onClick={() => scrollTo("projects")} className="px-4 py-2 rounded-lg bg-sky-600 text-white">See role projects</button>
              <button onClick={() => setResumeOpen(true)} className="px-4 py-2 rounded-lg border bg-white">View Resume</button>
            </div>

            <div className="mt-6 text-sm text-slate-500">
              <strong>{meta.label}</strong> — {meta.short}
            </div>
          </div>

          <div className={`rounded-2xl p-6 shadow-lg bg-gradient-to-br ${meta.accent}`}>
            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-white">{meta.label}</h3>
              <p className="mt-2 text-sm text-slate-100/85">{meta.short}</p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-10">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Selected Projects — {meta.label}</h3>
            <div className="text-sm text-slate-500">Showing projects tailored for this role</div>
          </div>

          <Projects items={currentProjects} />
        </section>

        {/* Skills */}
        <section id="skills" className="py-10">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Skills — {meta.label}</h3>
            <div className="text-sm text-slate-500">Primary tools & techniques</div>
          </div>

          <Skills list={currentSkills} />
        </section>

        {/* Contact */}
        <section id="contact" className="py-10">
          <h3 className="text-2xl font-bold">Contact</h3>
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

        <footer className="mt-12 text-center text-sm text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} Saran Jagadeesan Uma — Built with React & Tailwind</footer>
      </motion.main>

      {/* Modals (mounted at app root) */}
      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} currentRole={role} />
      <ProfileModal open={profileOpen} onClose={() => setProfileOpen(false)} src="/profile.jpg" name="Saran Jagadeesan Uma" />
    </div>
  );
}
