export function getGrowingContent(topVideos = [], topShorts = []) {
  const bestVideo = topVideos[0] || {};
  return {
    title: bestVideo.title || "Guia Definitivo de Hardware para OBS",
    growthRate: 34.8,
    views: bestVideo.views || 12400,
    subsGained: bestVideo.subsGained || 112
  };
}