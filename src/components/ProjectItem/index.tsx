/* eslint-disable react/no-array-index-key */
import styled from 'styled-components';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { WithColorBehind } from '../WithColorBehind';

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


const ImageContainer = styled.div`
  position: relative;
  min-width: 446px;
  height: 364px;
  transition: min-width 2s;
  overflow: hidden;
  border-radius: 24px;

  @media (max-width: 1280px) {
    min-width: auto;
    width: 100%;
    height: 100%;
  }
`;

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

  &:hover {
    ${ImageContainer} {
      transition: min-width 2s;
      min-width: 646px;
    }
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
  width: 509px;


  @media (max-width: 1280px) {
    font-size: 32px;
    width: 100%;
  }
`;

const Description = styled.span`
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 20px;
  width: 509px;
  
  @media (max-width: 1280px) {
    width: 100%;
  }
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
        <Description dangerouslySetInnerHTML={{__html: project.description}} />
        <TagsContainer>
          {project.tags.map((tag, i) => <Tag key={i}>{tag}</Tag>)}
        </TagsContainer>
        <Button disabled={project.disabled}  href={project.disabled ? "" : project.to}>
          {project.disabled ? "Em breve" : "Saiba mais"}
          {!project.disabled && (<ArrowForwardIcon />)}
          
        </Button>
      </ProjectDetailsContainer>
    </Container>
  );
}
