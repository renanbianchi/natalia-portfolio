import styled from 'styled-components';
import { SkillContainerProps, Skill } from '../Skill';

const Container = styled.div`
  margin-top: 66px;
  margin-bottom: 211px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media (max-width: 1280px) {
    margin-top: 24px;
    margin-bottom: 70px;
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 19px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 1280px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
  }

`;

export function Skills({ contents } : {contents: SkillContainerProps[]}) {
  return (
    <Container>
      <SkillsContainer>
        {contents.map(({
          image, alt, bgcolor, title, subtitle, description, width,
        }) => (
          <Skill
            key={title || image}
            image={image || ''}
            alt={alt || ''}
            bgcolor={bgcolor || ''}
            title={title || ''}
            subtitle={subtitle || ''}
            description={description || ''}
            width={width || ''}
          />
        ))}
      </SkillsContainer>
    </Container>
  );
}
