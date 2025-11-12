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
      "A Java-based CLI + GUI toolkit for advanced image processing: RGB split/combine, blur/sepia/sharpen filters, histogram generation, compression, color correction, masking and batch scripting. Includes both a command-line interface and a Swing-based GUI viewer.",
    repo: "https://github.com/Saran-Jagadeesan-Uma/Image-Manipulation-Toolkit",
    demo: null,
    tech: ["Java 11+", "CLI", "Swing GUI", "Image I/O", "Scripting"],
    year: 2022,
    imageThumb: "assets/projects/imageinator-thumb.jpg",
    image: "C:\Users\jusar\Desktop\Web Development\Portfolio\Saran-Portfolio\public\imageinator-full.jpg",

  },
  {
    id: "kambaz",
    role: ROLES.SOFTWARE,
    title: "Kambaz — React Web App",
    desc:
      "Modern React + TypeScript web app demonstrating component-driven architecture, routing, responsive layouts and testable UI patterns. Features modular pages, state management and a clean developer experience using Vite.",
    repo: "https://github.com/Saran-Jagadeesan-Uma/kambaz-react-web-app",
    demo: null,
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "React Router"],
    year: 2023,
    imageThumb: "Saran-Portfolio/assets/projects/kambaz-thumb.jpg",
    image: "Saran-Portfolio/assets/projects/kambaz.jpg",
  },
  {
    id: "internsearch",
    role: ROLES.SOFTWARE,
    title: "InternSearch — Full-Stack Internship Finder",
    desc:
      "Full-stack internship discovery platform with RESTful APIs, search and pagination, and a responsive frontend. Built to handle real-world data and provide efficient retrieval and filtering for listings.",
    repo: "https://github.com/Saran-Jagadeesan-Uma/internSearch",
    demo: null,
    tech: ["React", "Node.js", "Express", "MongoDB"],
    year: 2021,
    imageThumb: "Saran-Portfolio/assets/projects/internsearch-thumb.jpg",
    image: "Saran-Portfolio/assets/projects/internsearch.jpg",
  },
  {
    id: "portfolio",
    role: ROLES.SOFTWARE,
    title: "Saran Portfolio — Personal Developer Website",
    desc:
      "This website — built with React, Tailwind and Framer Motion. Provides role-based views, resume & profile modals, animated interactions, and a lightweight parallax layer for fluid feel. Deploys to GitHub Pages.",
    repo: "https://github.com/Saran-Jagadeesan-Uma/Saran-Portfolio",
    demo: "https://saran-jagadeesan-uma.github.io/Saran-Portfolio/",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vite", "GitHub Pages"],
    year: 2024,
    imageThumb: "Saran-Portfolio/assets/projects/portfolio-thumb.jpg",
    image: "Saran-Portfolio/assets/projects/portfolio.jpg",
  },

  /* ---------------- ML PROJECTS (Placeholder) ---------------- */
  {
    id: "ml-classifier",
    role: ROLES.ML,
    title: "ImageClassifier — CNN Training Pipeline",
    desc:
      "Trained and deployed convolutional neural networks (CNNs) for image classification. Includes data augmentation, model evaluation, and a REST inference service for lightweight deployment.",
    repo: "https://github.com/your-ml-repo",
    demo: null,
    tech: ["PyTorch", "Python", "Docker", "Flask"],
    year: 2023,
    imageThumb: "Saran-Portfolio/assets/projects/ml-classifier-thumb.jpg",
    image: "Saran-Portfolio/assets/projects/ml-classifier.jpg",
  },
  {
    id: "ml-monitor",
    role: ROLES.ML,
    title: "Model Monitoring & Drift Detection",
    desc:
      "Lightweight monitoring stack to detect data and model drift in production using metrics, simple alerts and dashboards for quick root-cause analysis.",
    repo: "https://github.com/your-ml-monitoring",
    demo: null,
    tech: ["Prometheus", "Python", "Pandas"],
    year: 2024,
    imageThumb: "Saran-Portfolio/assets/projects/ml-monitor-thumb.jpg",
    image: "Saran-Portfolio/assets/projects/ml-monitor.jpg",
  },

  /* ---------------- DATA PROJECTS (Placeholder) ---------------- */
  {
    id: "sales-insights",
    role: ROLES.DATA,
    title: "Sales Insights Dashboard",
    desc:
      "End-to-end ETL and interactive dashboards to track product performance and KPIs. Built with SQL-powered extracts and a visualization layer for business stakeholders.",
    repo: "https://github.com/your-data-repo",
    demo: null,
    tech: ["SQL", "Python", "Tableau"],
    year: 2022,
    imageThumb: "Saran-Portfolio/assets/projects/sales-insights-thumb.jpg",
    image: "Saran-Portfolio/assets/projects/sales-insights.jpg",
  },
  {
    id: "ab-analysis",
    role: ROLES.DATA,
    title: "A/B Experiment Analysis Pipeline",
    desc:
      "Automated data pipeline for A/B experiments, with statistical testing, reporting and dashboards that make experiment results reproducible and auditable.",
    repo: "https://github.com/your-ab-analysis",
    demo: null,
    tech: ["Python", "Pandas", "Statsmodels"],
    year: 2023,
    imageThumb: "Saran-Portfolio/assets/projects/ab-analysis-thumb.jpg",
    image: "Saran-Portfolio/assets/projects/ab-analysis.jpg",
  },
];

/* ---------------- SKILLS ---------------- */
export const SKILLS = {
  [ROLES.SOFTWARE]: [
    "Java",
    "Python",
    "Node.js",
    "React",
    "TypeScript",
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
