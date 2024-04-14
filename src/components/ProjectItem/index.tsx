/* eslint-disable react/no-array-index-key */
import styled from 'styled-components';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface ProjectItemProps {
  project: {
    img: string;
    alt: string;
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    to: string;
    disabled: boolean;
  }
}

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 24px;
  width: 100%;
  max-height: 364px;

  @media (max-width: 1280px) {
    flex-direction: column;
    max-height: 100%;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  min-width: 446px;
  height: 364px;
  transition: min-width 2s;
  overflow: hidden;
  border-radius: 24px;

  &:hover {
    transition: min-width 2s;
    min-width: 646px;
  }

  @media (max-width: 1280px) {
    min-width: auto;
    width: 100%;
    height: 100%;
  }
`;

const IconImage = styled.img`
  left: -110px; 
  position: absolute;
  overflow: hidden;
  @media (max-width: 1280px) {
    left: 0px;
    position: relative;
    width: 100%;
    height: 100%;
  }
`;

const ProjectDetailsContainer = styled.div`
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  width: 550px;
  @media (max-width: 1280px) {
    width: auto;
  }
`;

const Title = styled.span`
  font-family: ${({ theme }) => theme.fonts.poppins};
  color: ${({ theme }) => theme.colors.midnightBlue};
  font-style: bold;
  font-size: 14px;
  margin-bottom: 8px;
`;

const SubTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.bebasneue};
  font-size: 36px;
  text-transform: uppercase;
  margin-bottom: 16px;

  @media (max-width: 1280px) {
    font-size: 32px;
  }
`;

const Description = styled.span`
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 20px;
`;

const TagsContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 22px;
`;

const Tag = styled.span`
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 12px;
  border: ${({ theme }) => `1px solid ${theme.colors.midnightBlue}`};
  padding: 2px 12px;
  border-radius: 12px;
`;

const Button = styled.a<{disabled?: boolean}>`
  display: flex;
  gap: 4px;
  text-decoration: none;
  background-color: ${({ theme, disabled }) => disabled ? theme.colors.gray : theme.colors.midnightBlue};
  color: ${({ theme }) => theme.colors.iceCream};
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 14px;
  align-items: center;
  border-radius: 50px;
  width: fit-content;
  padding: 8px 12px; 
  cursor: ${({disabled}) => disabled ? `not-allowed` : `pointer`} ;
`;

export function ProjectItem({
  project
}: ProjectItemProps) {
  return (
    <Container>
      <ImageContainer>
        <IconImage src={project.img} alt={project.alt} />
      </ImageContainer>
      <ProjectDetailsContainer>
        <Title>
          {project.title}
        </Title>
        <SubTitle>
          {project.subtitle}
        </SubTitle>
        <Description>
          {project.description}
        </Description>
        <TagsContainer>
          {project.tags.map((tag, i) => <Tag key={i}>{tag}</Tag>)}
        </TagsContainer>
        <Button disabled={project.disabled} /* href={project.to} */>
          em breve
          {!project.disabled && (<ArrowForwardIcon />)}
          
        </Button>
      </ProjectDetailsContainer>
    </Container>
  );
}
