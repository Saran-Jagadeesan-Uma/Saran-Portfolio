// src/pages/ResumePortal.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const resumes = [
  {
    title: "Software Engineer",
    emoji: "💻",
    file: "/resume-software.pdf",
    desc: "Building scalable systems, elegant APIs, and full-stack products that make an impact.",
    color: "from-sky-500 to-indigo-600"
  },
  {
    title: "Machine Learning Engineer",
    emoji: "🤖",
    file: "/resume-ml.pdf",
    desc: "Combining algorithms and software craftsmanship to turn data into intelligent applications.",
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "Data Analyst / Scientist",
    emoji: "📊",
    file: "/resume-data.pdf",
    desc: "Exploring and visualizing data to uncover insights and drive data-driven decisions.",
    color: "from-yellow-400 to-orange-500"
  }
];

export default function ResumePortal() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-sky-50 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-slate-100 flex flex-col items-center py-12">
      <button
        onClick={() => navigate("/")}
        className="text-sm mb-6 text-slate-500 hover:underline"
      >
        ← Back to Home
      </button>

      <h1 className="text-3xl font-bold mb-10">Select Your Resume</h1>

      <div className="grid gap-8 md:grid-cols-3 max-w-5xl px-6">
        {resumes.map((r, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -6 }}
            className={`rounded-2xl bg-gradient-to-br ${r.color} p-[2px] shadow-lg`}
          >
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 flex flex-col h-full">
              <div className="text-5xl mb-4">{r.emoji}</div>
              <h2 className="text-xl font-semibold mb-2">{r.title}</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 flex-grow">
                {r.desc}
              </p>
              <a
                href={r.file}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block text-center px-4 py-2 rounded-lg text-white bg-slate-900 hover:brightness-110"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
