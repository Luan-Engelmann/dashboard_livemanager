import React, { useState } from 'react';
import { platformData, trendData, topContentData } from '../data/dashboardMockData';
import { calculateTotal, calculateAverage, formatNumber, formatPercent } from '../utils/dashboardUtils';

import MetricCard from '../components/dashboard/MetricCard';
import PeriodSummary from '../components/dashboard/PeriodSummary';
import PlatformComparisonChart from '../components/dashboard/PlatformComparisonChart';
import MetricHighlights from '../components/dashboard/MetricHighlights';
import PerformanceTrendChart from '../components/dashboard/PerformanceTrendChart';
import PlatformDistribution from '../components/dashboard/PlatformDistribution';
import PlatformRanking from '../components/dashboard/PlatformRanking';
import BestContentCard from '../components/dashboard/BestContentCard';
import PlatformSummaryCard from '../components/dashboard/PlatformSummaryCard';
import InsightsSection from '../components/dashboard/InsightsSection';
import TopContentTable from '../components/dashboard/TopContentTable';

export default function Dashboard() {
  const [period, setPeriod] = useState('30d');
  const [platformFilter, setPlatformFilter] = useState('all');

  const totalViews = calculateTotal(platformData, 'views');
  const totalReach = calculateTotal(platformData, 'reach');
  const totalImpressions = calculateTotal(platformData, 'impressions');
  const avgEngagement = calculateAverage(platformData, 'engagementRate');
  const totalFollowers = calculateTotal(platformData, 'followersGained');

  return (
    <div className="dashboard-bg" style={{ padding: '32px 4%', color: '#fff' }}>
      
      {/* HEADER & FILTROS */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <h1 style={{ margin: 0, fontSize: '26px', fontWeight: '700', letterSpacing: '-0.5px' }}>Visão Geral</h1>
          <p style={{ color: '#9898a6', margin: '6px 0 0 0', fontSize: '14px' }}>Acompanhe e compare o desempenho dos seus conteúdos em todas as plataformas.</p>
        </div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <select style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)', padding: '10px 16px', borderRadius: '10px', outline: 'none', cursor: 'pointer', fontSize: '13px' }} value={period} onChange={(e) => setPeriod(e.target.value)}>
            <option value="7d">Últimos 7 dias</option>
            <option value="30d">Últimos 30 dias</option>
            <option value="90d">Últimos 90 dias</option>
            <option value="year">Este ano</option>
          </select>
          <select style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)', padding: '10px 16px', borderRadius: '10px', outline: 'none', cursor: 'pointer', fontSize: '13px' }} value={platformFilter} onChange={(e) => setPlatformFilter(e.target.value)}>
            <option value="all">Todas as plataformas</option>
            <option value="instagram">Instagram</option>
            <option value="tiktok">TikTok</option>
            <option value="youtube">YouTube</option>
            <option value="twitch">Twitch</option>
          </select>
        </div>
      </div>

      {/* CONTAINER PRINCIPAL DE LINHAS (GAP 24px) */}
      <div className="dashboard-main">

        {/* Linha 1: CARDS GERAIS */}
        <div className="grid-row grid-5">
          <MetricCard title="Visualizações Totais" value={formatNumber(totalViews)} variation="+18,5%" type="positive" />
          <MetricCard title="Alcance Total" value={formatNumber(totalReach)} variation="+5,2%" type="positive" tooltip="Soma das plataformas com alcance." />
          <MetricCard title="Impressões" value={formatNumber(totalImpressions)} variation="-2,1%" type="negative" />
          <MetricCard title="Engajamento Médio" value={formatPercent(avgEngagement)} variation="+1,2%" type="positive" tooltip="Média calculada entre plataformas." />
          <MetricCard title="Novos Seguidores" value={`+${formatNumber(totalFollowers)}`} variation="+8,4%" type="positive" />
        </div>

        {/* Linha 2: RESUMO INTELIGENTE */}
        <PeriodSummary data={platformData} />

        {/* Linha 3: COMPARAÇÃO & DESTAQUES */}
        <div className="grid-row grid-charts">
          <PlatformComparisonChart data={platformData} />
          <MetricHighlights data={platformData} />
        </div>

        {/* Linha 4: EVOLUÇÃO */}
        <div className="grid-row" style={{ gridTemplateColumns: '1fr' }}>
          <PerformanceTrendChart trendData={trendData} />
        </div>

        {/* Linha 5: DISTRIBUIÇÃO, RANKING E MELHOR CONTEÚDO */}
        <div className="grid-row grid-3">
          <PlatformDistribution data={platformData} />
          <PlatformRanking data={platformData} />
          <BestContentCard topContentData={topContentData} />
        </div>

        {/* Linha 6: INDICADORES INDIVIDUAIS */}
        <h3 style={{ margin: '16px 0 0 0', fontSize: '20px', color: '#fff' }}>Indicadores por Plataforma</h3>
        <div className="grid-row grid-4">
          {Object.values(platformData).map(platform => (
            <PlatformSummaryCard key={platform.name} platform={platform} />
          ))}
        </div>

        {/* Linha 7: INSIGHTS E TABELA DE CONTEÚDO */}
        <div className="grid-row grid-bottom">
          <InsightsSection data={platformData} />
          <TopContentTable topContentData={topContentData} />
        </div>

      </div>
    </div>
  );
}