import React from 'react';
import { generateInsights } from '../../utils/dashboardUtils';
import { Lightbulb } from 'lucide-react';

export default function InsightsSection({ data }) {
  const insights = generateInsights(data);

  return (
    <div className="premium-card">
      <h3 style={{ margin: '0 0 20px 0', fontSize: '18px', color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Lightbulb size={20} color="#fbbf24" /> Insights do Período
      </h3>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {insights.map((insight, idx) => (
          <li key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <div style={{ marginTop: '4px', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#2878ff', flexShrink: 0 }} />
            <p style={{ margin: 0, color: '#d4d4d8', fontSize: '14px', lineHeight: '1.5' }}>{insight}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}