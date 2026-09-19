import React, { useState } from 'react';
import { youtubeMockData } from '../data/youtubeMockData';
import MetricCard from '../components/dashboard/MetricCard';
import ProfileAvatar from '../components/shared/ProfileAvatar';
import {
  YouTubePeriodSummary,
  YouTubeComparison
} from '../components/youtube/YouTubePanels';

export default function YouTube() {
  const [period, setPeriod] = useState('30d');
  const data = youtubeMockData;

  return (
    <div className="analytics-page">
      
      {/* HEADER COM A LOGO FIXA DA PASTA PUBLIC E O MESMO VISUAL */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <ProfileAvatar 
            src="/Logo.png" 
            alt="OtaldoTroia Logo" 
            size={48} 
            gradientBorder={true} 
          />
          <div className="page-header-strip" style={{ borderLeft: '4px solid #FF0000', paddingLeft: '12px' }}>
            <h2 style={{ margin: 0, fontSize: '18px', fontWeight: '600', color: '#fff' }}>YouTube Analytics</h2>
            <p style={{ color: '#9898a6', margin: '4px 0 0 0', fontSize: '13px' }}>Acompanhe o desempenho, visualizações e retenção do canal.</p>
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
        
        {/* ROW 1: KPIs do Canal */}
        <div className="kpi-grid" style={{ marginBottom: '24px' }}>
          <MetricCard title="Visualizações" value="124,5 mil" variation="+18.4%" type="positive" />
          <MetricCard title="Tempo de Exibição" value="4,8 mil h" variation="+22.1%" type="positive" />
          <MetricCard title="Novos Inscritos" value="+1,4 mil" variation="+15.6%" type="positive" />
          <MetricCard title="Receita Estimada" value="R$ 1.420" variation="+8.9%" type="positive" />
          <MetricCard title="CTR Médio" value="6.8%" variation="+1.2%" type="positive" />
          <MetricCard title="Duração Média" value="4m 32s" variation="+5.4%" type="positive" />
        </div>

        {/* ROW 2: Resumo do Período */}
        <YouTubePeriodSummary data={data.summary} />

        {/* ROW 3: Comparação com Período Anterior */}
        <YouTubeComparison current={data.summary} previous={data.previousPeriod} />

      </div>
    </div>
  );
}