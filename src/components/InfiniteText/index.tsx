import styled, { keyframes } from 'styled-components';

const infiniteScroll = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
`;

const Container = styled.div<{ $upsideDown?: boolean }>`
  display: flex;
  width: 110vw;
  margin-left: -30px;
  overflow: hidden;
  user-select: none;
  transform: rotate(4deg) ${({ $upsideDown }) => ($upsideDown ? 'scale(-1, -1)' : '')};
  background-color: ${({ theme }) => theme.colors.violet};
  padding: 20px 0px;
  margin-top: -50px;
  margin-bottom: -50px;

  @media (max-width: 1280px) {
    margin-top: -30px;
    margin-bottom: -30px;
  }
`;

const Content = styled.span`
  color: ${({ theme }) => theme.colors.midnightBlue};
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-weight: 900;
  font-style: bold;
  font-size: 24px;
  display: inline-block;
  white-space: nowrap;
  animation: ${infiniteScroll} 10s linear infinite;
`;

export function InfiniteText({upsideDown}: { upsideDown?: boolean }) {
  const aboutMeText = '\xa0. sobre mim . sobre mim . sobre mim . sobre mim . sobre mim . sobre mim . sobre mim . sobre mim . sobre mim . sobre mim';

  return (
    <Container $upsideDown={upsideDown}>
      <Content>{aboutMeText}</Content>
      <Content>{aboutMeText}</Content>
    </Container>
  );
}
