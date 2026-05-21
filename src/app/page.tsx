'use client'

import { AboutMeDetails } from '@/components/AboutMeDetails';
import { HeroHome } from '@/components/Hero';
import { InfiniteText } from '@/components/InfiniteText';
import { Projects } from '@/components/Projects';
import { Resume } from '@/components/Resume';
import styled from 'styled-components';

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
      <InfiniteText empty />
      <Resume />
    </HomeContainer>
  );
}
