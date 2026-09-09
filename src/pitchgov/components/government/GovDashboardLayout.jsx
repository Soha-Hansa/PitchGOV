import React, { useState } from 'react';
import GovSidebar from './GovSidebar';
import GovTopbar from './GovTopbar';
import GovOverviewSection from './sections/GovOverviewSection';
import GovChallengesSection from './sections/GovChallengesSection';
import GovAIMatchCenterpiece from './sections/GovAIMatchCenterpiece';
import GovApplicationsSection from './sections/GovApplicationsSection';
import GovFundedProjectsSection from './sections/GovFundedProjectsSection';
import GovImpactSection from './sections/GovImpactSection';
import GovFinalSection from './sections/GovFinalSection';
import OpportunityModal from '../ui/OpportunityModal';
import NotificationDrawer from '../ui/NotificationDrawer';
import { recommendedOpportunities, notificationsList } from '../../data/startupData';

export default function GovDashboardLayout({ onSwitchToStartupView }) {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [selectedEval, setSelectedEval] = useState(null);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [notifications, setNotifications] = useState(notificationsList);

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleMarkAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const handleSelectFullEvaluation = () => {
    setSelectedEval(recommendedOpportunities[0]);
  };

  const toggleSidebarCollapse = () => {
    setIsSidebarCollapsed(prev => !prev);
  };

  return (
    <div className={`app-container ${isSidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
      {/* Government Navigation Sidebar */}
      <GovSidebar 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
        isSidebarCollapsed={isSidebarCollapsed}
        onToggleSidebarCollapse={toggleSidebarCollapse}
        onSwitchToStartupView={onSwitchToStartupView}
        onOpenNotifications={() => setIsNotifOpen(true)}
      />

      {/* Main Page Layout Wrapper */}
      <div className="main-wrapper">
        <main className="content-area">
          {/* Top Bar Header */}
          <GovTopbar 
            onToggleMobileMenu={() => setIsMobileOpen(!isMobileOpen)}
            onOpenNotifications={() => setIsNotifOpen(true)}
            unreadCount={unreadCount}
            isSidebarCollapsed={isSidebarCollapsed}
            onToggleSidebarCollapse={toggleSidebarCollapse}
          />

          {/* Vertical Scroll Storytelling Command Center */}
          <div className="dashboard-scroll-flow">
            {/* SECTION 01: GOVERNMENT OVERVIEW */}
            <GovOverviewSection />

            <hr className="section-divider" />

            {/* SECTION 02: ACTIVE GOVERNMENT CHALLENGES */}
            <GovChallengesSection onSelectChallenge={() => setSelectedEval(recommendedOpportunities[0])} />

            <hr className="section-divider" />

            {/* SECTION 03: MAGNIFICENT AI MATCHING CENTERPIECE */}
            <GovAIMatchCenterpiece onSelectFullEvaluation={handleSelectFullEvaluation} />

            <hr className="section-divider" />

            {/* SECTION 04: APPLICATIONS REVIEW QUEUE */}
            <GovApplicationsSection onReviewApplication={() => setSelectedEval(recommendedOpportunities[0])} />

            <hr className="section-divider" />

            {/* SECTION 05: FUNDED PROJECTS & MILESTONES */}
            <GovFundedProjectsSection />

            <hr className="section-divider" />

            {/* SECTION 06: IMPACT & ANALYTICS */}
            <GovImpactSection />

            <hr className="section-divider" />

            {/* FINAL INSTITUTIONAL STATEMENT */}
            <GovFinalSection onSwitchToStartupView={onSwitchToStartupView} />
          </div>
        </main>
      </div>

      {/* Interactive Overlays */}
      {selectedEval && (
        <OpportunityModal 
          opportunity={selectedEval}
          onClose={() => setSelectedEval(null)}
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
