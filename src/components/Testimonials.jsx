import React from "react";
import { motion } from "framer-motion";

export default function Testimonials({ list = [] }){
  return (
    <div className="space-y-4">
      {list.map((t, i) => (
        <motion.blockquote key={i} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i*0.06 }} className="bg-white dark:bg-slate-800 p-4 rounded shadow">
          <p className="text-sm text-slate-700 dark:text-slate-200">“{t.quote}”</p>
          <div className="mt-2 text-xs text-slate-500">— {t.by}</div>
        </motion.blockquote>
      ))}
    </div>
  );
}
