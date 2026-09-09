import React from 'react';

export default function SectionHeading({ badge, title, subtitle, className = '' }) {
  return (
    <div className={`section-heading-block ${className}`} style={{ marginBottom: '2.5rem' }}>
      {badge && (
        <div 
          className="text-label-mono" 
          style={{ marginBottom: '0.6rem', display: 'inline-block' }}
        >
          {badge}
        </div>
      )}
      <h2 
        className="heading-editorial-md" 
        style={{ marginBottom: '0.6rem' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-subhead">
          {subtitle}
        </p>
      )}
    </div>
  );
}
