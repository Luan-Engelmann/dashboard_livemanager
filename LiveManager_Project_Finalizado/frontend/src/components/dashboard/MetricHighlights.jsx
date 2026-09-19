import React from 'react';
import { getBestPlatform, formatNumber, formatPercent } from '../../utils/dashboardUtils';
import { Eye, Users, MousePointerClick, UserPlus } from 'lucide-react';

export default function MetricHighlights({ data }) {
  const bestViews = getBestPlatform(data, 'views');
  const bestReach = getBestPlatform(data, 'reach');
  const bestEngagement = getBestPlatform(data, 'engagementRate');
  const bestFollowers = getBestPlatform(data, 'followersGained');

  const HighlightItem = ({ title, platform, value, color, Icon }) => (
    <div style={{ backgroundColor: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.03)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
        <Icon size={16} color="#9898a6" />
        <span style={{ color: '#9898a6', fontSize: '13px' }}>{title}</span>
      </div>
      <p style={{ color: color || '#fff', fontSize: '14px', fontWeight: 'bold', margin: '0 0 4px 0' }}>{platform?.name || 'N/D'}</p>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
        <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#fff' }}>{value}</span>
        <span className="badge-positive" style={{ padding: '2px 6px', fontSize: '10px' }}>↑ Rank #1</span>
      </div>
    </div>
  );

  return (
    <div className="premium-card">
      <h3 style={{ margin: '0 0 20px 0', color: '#fff', fontSize: '16px' }}>Destaques do Período</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <HighlightItem title="Visualizações" platform={bestViews} value={bestViews ? formatNumber(bestViews.views) : 'N/D'} color={bestViews?.color} Icon={Eye} />
        <HighlightItem title="Alcance Máximo" platform={bestReach} value={bestReach ? formatNumber(bestReach.reach) : 'N/D'} color={bestReach?.color} Icon={Users} />
        <HighlightItem title="Engajamento" platform={bestEngagement} value={bestEngagement ? formatPercent(bestEngagement.engagementRate) : 'N/D'} color={bestEngagement?.color} Icon={MousePointerClick} />
        <HighlightItem title="Novos Fãs" platform={bestFollowers} value={bestFollowers ? `+${formatNumber(bestFollowers.followersGained)}` : 'N/D'} color={bestFollowers?.color} Icon={UserPlus} />
      </div>
    </div>
  );
}