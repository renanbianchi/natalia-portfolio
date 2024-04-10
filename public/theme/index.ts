import { DefaultTheme } from 'styled-components';
import localFont from 'next/font/local';
// eslint-disable-next-line camelcase
import { Poppins, Bebas_Neue } from 'next/font/google';

const BoldFont = localFont({
  src: '../fonts/THE BOLD FONT.otf',
  variable: '--font-boldfont',
});

const POppins = Poppins({ subsets: ['latin'], weight: ['400'] });
const BebasNeue = Bebas_Neue({ subsets: ['latin'], weight: ['400'] });

const theme: DefaultTheme = {
  colors: {
    midnightBlue: '#101720',
    iceCream: '#FAF9F6',
    limeGreen: '#A3FF2D',
    violet: '#8B76FF',
    gray: '#3D4651',
  },
  fonts: {
    boldfont: BoldFont.style.fontFamily,
    poppins: POppins.style.fontFamily,
    bebasneue: BebasNeue.style.fontFamily,
  },
};

export default theme;
