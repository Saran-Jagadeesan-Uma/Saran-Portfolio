import React from "react";

export default function Credits({ publications = [], certs = [] }){
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="bg-white dark:bg-slate-800 rounded p-4 shadow">
        <h4 className="font-semibold mb-2">Publications / Projects</h4>
        <ul className="text-sm text-slate-700 dark:text-slate-200">
          {publications.map((p,i) => (
            <li key={i} className="mb-2">
              <div className="font-medium">{p.title}</div>
              <div className="text-xs text-slate-500">{p.venue} • {p.year}</div>
              {p.link && <a href={p.link} className="text-xs underline text-sky-600">Read</a>}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded p-4 shadow">
        <h4 className="font-semibold mb-2">Certifications</h4>
        <ul className="text-sm text-slate-700 dark:text-slate-200">
          {certs.map((c,i) => (
            <li key={i} className="mb-2">{c}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
