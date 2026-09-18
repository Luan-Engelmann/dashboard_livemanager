import React, { useState } from 'react';
import { twitchMockData } from '../data/twitchMockData';
import { formatNumber } from '../utils/dashboardUtils';
import MetricCard from '../components/dashboard/MetricCard';
import BrandLogo from '../components/common/BrandLogo';
import { TwitchPeriodSummary, TwitchComparison, TwitchContentPerformance } from '../components/twitch/TwitchPanels';

export default function Twitch() {
  const [period, setPeriod] = useState('30d');
  const data = twitchMockData;

  const formatUSD = (val) => `$ ${val.toFixed(2).replace('.', ',')} USD`;
  const formatBRL = (val) => `R$ ${val.toFixed(2).replace('.', ',')}`;

  return (
    <div className="analytics-page">
      
      {/* HEADER LOCAL COM A LOGO OFICIAL */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap', gap: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <BrandLogo size={52} />
          <div className="page-header-strip" style={{ borderLeft: '4px solid #9146FF', marginBottom: 0 }}>
            <h2 style={{ margin: 0, fontSize: '18px', fontWeight: '600' }}>Métricas essenciais para analisar suas transmissões</h2>
            <p style={{ color: '#9898a6', margin: '4px 0 0 0', fontSize: '13px' }}>Acompanhe o engajamento, crescimento e receita da comunidade.</p>
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
            <option value="year">Este ano</option>
          </select>
        </div>
      </div>

      <div className="dashboard-main">
        
        {/* ROW 1: KPIs Principais */}
        <div className="kpi-grid">
          <MetricCard title="Visualizações" value={formatNumber(data.summary.views)} variation="+12,4%" type="positive" />
          <MetricCard title="Espectadores Médios" value={data.summary.avgViewers} variation="+8,2%" type="positive" />
          <MetricCard title="Pico de Espectadores" value={data.summary.peakViewers} variation="+16,7%" type="positive" />
          <MetricCard title="Horas Transmitidas" value={data.summary.streamHours} variation="-5,1%" type="negative" />
          <MetricCard title="Novos Seguidores" value={`+${data.summary.newFollowers}`} variation="+18,4%" type="positive" />
          <MetricCard title="Novos Inscritos" value={`+${data.summary.newSubs}`} variation="+14,2%" type="positive" />
        </div>

        {/* ROW 2 & 3: Resumo e Comparação */}
        <TwitchPeriodSummary data={data.summary} />
        <TwitchComparison current={data.summary} previous={data.previousPeriod} />

        {/* ROW 4: Desempenho e Horários */}
        <div className="grid-row" style={{ gridTemplateColumns: '2fr 1fr' }}>
          <TwitchContentPerformance content={data.contentPerformance} />
          
          <div className="premium-card">
            <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', color: '#fff' }}>Melhores horários</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {data.bestTimes.map((time, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingBottom: index !== 2 ? '16px' : '0', borderBottom: index !== 2 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '4px', background: index === 0 ? 'rgba(145, 70, 255, 0.2)' : 'rgba(255,255,255,0.05)', color: index === 0 ? '#b685ff' : '#636472', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold' }}>
                    {time.rank}º
                  </div>
                  <div style={{ flex: '1' }}>
                    <div style={{ color: '#fff', fontSize: '14px', fontWeight: '500' }}>{time.day} — {time.time}</div>
                    <div style={{ color: '#636472', fontSize: '12px' }}>{time.window}</div>
                  </div>
                  <span style={{ fontSize: '11px', color: index === 0 ? '#b685ff' : '#9898a6' }}>{time.type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ROW 5: Crescimento, Comunidade e Watch Time */}
        <div className="grid-row" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          
          {/* Conteúdo em Crescimento */}
          <div className="premium-card" style={{ justifyContent: 'center' }}>
             <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', color: '#fff' }}>Conteúdo em Crescimento</h3>
             <div style={{ padding: '20px', border: '1px solid rgba(145, 70, 255, 0.3)', borderRadius: '12px', background: 'rgba(145, 70, 255, 0.05)' }}>
               <span style={{ display: 'inline-block', background: '#9146FF', color: '#fff', fontSize: '11px', fontWeight: 'bold', padding: '4px 10px', borderRadius: '12px', marginBottom: '12px' }}>Em alta</span>
               <h4 style={{ margin: '0 0 8px 0', fontSize: '17px', color: '#fff' }}>{data.growing.title}</h4>
               <p style={{ margin: '0 0 16px 0', color: '#4ade80', fontWeight: 'bold', fontSize: '20px' }}>{data.growing.metric} <span style={{fontSize: '12px', fontWeight: 'normal', color: '#9898a6'}}>{data.growing.label}</span></p>
               <div style={{ display: 'flex', gap: '20px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                 <span style={{ color: '#e4e4e7', fontSize: '13px' }}>Média: <strong>{data.growing.currentAvg}</strong></span>
                 <span style={{ color: '#e4e4e7', fontSize: '13px' }}><strong>+{data.growing.followers}</strong> seguidores</span>
               </div>
             </div>
          </div>

          {/* Crescimento da Comunidade */}
          <div className="premium-card">
            <h3 style={{ margin: '0 0 24px 0', fontSize: '16px', color: '#fff' }}>Crescimento da Comunidade</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ color: '#9898a6', fontSize: '13px', display: 'block' }}>Novos seguidores</span>
                  <strong style={{ color: '#fff', fontSize: '24px' }}>+{data.summary.newFollowers}</strong>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ color: '#636472', fontSize: '12px', display: 'block' }}>Seguidores por live</span>
                  <span style={{ color: '#4ade80', fontSize: '14px', fontWeight: '500' }}>+{data.community.followersPerLive}</span>
                </div>
              </div>
              <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)' }}></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ color: '#9898a6', fontSize: '13px', display: 'block' }}>Novos inscritos</span>
                  <strong style={{ color: '#fff', fontSize: '24px' }}>+{data.summary.newSubs}</strong>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ color: '#636472', fontSize: '12px', display: 'block' }}>Inscritos por live</span>
                  <span style={{ color: '#4ade80', fontSize: '14px', fontWeight: '500' }}>+{data.community.subsPerLive}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tempo Assistido */}
          <div className="premium-card">
            <h3 style={{ margin: '0 0 24px 0', fontSize: '16px', color: '#fff' }}>Tempo Assistido</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <strong style={{ fontSize: '32px', color: '#fff', display: 'block' }}>{data.summary.watchTimeMin} <span style={{ fontSize: '16px', color: '#9898a6', fontWeight: 'normal' }}>milhões min</span></strong>
                <span style={{ fontSize: '13px', color: '#4ade80' }}>Volume total retido no canal</span>
              </div>
              <div style={{ padding: '16px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#9898a6', fontSize: '13px' }}>Tempo médio assistido</span>
                <strong style={{ color: '#fff', fontSize: '16px' }}>{data.summary.avgWatchTime} min</strong>
              </div>
            </div>
          </div>

        </div>

        {/* ROW 6: Receita Twitch (USD) e LivePix (BRL) */}
        <div className="grid-row" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }}>
          
          {/* Receita Gerada na Twitch (USD) */}
          <div className="premium-card">
            <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', color: '#fff' }}>Receita Gerada na Twitch</h3>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '12px', marginBottom: '24px' }}>
              <span style={{ fontSize: '32px', fontWeight: 'bold', color: '#fff', lineHeight: '1' }}>
                {formatUSD(data.twitchRevenue.total)}
              </span>
              <span style={{ color: '#4ade80', fontSize: '14px', fontWeight: '500', marginBottom: '4px' }}>
                {data.twitchRevenue.growth} vs. período anterior
              </span>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 16px', background: 'rgba(145, 70, 255, 0.05)', border: '1px solid rgba(145, 70, 255, 0.2)', borderRadius: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#9146FF' }}></div>
                  <span style={{ color: '#e4e4e7', fontSize: '14px' }}>Inscrições</span>
                </div>
                <strong style={{ color: '#fff', fontSize: '14px' }}>{formatUSD(data.twitchRevenue.subscriptions)}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 16px', background: 'rgba(145, 70, 255, 0.05)', border: '1px solid rgba(145, 70, 255, 0.2)', borderRadius: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#b685ff' }}></div>
                  <span style={{ color: '#e4e4e7', fontSize: '14px' }}>Bits</span>
                </div>
                <strong style={{ color: '#fff', fontSize: '14px' }}>{formatUSD(data.twitchRevenue.bits)}</strong>
              </div>
            </div>
          </div>

          {/* Detalhes LivePix (BRL) */}
          <div className="premium-card">
            <h3 style={{ margin: '0 0 24px 0', fontSize: '16px', color: '#fff' }}>Detalhes LivePix</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <div>
                <span style={{ color: '#9898a6', fontSize: '13px', display: 'block', marginBottom: '4px' }}>Total Arrecadado</span>
                <strong style={{ color: '#00f2fe', fontSize: '24px' }}>{formatBRL(data.livePix.total)}</strong>
              </div>
              <div>
                <span style={{ color: '#9898a6', fontSize: '13px', display: 'block', marginBottom: '4px' }}>Nº de Doações</span>
                <strong style={{ color: '#fff', fontSize: '24px' }}>{data.livePix.donations}</strong>
              </div>
              <div>
                <span style={{ color: '#9898a6', fontSize: '13px', display: 'block', marginBottom: '4px' }}>Média por Doação</span>
                <strong style={{ color: '#fff', fontSize: '20px' }}>{formatBRL(data.livePix.averageDonation)}</strong>
              </div>
              <div>
                <span style={{ color: '#9898a6', fontSize: '13px', display: 'block', marginBottom: '4px' }}>Maior Doação</span>
                <strong style={{ color: '#fff', fontSize: '20px' }}>{formatBRL(data.livePix.largestDonation)}</strong>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}