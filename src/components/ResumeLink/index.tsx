import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -30px;

  @media (max-width: 1280px) {
    margin-top: 0px;
    width: auto
  }

  > a {
    > img {
    width: 175px;
    height: 175px;

    @media (max-width: 1280px) {
    width: 128px;
    height: auto;
    }
  }
}
`;

export function ResumeLink() {
  return (
    <Container>
      <Link target="_blank" href="/documents/resume.pdf">
        <img src="/icons/arrow_forward.svg" alt="arrow" />
      </Link>
    </Container>
  );
}
