// src/App.jsx
import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import RoleToggle from "./components/RoleToggle";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ResumeModal from "./components/ResumeModal";
import ProfileModal from "./components/ProfileModal";
import { ROLE_META, PROJECTS, SKILLS, ROLES } from "./data/content";

/* ---------------- Helper: base-aware path ---------------- */
// Builds a URL that respects Vite's base (import.meta.env.BASE_URL).
// In dev BASE_URL is '/', in production after build it's '/Saran-Portfolio/' (per vite.config).
const B = (p) => (import.meta.env.BASE_URL || "/") + p;

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
    try { localStorage.setItem("theme", theme); } catch { }
  }, [theme]);

  return [theme, setTheme];
}

/* ---------------- Inline Theme Toggle ---------------- */
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
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center py-8 md:py-12 main-container relative">
      <div>
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <span className="text-sky-600">Saran</span> Jagadeesan Uma
        </motion.h1>

        <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 min-h-[2.5rem]">
          <span>{text}</span><span className="inline-block animate-pulse ml-1">█</span>
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          <button
            onClick={() => onCTAClick && onCTAClick("projects")}
            className="px-4 py-2 rounded-lg bg-sky-600 text-white font-medium shadow hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-sky-300"
            title="See Projects"
          >
            See Projects
          </button>

          {/* Theme-safe Resume button */}
          <button
            onClick={() => onOpenResume && onOpenResume()}
            className="px-4 py-2 rounded-lg border text-sm
                       bg-white text-slate-900 border-slate-200
                       dark:bg-slate-700 dark:text-slate-100 dark:border-slate-600
                       hover:shadow focus:outline-none focus:ring-2 focus:ring-slate-200"
            title="Open resume modal"
          >
            Resume
          </button>

          <a
            href="https://github.com/Saran-Jagadeesan-Uma"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-lg border border-slate-200 text-sm"
            title="Visit GitHub"
          >
            GitHub
          </a>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-2 text-sm text-slate-700 dark:text-slate-300">
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

      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow p-4 md:p-6">
        <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100">Highlights</h3>
        <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-200 text-sm">
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

/* ---------------- Page transition variants ---------------- */
const pageVariants = {
  initial: { opacity: 0, y: 8 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.36 } },
  exit: { opacity: 0, y: -6, transition: { duration: 0.2 } },
};

