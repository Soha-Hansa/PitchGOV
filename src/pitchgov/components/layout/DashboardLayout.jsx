import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import MetricStrip from '../sections/MetricStrip';
import OpportunitySection from '../sections/OpportunitySection';
import AIMatchingSection from '../sections/AIMatchingSection';
import ApplicationTimelineSection from '../sections/ApplicationTimelineSection';
import ActiveProjectSection from '../sections/ActiveProjectSection';
import QuickActionsSection from '../sections/QuickActionsSection';
import FinalCTASection from '../sections/FinalCTASection';
import OpportunityModal from '../ui/OpportunityModal';
import NotificationDrawer from '../ui/NotificationDrawer';
import { recommendedOpportunities, notificationsList } from '../../data/startupData';

export default function DashboardLayout() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [notifications, setNotifications] = useState(notificationsList);

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleMarkAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const handleSelectOpportunity = (opp) => {
    setSelectedOpportunity(opp);
  };

  const toggleSidebarCollapse = () => {
    setIsSidebarCollapsed(prev => !prev);
  };

  const handleActionClick = (action) => {
    if (action.id === 'action-1') {
      // Scroll to opportunity section
      const el = document.querySelector('.opportunity-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Open #1 opportunity modal
      setSelectedOpportunity(recommendedOpportunities[0]);
    }
  };

  const handleExploreClick = () => {
    const el = document.querySelector('.opportunity-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewMatchesClick = () => {
    const el = document.querySelector('.ai-matching-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`app-container ${isSidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
      {/* Fixed Navigation Sidebar */}
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        unreadCount={unreadCount}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
        isSidebarCollapsed={isSidebarCollapsed}
        onToggleSidebarCollapse={toggleSidebarCollapse}
        onOpenNotifications={() => setIsNotifOpen(true)}
      />

      {/* Main Page Layout Wrapper */}
      <div className="main-wrapper">
        <main className="content-area">
          {/* Top Bar Header */}
          <Topbar 
            onToggleMobileMenu={() => setIsMobileOpen(!isMobileOpen)}
            onOpenNotifications={() => setIsNotifOpen(true)}
            unreadCount={unreadCount}
            isSidebarCollapsed={isSidebarCollapsed}
            onToggleSidebarCollapse={toggleSidebarCollapse}
          />

          {/* Vertical Scroll-Driven Storytelling Experience */}
          <div className="dashboard-scroll-flow">
            {/* SECTION 01: INTRODUCTION & HORIZONTAL METRIC SYSTEM */}
            <MetricStrip />

            <hr className="section-divider" />

            {/* SECTION 02: RECOMMENDED OPPORTUNITIES */}
            <OpportunitySection onSelectOpportunity={handleSelectOpportunity} />

            <hr className="section-divider" />

            {/* SECTION 03: DEEP AI MATCHING SHOWCASE */}
            <AIMatchingSection />

            <hr className="section-divider" />

            {/* SECTION 04: APPLICATION TIMELINE */}
            <ApplicationTimelineSection onSelectApplication={(app) => handleSelectOpportunity(recommendedOpportunities[0])} />

            <hr className="section-divider" />

            {/* SECTION 05: ACTIVE PROJECT & DEPLOYMENT KPI IMPACT */}
            <ActiveProjectSection />

            <hr className="section-divider" />

            {/* SECTION 06: QUICK ACTIONS */}
            <QuickActionsSection onActionClick={handleActionClick} />

            <hr className="section-divider" />

            {/* FINAL EDITORIAL CTA */}
            <FinalCTASection 
              onExploreClick={handleExploreClick}
              onViewMatchesClick={handleViewMatchesClick}
            />
          </div>
        </main>
      </div>

      {/* Interactive Overlays */}
      {selectedOpportunity && (
        <OpportunityModal 
          opportunity={selectedOpportunity} 
          onClose={() => setSelectedOpportunity(null)} 
        />
      )}

      {isNotifOpen && (
        <NotificationDrawer 
          notifications={notifications}
          onClose={() => setIsNotifOpen(false)}
          onMarkAllRead={handleMarkAllRead}
        />
      )}
    </div>
  );
}
