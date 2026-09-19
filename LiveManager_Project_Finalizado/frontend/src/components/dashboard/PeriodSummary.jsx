import React from 'react';
import { getBestPlatform, formatNumber, formatPercent } from '../../utils/dashboardUtils';

export default function PeriodSummary({ data }) {
  const bestViews = getBestPlatform(data, 'views');
  const bestEngagement = getBestPlatform(data, 'engagementRate');
  const bestFollowers = getBestPlatform(data, 'followersGained');

  return (
    // Usa as novas classes que garantem as colunas 1.4fr e 1fr
    <div className="premium-card grid-row grid-summary" style={{ padding: '32px 24px', flexDirection: 'unset' }}>
      
      {/* Lado Esquerdo - Textos explicativos */}
      <div>
        <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: '#fff' }}>Resumo do Período</h3>
        <p style={{ margin: 0, color: '#9898a6', fontSize: '14px', lineHeight: '1.6' }}>
          O <strong>{bestViews?.name || 'conteúdo'}</strong> apresentou o melhor desempenho geral no período, liderando em volume de visualizações e atração de novos públicos.
        </p>
      </div>
      
      {/* Lado Direito - Destaques organizados */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '20px' }}>
        <div>
          <p style={{ margin: '0 0 4px 0', color: '#fff', fontSize: '24px', fontWeight: 'bold' }}>{bestViews?.name || 'N/D'}</p>
          <span style={{ color: '#9898a6', fontSize: '13px' }}>Melhor plataforma</span>
        </div>
        <div>
          <p style={{ margin: '0 0 4px 0', color: '#fff', fontSize: '24px', fontWeight: 'bold' }}>+{formatNumber(bestFollowers?.followersGained)}</p>
          <span style={{ color: '#9898a6', fontSize: '13px' }}>Maior crescimento</span>
        </div>
        <div>
          <p style={{ margin: '0 0 4px 0', color: '#fff', fontSize: '24px', fontWeight: 'bold' }}>{formatPercent(bestEngagement?.engagementRate)}</p>
          <span style={{ color: '#9898a6', fontSize: '13px' }}>Melhor engajamento</span>
        </div>
      </div>

    </div>
  );
}