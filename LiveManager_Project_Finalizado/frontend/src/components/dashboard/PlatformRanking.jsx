import React, { useState } from 'react';
import { getRanking, formatNumber, formatPercent } from '../../utils/dashboardUtils';

export default function PlatformRanking({ data }) {
  const [metric, setMetric] = useState('reach');
  const ranked = getRanking(data, metric);

  const formatValue = (val) => val === null ? 'N/D' : (metric === 'engagementRate' ? formatPercent(val) : formatNumber(val));

  return (
    <div className="premium-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
        <h3 style={{ margin: 0, color: '#fff', fontSize: '16px' }}>Ranking de Performance</h3>
        <select style={{ background: 'transparent', color: '#9898a6', border: 'none', outline: 'none', cursor: 'pointer', fontSize: '13px' }} value={metric} onChange={(e) => setMetric(e.target.value)}>
          <option value="views">Visualizações</option>
          <option value="reach">Alcance</option>
          <option value="impressions">Impressões</option>
          <option value="engagementRate">Engajamento</option>
          <option value="followersGained">Seguidores</option>
        </select>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {ranked.map((p, index) => {
          // O primeiro colocado recebe um fundo e borda super discretos, mas sem troféus
          const isFirst = index === 0 && p[metric] !== null;
          
          return (
            <div key={p.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', backgroundColor: isFirst ? 'rgba(255,255,255,0.03)' : 'transparent', border: isFirst ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent', borderRadius: '12px' }}>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: p[metric] === null ? '#636472' : (isFirst ? '#fff' : '#9898a6'), fontWeight: 'bold', width: '24px', textAlign: 'center' }}>
                  {index + 1}º
                </span>
                <span style={{ color: p[metric] === null ? '#636472' : '#e4e4e7', fontWeight: isFirst ? 'bold' : '500', fontSize: '14px' }}>
                  {p.name}
                </span>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                <span style={{ color: isFirst ? '#fff' : '#e4e4e7', fontWeight: 'bold', fontSize: '15px' }}>
                  {formatValue(p[metric])}
                </span>
              </div>
              
            </div>
          );
        })}
      </div>
    </div>
  );
}