import styled from 'styled-components';

export interface SkillContainerProps {
  image?: string | undefined,
  alt?: string | undefined,
  title?: string | undefined,
  subtitle?: string | undefined,
  description?: string | undefined,
  bgcolor?: string | undefined,
  width?: string | undefined,
}

const skillDefaultProps = {
  image: '',
  alt: '',
  title: '',
  subtitle: '',
  bgcolor: '',
  description: '',
  width: '72',
};

const Container = styled.div<{$bgcolor: string}>`
  display: flex;
  gap: 24px;
  min-width: 180px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.midnightBlue};
  padding: 8px 54px;
  background-color: ${({ $bgcolor, theme }) => ($bgcolor || theme.colors.iceCream)};
  border-radius: 100px;
  width: fit-content;
  transition: width 0.5s ease;


  @media (max-width: 1280px) {
    padding: 4px 18px;
    min-width: auto;
    border-radius: 48px;
    min-height: 100px;
    gap: 12px;

    > img {
      max-width: 33px;
    }
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

@media (max-width: 1280px) {
  max-width: 328px;
  max-height: 100px;
}
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
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 12px;
  font-weight: 400;
  max-width: 360px;

  @media (max-width: 1280px) {
    width: 100%;
    text-align: center;
  }
`;

export function Skill({
  image = '', alt = '', title = '', subtitle = '', description = '', bgcolor = '', width = '',
}: SkillContainerProps & typeof skillDefaultProps) {
  return (
    <Container $bgcolor={bgcolor || ''}>
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
