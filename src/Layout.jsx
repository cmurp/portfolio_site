import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Home, BookOpen, Send } from 'lucide-react';
import { useNavigate } from 'react-router';

const Container = styled.div`
  height: 100%;
  width: 100%;
  background: black;
  color: white;
  overflow: hidden;
  position: relative;
`;

const NavigationContainer = styled.div`
  position: fixed;
  top: 1%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 50;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (orientation: portrait) {
    top: auto;
    bottom: 1%;
  }
`;

const NavigationIsland = styled.div`
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 300ms ease-in-out;
  height: 2.5rem;
  width: ${props => props.$isExpanded ? '16rem' : 'auto'};
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
  background: ${props => props.$isActive ? 'rgba(255, 255, 255, 0.1)' : 'transparent'};
  color: ${props => props.$isActive ? 'white' : 'rgba(255, 255, 255, 0.7)'};
  border: 1px solid ${props => props.$isActive ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)'};

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
    box-shadow: ${props => props.$isActive ? '0 0 10px rgba(255, 255, 255, 0.2)' : 'none'};
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
    opacity: ${props => props.$isActive ? 1 : 0.7};
    transition: all 200ms ease-in-out;
  }

  &:hover svg {
    opacity: 1;
  }
`;

const Frame = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 0.5rem;
  padding: 0.5rem;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  
  // Terminal screen effect
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

  // Frame border effect
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

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2.5rem;
  padding: 0 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-family: 'VT323', monospace;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-size: 0.875rem;
  
  & > div {
    opacity: 0.7;
    transition: opacity 0.2s ease;
    
    &:hover {
      opacity: 1;
    }
  }

  .title-engineer {
    @media (max-width: 640px) {
      display: none;
    }
  }
`;

const ContentArea = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 0.25rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

const CanvasWrapper = styled.div`
  position: absolute;
  inset: 0;
  canvas {
    width: 100%;
    height: 100%;
  }
`;

const ContentWrapper = styled.div`
  position: absolute;
  inset: 0;
  transition: opacity 300ms ease-in-out;
  opacity: ${props => props.$transitioning ? 0 : 1};
`;

const Layout = ({ children, currentSection }) => {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const canvasRef = useRef(null);
  const contentRef = useRef(null);
  const isExpandedSection = currentSection === 'blog';

  const navItems = [
    { id: 'home', icon: Home },
    { id: 'contact', icon: Send },
    { id: 'blog', icon: BookOpen }
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

  const handleNavigation = (section) => {
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
      <NavigationContainer $isExpandedSection={isExpandedSection}>
        <NavigationIsland>
          <IconContainer>
            {navItems.map(({ id, icon: Icon }) => (
              <IconButton
                key={id}
                $isActive={currentSection === id}
                onClick={() => handleNavigation(id)}
              >
                <Icon size={16} />
              </IconButton>
            ))}
          </IconContainer>
        </NavigationIsland>
      </NavigationContainer>

      <Frame $isExpanded={isExpandedSection}>
        <TopBar>
          <div>Chris Murphy</div>
          <div>software engineer</div>
        </TopBar>

        <ContentArea>
          <ContentWrapper ref={contentRef} $transitioning={isTransitioning}>
            {children}
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
