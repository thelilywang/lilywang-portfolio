import type {
  PersonalInfo,
  AboutData,
  ExperienceItem,
  Project,
  SkillsData,
  Highlight,
  SideProject,
} from '@/types/resume';

export const personalInfo: PersonalInfo = {
  name: 'Lily Wang',
  title: 'Software Product Manager',
  intro: 'Product Manager with 5+ years building B2B/B2C SaaS and mobile products, specializing in AI and machine learning–powered, user-centered solutions that drive product impact and operational efficiency.',
  email: 'yuting.lily.wang@gmail.com',
  phone: '',
  location: 'Taipei, Taiwan',
  photo: '/profile-photo.jpg',
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/lily-yuting-wang',
    github: 'https://github.com/thelilywang',
    medium: 'https://1zhi-lily.medium.com',
  },
};

export const aboutData: AboutData = {
  bio: [
    'Hi, I\'m Lily — a Product Manager with 5+ years of experience building B2B/B2C SaaS and mobile products, specializing in AI and machine learning–powered, user-centered solutions.',
    'With a Computer Science background and hands-on Android development and QA experience, I bridge business and engineering teams effectively. I\'ve led end-to-end delivery across enterprise SaaS and consumer apps, including launching an AI Chatbot and internal AI Agent at 104 Corporation.',
    'Passionate about data-driven product decisions and meaningful user experiences. Skilled at identifying root problems, integrating cross-functional resources, and delivering measurable impact.',
  ],
  education: [
    {
      degree: 'B.S. - Computer Science and Engineering',
      school: 'Yuan Ze University',
      period: '',
    },
  ],
  certifications: [
    {
      name: 'AI Product Management Specialization',
      org: 'Duke University (Coursera)',
      year: '',
    },
    {
      name: 'Microsoft Certified: AI Product Manager',
      org: 'Microsoft',
      year: '',
    },
    {
      name: 'Google AI Essentials',
      org: 'Google',
      year: '',
    },
    {
      name: 'iPAS+ AI Application Planner',
      org: 'iPAS',
      year: '',
    },
    {
      name: 'Google Cloud Certifications (×6)',
      org: 'Google Cloud',
      year: '',
    },
    {
      name: 'Google Analytics Certification',
      org: 'Google',
      year: '',
    },
    {
      name: 'Microsoft Certificate DAT208x - Introduction to Python for Data Science',
      org: 'Microsoft',
      year: '',
    },
    {
      name: 'Microsoft Certificate DAT263x - Introduction to Artificial Intelligence (AI)',
      org: 'Microsoft',
      year: '',
    },
    {
      name: 'TOEIC 775',
      org: 'ETS',
      year: '',
    },
  ],
  interests: [
    { name: 'Travel', icon: '✈️' },
    { name: 'Hiking', icon: '🏔️' },
    { name: 'Yoga', icon: '🧘' },
    { name: 'Model Assembly', icon: '⛏️' },
    { name: 'Watercolor Sketching', icon: '🎨' },
    { name: 'Movies & Media', icon: '🎬' },
  ],
};

