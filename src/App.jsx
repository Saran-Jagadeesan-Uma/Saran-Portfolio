import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-sky-50 text-slate-900">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white font-semibold">SJ</div>
          <div>
            <h1 className="text-lg font-semibold">Saran Jagadeesan Uma</h1>
            <p className="text-sm text-slate-600">Software Engineer • MS Computer Science, Northeastern</p>
          </div>
        </div>
        <nav className="flex items-center space-x-4">
          <a href="#projects" className="text-sm hover:underline">Projects</a>
          <a href="#experience" className="text-sm hover:underline">Experience</a>
          <a href="#skills" className="text-sm hover:underline">Skills</a>
          <a href="#contact" className="text-sm hover:underline">Contact</a>
          <a href="/resume.pdf" className="inline-block ml-3 px-4 py-2 rounded-lg border border-slate-200 text-sm bg-white hover:shadow">Resume</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-20">
        <section className="grid md:grid-cols-2 gap-8 items-center py-12">
          <div>
            <h2 className="text-4xl font-extrabold leading-tight">Hi, I'm Saran — building practical, scalable web & cloud systems.</h2>
            <p className="mt-4 text-lg text-slate-600">MSc Computer Science (Northeastern). I design and implement full-stack applications, reliable APIs, and performant systems. Available May 2026.</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://github.com/Saran-Jagadeesan-Uma" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-slate-900 text-white text-sm">GitHub</a>
              <a href="https://www.linkedin.com/in/saran-jagadeesan-uma/" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg border border-slate-200 text-sm">LinkedIn</a>
              <a href="mailto:jagadeesanuma.s@northeastern.edu" className="px-4 py-2 rounded-lg border border-slate-200 text-sm">Email</a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-slate-700">
              <div>
                <p className="font-semibold">Location</p>
                <p>Boston, MA</p>
              </div>
              <div>
                <p className="font-semibold">Open to</p>
                <p>Full-time SDE roles · Internships · Remote/Hybrid</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="font-semibold text-lg">Highlights</h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>Strong fundamentals: Data Structures, Algorithms, OOP</li>
              <li>Languages: Java, Python, JavaScript, C++</li>
              <li>Technologies: React, Node.js, MongoDB, MySQL, Docker</li>
              <li>Experience: Full-stack projects, RESTful APIs, CI/CD</li>
              <li>Available: May 2026</li>
            </ul>
          </div>
        </section>

        <section id="projects" className="py-10">
          <h3 className="text-2xl font-bold">Selected Projects</h3>
          <p className="mt-2 text-sm text-slate-600">Short descriptions focused on impact, tech used, and your role.</p>

          <div className="mt-6 grid md:grid-cols-3 gap-6">

            <article className="bg-white rounded-2xl p-5 shadow">
              <h4 className="font-semibold">Imaginator — Image Processing Toolkit</h4>
              <p className="mt-2 text-sm text-slate-600">Java-based desktop app using MVC architecture and Java Swing for UI. Implemented real-time preview and wrote 300+ JUnit tests to ensure correctness.</p>
              <div className="mt-3 text-xs text-slate-500">Tech: Java, MVC, Swing, JUnit</div>
              <div className="mt-4 flex gap-2">
                <a href="https://github.com/Saran-Jagadeesan-Uma/Image-Manipulation-Toolkit" target="_blank" rel="noreferrer" className="text-sm underline">View Repo</a>
              </div>
            </article>

            <article className="bg-white rounded-2xl p-5 shadow">
              <h4 className="font-semibold">Intern Search — Full Stack Job Platform</h4>
              <p className="mt-2 text-sm text-slate-600">Built a dynamic internship search webapp with React front-end and Node.js backend. Optimized SQL queries with indexing and joins to improve response times.</p>
              <div className="mt-3 text-xs text-slate-500">Tech: React, Node.js, MySQL, REST</div>
              <div className="mt-4">
                <a href="https://github.com/Saran-Jagadeesan-Uma/internSearch" target="_blank" rel="noreferrer" className="text-sm underline">View Repo</a>
              </div>
            </article>

            <article className="bg-white rounded-2xl p-5 shadow">
              <h4 className="font-semibold">Kambaz — React Web App</h4>
              <p className="mt-2 text-sm text-slate-600">Front-end app in React + TypeScript, deployed on Netlify with continuous deployment from GitHub. Built modular UI components and integrated backend APIs with Redux for state management.</p>
              <div className="mt-3 text-xs text-slate-500">Tech: React, TypeScript, Redux, Netlify</div>
              <div className="mt-4">
                <a href="https://github.com/Saran-Jagadeesan-Uma/kambaz-react-web-app" target="_blank" rel="noreferrer" className="text-sm underline">View Repo</a>
              </div>
            </article>

          </div>
        </section>

        <section id="experience" className="py-10">
          <h3 className="text-2xl font-bold">Experience</h3>

          <div className="mt-4 space-y-4">
            <div className="bg-white rounded-2xl p-5 shadow">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold">Teaching Assistant — Northeastern University</h4>
                  <p className="text-xs text-slate-500">Sept 2025 — Present</p>
                </div>
                <div className="text-sm text-slate-600">Boston, MA</div>
              </div>
              <ul className="mt-3 text-sm text-slate-700 list-disc list-inside">
                <li>Guided students on Git/GitHub workflows, API testing with Postman, and collaborative code review practices.</li>
                <li>Mentored teams building MERN stack applications, emphasizing scalable design and deployment best practices.</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold">Software Engineering Intern — Dubai Technologies</h4>
                  <p className="text-xs text-slate-500">June 2023 — July 2023</p>
                </div>
                <div className="text-sm text-slate-600">Dubai, UAE</div>
              </div>
              <ul className="mt-3 text-sm text-slate-700 list-disc list-inside">
                <li>Developed an IoT-enabled mobile app with cloud backend; implemented RESTful APIs and redundancy/failover mechanisms to improve availability.</li>
                <li>Contributed to backend services and reduced integration errors by improving API contracts and tests.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="skills" className="py-10">
          <h3 className="text-2xl font-bold">Skills & Technologies</h3>
          <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Java",
              "Python",
              "JavaScript/TypeScript",
              "C++",
              "React",
              "Node.js/Express",
              "MySQL & MongoDB",
              "Git & Docker",
              "RESTful APIs",
              "Unit Testing (JUnit)",
              "Agile/Scrum",
              "CI/CD"
            ].map((skill) => (
              <div key={skill} className="bg-white rounded-lg p-3 text-sm shadow-sm">{skill}</div>
            ))}
          </div>
        </section>

        <section id="education" className="py-10">
          <h3 className="text-2xl font-bold">Education</h3>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-5 shadow">
              <h4 className="font-semibold">Northeastern University — M.S. Computer Science</h4>
              <p className="text-xs text-slate-500">Sept 2024 — Expected May 2026 — Khoury College of Computer Sciences — GPA 3.867/4.0</p>
              <p className="mt-2 text-sm text-slate-700">Relevant coursework: Programming Design Paradigm, Algorithms, Web Development, DBMS</p>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow">
              <h4 className="font-semibold">Anna University — B.E. Computer Science</h4>
              <p className="text-xs text-slate-500">Sept 2020 — May 2024 — GPA 3.9/4.0</p>
            </div>
          </div>
        </section>

        <section id="contact" className="py-10">
          <h3 className="text-2xl font-bold">Contact</h3>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-5 shadow">
              <p className="text-sm text-slate-700">Email: jagadeesanuma.s@northeastern.edu</p>
              <p className="text-sm text-slate-700 mt-2">Location: Boston, MA</p>
              <p className="text-sm text-slate-700 mt-2">Available: May 2026</p>
              <div className="mt-4">
                <a href="mailto:jagadeesanuma.s@northeastern.edu" className="inline-block px-4 py-2 rounded-lg bg-slate-900 text-white text-sm">Email Me</a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow">
              <p className="text-sm text-slate-700">Prefer to connect on LinkedIn or GitHub — links are at the top. For quick access to my resume, click the Resume button in the header.</p>
            </div>
          </div>
        </section>

        <footer className="mt-12 text-center text-sm text-slate-500">© {new Date().getFullYear()} Saran Jagadeesan Uma — Built with React & Tailwind</footer>
      </main>
    </div>
  );
}
