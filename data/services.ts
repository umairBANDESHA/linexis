export interface Service {
  num: string
  name: string
  short: string
  icon: string
  desc: string
  tags: string[]
  // Unsplash image for the service card visual
  image: string
  includes: string[]
  examples: string
  timeline: string[]
  questions: Question[]
}

export type Question = {
  id: string
  label: string
  type: 'choice' | 'text'
  options?: string[]
  placeholder?: string
}

export const services: Service[] = [
  {
    num: '01',
    name: 'Mobile Applications',
    short: 'Native-quality apps for Android and iOS from a single codebase.',
    icon: 'M',
    // Phone/app UI — clean, tech
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    timeline: ['MVP in 3–6 weeks', 'Full product in 6–12 weeks', 'Complex systems — custom estimate'],
    questions: [
      {
        id: 'platform',
        label: 'Which platforms do you need?',
        type: 'choice',
        options: ['Android only', 'iOS only', 'Both Android and iOS', 'Not sure yet'],
      },
      {
        id: 'type',
        label: 'What kind of app is this?',
        type: 'choice',
        options: ['Consumer / public-facing app', 'Internal business tool', 'Multi-role management system', 'Something else'],
      },
      {
        id: 'backend',
        label: 'Do you have a backend already?',
        type: 'choice',
        options: ['Yes — existing API we need to connect to', 'No — need full backend too', 'Need Firebase / BaaS setup', 'Not sure'],
      },
      {
        id: 'offline',
        label: 'Does the app need to work offline?',
        type: 'choice',
        options: ['Yes — full offline support needed', 'Partial — some offline features', 'No — always connected', 'Not sure'],
      },
      {
        id: 'timeline',
        label: 'What is your timeline?',
        type: 'choice',
        options: ['Under 4 weeks (MVP)', '1–3 months', '3–6 months', 'Flexible'],
      },
      {
        id: 'description',
        label: 'Tell us about your app',
        type: 'text',
        placeholder: 'What does it do? Who uses it? Any specific features, integrations, or technical requirements?',
      },
    ],
  },
  {
    num: '02',
    name: 'Web Applications',
    short: 'Full-stack web platforms built to handle real business operations.',
    icon: 'W',
    // Code on monitor — web dev
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80&fit=crop',
    desc: 'We build full-stack web applications using React, Next.js and Node.js — from MVPs to complex multi-user platforms. Designed for real operations, not just demos.',
    tags: ['React', 'Next.js', 'Node.js', 'Full Stack'],
    includes: [
      'React / Next.js frontend',
      'Node.js / REST API backend',
      'Database design & integration',
      'Authentication & role management',
      'Responsive design',
      'Deployment (Vercel, VPS)',
      'Admin dashboards',
    ],
    examples: 'SaaS platforms, business dashboards, school management portals, e-commerce',
    timeline: ['MVP in 3–6 weeks', 'Full product in 6–14 weeks', 'Complex systems — custom estimate'],
    questions: [
      {
        id: 'type',
        label: 'What type of web application?',
        type: 'choice',
        options: ['Public-facing web platform', 'Internal dashboard / tool', 'Admin panel / back-office', 'SaaS product'],
      },
      {
        id: 'users',
        label: 'Who will use this platform?',
        type: 'choice',
        options: ['Single user type', 'Multiple roles (admin, staff, customer)', 'Public with no login', 'Complex multi-tenant system'],
      },
      {
        id: 'backend',
        label: 'Do you need a backend / API?',
        type: 'choice',
        options: ['Yes — full backend needed', 'I have an existing API', 'Frontend only', 'Not sure'],
      },
      {
        id: 'data',
        label: 'What kind of data are we working with?',
        type: 'choice',
        options: ['Forms and simple records', 'Files and documents', 'Real-time data', 'Complex relational data'],
      },
      {
        id: 'timeline',
        label: 'What is your timeline?',
        type: 'choice',
        options: ['Under 4 weeks (MVP)', '1–3 months', '3–6 months', 'Flexible'],
      },
      {
        id: 'description',
        label: 'Tell us about your platform',
        type: 'text',
        placeholder: 'What does it do? Who uses it? Key features, any existing design or codebase?',
      },
    ],
  },
  {
    num: '03',
    name: 'ERP & Business Systems',
    short: 'Custom management systems built around your organization.',
    icon: 'E',
    // Dashboard / analytics screen
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=815&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'We build custom ERP and management systems tailored to how your business actually works — not generic software you have to adapt to. Modules for HR, finance, inventory, attendance, and more.',
    tags: ['Custom ERP', 'Node.js', 'Flutter', '.NET'],
    includes: [
      'Custom module development',
      'HR, attendance & payroll',
      'Inventory & procurement',
      'Finance & invoicing',
      'Multi-branch / multi-role',
      'Reporting & analytics',
      'Migration from legacy systems',
    ],
    examples: 'School management (admission, timetable, challan), factory MIS, HR platforms, fleet management',
    timeline: ['Core modules in 6–10 weeks', 'Full ERP in 3–6 months'],
    questions: [
      {
        id: 'type',
        label: 'What type of system do you need?',
        type: 'choice',
        options: ['School / education management', 'HR & payroll system', 'Inventory & supply chain', 'Custom business management'],
      },
      {
        id: 'modules',
        label: 'Which modules are priority?',
        type: 'choice',
        options: ['Finance & invoicing', 'HR & attendance', 'Operations & inventory', 'Reporting & analytics'],
      },
      {
        id: 'existing',
        label: 'Do you have an existing system?',
        type: 'choice',
        options: ['No — starting fresh', 'Yes — migrating from Excel/manual', 'Yes — replacing old software', 'Extending existing system'],
      },
      {
        id: 'scale',
        label: 'What is the scale of your organization?',
        type: 'choice',
        options: ['1–20 employees / users', '20–100 employees / users', '100–500 employees / users', '500+ or multi-branch'],
      },
      {
        id: 'timeline',
        label: 'What is your timeline?',
        type: 'choice',
        options: ['Urgent — under 2 months', '2–4 months', '4–6 months', 'Phased rollout — flexible'],
      },
      {
        id: 'description',
        label: 'Describe your business and what needs to be managed',
        type: 'text',
        placeholder: 'What does your business do? What processes are manual right now? What pain points are you solving?',
      },
    ],
  },
  {
    num: '04',
    name: 'Cross-Platform & Migration',
    short: 'Move your product to a new platform without rebuilding from zero.',
    icon: 'X',
    // Multi-device / responsive screens — cross-platform feel
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80&fit=crop',
    desc: 'Already have a product on one platform and need it on another? We migrate apps and web systems with minimal downtime — from native to cross-platform, from web to mobile, or from old stacks to modern ones.',
    tags: ['Capacitor', 'PWA', 'Flutter Web', 'React Native'],
    includes: [
      'Native → Flutter / React Native migration',
      'Web → mobile (Capacitor / PWA)',
      'Mobile → web conversion',
      'Legacy stack → modern rewrite',
      'Offline-first conversion',
      'Feature parity audit',
      'Staged rollout support',
    ],
    examples: 'Flutter web from mobile app, legacy PHP → Next.js, native Android → Flutter',
    timeline: ['Assessment in 1 week', 'Migration in 4–12 weeks depending on scope'],
    questions: [
      {
        id: 'from',
        label: 'What are you migrating from?',
        type: 'choice',
        options: ['Native Android or iOS app', 'Old web application', 'Legacy system (PHP, jQuery, etc.)', 'Another cross-platform framework'],
      },
      {
        id: 'to',
        label: 'What do you want to migrate to?',
        type: 'choice',
        options: ['Flutter (mobile or web)', 'React / Next.js', 'React Native', 'Cross-platform from web (Capacitor / PWA)'],
      },
      {
        id: 'size',
        label: 'How large is the existing product?',
        type: 'choice',
        options: ['Small — under 10 screens', 'Medium — 10–30 screens', 'Large — 30+ screens / complex flows', 'Not sure — needs assessment'],
      },
      {
        id: 'data',
        label: 'Does data / backend need to change too?',
        type: 'choice',
        options: ['No — just the frontend / app', 'Yes — backend needs updating too', 'Full stack migration', 'Not sure'],
      },
      {
        id: 'timeline',
        label: 'What is your timeline?',
        type: 'choice',
        options: ['Urgent — under 1 month', '1–3 months', '3–6 months', 'Flexible'],
      },
      {
        id: 'description',
        label: 'Tell us about the product and what needs to move',
        type: 'text',
        placeholder: 'Current platform, current stack, what needs to be preserved, any specific concerns about the migration?',
      },
    ],
  },
  {
    num: '05',
    name: 'AI Integration',
    short: 'Practical AI built into your product — not demos, real tools.',
    icon: 'A',
    // AI / data visualization
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80&fit=crop',
    desc: 'We integrate AI capabilities into existing products or build AI-powered tools from scratch. RAG pipelines, semantic search, LLM-backed features — built for production, not proofs of concept.',
    tags: ['RAG', 'LLMs', 'Semantic Kernel', 'ChromaDB'],
    includes: [
      'RAG (Retrieval-Augmented Generation) pipelines',
      'Semantic / vector search',
      'LLM API integration (OpenAI, Gemini, Claude)',
      'ChromaDB / vector store setup',
      'AI-powered document processing',
      'Semantic Kernel orchestration',
      'Chat interfaces & AI assistants',
    ],
    examples: 'AI search over documents, chatbots for business data, automated report generation',
    timeline: ['POC in 1–2 weeks', 'Production feature in 3–8 weeks'],
    questions: [
      {
        id: 'type',
        label: 'What kind of AI feature do you need?',
        type: 'choice',
        options: ['AI search over documents / data', 'Chatbot or AI assistant', 'Automated content / report generation', 'Other AI-powered feature'],
      },
      {
        id: 'integration',
        label: 'Are you adding AI to an existing product?',
        type: 'choice',
        options: ['Yes — adding to existing system', 'No — building new AI-first product', 'Not sure yet'],
      },
      {
        id: 'data',
        label: 'What data will the AI work with?',
        type: 'choice',
        options: ['PDFs / documents', 'Structured business data (DB)', 'Real-time / live data', 'Mixed or not defined yet'],
      },
      {
        id: 'model',
        label: 'Do you have a preference for AI model?',
        type: 'choice',
        options: ['OpenAI (GPT-4)', 'Google Gemini', 'Anthropic Claude', 'No preference — recommend one'],
      },
      {
        id: 'timeline',
        label: 'What is your timeline?',
        type: 'choice',
        options: ['POC / demo in 2 weeks', '1–2 months for MVP', '2–4 months full feature', 'Flexible'],
      },
      {
        id: 'description',
        label: 'Describe the AI use case',
        type: 'text',
        placeholder: 'What problem are you solving with AI? What data is involved? What does success look like?',
      },
    ],
  },
  {
    num: '06',
    name: 'UI/UX Design',
    short: 'Interfaces that work for technical and non-technical users alike.',
    icon: 'D',
    // Design / Figma / creative workspace
    image: 'https://plus.unsplash.com/premium_photo-1661326248013-3107a4b2bd91?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlJTIwYXBwJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D',
    desc: 'We design interfaces in Figma and implement them as code. Every design decision is grounded in how real users interact with the product — not just what looks good in a mockup.',
    tags: ['UI Design', 'UX', 'Figma', 'Implementation'],
    includes: [
      'User flow & wireframing',
      'High-fidelity Figma designs',
      'Design system creation',
      'Mobile & responsive design',
      'Developer handoff',
      'Design-to-code implementation',
      'Iterative design with feedback',
    ],
    examples: 'App redesigns, product design from scratch, design systems, admin UI',
    timeline: ['Wireframes in 1–2 weeks', 'Full design in 2–5 weeks', 'Design + build — custom'],
    questions: [
      {
        id: 'scope',
        label: 'What platform needs designing?',
        type: 'choice',
        options: ['Mobile app (Android / iOS)', 'Web application', 'Both mobile and web', 'A specific screen or user flow'],
      },
      {
        id: 'status',
        label: 'Where are you starting from?',
        type: 'choice',
        options: ['Scratch — nothing exists yet', 'Redesigning an existing product', 'Adding new screens to an existing design', 'Have wireframes, need high-fidelity UI'],
      },
      {
        id: 'audience',
        label: 'Who are your users?',
        type: 'choice',
        options: ['Technical users (developers, analysts)', 'Non-technical business staff', 'General public / consumers', 'Mixed audience'],
      },
      {
        id: 'output',
        label: 'What output do you need?',
        type: 'choice',
        options: ['Figma designs only', 'Figma + implemented as code', 'Full design system', 'Not sure — open to recommendation'],
      },
      {
        id: 'timeline',
        label: 'What is your target timeline?',
        type: 'choice',
        options: ['Under 2 weeks', '2–4 weeks', '1–2 months', 'Flexible'],
      },
      {
        id: 'description',
        label: 'Describe what you need designed',
        type: 'text',
        placeholder: 'What is the product? Who uses it? Any specific screens or flows in mind? Any references or inspirations you like?',
      },
    ],
  },
]

export default services 
