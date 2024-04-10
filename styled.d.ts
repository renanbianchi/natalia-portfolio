import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      midnightBlue: string
      iceCream: string
      limeGreen: string
      violet: string
      gray: string
    }
    fonts: {
      poppins: string;
      bebasneue: string;
      boldfont: string;
    }
  }
}
