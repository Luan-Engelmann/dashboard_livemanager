import React, { useState } from 'react';
import './index.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage(''); 
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:8000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.access_token);
        setIsLoggedIn(true);
      } else {
        setMessage('Usuário ou senha incorretos.');
      }
    } catch (error) {
      setMessage('Erro ao conectar com o servidor.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoggedIn) {
    return (
      <div style={styles.dashboard}>
        <div style={styles.dashboardHeader}>
          <h2>Painel Principal</h2>
          <button onClick={() => setIsLoggedIn(false)} style={styles.logoutButton}>
            Sair
          </button>
        </div>
        <div style={styles.dashboardContent}>
          <p>Autenticado com sucesso! Módulo de Dashboard em construção...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="login-container">
      
      {/* LADO ESQUERDO - BRANDING */}
      <div className="left-panel">
        <span className="brand-badge">TROIA ANALYTICS</span>
        <h1 className="hero-title">Transforme seus conteúdos em<br/>decisões através de dados.</h1>
        <p className="hero-subtitle">
          Acompanhe visualizações, alcance, engajamento e crescimento dos seus conteúdos em diferentes plataformas, tudo em um único lugar.
        </p>
        
        <div className="floating-cards">
          <div className="float-card">
            <span>Visualizações</span>
            <strong>124,8 mil</strong>
          </div>
          <div className="float-card">
            <span>Engajamento</span>
            <strong style={{ color: '#4ade80' }}>+18,5%</strong>
          </div>
          <div className="float-card">
            <span>Melhor Plataforma</span>
            <strong style={{ color: '#7657ff' }}>TikTok</strong>
          </div>
        </div>

        <div className="platforms">
          Instagram • TikTok • YouTube • Twitch
        </div>
      </div>

      {/* LADO DIREITO - AUTENTICAÇÃO */}
      <div className="right-panel">
        <div className="auth-card">
          <div className="auth-header">
            <img src="/Logo.png" alt="Troia Analytics / oTalDoTroia Logo" />
            <h2>Bem-vindo novamente</h2>
            <p>Entre na sua conta para acessar o painel</p>
          </div>

          <form onSubmit={handleLogin}>
            
            <div className="input-group">
              <label>Usuário</label>
              <div className="input-wrapper">
                <svg className="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="dark-input"
                  placeholder="Seu usuário de acesso"
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label>Senha</label>
              <div className="input-wrapper">
                <svg className="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="dark-input"
                  placeholder="••••••••"
                  required
                />
                
                <button 
                  type="button" 
                  className="toggle-pwd" 
                  onClick={() => setShowPassword(!showPassword)}
                  title={showPassword ? "Ocultar senha" : "Mostrar senha"}
                >
                  {showPassword ? (
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                  ) : (
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  )}
                </button>
              </div>
            </div>

            <div className="form-options">
              <label className="checkbox-wrapper">
                <input type="checkbox" />
                Manter conectado
              </label>
              <a href="#" className="forgot-link">Esqueceu sua senha?</a>
            </div>

            <button type="submit" className="btn-primary" disabled={isLoading}>
              {isLoading ? 'Conectando...' : 'Entrar no painel'}
            </button>
          </form>

          {message && <div className="error-box">{message}</div>}
        </div>
        
        {/* NOVA ASSINATURA DA TROIATECH */}
        <div className="global-footer">
          Troia Analytics — Desenvolvido por <strong>TroiaTech</strong>
        </div>

      </div>
    </div>
  );
}

const styles = {
  dashboard: {
    minHeight: '100vh',
    backgroundColor: '#09090b',
    color: '#fafafa',
    fontFamily: "'Inter', sans-serif",
  },
  dashboardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    backgroundColor: '#18181b',
    borderBottom: '1px solid #27272a',
  },
  logoutButton: {
    padding: '8px 16px',
    backgroundColor: '#27272a',
    color: '#fafafa',
    border: '1px solid #3f3f46',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  dashboardContent: {
    padding: '40px',
  }
};

export default App;