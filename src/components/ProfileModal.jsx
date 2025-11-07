// src/components/ProfileModal.jsx
import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export default function ProfileModal({ open, onClose, src = "/profile.jpg", name = "Saran Jagadeesan Uma" }) {
  // close on escape
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose && onClose();
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-60 flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* backdrop */}
          <motion.div
            className="absolute inset-0 resume-backdrop"
            onClick={() => onClose && onClose()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.18 } }}
            exit={{ opacity: 0, transition: { duration: 0.12 } }}
            aria-hidden="true"
          />

          {/* modal card */}
          <motion.div
            className="relative max-w-[720px] w-full mx-4"
            initial={{ y: 12, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 28 } }}
            exit={{ y: 8, opacity: 0, scale: 0.995, transition: { duration: 0.12 } }}
            role="dialog"
            aria-modal="true"
          >
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden">
              <div className="flex items-start justify-between p-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden ring-1 ring-slate-200 dark:ring-slate-700">
                    <img src={src} alt={name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-slate-900 dark:text-slate-100">{name}</div>
                    <div className="text-sm text-slate-500 dark:text-slate-300">MS Computer Science — Northeastern</div>
                  </div>
                </div>

                <button onClick={() => onClose && onClose()} className="resume-close" aria-label="Close profile preview">
                  <X size={16} />
                </button>
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6 items-start">
                  <div>
                    <img src={src} alt={name} className="w-full rounded-lg object-cover shadow-sm" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-2">About</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                      I'm Saran — an MS Computer Science student at Northeastern University, focused on building scalable
                      systems, clean APIs and production-ready ML tooling. Currently available May 2026.
                    </p>

                    <div className="mt-4 space-y-2 text-sm">
                      <div><strong className="text-slate-700 dark:text-slate-200">Location:</strong> Boston, MA</div>
                      <div><strong className="text-slate-700 dark:text-slate-200">Email:</strong> jagadeesanuma.s@northeastern.edu</div>
                    </div>

                    <div className="mt-6 flex gap-3">
                      <a href="/resume-software.pdf" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md bg-sky-600 text-white text-sm">View Resume</a>
                      <a href="/resume-software.pdf" download className="px-3 py-2 text-sm text-slate-600 dark:text-slate-300">Download PDF</a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
