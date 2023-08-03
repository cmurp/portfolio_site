import React, { Ref } from 'react';
import styled from 'styled-components';

import { OrientationContext } from './context/orientation';
import { SideNavStateContext } from "./context/side-nav-state";
import SideNav from "./side-nav";
import TopNav from "./top-nav";
import { useOrientation } from '../../hooks/useOrientation';
import { useClickOutside } from '../../hooks/useClickOutside';

//placeholders
interface NavigationProps {
    logo?: string,
    icon?: string,
}

const NavContainer = styled.div`
  position: relative;
`;

const links = [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Contact', href: '/contact' },
];  

const Navigation: React.FC<NavigationProps> = ({ logo, icon }) => {
    const {isVertical, setIsVertical} = useOrientation();
    const { isOpen, setIsOpen, containerRef } = useClickOutside(!isVertical, isVertical);

    return (
        <OrientationContext.Provider value={{ isVertical, setIsVertical }}>
        <SideNavStateContext.Provider value={{ isOpen, setIsOpen }}>
            <NavContainer ref={containerRef}>
                {isVertical ? <TopNav /> : <></>}
                <SideNav />
            </NavContainer>
        </SideNavStateContext.Provider>
        </OrientationContext.Provider>
    );
}

export default Navigation;