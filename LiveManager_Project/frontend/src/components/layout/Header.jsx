import React from 'react';
import { useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';

export default function Header({ onOpenMobile }) {
  const location = useLocation();

  const getPageTitle = () => {
    const path = location.pathname;
    if (path === '/dashboard' || path === '/dashboard/') return 'Visão Geral';
    if (path.includes('/youtube')) return 'YouTube Analytics';
    if (path.includes('/instagram')) return 'Instagram Analytics';
    if (path.includes('/tiktok')) return 'TikTok Analytics';
    if (path.includes('/twitch')) return 'Twitch Analytics';
    if (path.includes('/configuracoes')) return 'Configurações';
    return 'Painel de Controle';
  };

  return (
    <header className="global-header">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button className="menu-toggle" onClick={onOpenMobile} aria-label="Abrir menu lateral">
          <Menu size={22} />
        </button>
        <h1 style={{ margin: 0, fontSize: '16px', fontWeight: '500', color: '#e4e4e7', letterSpacing: '0.5px' }}>
          {getPageTitle()}
        </h1>
      </div>
      <div></div>
    </header>
  );
}