const projects = [
  {
    slug: 'stemp21',
    index: '01',
    type: 'Mobile App + Web Platform',
    title: 'Stemp21 Education Platform',
    tagline: 'A nationwide school management system built for 189+ schools, 749 teachers, and 20,700+ students.',
    desc: 'Stemp21 needed a unified system to replace scattered manual processes across their nationwide STEM education network. We built a cross-platform app with role-based access for 4 user types — from student assessment tracking and branded PDF reports to a complete invoicing and payment system for regional book sales.',
    stack: ['Flutter', 'Firebase', 'RBAC', 'PDF Generation'],
    stats: [
      { num: '189+', label: 'Schools nationwide' },
      { num: '20.7K', label: 'Students tracked' },
      { num: '749+', label: 'Teachers on platform' },
      { num: '4', label: 'User roles in one system' },
    ],
    featured: true,
    live: true,
    playStore: 'https://play.google.com/store/apps/details?id=com.stamp.stemp'
  },
  {
    slug: 'stemp21-web',
    index: '02',
    type: 'Web Platform',
    title: 'Stemp21 Web',
    tagline: 'The full Stemp21 platform rebuilt for browser environments.',
    desc: 'A complete migration of the Flutter mobile codebase to Flutter Web — same RBAC architecture, same feature set, accessible from any browser without app installation.',
    stack: ['Flutter Web', 'Dart', 'Netlify'],
    featured: false,
    live: true,
    url: 'https://stempweb.netlify.app'
  },
  {
    slug: 'offline-learning',
    index: '03',
    type: 'Offline WebApp + Android APK',
    title: 'Offline Learning System',
    tagline: 'A complete curriculum platform that works without internet — packaged as an Android APK.',
    desc: 'An offline-first education platform handling 3GB+ of curriculum data across 8 grade levels. Subjects, chapters, lessons, quizzes, per-user progress tracking, and auto-generated certificates. Packaged via Capacitor for Chromebook deployment.',
    stack: ['React', 'Node.js', 'Capacitor', 'Offline-first'],
    featured: false,
    live: false,
    inProgress: true
  }
]

export default projects
