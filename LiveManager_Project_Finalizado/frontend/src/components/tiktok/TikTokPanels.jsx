import React, { useState } from 'react';
import { formatNumber } from '../../utils/dashboardUtils';

// Componente de Avatar integrado e blindado contra erros
function ProfileAvatar({ src, alt }) {
  const [hasError, setHasError] = useState(false);
  return (
    <div style={{ width: '68px', height: '68px', borderRadius: '50%', padding: '2px', background: 'linear-gradient(45deg, #00f2fe 0%, #fe2c55 100%)', flexShrink: 0 }}>
      <div style={{ width: '100%', height: '100%', borderRadius: '50%', backgroundColor: '#0b1120', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        {src && !hasError ? (
          <img src={src} alt={alt || 'Perfil'} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={() => setHasError(true)} />
        ) : (
          <span style={{ color: '#9898a6', fontWeight: 'bold', fontSize: '24px' }}>{alt ? alt.charAt(0).toUpperCase() : 'U'}</span>
        )}
      </div>
    </div>
  );
}

export function TikTokProfileCard({ profile }) {
  if (!profile) return null;
  return (
    <div className="premium-card" style={{ gap: '16px', alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}>
      <ProfileAvatar src={profile.profilePicture} alt={profile.name} />
      <div>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '700', color: '#fff' }}>{profile.name}</h3>
        <span style={{ color: '#00f2fe', fontSize: '12px', fontWeight: '500' }}>{profile.username}</span>
      </div>
      <div style={{ background: 'rgba(0, 242, 254, 0.1)', border: '1px solid rgba(0, 242, 254, 0.2)', padding: '6px 16px', borderRadius: '16px', marginTop: '4px' }}>
        <span style={{ fontSize: '12px', color: '#fff', fontWeight: '600' }}>{formatNumber(profile.followers)} seguidores</span>
      </div>
    </div>
  );
}

export function TikTokPeriodSummary({ data, community }) {
  return (
    <div className="premium-card" style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
      <div style={{ flex: '1', minWidth: '300px' }}>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', color: '#fff' }}>Resumo do Período</h3>
        <p style={{ margin: 0, color: '#9898a6', fontSize: '14px', lineHeight: '1.6' }}>
          Foram realizadas <strong>{community.postsCount} publicações</strong>, acumulando <strong>{formatNumber(data.postViews)} visualizações</strong>. 
          O engajamento rendeu <strong>{formatNumber(data.likes)} curtidas</strong> e converteu <strong>+{community.newFollowers} novos seguidores</strong> para a comunidade.
        </p>
      </div>
      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        <SummaryHighlight label="Visualizações" value={formatNumber(data.postViews)} color="#00f2fe" />
        <SummaryHighlight label="Curtidas" value={formatNumber(data.likes)} color="#fe2c55" />
        <SummaryHighlight label="Seguidores" value={`+${community.newFollowers}`} color="#4ade80" />
      </div>
    </div>
  );
}

function SummaryHighlight({ label, value, color }) {
  return (
    <div style={{ background: 'rgba(255,255,255,0.02)', padding: '12px 16px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <span style={{ fontSize: '11px', color: color, fontWeight: 'bold', textTransform: 'uppercase' }}>{label}</span>
      <strong style={{ fontSize: '15px', color: '#fff' }}>{value}</strong>
    </div>
  );
}

export function TikTokComparison({ current, previous }) {
  const calcTrend = (curr, prev) => (((curr - prev) / prev) * 100).toFixed(1);
  return (
    <div className="premium-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
        <h3 style={{ margin: 0, fontSize: '16px', color: '#fff' }}>Comparação com Período Anterior</h3>
        <span style={{ fontSize: '12px', color: '#636472' }}>Compara os últimos 30 dias com os 30 dias imediatamente anteriores</span>
      </div>
      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <CompItem label="Visualizações" current={formatNumber(current.postViews)} prev={formatNumber(previous.postViews)} trend={`+${calcTrend(current.postViews, previous.postViews)}%`} />
        <CompItem label="Visitas ao Perfil" current={formatNumber(current.profileViews)} prev={formatNumber(previous.profileViews)} trend={`+${calcTrend(current.profileViews, previous.profileViews)}%`} />
        <CompItem label="Curtidas" current={formatNumber(current.likes)} prev={formatNumber(previous.likes)} trend={`+${calcTrend(current.likes, previous.likes)}%`} />
        <CompItem label="Comentários" current={current.comments} prev={previous.comments} trend={`+${calcTrend(current.comments, previous.comments)}%`} />
        <CompItem label="Compartilhamentos" current={current.shares} prev={previous.shares} trend={`+${calcTrend(current.shares, previous.shares)}%`} />
      </div>
    </div>
  );
}

function CompItem({ label, current, prev, trend }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '110px' }}>
      <span style={{ color: '#9898a6', fontSize: '12px' }}>{label}</span>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
        <span style={{ color: '#fff', fontSize: '18px', fontWeight: '600' }}>{current}</span>
        <span style={{ color: '#4ade80', fontSize: '12px', fontWeight: '500' }}>{trend}</span>
      </div>
      <span style={{ color: '#636472', fontSize: '11px' }}>Anterior: {prev}</span>
    </div>
  );
}

