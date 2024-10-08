/* eslint-disable react/no-array-index-key */
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import styled from 'styled-components';

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
  };
}

const ImageContainer = styled.div<{ $img: string; alt: string }>`
  position: relative;
  min-width: 546px;
  height: 364px;
  transition: all 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform: scale(1);

  overflow: hidden;
  border-radius: 24px;
  background-image: ${({ $img }) => `url(${$img})`};
  background-size: 800px auto;
  background-repeat: no-repeat;
  background-position: center top;

  @media (max-width: 1280px) {
    min-width: 100%;
    background-position: top left 20%;
  }
`;

const Container = styled.div`
  width: 100%;
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: left;
  gap: 24px;
  width: 100%;
  max-height: 364px;

  &:hover {
    ${ImageContainer} {
      transition: all 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      min-width: 846px;
      background-size: 946px;
      transform: scale(1.05);
      margin-right: 24px;
    }
  }

  @media (max-width: 1280px) {
    flex-direction: column;
    max-height: 100%;
    width: 100%;
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

const Button = styled.div<{ disabled?: boolean }>`
  display: flex;
  gap: 4px;
  text-decoration: none;
  background-color: ${({ theme, disabled }) => (disabled ? theme.colors.gray : theme.colors.midnightBlue)};
  color: ${({ theme }) => theme.colors.iceCream};
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 14px;
  align-items: center;
  border-radius: 50px;
  width: fit-content;
  padding: 8px 12px;
  cursor: ${({ disabled }) => (disabled ? `not-allowed` : `pointer`)};
`;

export function ProjectItem({ project }: ProjectItemProps) {
  const { disabled, img, alt, title, subtitle, description, tags, to } = project;
  return (
    <Container>
      {!disabled ? (
        <Link href={to}>
          <LinkWrapper>
            <ImageContainer $img={img} alt={alt} />
            <ProjectDetailsContainer>
              <Title>{title}</Title>
              <SubTitle>{subtitle}</SubTitle>
              <Description dangerouslySetInnerHTML={{ __html: description }} />
              <TagsContainer>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagsContainer>
              <Button disabled={disabled}>
                Saiba mais
                <ArrowForwardIcon />
              </Button>
            </ProjectDetailsContainer>
          </LinkWrapper>
        </Link>
      ) : (
        <Container>
          <LinkWrapper>
            <ImageContainer $img={img} alt={alt} />
            <ProjectDetailsContainer>
              <Title>{title}</Title>
              <SubTitle>{subtitle}</SubTitle>
              <Description dangerouslySetInnerHTML={{ __html: description }} />
              <TagsContainer>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagsContainer>
              <Button disabled={disabled}>Em breve</Button>
            </ProjectDetailsContainer>
          </LinkWrapper>
        </Container>
      )}
    </Container>
  );
}
