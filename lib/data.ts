// 导入新的背景图片数据
import { newBackgroundImages } from './background-images-new';

// 圣经片段数据类型定义
export interface BibleVerse {
  id: string;
  text: string;
  reference: string;
  language: string;
  topics: string[];
  annotation: string;
  category: 'love' | 'hope' | 'faith' | 'peace' | 'strength' | 'wisdom' | 'comfort' | 'guidance';
  isAIGenerated?: boolean;
}

// 背景图片数据类型定义
export interface BackgroundImage {
  id: string;
  url: string;
  description: string;
  category: 'nature' | 'church' | 'abstract' | 'landscape' | 'spiritual';
}

// Topic数据类型定义
export interface Topic {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  color: string;
}

// 多语言圣经片段数据
export const bibleVerses: BibleVerse[] = [
  // 爱 (Love)
  {
    id: 'love-hope-001',
    text: 'And now these three remain: faith, hope and love. But the greatest of these is love.',
    reference: '1 Corinthians 13:13',
    language: 'en',
    topics: ['love', 'hope', 'faith'],
    annotation: 'Paul emphasizes that love is the greatest virtue, but faith and hope are also essential Christian qualities.',
    category: 'love'
  },
  {
    id: 'love-hope-002',
    text: 'But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control.',
    reference: 'Galatians 5:22-23',
    language: 'en',
    topics: ['love', 'peace', 'faith'],
    annotation: 'Paul lists the fruits of the Spirit, showing how love, peace, and faithfulness work together in Christian character.',
    category: 'love'
  },
  {
    id: 'love-003',
    text: 'Above all, love each other deeply, because love covers over a multitude of sins.',
    reference: '1 Peter 4:8',
    language: 'en',
    topics: ['love'],
    annotation: 'Love has the power to forgive and overlook faults, creating unity and harmony.',
    category: 'love'
  },
  {
    id: 'love-004',
    text: 'We love because he first loved us.',
    reference: '1 John 4:19',
    language: 'en',
    topics: ['love'],
    annotation: 'Our ability to love others stems from God\'s love for us - love is both received and given.',
    category: 'love'
  },
  {
    id: 'love-005',
    text: 'And now these three remain: faith, hope and love. But the greatest of these is love.',
    reference: '1 Corinthians 13:13',
    language: 'en',
    topics: ['love'],
    annotation: 'Love is declared as the greatest virtue, surpassing even faith and hope in importance.',
    category: 'love'
  },

  // 希望 (Hope)
  {
    id: 'hope-001',
    text: 'For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, to give you hope and a future.',
    reference: 'Jeremiah 29:11',
    language: 'en',
    topics: ['hope'],
    annotation: 'God promises a future filled with hope and prosperity for those who trust in Him.',
    category: 'hope'
  },
  {
    id: 'hope-002',
    text: 'And we know that in all things God works for the good of those who love him, who have been called according to his purpose.',
    reference: 'Romans 8:28',
    language: 'en',
    topics: ['hope'],
    annotation: 'Even in difficult circumstances, God works everything together for our ultimate good.',
    category: 'hope'
  },
  {
    id: 'hope-peace-001',
    text: 'May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.',
    reference: 'Romans 15:13',
    language: 'en',
    topics: ['hope', 'peace', 'faith'],
    annotation: 'Paul prays for believers to experience hope, peace, and faith through the power of the Holy Spirit.',
    category: 'hope'
  },
  {
    id: 'hope-004',
    text: 'But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.',
    reference: 'Isaiah 40:31',
    language: 'en',
    topics: ['hope'],
    annotation: 'Trusting in God provides supernatural strength and endurance for life\'s journey.',
    category: 'hope'
  },
  {
    id: 'hope-005',
    text: 'The Lord is good to those whose hope is in him, to the one who seeks him.',
    reference: 'Lamentations 3:25',
    language: 'en',
    topics: ['hope'],
    annotation: 'God shows goodness to those who place their hope and trust in Him.',
    category: 'hope'
  },

  // 信心 (Faith)
  {
    id: 'faith-001',
    text: 'Now faith is confidence in what we hope for and assurance about what we do not see.',
    reference: 'Hebrews 11:1',
    language: 'en',
    topics: ['faith'],
    annotation: 'Faith is defined as confident trust in God\'s promises, even when we cannot see the outcome.',
    category: 'faith'
  },
  {
    id: 'faith-strength-001',
    text: 'I can do all this through him who gives me strength.',
    reference: 'Philippians 4:13',
    language: 'en',
    topics: ['faith', 'strength'],
    annotation: 'Through faith in Christ, believers can accomplish anything God calls them to do, receiving divine strength.',
    category: 'faith'
  },
  {
    id: 'faith-003',
    text: 'Trust in the Lord with all your heart and lean not on your own understanding.',
    reference: 'Proverbs 3:5',
    language: 'en',
    topics: ['faith'],
    annotation: 'True faith requires complete trust in God rather than relying on human wisdom.',
    category: 'faith'
  },
  {
    id: 'faith-004',
    text: 'Jesus replied, "Truly I tell you, if you have faith as small as a mustard seed, you can say to this mountain, \'Move from here to there,\' and it will move."',
    reference: 'Matthew 17:20',
    language: 'en',
    topics: ['faith'],
    annotation: 'Even the smallest amount of genuine faith can accomplish extraordinary things.',
    category: 'faith'
  },
  {
    id: 'faith-005',
    text: 'And without faith it is impossible to please God, because anyone who comes to him must believe that he exists and that he rewards those who earnestly seek him.',
    reference: 'Hebrews 11:6',
    language: 'en',
    topics: ['faith'],
    annotation: 'Faith is essential for a relationship with God and is rewarded by Him.',
    category: 'faith'
  },

  // 平安 (Peace)
  {
    id: 'peace-001',
    text: 'Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.',
    reference: 'John 14:27',
    language: 'en',
    topics: ['peace'],
    annotation: 'Jesus offers a unique peace that transcends worldly understanding and calms troubled hearts.',
    category: 'peace'
  },
  {
    id: 'peace-comfort-001',
    text: 'And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.',
    reference: 'Philippians 4:7',
    language: 'en',
    topics: ['peace', 'comfort'],
    annotation: 'God\'s peace provides protection and comfort for both emotions and thoughts when we trust in Christ.',
    category: 'peace'
  },
  {
    id: 'peace-003',
    text: 'Be still, and know that I am God.',
    reference: 'Psalm 46:10',
    language: 'en',
    topics: ['peace'],
    annotation: 'Finding peace requires stillness and recognition of God\'s sovereignty over all situations.',
    category: 'peace'
  },
  {
    id: 'peace-004',
    text: 'Cast all your anxiety on him because he cares for you.',
    reference: '1 Peter 5:7',
    language: 'en',
    topics: ['peace'],
    annotation: 'We can find peace by giving our worries to God, knowing He cares deeply for us.',
    category: 'peace'
  },
  {
    id: 'peace-005',
    text: 'You will keep in perfect peace those whose minds are steadfast, because they trust in you.',
    reference: 'Isaiah 26:3',
    language: 'en',
    topics: ['peace'],
    annotation: 'Perfect peace comes to those who maintain unwavering trust in God.',
    category: 'peace'
  },

  // 力量 (Strength)
  {
    id: 'strength-001',
    text: 'The Lord is my strength and my shield; my heart trusts in him, and he helps me.',
    reference: 'Psalm 28:7',
    language: 'en',
    topics: ['strength'],
    annotation: 'God provides both protection and power to those who place their trust in Him.',
    category: 'strength'
  },
  {
    id: 'strength-faith-001',
    text: 'I have been crucified with Christ and I no longer live, but Christ lives in me.',
    reference: 'Galatians 2:20',
    language: 'en',
    topics: ['strength', 'faith'],
    annotation: 'True strength comes from allowing Christ to live through us rather than relying on our own power, demonstrating faith.',
    category: 'strength'
  },
  {
    id: 'strength-003',
    text: 'The Lord your God is with you, the Mighty Warrior who saves.',
    reference: 'Zephaniah 3:17',
    language: 'en',
    topics: ['strength'],
    annotation: 'God is a powerful warrior who fights for His people and provides salvation.',
    category: 'strength'
  },
  {
    id: 'strength-004',
    text: 'But he said to me, "My grace is sufficient for you, for my power is made perfect in weakness."',
    reference: '2 Corinthians 12:9',
    language: 'en',
    topics: ['strength'],
    annotation: 'God\'s strength is most evident when we acknowledge our own weakness and depend on Him.',
    category: 'strength'
  },
  {
    id: 'strength-005',
    text: 'Finally, be strong in the Lord and in his mighty power.',
    reference: 'Ephesians 6:10',
    language: 'en',
    topics: ['strength'],
    annotation: 'Our strength comes from being connected to God\'s unlimited power.',
    category: 'strength'
  },

  // 智慧 (Wisdom)
  {
    id: 'wisdom-001',
    text: 'The fear of the Lord is the beginning of wisdom, and knowledge of the Holy One is understanding.',
    reference: 'Proverbs 9:10',
    language: 'en',
    topics: ['wisdom'],
    annotation: 'True wisdom begins with reverence for God and understanding of His character.',
    category: 'wisdom'
  },
  {
    id: 'wisdom-guidance-001',
    text: 'If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault, and it will be given to you.',
    reference: 'James 1:5',
    language: 'en',
    topics: ['wisdom', 'guidance'],
    annotation: 'God generously provides wisdom and guidance to those who seek it, without judgment or criticism.',
    category: 'wisdom'
  },
  {
    id: 'wisdom-003',
    text: 'Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.',
    reference: 'Proverbs 3:5-6',
    language: 'en',
    topics: ['wisdom'],
    annotation: 'Wisdom involves trusting God completely and allowing Him to guide our life decisions.',
    category: 'wisdom'
  },
  {
    id: 'wisdom-004',
    text: 'The wise store up knowledge, but the mouth of a fool invites ruin.',
    reference: 'Proverbs 10:14',
    language: 'en',
    topics: ['wisdom'],
    annotation: 'Wisdom involves careful learning and thoughtful speech, while foolishness leads to destruction.',
    category: 'wisdom'
  },
  {
    id: 'wisdom-005',
    text: 'For the Lord gives wisdom; from his mouth come knowledge and understanding.',
    reference: 'Proverbs 2:6',
    language: 'en',
    topics: ['wisdom'],
    annotation: 'All true wisdom, knowledge, and understanding originate from God.',
    category: 'wisdom'
  },

  // 安慰 (Comfort)
  {
    id: 'comfort-001',
    text: 'The Lord is my shepherd, I lack nothing.',
    reference: 'Psalm 23:1',
    language: 'en',
    topics: ['comfort'],
    annotation: 'God provides complete care and provision for His people, like a shepherd caring for sheep.',
    category: 'comfort'
  },
  {
    id: 'comfort-peace-001',
    text: 'Come to me, all you who are weary and burdened, and I will give you rest.',
    reference: 'Matthew 11:28',
    language: 'en',
    topics: ['comfort', 'peace'],
    annotation: 'Jesus invites all who are struggling to find rest, comfort, and peace in Him.',
    category: 'comfort'
  },
  {
    id: 'comfort-003',
    text: 'Praise be to the God and Father of our Lord Jesus Christ, the Father of compassion and the God of all comfort.',
    reference: '2 Corinthians 1:3',
    language: 'en',
    topics: ['comfort'],
    annotation: 'God is the ultimate source of compassion and comfort for all who are suffering.',
    category: 'comfort'
  },
  {
    id: 'comfort-004',
    text: 'He heals the brokenhearted and binds up their wounds.',
    reference: 'Psalm 147:3',
    language: 'en',
    topics: ['comfort'],
    annotation: 'God has the power to heal emotional pain and restore wounded hearts.',
    category: 'comfort'
  },
  {
    id: 'comfort-005',
    text: 'Even though I walk through the darkest valley, I will fear no evil, for you are with me.',
    reference: 'Psalm 23:4',
    language: 'en',
    topics: ['comfort'],
    annotation: 'God\'s presence provides courage and comfort even in life\'s darkest moments.',
    category: 'comfort'
  },

  // 引导 (Guidance)
  {
    id: 'guidance-001',
    text: 'Your word is a lamp for my feet, a light on my path.',
    reference: 'Psalm 119:105',
    language: 'en',
    topics: ['guidance'],
    annotation: 'God\'s Word provides clear direction and illumination for life\'s journey.',
    category: 'guidance'
  },
  {
    id: 'guidance-wisdom-001',
    text: 'I will instruct you and teach you in the way you should go; I will counsel you with my loving eye on you.',
    reference: 'Psalm 32:8',
    language: 'en',
    topics: ['guidance', 'wisdom'],
    annotation: 'God promises to provide instruction, teaching, and wise counsel with loving care.',
    category: 'guidance'
  },
  {
    id: 'guidance-003',
    text: 'In their hearts humans plan their course, but the Lord establishes their steps.',
    reference: 'Proverbs 16:9',
    language: 'en',
    topics: ['guidance'],
    annotation: 'While we may make plans, God ultimately determines the path our lives will take.',
    category: 'guidance'
  },
  {
    id: 'guidance-004',
    text: 'Whether you turn to the right or to the left, your ears will hear a voice behind you, saying, "This is the way; walk in it."',
    reference: 'Isaiah 30:21',
    language: 'en',
    topics: ['guidance'],
    annotation: 'God provides clear direction through His voice, guiding us in the right path.',
    category: 'guidance'
  },
  {
    id: 'guidance-005',
    text: 'Jesus Christ is the same yesterday and today and forever.',
    reference: 'Hebrews 13:8',
    language: 'en',
    topics: ['guidance'],
    annotation: 'Christ\'s unchanging nature provides a stable foundation for guidance and direction.',
    category: 'guidance'
  },

  // 中文圣经片段
  {
    id: 'love-cn-001',
    text: '神爱世人，甚至将他的独生子赐给他们，叫一切信他的，不至灭亡，反得永生。',
    reference: '约翰福音 3:16',
    language: 'zh',
    topics: ['love'],
    annotation: '这节经文展现了神对人类最伟大的爱——牺牲独生子来拯救人类。',
    category: 'love'
  },
  {
    id: 'hope-cn-001',
    text: '耶和华说：我知道我向你们所怀的意念是赐平安的意念，不是降灾祸的意念，要叫你们末后有指望。',
    reference: '耶利米书 29:11',
    language: 'zh',
    topics: ['hope'],
    annotation: '神应许给信靠祂的人一个充满希望和繁荣的未来。',
    category: 'hope'
  },
  {
    id: 'faith-cn-001',
    text: '我靠着那加给我力量的，凡事都能做。',
    reference: '腓立比书 4:13',
    language: 'zh',
    topics: ['faith'],
    annotation: '通过信靠基督，信徒能够完成神呼召他们做的任何事情。',
    category: 'faith'
  },
  {
    id: 'peace-cn-001',
    text: '我留下平安给你们；我将我的平安赐给你们。我所赐的，不像世人所赐的。你们心里不要忧愁，也不要胆怯。',
    reference: '约翰福音 14:27',
    language: 'zh',
    topics: ['peace'],
    annotation: '耶稣提供一种超越世界理解的独特平安，能够安慰忧虑的心。',
    category: 'peace'
  },
  {
    id: 'strength-cn-001',
    text: '耶和华是我的力量，是我的盾牌；我心里倚靠他，就得帮助。',
    reference: '诗篇 28:7',
    language: 'zh',
    topics: ['strength'],
    annotation: '神为那些信靠祂的人提供保护和力量。',
    category: 'strength'
  },

  // 阿拉伯语圣经片段
  {
    id: 'love-ar-001',
    text: 'لأنه هكذا أحب الله العالم حتى بذل ابنه الوحيد، لكي لا يهلك كل من يؤمن به، بل تكون له الحياة الأبدية.',
    reference: 'يوحنا 3:16',
    language: 'ar',
    topics: ['love'],
    annotation: 'هذه الآية تظهر أعظم تعبير عن المحبة الإلهية - الله يضحي بابنه الوحيد لخلاص البشرية.',
    category: 'love'
  },
  {
    id: 'hope-ar-001',
    text: 'لأني أنا عارف الأفكار التي أنا مفتكر بها عنكم، يقول الرب، أفكار سلام لا شر، لأعطيكم آخرة ورجاء.',
    reference: 'إرميا 29:11',
    language: 'ar',
    topics: ['hope'],
    annotation: 'الله يعد بمستقبل مليء بالرجاء والازدهار لمن يثقون به.',
    category: 'hope'
  },
  {
    id: 'faith-ar-001',
    text: 'أستطيع كل شيء في المسيح الذي يقويني.',
    reference: 'فيلبي 4:13',
    language: 'ar',
    topics: ['faith'],
    annotation: 'من خلال الإيمان بالمسيح، يمكن للمؤمنين إنجاز أي شيء يدعوهم الله إليه.',
    category: 'faith'
  },

  // 西班牙语圣经片段
  {
    id: 'love-es-001',
    text: 'Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.',
    reference: 'Juan 3:16',
    language: 'es',
    topics: ['love'],
    annotation: 'Este versículo demuestra la máxima expresión del amor divino - Dios sacrificando a Su único Hijo para la salvación de la humanidad.',
    category: 'love'
  },
  {
    id: 'hope-es-001',
    text: 'Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal, para daros el fin que esperáis.',
    reference: 'Jeremías 29:11',
    language: 'es',
    topics: ['hope'],
    annotation: 'Dios promete un futuro lleno de esperanza y prosperidad para aquellos que confían en Él.',
    category: 'hope'
  },
  {
    id: 'faith-es-001',
    text: 'Todo lo puedo en Cristo que me fortalece.',
    reference: 'Filipenses 4:13',
    language: 'es',
    topics: ['faith'],
    annotation: 'A través de la fe en Cristo, los creyentes pueden lograr cualquier cosa que Dios los llame a hacer.',
    category: 'faith'
  },

  // 葡萄牙语圣经片段
  {
    id: 'love-pt-001',
    text: 'Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.',
    reference: 'João 3:16',
    language: 'pt',
    topics: ['love'],
    annotation: 'Este versículo demonstra a máxima expressão do amor divino - Deus sacrificando Seu único Filho para a salvação da humanidade.',
    category: 'love'
  },
  {
    id: 'hope-pt-001',
    text: 'Porque eu bem sei os pensamentos que tenho a vosso respeito, diz o Senhor; pensamentos de paz, e não de mal, para vos dar o fim que esperais.',
    reference: 'Jeremias 29:11',
    language: 'pt',
    topics: ['hope'],
    annotation: 'Deus promete um futuro cheio de esperança e prosperidade para aqueles que confiam nEle.',
    category: 'hope'
  },
  {
    id: 'faith-pt-001',
    text: 'Posso todas as coisas naquele que me fortalece.',
    reference: 'Filipenses 4:13',
    language: 'pt',
    topics: ['faith'],
    annotation: 'Através da fé em Cristo, os crentes podem realizar qualquer coisa que Deus os chame para fazer.',
    category: 'faith'
  }
];

