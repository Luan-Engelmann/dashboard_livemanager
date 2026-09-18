export const twitchMockData = {
  period: "30d",
  periodLabel: "Últimos 30 dias",
  previousPeriodLabel: "30 dias anteriores",
  summary: {
    views: 18400,
    avgViewers: 8.7,
    peakViewers: 21,
    streamHours: "42h 18min",
    newFollowers: 86,
    newSubs: 24,
    totalStreams: 12,
    watchTimeMin: 2.18, // milhões
    avgWatchTime: 34
  },
  previousPeriod: {
    views: 16400,
    avgViewers: 8.0,
    streamHours: "44h 35min",
    newFollowers: 73,
    newSubs: 21
  },
  contentPerformance: [
    { id: 1, name: "Ghost of Tsushima", streams: 6, hours: "21h", avgViewers: 9.8, peak: 18, followers: "+42", bestAvg: true, bestPeak: true },
    { id: 2, name: "Far Cry 4", streams: 4, hours: "14h", avgViewers: 7.1, peak: 15, followers: "+28", bestAvg: false, bestPeak: false },
    { id: 3, name: "Far Cry 5", streams: 2, hours: "7h", avgViewers: 6.2, peak: 11, followers: "+16", bestAvg: false, bestPeak: false }
  ],
  bestTimes: [
    { rank: 1, day: "Sábado", time: "22h", type: "Melhor janela", window: "21h às 00h" },
    { rank: 2, day: "Domingo", time: "20h", type: "Forte", window: "19h às 22h" },
    { rank: 3, day: "Sexta", time: "22h", type: "Forte", window: "21h às 23h" }
  ],
  growing: {
    title: "Ghost of Tsushima",
    metric: "+38,4%",
    label: "espectadores médios",
    currentAvg: 9.8,
    followers: 42
  },
  community: {
    followersPerLive: 7.2,
    subsPerLive: 2.0
  },
  twitchRevenue: {
    currency: "USD",
    total: 486.70,
    subscriptions: 300.00,
    bits: 186.70,
    growth: "+11,8%"
  },
  livePix: {
    currency: "BRL",
    total: 200.00,
    donations: 23,
    averageDonation: 8.70,
    largestDonation: 50.00
  }
};