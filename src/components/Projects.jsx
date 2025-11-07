// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Projects({ items = [] }) {
  if (!items || items.length === 0) {
    return <p className="text-sm text-slate-400">No projects added for this role yet.</p>;
  }

  // This component returns a list of cards — the parent should provide the grid container.
  return (
    <>
      {items.map((p, idx) => (
        <motion.article
          key={p.id ?? `${p.title}-${idx}`}
          whileHover={{ y: -6 }}
          layout
          className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow hover:shadow-lg hover:-translate-y-1 transition-transform duration-150 ease-out h-full flex flex-col justify-between"
          style={{ minHeight: 220 }}
        >
          <div>
            <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{p.title}</h4>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{p.desc}</p>
          </div>

          <div className="mt-6 flex items-end justify-between">
            <div>
              {p.tech && (
                <div className="text-xs text-slate-500 dark:text-slate-400 mb-2">
                  {Array.isArray(p.tech) ? p.tech.join(" · ") : p.tech}
                </div>
              )}
              {/* optional tags */}
              {p.tags && (
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-slate-700 dark:text-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="text-right">
              {p.demo && (
                <a href={p.demo} className="inline-block text-sm underline text-sky-600 dark:text-sky-400 mr-3" target="_blank" rel="noreferrer">
                  Live
                </a>
              )}
              {p.repo && (
                <a href={p.repo} className="inline-block text-sm underline text-sky-600 dark:text-sky-400" target="_blank" rel="noreferrer">
                  Repo
                </a>
              )}
            </div>
          </div>
        </motion.article>
      ))}
    </>
  );
}
