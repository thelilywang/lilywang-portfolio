// 個人基本資料
export const personalInfo = {
  name: '王鈺婷 (Lily Wang)',
  title: '軟體產品經理',
  intro: '樂觀積極 | 邏輯思考 | 設計思維 | 團隊合作 | 溝通協調。擁有財經、內容與電商領域2C軟體產品經驗，專長於產品策略規劃、商業數據分析，並具工程背景與軟體開發經驗。以能做出體驗好的產品為理想，有使用者導向的UI/UX設計思維。',
  email: 'yuting.lily.wang@gmail.com',
  phone: '',
  location: '台北市, 台灣',
  photo: '/profile-photo.jpg', // 未來可以替換為真實照片路徑
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/lily-yuting-wang',
    github: 'https://github.com/thelilywang',
    medium: 'https://1zhi-lily.medium.com',
  },
};

// 關於我頁面數據
export const aboutData = {
  bio: [
    '您好！我是Lily，一位熱衷於用戶體驗和產品創新的軟體產品經理。擁有財經、內容與電商領域2C軟體產品經驗，涵蓋"全家APP"、"Money錢雜誌"、"投資小學堂"及"每日財經頭條"。',
    '具工程背景，有APP開發經驗及互聯網領域專業知識，與工程師溝通有共通語言，達成有效溝通，增加專案運行順暢度。擁有Scrum敏捷開發經驗，以Open-minded、富同理心的態度，擅於溝通協調、邏輯分析和激勵他人。',
    'Passionate for creating meaningful experiences via innovative digital solutions. Good at excavating issues, integrating resources to solve problems.',
  ],
  education: [
    {
      degree: '資訊工程學學士',
      school: '元智大學',
      period: '2015/9 - 2019/6',
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
      name: 'Google Analytics 個人認證',
      org: 'Google',
      year: '',
    },
    {
      name: 'CPE大學程式能力檢定',
      org: '',
      year: '',
    },
    {
      name: 'TOEIC 605',
      org: '',
      year: '',
    },
  ],
  interests: [
    { name: '旅行', icon: '✈️' },
    { name: '水彩速寫', icon: '�' },
    { name: '影音欣賞', icon: '🎬' },
    { name: '瑜珈', icon: '🧘' },
  ],
};

// 工作經驗頁面數據
export const experienceData = [
  {
    period: '2023年4月 - 至今',
    company: '104人力銀行',
    position: 'Product Manager',
    description: '擔任產品經理職務，負責產品策略規劃與開發',
    achievements: [
      // 您可以在此添加工作成就和職責
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
      'FamilyMart APP, one of Taiwan\'s largest convenience store, has more than 4,000 brick-and-mortar stores located in Taiwan, with over 14 million users of the app.',
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
    period: '2019年9月 - 2020年3月',
    company: '功學社教育用品股份有限公司',
    position: 'BI工程師',
    description: 'SAP Business Intelligence商業數據分析系統日常維運',
    achievements: [
      '撰寫英文信跨國溝通(德國 / 美國)',
      '蒐集與分析跨部門商業數據需求',
      '用戶端商BI諮詢服務與系統問題排除',
      '協助SAP MM模組(物流系統)及SD模組(財會系統)的基礎問題排除',
      '編寫BI系統操作使用手冊',
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

// 專案作品頁面數據
export const projectsData = [
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
      { label: '專案完成率', value: '100%' },
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
      { label: '用戶滿意度', value: '4.5/5' },
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

// 專業技能頁面數據
export const skillsData = {
  productSkills: [
    { name: '產品策略規劃', level: 95 },
    { name: '需求收集與分析', level: 90 },
    { name: '用戶研究與訪談', level: 85 },
    { name: 'UI/UX設計思維', level: 90 },
    { name: '產品路線圖規劃', level: 85 },
  ],
  methodologies: [
    { name: '敏捷開發 (Scrum/Kanban)', level: 95 },
    { name: '專案溝通/整合管理', level: 90 },
    { name: '專案時間/進度控管', level: 85 },
    { name: '專案成本/品質/風險管理', level: 80 },
    { name: 'A/B Testing', level: 85 },
    { name: 'MVP設計', level: 85 },
  ],
  technicalSkills: [
    { name: '數據分析 (Firebase, Google Analytics)', level: 90 },
    { name: '資料視覺化 (Tableau, Power BI)', level: 85 },
    { name: '原型設計 (Figma, Axure RP)', level: 85 },
    { name: '程式設計 (Kotlin, Python, Java)', level: 80 },
    { name: '專案管理工具 (Jira, Trello, Azure DevOps)', level: 90 },
  ],
  softSkills: [
    '團隊協作', '跨部門溝通', '演講簡報', '問題解決能力', 
    '邏輯思考', '設計思維', '流程優化', '溝通協調', 
    '批判性思考', '創意思維', '自我激勵', '持續學習'
  ],
  languages: [
    { name: '中文', level: '母語' },
    { name: '英文', level: 'TOEIC 605' },
    { name: '台語', level: '精通' },
  ],
};

// 首頁亮點數據
export const highlightsData = [
  {
    title: '軟體產品經驗',
    description: '擁有財經、內容與電商領域2C軟體產品經驗，涵蓋全家APP、Money錢雜誌、投資小學堂及每日財經頭條等多個專案。',
  },
  {
    title: '產品策略與數據分析',
    description: '能運用思維分析、組織邏輯，轉化產品策略、設計產品使用情境為產品需求文件，並進行深入的數據分析和商業決策。',
  },
  {
    title: '敏捷專案管理',
    description: '實際從0至1導入Scrum敏捷開發專案流程經驗，能根據專案資源進行調配，管理需求開發優先順序。',
  },
  {
        title: '使用者導向的設計思維',
        description: '具備使用者導向的UI/UX設計思維，能夠從用戶需求出發，設計出符合市場需求的產品。',
    },
  {
    title: '數據分析',
    description: '擅長運用數據驅動決策，透過關鍵指標評估產品效能並持續優化。',
  },
  {
    title: '工程背景優勢',
    description: '具工程背景，有APP開發經驗及互聯網領域專業知識，與工程師溝通有共通語言，達成有效溝通，增加專案運行順暢度。',
  },
];

// 聯絡表單說明（僅作展示用）
export const contactNote = '這是一個示範表單，實際功能需要後端處理';
export const scheduleNote = 'Whatever is worth doing is worth doing well. 任何值得做的事就值得把它做好！歡迎通過以上聯絡方式與我聯繫: yuting.lily.wang@gmail.com';
