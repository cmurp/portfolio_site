import React, { useState, useEffect, useRef } from 'react';
import styled, { useTheme } from 'styled-components';
import { BiMenuAltLeft } from 'react-icons/bi';
import { BiCog } from 'react-icons/bi';

import Logo from '../branding/logo';
import { useSideNavStateContext } from './context/side-nav-state';
import { ContentRefContext, useContentRefContext } from '../../context/ContentRefContext';

interface TopNavigationProps {
  theme?: any;
  _visible?: boolean;
}

const Navigation = styled.nav<TopNavigationProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3rem;
  padding: 0 1rem;
  top: ${(props) => (props._visible ? '0' : '-2rem')};
  background-color: ${(props: TopNavigationProps) => props.theme.colors.secondary};
  color: ${(props: TopNavigationProps) => props.theme.colors.textSecondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 999;
  transition: top 0.3s;
  &.hidden {
    top: -20rem;
  }
`;

const Icon = styled.div`
  font-size: 2rem;
  color: transparent;
`;

const Hamburger = styled.button`
  font-size: 1.5rem;
  background: none;
  color: teal;
  border: none;
  cursor: pointer;
`;

const TopNav = () => {
  const { isOpen, setIsOpen } = useSideNavStateContext();
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const theme = useTheme();
  const containerRef = useContentRefContext();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = containerRef.current?.scrollTop ?? 0;
      var visible = false;
      if (currentScrollPos > prevScrollPos) { // scrolling down
        setLastScrollPos(currentScrollPos);
      }
      else if (currentScrollPos + 5 < lastScrollPos) {
        visible = true;
      }

      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };

    const container = containerRef.current;

    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
  
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [prevScrollPos, lastScrollPos, containerRef]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }; 


  return (
    <Navigation ref={containerRef} id="top-nav" theme={theme} _visible={visible}>
      <Hamburger onClick={handleToggle}><BiMenuAltLeft/></Hamburger>
      <Logo alt="logo"></Logo>
      <Icon><BiCog/></Icon>

    </Navigation>
  );
};

export default TopNav;