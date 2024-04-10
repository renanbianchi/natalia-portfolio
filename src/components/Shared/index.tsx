import styled from 'styled-components';
import theme from '../../../public/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 210px;
`;

export const Background = styled.div<{ color: keyof typeof theme.colors; text: keyof typeof theme.colors }>`
  background-color: ${({ color }) => theme.colors[color] || { color }};
  color: ${({ text }) => theme.colors[text]}
`;

export const PageInfoHeaderContainer = styled.div`
  width: 100%;
  margin-top: 107px;
  text-align: center;
`;

export const PageInfoHeaderText = styled.h1`
  font-family: ${theme.fonts.bebasneue};
  font-size: 68px;
  text-transform: uppercase;
`;
