import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    min-height: 100vh;
    width: 100vw;
    background-color: ${({ theme }) => theme.colors.midnightBlue};
    background-image: url('/images/noise.png');

    color: ${({ theme }) => theme.colors.iceCream};
    scroll-behavior: smooth;
    padding: 0;
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.poppins},
      -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    overflow-x: hidden;
  }
  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }
`;

export { GlobalStyle };