export const experienceData: ExperienceItem[] = [
  {
    period: 'Apr 2023 – Jan 2026',
    company: '104 Corporation',
    position: 'Product Manager',
    description: 'Led end-to-end delivery for a B2B/B2C SaaS platform (99K+ MAU, 105K+ downloads), managing both enterprise and job-seeker products.',
    achievements: [
      'Increased Activation Rate from 18.6% to 35.8% (+92%)',
      'Increased Retention Rate from 12.4% to 21.4% (+73%)',
      'Delivered 56 app releases and 50+ SaaS features',
      'Reduced iOS crash rate from 0.17% to 0.05%; improved ratings across all platforms',
      'Launched AI Chatbot, review reply features, and internal AI Agent',
      'Led B2B subscription SaaS feature development to improve enterprise user retention and satisfaction',
    ],
  },
  {
    period: 'Jan 2022 – Mar 2023',
    company: '17Life_康太數位整合股份有限公司',
    position: 'Product Manager',
    description: 'Responsible for FamilyMart APP digital projects, including MAS security testing, app hardening protection, and FamilyPay integration — covering front-end, back-end, and admin digital projects.',
    achievements: [
      'Planned and launched digital projects with a focus on user experience and development feasibility',
      'Identified and analyzed business requirements, gathering internal and external resources to find solutions',
      'Cross-functional communication and coordination, tracking project schedules and managing risks',
      'Facilitated cross-business unit meetings with confidence and fluency',
      "FamilyMart APP, one of Taiwan's largest convenience store, has more than 4,000 brick-and-mortar stores located in Taiwan, with over 14 million users of the app.",
    ],
  },
  {
    period: 'Nov 2020 – Dec 2021',
    company: 'CMoney 全曜財經資訊股份有限公司',
    position: 'Product Manager',
    description: 'Managed 3 fintech 2C software products delivering value through professional financial content, including Money Magazine, Investment School, and Finance Daily News.',
    achievements: [
      'Translated product strategy and user scenarios into Product Requirements Documents (PRD)',
      'Analyzed industry trends, market landscape, and competitive products',
      'Created prototypes using Figma',
      'Responsible for consumer-facing products (2C, Buyer-Side)',
      'Designed UI flows and wireframes',
      'Applied UI/UX user experience design thinking',
      'Conducted product data analysis using Flurry, Firebase, and Google Analytics',
      'Defined key product metrics, proposed optimization strategies, and iterative development roadmaps',
      'Designed A/B tests and MVP experiments to validate product hypotheses and optimize outcomes',
      'Used Tableau for data visualization to analyze product KPIs, operational data, and ad performance',
    ],
  },
  {
    period: 'Jun 2020 – Jun 2021',
    company: 'CMoney 全曜財經資訊股份有限公司',
    position: 'Android Developer / Quality Engineer',
    description: 'Developed and tested Android applications, and performed quality control.',
    achievements: [
      'Planned and implemented software architecture design; proficient in MVC and MVVM patterns',
      'Familiar with Android networking; capable of server-side API integration',
      'Experience with Gson, OkHttp3, WebSocket, and Long-Polling network integrations',
      'Provided UI/UX development suggestions to optimize product experience',
      'Proficient in Git with experience in multi-contributor collaborative environments',
      'Wrote and designed test cases for various user story scenarios',
      'Researched and built automated UI tests using Python and Appium',
      'Reported issues and tracked follow-ups; assisted engineers in debugging',
      'Managed product quality by implementing software regression testing before each sprint release',
    ],
  },
  {
    period: 'Sep 2019 – Mar 2020',
    company: '功學社教育用品股份有限公司',
    position: 'BI Engineer',
    description: 'Daily operations and maintenance of the SAP Business Intelligence system.',
    achievements: [
      'Conducted cross-national communication in English (Germany / USA)',
      'Collected and analyzed cross-departmental business data requirements',
      'Provided BI consulting services and resolved system issues for end users',
      'Assisted with basic issue resolution for SAP MM (logistics) and SD (finance) modules',
      'Authored BI system operation manuals',
    ],
  },
  {
    period: 'Jul 2018 – Feb 2019',
    company: 'Industrial Technology Research Institute (ITRI)',
    position: 'Intern – Software Engineer',
    description: 'Research on AI applications, deep learning, and Point Cloud / LiDAR applications for autonomous vehicles.',
    achievements: [
      'Industry-academia collaboration project on ASUS intelligent service robot Zenbo development',
      'Participated in Kanban / Scrum agile development workflows',
      'Tested RADAR applications for vehicle detection and data analysis',
      'Researched and implemented 3D Printing',
      'Operated Git, GitLab, and SourceTree',
    ],
  },
];

export const projectsData: Project[] = [
  {
    title: '104 Corporation – B2B/B2C SaaS Platform',
    role: 'Product Manager | 2023/4 - 2026/1',
    description: 'Led product strategy and delivery for 104\'s B2B enterprise and B2C job-seeker SaaS platform (99K+ MAU, 105K+ downloads). Launched AI Chatbot, review reply features, and an internal AI Agent, significantly improving platform activation and retention.',
    image: '/104-platform.jpg',
    imagePlaceholder: '104 Platform Screenshot',
    tech: ['AI Chatbot', 'LLM', 'B2B SaaS', 'B2C APP', 'Firebase', 'A/B Testing', 'Figma'],
    results: [
      { label: 'Activation Rate', value: '+92%' },
      { label: 'Retention Rate', value: '+73%' },
      { label: 'App Releases', value: '56' },
    ],
  },
  {
    title: 'FamilyMart APP',
    role: 'Software Product / Project Manager | 2022/1 - 2023/3',
    description: 'FamilyMart APP, one of Taiwan\'s largest convenience store chains, has over 4,000 brick-and-mortar stores and more than 14 million app users. Responsible for digital projects including MAS security testing, app hardening protection, and FamilyPay integration.',
    image: '/familymart-app.jpg',
    imagePlaceholder: 'FamilyMart APP Screenshot',
    tech: ['Cross-functional Communication', 'Project Schedule Management', 'Risk Management', 'Requirements Analysis'],
    results: [
      { label: 'Physical Stores', value: '4,000+' },
      { label: 'App Users', value: '14M+' },
      { label: 'Features Delivered', value: '38' },
    ],
  },
  {
    title: 'Money Magazine – Personal Finance Reading APP',
    role: 'Product Manager | 2021/8 - 2021/12',
    description: 'A content platform focused on sound financial concepts and long-term financial planning. Taiwan\'s first financial media company to successfully transform into a Fintech company.',
    image: '/money-app.jpg',
    imagePlaceholder: 'Money Magazine APP Screenshot',
    tech: ['Figma', 'Flurry', 'Firebase', 'Google Analytics', 'Tableau'],
    results: [
      { label: 'Weekly Active Growth', value: '+31.43%' },
      { label: '7-Day Retention Growth', value: '+2.97%' },
      { label: 'User Satisfaction', value: '4.6/5' },
    ],
  },
  {
    title: 'Investment School – Stock Market Learning APP',
    role: 'Product Manager | 2021/8 - 2021/12',
    description: 'Provides beginner investors with comprehensive, easy-to-understand, and free investment knowledge. A dedicated learning platform for all levels of investors to learn financial literacy simply and effectively.',
    image: '/investment-school-app.jpg',
    imagePlaceholder: 'Investment School APP Screenshot',
    tech: ['A/B Testing', 'MVP Design', 'Product Optimization', 'Data Analysis'],
    results: [
      { label: 'Gamified Learning', value: 'Launched' },
      { label: 'User Retention', value: '+25%' },
      { label: 'Course Completion Rate', value: '+40%' },
    ],
  },
  {
    title: 'Finance Daily News – Daily Financial News APP',
    role: 'Product Manager | 2021/8 - 2021/12',
    description: 'A knowledge-driven content product designed for the fast-paced modern lifestyle. Users spend just 5 minutes a day to stay on top of financial news. Provides daily exclusive stock market analysis to help everyone make better life investments.',
    image: '/finance-news-app.jpg',
    imagePlaceholder: 'Finance Daily News APP Screenshot',
    tech: ['UI/UX Design', 'User Flow Planning', 'Content Strategy'],
    results: [
      { label: 'Daily Read Rate', value: '+45%' },
      { label: 'Share Rate', value: '+35%' },
      { label: 'User Engagement', value: '8 min/day' },
    ],
  },
];

