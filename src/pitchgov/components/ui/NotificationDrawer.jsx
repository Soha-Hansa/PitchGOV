import React from 'react';
import { X, Bell, CheckCheck, Sparkles, FileText, Coins } from 'lucide-react';
import './NotificationDrawer.css';

export default function NotificationDrawer({ notifications, onClose, onMarkAllRead }) {
  return (
    <div className="notif-drawer-overlay" onClick={onClose}>
      <div className="notif-drawer-content" onClick={(e) => e.stopPropagation()}>
        <div className="notif-header">
          <div className="notif-title-wrap">
            <Bell size={20} color="var(--purple-primary)" />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-dark)' }}>Notifications</h3>
          </div>
          <button className="btn-icon" onClick={onClose} aria-label="Close notifications">
            <X size={18} />
          </button>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-subtle)', fontWeight: 600 }}>SYSTEM ALERTS & UPDATES</span>
          <button 
            onClick={onMarkAllRead} 
            style={{ background: 'none', border: 'none', color: 'var(--purple-primary)', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.2rem' }}
          >
            <CheckCheck size={14} />
            <span>Mark all read</span>
          </button>
        </div>

        <div style={{ overflowY: 'auto', flex: 1, paddingRight: '0.25rem' }}>
          {notifications.map((item) => (
            <div key={item.id} className={`notif-item-card ${!item.read ? 'unread' : ''}`}>
              <div className="notif-item-title">{item.title}</div>
              <div className="notif-item-msg">{item.message}</div>
              <div className="notif-item-time">{item.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
