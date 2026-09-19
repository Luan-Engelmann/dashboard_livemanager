import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

export default function DashboardLayout() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="app-layout">
      <div className={`mobile-overlay ${isMobileOpen ? 'open' : ''}`} onClick={() => setIsMobileOpen(false)} />
      
      <div className={`sidebar-container ${isMobileOpen ? 'open' : ''}`}>
         <Sidebar onCloseMobile={() => setIsMobileOpen(false)} />
      </div>

      <div className="main-content">
        <Header onOpenMobile={() => setIsMobileOpen(true)} />
        
        <main className="content-area custom-scrollbar">
          <Outlet />
        </main>
      </div>
    </div>
  );
}