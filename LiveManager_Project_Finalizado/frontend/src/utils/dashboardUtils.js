// Formata números grandes (ex: 124000 -> 124,8 mil)
export const formatNumber = (num) => {
  if (num === null || num === undefined) return "N/D";
  if (num >= 1000000) return (num / 1000000).toFixed(1).replace('.', ',') + " mi";
  if (num >= 1000) return (num / 1000).toFixed(1).replace('.', ',') + " mil";
  return num.toString();
};

// Formata porcentagens (ex: 8.7 -> 8,7%)
export const formatPercent = (num) => {
  if (num === null || num === undefined) return "N/D";
  return num.toFixed(1).replace('.', ',') + "%";
};

// Soma os valores ignorando nulls
export const calculateTotal = (data, metric) => {
  return Object.values(data).reduce((acc, platform) => {
    return acc + (platform[metric] || 0);
  }, 0);
};

// Calcula média ignorando plataformas sem o dado (ex: Engajamento)
export const calculateAverage = (data, metric) => {
  const validPlatforms = Object.values(data).filter(p => p[metric] !== null && p[metric] !== undefined);
  if (validPlatforms.length === 0) return null;
  const total = validPlatforms.reduce((acc, p) => acc + p[metric], 0);
  return total / validPlatforms.length;
};

// Descobre quem foi a melhor plataforma da métrica, ignorando nulls
export const getBestPlatform = (data, metric) => {
  let best = null;
  let maxValue = -1;

  Object.values(data).forEach(platform => {
    if (platform[metric] !== null && platform[metric] > maxValue) {
      maxValue = platform[metric];
      best = platform;
    }
  });
  return best;
};

// Ordena o ranking jogando N/D pro final
export const getRanking = (data, metric) => {
  return Object.values(data).sort((a, b) => {
    if (a[metric] === null) return 1;
    if (b[metric] === null) return -1;
    return b[metric] - a[metric];
  });
};

// Retorna o conteúdo com mais visualizações
export const getBestContent = (topContentData) => {
  if (!topContentData || topContentData.length === 0) return null;
  return [...topContentData].sort((a, b) => b.views - a.views)[0];
};

// Gera frases de insights automáticas baseadas nos dados reais (mockados)
export const generateInsights = (platformData) => {
  const bestViews = getBestPlatform(platformData, 'views');
  const bestReach = getBestPlatform(platformData, 'reach');
  const insights = [];
  
  if (bestViews) insights.push(`${bestViews.name} liderou o volume de visualizações gerais no período.`);
  if (bestReach && bestReach.name !== bestViews?.name) {
    insights.push(`${bestReach.name} apresentou o melhor desempenho em contas únicas alcançadas.`);
  } else {
    insights.push(`O engajamento médio manteve-se consistente nas principais plataformas.`);
  }
  insights.push(`Conteúdos em formato de vídeo curto continuam gerando a maior retenção.`);
  
  return insights;
};