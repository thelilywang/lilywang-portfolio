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
  title: '產品經理',
  intro: '5年以上 B2B/B2C SaaS 及行動應用產品管理經驗，專注於 AI 驅動、以用戶為中心的解決方案。具工程背景，擅長跨部門溝通協調、數據驅動決策，並有完整的從 0 到 1 產品開發及上線經驗。',
  email: 'yuting.lily.wang@gmail.com',
  phone: '',
  location: '台北市, 台灣',
  photo: '/profile-photo.jpg',
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/lily-yuting-wang',
    github: 'https://github.com/thelilywang',
    medium: 'https://1zhi-lily.medium.com',
  },
};

export const aboutData: AboutData = {
  bio: [
    '您好！我是Lily，擁有 5 年以上 B2B/B2C SaaS 及行動應用產品管理經驗，專注於 AI 與機器學習驅動、以用戶為中心的產品解決方案。',
    '具資訊工程背景，有 Android 開發與軟體測試實務經驗，與工程師溝通有共通語言，能有效推動專案執行。擁有 Scrum 敏捷開發豐富實踐，主導過 B2B/B2C 平台的完整產品生命週期，並成功交付多項 AI 功能（包含 AI Chatbot 與內部 AI Agent）。',
    '善於整合跨部門資源解決問題，以數據驅動決策，追求有意義的產品體驗與商業影響力。',
  ],
  education: [
    {
      degree: '資訊工程學系 B.S. - Computer Science and Engineering',
      school: '元智大學 Yuan Ze University',
      period: '',
    },
  ],
  certifications: [
    {
      name: 'iPAS AI Application Planner（AI應用規劃師）',
      org: 'iPAS',
      year: '2026-06',
    },
    {
      name: 'Enterprise Product Management Fundamentals',
      org: 'Microsoft',
      year: '2026-04',
    },
    {
      name: 'AI for Data Analysis',
      org: 'Google',
      year: '2026-03',
      highlights: ['Data Analysis'],
    },
    {
      name: 'Machine Learning Foundations for Product Managers',
      org: 'Duke University (Coursera)',
      year: '2026-02',
    },
    {
      name: 'Google AI Essentials',
      org: 'Google',
      year: '2026-01',
    },
    {
      name: 'TOEIC 775',
      org: 'ETS',
      year: '2025-08',
    },
    {
      name: 'Google Cloud Certification',
      org: 'Google Cloud',
      year: '2024-08',
      highlights: ['Google Cloud'],
    },
    {
      name: 'Google Cloud Computing Foundations: Data, ML, and AI in Google Cloud',
      org: 'Google Cloud',
      year: '2024-07',
    },
    {
      name: 'Google Cloud Computing Foundations: Infrastructure in Google Cloud',
      org: 'Google Cloud',
      year: '2024-07',
    },
    {
      name: 'Generative AI Explorer - Agent Platform',
      org: 'Google Cloud',
      year: '2024-07',
    },
    {
      name: 'Prompt Design in Agent Platform',
      org: 'Google Cloud',
      year: '2024-07',
    },
    {
      name: 'Google Analytics Certification',
      org: 'Google',
      year: '2023-04',
    },
    {
      name: 'DAT208x - Introduction to Python for Data Science',
      org: 'Microsoft',
      year: '2019-08',
    },
    {
      name: 'DAT263x - Introduction to Artificial Intelligence (AI)',
      org: 'Microsoft',
      year: '2019-08',
      highlights: ['Artificial Intelligence'],
    },
  ],
  interests: [
    { name: '旅行', icon: '✈️' },
    { name: '爬山', icon: '🏔️' },
    { name: '瑜珈', icon: '🧘' },
    { name: '模型組裝', icon: '⛏️' },
    { name: '水彩速寫', icon: '🎨' },
    { name: '影音欣賞', icon: '🎬' },
  ],
};

