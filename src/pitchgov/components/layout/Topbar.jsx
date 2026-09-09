import React from 'react';
import { Bell, Menu, UserCheck, PanelLeftOpen } from 'lucide-react';
import { startupProfile } from '../../data/startupData';
import './Topbar.css';

export default function Topbar({ 
  onToggleMobileMenu, 
  onOpenNotifications, 
  unreadCount,
  isSidebarCollapsed,
  onToggleSidebarCollapse
}) {
  // Current local date formatted as September 7, 2026
  const formattedDate = "September 7, 2026";

  return (
    <header className="topbar">
      <div className="topbar-left">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {isSidebarCollapsed && (
            <button 
              className="btn-icon sidebar-expand-btn"
              onClick={onToggleSidebarCollapse}
              title="Show sidebar"
              aria-label="Show sidebar"
              style={{
                backgroundColor: 'var(--lavender-soft)',
                color: 'var(--purple-deep)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-md)',
                width: 36,
                height: 36,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <PanelLeftOpen size={19} />
            </button>
          )}
          <div className="topbar-breadcrumb">
            <span>STARTUP</span>
            <span className="breadcrumb-sep">/</span>
            <span>DASHBOARD</span>
          </div>
        </div>
        <h1 className="topbar-welcome-heading">
          Good morning, {startupProfile.name}.
        </h1>
        <p className="topbar-subtitle">
          Your next opportunity could already be waiting.
        </p>
      </div>

      <div className="topbar-right">
        {/* Date Display */}
        <div className="date-pill">
          <span className="date-label">Today</span>
          <span className="date-value">{formattedDate}</span>
        </div>

        {/* Notification Button */}
        <div className="notif-btn-wrapper">
          <button 
            className="btn-icon" 
            onClick={onOpenNotifications} 
            title="Notifications"
            aria-label="Notifications"
          >
            <Bell size={19} />
            {unreadCount > 0 && <span className="notif-badge-dot" />}
          </button>
        </div>

        {/* Profile Pill */}
        <button 
          className="btn-secondary" 
          style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', gap: '0.5rem' }}
          title="Startup Profile"
        >
          <UserCheck size={16} color="var(--purple-primary)" />
          <span>{startupProfile.name}</span>
        </button>

        {/* Mobile Hamburger Menu */}
        <button 
          className="btn-icon mobile-menu-btn" 
          onClick={onToggleMobileMenu}
          aria-label="Open Navigation Menu"
        >
          <Menu size={20} />
        </button>
      </div>
    </header>
  );
}