// 背景图片数据 (使用新的100个唯一URL)
export const backgroundImages: BackgroundImage[] = newBackgroundImages;
// Topic数据
export const topics: Topic[] = [
  {
    id: 'love',
    name: '爱',
    nameEn: 'Love',
    description: '关于神的爱和人与人之间的爱',
    color: '#e91e63'
  },
  {
    id: 'hope',
    name: '希望',
    nameEn: 'Hope',
    description: '关于希望、未来和神的应许',
    color: '#2196f3'
  },
  {
    id: 'faith',
    name: '信心',
    nameEn: 'Faith',
    description: '关于信心、信任和依靠神',
    color: '#4caf50'
  },
  {
    id: 'peace',
    name: '平安',
    nameEn: 'Peace',
    description: '关于内心的平安和神的安慰',
    color: '#9c27b0'
  },
  {
    id: 'strength',
    name: '力量',
    nameEn: 'Strength',
    description: '关于神的力量和我们的能力',
    color: '#ff9800'
  },
  {
    id: 'wisdom',
    name: '智慧',
    nameEn: 'Wisdom',
    description: '关于神的智慧和人生的指导',
    color: '#795548'
  },
  {
    id: 'comfort',
    name: '安慰',
    nameEn: 'Comfort',
    description: '关于神的安慰和治愈',
    color: '#607d8b'
  },
  {
    id: 'guidance',
    name: '引导',
    nameEn: 'Guidance',
    description: '关于神的引导和人生方向',
    color: '#3f51b5'
  }
];