export const experienceData: ExperienceItem[] = [
  {
    period: '2023年4月 - 2026年1月',
    company: '104人力銀行',
    position: 'Product Manager',
    description: '主導 B2B/B2C SaaS 平台端到端產品交付，涵蓋企業版與求職者 APP，月活躍用戶 99K+，APP 下載量 105K+。',
    achievements: [
      '提升 Activation Rate 從 18.6% 至 35.8%（+92%）',
      '提升 Retention Rate 從 12.4% 至 21.4%（+73%）',
      '主導交付 56 個 APP 版本及 50+ 項 SaaS 功能',
      '降低 iOS Crash Rate 從 0.17% 至 0.05%，全平台評分顯著提升',
      '規劃並上線 AI Chatbot、評價回覆功能及內部 AI Agent',
      '帶領 B2B 訂閱制 SaaS 功能開發，提升企業用戶留存與滿意度',
    ],
  },
  {
    period: '2022年1月 - 2023年3月',
    company: '17Life_康太數位整合股份有限公司',
    position: 'Product Manager',
    description: '負責全家APP數位專案，涵蓋MAS資安檢測/ APP加殼防護/ 全盈支付等，前後端APP/後台數位專案。',
    achievements: [
      '考量使用者體驗，與產品可行性開發，規劃上線數位專案',
      '洞悉、分析業務應用需求，集合資源找尋內外部解決方案',
      '跨部門溝通協調，專案時程進度追蹤、風險控管',
      '能以穩健台風與流暢口條主持跨業務單位會議',
      "FamilyMart APP, one of Taiwan's largest convenience store, has more than 4,000 brick-and-mortar stores located in Taiwan, with over 14 million users of the app.",
    ],
  },
  {
    period: '2020年11月 - 2021年12月',
    company: 'CMoney 全曜財經資訊股份有限公司',
    position: 'Product Manager',
    description: '負責3個財經領域透過專業知識內容為產品價值的2C軟體專案，涵蓋 "Money錢雜誌"、"投資小學堂"及"每日財經頭條"。',
    achievements: [
      '轉化產品策略、設計產品使用情境為產品需求文件PRD',
      '分析產業趨勢、市場和競品',
      '使用Figma製作原型(Prototyping)',
      '負責過用戶端產品(2C, Buyer-Side)',
      '使用者流程介面UI Flow、Wireframe繪製',
      '具UI/UX使用者體驗設計思維',
      '使用Flurry/ Firebase/ GA等分析工具進行產品數據分析',
      '定義產品關鍵成效衡量指標，提出產品優化方案及迭代開發方向',
      '設計A/B testing及最小可行性方案MVP，驗證產品的假設，分析、優化實驗的成效',
      '使用Tableau資料視覺化工具，分析產品關鍵指標、營運數據、廣告成效等',
    ],
  },
  {
    period: '2020年6月 - 2021年6月',
    company: 'CMoney 全曜財經資訊股份有限公司',
    position: 'Android Developer /Quality Engineer',
    description: '開發與測試Android應用程式，並進行品質控管',
    achievements: [
      '規劃執行軟體架構設計，熟悉 MVC、MVVM 架構',
      '熟悉 Android 網路通信、能夠進行 Server端 API串接',
      '具 Gson、OkHttp3、WebSocket、Long-Polling 網路串接能力',
      '能提供優化專案產品的 UI/UX 開發應用建議',
      '擁有Git 操作能力，並具備多人協作環境下的使用經驗',
      '撰寫並設計各使用者情境User Story的測試案例(Test Case)',
      '研究並建構自動化UI測試，使用Python撰寫Appium工具測試腳本',
      '回報Issue與後續追踨，協助研發工程師Debug',
      '控管產品品質，導入每期開發Sprint週期上線前的軟體回歸測試',
    ],
  },
  {
    period: '2018年7月 - 2019年2月',
    company: '財團法人工業技術研究院',
    position: '實習 - 軟體工程師',
    description: 'AI應用、深度學習、點雲 (Point Cloud) / 光學雷達 (LiDAR) 應用於自駕車的論文研究',
    achievements: [
      '基於ASUS智慧服務型機器人Zenbo程式開發的產學合作案',
      '參與Kanban / Scrum敏捷開發流程',
      '實測RADAR應用於偵測來車 / 數據分析',
      '研究實作3D列印(3D Printing)',
      '操作Git、GitLab、SourceTree',
    ],
  },
];

