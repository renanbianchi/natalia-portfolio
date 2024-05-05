import styled, { keyframes } from 'styled-components';

const infiniteScroll1 = keyframes`
    0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  margin-top: -27px;
  margin-bottom: -9.5px;
  user-select: none;
`;

const Content = styled.span`
  color: ${({ theme }) => theme.colors.midnightBlue};
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 24px;
  font-weight: bolder;
  display: inline-block;
  white-space: nowrap;
  animation: ${infiniteScroll1} 10s linear infinite;
`;

export function InfiniteText() {
  const aboutMeText = '\xa0. sobre mim . sobre mim . sobre mim . sobre mim . sobre mim . sobre mim . sobre mim . sobre mim . sobre mim . sobre mim';

  return (
    <Container>
      <Content>{aboutMeText}</Content>
      <Content>{aboutMeText}</Content>
    </Container>
  );
}
