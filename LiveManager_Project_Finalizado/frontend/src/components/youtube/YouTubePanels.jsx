import React from 'react';
import ProfileAvatar from '../shared/ProfileAvatar';

export function YouTubeChannelCard({ channel }) {
  if (!channel) return null;
  return (
    <div className="premium-card" style={{ gap: '16px', alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}>
      <ProfileAvatar 
        src={channel.profilePicture} 
        alt={channel.name} 
        size={68} 
        gradientBorder={true} 
      />
      <div>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '700', color: '#fff' }}>{channel.name}</h3>
        <span style={{ color: '#2878ff', fontSize: '12px', fontWeight: '500' }}>{channel.handle}</span>
      </div>
      
      <div style={{ background: 'rgba(40, 120, 255, 0.1)', border: '1px solid rgba(40, 120, 255, 0.2)', padding: '6px 16px', borderRadius: '16px' }}>
        <span style={{ fontSize: '12px', color: '#fff', fontWeight: '600' }}>{channel.subscribers} inscritos</span>
      </div>

      <div style={{ display: 'flex', gap: '12px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '16px', width: '100%', justifyContent: 'space-around' }}>
        <div>
          <strong style={{ fontSize: '14px', color: '#fff', display: 'block' }}>{channel.videos}</strong>
          <span style={{ fontSize: '11px', color: '#636472' }}>Vídeos</span>
        </div>
        <div>
          <strong style={{ fontSize: '14px', color: '#fff', display: 'block' }}>{channel.shorts}</strong>
          <span style={{ fontSize: '11px', color: '#636472' }}>Shorts</span>
        </div>
        <div>
          <strong style={{ fontSize: '14px', color: '#fff', display: 'block' }}>{channel.lives}</strong>
          <span style={{ fontSize: '11px', color: '#636472' }}>Lives</span>
        </div>
      </div>
    </div>
  );
}

export function YouTubePeriodSummary({ data }) {
  return (
    <div className="premium-card" style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
      <div style={{ flex: '1', minWidth: '300px' }}>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', color: '#fff' }}>Resumo do Período</h3>
        <p style={{ margin: 0, color: '#9898a6', fontSize: '14px', lineHeight: '1.6' }}>
          O canal apresentou excelente atração no formato Shorts e manteve retenção sólida nos vídeos longos.
          O volume de audiência resultou na conquista de <strong>+286 novos inscritos</strong> no período.
        </p>
      </div>
      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '12px 16px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <span style={{ fontSize: '11px', color: '#ff0000', fontWeight: 'bold', display: 'block', textTransform: 'uppercase' }}>Shorts</span>
          <strong style={{ fontSize: '13px', color: '#fff' }}>Maior volume de views</strong>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '12px 16px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <span style={{ fontSize: '11px', color: '#2878ff', fontWeight: 'bold', display: 'block', textTransform: 'uppercase' }}>Vídeos</span>
          <strong style={{ fontSize: '13px', color: '#fff' }}>Maior tempo de exibição</strong>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '12px 16px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <span style={{ fontSize: '11px', color: '#4ade80', fontWeight: 'bold', display: 'block', textTransform: 'uppercase' }}>Comunidade</span>
          <strong style={{ fontSize: '13px', color: '#fff' }}>+286 Novos inscritos</strong>
        </div>
      </div>
    </div>
  );
}

export function YouTubeComparison({ current, previous }) {
  return (
    <div className="premium-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ margin: 0, fontSize: '16px', color: '#fff' }}>Comparação com Período Anterior</h3>
        <span style={{ fontSize: '12px', color: '#636472' }}>Últimos 30 dias vs. 30 dias anteriores</span>
      </div>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <CompItem label="Visualizações" current="128,4 mil" prev="111,8 mil" trend="+14,8%" />
        <CompItem label="Tempo de Exibição" current="1,3 mil h" prev="1,18 mil h" trend="+10,1%" />
        <CompItem label="Inscritos" current="+286" prev="+242" trend="+18,1%" />
        <CompItem label="CTR Médio" current="6,8%" prev="6,2%" trend="+0,6%" />
      </div>
    </div>
  );
}

function CompItem({ label, current, prev, trend }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '130px' }}>
      <span style={{ color: '#9898a6', fontSize: '12px' }}>{label}</span>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
        <span style={{ color: '#fff', fontSize: '18px', fontWeight: '600' }}>{current}</span>
        <span style={{ color: '#4ade80', fontSize: '12px', fontWeight: '500' }}>{trend}</span>
      </div>
      <span style={{ color: '#636472', fontSize: '11px' }}>Anterior: {prev}</span>
    </div>
  );
}

