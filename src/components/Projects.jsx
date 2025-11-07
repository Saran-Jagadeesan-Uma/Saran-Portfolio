// src/components/Projects.jsx
import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";

const PROJECTS = [
  { id:1, title:"Kambaz", tech:["React","TypeScript"], repo:"https://github.com/...", demo:"https://..." },
  { id:2, title:"Intern Search", tech:["React","MySQL"], repo:"https://github.com/...", demo:"https://..." },
  { id:3, title:"Imaginator", tech:["Java"], repo:"https://github.com/..." }
];

export default function Projects() {
  const [tag, setTag] = useState("All");
  const tags = useMemo(() => ["All", ...new Set(PROJECTS.flatMap(p => p.tech))], []);

  const filtered = tag === "All" ? PROJECTS : PROJECTS.filter(p => p.tech.includes(tag));

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-12">
      <h3 className="text-2xl font-bold">Selected Projects</h3>
      <div className="mt-4 flex gap-2 flex-wrap">
        {tags.map(t=>(
          <button key={t} onClick={()=>setTag(t)} className={`px-3 py-1 rounded-full ${t===tag? 'bg-sky-600 text-white':'border'}`}>{t}</button>
        ))}
      </div>

      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {filtered.map(p => (
          <motion.article key={p.id} whileHover={{ y:-6 }} className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow">
            <h4 className="font-semibold">{p.title}</h4>
            <div className="text-xs mt-2 text-slate-500">{p.tech.join(" · ")}</div>
            <div className="mt-4 flex gap-2">
              {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="text-sm underline">Live</a>}
              <a href={p.repo} target="_blank" rel="noreferrer" className="text-sm underline">Repo</a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
