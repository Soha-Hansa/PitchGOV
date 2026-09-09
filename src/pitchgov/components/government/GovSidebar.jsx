import React from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  Sparkles, 
  FileCheck, 
  FolderKanban, 
  Coins, 
  BarChart3, 
  Bell, 
  ShieldCheck, 
  ArrowRightLeft,
  PanelLeftClose,
  X 
} from 'lucide-react';
import PitchgovLogo from '../ui/PitchgovLogo';
import { govtProfile } from '../../data/governmentData';
import './GovSidebar.css';

export default function GovSidebar({ 
  activeTab, 
  setActiveTab, 
  isMobileOpen, 
  setIsMobileOpen, 
  isSidebarCollapsed,
  onToggleSidebarCollapse,
  onSwitchToStartupView,
  onOpenNotifications 
}) {
  const govNav = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'requirements', label: 'My Requirements', icon: FileText, badge: '08' },
    { id: 'matches', label: 'Startup Matches', icon: Sparkles, badge: '126' },
    { id: 'applications', label: 'Applications', icon: FileCheck, badge: '43' },
    { id: 'projects', label: 'Funded Projects', icon: FolderKanban, badge: '12' },
    { id: 'funding', label: 'Funding & Milestones', icon: Coins },
    { id: 'impact', label: 'Impact & Analytics', icon: BarChart3 },
    { id: 'notifications', label: 'Notifications', icon: Bell, badge: '3', action: onOpenNotifications }
  ];

  const handleNavClick = (item) => {
    if (item.action) {
      item.action();
    } else {
      setActiveTab(item.id);
    }
    if (isMobileOpen) {
      setIsMobileOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div 
          className="mobile-backdrop"
          onClick={() => setIsMobileOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(17, 14, 27, 0.45)',
            backdropFilter: 'blur(4px)',
            zIndex: 99
          }}
        />
      )}

      <aside className={`gov-sidebar ${isMobileOpen ? 'mobile-open' : ''}`}>
        <div>
          {/* Official Logo & Portal Badge */}
          <div className="gov-sidebar-brand">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
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

            <div className="gov-portal-tag">
              <ShieldCheck size={13} />
              <span>GOVERNMENT PORTAL</span>
            </div>
          </div>

          {/* Nav List */}
          <nav className="gov-sidebar-nav">
            <div className="gov-nav-group-title">COMMAND CENTER</div>
            {govNav.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  className={`gov-nav-item ${isActive ? 'active' : ''}`}
                  onClick={() => handleNavClick(item)}
                >
                  {isActive && <div className="gov-active-indicator" />}
                  <Icon size={18} />
                  <span>{item.label}</span>
                  {item.badge && <span className="gov-nav-badge">{item.badge}</span>}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Footer Profile & Portal Switcher */}
        <div className="gov-sidebar-footer">
          <button 
            className="btn-switch-portal"
            onClick={onSwitchToStartupView}
            title="Switch to Startup Dashboard view"
          >
            <ArrowRightLeft size={14} />
            <span>Switch to Startup View</span>
          </button>

          <div className="gov-profile-card">
            <div className="gov-avatar-badge">
              {govtProfile.avatarInitials}
            </div>
            <div className="gov-info-col">
              <span className="gov-dept-name">{govtProfile.department}</span>
              <span className="gov-sub-role">{govtProfile.officerName}</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
