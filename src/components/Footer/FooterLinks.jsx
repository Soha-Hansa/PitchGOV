import React from 'react';

const FooterLinks = () => {
  const links = [
    {
      title: 'Platform',
      items: ['How it Works', 'Sectors', 'AI Matchmaking', 'Success Stories']
    },
    {
      title: 'Company',
      items: ['About Us', 'Careers', 'Press', 'Contact']
    },
    {
      title: 'Resources',
      items: ['Help Center', 'Blog', 'Guidelines', 'API Docs']
    }
  ];

  return (
    <div className="footer-links-container">
      {links.map((col, idx) => (
        <div key={idx} className="footer-link-col">
          <h4 className="footer-link-title">{col.title}</h4>
          <ul className="footer-link-list">
            {col.items.map((item, i) => (
              <li key={i}>
                <a href="#" className="footer-link">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;