export function FormatComparisonTable({ rows }) {
  if (!rows) return null;
  return (
    <div className="premium-card">
      <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', color: '#fff' }}>Vídeos x Shorts</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#636472', fontSize: '12px' }}>
            <th style={{ padding: '10px 0' }}>Métrica</th>
            <th style={{ padding: '10px' }}>Vídeos</th>
            <th style={{ padding: '10px' }}>Shorts</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.02)', fontSize: '13px', color: '#e4e4e7' }}>
              <td style={{ padding: '12px 0', fontWeight: '500' }}>{r.metric}</td>
              <td style={{ padding: '12px', color: r.winner === 'videos' ? '#4ade80' : '#e4e4e7', fontWeight: r.winner === 'videos' ? '600' : 'normal' }}>{r.videos}</td>
              <td style={{ padding: '12px', color: r.winner === 'shorts' ? '#4ade80' : '#e4e4e7', fontWeight: r.winner === 'shorts' ? '600' : 'normal' }}>{r.shorts}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function BestPublishingTimes({ data }) {
  if (!data || !data.ranking) return null;
  return (
    <div className="premium-card">
      <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', color: '#fff' }}>Melhores horários para publicar</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ padding: '12px', background: 'rgba(255, 0, 0, 0.05)', border: '1px solid rgba(255, 0, 0, 0.2)', borderRadius: '8px' }}>
          <span style={{ fontSize: '11px', color: '#ff4d4d', display: 'block', textTransform: 'uppercase', fontWeight: 'bold' }}>Pico / Horário</span>
          <strong style={{ fontSize: '16px', color: '#fff' }}>{data.peak}</strong>
          <span style={{ fontSize: '12px', color: '#9898a6', display: 'block', marginTop: '4px' }}>Melhor janela: {data.window}</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {data.ranking.map((item, idx) => (
            <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', background: 'rgba(255,255,255,0.02)', borderRadius: '6px' }}>
              <span style={{ color: '#fff', fontSize: '13px', fontWeight: '500' }}>{item.rank} {item.dayTime}</span>
              <span style={{ fontSize: '10px', color: '#ff0000', background: 'rgba(255,0,0,0.1)', padding: '2px 8px', borderRadius: '4px' }}>{item.badge}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CTRRetentionMatrix({ items }) {
  if (!items) return null;
  return (
    <div className="premium-card">
      <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', color: '#fff' }}>Matriz CTR x Retenção</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {items.map((item, idx) => (
          <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', borderLeft: `3px solid ${item.tagColor}` }}>
            <div>
              <strong style={{ color: '#fff', fontSize: '13px', display: 'block' }}>{item.title}</strong>
              <span style={{ color: '#636472', fontSize: '11px' }}>CTR: {item.ctr}% | Retenção: {item.retention}%</span>
            </div>
            <span style={{ fontSize: '11px', color: item.tagColor, fontWeight: 'bold', background: 'rgba(255,255,255,0.03)', padding: '4px 8px', borderRadius: '4px' }}>
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TrafficSourcesList({ sources }) {
  if (!sources) return null;
  return (
    <div className="premium-card">
      <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', color: '#fff' }}>Origem das Visualizações</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {sources.map((item, idx) => (
          <div key={idx}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '4px' }}>
              <span style={{ color: item.isMain ? '#fff' : '#9898a6', fontWeight: item.isMain ? '600' : 'normal' }}>{item.source}</span>
              <span style={{ color: item.isMain ? '#ff0000' : '#fff', fontWeight: 'bold' }}>{item.percentage}%</span>
            </div>
            <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '3px', overflow: 'hidden' }}>
              <div style={{ width: `${item.percentage}%`, height: '100%', background: item.isMain ? '#ff0000' : 'rgba(255,255,255,0.3)', borderRadius: '3px' }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function GrowingContentCard({ content }) {
  if (!content) return null;
  return (
    <div className="premium-card" style={{ justifyContent: 'center' }}>
      <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', color: '#fff' }}>Conteúdo em Crescimento</h3>
      <div style={{ padding: '20px', border: '1px solid rgba(255,0,0,0.3)', borderRadius: '12px', background: 'rgba(255,0,0,0.04)' }}>
        <span style={{ display: 'inline-block', background: '#ff0000', color: '#fff', fontSize: '11px', fontWeight: 'bold', padding: '4px 10px', borderRadius: '12px', marginBottom: '12px' }}>Em alta</span>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '17px', color: '#fff' }}>{content.title}</h4>
        <p style={{ margin: '0 0 16px 0', color: '#4ade80', fontWeight: 'bold', fontSize: '20px' }}>{content.growth} <span style={{ fontSize: '12px', fontWeight: 'normal', color: '#9898a6' }}>visualizações</span></p>
        <div style={{ display: 'flex', gap: '20px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <span style={{ color: '#e4e4e7', fontSize: '13px' }}><strong>{content.views}</strong> views</span>
          <span style={{ color: '#e4e4e7', fontSize: '13px' }}><strong>+{content.subsGained}</strong> inscritos</span>
        </div>
      </div>
    </div>
  );
}

export function SubscribedContentRanking({ list }) {
  if (!list) return null;
  return (
    <div className="premium-card">
      <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', color: '#fff' }}>Conteúdos que Mais Geraram Inscritos</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {list.map((item, idx) => (
          <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 12px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '12px', color: '#2878ff', fontWeight: 'bold' }}>{item.rank}º</span>
              <span style={{ color: '#e4e4e7', fontSize: '13px' }}>{item.title}</span>
            </div>
            <strong style={{ color: '#4ade80', fontSize: '13px' }}>+{item.subs}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}