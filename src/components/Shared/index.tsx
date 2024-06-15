import styled from 'styled-components';
import theme from '../../../public/theme';

export const Container = styled.div<{noise?: boolean}>`
  display: flex;
  flex-direction: column;
  padding: 0 210px;
  background-image: ${({noise}) => noise ? `url('/images/noise.png')` : '' };
  overflow: hidden;

  @media (max-width: 1280px) {
    padding: 0 17px;
    width: 100%;
  }
`;

export const Background = styled.div<{ color: keyof typeof theme.colors; text?: keyof typeof theme.colors }>`
  background-color: ${({ color }) => theme.colors[color] || { color }};
  ${({ text }) => text && `color: ${theme.colors[text]};`}
`;

export const PageInfoHeaderContainer = styled.div`
  width: 100%;
  margin-top: 107px;
  text-align: center;

  @media (max-width: 1280px) {
    text-align: left;
    margin-bottom: 60px;
    margin-top: 60px;
  }
`;
export const GreenBar = styled.div`
  display: none;
  background-color: ${({theme}) => theme.colors.limeGreen};

  @media (max-width: 1280px) {
    display: block;
    height: 3px;
    width: 44px;
  }
`

export const PageInfoHeaderText = styled.h1`
  font-family: ${theme.fonts.bebasneue};
  font-size: 68px;
  text-transform: uppercase;

  @media (max-width: 1280px) {
    font-size: 48px;
  }
`;

export const Ellipsis = styled.img<{top?: string, left?: string, right?: string, bottom?: string}>`
  background-image: url('/images/noise.png');
  position: absolute;
  top: ${({top}) => top ? top : 'auto'};
  bottom: ${({bottom}) => bottom ? bottom : 'auto'};
  left: ${({left}) => left ? left : 'auto'};
  right: ${({right}) => right ? right : 'auto'};
  filter: blur(400px);
`