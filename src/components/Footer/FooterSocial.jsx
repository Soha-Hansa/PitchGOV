import React from 'react';

const FooterSocial = () => {
  const socials = [
    { name: 'Twitter', icon: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' },
    { name: 'LinkedIn', icon: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z' },
    { name: 'Instagram', icon: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zm1.5-4.87h.01M6.5 6.5h11A5 5 0 0 1 22.5 12v11a5 5 0 0 1-5 5h-11a5 5 0 0 1-5-5V12a5 5 0 0 1 5-5z' }
  ];

  return (
    <div className="footer-social-wrapper">
      {socials.map((social, idx) => (
        <a key={idx} href="#" className="footer-social-icon" aria-label={social.name}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d={social.icon}></path>
          </svg>
        </a>
      ))}
    </div>
  );
};

export default FooterSocial;
