import styled from 'styled-components';
import { SkillContainerProps, Skill } from '../Skill';

const Container = styled.div`
  margin-top: 66px;
  margin-bottom: 211px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 19px;
  flex-wrap: wrap;
  justify-content: center;
`;

export function Skills({ contents } : {contents: SkillContainerProps[]}) {
  return (
    <Container>
      <SkillsContainer>
        {contents.map(({
          image, alt, bgColor, title, subtitle, description, width,
        }) => (
          <Skill
            key={title}
            image={image}
            alt={alt}
            bgColor={bgColor}
            title={title}
            subtitle={subtitle}
            description={description}
            width={width}
          />
        ))}
      </SkillsContainer>
    </Container>
  );
}
