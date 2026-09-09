import React from 'react';
import styled from 'styled-components';
import RollText from '../common/RollText';

const RightBtn = ({ onGetStarted }) => {
  return (
    <StyledWrapper>
      <button className="bubbles" onClick={onGetStarted}>
        <span className="text">
          <RollText>Get Started</RollText>
        </span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .bubbles {
    --c1: var(--violet-dark, #6a44a5);
    --c2: #ffffff;
    --size-letter: 14px;
    padding: 0.5em 1.2em;
    font-size: var(--size-letter);

    background-color: transparent;
    border: calc(var(--size-letter) / 6) solid var(--c2);
    border-radius: 25px;
    cursor: pointer;

    overflow: hidden;
    position: relative;
    transition: 200ms cubic-bezier(0.83, 0, 0.17, 1);
  }

  .bubbles > .text {
    font-weight: 700;
    color: var(--c2);
    position: relative;
    z-index: 1;
    transition: color 300ms cubic-bezier(0.83, 0, 0.17, 1);
    display: inline-block;
  }

  .bubbles::before {
    top: 0;
    left: 0;
  }

  .bubbles::after {
    top: 100%;
    left: 100%;
  }

  .bubbles::before,
  .bubbles::after {
    content: "";
    width: 150%;
    aspect-ratio: 1/1;
    scale: 0;
    transition: 400ms cubic-bezier(0.76, 0, 0.24, 1);

    background-color: var(--c2);
    border-radius: 50%;

    position: absolute;
    translate: -50% -50%;
  }

  .bubbles:hover {
    & > span {
      color: var(--c1);
    }
    &::before,
    &::after {
      scale: 1;
    }
  }

  .bubbles:active {
    scale: 0.98;
    filter: brightness(0.9);
  }
`;

export default RightBtn;