// 语言数据类型定义
export interface Language {
  code: string;
  name: string;
  nativeName: string;
}

// 语言配置
export const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'zh', name: 'Chinese', nativeName: '中文' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português' }
];

// 多语言UI文本
export interface UITexts {
  // 导航栏
  nav: {
    home: string;
    topics: string;
    about: string;
    contact: string;
  };
  // 页面标题和描述
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  // 控制面板
  controls: {
    language: string;
    topic: string;
    background: string;
    aiGenerator: string;
    showAI: string;
    hideAI: string;
    generateNewVerse: string;
    generating: string;
  };
  // 主题选择器
  topicSelector: {
    selectTopic: string;
    allTopics: string;
  };
  // 背景选择器
  backgroundSelector: {
    randomBackground: string;
  };
  // AI生成器
  aiGenerator: {
    title: string;
    description: string;
    generateWithAI: string;
  };
  // 圣经片段显示
  verseDisplay: {
    loading: string;
    noVerseFound: string;
    topic: string;
    annotation: string;
  };
  // 页脚
  footer: {
    description: string;
    quickLinks: string;
    resources: string;
    support: string;
    copyright: string;
  };
}

// 多语言UI文本数据
export const uiTexts: Record<string, UITexts> = {
  en: {
    nav: {
      home: 'Home',
      topics: 'Topics',
      about: 'About',
      contact: 'Contact'
    },
    hero: {
      title: 'Daily Spiritual Inspiration',
      subtitle: 'Random Bible Verse Generator',
      description: 'Discover powerful Bible verses with our AI-powered generator. Available in multiple languages with beautiful backgrounds.'
    },
    controls: {
      language: 'Language',
      topic: 'Topic',
      background: 'Background',
      aiGenerator: 'AI Generator',
      showAI: 'Show AI',
      hideAI: 'Hide AI',
      generateNewVerse: 'Generate New Verse',
      generating: 'Generating...'
    },
    topicSelector: {
      selectTopic: 'Select Topic',
      allTopics: 'All Topics'
    },
    backgroundSelector: {
      randomBackground: 'Random Background'
    },
    aiGenerator: {
      title: 'AI Verse Generator',
      description: 'Generate personalized Bible verses using AI',
      generateWithAI: 'Generate with AI'
    },
    verseDisplay: {
      loading: 'Loading...',
      noVerseFound: 'No verse found',
      topic: 'Topic',
      annotation: 'Annotation'
    },
    footer: {
      description: 'Discover powerful Bible verses with our AI-powered random generator. Get daily spiritual inspiration and motivational scripture quotes.',
      quickLinks: 'Quick Links',
      resources: 'Resources',
      support: 'Support',
      copyright: '© 2024 Random Bible Verse Generator. All rights reserved.'
    }
  },
  zh: {
    nav: {
      home: '首页',
      topics: '主题',
      about: '关于',
      contact: '联系'
    },
    hero: {
      title: '每日灵性启发',
      subtitle: '随机圣经片段生成器',
      description: '通过我们的AI驱动生成器发现强大的圣经片段。支持多种语言，配有美丽背景。'
    },
    controls: {
      language: '语言',
      topic: '主题',
      background: '背景',
      aiGenerator: 'AI生成器',
      showAI: '显示AI',
      hideAI: '隐藏AI',
      generateNewVerse: '生成新片段',
      generating: '生成中...'
    },
    topicSelector: {
      selectTopic: '选择主题',
      allTopics: '所有主题'
    },
    backgroundSelector: {
      randomBackground: '随机背景'
    },
    aiGenerator: {
      title: 'AI片段生成器',
      description: '使用AI生成个性化圣经片段',
      generateWithAI: 'AI生成'
    },
    verseDisplay: {
      loading: '加载中...',
      noVerseFound: '未找到片段',
      topic: '主题',
      annotation: '注解'
    },
    footer: {
      description: '通过我们的AI驱动随机生成器发现强大的圣经片段。获取每日灵性启发和励志经文引用。',
      quickLinks: '快速链接',
      resources: '资源',
      support: '支持',
      copyright: '© 2024 随机圣经片段生成器。保留所有权利。'
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      topics: 'المواضيع',
      about: 'حول',
      contact: 'اتصل'
    },
    hero: {
      title: 'إلهام روحي يومي',
      subtitle: 'مولد آيات الكتاب المقدس العشوائية',
      description: 'اكتشف آيات الكتاب المقدس القوية مع مولدنا المدعوم بالذكاء الاصطناعي. متاح بلغات متعددة مع خلفيات جميلة.'
    },
    controls: {
      language: 'اللغة',
      topic: 'الموضوع',
      background: 'الخلفية',
      aiGenerator: 'مولد الذكاء الاصطناعي',
      showAI: 'إظهار الذكاء الاصطناعي',
      hideAI: 'إخفاء الذكاء الاصطناعي',
      generateNewVerse: 'إنشاء آية جديدة',
      generating: 'جاري الإنشاء...'
    },
    topicSelector: {
      selectTopic: 'اختر الموضوع',
      allTopics: 'جميع المواضيع'
    },
    backgroundSelector: {
      randomBackground: 'خلفية عشوائية'
    },
    aiGenerator: {
      title: 'مولد الآيات بالذكاء الاصطناعي',
      description: 'إنشاء آيات كتاب مقدس مخصصة باستخدام الذكاء الاصطناعي',
      generateWithAI: 'إنشاء بالذكاء الاصطناعي'
    },
    verseDisplay: {
      loading: 'جاري التحميل...',
      noVerseFound: 'لم يتم العثور على آية',
      topic: 'الموضوع',
      annotation: 'التعليق'
    },
    footer: {
      description: 'اكتشف آيات الكتاب المقدس القوية مع مولدنا العشوائي المدعوم بالذكاء الاصطناعي. احصل على إلهام روحي يومي ونصوص تحفيزية.',
      quickLinks: 'روابط سريعة',
      resources: 'الموارد',
      support: 'الدعم',
      copyright: '© 2024 مولد آيات الكتاب المقدس العشوائية. جميع الحقوق محفوظة.'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      topics: 'Temas',
      about: 'Acerca de',
      contact: 'Contacto'
    },
    hero: {
      title: 'Inspiración Espiritual Diaria',
      subtitle: 'Generador de Versículos Bíblicos Aleatorios',
      description: 'Descubre poderosos versículos bíblicos con nuestro generador impulsado por IA. Disponible en múltiples idiomas con hermosos fondos.'
    },
    controls: {
      language: 'Idioma',
      topic: 'Tema',
      background: 'Fondo',
      aiGenerator: 'Generador IA',
      showAI: 'Mostrar IA',
      hideAI: 'Ocultar IA',
      generateNewVerse: 'Generar Nuevo Versículo',
      generating: 'Generando...'
    },
    topicSelector: {
      selectTopic: 'Seleccionar Tema',
      allTopics: 'Todos los Temas'
    },
    backgroundSelector: {
      randomBackground: 'Fondo Aleatorio'
    },
    aiGenerator: {
      title: 'Generador de Versículos con IA',
      description: 'Genera versículos bíblicos personalizados usando IA',
      generateWithAI: 'Generar con IA'
    },
    verseDisplay: {
      loading: 'Cargando...',
      noVerseFound: 'No se encontró versículo',
      topic: 'Tema',
      annotation: 'Anotación'
    },
    footer: {
      description: 'Descubre poderosos versículos bíblicos con nuestro generador aleatorio impulsado por IA. Obtén inspiración espiritual diaria y citas motivacionales.',
      quickLinks: 'Enlaces Rápidos',
      resources: 'Recursos',
      support: 'Soporte',
      copyright: '© 2024 Generador de Versículos Bíblicos Aleatorios. Todos los derechos reservados.'
    }
  },
  pt: {
    nav: {
      home: 'Início',
      topics: 'Tópicos',
      about: 'Sobre',
      contact: 'Contato'
    },
    hero: {
      title: 'Inspiração Espiritual Diária',
      subtitle: 'Gerador de Versículos Bíblicos Aleatórios',
      description: 'Descubra versículos bíblicos poderosos com nosso gerador alimentado por IA. Disponível em vários idiomas com belos fundos.'
    },
    controls: {
      language: 'Idioma',
      topic: 'Tópico',
      background: 'Fundo',
      aiGenerator: 'Gerador IA',
      showAI: 'Mostrar IA',
      hideAI: 'Ocultar IA',
      generateNewVerse: 'Gerar Novo Versículo',
      generating: 'Gerando...'
    },
    topicSelector: {
      selectTopic: 'Selecionar Tópico',
      allTopics: 'Todos os Tópicos'
    },
    backgroundSelector: {
      randomBackground: 'Fundo Aleatório'
    },
    aiGenerator: {
      title: 'Gerador de Versículos com IA',
      description: 'Gere versículos bíblicos personalizados usando IA',
      generateWithAI: 'Gerar com IA'
    },
    verseDisplay: {
      loading: 'Carregando...',
      noVerseFound: 'Nenhum versículo encontrado',
      topic: 'Tópico',
      annotation: 'Anotação'
    },
    footer: {
      description: 'Descubra versículos bíblicos poderosos com nosso gerador aleatório alimentado por IA. Obtenha inspiração espiritual diária e citações motivacionais.',
      quickLinks: 'Links Rápidos',
      resources: 'Recursos',
      support: 'Suporte',
      copyright: '© 2024 Gerador de Versículos Bíblicos Aleatórios. Todos os direitos reservados.'
    }
  }
};

