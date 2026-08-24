// Aqui definimos os dados utilizando null para métricas que as plataformas não possuem (ex: Impressões no TikTok, Alcance no YouTube).

export const platformData = {
  instagram: {
    name: "Instagram",
    views: 38000,
    reach: 31000,
    impressions: 42000,
    engagementRate: 7.8,
    followersGained: 215,
    contentPublished: 12,
    color: "#E1306C"
  },
  tiktok: {
    name: "TikTok",
    views: 52000,
    reach: 47000,
    impressions: null,
    engagementRate: 11.2,
    followersGained: 418,
    contentPublished: 9,
    color: "#00f2fe"
  },
  youtube: {
    name: "YouTube",
    views: 28000,
    reach: null,
    impressions: 36000,
    engagementRate: 6.5,
    followersGained: 173,
    contentPublished: 6,
    color: "#FF0000"
  },
  twitch: {
    name: "Twitch",
    views: 6800,
    reach: null,
    impressions: null,
    engagementRate: 9.1,
    followersGained: 36,
    contentPublished: 8,
    color: "#9146FF"
  }
};

export const trendData = [
  { date: "01/08", instagram: 1200, tiktok: 2100, youtube: 800, twitch: 150 },
  { date: "05/08", instagram: 1500, tiktok: 2800, youtube: 950, twitch: 200 },
  { date: "10/08", instagram: 1800, tiktok: 3400, youtube: 1100, twitch: 180 },
  { date: "15/08", instagram: 2200, tiktok: 4100, youtube: 1400, twitch: 250 },
  { date: "20/08", instagram: 2800, tiktok: 5200, youtube: 1800, twitch: 310 },
];

export const topContentData = [
  { id: 1, title: "Far Cry 3 - Melhor Momento", platform: "TikTok", type: "Vídeo Curto", views: 18400, reach: 16200, impressions: null, engagementRate: 12.8 },
  { id: 2, title: "Review Setup 2026", platform: "YouTube", type: "Vídeo Longo", views: 14200, reach: null, impressions: 19500, engagementRate: 8.5 },
  { id: 3, title: "Dicas de Infra #1", platform: "Instagram", type: "Reels", views: 11500, reach: 9800, impressions: 12100, engagementRate: 7.2 },
  { id: 4, title: "Live de Sábado - RDR", platform: "Twitch", type: "Live", views: 2100, reach: null, impressions: null, engagementRate: 10.1 },
];