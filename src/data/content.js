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
    short: "Building reliable, scalable backend & full-stack systems with strong engineering practices.",
    resume: "/resume-software.pdf",
    accent: "from-sky-600 to-indigo-600",
  },
  [ROLES.ML]: {
    id: ROLES.ML,
    label: "Machine Learning Engineer",
    short: "Engineering ML systems, model deployment, and ML infrastructure for production use.",
    resume: "/resume-ml.pdf",
    accent: "from-green-500 to-emerald-600",
  },
  [ROLES.DATA]: {
    id: ROLES.DATA,
    label: "Data Analyst / Scientist",
    short: "Turning data into insights: analysis, visualisation, and decision support.",
    resume: "/resume-data.pdf",
    accent: "from-amber-400 to-orange-500",
  },
};

// small sample projects per role — replace with your real projects and links
export const PROJECTS = [
  {
    id: "p1",
    role: ROLES.SOFTWARE,
    title: "Intern Search",
    desc: "Full-stack internship search app: optimized SQL, reliable APIs, pagination and caching.",
    repo: "https://github.com/Saran-Jagadeesan-Uma/internSearch",
    demo: null,
    tech: ["React", "Node.js", "MySQL"]
  },
  {
    id: "p2",
    role: ROLES.SOFTWARE,
    title: "Kambaz",
    desc: "React + TypeScript app with modular UI, unit tests and CI/CD.",
    repo: "https://github.com/Saran-Jagadeesan-Uma/kambaz-react-web-app",
    demo: null,
    tech: ["React", "TypeScript", "Netlify"]
  },
  {
    id: "p3",
    role: ROLES.ML,
    title: "ImageClassifier",
    desc: "Trained CNN models, built training pipeline, and deployed inference as REST service.",
    repo: "https://github.com/your-ml-repo",
    demo: null,
    tech: ["PyTorch", "Python", "Docker"]
  },
  {
    id: "p4",
    role: ROLES.ML,
    title: "ML Monitoring",
    desc: "Model drift detection & metrics infra using Prometheus and lightweight data pipelines.",
    repo: "https://github.com/your-ml-monitoring",
    demo: null,
    tech: ["Prometheus", "Python"]
  },
  {
    id: "p5",
    role: ROLES.DATA,
    title: "Sales Insights",
    desc: "Data ETL + interactive dashboards for product insights; SQL + visualization.",
    repo: "https://github.com/your-data-repo",
    demo: null,
    tech: ["SQL", "Python", "Tableau"]
  },
  {
    id: "p6",
    role: ROLES.DATA,
    title: "Experiment Analysis",
    desc: "A/B experiment pipeline, statistically rigorous analysis and reporting.",
    repo: "https://github.com/your-ab-analysis",
    demo: null,
    tech: ["Python", "Pandas", "Statsmodels"]
  }
];

export const SKILLS = {
  [ROLES.SOFTWARE]: [
    "Java",
    "Python",
    "Node.js",
    "REST APIs",
    "Distributed Systems",
    "Docker",
    "CI/CD",
    "SQL"
  ],
  [ROLES.ML]: [
    "Python",
    "PyTorch / TensorFlow",
    "Model Deployment",
    "Data Pipelines",
    "Feature Engineering",
    "MLOps",
    "Cloud (GCP/AWS)"
  ],
  [ROLES.DATA]: [
    "SQL",
    "Pandas",
    "Data Visualization",
    "Statistics",
    "Experimentation",
    "Dashboards",
    "Data Cleaning"
  ]
};
