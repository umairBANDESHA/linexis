const projects = [
  {
    slug: "stemp21-erp",
    index: "01",
    type: "Full-Stack ERP Platform",
    title: "STEMP21 ERP",
    tagline:
      "A multi-tenant school ERP connecting academics, admissions, attendance, exams, finance, HR, and daily operations.",
    desc: "Built a complete school management platform around real operational workflows, with role-based access, tenant-isolated data, transactional business logic, REST APIs, and a web dashboard. The platform covers academic management, admissions, attendance, examinations, fees, finance, HR, timetables, homework, complaints, announcements, and more.",
    stack: ["Node.js", "Express", "PostgreSQL", "Prisma", "Flutter", "RBAC"],
    stats: [
      { num: "60+", label: "Database models" },
      { num: "250+", label: "API endpoints" },
      { num: "15+", label: "Business modules" },
      { num: "Multi-tenant", label: "Architecture" },
    ],
    featured: true,
    url: "https://etms360.org",
    live: true,
  },

  {
    slug: "stemp21-assessment",
    index: "02",
    type: "Mobile App + Web Platform",
    title: "STEMP21 Assessment Platform",
    tagline:
      "A school assessment platform managing data for 39K+ students across 250+ schools.",
    desc: "Built and maintained a cross-platform assessment system used across a large school network. The platform manages student assessments, academic-year transitions, teacher and class workflows, rankings, dashboards, and automated PDF reporting across student, class, teacher, and school levels.",
    stack: ["Flutter", "Firebase", "RBAC", "PDF Generation"],
    stats: [
      { num: "250+", label: "Schools" },
      { num: "39K+", label: "Students tracked" },
      { num: "1.3K+", label: "Staff users" },
      { num: "Multi-level", label: "Assessment & reporting" },
    ],
    featured: true,
    live: true,
    playStore: "https://play.google.com/store/apps/details?id=com.stamp.stemp",
  },

  {
    slug: "ai-study-guide",
    index: "03",
    type: "AI SaaS Platform",
    title: "AI Study Guide",
    tagline:
      "A SaaS platform that turns students’ own content into structured study material.",
    desc: "Built the product end to end, from the React frontend and Supabase backend to authentication, storage, subscription billing, and production deployment. Implemented Google OAuth and Paddle Billing with secure webhook handling through Supabase Edge Functions, including checkout recovery for users who authenticate during the payment flow.",
    stack: ["React", "Vite", "Supabase", "Paddle", "Deno"],
    stats: [
      { num: "SaaS", label: "Product architecture" },
      { num: "Google", label: "OAuth authentication" },
      { num: "Paddle", label: "Subscription billing" },
      { num: "Production", label: "Deployed product" },
    ],
    featured: true,
    live: true,
    url: "https://aistudy.guide",
  },
];

export default projects;
