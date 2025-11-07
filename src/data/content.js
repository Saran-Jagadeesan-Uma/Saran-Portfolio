// src/data/content.js

export const ROLES = {
  SOFTWARE: "software",
  ML: "ml",
  DATA: "data",
};

export const ROLE_META = {
  [ROLES.SOFTWARE]: {
    id: ROLES.SOFTWARE,
    label: "Software Engineer",
    short:
      "Building reliable, scalable backend & full-stack systems with strong engineering practices.",
    resume: "/resume-software.pdf",
    accent: "from-sky-600 to-indigo-600",
  },
  [ROLES.ML]: {
    id: ROLES.ML,
    label: "Machine Learning Engineer",
    short:
      "Engineering ML systems, model deployment, and ML infrastructure for production use.",
    resume: "/resume-ml.pdf",
    accent: "from-green-500 to-emerald-600",
  },
  [ROLES.DATA]: {
    id: ROLES.DATA,
    label: "Data Analyst / Scientist",
    short:
      "Turning data into insights: analysis, visualisation, and decision support.",
    resume: "/resume-data.pdf",
    accent: "from-amber-400 to-orange-500",
  },
};

export const PROJECTS = [
  /* ---------------- SOFTWARE PROJECTS ---------------- */
  {
    id: "imageinator",
    role: ROLES.SOFTWARE,
    title: "Imageinator — Image Manipulation Toolkit",
    desc:
      "A Java-based CLI and GUI toolkit for advanced image processing. Supports RGB split/combine, filters (blur, sepia, sharpen), compression, histograms, color correction, masking, and batch scripting.",
    repo: "https://github.com/Saran-Jagadeesan-Uma/Image-Manipulation-Toolkit",
    demo: null,
    tech: ["Java 11+", "CLI", "Swing GUI", "Image I/O", "Scripting"],
  },
  {
    id: "kambaz",
    role: ROLES.SOFTWARE,
    title: "Kambaz — React Web App",
    desc:
      "A modern React-based web application demonstrating clean component architecture, routing, and responsive UI design. Implements state management, dynamic listings, and modular page structure.",
    repo: "https://github.com/Saran-Jagadeesan-Uma/kambaz-react-web-app",
    demo: null,
    tech: ["React", "Tailwind CSS", "Vite", "React Router"],
  },
  {
    id: "internsearch",
    role: ROLES.SOFTWARE,
    title: "InternSearch — Full-Stack Internship Finder",
    desc:
      "Full-stack internship discovery platform. Implements REST APIs, pagination, and efficient search workflows with modern frontend and backend integration for real-world data use.",
    repo: "https://github.com/Saran-Jagadeesan-Uma/internSearch",
    demo: null,
    tech: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    id: "portfolio",
    role: ROLES.SOFTWARE,
    title: "Saran Portfolio — Personal Developer Website",
    desc:
      "This very website! A dynamic React + Tailwind portfolio featuring role-based views, resume modals, profile previews, animations, and GitHub Pages deployment.",
    repo: "https://github.com/Saran-Jagadeesan-Uma/Saran-Portfolio",
    demo: "https://saran-jagadeesan-uma.github.io/Saran-Portfolio/",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vite", "GitHub Pages"],
  },

  /* ---------------- ML PROJECTS (Placeholder) ---------------- */
  {
    id: "ml-classifier",
    role: ROLES.ML,
    title: "ImageClassifier — CNN Training Pipeline",
    desc:
      "Trained and deployed convolutional neural networks (CNNs) for image classification. Includes data augmentation, model evaluation, and REST API inference service.",
    repo: "https://github.com/your-ml-repo",
    demo: null,
    tech: ["PyTorch", "Python", "Docker", "Flask"],
  },
  {
    id: "ml-monitor",
    role: ROLES.ML,
    title: "Model Monitoring & Drift Detection",
    desc:
      "Lightweight ML monitoring system for detecting data and model drift in production using Prometheus metrics and visualization dashboards.",
    repo: "https://github.com/your-ml-monitoring",
    demo: null,
    tech: ["Prometheus", "Python", "Pandas"],
  },

  /* ---------------- DATA PROJECTS (Placeholder) ---------------- */
  {
    id: "sales-insights",
    role: ROLES.DATA,
    title: "Sales Insights Dashboard",
    desc:
      "Data ETL and interactive dashboards to track product performance. Built using SQL queries and visualization tools for actionable business insights.",
    repo: "https://github.com/your-data-repo",
    demo: null,
    tech: ["SQL", "Python", "Tableau"],
  },
  {
    id: "ab-analysis",
    role: ROLES.DATA,
    title: "A/B Experiment Analysis Pipeline",
    desc:
      "Built data pipelines and statistical reports to evaluate experiment results. Includes automated hypothesis testing and dashboard generation.",
    repo: "https://github.com/your-ab-analysis",
    demo: null,
    tech: ["Python", "Pandas", "Statsmodels"],
  },
];

/* ---------------- SKILLS ---------------- */
export const SKILLS = {
  [ROLES.SOFTWARE]: [
    "Java",
    "Python",
    "Node.js",
    "React",
    "REST APIs",
    "Distributed Systems",
    "Docker",
    "CI/CD",
    "MongoDB",
    "SQL",
    "Image Processing",
  ],
  [ROLES.ML]: [
    "Python",
    "PyTorch / TensorFlow",
    "Model Deployment",
    "Data Pipelines",
    "Feature Engineering",
    "MLOps",
    "Cloud (GCP/AWS)",
  ],
  [ROLES.DATA]: [
    "SQL",
    "Pandas",
    "Data Visualization",
    "Statistics",
    "Experimentation",
    "Dashboards",
    "Data Cleaning",
  ],
};
