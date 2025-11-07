// src/components/ResumeModal.jsx
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Brain, BarChart3, X } from "lucide-react";

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
        file: "/resume-software.pdf",
        desc: "Practical engineering: designing scalable APIs, reliable systems, and production-grade full-stack products.",
    },
    {
        id: "ml",
        icon: <Brain size={28} strokeWidth={1.6} />,
        title: "Machine Learning Engineer",
        file: "/resume-ml.pdf",
        desc: "Engineering ML solutions — from data pipelines and model training to deploying robust inference systems.",
    },
    {
        id: "data",
        icon: <BarChart3 size={28} strokeWidth={1.6} />,
        title: "Data Analyst / Scientist",
        file: "/resume-data.pdf",
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
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <h3 className="text-xl md:text-2xl font-semibold text-white">Choose a resume</h3>
                                <p className="text-sm text-slate-300">Select the resume tailored to the role you want to highlight.</p>
                            </div>
                            <button
                                onClick={() => onClose && onClose()}
                                className="resume-close ml-3"
                                aria-label="Close resume modal"
                                title="Close"
                            >
                                <X size={16} />
                            </button>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            {cards.map((c) => (
                                <motion.div
                                    key={c.id}
                                    whileHover={{ translateY: -6 }}
                                    className="gradient-border"
                                    style={{ borderRadius: 14 }}
                                >
                                    {/* inner card */}
                                    <div className="card-inner flex flex-col h-full text-slate-100">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="p-2 rounded-md bg-slate-800/60">{c.icon}</div>
                                            <h4 className="text-lg font-medium">{c.title}</h4>
                                        </div>

                                        <p className="text-sm text-slate-300 flex-grow leading-relaxed">{c.desc}</p>

                                        <div className="mt-6 flex items-center justify-between">
                                            <a
                                                href={c.file}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-block px-4 py-2 rounded-md bg-slate-900 text-white text-sm border border-slate-700 hover:bg-slate-800 transition"
                                            >
                                                View Resume
                                            </a>

                                            <a
                                                href={c.file}
                                                download
                                                className="text-xs text-slate-400 hover:text-slate-200"
                                                title="Download PDF"
                                            >
                                                Download PDF
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-6 text-xs text-slate-400">
                            Note: I'm currently an MS Computer Science student at Northeastern (graduating May 2026).
                            Choose the resume that best matches the role — each highlights different skills and projects (systems & backend, ML/ML infra, or data analysis).
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
