import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  height: 8px;
  background-color: ${({ theme }) => theme.colors.violet};
  width: auto;

  > a {
    position: absolute;
    bottom: -1px;
    width: fit-content;
  }
`;

export function WithColorBehind({ children }: any) {
  return (
    <Container>
      {children}
    </Container>
  );
}
