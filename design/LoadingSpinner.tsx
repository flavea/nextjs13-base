'use client';

import styled from 'styled-components';

const LoadingSpinnerStyled = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0;

  @keyframes spinning {
    0% {
      opacity: 1;
      transform: translate(0 0);
    }
    49.99% {
      opacity: 1;
      transform: translate(41.6px, 0);
    }
    50% {
      opacity: 0;
      transform: translate(41.6px, 0);
    }
    100% {
      opacity: 0;
      transform: translate(0, 0);
    }
  }
  @keyframes ldio-07r8goy5x5o {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(41.6px, 0);
    }
    100% {
      transform: translate(0, 0);
    }
  }
  div {
    position: absolute;
    width: 41.6px;
    height: 41.6px;
    border-radius: 50%;
    top: 31.200000000000003px;
    left: 10.4px;
  }
  div:nth-child(1) {
    background: red;
    animation: ldio-07r8goy5x5o 1s linear infinite;
    animation-delay: -0.5s;
  }
  div:nth-child(2) {
    background: blue;
    animation: ldio-07r8goy5x5o 1s linear infinite;
    animation-delay: 0s;
  }
  div:nth-child(3) {
    background: red;
    animation: spinning 1s linear infinite;
    animation-delay: -0.5s;
  }
`;

const LoadingSpinner = () => {
  return (
    <div className="m-auto block h-28 w-28 overflow-hidden">
      <LoadingSpinnerStyled>
        <div></div>
        <div></div>
        <div></div>
      </LoadingSpinnerStyled>
    </div>
  );
};

export default LoadingSpinner;
