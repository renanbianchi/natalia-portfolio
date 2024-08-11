'use client';

import styled from 'styled-components';
import { AboutMeDetails } from '@/components/AboutMeDetails';
import { HeroHome } from '@/components/Hero';
import { InfiniteText } from '@/components/InfiniteText';
import { Projects } from '@/components/Projects';
import { Resume } from '@/components/Resume';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default function Home() {
  return (
    <HomeContainer>
      <HeroHome />
      <Projects />
      <InfiniteText />
      <AboutMeDetails />
      <Resume />
    </HomeContainer>
  );
}
