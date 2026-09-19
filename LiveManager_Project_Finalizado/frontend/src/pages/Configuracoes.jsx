import React, { useState } from "react";
import { 
  User, 
  Share2, 
  Palette, 
  Bell, 
  Server, 
  LogOut, 
  Check, 
  ExternalLink
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { initialIntegrations, userProfileMock } from "../data/integrationsMockData";

export default function Configuracoes() {
  const navigate = useNavigate();

  const [integrations, setIntegrations] = useState(initialIntegrations);
  const [profile] = useState(userProfileMock);
  const [theme, setTheme] = useState("escuro");
  
  const [notifications, setNotifications] = useState({
    weeklySummary: true,
    growthAlerts: true,
    dropAlerts: true,
    monthlyReport: false,
  });

  const handleToggleNotification = (key) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleConnectToggle = (id) => {
    setIntegrations((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, connected: !item.connected } : item
      )
    );
  };

  return (
    <div className="analytics-page">
      
      {/* HEADER DA PÁGINA (Padrão idêntico aos dashboards de Analytics) */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div className="page-header-strip" style={{ borderLeft: '4px solid #6366f1', paddingLeft: '12px' }}>
            <h2 style={{ margin: 0, fontSize: '18px', fontWeight: '600', color: '#fff' }}>Configurações</h2>
            <p style={{ color: '#9898a6', margin: '4px 0 0 0', fontSize: '13px' }}>Gerencie sua conta, integrações e preferências.</p>
          </div>
        </div>
      </div>

      <div className="dashboard-main" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* 1. MEU PERFIL */}
        <div className="premium-card" style={{ padding: '24px', borderRadius: '16px', background: '#121824', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{ padding: '10px', borderRadius: '10px', background: 'rgba(99, 102, 241, 0.1)', color: '#818cf8' }}>
              <User size={20} />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '600', color: '#fff' }}>Meu Perfil</h3>
              <p style={{ margin: '2px 0 0 0', fontSize: '12px', color: '#9898a6' }}>Gerencie suas informações pessoais.</p>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'between', gap: '20px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: '1', minWidth: '240px' }}>
              <div style={{ width: '54px', height: '54px', borderRadius: '50%', background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 'bold', color: '#fff' }}>
                {profile.name.charAt(0)}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '500', color: '#fff' }}>
                  {profile.name}
                  <span style={{ fontSize: '10px', padding: '2px 8px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.1)', color: '#34d399', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                    Ativo
                  </span>
                </div>
                <div style={{ fontSize: '12px', color: '#9898a6' }}>{profile.email}</div>
                <div style={{ fontSize: '11px', color: '#6b7280' }}>Nome de exibição: <span style={{ color: '#d1d5db' }}>{profile.displayName}</span></div>
              </div>
            </div>

            <button 
              onClick={() => alert("Modo de edição preparado para futura implementação.")}
              style={{ background: 'rgba(255, 255, 255, 0.05)', color: '#e5e7eb', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '8px 16px', borderRadius: '8px', fontSize: '12px', fontWeight: '500', cursor: 'pointer', transition: 'all 0.2s' }}
              onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
              onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'}
            >
              Editar perfil
            </button>
          </div>
        </div>

        {/* 2. CONTAS CONECTADAS */}
        <div className="premium-card" style={{ padding: '24px', borderRadius: '16px', background: '#121824', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{ padding: '10px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.1)', color: '#34d399' }}>
              <Share2 size={20} />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '600', color: '#fff' }}>Contas Conectadas</h3>
              <p style={{ margin: '2px 0 0 0', fontSize: '12px', color: '#9898a6' }}>Gerencie as plataformas conectadas ao Troia Analytics.</p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
            {integrations.map((item) => (
              <div 
                key={item.id}
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '16px', borderRadius: '12px', background: 'rgba(0, 0, 0, 0.2)', border: '1px solid rgba(255, 255, 255, 0.06)', gap: '16px' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: '#1a2234', border: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#fff', fontSize: '12px', textTransform: 'uppercase' }}>
                    {item.name.substring(0, 2)}
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600', color: '#fff' }}>{item.name}</h4>
                    <span style={{ fontSize: '12px', color: '#9898a6' }}>{item.username}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.04)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px' }}>
                    {item.connected ? (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#34d399', fontWeight: '500' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34d399', boxShadow: '0 0 8px rgba(52, 211, 153, 0.6)' }}></span>
                        Conectado
                      </span>
                    ) : (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#6b7280' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4b5563' }}></span>
                        Não conectado
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => handleConnectToggle(item.id)}
                    style={{
                      padding: '6px 12px',
                      borderRadius: '8px',
                      fontSize: '12px',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      backgroundColor: item.connected ? 'rgba(255, 255, 255, 0.05)' : '#6366f1',
                      color: item.connected ? '#d1d5db' : '#fff',
                      border: item.connected ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
                    }}
                  >
                    {item.connected ? "Gerenciar" : "Conectar"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 & 4. APARÊNCIA E NOTIFICAÇÕES (Grid de 2 colunas) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          
          {/* Aparência */}
          <div className="premium-card" style={{ padding: '24px', borderRadius: '16px', background: '#121824', border: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{ padding: '10px', borderRadius: '10px', background: 'rgba(245, 158, 11, 0.1)', color: '#fbbf24' }}>
                  <Palette size={20} />
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '600', color: '#fff' }}>Aparência</h3>
                  <p style={{ margin: '2px 0 0 0', fontSize: '12px', color: '#9898a6' }}>Personalize a aparência do Troia Analytics.</p>
                </div>
              </div>

              <div style={{ paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <label style={{ fontSize: '12px', fontWeight: '500', color: '#d1d5db', display: 'block', marginBottom: '8px' }}>Tema</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                  {["escuro", "claro", "sistema"].map((t) => (
                    <button
                      key={t}
                      onClick={() => setTheme(t)}
                      style={{
                        padding: '10px',
                        borderRadius: '8px',
                        fontSize: '12px',
                        fontWeight: '500',
                        textTransform: 'capitalize',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        backgroundColor: theme === t ? 'rgba(99, 102, 241, 0.15)' : 'rgba(0, 0, 0, 0.2)',
                        color: theme === t ? '#818cf8' : '#9898a6',
                        border: theme === t ? '1px solid rgba(99, 102, 241, 0.4)' : '1px solid rgba(255, 255, 255, 0.06)'
                      }}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Notificações */}
          <div className="premium-card" style={{ padding: '24px', borderRadius: '16px', background: '#121824', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ padding: '10px', borderRadius: '10px', background: 'rgba(59, 130, 246, 0.1)', color: '#60a5fa' }}>
                <Bell size={20} />
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '600', color: '#fff' }}>Notificações</h3>
                <p style={{ margin: '2px 0 0 0', fontSize: '12px', color: '#9898a6' }}>Escolha quais informações você deseja receber.</p>
              </div>
            </div>

            <div style={{ paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.06)', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { key: "weeklySummary", label: "Resumo semanal" },
                { key: "growthAlerts", label: "Alertas de crescimento" },
                { key: "dropAlerts", label: "Alertas de queda de desempenho" },
                { key: "monthlyReport", label: "Relatório mensal" },
              ].map((item) => (
                <div key={item.key} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '12px', color: '#d1d5db' }}>{item.label}</span>
                  <button
                    onClick={() => handleToggleNotification(item.key)}
                    style={{
                      width: '40px',
                      height: '22px',
                      borderRadius: '11px',
                      display: 'flex',
                      alignItems: 'center',
                      padding: '2px',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s',
                      backgroundColor: notifications[item.key] ? '#6366f1' : '#374151',
                      border: 'none'
                    }}
                  >
                    <div
                      style={{
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        backgroundColor: '#fff',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                        transform: notifications[item.key] ? 'translateX(18px)' : 'translateX(0)',
                        transition: 'transform 0.2s'
                      }}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* 5. SISTEMA */}
        <div className="premium-card" style={{ padding: '24px', borderRadius: '16px', background: '#121824', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{ padding: '10px', borderRadius: '10px', background: 'rgba(168, 85, 247, 0.1)', color: '#c084fc' }}>
              <Server size={20} />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '600', color: '#fff' }}>Sistema</h3>
              <p style={{ margin: '2px 0 0 0', fontSize: '12px', color: '#9898a6' }}>Informações do Troia Analytics.</p>
            </div>
          </div>

          <div style={{ paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.06)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '24px', fontSize: '12px', color: '#9898a6' }}>
              <div>Versão: <span style={{ color: '#fff', fontWeight: '500' }}>1.0.0</span></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                Status: 
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#34d399', fontWeight: '500' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34d399' }}></span>
                  Operacional
                </span>
              </div>
              <div>Última sincronização: <span style={{ color: '#fff', fontWeight: '500' }}>Hoje, 13:42</span></div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <button 
                onClick={() => alert("Termos de Uso do Troia Analytics.")}
                style={{ background: 'none', border: 'none', color: '#9898a6', fontSize: '12px', cursor: 'pointer', padding: 0 }}
                onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
                onMouseOut={(e) => e.currentTarget.style.color = '#9898a6'}
              >
                Termos de Uso
              </button>
              <span style={{ color: '#4b5563' }}>•</span>
              <button 
                onClick={() => alert("Política de Privacidade do Troia Analytics.")}
                style={{ background: 'none', border: 'none', color: '#9898a6', fontSize: '12px', cursor: 'pointer', padding: 0 }}
                onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
                onMouseOut={(e) => e.currentTarget.style.color = '#9898a6'}
              >
                Política de Privacidade
              </button>
              <span style={{ color: '#4b5563' }}>•</span>
              <button
                type="button"
                data-testid="logout-button"
                onClick={handleLogout}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(239, 68, 68, 0.1)',
                  color: '#f87171',
                  border: '1px solid rgba(239, 68, 68, 0.2)',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  fontSize: '12px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = 'rgba(239, 68, 68, 0.2)'}
                onMouseOut={(e) => e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)'}
              >
                <LogOut size={14} />
                Sair
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}