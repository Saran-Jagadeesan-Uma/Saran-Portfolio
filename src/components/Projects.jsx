// src/components/Projects.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectModal from "./ProjectModal";

export default function Projects({ items }) {
  const [selected, setSelected] = useState(null);

  // Close on ESC
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setSelected(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!items || items.length === 0) {
    return <p className="text-sm text-slate-400">No projects added for this role yet.</p>;
  }

  return (
    <>
      {/* Cards: parent (App.jsx) controls grid columns and gap */}
      {items.map((p) => (
        <motion.article
          key={p.id}
          whileHover={{ y: -6 }}
          whileTap={{ scale: 0.995 }}
          className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow hover:shadow-lg cursor-pointer overflow-hidden min-h-[220px]"
          layout
          onClick={() => setSelected(p)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === ' ') setSelected(p); }}
          aria-label={`Open details for ${p.title}`}
        >
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-slate-100 dark:bg-slate-900 ring-1 ring-slate-100 dark:ring-slate-800">
              <img
                src={
                  p.imageThumb
                    ? (import.meta.env.BASE_URL || "/") + p.imageThumb
                    : p.image
                      ? (import.meta.env.BASE_URL || "/") + p.image
                      : (import.meta.env.BASE_URL || "/") + `Saran-Portfolio/assets/projects/${p.id}.jpg`
                }
                alt={p.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100">{p.title}</h4>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 line-clamp-4">{p.desc}</p>

              <div className="mt-3 text-xs text-slate-500 dark:text-slate-400 flex flex-wrap gap-2">
                {p.tech && p.tech.map(t => (
                  <span key={t} className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded-md text-[12px]">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.article>
      ))}

      <AnimatePresence>
        {selected && (
          <ProjectModal
            project={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
