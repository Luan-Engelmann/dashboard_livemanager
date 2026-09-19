// Retorna os conteúdos ordenados por visualizações
export function getTopPerformingContent(content = [], limit = 5) {
  return [...content].sort((a, b) => b.views - a.views).slice(0, limit);
}

// Retorna o conteúdo #1 em visualizações
export function getFeaturedContent(content = []) {
  return getTopPerformingContent(content, 1)[0] || null;
}

// Retorna os conteúdos ordenados por taxa de crescimento (tração)
export function getGrowingContent(content = [], limit = 3) {
  return [...content].sort((a, b) => b.growthRate - a.growthRate).slice(0, limit);
}

// Calcula métricas da comunidade baseadas nos dados do período
export function calculateCommunityMetrics(newFollowers, postsCount, totalViews) {
  const followersPerPost = postsCount > 0 ? (newFollowers / postsCount).toFixed(1) : 0;
  const conversionRate = totalViews > 0 ? ((newFollowers / totalViews) * 100).toFixed(2) : 0;
  
  return {
    followersPerPost,
    conversionRate
  };
}