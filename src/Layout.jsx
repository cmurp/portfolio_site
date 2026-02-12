import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Home, BookOpen, Send } from 'lucide-react';
import { useNavigate } from 'react-router';

const SkipLink = styled.a`
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme?.colors?.accent || '#FFD700'};
  color: ${({ theme }) => theme?.colors?.textOnAccent || '#000'};
  padding: 0.5rem 1rem;
  z-index: 9999;
  transition: top 0.3s;
  text-decoration: none;
  font-weight: bold;
  border-radius: 0 0 4px 4px;

  &:focus {
    top: 0;
    outline: 2px solid white;
  }
`;

//
// 1) Force container to be full viewport in both directions
//    so that absolute-positioned children know their reference size.
//
const Container = styled.div`
  width: 100vw;       /* Use viewport width */
  height: 100vh;      /* Use viewport height */
  background: black;
  color: white;
  position: relative; /* Important so children can absolutely position */
  margin: 0;
  padding: 0;
  overflow: hidden;   /* Ensures no weird scrollbars show if something extends */
`;

//
// 2) NavBar: fixed at top in landscape, bottom in portrait
//    We keep your left text, center nav, right text layout.
//
const NavBar = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  z-index: 50;
  height: 2.5rem;
  display: flex;
  align-items: center;
  background: black;
  padding: 0 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (orientation: portrait) {
    top: auto;
    bottom: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: none;
  }

  @media (orientation: landscape) {
    top: 0;
  }
`;

//
// 3) Split NavBar space into 3 sections (left, center, right)
//
const NavBarSection = styled.div`
  display: flex;
  align-items: center;
  flex: ${(props) => props.flex || 0};
  justify-content: ${(props) => props.align || 'center'};
`;

const LeftText = styled.div`
  opacity: ${(props) => (props.$hide ? 0 : 0.7)};
  pointer-events: ${(props) => (props.$hide ? 'none' : 'auto')};
  transition: opacity 300ms ease-in-out;
  padding-right: 1rem;

  &:hover {
    opacity: 1;
  }
`;

const RightText = styled.div`
  opacity: ${(props) => (props.$hide ? 0 : 0.7)};
  pointer-events: ${(props) => (props.$hide ? 'none' : 'auto')};
  transition: opacity 300ms ease-in-out;
  padding-left: 1rem;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

const NavigationIsland = styled.div`
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 300ms ease-in-out;
  height: 2.5rem;
  width: ${(props) => (props.$isExpanded ? '16rem' : 'auto')};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
`;

const IconContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  padding: 0 0.75rem;
`;

const IconButton = styled.button`
  position: relative;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 200ms ease-in-out;
  background: ${(props) =>
    props.$isActive ? 'rgba(255, 255, 255, 0.1)' : 'transparent'};
  color: ${(props) => (props.$isActive ? 'white' : 'rgba(255, 255, 255, 0.7)')};
  border: 1px solid
    ${(props) =>
      props.$isActive ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)'};

  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 50%;
    border: 1px solid transparent;
    transition: all 200ms ease-in-out;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    box-shadow: ${(props) =>
      props.$isActive ? '0 0 10px rgba(255, 255, 255, 0.2)' : 'none'};
    transition: all 200ms ease-in-out;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
    transform: scale(1.05);

    &::before {
      border-color: rgba(255, 255, 255, 0.1);
    }

    &::after {
      box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
    }
  }

  svg {
    width: 14px;
    height: 14px;
    opacity: ${(props) => (props.$isActive ? 1 : 0.7)};
    transition: all 200ms ease-in-out;
  }

  &:hover svg {
    opacity: 1;
  }
`;

//
// 4) Frame: we keep the "terminal screen" effect here.
//    It's position: relative so we can have an absolutely positioned content area.
//
const Frame = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  /* Terminal screen effect */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      rgba(255, 255, 255, 0.03) 50%,
      transparent 50%
    );
    background-size: 100% 4px;
    pointer-events: none;
    opacity: 0.2;
  }

  /* Frame border effect */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border: 1px solid rgba(255, 255, 255, 0.1);
    pointer-events: none;
    box-shadow: 
      inset 0 0 30px rgba(255, 255, 255, 0.02),
      0 0 10px rgba(0, 0, 0, 0.5);
  }
`;

//
// 5) ContentArea: absolutely fill from top edge to bottom edge
//    BUT we shift down in landscape (2.5rem) or shift up in portrait (bottom: 2.5rem).
//
const ContentArea = styled.div`
  position: absolute;
  left: 0;
  right: 0;

  @media (orientation: landscape) {
    top: 2.5rem;
    bottom: 0;
  }

  @media (orientation: portrait) {
    top: 0;
    bottom: 2.5rem;
  }

  background-color: black;
`;

const CanvasWrapper = styled.div`
  position: absolute;
  inset: 0;
  canvas {
    width: 100%;
    height: 100%;
  }
`;

//
// This wrapper fades in/out your content on navigation.
//
const ContentWrapper = styled.div`
  position: absolute;
  inset: 0;
  transition: opacity 300ms ease-in-out;
  opacity: ${(props) => (props.$transitioning ? 0 : 1)};
`;

const Layout = ({ children, currentSection }) => {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const canvasRef = useRef(null);

  // For expanding the nav island on 'blog'
  const isExpandedSection = currentSection === 'blog';
  // For hiding text on the homepage
  const isHomePage = currentSection === 'home';

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'contact', icon: Send, label: 'Contact' },
    { id: 'blog', icon: BookOpen, label: 'Blog' }
  ];

  useEffect(() => {
    if (canvasRef.current) {
      const resizeCanvas = () => {
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * window.devicePixelRatio;
        canvas.height = rect.height * window.devicePixelRatio;
      };

      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);
      return () => window.removeEventListener('resize', resizeCanvas);
    }
  }, []);

  const handleNavigation = async (section) => {
    if (section === currentSection) return;
    setIsTransitioning(true);

    const path = section === 'home' ? '/' : `/${section}`;
    setTimeout(() => {
      navigate(path);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <Container>
      <SkipLink href="#main-content">Skip to content</SkipLink>
      {/* NavBar: fixed top (landscape) or bottom (portrait) */}
      <NavBar>
        <NavBarSection flex={1} align="flex-start">
          <LeftText $hide={isHomePage}>Chris Murphy</LeftText>
        </NavBarSection>

        <NavBarSection>
          <NavigationIsland $isExpanded={isExpandedSection}>
            <IconContainer>
              {navItems.map(({ id, icon: Icon, label }) => (
                <IconButton
                  key={id}
                  $isActive={currentSection === id}
                  onClick={() => handleNavigation(id)}
                  aria-label={label}
                  title={label}
                >
                  <Icon size={16} />
                </IconButton>
              ))}
            </IconContainer>
          </NavigationIsland>
        </NavBarSection>

        <NavBarSection flex={1} align="flex-end">
          <RightText $hide={isHomePage}>software engineer</RightText>
        </NavBarSection>
      </NavBar>

      {/* The "terminal-style" frame behind everything */}
      <Frame>
        <ContentArea>
          <ContentWrapper id="main-content" tabIndex="-1" $transitioning={isTransitioning}>
            {children /* Your actual page content goes here */}
          </ContentWrapper>

          <CanvasWrapper>
            <canvas ref={canvasRef} />
          </CanvasWrapper>
        </ContentArea>
      </Frame>
    </Container>
  );
};

export default Layout;
