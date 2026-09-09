import React from 'react';
import { Bell, Search, Menu, Building2, ShieldCheck, PanelLeftOpen } from 'lucide-react';
import { govtProfile } from '../../data/governmentData';
import './GovTopbar.css';

export default function GovTopbar({ 
  onToggleMobileMenu, 
  onOpenNotifications, 
  unreadCount,
  isSidebarCollapsed,
  onToggleSidebarCollapse
}) {
  return (
    <header className="gov-topbar">
      <div className="gov-topbar-left">
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
          <div className="gov-topbar-breadcrumb">
            <span>GOVERNMENT</span>
            <span style={{ color: 'var(--lilac-light)' }}>/</span>
            <span>COMMAND CENTER</span>
          </div>
        </div>
        <h1 className="gov-welcome-heading">
          Good morning, {govtProfile.department}.
        </h1>
        <p className="gov-topbar-subtitle">
          Monitor challenges, discover capable startups, and track innovation outcomes.
        </p>
      </div>

      <div className="gov-topbar-right">
        {/* Department Badge Indicator */}
        <div className="gov-dept-badge-pill">
          <div className="dept-badge-icon">
            <Building2 size={16} />
          </div>
          <div className="dept-badge-text">
            <span className="dept-badge-title">{govtProfile.department}</span>
            <span className="dept-badge-sub">Government Account</span>
          </div>
        </div>

        {/* Notifications */}
        <button 
          className="btn-icon"
          onClick={onOpenNotifications}
          title="Government Notifications"
          aria-label="Government Notifications"
        >
          <Bell size={19} />
          {unreadCount > 0 && <span className="notif-badge-dot" />}
        </button>

        {/* Mobile Hamburger Toggle */}
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
