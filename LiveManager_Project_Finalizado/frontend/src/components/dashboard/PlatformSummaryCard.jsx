import React from 'react';
import { formatNumber, formatPercent } from '../../utils/dashboardUtils';

export default function PlatformSummaryCard({ platform }) {
  const Row = ({ label, value, isPercent }) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
      <span style={{ color: '#9898a6', fontSize: '13px' }}>{label}</span>
      <span style={{ color: '#fff', fontWeight: '600', fontSize: '14px' }}>
        {value === null ? 'N/D' : (isPercent ? formatPercent(value) : formatNumber(value))}
      </span>
    </div>
  );

  return (
    <div className="premium-card" style={{ borderTop: `4px solid ${platform.color}`, paddingTop: '20px' }}>
      <h4 style={{ margin: '0 0 20px 0', color: platform.color, fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: platform.color }} />
        {platform.name}
      </h4>
      <Row label="Visualizações" value={platform.views} />
      <Row label="Alcance" value={platform.reach} />
      <Row label="Impressões" value={platform.impressions} />
      <Row label="Engajamento" value={platform.engagementRate} isPercent />
      <Row label="Novos Seguidores" value={platform.followersGained} />
    </div>
  );
}