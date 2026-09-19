import React, { useState } from 'react';
import { tiktokMockData } from '../data/tiktokMockData';
import MetricCard from '../components/dashboard/MetricCard';
import ProfileAvatar from '../components/shared/ProfileAvatar';
import {
  TikTokComparison
} from '../components/tiktok/TikTokPanels';

export default function TikTok() {
  const [period, setPeriod] = useState('30d');
  const data = tiktokMockData;

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
          <div className="page-header-strip" style={{ borderLeft: '4px solid #00F2FE', paddingLeft: '12px' }}>
            <h2 style={{ margin: 0, fontSize: '18px', fontWeight: '600', color: '#fff' }}>TikTok Analytics</h2>
            <p style={{ color: '#9898a6', margin: '4px 0 0 0', fontSize: '13px' }}>Acompanhe o desempenho, alcance e crescimento do seu perfil.</p>
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
          <MetricCard title="Visualizações de Vídeo" value="84,2 mil" variation="+22,4%" type="positive" />
          <MetricCard title="Novos Seguidores" value="+1,2 mil" variation="+31,8%" type="positive" />
          <MetricCard title="Curtidas" value="12,4 mil" variation="+15.2%" type="positive" />
          <MetricCard title="Comentários" value="842" variation="+9.4%" type="positive" />
          <MetricCard title="Compartilhamentos" value="1,8 mil" variation="+42.1%" type="positive" />
          <MetricCard title="Taxa de Conclusão" value="28,4%" variation="+3.1%" type="positive" />
        </div>

        {/* ROW 2: Comparação com Período Anterior */}
        <TikTokComparison current={data.summary} previous={data.previousPeriod} />

      </div>
    </div>
  );
}