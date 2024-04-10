import styled from 'styled-components';
import { InfiniteText } from '@/components/InfiniteText';
import { AboutMeDetails } from '@/components/AboutMeDetails';
import { Resume } from '@/components/Resume';
import { Projects } from '@/components/Projects';
import { HeroHome } from '@/components/Hero';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 120px;
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
