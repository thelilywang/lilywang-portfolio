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
  intro: 'Optimistic · Logical Thinking · Design Thinking · Teamwork · Communication. 2+ years of 2C software product experience across fintech, content, and e-commerce. Specialized in product strategy and business data analysis, with an engineering background and hands-on development experience. Passionate about building user-centered products with strong UI/UX sensibility.',
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
    'Hi, I\'m Lily — a Software Product Manager passionate about user experience and product innovation. I have 2C software product experience across fintech, content, and e-commerce, including FamilyMart APP, Money Magazine, Investment School, and Finance Daily News.',
    'With an engineering background and hands-on app development experience, I bridge the gap between business and engineering teams. I bring Scrum agile development experience and an open-minded, empathetic approach — skilled in cross-functional communication, logical analysis, and motivating teams.',
    'Passionate for creating meaningful experiences via innovative digital solutions. Good at excavating issues, integrating resources to solve problems.',
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
      name: 'Google Analytics Certification',
      org: 'Google',
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
    period: 'Apr 2023 – Present',
    company: '104 Job Bank',
    position: 'Product Manager',
    description: 'Product Manager responsible for product strategy planning and development.',
    achievements: [],
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
    title: 'FamilyMart APP',
    role: 'Software Product / Project Manager | 2022/1 - 2023/3',
    description: 'FamilyMart APP, one of Taiwan\'s largest convenience store chains, has over 4,000 brick-and-mortar stores and more than 14 million app users. Responsible for digital projects including MAS security testing, app hardening protection, and FamilyPay integration.',
    image: '/familymart-app.jpg',
    imagePlaceholder: 'FamilyMart APP Screenshot',
    tech: ['Cross-functional Communication', 'Project Schedule Management', 'Risk Management', 'Requirements Analysis'],
    results: [
      { label: 'Physical Stores', value: '4,000+' },
      { label: 'App Users', value: '14M+' },
      { label: 'Project Completion', value: '100%' },
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
    { name: 'Programming (Kotlin, Python, Java)', level: 80 },
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
    title: 'Software Product Experience',
    description: '2C software product experience across fintech, content, and e-commerce — including FamilyMart APP, Money Magazine, Investment School, and Finance Daily News.',
  },
  {
    title: 'Product Strategy & Data Analysis',
    description: 'Ability to apply analytical thinking and organizational logic to translate product strategy into PRDs, alongside in-depth data analysis and business decision-making.',
  },
  {
    title: 'Agile Project Management',
    description: 'Hands-on experience introducing Scrum agile workflows from scratch, allocating project resources, and managing development priority queues.',
  },
  {
    title: 'User-Centered Design Thinking',
    description: 'UI/UX design thinking rooted in user needs, enabling the design of products that meet real market demands.',
  },
  {
    title: 'Data-Driven Decision Making',
    description: 'Skilled at leveraging data to drive decisions — evaluating product performance through key metrics and continuously optimizing.',
  },
  {
    title: 'Engineering Background Advantage',
    description: 'Engineering background with app development experience and internet domain knowledge — enabling effective communication with engineers and smoother project execution.',
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
