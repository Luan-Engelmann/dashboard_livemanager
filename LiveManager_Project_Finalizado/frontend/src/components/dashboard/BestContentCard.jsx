import React from 'react';
import { getBestContent, formatNumber, formatPercent } from '../../utils/dashboardUtils';
import { PlayCircle } from 'lucide-react';

export default function BestContentCard({ topContentData }) {
  const best = getBestContent(topContentData);
  if (!best) return null;

  return (
    <div className="premium-card">
      <h3 style={{ margin: '0 0 20px 0', fontSize: '16px', color: '#fff' }}>Melhor Conteúdo</h3>
      
      <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
        <div style={{ width: '60px', height: '60px', backgroundColor: '#181922', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <PlayCircle size={28} color="#7657ff" />
        </div>
        <div>
          <h4 style={{ margin: '0 0 4px 0', color: '#fff', fontSize: '15px' }}>{best.title}</h4>
          <span style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: '4px', fontSize: '11px', color: '#9898a6', marginRight: '8px' }}>{best.platform}</span>
          <span style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: '4px', fontSize: '11px', color: '#9898a6' }}>{best.type}</span>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: '#9898a6', fontSize: '13px' }}>Visualizações</span>
          <strong style={{ color: '#fff', fontSize: '14px' }}>{formatNumber(best.views)}</strong>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: '#9898a6', fontSize: '13px' }}>Alcance</span>
          <strong style={{ color: '#fff', fontSize: '14px' }}>{best.reach ? formatNumber(best.reach) : 'N/D'}</strong>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: '#9898a6', fontSize: '13px' }}>Engajamento</span>
          <strong style={{ color: '#fff', fontSize: '14px' }}>{best.engagementRate ? formatPercent(best.engagementRate) : 'N/D'}</strong>
        </div>
      </div>
    </div>
  );
}