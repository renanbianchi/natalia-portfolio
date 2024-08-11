import styled from 'styled-components';
import theme from '../../../public/theme';

type WithColorBehindProps = {
  color: keyof typeof theme.colors;
  children: any;
};

const Container = styled.div<{ color: keyof typeof theme.colors }>`
  position: relative;
  bottom: 5px;
  height: 8px;
  background-color: ${({ color }) => theme.colors[color] || { color }};
  width: 100%;
`;

const ChildrenContainer = styled.div`
  width: fit-content;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;

export function WithColorBehind({ children, color }: WithColorBehindProps) {
  return (
    <Container color={color}>
      <ChildrenContainer>{children}</ChildrenContainer>
    </Container>
  );
}
