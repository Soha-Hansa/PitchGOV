import React from 'react';
import styled from 'styled-components';

const SpinningText = () => {
  return (
    <StyledWrapper>
      <div className="words">
        <span className="word">solutions.</span>
        <span className="word">innovations.</span>
        <span className="word">technology.</span>
        <span className="word">platforms.</span>
        <span className="word">solutions.</span>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.span`
  display: inline-flex;
  vertical-align: bottom;
  height: 1.2em;
  overflow: hidden;
  position: relative;

  .words {
    display: flex;
    flex-direction: column;
    height: 100%;
    /* Use CSS mask instead of solid white gradient so it perfectly blends with the violet shader underneath */
    -webkit-mask-image: linear-gradient(transparent 0%, black 25%, black 75%, transparent 100%);
    mask-image: linear-gradient(transparent 0%, black 25%, black 75%, transparent 100%);
  }

  .word {
    display: flex;
    align-items: center;
    height: 100%;
    color: var(--violet-dark, #BC4F4F);
    animation: spin_4991 6s infinite;
    line-height: 1.2em;
    padding-left: 12px;
    flex-shrink: 0;
  }

  @keyframes spin_4991 {
    10% {
      -webkit-transform: translateY(-102%);
      transform: translateY(-102%);
    }
    25% {
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
    }
    35% {
      -webkit-transform: translateY(-202%);
      transform: translateY(-202%);
    }
    50% {
      -webkit-transform: translateY(-200%);
      transform: translateY(-200%);
    }
    60% {
      -webkit-transform: translateY(-302%);
      transform: translateY(-302%);
    }
    75% {
      -webkit-transform: translateY(-300%);
      transform: translateY(-300%);
    }
    85% {
      -webkit-transform: translateY(-402%);
      transform: translateY(-402%);
    }
    100% {
      -webkit-transform: translateY(-400%);
      transform: translateY(-400%);
    }
  }
`;

export default SpinningText;
