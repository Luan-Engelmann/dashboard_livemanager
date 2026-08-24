// O App agora é responsável unicamente por gerenciar as URLs e envolver as telas protegidas com o ProtectedRoute.

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Instagram from './pages/Instagram';
import TikTok from './pages/TikTok';
import YouTube from './pages/YouTube';
import Twitch from './pages/Twitch';
import ProtectedRoute from './components/auth/ProtectedRoute';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Se tentar acessar a raiz, joga para o login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* Rota Pública */}
        <Route path="/login" element={<Login />} />
        
        {/* Rotas Protegidas envolvidas pelo verificador de token */}
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/dashboard/instagram" element={<ProtectedRoute><Instagram /></ProtectedRoute>} />
        <Route path="/dashboard/tiktok" element={<ProtectedRoute><TikTok /></ProtectedRoute>} />
        <Route path="/dashboard/youtube" element={<ProtectedRoute><YouTube /></ProtectedRoute>} />
        <Route path="/dashboard/twitch" element={<ProtectedRoute><Twitch /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;