export const skillsData: SkillsData = {
  productSkills: [
    { name: 'Product Strategy Planning', level: 95 },
    { name: 'Requirements Gathering & Analysis', level: 90 },
    { name: 'User Research & Interviews', level: 85 },
    { name: 'UI/UX Design Thinking', level: 90 },
    { name: 'Product Roadmap Planning', level: 85 },
    { name: 'AI Product Planning (LLM / Generative AI)', level: 85 },
    { name: 'B2B/B2C SaaS Product Management', level: 90 },
  ],
  methodologies: [
    { name: 'Agile Development (Scrum/Kanban)', level: 95 },
    { name: 'Project Communication / Integration Management', level: 90 },
    { name: 'Project Schedule & Progress Management', level: 85 },
    { name: 'Cost / Quality / Risk Management', level: 80 },
    { name: 'A/B Testing', level: 85 },
    { name: 'MVP Design', level: 85 },
  ],
  technicalSkills: [
    { name: 'Data Analytics (Firebase, Google Analytics)', level: 90 },
    { name: 'Data Visualization (Tableau, Power BI)', level: 85 },
    { name: 'Prototyping (Figma, Axure RP)', level: 85 },
    { name: 'Prompt Engineering / LLM Applications', level: 80 },
    { name: 'Programming (Python, SQL, Kotlin, Java)', level: 80 },
    { name: 'Project Management Tools (Jira, Trello, Azure DevOps)', level: 90 },
  ],
  softSkills: [
    'Teamwork', 'Cross-functional Communication', 'Presentation', 'Problem Solving',
    'Logical Thinking', 'Design Thinking', 'Process Optimization', 'Coordination',
    'Critical Thinking', 'Creative Thinking', 'Self-motivation', 'Continuous Learning',
  ],
  languages: [
    { name: 'Chinese', level: 'Native' },
    { name: 'English', level: 'Professional Working Proficiency' },
  ],
};

export const highlightsData: Highlight[] = [
  {
    title: '5+ Years PM Experience',
    description: 'End-to-end product lifecycle experience across B2B/B2C SaaS and mobile apps — from 0 to 1 and beyond. Delivered 50+ features and 56 app releases.',
  },
  {
    title: 'AI Product Leadership',
    description: 'Led the planning and launch of an AI Chatbot, review reply features, and an internal AI Agent. Hands-on experience with Generative AI, LLMs, and Prompt Engineering.',
  },
  {
    title: 'Measurable Impact',
    description: 'At 104 Corporation: Activation Rate 18.6% → 35.8% (+92%), Retention Rate 12.4% → 21.4% (+73%), iOS crash rate reduced from 0.17% to 0.05%.',
  },
  {
    title: 'Large-Scale Platform Experience',
    description: 'Managed a 99K+ MAU, 105K+ download SaaS platform. Previously responsible for digital projects on FamilyMart APP with 14M+ users across Taiwan.',
  },
  {
    title: 'Data-Driven Decision Making',
    description: 'Proficient in Firebase, Google Analytics, Tableau, and Power BI. Designs A/B tests and MVPs to validate hypotheses and continuously optimize product performance.',
  },
  {
    title: 'Engineering Background Advantage',
    description: 'B.S. in Computer Science with hands-on Android development and automated testing (Python/Appium) experience — enabling fluent collaboration with engineering teams.',
  },
];

export const contactNote = 'This is a demo form.';

export const sideProjectsData: SideProject[] = [
  {
    title: 'Coming Soon',
    description: 'Side project details will be added soon. Stay tuned!',
    href: '',
  },
];
