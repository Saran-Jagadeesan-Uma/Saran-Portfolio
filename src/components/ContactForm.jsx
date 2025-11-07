import React, { useState } from "react";

export default function ContactForm(){
  const [status, setStatus] = useState(null);

  async function onSubmit(e){
    e.preventDefault();
    const form = new FormData(e.target);
    setStatus("loading");
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
        method: "POST",
        body: form,
        headers: { Accept: "application/json" },
      });
      const data = await res.json();
      if (data.ok === false || res.status >= 400) throw new Error("Failed");
      setStatus("success");
      e.target.reset();
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow">
      <div className="grid gap-3">
        <input name="name" required placeholder="Your name" className="border rounded px-3 py-2" />
        <input name="email" required placeholder="Your email" className="border rounded px-3 py-2" />
        <textarea name="message" required placeholder="Message" className="border rounded px-3 py-2 min-h-[120px]" />
        <div className="flex items-center justify-between">
          <button className="btn">Send message</button>
          {status === "loading" ? <div className="text-sm text-slate-500">Sending…</div> : status === "success" ? <div className="text-sm text-emerald-400">Sent!</div> : status === "error" ? <div className="text-sm text-rose-500">Error</div> : null}
        </div>
      </div>
    </form>
  );
}
