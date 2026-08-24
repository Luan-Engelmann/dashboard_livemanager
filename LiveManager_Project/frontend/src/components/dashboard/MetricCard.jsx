import React from 'react';
import { Info, TrendingUp, TrendingDown } from 'lucide-react';

export default function MetricCard({ title, value, variation, type, tooltip }) {
  const isPositive = type === 'positive';
  const isNegative = type === 'negative';
  const badgeClass = isPositive ? 'badge-positive' : isNegative ? 'badge-negative' : 'badge-neutral';

  return (
    <div className="premium-card" title={tooltip}>
      <h3 style={{ color: '#9898a6', fontSize: '14px', margin: '0 0 16px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {title}
        {tooltip && <Info size={14} color="#4b4c5e" cursor="help" />}
      </h3>
      <p style={{ fontSize: '32px', fontWeight: 'bold', margin: '0 0 12px 0', color: '#fff' }}>{value}</p>
      
      {variation && (
        <div>
          <span className={badgeClass}>
            {isPositive && <TrendingUp size={12} />}
            {isNegative && <TrendingDown size={12} />}
            {variation}
          </span>
          <span style={{ fontSize: '11px', color: '#636472', marginLeft: '8px' }}>vs. período anterior</span>
        </div>
      )}
    </div>
  );
}