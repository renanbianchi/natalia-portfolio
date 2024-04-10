import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;


  > img {
    width: 175px;
    height: 175px;
  }
`;

export function ResumeLink() {
  return (
    <Container >
      <a href="/documents/resume.pdf">
        <img src="/icons/arrow_forward.svg" alt="arrow" />
      </a>
    </Container>
  );
}
