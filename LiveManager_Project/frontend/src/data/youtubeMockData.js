export const youtubeMockData = {
  channel: {
    name: "oTalDoTroia",
    handle: "@oTalDoTroia",
    subscribers: "2,5 mil",
    videos: 138,
    shorts: 214,
    lives: 62
  },
  summary: {
    views: 128400,
    watchHours: 1300,
    subscribersGained: 286,
    ctr: 6.8,
    retention: 47.3,
    averageViewDuration: "8 min 42 s"
  },
  previousPeriod: {
    views: 111800,
    watchHours: 1180,
    subscribersGained: 242,
    ctr: 6.2,
    retention: 44.8,
    averageViewDuration: "7 min 50 s"
  },
  formatComparison: [
    { metric: "Visualizações", videos: "52,4 mil", shorts: "76,0 mil", winner: "shorts" },
    { metric: "Horas Assistidas", videos: "980 h", shorts: "320 h", winner: "videos" },
    { metric: "Novos Inscritos", videos: "+102", shorts: "+184", winner: "shorts" },
    { metric: "Retenção Média", videos: "54,2%", shorts: "40,4%", winner: "videos" }
  ],
  bestPublishingTimes: {
    peak: "Sábado — 21h",
    window: "Sábado — 20h às 23h",
    ranking: [
      { rank: "1º", dayTime: "Sábado — 21h", badge: "Pico Máximo" },
      { rank: "2º", dayTime: "Sábado — 22h", badge: "Alta Retenção" },
      { rank: "3º", dayTime: "Domingo — 19h", badge: "Engajamento Forte" }
    ]
  },
  ctrRetentionMatrix: [
    { title: "Como Configurar Live Stream", ctr: 8.5, retention: 58.2, quadrant: "Alto + Alto", status: "Excelente", tagColor: "#4ade80" },
    { title: "Far Cry 4 Gameplay Ep.1", ctr: 4.1, retention: 52.0, quadrant: "Baixo + Alto", status: "Melhorar título/capa", tagColor: "#facc15" },
    { title: "Dicas Rápidas de OBS Studio", ctr: 9.2, retention: 31.5, quadrant: "Alto + Baixo", status: "Melhorar conteúdo", tagColor: "#f97316" },
    { title: "Teste de Microfone Barato", ctr: 3.8, retention: 28.0, quadrant: "Baixo + Baixo", status: "Baixo desempenho", tagColor: "#ef4444" }
  ],
  trafficSources: [
    { source: "Shorts Feed", percentage: 42, isMain: true },
    { source: "Vídeos sugeridos", percentage: 21, isMain: false },
    { source: "Pesquisa do YouTube", percentage: 18, isMain: false },
    { source: "Página inicial", percentage: 12, isMain: false },
    { source: "Externo", percentage: 5, isMain: false }
  ],
  growingContent: {
    title: "Ghost of Tsushima",
    growth: "+38,4%",
    views: "14,2 mil",
    subsGained: 54
  },
  topSubscribedContent: [
    { rank: 1, title: "Short Far Cry 3 - Momento Insano", subs: 86, type: "Short" },
    { rank: 2, title: "Ghost of Tsushima - Gameplay #04", subs: 54, type: "Vídeo" },
    { rank: 3, title: "Far Cry 4 - Melhores Momentos", subs: 42, type: "Vídeo" },
    { rank: 4, title: "Short Guia Rápido de Áudio OBS", subs: 28, type: "Short" }
  ]
};