export function TikTokFormatPerformance({ content }) {
  return (
    <div className="premium-card">
      <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', color: '#fff' }}>Desempenho por Conteúdo</h3>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#636472', fontSize: '12px' }}>
              <th style={{ padding: '10px 0', fontWeight: '500' }}>Conteúdo</th>
              <th style={{ padding: '10px', fontWeight: '500' }}>Views</th>
              <th style={{ padding: '10px', fontWeight: '500' }}>Curtidas</th>
              <th style={{ padding: '10px', fontWeight: '500' }}>Comentários</th>
              <th style={{ padding: '10px', fontWeight: '500' }}>Shares</th>
            </tr>
          </thead>
          <tbody>
            {content.map((r, i) => (
              <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.02)', fontSize: '13px', color: '#e4e4e7' }}>
                <td style={{ padding: '14px 0', fontWeight: '500' }}>{r.title}</td>
                <td style={{ padding: '14px', color: '#00f2fe' }}>{formatNumber(r.views)}</td>
                <td style={{ padding: '14px' }}>{formatNumber(r.likes)}</td>
                <td style={{ padding: '14px' }}>{r.comments}</td>
                <td style={{ padding: '14px' }}>{r.shares}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function TikTokFeaturedContent({ item }) {
  if (!item) return null;
  return (
    <div className="premium-card">
      <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', color: '#fff' }}>Conteúdo em Destaque</h3>
      <div style={{ padding: '16px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', borderLeft: '3px solid #fe2c55' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px', gap: '8px' }}>
          <strong style={{ color: '#fff', fontSize: '15px' }}>{item.title}</strong>
          <span style={{ fontSize: '10px', color: '#00f2fe', border: '1px solid rgba(0, 242, 254, 0.3)', background: 'rgba(0, 242, 254, 0.05)', padding: '2px 8px', borderRadius: '12px', fontWeight: '600' }}>Destaque</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <div><span style={{ color: '#9898a6', fontSize: '11px', display: 'block' }}>Visualizações</span><strong style={{ color: '#fff', fontSize: '14px' }}>{formatNumber(item.views)}</strong></div>
          <div><span style={{ color: '#9898a6', fontSize: '11px', display: 'block' }}>Curtidas</span><strong style={{ color: '#fff', fontSize: '14px' }}>{formatNumber(item.likes)}</strong></div>
          <div><span style={{ color: '#9898a6', fontSize: '11px', display: 'block' }}>Comentários</span><strong style={{ color: '#fff', fontSize: '14px' }}>{item.comments}</strong></div>
          <div><span style={{ color: '#9898a6', fontSize: '11px', display: 'block' }}>Compartilhamentos</span><strong style={{ color: '#fff', fontSize: '14px' }}>{item.shares}</strong></div>
        </div>
      </div>
    </div>
  );
}

export function TikTokGrowingContent({ list }) {
  return (
    <div className="premium-card" style={{ justifyContent: 'center' }}>
      <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', color: '#fff' }}>Conteúdo em Crescimento</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {list.map((item, idx) => (
          <div key={idx} style={{ padding: '12px 16px', border: '1px solid rgba(0, 242, 254, 0.2)', borderRadius: '8px', background: 'rgba(0, 242, 254, 0.03)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <strong style={{ color: '#fff', fontSize: '14px' }}>{item.title}</strong>
            <span style={{ color: '#4ade80', fontWeight: 'bold', fontSize: '14px' }}>+{item.growthRate}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TikTokCommunityGrowth({ newFollowers, metrics }) {
  return (
    <div className="premium-card">
      <h3 style={{ margin: '0 0 20px 0', fontSize: '16px', color: '#fff' }}>Crescimento da Comunidade</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <span style={{ color: '#9898a6', fontSize: '13px', display: 'block' }}>Novos seguidores</span>
            <strong style={{ color: '#fff', fontSize: '24px' }}>+{newFollowers}</strong>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span style={{ color: '#636472', fontSize: '12px', display: 'block' }}>Seguidores / publicação</span>
            <span style={{ color: '#4ade80', fontSize: '14px', fontWeight: '500' }}>{metrics.followersPerPost}</span>
          </div>
        </div>
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)' }}></div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ textAlign: 'left' }}>
            <span style={{ color: '#636472', fontSize: '12px', display: 'block' }}>Conversão Visualizações → Seguidores</span>
            <span style={{ color: '#00f2fe', fontSize: '16px', fontWeight: '600' }}>{metrics.conversionRate}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TikTokBestTimes({ data }) {
  return (
    <div className="premium-card">
      <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', color: '#fff' }}>Melhores horários para publicar</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ paddingBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <span style={{ fontSize: '12px', color: '#fe2c55', display: 'block', fontWeight: '600', marginBottom: '4px' }}>Melhor horário</span>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
            <strong style={{ fontSize: '18px', color: '#fff' }}>{data.peak}</strong>
            <span style={{ fontSize: '12px', color: '#9898a6' }}>Melhor janela: {data.window}</span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {data.ranking.map((item, idx) => (
            <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', background: 'rgba(255,255,255,0.02)', borderRadius: '6px' }}>
              <span style={{ color: '#fff', fontSize: '13px', fontWeight: '500' }}>{item.rank} {item.dayTime}</span>
              <span style={{ fontSize: '11px', color: '#9898a6', background: 'rgba(255,255,255,0.03)', padding: '2px 8px', borderRadius: '4px' }}>{item.badge}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function TikTokRewards({ current, previous }) {
  const formatBRL = (val) => `R$ ${val.toFixed(2).replace('.', ',')}`;
  const trend = (((current - previous) / previous) * 100).toFixed(1);
  return (
    <div className="premium-card">
      <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', color: '#fff' }}>Recompensas</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <span style={{ color: '#9898a6', fontSize: '13px' }}>Recompensas Estimadas</span>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
          <strong style={{ color: '#4ade80', fontSize: '28px' }}>{formatBRL(current)}</strong>
          <span style={{ color: '#4ade80', fontSize: '13px', fontWeight: '500' }}>+{trend}%</span>
        </div>
        <div style={{ marginTop: '8px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <span style={{ color: '#636472', fontSize: '12px' }}>Período anterior: {formatBRL(previous)}</span>
        </div>
      </div>
    </div>
  );
}