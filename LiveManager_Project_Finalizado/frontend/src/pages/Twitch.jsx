import React, { useState } from 'react';
import { twitchMockData } from '../data/twitchMockData';
import MetricCard from '../components/dashboard/MetricCard';
import ProfileAvatar from '../components/shared/ProfileAvatar';
import {
  TwitchProfileCard,
  TwitchPeriodSummary,
  TwitchComparison,
  TwitchContentPerformance
} from '../components/twitch/TwitchPanels';

export default function Twitch() {
  const [period, setPeriod] = useState('30d');
  const data = twitchMockData;

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
          <div className="page-header-strip" style={{ borderLeft: '4px solid #9146FF', paddingLeft: '12px' }}>
            <h2 style={{ margin: 0, fontSize: '18px', fontWeight: '600', color: '#fff' }}>Twitch Analytics</h2>
            <p style={{ color: '#9898a6', margin: '4px 0 0 0', fontSize: '13px' }}>Acompanhe o engajamento, crescimento e receita da comunidade.</p>
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
          <TwitchProfileCard profile={data.profile} />
          
          <div className="kpi-grid">
            <MetricCard title="Visualizações" value="18,4 mil" variation="+12,4%" type="positive" />
            <MetricCard title="Espectadores Médios" value="8.7" variation="+8,2%" type="positive" />
            <MetricCard title="Pico de Espectadores" value="21" variation="+16,7%" type="positive" />
            <MetricCard title="Horas Transmitidas" value="42h 18min" variation="-5,1%" type="negative" />
            <MetricCard title="Novos Seguidores" value="+86" variation="+18,4%" type="positive" />
            <MetricCard title="Novos Inscritos" value="+24" variation="+14,2%" type="positive" />
          </div>
        </div>

        {/* ROW 2: Resumo do Período */}
        <TwitchPeriodSummary data={data.summary} community={data.community} />

        {/* ROW 3: Comparação com Período Anterior */}
        <TwitchComparison current={data.summary} previous={data.previousPeriod} />

        {/* ROW 4: Desempenho do Conteúdo */}
        <div className="grid-row" style={{ gridTemplateColumns: '1fr' }}>
          <TwitchContentPerformance content={data.contentPerformance} />
        </div>

      </div>
    </div>
  );
}