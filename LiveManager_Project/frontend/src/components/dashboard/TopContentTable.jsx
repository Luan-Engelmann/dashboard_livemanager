import React from 'react';
import { formatNumber, formatPercent } from '../../utils/dashboardUtils';

export default function TopContentTable({ topContentData }) {
  const thStyle = { textAlign: 'left', padding: '12px', color: '#9898a6', fontWeight: '500', fontSize: '13px', borderBottom: '1px solid rgba(255,255,255,0.1)' };
  const tdStyle = { padding: '12px', color: '#fff', fontSize: '14px', borderBottom: '1px solid rgba(255,255,255,0.05)' };

  return (
    <div style={{ backgroundColor: '#12131a', padding: '24px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', overflowX: 'auto' }}>
      <h3 style={{ margin: '0 0 20px 0', color: '#fff', fontSize: '18px' }}>Conteúdos com Melhor Desempenho</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '700px' }}>
        <thead>
          <tr>
            <th style={thStyle}>Conteúdo</th>
            <th style={thStyle}>Plataforma</th>
            <th style={thStyle}>Views</th>
            <th style={thStyle}>Alcance</th>
            <th style={thStyle}>Impressões</th>
            <th style={thStyle}>Engajamento</th>
          </tr>
        </thead>
        <tbody>
          {topContentData.map(content => (
            <tr key={content.id} style={{ transition: 'background 0.2s' }} onMouseOver={e => e.currentTarget.style.backgroundColor = '#181922'} onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}>
              <td style={{...tdStyle, fontWeight: '600'}}>{content.title}</td>
              <td style={tdStyle}>{content.platform}</td>
              <td style={tdStyle}>{formatNumber(content.views)}</td>
              <td style={tdStyle}>{content.reach ? formatNumber(content.reach) : '—'}</td>
              <td style={tdStyle}>{content.impressions ? formatNumber(content.impressions) : '—'}</td>
              <td style={tdStyle}>{content.engagementRate ? formatPercent(content.engagementRate) : '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}