import React from 'react';
import styled, { useTheme } from 'styled-components';
import { Link } from 'react-router-dom';

import Logo from '../branding/logo';
import { useOrientationContext } from './context/orientation';
import { useSideNavStateContext } from './context/side-nav-state';

import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';
import { FaUserAstronaut } from 'react-icons/fa';
import { BiCog } from 'react-icons/bi'; 

interface Link {
  text: string;
  href: string;
}

interface Props {
  links?: Link[];
  theme?: any;
}

const renderLinks = (links: Link[]) => {
  return (
    <NavItemsContainer>
      <NavItems>
      {links.map((link) => (
        <NavItem key={link.text} to={link.href}>
          {link.text}
        </NavItem>
      ))}
      </NavItems>
    </NavItemsContainer>
  );
};

const SideNav: React.FC<Props> = ({ links = [] }) => {
  const { isVertical } = useOrientationContext();
  const { isOpen, setIsOpen } = useSideNavStateContext();
  
  React.useEffect(() => {
    openForHorizontal();
  }, []);

  React.useEffect(() => {
    openForHorizontal();
  }, [isVertical]);

  const openForHorizontal = () => {
    if (!isVertical) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };
  
  return (
    <NavContainer className={`${isOpen ? '' : 'hidden absolute'} ${isVertical ? 'absolute' : ''}`}>
      { !isVertical && (
        <>
          <LogoContainer>
            <Logo alt="logo" />
          </LogoContainer>
      
          <NavButton onClick={() => {setIsOpen(!isOpen)}}>
            {isOpen ? <BiChevronLeft/> : <BiChevronRight/>}
          </NavButton>
        </>
      )}
      {links && links.length > 0 && renderLinks(links)}
      <LogoContainer>
        {/* <FaUserAstronaut />
        <BiCog /> */}
      </LogoContainer>
    </NavContainer>
  );
};

SideNav.defaultProps = {
  links: [
    {text:"Home", href:"/"},
    {text:"About", href:"/about"},
    {text:"Contact", href:"/contact"},
  ]
};

interface ThemedProps {
  theme: any;
}

const NavContainer = styled.nav<ThemedProps>`
  /* Additional styles for absolute positioning */
  &.absolute {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
  }
  --nav-width: 10rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
  height: 100vh;
  width: var(--nav-width);
  background-color: ${(props: ThemedProps) => props.theme.colors.secondary};
  color: ${(props: ThemedProps) => props.theme.colors.textSecondary};

  transition: transform 0.3s ease; /* CSS transition for smooth animation */

  /* Additional styles for the hidden state */
  &.hidden {
    transform: translateX(calc(var(--nav-width)*-1)); /* Move the container off-screen */
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 0;
  flex-shrink: 2;

  height: 3rem;
`;

const NavItemsContainer = styled.div`
  flex: 1;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NavItems = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled(Link)`
  display: block;
  padding: 10px;
  text-decoration: none;
  color: ${(props: ThemedProps) => props.theme.colors.textSecondary};
  font-size: 1rem;
  line-height: 1.25rem;

  &:hover {
    background-color: ${(props: ThemedProps) => props.theme.colors.main};
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: .5rem;
  left: 97%;
  width: 1.5rem;
  padding: 0;
  height: 2rem;
  border-radius: 0 10px 10px 0;
  background-color: ${(props: ThemedProps) => props.theme.colors.secondary};
  border: none;
  color: ${(props: ThemedProps) => props.theme.colors.textSecondary};
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default SideNav;
