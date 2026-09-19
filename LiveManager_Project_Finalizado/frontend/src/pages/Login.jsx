import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock, Eye, EyeOff, ArrowRight, ShieldCheck, TrendingUp, BarChart2, Zap } from 'lucide-react';

export default function Login() {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLoginAction = (e) => {
    if (e) e.preventDefault();
    
    localStorage.setItem('token', 'mock-jwt-token-troia');
    localStorage.setItem('isAuthenticated', 'true');
    window.location.href = '/dashboard';
  };

  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      backgroundColor: '#06070B',
      color: '#FFFFFF',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflowX: 'hidden',
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
    }}>
      
      {/* Background Glow Effects */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '-10%',
        width: '50vw',
        height: '50vw',
        borderRadius: '50%',
        background: 'rgba(79, 70, 229, 0.08)',
        filter: 'blur(120px)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        right: '-5%',
        width: '40vw',
        height: '40vw',
        borderRadius: '50%',
        background: 'rgba(124, 58, 237, 0.08)',
        filter: 'blur(120px)',
        pointerEvents: 'none'
      }} />

      {/* Main Container adaptado para mobile */}
      <div className="login-container" style={{
        width: '100%',
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '24px 16px',
        display: 'flex',
        flexDirection: 'column-reverse', // No mobile, o login vai para cima se preferir, ou ajuste conforme media query
        gap: '32px',
        alignItems: 'center',
        position: 'relative',
        zIndex: 10
      }}>
        
        {/* ESQUERDA: Hero / Apresentação (Fica escondido ou compacto no mobile para priorizar o login) */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px', width: '100%', maxWidth: '560px' }}>
          
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            borderRadius: '9999px',
            background: 'rgba(99, 102, 241, 0.1)',
            border: '1px solid rgba(99, 102, 241, 0.2)',
            color: '#818cf8',
            fontSize: '11px',
            fontWeight: '600',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            width: 'fit-content'
          }}>
            <Zap size={14} />
            <span>TROIA ANALYTICS</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h1 style={{
              fontSize: 'clamp(26px, 4vw, 52px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: '#ffffff',
              lineHeight: 1.15
            }}>
              Transforme seus conteúdos em <span style={{ background: 'linear-gradient(135deg, #818cf8 0%, #c084fc 50%, #22d3ee 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>decisões através de dados.</span>
            </h1>
            <p style={{
              fontSize: '14px',
              color: '#9898a6',
              maxWidth: '520px',
              lineHeight: 1.6
            }}>
              Acompanhe visualizações, alcance, engajamento e crescimento dos seus conteúdos em diferentes plataformas, tudo em um único lugar.
            </p>
          </div>

          {/* Cards de Métricas Mockados */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '12px',
            paddingTop: '4px'
          }}>
            <div style={{ padding: '12px', borderRadius: '12px', background: 'rgba(18, 24, 36, 0.5)', border: '1px solid rgba(255, 255, 255, 0.06)', backdropFilter: 'blur(8px)' }}>
              <div style={{ fontSize: '10px', color: '#9898a6', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
                <BarChart2 size={12} style={{ color: '#818cf8' }} />
                Visualizações
              </div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff' }}>124,8 mil</div>
            </div>

            <div style={{ padding: '12px', borderRadius: '12px', background: 'rgba(18, 24, 36, 0.5)', border: '1px solid rgba(255, 255, 255, 0.06)', backdropFilter: 'blur(8px)' }}>
              <div style={{ fontSize: '10px', color: '#9898a6', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
                <TrendingUp size={12} style={{ color: '#34d399' }} />
                Engajamento
              </div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#34d399' }}>+18,5%</div>
            </div>

            <div style={{ padding: '12px', borderRadius: '12px', background: 'rgba(18, 24, 36, 0.5)', border: '1px solid rgba(255, 255, 255, 0.06)', backdropFilter: 'blur(8px)' }}>
              <div style={{ fontSize: '10px', color: '#9898a6', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
                <ShieldCheck size={12} style={{ color: '#c084fc' }} />
                Plataforma
              </div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#c084fc' }}>TikTok</div>
            </div>
          </div>

          {/* Rodapé de Plataformas */}
          <div style={{
            fontSize: '11px',
            color: '#6b7280',
            fontWeight: 500,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            flexWrap: 'wrap'
          }}>
            <span>Instagram</span><span>•</span>
            <span>TikTok</span><span>•</span>
            <span>YouTube</span><span>•</span>
            <span>Twitch</span>
          </div>

        </div>

        {/* DIREITA (ou TOPO no mobile): Card de Login */}
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <div style={{
            width: '100%',
            maxWidth: '400px',
            padding: '28px 24px',
            borderRadius: '20px',
            background: 'rgba(18, 24, 36, 0.85)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            position: 'relative'
          }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative', zIndex: 10 }}>
              
              {/* Logo e Cabeçalho do Card */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '10px' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '14px',
                  background: '#0b1120',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.4)',
                  overflow: 'hidden',
                  padding: '6px'
                }}>
                  <img 
                    src="/Logo.png" 
                    alt="OtaldoTroia Logo" 
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                  />
                </div>
                <div>
                  <h2 style={{ fontSize: '17px', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.01em', margin: 0 }}>Bem-vindo novamente</h2>
                  <p style={{ fontSize: '12px', color: '#9898a6', margin: '4px 0 0 0' }}>Entre na sua conta para acessar o painel</p>
                </div>
              </div>

              {/* Mensagem de Erro */}
              {error && (
                <div data-testid="login-error" style={{
                  padding: '10px 14px',
                  borderRadius: '10px',
                  background: 'rgba(239, 68, 68, 0.1)',
                  border: '1px solid rgba(239, 68, 68, 0.2)',
                  color: '#f87171',
                  fontSize: '12px',
                  textAlign: 'center',
                  fontWeight: 500
                }}>
                  {error}
                </div>
              )}

              {/* Formulário */}
              <form onSubmit={handleLoginAction} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                
                {/* Campo Usuário */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '12px', fontWeight: 500, color: '#d1d5db' }}>Usuário</label>
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '0', bottom: '0', left: '12px', display: 'flex', alignItems: 'center', pointerEvents: 'none', color: '#6b7280' }}>
                      <User size={16} />
                    </div>
                    <input
                      type="text"
                      data-testid="username"
                      autoComplete="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      placeholder="Digite seu usuário"
                      style={{
                        width: '100%',
                        boxSizing: 'border-box',
                        padding: '10px 14px 10px 38px',
                        background: 'rgba(11, 17, 32, 0.8)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '10px',
                        fontSize: '13px',
                        color: '#ffffff',
                        outline: 'none',
                        transition: 'border-color 0.2s'
                      }}
                    />
                  </div>
                </div>

                {/* Campo Senha */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '12px', fontWeight: 500, color: '#d1d5db' }}>Senha</label>
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '0', bottom: '0', left: '12px', display: 'flex', alignItems: 'center', pointerEvents: 'none', color: '#6b7280' }}>
                      <Lock size={16} />
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      data-testid="password"
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="••••••••"
                      style={{
                        width: '100%',
                        boxSizing: 'border-box',
                        padding: '10px 38px 10px 38px',
                        background: 'rgba(11, 17, 32, 0.8)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '10px',
                        fontSize: '13px',
                        color: '#ffffff',
                        outline: 'none',
                        transition: 'border-color 0.2s'
                      }}
                    />
                    <button
                      type="button"
                      data-testid="toggle-password"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{
                        position: 'absolute',
                        top: '0',
                        bottom: '0',
                        right: '12px',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#6b7280',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                {/* Opções */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '12px', paddingTop: '2px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', color: '#9898a6', userSelect: 'none' }}>
                    <input
                      type="checkbox"
                      data-testid="remember-me"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.value)}
                      style={{ accentColor: '#6366f1', cursor: 'pointer', width: '14px', height: '14px' }}
                    />
                    Manter conectado
                  </label>
                  <a href="#reset" onClick={(e) => e.preventDefault()} style={{ color: '#818cf8', textDecoration: 'none' }}>
                    Esqueceu?
                  </a>
                </div>

                {/* Botão Entrar */}
                <button
                  type="submit"
                  data-testid="login-button"
                  onClick={handleLoginAction}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    marginTop: '4px',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, #6366f1 0%, #7c3aed 100%)',
                    color: '#ffffff',
                    fontSize: '13px',
                    fontWeight: 600,
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                >
                  Entrar no painel
                  <ArrowRight size={16} />
                </button>

              </form>

            </div>
          </div>
        </div>

      </div>

      {/* Rodapé */}
      <div style={{
        position: 'absolute',
        bottom: '12px',
        right: '20px',
        fontSize: '10px',
        color: '#6b7280',
        letterSpacing: '0.02em',
        display: 'none' // Escondido no mobile para evitar poluição visual
      }}>
        Troia Analytics — Desenvolvido por TroiaTech
      </div>

      {/* Media query embutida via tag style para telas grandes lado a lado */}
      <style>{`
        @media (min-width: 900px) {
          .login-container {
            flex-direction: row !important;
            justify-content: space-between !important;
            padding: 48px 24px !important;
          }
        }
      `}</style>

    </div>
  );
}