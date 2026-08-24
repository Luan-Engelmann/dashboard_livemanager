// Gráfico de linhas simulando a evolução ao longo do tempo.

import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

export default function PerformanceTrendChart({ trendData }) {
  return (
    <div style={{ backgroundColor: '#12131a', padding: '24px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', marginBottom: '40px' }}>
      <h3 style={{ margin: '0 0 20px 0', color: '#fff', fontSize: '18px' }}>Evolução de Desempenho (Views)</h3>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={trendData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
            <XAxis dataKey="date" stroke="#9898a6" />
            <YAxis stroke="#9898a6" tickFormatter={(val) => val >= 1000 ? `${val/1000}k` : val} />
            <Tooltip contentStyle={{ backgroundColor: '#181922', border: '1px solid #333', borderRadius: '8px', color: '#fff' }} />
            <Line type="monotone" dataKey="tiktok" stroke="#00f2fe" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
            <Line type="monotone" dataKey="instagram" stroke="#E1306C" strokeWidth={3} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="youtube" stroke="#FF0000" strokeWidth={3} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="twitch" stroke="#9146FF" strokeWidth={3} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}