import styled from 'styled-components';

export interface SkillContainerProps {
  image?: string | undefined,
  alt?: string | undefined,
  title?: string | undefined,
  subtitle?: string | undefined,
  description?: string | undefined,
  bgcolor?: string | undefined,
  width?: string | undefined,
  imageWidth?: string | undefined,
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

const Container = styled.div<{$bgcolor: string, $width: string}>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: flex-start;
  padding: 16px;
  background-color: ${({ $bgcolor, theme }) => ($bgcolor || theme.colors.iceCream)};
  border-radius: 24px;
  ${({ $width }) => $width && `max-width: ${$width};`}
  transition: width 0.5s ease;
  filter: drop-shadow(0px 30px 10px rgba(16, 23, 32, 0.1));


  @media (max-width: 1280px) {
    min-width: auto;
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
  align-items: flex-start;
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
  font-style: italic;
  font-size: 12px;
  font-weight: 400;
`;

const Description = styled.span`
  text-align: left;
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 12px;
  font-weight: 400;
  max-width: 360px;

  @media (max-width: 1280px) {
    width: 100%;
  }
`;

export function Skill({
  image = '', alt = '', title = '', subtitle = '', description = '', bgcolor = '', width = '', imageWidth = '',
}: SkillContainerProps & typeof skillDefaultProps) {
  return (
    <Container $width={width} $bgcolor={bgcolor || ''}>
      {image && (
        <img width={imageWidth} src={image} alt={alt || ''} />
      )}

      {title && subtitle && (
        <ContentContainer >
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
