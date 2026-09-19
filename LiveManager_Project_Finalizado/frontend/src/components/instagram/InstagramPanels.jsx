import React from 'react';
import ProfileAvatar from '../shared/ProfileAvatar';

export function InstagramProfileCard({ profile }) {
  if (!profile) return null;
  return (
    <div className="premium-card" style={{ gap: '16px', alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}>
      <ProfileAvatar 
        src={profile.profilePicture} 
        alt={profile.name} 
        size={68} 
        gradientBorder={true} 
      />
      <div>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '700', color: '#fff' }}>{profile.name}</h3>
        <span style={{ color: '#E1306C', fontSize: '12px', fontWeight: '500' }}>{profile.username}</span>
      </div>
      <div style={{ background: 'rgba(225, 48, 108, 0.1)', border: '1px solid rgba(225, 48, 108, 0.2)', padding: '6px 16px', borderRadius: '16px', marginTop: '4px' }}>
        <span style={{ fontSize: '12px', color: '#fff', fontWeight: '600' }}>{profile.followers.toLocaleString('pt-BR')} seguidores</span>
      </div>
    </div>
  );
}

export function InstagramPeriodSummary({ data }) {
  return (
    <div className="premium-card" style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
      <div style={{ flex: '1', minWidth: '300px' }}>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', color: '#fff' }}>Resumo do Período</h3>
        <p style={{ margin: 0, color: '#9898a6', fontSize: '14px', lineHeight: '1.6' }}>
          Os <strong>Reels</strong> foram responsáveis pela maior parte das visualizações no período, enquanto os <strong>Stories</strong> apresentaram a maior frequência de publicação. O crescimento contínuo gerou a atração de novos públicos.
        </p>
      </div>
      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        <SummaryHighlight label="Visualizações" value="48,6 mil" color="#E1306C" />
        <SummaryHighlight label="Alcance" value="31,4 mil" color="#f56040" />
        <SummaryHighlight label="Interações" value="5,8 mil" color="#833ab4" />
        <SummaryHighlight label="Novos Seguidores" value="+342" color="#4ade80" />
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

export function InstagramComparison({ current, previous }) {
  return (
    <div className="premium-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
        <h3 style={{ margin: 0, fontSize: '16px', color: '#fff' }}>Comparação com Período Anterior</h3>
        <span style={{ fontSize: '12px', color: '#636472' }}>Últimos 30 dias vs. 30 dias imediatamente anteriores</span>
      </div>
      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <CompItem label="Visualizações" current="48,6 mil" prev="42,5 mil" trend="+14,2%" />
        <CompItem label="Interações" current="5,8 mil" prev="5,1 mil" trend="+12,7%" />
        <CompItem label="Alcance" current="31,4 mil" prev="28,5 mil" trend="+9,8%" />
        <CompItem label="Novos Seguidores" current="+342" prev="+289" trend="+18,4%" />
        <CompItem label="Comentários" current="428" prev="402" trend="+6,4%" />
        <CompItem label="Compartilhamentos" current="1,2 mil" prev="989" trend="+21,3%" />
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

export function InstagramFormatsVisual({ formats }) {
  return (
    <div className="premium-card">
      <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', color: '#fff' }}>Visualizações por Formato</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {formats.map((item, idx) => (
          <div key={idx}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '6px' }}>
              <span style={{ color: '#e4e4e7', fontWeight: '500' }}>{item.label}</span>
              <span style={{ color: '#fff', fontWeight: 'bold' }}>{(item.views / 1000).toFixed(1).replace('.', ',')} mil</span>
            </div>
            <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: `${item.percentage}%`, height: '100%', background: item.id === 'reels' ? 'linear-gradient(90deg, #f56040, #E1306C)' : 'rgba(225, 48, 108, 0.4)', borderRadius: '4px' }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function InstagramFormatPerformance({ rows }) {
  return (
    <div className="premium-card">
      <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', color: '#fff' }}>Desempenho por Formato</h3>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#636472', fontSize: '12px' }}>
              <th style={{ padding: '10px 0', fontWeight: '500' }}>Formato</th>
              <th style={{ padding: '10px', fontWeight: '500' }}>Views</th>
              <th style={{ padding: '10px', fontWeight: '500' }}>Alcance</th>
              <th style={{ padding: '10px', fontWeight: '500' }}>Interações</th>
              <th style={{ padding: '10px', fontWeight: '500' }}>Shares</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.02)', fontSize: '13px', color: '#e4e4e7' }}>
                <td style={{ padding: '14px 0', fontWeight: '600' }}>{r.format}</td>
                <td style={{ padding: '14px', color: r.best === 'views' ? '#E1306C' : '#e4e4e7' }}>{r.views}</td>
                <td style={{ padding: '14px' }}>{r.reach}</td>
                <td style={{ padding: '14px', color: r.best === 'engagement' ? '#E1306C' : '#e4e4e7' }}>{r.interactions}</td>
                <td style={{ padding: '14px' }}>{r.shares}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function InstagramFeaturedContent({ content }) {
  return (
    <div className="premium-card">
      <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', color: '#fff' }}>Conteúdo em Destaque</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {content.map((item, idx) => (
          <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '13px', color: '#E1306C', fontWeight: 'bold' }}>{item.rank}º</span>
              <div>
                <strong style={{ color: '#fff', fontSize: '13px', display: 'block' }}>{item.type} — {item.title}</strong>
                <span style={{ color: '#636472', fontSize: '11px' }}>{item.views} visualizações</span>
              </div>
            </div>
            <strong style={{ color: '#4ade80', fontSize: '13px' }}>{item.interactions} interações</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export function InstagramGrowingContent({ data }) {
  return (
    <div className="premium-card" style={{ justifyContent: 'center' }}>
      <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', color: '#fff' }}>Conteúdo em Crescimento</h3>
      <div style={{ padding: '20px', border: '1px solid rgba(225, 48, 108, 0.3)', borderRadius: '12px', background: 'rgba(225, 48, 108, 0.04)' }}>
        <span style={{ display: 'inline-block', background: 'linear-gradient(45deg, #f56040, #E1306C)', color: '#fff', fontSize: '11px', fontWeight: 'bold', padding: '4px 10px', borderRadius: '12px', marginBottom: '12px' }}>Em alta</span>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '17px', color: '#fff' }}>{data.title}</h4>
        
        <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
          <div>
            <span style={{ color: '#9898a6', fontSize: '11px', display: 'block' }}>Visualizações</span>
            <span style={{ color: '#4ade80', fontWeight: 'bold', fontSize: '16px' }}>{data.growthViews}</span>
          </div>
          <div>
            <span style={{ color: '#9898a6', fontSize: '11px', display: 'block' }}>Interações</span>
            <span style={{ color: '#4ade80', fontWeight: 'bold', fontSize: '16px' }}>{data.growthInteractions}</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '20px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <span style={{ color: '#e4e4e7', fontSize: '12px' }}><strong>{data.views}</strong> views</span>
          <span style={{ color: '#e4e4e7', fontSize: '12px' }}><strong>{data.saves}</strong> salvamentos</span>
        </div>
      </div>
    </div>
  );
}

export function InstagramCommunityGrowth({ data }) {
  return (
    <div className="premium-card">
      <h3 style={{ margin: '0 0 20px 0', fontSize: '16px', color: '#fff' }}>Crescimento da Comunidade</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <span style={{ color: '#9898a6', fontSize: '13px', display: 'block' }}>Novos seguidores</span>
            <strong style={{ color: '#fff', fontSize: '24px' }}>+{data.newFollowers}</strong>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span style={{ color: '#636472', fontSize: '12px', display: 'block' }}>Seguidores / publicação</span>
            <span style={{ color: '#4ade80', fontSize: '14px', fontWeight: '500' }}>+{data.followersPerPost}</span>
          </div>
        </div>
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)' }}></div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <span style={{ color: '#9898a6', fontSize: '13px', display: 'block' }}>Interações totais</span>
            <strong style={{ color: '#fff', fontSize: '24px' }}>{data.interactions}</strong>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span style={{ color: '#636472', fontSize: '12px', display: 'block' }}>Interações / publicação</span>
            <span style={{ color: '#E1306C', fontSize: '14px', fontWeight: '500' }}>{data.interactionsPerPost}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function InstagramBestTimes({ data }) {
  return (
    <div className="premium-card">
      <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', color: '#fff' }}>Melhores horários para publicar</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ padding: '12px', background: 'rgba(225, 48, 108, 0.05)', border: '1px solid rgba(225, 48, 108, 0.2)', borderRadius: '8px' }}>
          <span style={{ fontSize: '11px', color: '#E1306C', display: 'block', textTransform: 'uppercase', fontWeight: 'bold' }}>Pico / Horário</span>
          <strong style={{ fontSize: '16px', color: '#fff' }}>{data.peak}</strong>
          <span style={{ fontSize: '12px', color: '#9898a6', display: 'block', marginTop: '4px' }}>Melhor janela: {data.window}</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {data.ranking.map((item, idx) => (
            <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', background: 'rgba(255,255,255,0.02)', borderRadius: '6px' }}>
              <span style={{ color: '#fff', fontSize: '13px', fontWeight: '500' }}>{item.rank} {item.dayTime}</span>
              <span style={{ fontSize: '10px', color: '#E1306C', background: 'rgba(225, 48, 108, 0.1)', padding: '2px 8px', borderRadius: '4px' }}>{item.badge}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function InstagramInteractionsBreakdown({ data }) {
  return (
    <div className="premium-card">
      <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', color: '#fff' }}>Interações</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <IntBlock label="Curtidas" value={data.likes} />
        <IntBlock label="Comentários" value={data.comments} />
        <IntBlock label="Compartilhamentos" value={data.shares} />
        <IntBlock label="Salvamentos" value={data.saves} />
      </div>
    </div>
  );
}

function IntBlock({ label, value }) {
  return (
    <div style={{ background: 'rgba(255,255,255,0.02)', padding: '14px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.03)' }}>
      <span style={{ color: '#9898a6', fontSize: '12px', display: 'block', marginBottom: '4px' }}>{label}</span>
      <strong style={{ color: '#fff', fontSize: '18px' }}>{value}</strong>
    </div>
  );
}