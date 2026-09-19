import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, MonitorPlay, Camera, Music2, Gamepad2, Settings, LogOut } from 'lucide-react';

export default function Sidebar({ onCloseMobile }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <>
      <div className="sidebar-logo">
        <h2 style={{ margin: 0, color: '#fff', fontSize: '18px', letterSpacing: '1px' }}>
          TROIA <span style={{ color: '#2878ff' }}>ANALYTICS</span>
        </h2>
      </div>

      <div className="sidebar-menu custom-scrollbar">
        <div className="menu-group">
          <p className="menu-title">Principal</p>
          <NavLink to="/dashboard" end className="nav-item home" onClick={onCloseMobile}>
            <LayoutDashboard /> Visão Geral
          </NavLink>
        </div>

        <div className="menu-group">
          <p className="menu-title">Plataformas</p>
          <NavLink to="/dashboard/youtube" className="nav-item yt" onClick={onCloseMobile}>
            <MonitorPlay /> YouTube
          </NavLink>
          <NavLink to="/dashboard/instagram" className="nav-item ig" onClick={onCloseMobile}>
            <Camera /> Instagram
          </NavLink>
          <NavLink to="/dashboard/tiktok" className="nav-item tk" onClick={onCloseMobile}>
            <Music2 /> TikTok
          </NavLink>
          <NavLink to="/dashboard/twitch" className="nav-item tw" onClick={onCloseMobile}>
            <Gamepad2 /> Twitch
          </NavLink>
        </div>

        <div className="menu-group">
          <p className="menu-title">Sistema</p>
          <NavLink to="/dashboard/configuracoes" className="nav-item sys" onClick={onCloseMobile}>
            <Settings /> Configurações
          </NavLink>
        </div>
      </div>

      <div className="sidebar-footer">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #2878ff, #7657ff)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold' }}>T</div>
            <span style={{ color: '#fff', fontSize: '13px', fontWeight: '500' }}>Admin</span>
          </div>
          <button onClick={handleLogout} style={{ background: 'none', border: 'none', color: '#9898a6', cursor: 'pointer', padding: '4px' }} title="Sair" aria-label="Sair">
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </>
  );
}