import styled from 'styled-components';

export interface SkillContainerProps {
  image?: string | undefined,
  alt?: string | undefined,
  title?: string | undefined,
  subtitle?: string | undefined,
  description?: string | undefined,
  bgColor?: string | undefined,
  width?: string | undefined,
}

const defaultProps = {
  image: '',
  alt: '',
  title: '',
  subtitle: '',
  bgColor: '',
  description: '',
  width: '72',
};

const Container = styled.div<{bgColor: string}>`
  display: flex;
  gap: 24px;
  min-width: 180px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.midnightBlue};
  padding: 8px 54px;
  background-color: ${({ bgColor, theme }) => (bgColor || theme.colors.iceCream)};
  border-radius: 100px;;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 12px;
  font-weight: 600;
`;

const Subtitle = styled.span`
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 12px;
  font-weight: 400;
`;

const Description = styled.span`
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 12px;
  font-weight: 400;
  max-width: 360px;
`;

export function Skill({
  image, alt, title, subtitle, description, bgColor, width,
}: SkillContainerProps & typeof defaultProps) {
  return (
    <Container bgColor={bgColor || ''}>
      {image && (
        <img width={width} src={image} alt={alt || ''} />
      )}

      {title && subtitle && (
        <ContentContainer>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          {description && (
            <Description>{description}</Description>
          )}
        </ContentContainer>
      )}

    </Container>
  );
}
Skill.defaultProps = defaultProps;