export const projectsData: Project[] = [
  {
    title: '104人力銀行 B2B/B2C SaaS 平台',
    role: 'Product Manager | 2023/4 - 2026/1',
    description: '主導 104人力銀行 B2B 企業端與 B2C 求職者端 SaaS 平台端到端產品交付。月活躍用戶 99K+，APP 下載量 105K+，規劃並上線 AI Chatbot、一鍵 AI 評價回覆、APP 內翻譯及內部 AI Agent，大幅提升平台活躍度、留存率與 APP 評分。',
    image: '/104-platform.jpg',
    imagePlaceholder: '104人力銀行平台截圖',
    tech: ['AI Chatbot', 'LLM', 'B2B SaaS', 'B2C APP', 'Firebase', 'A/B Testing', 'Figma'],
    results: [
      { label: 'Activation Rate', value: '+92%' },
      { label: 'Retention Rate', value: '+73%' },
      { label: 'App 評分', value: '2.52 → 4.9' },
    ],
  },
  {
    title: '全家APP (FamilyMart APP)',
    role: 'Software Product / Project Manager | 2022/1 - 2023/3',
    description: '台灣最大便利商店之一的全家APP，擁有超過4000家實體門市和超過1400萬的APP用戶。負責MAS資安檢測、APP加殼防護、全盈支付等數位專案。',
    image: '/familymart-app.jpg',
    imagePlaceholder: '全家APP截圖',
    tech: ['跨部門溝通', '專案進度控管', '風險管理', '需求分析'],
    results: [
      { label: '實體門市數量', value: '4000+' },
      { label: 'APP用戶數', value: '1400萬+' },
      { label: '負責專案數', value: '38 項' },
    ],
  },
  {
    title: 'EVERRICH昇恆昌免稅購物 APP',
    role: 'Software Product / Project Manager | 2022/1 - 2023/3',
    description: '昇恆昌為台灣最大機場免稅零售商，門市遍布桃園、松山、台中、高雄四大國際機場。主導 RICHCLUB 會員 APP 端到端交付，功能涵蓋徽章任務制、QR Code 機場取貨與航班提醒、Rich Pay 支付整合、點數兌換住宿餐飲及商品、專屬電子優惠券。上線後 App Store 評分 4.8★。',
    image: '/everrich-app.jpg',
    imagePlaceholder: 'EVERRICH昇恆昌APP截圖',
    tech: ['需求分析', '敏捷開發 / Scrum', '跨部門溝通', 'Rich Pay 支付整合', 'MAS 資安合規'],
    results: [
      { label: 'App Store 評分', value: '4.8★' },
      { label: '機場據點', value: '4 座' },
      { label: '負責專案數', value: '38 項' },
    ],
  },
  {
    title: 'Money錢雜誌 - 理財知識隨身讀APP',
    role: 'Product Manager | 2021/8 - 2021/12',
    description: '內容以提供正確的理財觀念與長期的理財規劃內容為主，主要提供金融科技理財服務，為台灣首家成功轉型成 Fintech 公司的財經媒體。',
    image: '/money-app.jpg',
    imagePlaceholder: 'Money錢雜誌APP截圖',
    tech: ['Figma', 'Flurry', 'Firebase', 'Google Analytics', 'Tableau'],
    results: [
      { label: '週活躍增長', value: '+31.43%' },
      { label: '7日留存增長', value: '+2.97%' },
      { label: '用戶滿意度', value: '4.6/5' },
    ],
  },
  {
    title: '投資小學堂 - 有趣、好懂、完整的股市投資課程APP',
    role: 'Product Manager | 2021/8 - 2021/12',
    description: '提供投資新手最好懂、完整，且免費的投資入門理財知識。以為投資人打造的專屬學習平台為目標，讓不管是投資新手、老手，人人都可以使用投資小學堂APP簡單學習、輕鬆上手理財知識。',
    image: '/investment-school-app.jpg',
    imagePlaceholder: '投資小學堂APP截圖',
    tech: ['A/B Testing', 'MVP設計', '產品優化', '數據分析'],
    results: [
      { label: '遊戲化學習', value: '完成' },
      { label: '用戶留存', value: '+25%' },
      { label: '課程完成率', value: '+40%' },
    ],
  },
  {
    title: '每日財經頭條 - 一手掌握財經大小事APP',
    role: 'Product Manager | 2021/8 - 2021/12',
    description: '知識內容型產品，考量現代人生活節奏步調快、資訊流龐大，讓用戶每天5分鐘，可一手掌握財經大小事為標語。提供每日獨家分析股市資訊，目標為能幫所有人做好人生投資。',
    image: '/finance-news-app.jpg',
    imagePlaceholder: '每日財經頭條APP截圖',
    tech: ['UI/UX設計', '使用者流程規劃', '內容策略'],
    results: [
      { label: '每日閱讀率', value: '+45%' },
      { label: '分享率', value: '+35%' },
      { label: '用戶黏著度', value: '8分鐘/日' },
    ],
  },
];

