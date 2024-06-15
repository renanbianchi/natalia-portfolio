import styled from "styled-components";

const LoadingContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #101720B3;
  z-index: 999 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingContent = styled.div`
  width: 32px;
  height: 16px;
  display: flex;
  animation: l9-0 2s reverse 1s infinite;

  &:before,
  &:after {
    content: "";
    flex: 1;
    background: url('/images/loading/left-n.svg');
    background-size: cover;
    transform-origin: top right;
    animation: l9-1 2s reverse 1s infinite;
  }

  &:after {
    background: url('/images/loading/right-n.svg');
    background-size: cover;
    transform-origin: top left;
    --s:-1;
  }

  @keyframes l9-0 {
    0%, 66.67% { transform: translateY(0); }; 
    100% {transform: translateY(0%)};
  };
  
  @keyframes l9-1 {
    0%, 66.67% { transform: rotate(0); };
    100% {transform: rotate(calc(var(--s,1) * 90deg))};
  };

`;

export default function Loading() {
  return (
    <LoadingContainer>
      <LoadingContent />
    </LoadingContainer>
  )
};