// 工具函数
export function getRandomVerse(language: string = 'en', topic?: string): BibleVerse | null {
  let filteredVerses = bibleVerses.filter(verse => verse.language === language);
  
  if (topic) {
    filteredVerses = filteredVerses.filter(verse => verse.topics.includes(topic));
  }
  
  if (filteredVerses.length === 0) {
    return null;
  }
  
  const randomIndex = Math.floor(Math.random() * filteredVerses.length);
  return filteredVerses[randomIndex];
}

export function getRandomBackgroundImage(category?: string): BackgroundImage | null {
  let filteredImages = backgroundImages;
  
  if (category) {
    filteredImages = backgroundImages.filter(img => img.category === category);
  }
  
  if (filteredImages.length === 0) {
    return null;
  }
  
  const randomIndex = Math.floor(Math.random() * filteredImages.length);
  return filteredImages[randomIndex];
}

export function getVersesByTopic(topic: string, language: string = 'en'): BibleVerse[] {
  return bibleVerses.filter(verse => 
    verse.topics.includes(topic) && verse.language === language
  );
}

export function getTopicsByLanguage(language: string): Topic[] {
  const availableTopics = new Set<string>();
  
  bibleVerses.forEach(verse => {
    if (verse.language === language) {
      verse.topics.forEach(topic => {
        availableTopics.add(topic);
      });
    }
  });
  
  return topics.filter(topic => availableTopics.has(topic.id));
}
