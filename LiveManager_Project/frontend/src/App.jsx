import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import DashboardLayout from './components/layout/DashboardLayout';
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
        {/* Redireciona a raiz para login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* Rota Pública */}
        <Route path="/login" element={<Login />} />
        
        {/* Rotas Protegidas sob o DashboardLayout Global */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="youtube" element={<YouTube />} />
          <Route path="twitch" element={<Twitch />} />
          <Route path="instagram" element={<Instagram />} />
          <Route path="tiktok" element={<TikTok />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;