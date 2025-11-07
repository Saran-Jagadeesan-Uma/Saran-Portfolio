// src/components/Hero.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const lines = [
  "Hi — I'm Saran.",
  "I build scalable web systems.",
  "I care about clean code & product impact."
];

export default function Hero({ onCTAClick }) {
  const [text, setText] = useState("");
  const [li, setLi] = useState(0);
  const [char, setChar] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => {
      if (char < lines[li].length) {
        setText((s) => s + lines[li][char]);
        setChar((c) => c + 1);
      } else {
        // pause then move to next line
        setTimeout(() => {
          setText("");
          setChar(0);
          setLi((n) => (n + 1) % lines.length);
        }, 1400);
      }
    }, 40);
    return () => clearTimeout(t);
  }, [li, char]);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-extrabold leading-tight"
        >
          <span className="text-sky-600">Saran</span> Jagadeesan Uma
        </motion.h1>

        <p className="mt-4 text-lg text-slate-600 min-h-[3rem]">
          <span className="inline-block">{text}</span>
          <span className="inline-block animate-pulse ml-1">█</span>
        </p>

        <div className="mt-6 flex gap-3">
          <button
            onClick={() => onCTAClick && onCTAClick("projects")}
            className="px-4 py-2 rounded-lg bg-sky-600 text-white font-medium shadow hover:brightness-95"
          >
            See Projects
          </button>

          <a
            href="/resume.pdf"
            className="px-4 py-2 rounded-lg border border-slate-200 text-sm hover:shadow"
            download
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="rounded-3xl bg-white p-6 shadow-lg">
        {/* small profile / quick stats */}
        <div className="text-sm text-slate-700">
          <div><strong>Location</strong> Boston, MA</div>
          <div className="mt-2"><strong>Open to</strong> SDE / Internships</div>
          <div className="mt-4 flex gap-3">
            <a href="https://github.com/Saran-Jagadeesan-Uma" target="_blank" rel="noreferrer" className="underline">GitHub</a>
            <a href="https://linkedin.com/in/saran-jagadeesan-uma" target="_blank" rel="noreferrer" className="underline">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}
