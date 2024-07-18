import styled from "styled-components";

type IProjectHeaderProps = {
  header: string;
  title: string;
  subtitle?: string;
  $img: string;
  imgAlt?: string;
}

const ProjectHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 146px 100px 0px 100px;
  margin-bottom: 120px;

  @media (max-width: 1280px) {
    padding: 70px 12px 0px 12px;
    margin-bottom: 48px;
  }
`

const HeaderName = styled.span`
  font-family: ${({theme}) => theme.fonts.poppins};
  font-size: 24px;
`

const Title = styled.h1`
  text-transform: uppercase;
  font-family: ${({theme}) => theme.fonts.bebasneue};
  font-size: 96px;
  max-width: 1200px;

  @media (max-width: 1280px) {
    font-size: 40px;
  }
`

const SubTitle = styled.span`
  font-family: ${({theme}) => theme.fonts.poppins};
  font-weight: 100;
  font-size: 16px;
  max-width: 916px;
`

const ProjectImage = styled.img`
  width: 1380px;
  height: 640px;
  border-radius: 24px;
  overflow: hidden;
  object-fit: cover;
  margin-bottom: 160px;

  @media (max-width: 1280px) {
    width: 100%;
    margin-bottom: 80px;
  }
`

export function ProjectHeader({header, title, subtitle, $img, imgAlt}: IProjectHeaderProps ) {
  return (
  <>
  <ProjectHeaderContainer>
    <HeaderName>
      {header}
    </HeaderName>
    <Title>
      {title}
    </Title>
    {
      subtitle && (
        <SubTitle>
          {subtitle}
        </SubTitle>
      )
    }
  </ProjectHeaderContainer>
  <ProjectImage src={$img} alt={imgAlt || `Image of project ${header}`} />
  </>
)
}