// src/components/Skills.jsx
import React from "react";

export default function Skills({ list }) {
  if (!list || list.length === 0) return null;
  return (
    <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {list.map((s) => (
        <div key={s} className="bg-white dark:bg-slate-800 rounded-lg p-3 text-sm shadow-sm">
          {s}
        </div>
      ))}
    </div>
  );
}
