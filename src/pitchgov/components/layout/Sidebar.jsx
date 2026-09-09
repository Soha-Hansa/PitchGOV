import React from 'react';
import { 
  LayoutDashboard, 
  Search, 
  Sparkles, 
  FileText, 
  FolderKanban, 
  Coins, 
  Bell, 
  User, 
  Settings, 
  LogOut, 
  Building2,
  PanelLeftClose,
  X
} from 'lucide-react';
import { startupProfile } from '../../data/startupData';
import PitchgovLogo from '../ui/PitchgovLogo';
import './Sidebar.css';

export default function Sidebar({ 
  activeTab, 
  setActiveTab, 
  unreadCount, 
  isMobileOpen, 
  setIsMobileOpen,
  isSidebarCollapsed,
  onToggleSidebarCollapse,
  onOpenNotifications 
}) {
  const mainNav = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'opportunities', label: 'Find Opportunities', icon: Search, badge: '12' },
    { id: 'matches', label: 'My Matches', icon: Sparkles },
    { id: 'applications', label: 'My Applications', icon: FileText, badge: '5' },
    { id: 'projects', label: 'My Projects', icon: FolderKanban, badge: '1' },
    { id: 'funding', label: 'Funding', icon: Coins }
  ];

  const systemNav = [
    { id: 'notifications', label: 'Notifications', icon: Bell, badge: unreadCount > 0 ? unreadCount : null, action: onOpenNotifications },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const handleNavClick = (navItem) => {
    if (navItem.action) {
      navItem.action();
    } else {
      setActiveTab(navItem.id);
    }
    if (isMobileOpen) {
      setIsMobileOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="mobile-backdrop" 
          onClick={() => setIsMobileOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(24, 22, 29, 0.4)',
            backdropFilter: 'blur(4px)',
            zIndex: 99
          }}
        />
      )}

      <aside className={`sidebar ${isMobileOpen ? 'mobile-open' : ''}`}>
        <div>
          {/* Official Application Logo Header */}
          <div className="sidebar-brand">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
              <PitchgovLogo size="medium" />
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <button 
                  className="btn-icon sidebar-toggle-btn"
                  onClick={onToggleSidebarCollapse}
                  title="Hide sidebar"
                  aria-label="Hide sidebar"
                  style={{ width: 32, height: 32 }}
                >
                  <PanelLeftClose size={18} />
                </button>
                {isMobileOpen && (
                  <button 
                    className="btn-icon" 
                    onClick={() => setIsMobileOpen(false)}
                    style={{ width: 32, height: 32 }}
                  >
                    <X size={18} />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Main Navigation */}
          <nav className="sidebar-nav-container">
            <div className="sidebar-group-title">MAIN NAVIGATION</div>
            {mainNav.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  className={`nav-item ${isActive ? 'active' : ''}`}
                  onClick={() => handleNavClick(item)}
                >
                  {isActive && <div className="nav-active-indicator" />}
                  <Icon size={19} />
                  <span>{item.label}</span>
                  {item.badge && <span className="nav-badge">{item.badge}</span>}
                </button>
              );
            })}

            <hr className="sidebar-divider" />

            <div className="sidebar-group-title">SYSTEM</div>
            {systemNav.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  className={`nav-item ${isActive ? 'active' : ''}`}
                  onClick={() => handleNavClick(item)}
                >
                  {isActive && <div className="nav-active-indicator" />}
                  <Icon size={19} />
                  <span>{item.label}</span>
                  {item.badge && <span className="nav-badge">{item.badge}</span>}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Footer Startup Card */}
        <div className="sidebar-footer">
          <div className="startup-profile-card">
            <div className="startup-avatar">
              {startupProfile.avatarInitials}
            </div>
            <div className="startup-info">
              <span className="startup-name">{startupProfile.name}</span>
              <span className="startup-meta">{startupProfile.stage} • {startupProfile.sector}</span>
            </div>
            <button className="btn-logout" title="Sign out">
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
