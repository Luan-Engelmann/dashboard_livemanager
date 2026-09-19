export const tiktokMockData = {
  profile: {
    name: "oTalDoTroia",
    username: "@otaldotroia",
    followers: 12400,
    profilePicture: "/logo.png" // Futuramente virá da API do TikTok
  },
  period: {
    label: "Últimos 30 dias"
  },
  summary: {
    postViews: 38700,
    profileViews: 4200,
    likes: 3800,
    comments: 286,
    shares: 742,
    estimatedRewards: 184.50
  },
  previousPeriod: {
    postViews: 33900,
    profileViews: 3750,
    likes: 3230,
    comments: 263,
    shares: 611,
    estimatedRewards: 164.00
  },
  content: [
    { id: 1, title: "Far Cry 5 #01", views: 12400, likes: 1200, comments: 84, shares: 241, growthRate: 12.4 },
    { id: 2, title: "Ghost of Tsushima", views: 9800, likes: 876, comments: 61, shares: 183, growthRate: 31.5 },
    { id: 3, title: "God of War", views: 7300, likes: 694, comments: 48, shares: 129, growthRate: 24.1 },
    { id: 4, title: "Dica Rápida OBS Studio", views: 4200, likes: 512, comments: 32, shares: 89, growthRate: 42.8 },
    { id: 5, title: "Setup Atualizado 2026", views: 5000, likes: 518, comments: 61, shares: 100, growthRate: 15.2 }
  ],
  community: {
    newFollowers: 342,
    postsCount: 24
  },
  bestTimes: {
    peak: "Sábado — 21h",
    window: "Sábado — 20h às 22h",
    ranking: [
      { rank: "1º", dayTime: "Sábado — 21h", badge: "Muito Alto" },
      { rank: "2º", dayTime: "Sábado — 20h", badge: "Alto" },
      { rank: "3º", dayTime: "Sábado — 22h", badge: "Alto" },
      { rank: "4º", dayTime: "Domingo — 19h", badge: "Médio" }
    ]
  }
};