// Layout.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { Home, User, BookOpen, Briefcase, Send } from 'lucide-react';
import { useNavigate } from 'react-router';

const FixedContainer = styled.div`
  position: fixed;
  inset: 0;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  padding: 1.5rem;
`;

const Frame = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2rem;
  color: ${props => props.theme.colors.textSecondary};
`;

const ContentArea = styled.div`
  position: relative;
  flex: 1;
  margin: 1rem 0;
  border-radius: 0.5rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.backgroundSecondary};
`;

const BottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2rem;
  color: ${props => props.theme.colors.textSecondary};
`;

const NavigationIsland = styled.div`
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  color: white;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 300ms ease-in-out;
  z-index: 50;
  width: ${props => props.$isExpanded ? '16rem' : 'auto'};
  height: ${props => props.$isExpanded ? '8rem' : '3rem'};
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

const Layout = ({ children, currentSection }) => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const isExpandedSection = currentSection === 'blog';

  const navItems = [
    { id: 'home', icon: Home },
    { id: 'about', icon: User },
    { id: 'work', icon: Briefcase },
    { id: 'blog', icon: BookOpen },
    { id: 'contact', icon: Send }
  ];
  
  const handleNavigation = async (section) => {
    if (section === currentSection) return;
    
    setIsExpanded(true);
    
    if (!document.startViewTransition) {
      navigate(section === 'home' ? '/' : `/${section}`);
    } else {
      await document.startViewTransition(() => {
        navigate(section === 'home' ? '/' : `/${section}`);
      }).finished;
    }
    
    setTimeout(() => setIsExpanded(false), 800);
  };

  return (
    <FixedContainer>
      <Frame>
        <TopBar>
          <div>PLACEHOLDER</div>
          <div className="flex space-x-2">
          <NavigationIsland $isExpanded={isExpanded}>
            {isExpanded ? (
              <div className="text-center">
                <div className="text-lg font-medium">Navigating...</div>
                <div className="text-sm opacity-75 mt-2">Please wait</div>
              </div>
            ) : (
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
            )}
          </NavigationIsland>
          </div>
          <div>Entropy |1417|</div>
        </TopBar>

        <ContentArea>
          <div 
            className={`
              absolute inset-0
              transition-transform duration-500 transform-gpu
              ${isExpandedSection ? 'scale-[5]' : 'scale-100'}
            `}
            style={{ viewTransitionName: 'canvas-content' }}
          >
            {children}
          </div>
        </ContentArea>

        <BottomBar>
          <div>N ⦗ 30.3232°</div>
          <div>81.5650° ⦘ W</div>
        </BottomBar>
      </Frame>

      <style>{`
        @keyframes zoom-in {
          from { transform: scale(1); }
          to { transform: scale(5); }
        }

        @keyframes zoom-out {
          from { transform: scale(5); }
          to { transform: scale(1); }
        }

        ::view-transition-old(canvas-content) {
          animation: 500ms cubic-bezier(0.4, 0, 0.2, 1) both zoom-out;
        }

        ::view-transition-new(canvas-content) {
          animation: 500ms cubic-bezier(0.4, 0, 0.2, 1) both zoom-in;
        }
      `}</style>
    </FixedContainer>
  );
};

export default Layout;