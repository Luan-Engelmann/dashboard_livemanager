// Aqui utilizamos o Recharts. Note como ele lida nativamente com o null: se não tem alcance no YouTube, ele simplesmente pula a renderização da barra do YouTube.

import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

export default function PlatformComparisonChart({ data }) {
  const [metric, setMetric] = useState('reach');
  
  // Transforma o objeto mock em Array pro Recharts
  const chartData = Object.values(data).map(p => ({
    name: p.name,
    valor: p[metric] !== null ? p[metric] : 0, // Fallback visual, mas indicaremos ND
    fill: p.color,
    rawData: p[metric]
  }));

  const metricDescriptions = {
    views: "Número de vezes que conteúdos foram visualizados.",
    reach: "Número estimado de contas únicas alcançadas, quando disponibilizado.",
    impressions: "Número total de vezes que os conteúdos foram exibidos.",
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div style={{ backgroundColor: '#181922', padding: '10px', border: '1px solid #333', borderRadius: '8px' }}>
          <p style={{ margin: 0, color: '#fff' }}>{data.name}</p>
          <p style={{ margin: 0, color: data.fill, fontWeight: 'bold' }}>
            {data.rawData === null ? 'N/D' : data.rawData.toLocaleString('pt-BR')}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{ backgroundColor: '#12131a', padding: '24px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <h3 style={{ margin: 0, color: '#fff' }}>Comparação entre Plataformas</h3>
        <select style={{ background: '#08090d', color: '#fff', border: '1px solid #333', borderRadius: '6px', padding: '4px' }} value={metric} onChange={(e) => setMetric(e.target.value)}>
          <option value="views">Visualizações</option>
          <option value="reach">Alcance</option>
          <option value="impressions">Impressões</option>
        </select>
      </div>
      <p style={{ color: '#9898a6', fontSize: '12px', marginBottom: '20px' }}>{metricDescriptions[metric] || ''}</p>
      
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
            <XAxis dataKey="name" stroke="#9898a6" />
            <YAxis stroke="#9898a6" tickFormatter={(val) => val >= 1000 ? `${val/1000}k` : val} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="valor" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}