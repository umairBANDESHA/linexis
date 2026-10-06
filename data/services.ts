export interface Service {
  num: string
  name: string
  short: string
  desc: string
  tags: string[]
  includes: string[]
  examples: string
  timeline: string
}

const services: Service[] = [
  {
    num: '01',
    name: 'Mobile Applications',
    short: 'Native-quality apps on Android and iOS from a single codebase.',
    desc: "We build production-grade mobile applications using Flutter and React Native. Whether it's a consumer app, a business tool, or a complex multi-role system — we handle everything from architecture to Play Store and App Store deployment.",
    tags: ['Flutter', 'React Native', 'Android', 'iOS'],
    includes: [
      'Cross-platform development (Android + iOS)',
      'Multi-role & RBAC systems',
      'Firebase / REST API integration',
      'Offline-first architecture',
      'Push notifications (FCM)',
      'Play Store & App Store deployment',
      'PDF generation & reports',
    ],
    examples: 'School management systems, business tools, tracking apps, reporting platforms',
    timeline: 'MVP in 3–6 weeks. Full product in 6–12 weeks.',
  },
  {
    num: '02',
    name: 'Web Applications',
    short: 'Full-stack web platforms built to handle real business operations.',
    desc: 'From dashboards and admin panels to complete web platforms — we build with React and Node.js, designing systems that are fast, scalable, and built around how your business actually works.',
    tags: ['React', 'Next.js', 'Node.js', 'Full Stack'],
    includes: [
      'React / Next.js frontend',
      'Node.js + Express backend',
      'REST API design & development',
      'Admin dashboards & control panels',
      'Authentication & role management',
      'Database design (SQL / NoSQL)',
      'Cloud deployment & hosting setup',
    ],
    examples: 'Business dashboards, SaaS platforms, internal tools, client portals',
    timeline: 'Dashboard or panel in 3–6 weeks. Full platform custom estimate.',
  },
  {
    num: '03',
    name: 'ERP & Business Systems',
    short: 'Custom management systems built around how your organization works.',
    desc: "Off-the-shelf ERP software forces your business to adapt to the tool. We build custom systems — attendance, payroll, fees, inventory, reporting — designed specifically for your workflows, your roles, your scale.",
    tags: ['Custom ERP', 'Node.js', 'Flutter', '.NET'],
    includes: [
      'Attendance & payroll management',
      'Fee & invoice tracking',
      'Inventory & stock management',
      'Multi-branch / multi-region support',
      'Role-based access (staff, admin, management)',
      'PDF reports & data exports',
      'Real-time dashboards',
    ],
    examples: 'Schools, hospitals, retail chains, manufacturing units, logistics companies',
    timeline: 'Scope-dependent. Typically 8–16 weeks for full deployment.',
  },
  {
    num: '04',
    name: 'Cross-Platform & Migration',
    short: 'Take your existing product to a new platform without rebuilding from scratch.',
    desc: "Already have a web app and need it on mobile? Or a mobile app that needs a web version? We handle full platform migrations — including turning websites into installable Android or iOS apps — with minimal disruption to your existing users.",
    tags: ['Capacitor', 'PWA', 'Flutter Web', 'React Native'],
    includes: [
      'Website → Android APK / iOS app',
      'Mobile app → web platform',
      'Progressive Web App (PWA) setup',
      'Offline-first conversion',
      'Capacitor integration',
      'Same codebase, multiple platforms',
      'Performance optimization post-migration',
    ],
    examples: 'Any business that needs their digital product on a new platform',
    timeline: 'Simple migration in 2–4 weeks. Complex systems custom estimate.',
  },
  {
    num: '05',
    name: 'AI Integration',
    short: 'Practical AI features built into your product — not demos, real tools.',
    desc: 'We integrate AI where it creates genuine value: intelligent search, document processing, automated workflows, and custom assistants. Every integration is built around a real use case, not added for the sake of it.',
    tags: ['RAG', 'LLMs', 'Semantic Kernel', 'ChromaDB'],
    includes: [
      'RAG pipelines (ChromaDB, Semantic Kernel)',
      'Custom chatbots & AI assistants',
      'Document processing & extraction',
      'AI-powered search & recommendations',
      'LLM API integration (OpenAI, Anthropic)',
      'Vector database setup & management',
      'MCP server integration',
    ],
    examples: 'Internal knowledge bases, smart search, document Q&A, workflow automation',
    timeline: 'Feature integration in 2–4 weeks. AI-native product custom estimate.',
  },
  {
    num: '06',
    name: 'UI/UX Design',
    short: 'Interfaces designed for the people who actually use them.',
    desc: "We design interfaces that work for both technical and non-technical users — clean, intuitive, and built with real use cases in mind. No overcomplicated flows, no design for design's sake. Delivered as working code, not just mockups.",
    tags: ['UI Design', 'UX', 'Figma', 'Implementation'],
    includes: [
      'User flow mapping & wireframes',
      'High-fidelity UI design (Figma)',
      'Mobile & web design systems',
      'Designed for non-technical users',
      'Implementation-ready handoff',
      'Design + development combined',
      'Accessibility considerations',
    ],
    examples: 'Any product that needs a clean, usable interface',
    timeline: 'Design phase typically 1–3 weeks depending on scope.',
  },
]

export default services
