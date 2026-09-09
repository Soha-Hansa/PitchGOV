import React from 'react';
import styled from 'styled-components';

const SolutionBtn = () => {
  return (
    <StyledBtn className="magnetic-target cursor-pointer">
      <div className="btn-text-wrapper">
        <span className="btn-text">Discover How</span>
        <span className="btn-text hover-text">Discover How</span>
      </div>
      <div className="btn-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </div>
    </StyledBtn>
  );
};

const StyledBtn = styled.button`
  background-color: #1a1a2e;
  color: #ffffff;
  border: none;
  border-radius: 50px;
  padding: 0.75rem 1.5rem;
  font-size: 1.1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 1rem;
  overflow: hidden;
  transition: transform 0.3s ease, background-color 0.3s ease;
  font-family: inherit;

  &:hover {
    transform: scale(1.05);
    background-color: #2a2a4a;
  }

  .btn-text-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 1.2em;
    overflow: hidden;
  }

  .btn-text {
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .hover-text {
    position: absolute;
    top: 100%;
    left: 0;
    color: #F3CD97; /* Violet accent on hover */
  }

  &:hover .btn-text {
    transform: translateY(-100%);
  }

  .btn-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    color: #1a1a2e;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  &:hover .btn-icon {
    transform: translateX(5px) rotate(-45deg);
  }
`;

export default SolutionBtn;
