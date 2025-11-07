// src/components/RoleToggle.jsx
import React, { useEffect, useState } from "react";
import { ROLE_META, ROLES } from "../data/content";

export default function RoleToggle({ value, onChange }) {
  const [selected, setSelected] = useState(value || ROLES.SOFTWARE);

  useEffect(() => {
    setSelected(value || ROLES.SOFTWARE);
  }, [value]);

  function choose(r) {
    setSelected(r);
    try { localStorage.setItem("selectedRole", r); } catch {}
    onChange && onChange(r);
  }

  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-slate-800/40 p-1">
      {Object.values(ROLES).map((r) => {
        const meta = ROLE_META[r];
        const active = selected === r;
        return (
          <button
            key={r}
            onClick={() => choose(r)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition ${
              active
                ? "bg-gradient-to-r from-slate-900 to-slate-700 text-white shadow"
                : "text-slate-300 hover:bg-slate-700/40"
            }`}
            aria-pressed={active}
          >
            {meta.label}
          </button>
        );
      })}
    </div>
  );
}