/* ---------------- Main App ---------------- */
export default function App() {
  const [theme, setTheme] = useTheme();

  // default role remains SOFTWARE for first impression
  const [role, setRole] = useState(() => {
    try { return localStorage.getItem("selectedRole") || ROLES.SOFTWARE; } catch { return ROLES.SOFTWARE; }
  });
  useEffect(() => { try { localStorage.setItem("selectedRole", role); } catch { } }, [role]);

  const meta = useMemo(() => ROLE_META[role], [role]);
  const currentProjects = useMemo(() => PROJECTS.filter(p => p.role === role), [role]);
  const currentSkills = useMemo(() => SKILLS[role] || [], [role]);

  const [resumeOpen, setResumeOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // controls whether the deeper "role controls" panel is visible
  const [showRoleControls, setShowRoleControls] = useState(false);

  function scrollTo(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileOpen(false);
  }

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-white via-slate-50 to-sky-50 dark:from-slate-900 dark:via-slate-900 text-slate-900 dark:text-slate-100">
      {/* floating decorative gradient (pure CSS, no extra files) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(800px 350px at 10% 10%, rgba(14,165,233,0.06), transparent 12%), radial-gradient(700px 300px at 90% 80%, rgba(99,102,241,0.04), transparent 10%)"
        }}
      />

      {/* Header - sticky, clean */}
      <header className="sticky top-0 z-40 backdrop-blur-sm bg-white/4 dark:bg-slate-900/50 border-b border-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setProfileOpen(true)}
              className="avatar-button"
              aria-label="Open profile preview"
              title="Open profile"
              style={{ display: "inline-block" }}
            >
              <img
                src={B("profile_small.jpg")}
                srcSet={`${B("profile_small.jpg")} 1x, ${B("profile_small.jpg")} 2x`}
                alt="Saran Jagadeesan Uma"
                width="44"
                height="44"
                loading="eager"
                decoding="async"
                className="rounded-full object-cover ring-1 ring-slate-200 dark:ring-slate-700"
              />
            </button>

            <div>
              <h1 className="text-base sm:text-lg font-semibold">Saran Jagadeesan Uma</h1>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">MS Computer Science — Northeastern</p>
            </div>
          </div>

          {/* keep header tidy — no role toggles here to avoid early confusion */}
          <nav className="hidden sm:flex items-center gap-3">
            <button onClick={() => scrollTo("projects")} className="text-sm hover:underline">Projects</button>
            <button onClick={() => scrollTo("skills")} className="text-sm hover:underline">Skills</button>
            <button onClick={() => scrollTo("contact")} className="text-sm hover:underline">Contact</button>

            {/* subtle resume CTA */}
            <button
              onClick={() => setResumeOpen(true)}
              className="ml-2 px-3 py-2 rounded-md border text-sm
                         bg-white text-slate-900 border-slate-200
                         dark:bg-slate-700 dark:text-slate-100 dark:border-slate-600
                         hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-sky-300"
              title="Open resume modal"
            >
              Resume
            </button>

            <InlineThemeToggle theme={theme} setTheme={setTheme} />
          </nav>

          <div className="sm:hidden flex items-center gap-2">
            <button onClick={() => setMobileOpen(true)} aria-label="Open menu" className="p-2 rounded-md border">
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* Main content - role keyed so content updates when role changes */}
      <AnimatePresence mode="wait">
        <motion.main
          key={role}
          className="max-w-6xl mx-auto px-4 sm:px-6 md:px-6 pb-16"
          variants={pageVariants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <Hero onCTAClick={(id) => scrollTo(id)} onOpenResume={() => setResumeOpen(true)} />

          {/* Role banner - clearly shows which role is active (Software by default) */}
          <section className="mb-5">
            <div className={`rounded-2xl p-4 md:p-6 shadow-lg bg-gradient-to-br ${meta.accent}`}>
              <div className="text-white md:flex md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold">{meta.label}</h3>
                  <p className="text-sm md:text-base mt-1 text-white/90 max-w-2xl">{meta.short}</p>
                </div>
                <div className="mt-3 md:mt-0">
                  <button
                    onClick={() => setResumeOpen(true)}
                    className="px-4 py-2 rounded-md bg-white text-slate-900 font-medium
                               dark:bg-slate-700 dark:text-slate-100 dark:border-slate-600"
                    title="View resume for this role"
                  >
                    View Resume
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="py-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-2xl font-bold">Selected Projects — {meta.label}</h3>
              <div className="text-sm text-slate-500">Role-tailored projects</div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-stretch">
              <Projects items={currentProjects} />
            </div>
          </section>

          {/* Skills */}
          <section id="skills" className="py-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-2xl font-bold">Skills — {meta.label}</h3>
              <div className="text-sm text-slate-500">Primary tools & techniques</div>
            </div>

            <Skills list={currentSkills} />
          </section>

          {/* --- Deeper role controls: intentionally placed below Projects/Skills --- */}
          <section className="py-6">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold">Explore role-specific views</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                    This site is optimized for a strong software-engineering first impression. If you'd like to
                    view role-specific projects & resumes (Machine Learning or Data), open the panel below.
                  </p>
                </div>

                <div>
                  <button
                    onClick={() => setShowRoleControls((s) => !s)}
                    className="px-3 py-2 rounded-md border text-sm"
                    aria-expanded={showRoleControls}
                  >
                    {showRoleControls ? "Hide" : "Explore"}
                  </button>
                </div>
              </div>

              <AnimatePresence>
                {showRoleControls && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ type: "tween", duration: 0.22 }}
                    className="mt-4 overflow-hidden"
                  >
                    <div className="md:flex md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <p className="text-sm text-slate-700 dark:text-slate-200 mb-3">
                          Choose a role to see projects, skills and a resume tailored to that audience.
                          This is intentionally tucked away to preserve the main software-first presentation.
                        </p>

                        <div className="inline-flex items-center gap-3">
                          {/* RoleToggle placed here (deeper) */}
                          <RoleToggle value={role} onChange={(r) => setRole(r)} />
                          <button
                            onClick={() => setResumeOpen(true)}
                            className="px-3 py-2 rounded-md bg-sky-600 text-white text-sm"
                          >
                            View resume for selected role
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>

          {/* Experience */}
          <section id="experience" className="py-4">
            <h3 className="text-2xl font-bold mb-3">Experience</h3>
            <div className="space-y-4">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 md:p-5 shadow">
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

              <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 md:p-5 shadow">
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
          <section id="contact" className="py-4">
            <h3 className="text-2xl font-bold mb-3">Contact</h3>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow">
                <p className="text-sm text-slate-700 dark:text-slate-200">Email: jagadeesanuma.s@northeastern.edu</p>
                <p className="text-sm text-slate-700 dark:text-slate-200 mt-2">Location: Boston, MA</p>
                <p className="text-sm text-slate-700 dark:text-slate-200 mt-2">Available: May 2026</p>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow">
                <p className="text-sm text-slate-700 dark:text-slate-200">Prefer to connect on LinkedIn or GitHub — links are at the top. For quick access to my resume, click the Resume button in the header.</p>
              </div>
            </div>
          </section>

          <footer className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} Saran Jagadeesan Uma — Built with React & Tailwind</footer>
        </motion.main>
      </AnimatePresence>

      {/* Modals */}
      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} currentRole={role} />
      <ProfileModal open={profileOpen} onClose={() => setProfileOpen(false)} src={B("profile.jpg")} name="Saran Jagadeesan Uma" />

      {/* Mobile menu (kept simple) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div className="fixed inset-0 z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
            <motion.nav initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "tween", duration: 0.22 }} className="absolute right-0 top-0 h-full w-3/4 max-w-xs bg-white dark:bg-slate-900 p-4 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-lg font-semibold">Saran</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">MS Computer Science</div>
                </div>
                <button onClick={() => setMobileOpen(false)} className="p-2 rounded-md">Close</button>
              </div>

              <div className="space-y-3">
                <button onClick={() => { scrollTo("projects"); setMobileOpen(false); }} className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">Projects</button>
                <button onClick={() => { scrollTo("skills"); setMobileOpen(false); }} className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">Skills</button>
                <button onClick={() => { scrollTo("contact"); setMobileOpen(false); }} className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">Contact</button>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                  <div className="mb-2 text-sm text-slate-500">Role</div>
                  {/* mobile users still need access to RoleToggle — leave it here */}
                  <RoleToggle value={role} onChange={(r) => setRole(r)} />
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex gap-2">
                    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="px-3 py-2 rounded-md border">Toggle theme</button>
                    <button onClick={() => setMobileOpen(false)} className="px-3 py-2 rounded-md border">Close</button>
                  </div>
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
