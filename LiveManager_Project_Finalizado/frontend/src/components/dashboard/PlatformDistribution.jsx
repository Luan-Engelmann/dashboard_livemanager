import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { formatNumber, calculateTotal } from '../../utils/dashboardUtils';

export default function PlatformDistribution({ data }) {
  const chartData = Object.values(data).filter(p => p.views !== null).map(p => ({
    name: p.name, value: p.views, color: p.color
  }));
  const total = calculateTotal(data, 'views');

  return (
    <div className="premium-card">
      <h3 style={{ margin: '0 0 20px 0', color: '#fff', fontSize: '16px' }}>Distribuição de Visualizações</h3>
      
      <div style={{ display: 'flex', alignItems: 'center', height: '100%', gap: '20px', flexWrap: 'wrap' }}>
        {/* Gráfico Relativo */}
        <div style={{ width: '160px', height: '160px', position: 'relative' }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie data={chartData} innerRadius={55} outerRadius={80} paddingAngle={3} dataKey="value" stroke="none">
                {chartData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: '#181922', border: '1px solid #333', borderRadius: '8px', color: '#fff' }} itemStyle={{ color: '#fff' }} />
            </PieChart>
          </ResponsiveContainer>
          {/* Texto central */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
            <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#fff' }}>{formatNumber(total)}</span>
            <span style={{ fontSize: '10px', color: '#9898a6' }}>Total</span>
          </div>
        </div>
        
        {/* Legenda Lateral */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
          {chartData.map(item => (
            <div key={item.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: item.color }} />
                <span style={{ color: '#9898a6', fontSize: '13px' }}>{item.name}</span>
              </div>
              <span style={{ color: '#fff', fontSize: '13px', fontWeight: 'bold' }}>{((item.value / total) * 100).toFixed(0)}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}