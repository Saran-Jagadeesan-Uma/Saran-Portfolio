// src/App.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ResumeModal from "./components/ResumeModal";

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
   Theme toggle button
   ------------------------- */
function ThemeToggle({ theme, setTheme }) {
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

/* -------------------------
   Hero component (typewriter)
   ------------------------- */
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
        }, 1400);
      }
    }, 35);
    return () => clearTimeout(t);
  }, [li, char]);

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-4xl sm:text-5xl font-extrabold leading-tight"
        >
          <span className="text-sky-600">Saran</span> Jagadeesan Uma
        </motion.h1>

        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 min-h-[3rem]">
          <span className="inline-block">{text}</span>
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
            className="inline-block ml-3 px-4 py-2 rounded-lg border border-slate-200 text-sm bg-white hover:shadow"
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

      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow p-6">
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

/* -------------------------
   Main App
   ------------------------- */
export default function App() {
  const [theme, setTheme] = useTheme();
  const [resumeOpen, setResumeOpen] = React.useState(false);

  // helper to scroll to sections
  function scrollTo(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-sky-50 dark:from-slate-900 dark:via-slate-900 text-slate-900 dark:text-slate-100">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white font-semibold">SJ</div>
          <div>
            <h1 className="text-lg font-semibold">Saran Jagadeesan Uma</h1>
            <p className="text-sm text-slate-600 dark:text-slate-300">Software Engineer • MS Computer Science, Northeastern</p>
          </div>
        </div>

        <nav className="flex items-center space-x-4">
          <a onClick={() => scrollTo("projects")} className="text-sm hover:underline cursor-pointer">Projects</a>
          <a onClick={() => scrollTo("experience")} className="text-sm hover:underline cursor-pointer">Experience</a>
          <a onClick={() => scrollTo("skills")} className="text-sm hover:underline cursor-pointer">Skills</a>
          <a onClick={() => scrollTo("contact")} className="text-sm hover:underline cursor-pointer">Contact</a>

          <button
            onClick={() => setResumeOpen(true)}
            className="inline-block ml-3 px-4 py-2 rounded-lg border border-slate-200 text-sm bg-white hover:shadow"
          >
            Resume
          </button>

          <div className="ml-3">
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </div>
        </nav>
      </header>

      <motion.main
        className="max-w-6xl mx-auto px-6 pb-20"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <Hero onCTAClick={(id) => scrollTo(id)} onOpenResume={() => setResumeOpen(true)} />

        <section id="projects" className="py-10">
          <h3 className="text-2xl font-bold">Selected Projects</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Short descriptions focused on impact, tech used, and your role.</p>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <article className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow">
              <h4 className="font-semibold">Imaginator — Image Processing Toolkit</h4>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Java-based desktop app using MVC architecture and Java Swing for UI. Implemented real-time preview and wrote 300+ JUnit tests to ensure correctness.</p>
              <div className="mt-3 text-xs text-slate-500 dark:text-slate-400">Tech: Java, MVC, Swing, JUnit</div>
              <div className="mt-4 flex gap-2">
                <a href="https://github.com/Saran-Jagadeesan-Uma/Image-Manipulation-Toolkit" target="_blank" rel="noreferrer" className="text-sm underline">View Repo</a>
              </div>
            </article>

            <article className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow">
              <h4 className="font-semibold">Intern Search — Full Stack Job Platform</h4>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Built a dynamic internship search webapp with React front-end and Node.js backend. Optimized SQL queries with indexing and joins to improve response times.</p>
              <div className="mt-3 text-xs text-slate-500 dark:text-slate-400">Tech: React, Node.js, MySQL, REST</div>
              <div className="mt-4">
                <a href="https://github.com/Saran-Jagadeesan-Uma/internSearch" target="_blank" rel="noreferrer" className="text-sm underline">View Repo</a>
              </div>
            </article>

            <article className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow">
              <h4 className="font-semibold">Kambaz — React Web App</h4>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Front-end app in React + TypeScript, deployed on Netlify with continuous deployment from GitHub. Built modular UI components and integrated backend APIs with Redux for state management.</p>
              <div className="mt-3 text-xs text-slate-500 dark:text-slate-400">Tech: React, TypeScript, Redux, Netlify</div>
              <div className="mt-4">
                <a href="https://github.com/Saran-Jagadeesan-Uma/kambaz-react-web-app" target="_blank" rel="noreferrer" className="text-sm underline">View Repo</a>
              </div>
            </article>
          </div>
        </section>

        <section id="experience" className="py-10">
          <h3 className="text-2xl font-bold">Experience</h3>

          <div className="mt-4 space-y-4">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow">
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

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow">
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

        <section id="skills" className="py-10">
          <h3 className="text-2xl font-bold">Skills & Technologies</h3>
          <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Java",
              "Python",
              "JavaScript/TypeScript",
              "C++",
              "React",
              "Node.js/Express",
              "MySQL & MongoDB",
              "Git & Docker",
              "RESTful APIs",
              "Unit Testing (JUnit)",
              "Agile/Scrum",
              "CI/CD"
            ].map((skill) => (
              <div key={skill} className="bg-white dark:bg-slate-800 rounded-lg p-3 text-sm shadow-sm">{skill}</div>
            ))}
          </div>
        </section>

        <section id="education" className="py-10">
          <h3 className="text-2xl font-bold">Education</h3>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow">
              <h4 className="font-semibold">Northeastern University — M.S. Computer Science</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Sept 2024 — Expected May 2026 — Khoury College of Computer Sciences — GPA 3.867/4.0</p>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">Relevant coursework: Programming Design Paradigm, Algorithms, Web Development, DBMS</p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow">
              <h4 className="font-semibold">Anna University — B.E. Computer Science</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Sept 2020 — May 2024 — GPA 3.9/4.0</p>
            </div>
          </div>
        </section>

        <section id="contact" className="py-10">
          <h3 className="text-2xl font-bold">Contact</h3>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow">
              <p className="text-sm text-slate-700 dark:text-slate-200">Email: jagadeesanuma.s@northeastern.edu</p>
              <p className="text-sm text-slate-700 dark:text-slate-200 mt-2">Location: Boston, MA</p>
              <p className="text-sm text-slate-700 dark:text-slate-200 mt-2">Available: May 2026</p>
              <div className="mt-4">
                <a href="mailto:jagadeesanuma.s@northeastern.edu" className="inline-block px-4 py-2 rounded-lg bg-slate-900 text-white text-sm">Email Me</a>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow">
              <p className="text-sm text-slate-700 dark:text-slate-200">Prefer to connect on LinkedIn or GitHub — links are at the top. For quick access to my resume, click the Resume button in the header.</p>
            </div>
          </div>
        </section>

        <footer className="mt-12 text-center text-sm text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} Saran Jagadeesan Uma — Built with React & Tailwind</footer>
      </motion.main>

      {/* Resume modal */}
      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
