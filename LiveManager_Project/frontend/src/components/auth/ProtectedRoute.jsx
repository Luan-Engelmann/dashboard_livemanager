// Este componente envolve as rotas privadas. Ele verifica a existência do token armazenado. Se não existir, barra o acesso e redireciona.

import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Reutiliza exatamente a mesma chave que já era salva pelo sistema
  const token = localStorage.getItem('token');
  
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;