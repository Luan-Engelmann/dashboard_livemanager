export const instagramMockData = {
  profile: {
    name: "oTalDoTroia",
    username: "@otaldotroia",
    followers: 12400,
    profilePicture: "/logo.png" // Futuramente virá da Meta Graph API
  },
  summary: {
    views: 48600,
    newFollowers: 342,
    interactions: 5800,
    reach: 31400,
    comments: 428,
    shares: 1200
  },
  previousPeriod: {
    views: 42550,
    newFollowers: 289,
    interactions: 5146,
    reach: 28590,
    comments: 402,
    shares: 989
  },
  formats: {
    comparison: [
      { id: 'reels', label: 'Reels', views: 28400, percentage: 58 },
      { id: 'stories', label: 'Stories', views: 12700, percentage: 26 },
      { id: 'posts', label: 'Posts', views: 7500, percentage: 16 }
    ],
    performance: [
      { format: "Reels", views: "28,4 mil", reach: "18,2 mil", interactions: "3,1 mil", shares: "890", best: "views" },
      { format: "Stories", views: "12,7 mil", reach: "8,5 mil", interactions: "1,2 mil", shares: "85", best: "frequency" },
      { format: "Posts", views: "7,5 mil", reach: "4,7 mil", interactions: "1,5 mil", shares: "225", best: "engagement" }
    ]
  },
  featuredContent: [
    { rank: 1, type: "Reel", title: "Ghost of Tsushima - Momento Épico", views: "12,4 mil", interactions: 486 },
    { rank: 2, type: "Reel", title: "Far Cry 4 Gameplay", views: "8,7 mil", interactions: 312 },
    { rank: 3, type: "Post", title: "Setup Atualizado 2026", views: "5,2 mil", interactions: 201 }
  ],
  growingContent: {
    title: "Ghost of Tsushima (Série)",
    growthViews: "+38,4%",
    growthInteractions: "+22,7%",
    views: "18,9 mil",
    saves: 340
  },
  community: {
    newFollowers: 342,
    followersPerPost: 17.1,
    interactions: "5,8 mil",
    interactionsPerPost: 290
  },
  bestTimes: {
    peak: "Sábado — 20h",
    window: "Sábado — 19h às 22h",
    ranking: [
      { rank: "1º", dayTime: "Sábado — 20h", badge: "Pico Máximo" },
      { rank: "2º", dayTime: "Domingo — 19h", badge: "Alta Retenção" },
      { rank: "3º", dayTime: "Sexta — 21h", badge: "Engajamento" }
    ]
  },
  interactionsBreakdown: {
    likes: "4,1 mil",
    comments: 428,
    shares: "1,2 mil",
    saves: 690
  }
};