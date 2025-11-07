// src/components/ProjectModal.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

/*
  Props:
    - project: { id, title, desc, repo, demo, tech[], image, imageThumb, year, role }
    - onClose: fn
*/
export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    function onKey(e) { if (e.key === "Escape") onClose && onClose(); }
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  const base = import.meta.env.BASE_URL || "/";
  const imgSrc = project.image
    ? base + project.image
    : project.imageThumb
      ? base + project.imageThumb
      : base + `Saran-Portfolio/assets/projects/${project.id}.jpg`;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      aria-modal="true"
      role="dialog"
    >
      {/* backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/55 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        aria-hidden="true"
      />

      {/* modal panel */}
      <motion.div
        className="relative max-w-4xl w-full mx-4"
        initial={{ y: 16, scale: 0.98 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 8, scale: 0.995 }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
        role="document"
      >
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden">
          <div className="flex items-start justify-between p-4">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{project.title}</h3>
              {project.year && <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Year: {project.year}</p>}
            </div>

            <div className="flex items-center gap-2">
              {/* single repo/demo CTA */}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 text-sm rounded-md bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 border"
                >
                  View repo
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 text-sm rounded-md bg-sky-600 text-white"
                >
                  Live demo
                </a>
              )}

              <button
                onClick={() => onClose && onClose()}
                className="p-2 rounded-md resume-close"
                aria-label="Close project details"
                title="Close"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-6">
            <div className="w-full rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800">
              <img src={imgSrc} alt={project.title} className="w-full h-72 md:h-full object-cover" />
            </div>

            <div>
              <h4 className="text-md font-medium mb-2">Overview</h4>
              <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">{project.desc}</p>

              {project.tech && (
                <>
                  <h5 className="mt-4 text-sm font-semibold">Tech</h5>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-xs rounded-md">{t}</span>
                    ))}
                  </div>
                </>
              )}

              <div className="mt-6 flex gap-3">
                {/* Keep single repo CTA here too for visibility (optional) */}
                {project.repo && (
                  <a href={project.repo} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md border text-sm">Open repo</a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md bg-sky-600 text-white text-sm">Open demo</a>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
