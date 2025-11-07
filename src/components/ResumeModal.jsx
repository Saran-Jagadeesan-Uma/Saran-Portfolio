// src/components/ResumeModal.jsx
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Brain, BarChart3, X } from "lucide-react";

/* base-aware helper — respects Vite's base (dev: '/', prod: '/Saran-Portfolio/' if configured) */
const B = (p) => (import.meta.env.BASE_URL || "/") + p;

/*
  Props:
    open (bool) - whether modal is visible
    onClose (fn) - close handler
*/
const cards = [
    {
        id: "software",
        icon: <Code2 size={28} strokeWidth={1.6} />,
        title: "Software Engineer",
        file: "resume-software.pdf", // no leading slash — use B(...) when rendering
        desc: "Practical engineering: designing scalable APIs, reliable systems, and production-grade full-stack products.",
    },
    {
        id: "ml",
        icon: <Brain size={28} strokeWidth={1.6} />,
        title: "Machine Learning Engineer",
        file: "resume-ml.pdf",
        desc: "Engineering ML solutions — from data pipelines and model training to deploying robust inference systems.",
    },
    {
        id: "data",
        icon: <BarChart3 size={28} strokeWidth={1.6} />,
        title: "Data Analyst / Scientist",
        file: "resume-data.pdf",
        desc: "Turning raw data into actionable insights — analysis, visualization, and data-driven recommendations.",
    },
];

const backdropVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const panelVariant = {
    hidden: { opacity: 0, y: 16, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 320, damping: 30 } },
    exit: { opacity: 0, y: 10, scale: 0.995, transition: { duration: 0.15 } },
};

export default function ResumeModal({ open, onClose }) {
    // close on Escape
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
                    className="fixed inset-0 z-50 flex items-start md:items-center justify-center p-6"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={backdropVariant}
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

                    {/* panel */}
                    <motion.div
                        className="relative max-w-5xl w-full"
                        variants={panelVariant}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        role="dialog"
                        aria-modal="true"
                    >
                        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold text-white">Choose a resume</h3>
                                    <p className="text-sm text-slate-300">Select the resume tailored to the role you want to highlight.</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => onClose && onClose()}
                                        className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/8 text-white text-sm hover:bg-white/12"
                                        aria-label="Close resume modal"
                                        title="Close"
                                    >
                                        <X size={14} /> Close
                                    </button>
                                </div>
                            </div>

                            <div className="grid gap-6 md:grid-cols-3 mt-2">
                                {cards.map((c) => {
                                    const fileUrl = B(c.file);
                                    return (
                                        <motion.div
                                            key={c.id}
                                            whileHover={{ translateY: -6 }}
                                            whileTap={{ scale: 0.995 }}
                                            className="gradient-border"
                                            style={{ borderRadius: 14 }}
                                        >
                                            {/* inner card */}
                                            <div className="card-inner flex flex-col h-full text-slate-100 p-4" style={{ borderRadius: 12 }}>
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div className="p-2 rounded-md bg-slate-800/60">{c.icon}</div>
                                                    <h4 className="text-lg font-medium">{c.title}</h4>
                                                </div>

                                                <p className="text-sm text-slate-300 flex-grow leading-relaxed">{c.desc}</p>

                                                <div className="mt-6 flex items-center justify-between">
                                                    <a
                                                        href={fileUrl}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="inline-block px-4 py-2 rounded-md bg-slate-100 text-slate-900 text-sm border border-slate-200 hover:bg-white transition"
                                                    >
                                                        View Resume
                                                    </a>

                                                    <a
                                                        href={fileUrl}
                                                        download={`Saran_Jagadeesan_Uma_${c.id}_Resume.pdf`}
                                                        className="text-xs text-slate-200 hover:text-white"
                                                        title="Download PDF"
                                                    >
                                                        Download PDF
                                                    </a>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            <div className="mt-6 text-xs text-slate-300">
                                Note: I'm currently an MS Computer Science student at Northeastern (graduating May 2026). Choose the resume
                                that best matches the role — each highlights different skills and projects (systems & backend, ML/ML infra, or data analysis).
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
