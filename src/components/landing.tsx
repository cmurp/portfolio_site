import React from 'react';
import styled from 'styled-components';

// Styled components
const LandingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.main};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    background: url('image.png') center/cover no-repeat;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.fonts.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    background: rgba(255, 255, 255, 0.8);
  }
`;

const LandingTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: ${({ theme }) => theme.fontWeights.bolder};
`;

const LandingDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
`;

const CTAButton = styled.button`
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.textOnAccent};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 1rem 2rem;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.animations.transitionTime};

  &:hover {
    background: ${({ theme }) => theme.colors.secondaryAccent};
    color: ${({ theme }) => theme.colors.textOnSecondaryAccent};
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const Landing: React.FC = () => {
  return (
    <LandingContainer>
      <TextContainer>
        <LandingTitle>Hi, I'm Chris Murphy</LandingTitle>
        <LandingDescription>Welcome to my site</LandingDescription>
        <CTAButton>View my works</CTAButton>
      </TextContainer>
      <ImageContainer>
        <StyledImage src="image.png" alt="Colorful Illustration" />
      </ImageContainer>
    </LandingContainer>
  );
};

export default Landing;
