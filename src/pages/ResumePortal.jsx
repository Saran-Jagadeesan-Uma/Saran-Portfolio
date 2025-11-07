import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Code2, Brain, BarChart3 } from "lucide-react";

const resumes = [
  {
    title: "Software Engineer",
    icon: <Code2 size={36} strokeWidth={1.5} />,
    file: "/resume-software.pdf",
    desc: "Focused on building reliable, scalable systems — from clean APIs to full-stack products — emphasizing craftsmanship and performance.",
    gradient: "from-slate-800/90 via-slate-900/80 to-slate-950/90",
    accent: "border-sky-500/30 hover:border-sky-400/60"
  },
  {
    title: "Machine Learning Engineer",
    icon: <Brain size={36} strokeWidth={1.5} />,
    file: "/resume-ml.pdf",
    desc: "Driven by curiosity for intelligent systems — merging engineering precision with ML research to turn data into insight and automation.",
    gradient: "from-slate-800/90 via-slate-900/80 to-slate-950/90",
    accent: "border-emerald-500/30 hover:border-emerald-400/60"
  },
  {
    title: "Data Analyst / Scientist",
    icon: <BarChart3 size={36} strokeWidth={1.5} />,
    file: "/resume-data.pdf",
    desc: "Combining analytical thinking and storytelling — uncovering patterns that translate raw data into strategy and impact.",
    gradient: "from-slate-800/90 via-slate-900/80 to-slate-950/90",
    accent: "border-amber-500/30 hover:border-amber-400/60"
  }
];

export default function ResumePortal() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 flex flex-col items-center py-12 px-6">
      <button
        onClick={() => navigate("/")}
        className="text-sm mb-8 text-slate-400 hover:text-slate-200 transition-colors"
      >
        ← Back to Portfolio
      </button>

      <motion.h1
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-10"
      >
        Explore My Professional Paths
      </motion.h1>

      <div className="grid gap-8 md:grid-cols-3 w-full max-w-6xl">
        {resumes.map((r, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -6 }}
            className={`rounded-2xl backdrop-blur-md bg-gradient-to-br ${r.gradient} border ${r.accent} transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-slate-800/50 p-6 flex flex-col`}
          >
            <div className="flex items-center gap-3 mb-4 text-slate-100">
              <div className="p-2 rounded-md bg-slate-800/70">{r.icon}</div>
              <h2 className="text-lg font-semibold">{r.title}</h2>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed flex-grow">
              {r.desc}
            </p>

            <a
              href={r.file}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block text-center px-4 py-2 rounded-lg text-slate-100 border border-slate-600 hover:border-slate-300 hover:bg-slate-800/70 transition-all duration-300"
            >
              View Resume →
            </a>
          </motion.div>
        ))}
      </div>

      <footer className="mt-16 text-xs text-slate-500">
        © {new Date().getFullYear()} Saran Jagadeesan Uma — Crafted with React
      </footer>
    </div>
  );
}
