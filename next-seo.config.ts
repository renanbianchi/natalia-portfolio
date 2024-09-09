import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  title: 'Natalia - UX/UI Design',
  description: 'Hello And Welcome to my Portfolio',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://natalia-araujo.vercel.app/',
    siteName: 'Natalia Araujo',
    images: [
      {
        url: 'https://natalia-araujo.vercel.app/images/natalia1.webp',
        width: 375,
        height: 339,
        alt: 'Natalia Araujo',
      },
    ],
  },
};

export default config;
