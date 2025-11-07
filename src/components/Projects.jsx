// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Projects({ items }) {
  if (!items || items.length === 0) {
    return <p className="text-sm text-slate-400">No projects added for this role yet.</p>;
  }

  return (
    <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {items.map((p) => (
        <motion.article
          key={p.id}
          whileHover={{ y: -6 }}
          className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow hover:shadow-lg"
          layout
        >
          <h4 className="font-semibold">{p.title}</h4>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.desc}</p>
          <div className="mt-3 text-xs text-slate-500 dark:text-slate-400">{p.tech?.join(" · ")}</div>
          <div className="mt-4 flex gap-3">
            {p.demo && <a href={p.demo} className="underline text-sm" target="_blank" rel="noreferrer">Live</a>}
            {p.repo && <a href={p.repo} className="underline text-sm" target="_blank" rel="noreferrer">Repo</a>}
          </div>
        </motion.article>
      ))}
    </div>
  );
}
