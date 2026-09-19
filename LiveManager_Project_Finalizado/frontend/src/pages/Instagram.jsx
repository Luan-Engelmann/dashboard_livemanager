import React, { useState } from 'react';
import { instagramMockData } from '../data/instagramMockData';
import MetricCard from '../components/dashboard/MetricCard';
import ProfileAvatar from '../components/shared/ProfileAvatar';
import {
  InstagramProfileCard,
  InstagramPeriodSummary,
  InstagramComparison,
  InstagramFormatsVisual,
  InstagramFormatPerformance,
  InstagramFeaturedContent,
  InstagramGrowingContent,
  InstagramCommunityGrowth,
  InstagramBestTimes,
  InstagramInteractionsBreakdown
} from '../components/instagram/InstagramPanels';

export default function Instagram() {
  const [period, setPeriod] = useState('30d');
  const data = instagramMockData;

  return (
    <div className="analytics-page">
      
      {/* HEADER COM A LOGO FIXA DA PASTA PUBLIC (/Logo.png) */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <ProfileAvatar 
            src="/Logo.png" 
            alt="OtaldoTroia Logo" 
            size={48} 
            gradientBorder={true} 
          />
          <div className="page-header-strip" style={{ borderLeft: '4px solid #E1306C', paddingLeft: '12px' }}>
            <h2 style={{ margin: 0, fontSize: '18px', fontWeight: '600', color: '#fff' }}>Instagram Analytics</h2>
            <p style={{ color: '#9898a6', margin: '4px 0 0 0', fontSize: '13px' }}>Acompanhe o desempenho, alcance e interações do seu perfil.</p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px' }}>
          <select
            style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)', padding: '10px 16px', borderRadius: '10px', outline: 'none' }}
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
          >
            <option value="7d" style={{ background: '#0b1120' }}>Últimos 7 dias</option>
            <option value="30d" style={{ background: '#0b1120' }}>Últimos 30 dias</option>
            <option value="90d" style={{ background: '#0b1120' }}>Últimos 90 dias</option>
          </select>
        </div>
      </div>

      <div className="dashboard-main">
        
        {/* ROW 1: Perfil do Canal + KPIs */}
        <div className="grid-row" style={{ gridTemplateColumns: '1fr 4fr' }}>
          <InstagramProfileCard profile={data.profile} />
          
          <div className="kpi-grid">
            <MetricCard title="Visualizações" value="48,6 mil" variation="+14,2%" type="positive" />
            <MetricCard title="Novos Seguidores" value="+342" variation="+18,4%" type="positive" />
            <MetricCard title="Interações" value="5,8 mil" variation="+12,7%" type="positive" />
            <MetricCard title="Alcance" value="31,4 mil" variation="+9,8%" type="positive" />
            <MetricCard title="Comentários" value="428" variation="+6,4%" type="positive" />
            <MetricCard title="Compartilhamentos" value="1,2 mil" variation="+21,3%" type="positive" />
          </div>
        </div>

        {/* ROW 2: Resumo do Período */}
        <InstagramPeriodSummary data={data.summary} />

        {/* ROW 3: Comparação com Período Anterior */}
        <InstagramComparison current={data.summary} previous={data.previousPeriod} />

        {/* ROW 4: Visão de Formatos */}
        <div className="grid-row" style={{ gridTemplateColumns: '1fr 1.5fr' }}>
          <InstagramFormatsVisual formats={data.formats.comparison} />
          <InstagramFormatPerformance rows={data.formats.performance} />
        </div>

        {/* ROW 5: Ranking e Destaques */}
        <div className="grid-row" style={{ gridTemplateColumns: '1.5fr 1fr' }}>
          <InstagramFeaturedContent content={data.featuredContent} />
          <InstagramGrowingContent data={data.growingContent} />
        </div>

        {/* ROW 6: Horários, Comunidade e Interações */}
        <div className="grid-row" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <InstagramCommunityGrowth data={data.community} />
          <InstagramBestTimes data={data.bestTimes} />
          <InstagramInteractionsBreakdown data={data.interactionsBreakdown} />
        </div>

      </div>
    </div>
  );
}