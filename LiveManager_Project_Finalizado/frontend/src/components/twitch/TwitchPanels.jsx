import React from 'react';
import { formatNumber } from '../../utils/dashboardUtils';
import ProfileAvatar from '../shared/ProfileAvatar';

export function TwitchProfileCard({ profile }) {
  if (!profile) return null;
  return (
    <div className="premium-card" style={{ gap: '16px', alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}>
      <ProfileAvatar 
        src={profile.profilePicture} 
        alt={profile.name} 
        size={68} 
        gradientBorder={true} 
      />
      <div>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '700', color: '#fff' }}>{profile.name}</h3>
        <span style={{ color: '#9146FF', fontSize: '12px', fontWeight: '500' }}>@{profile.username}</span>
      </div>
      <div style={{ background: 'rgba(145, 70, 255, 0.1)', border: '1px solid rgba(145, 70, 255, 0.2)', padding: '6px 16px', borderRadius: '16px', marginTop: '4px' }}>
        <span style={{ fontSize: '12px', color: '#fff', fontWeight: '600' }}>{formatNumber(profile.followers)} seguidores</span>
      </div>
    </div>
  );
}

export function TwitchPeriodSummary({ data }) {
  return (
    <div className="premium-card" style={{ gap: '16px', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
      <div style={{ flex: '1', minWidth: '300px' }}>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', color: '#fff' }}>Resumo do Período</h3>
        <p style={{ margin: 0, color: '#9898a6', fontSize: '14px', lineHeight: '1.6' }}>
          Foram realizadas <strong>{data.totalStreams} lives</strong>, totalizando <strong>{data.streamHours} transmitidas</strong>. 
          O canal alcançou <strong>{data.avgViewers} espectadores médios</strong>, atingiu pico de <strong>{data.peakViewers} espectadores</strong> 
          e conquistou <strong>{data.newFollowers} novos seguidores</strong> no período.
        </p>
      </div>
      <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
        <div><strong style={{ fontSize: '20px', color: '#fff', display: 'block' }}>{data.totalStreams}</strong><span style={{ fontSize: '12px', color: '#636472' }}>Lives</span></div>
        <div><strong style={{ fontSize: '20px', color: '#fff', display: 'block' }}>{data.streamHours.split(' ')[0]}</strong><span style={{ fontSize: '12px', color: '#636472' }}>Transmitidas</span></div>
        <div><strong style={{ fontSize: '20px', color: '#fff', display: 'block' }}>+{data.newFollowers}</strong><span style={{ fontSize: '12px', color: '#636472' }}>Seguidores</span></div>
        <div><strong style={{ fontSize: '20px', color: '#fff', display: 'block' }}>+{data.newSubs}</strong><span style={{ fontSize: '12px', color: '#636472' }}>Inscritos</span></div>
      </div>
    </div>
  );
}

export function TwitchComparison({ current, previous }) {
  return (
    <div className="premium-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
        <h3 style={{ margin: 0, fontSize: '16px', color: '#fff' }}>Comparação com Período Anterior</h3>
        <span style={{ fontSize: '12px', color: '#636472' }}>Compara os últimos 30 dias com os 30 dias imediatamente anteriores</span>
      </div>
      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <ComparisonItem label="Visualizações" current={`${formatNumber(current.views)}`} prev={`${formatNumber(previous.views)}`} trend="+12,4%" />
        <ComparisonItem label="Espectadores Médios" current={current.avgViewers} prev={previous.avgViewers} trend="+8,2%" />
        <ComparisonItem label="Horas Transmitidas" current={current.streamHours} prev={previous.streamHours} trend="-5,1%" negative />
        <ComparisonItem label="Seguidores" current={`+${current.newFollowers}`} prev={`+${previous.newFollowers}`} trend="+18,4%" />
        <ComparisonItem label="Inscritos" current={`+${current.newSubs}`} prev={`+${previous.newSubs}`} trend="+14,2%" />
      </div>
    </div>
  );
}

function ComparisonItem({ label, current, prev, trend, negative }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '120px' }}>
      <span style={{ color: '#9898a6', fontSize: '12px' }}>{label}</span>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
        <span style={{ color: '#fff', fontSize: '18px', fontWeight: '600' }}>{current}</span>
        <span style={{ color: negative ? '#ef4444' : '#4ade80', fontSize: '12px', fontWeight: '500' }}>{trend}</span>
      </div>
      <span style={{ color: '#636472', fontSize: '11px' }}>Anterior: {prev}</span>
    </div>
  );
}

export function TwitchContentPerformance({ content }) {
  return (
    <div className="premium-card">
      <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', color: '#fff' }}>Desempenho por Conteúdo</h3>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#636472', fontSize: '12px' }}>
              <th style={{ padding: '12px 0', fontWeight: '500' }}>Conteúdo</th>
              <th style={{ padding: '12px', fontWeight: '500' }}>Lives</th>
              <th style={{ padding: '12px', fontWeight: '500' }}>Horas</th>
              <th style={{ padding: '12px', fontWeight: '500' }}>Média Espect.</th>
              <th style={{ padding: '12px', fontWeight: '500' }}>Pico</th>
              <th style={{ padding: '12px', fontWeight: '500' }}>Seguidores</th>
            </tr>
          </thead>
          <tbody>
            {content.map(item => (
              <tr key={item.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.02)', color: '#e4e4e7', fontSize: '13px' }}>
                <td style={{ padding: '16px 0', fontWeight: '500' }}>{item.name}</td>
                <td style={{ padding: '16px' }}>{item.streams}</td>
                <td style={{ padding: '16px' }}>{item.hours}</td>
                <td style={{ padding: '16px' }}>
                  {item.avgViewers}
                  {item.bestAvg && <span style={{ marginLeft: '8px', background: 'rgba(145, 70, 255, 0.15)', color: '#b685ff', fontSize: '10px', padding: '2px 6px', borderRadius: '4px' }}>Melhor</span>}
                </td>
                <td style={{ padding: '16px' }}>
                  {item.peak}
                  {item.bestPeak && <span style={{ marginLeft: '8px', background: 'rgba(145, 70, 255, 0.15)', color: '#b685ff', fontSize: '10px', padding: '2px 6px', borderRadius: '4px' }}>Melhor</span>}
                </td>
                <td style={{ padding: '16px', color: '#4ade80' }}>{item.followers}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}