export const skillsData: SkillsData = {
  productSkills: [
    { name: '產品管理', level: 95 },
    { name: '產品策略與路線圖規劃', level: 95 },
    { name: 'B2B/B2C SaaS 產品管理', level: 90 },
    { name: '0→1 產品開發', level: 90 },
    { name: '需求收集與分析', level: 90 },
    { name: '用戶研究與 UX 設計', level: 85 },
    { name: '市場與競品分析', level: 85 },
    { name: '跨部門團隊領導', level: 90 },
    { name: '利害關係人管理', level: 90 },
  ],
  methodologies: [
    { name: '敏捷開發 / Scrum / Kanban', level: 95 },
    { name: 'A/B Testing', level: 85 },
    { name: 'MVP 設計', level: 85 },
    { name: '專案進度與風險管理', level: 85 },
    { name: '數據驅動決策', level: 90 },
  ],
  aiSkills: [
    { name: 'AI 產品規劃', level: 90 },
    { name: 'Generative AI / LLM', level: 85 },
    { name: 'Prompt Engineering', level: 85 },
    { name: 'Agentic AI', level: 80 },
    { name: 'Machine Learning', level: 75 },
  ],
  technicalSkills: [
    { name: '數據分析 (Firebase, Google Analytics)', level: 90 },
    { name: '資料視覺化 (Tableau, Power BI)', level: 85 },
    { name: 'Figma / Axure RP', level: 85 },
    { name: 'Python / SQL', level: 80 },
    { name: 'Jira / Azure DevOps / Trello', level: 90 },
  ],
  softSkills: [
    '跨部門溝通', '利害關係人管理',
    '演講與會議主持', '問題解決能力', '邏輯思考',
    '設計思維', '流程優化', '批判性思考',
    '創意思維', '自我激勵', '持續學習',
  ],
  languages: [
    { name: '中文', level: '母語' },
    { name: '英文', level: '專業工作能力' },
  ],
};

export const highlightsData: Highlight[] = [
  {
    tag: '核心經驗',
    title: '5年以上 PM 經驗',
    description: '從 0 到 1 的 Roadmap 規劃、Stakeholder 溝通對齊到跨部門執行，具備完整產品生命週期管理經驗。主導交付 50+ 項功能與 60+ 個 APP 版本，橫跨 B2B/B2C SaaS 及行動應用領域。',
  },
  {
    tag: 'AI',
    title: 'AI 產品規劃',
    description: '端對端主導 AI Chatbot、評價回覆功能及內部 AI Agent 的規劃與上線，具備 Generative AI、LLM、RAG 應用及 Prompt Engineering 實務能力。',
  },
  {
    tag: '差異化優勢',
    title: '工程背景優勢',
    description: '資訊工程學系畢業，具 Android 開發及自動化測試（Python/Appium）實務經驗。透過 Duke ML for Product Managers 課程實作 Machine Learning 專案，與工程師及資料科學團隊溝通有共通語言，有效提升跨團隊執行效率。',
  },
  {
    tag: '數據',
    title: '數據驅動決策',
    description: '熟練使用 Firebase、Google Analytics、Tableau、Power BI 進行產品數據分析，以 PRD 驅動優先序，設計 A/B Testing 與 MVP 驗證假設，持續優化產品迭代方向。',
  },
  {
    tag: '成果',
    title: '關鍵指標大幅提升',
    description: '在 104人力銀行任職期間，將 Activation Rate 從 18.6% 提升至 35.8%（+92%），Retention Rate 從 12.4% 提升至 21.4%（+73%）— 以數據驅動的 Roadmap 優先序排列為核心方法。',
  },
  {
    tag: '規模',
    title: '大型平台產品管理',
    description: '全面負責月活躍 99K+、下載量 105K+ SaaS 平台的跨部門產品所有權。曾主導全台 1,400 萬用戶規模的全家 APP 數位專案。',
  },
];

export const contactNote = '這是一個示範表單，實際功能需要後端處理';

export const sideProjectsData: SideProject[] = [
  {
    title: 'Coming Soon',
    description: '個人專案內容即將更新，敬請期待！',
    href: '',
  },
];
