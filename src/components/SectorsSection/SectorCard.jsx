import React from 'react';
import styled from 'styled-components';

const SectorCard = ({ title, description, bgColor, bgColorLight, textColorHover, boxShadowColor, icon }) => {
  return (
    <StyledWrapper 
      $bgColor={bgColor}
      $bgColorLight={bgColorLight}
      $textColorHover={textColorHover}
      $boxShadowColor={boxShadowColor}
    >
      <div className="body">
        <a className="card sector-card" href="#sectors" onClick={(e) => e.preventDefault()}>
          <div className="overlay" />
          <div className="circle">
            {icon}
          </div>
          <p>{title}</p>
          {description && <span className="description">{description}</span>}
        </a>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .sector-card {
    --bg-color: ${props => props.$bgColor || '#B8F9D3'};
    --bg-color-light: ${props => props.$bgColorLight || '#e2fced'};
    --text-color-hover: ${props => props.$textColorHover || '#4C5656'};
    --box-shadow-color: ${props => props.$boxShadowColor || 'rgba(184, 249, 211, 0.48)'};
  }

  .card {
    width: 400px;
    height: 480px;
    background: #ffffff;
    border-radius: 28px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.05), 0 2px 10px rgba(0, 0, 0, 0.02);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    text-decoration: none;
    padding: 3.5rem 2.5rem;
    box-sizing: border-box;
    border: 1px solid rgba(226, 232, 240, 0.8);
  }

  .card:hover {
    transform: translateY(-12px) scale(1.02) translateZ(0);
    box-shadow: 0 28px 50px rgba(0, 0, 0, 0.1),
      0 24px 50px var(--box-shadow-color);
  }

  .card:hover .overlay {
    transform: scale(9) translateZ(0);
  }

  .card:hover .circle {
    border-color: var(--bg-color-light);
    background: var(--bg-color);
  }

  .card:hover .circle:after {
    background: var(--bg-color-light);
  }

  .card:hover p {
    color: var(--text-color-hover);
  }

  .card:hover .description {
    color: var(--text-color-hover);
    opacity: 0.9;
  }

  .card:active {
    transform: scale(0.98) translateZ(0);
    box-shadow: 0 15px 24px rgba(0, 0, 0, 0.1),
      0 15px 24px var(--box-shadow-color);
  }

  .card p {
    font-size: 1.85rem;
    font-weight: 800;
    color: #1a1a2e;
    margin-top: 32px;
    margin-bottom: 14px;
    z-index: 10;
    transition: color 0.3s ease-out;
    text-align: center;
  }

  .description {
    font-size: 1.05rem;
    color: #64748b;
    z-index: 10;
    transition: color 0.3s ease-out, opacity 0.3s ease-out;
    text-align: center;
    line-height: 1.6;
    font-weight: 500;
    max-width: 320px;
  }

  .circle {
    width: 135px;
    height: 135px;
    border-radius: 50%;
    background: #ffffff;
    border: 3px solid var(--bg-color);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
    transition: all 0.3s ease-out;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
  }

  .circle:after {
    content: "";
    width: 120px;
    height: 120px;
    display: block;
    position: absolute;
    background: var(--bg-color);
    border-radius: 50%;
    transition: opacity 0.3s ease-out;
  }

  .circle svg {
    z-index: 10;
    transform: translateZ(0);
    position: relative;
  }

  .overlay {
    width: 120px;
    position: absolute;
    height: 120px;
    border-radius: 50%;
    background: var(--bg-color);
    top: 90px;
    left: 140px;
    z-index: 0;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export default SectorCard;
