import React, { useState } from 'react';
import { youtubeMockData } from '../data/youtubeMockData';
import MetricCard from '../components/dashboard/MetricCard';
import BrandLogo from '../components/common/BrandLogo';
import {
  YouTubeChannelCard,
  YouTubePeriodSummary,
  YouTubeComparison,
  FormatComparisonTable,
  BestPublishingTimes,
  CTRRetentionMatrix,
  TrafficSourcesList,
  GrowingContentCard,
  SubscribedContentRanking
} from '../components/youtube/YouTubePanels';

export default function YouTube() {
  const [period, setPeriod] = useState('30d');
  const data = youtubeMockData;

  return (
    <div className="analytics-page">
      
      {/* HEADER DA PÁGINA COM LOGO OFICIAL */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap', gap: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <BrandLogo size={52} />
          <div className="page-header-strip" style={{ borderLeft: '4px solid #ff0000', marginBottom: 0 }}>
            <h2 style={{ margin: 0, fontSize: '18px', fontWeight: '600' }}>Métricas de Desempenho</h2>
            <p style={{ color: '#9898a6', margin: '4px 0 0 0', fontSize: '13px' }}>Análise detalhada de retenção e atração do canal.</p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <select
            style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)', padding: '10px 16px', borderRadius: '10px', outline: 'none' }}
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
          >
            <option value="30d">Últimos 30 dias</option>
            <option value="7d">Últimos 7 dias</option>
            <option value="90d">Últimos 90 dias</option>
          </select>
        </div>
      </div>

      <div className="dashboard-main">
        
        {/* ROW 1: Perfil do Canal + KPIs */}
        <div className="grid-row" style={{ gridTemplateColumns: '1fr 4fr' }}>
          <YouTubeChannelCard channel={data.channel} />
          
          <div className="kpi-grid">
            <MetricCard title="Visualizações" value="128,4 mil" variation="+14,8%" type="positive" />
            <MetricCard title="Tempo de Exibição" value="1,3 mil h" variation="+10,1%" type="positive" />
            <MetricCard title="Novos Inscritos" value="+286" variation="+18,1%" type="positive" />
            <MetricCard title="CTR Médio" value="6,8%" variation="+0,6%" type="positive" />
            <MetricCard title="Retenção Média" value="47,3%" variation="+2,5%" type="positive" />
            <MetricCard title="Duração Média" value="8 min 42 s" type="neutral" />
          </div>
        </div>

        {/* ROW 2: Resumo do Período */}
        <YouTubePeriodSummary data={data} />

        {/* ROW 3: Comparação com Período Anterior */}
        <YouTubeComparison current={data.summary} previous={data.previousPeriod} />

        {/* ROW 4: Vídeos x Shorts + Melhores Horários */}
        <div className="grid-row" style={{ gridTemplateColumns: '1.5fr 1fr' }}>
          <FormatComparisonTable rows={data.formatComparison} />
          <BestPublishingTimes data={data.bestPublishingTimes} />
        </div>

        {/* ROW 5: Matriz CTR x Retenção + Origem do Tráfego */}
        <div className="grid-row" style={{ gridTemplateColumns: '1.5fr 1fr' }}>
          <CTRRetentionMatrix items={data.ctrRetentionMatrix} />
          <TrafficSourcesList sources={data.trafficSources} />
        </div>

        {/* ROW 6: Conteúdo em Crescimento + Conteúdos que Mais Geraram Inscritos */}
        <div className="grid-row" style={{ gridTemplateColumns: '1fr 1.5fr' }}>
          <GrowingContentCard content={data.growingContent} />
          <SubscribedContentRanking list={data.topSubscribedContent} />
        </div>

      </div>
    </div>
  );
}