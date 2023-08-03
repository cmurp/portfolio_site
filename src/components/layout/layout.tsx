import React, { Ref } from 'react';
import styled from 'styled-components';

import Content from './content/content';
import Navigation from './navigation/navigation';
import { ButtonClickedContext } from './navigation/context/buttonClicked';
import { useOrientation } from '../../hooks/useOrientation';

interface Props {
  children: React.ReactNode;
  isVertical?: boolean;
}

const LayoutContainer = styled.div<Props>`
  display: flex;
  flex-direction: ${({ isVertical }: Props) => (isVertical ? 'column':'row')};
  height: 100vh;
  overflow: hidden;
`;

const links = [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },  
    { text: 'Contact', href: '/contact' },
];  


const Layout: React.FC<Props> = ({ children }) => {
  const [isClicked, setIsClicked] = React.useState<boolean>(false);
  const {isVertical, setIsVertical} = useOrientation();

  return (
    <ButtonClickedContext.Provider value={{ isClicked, setIsClicked }}>
    <LayoutContainer isVertical={isVertical}>
      <Navigation />
      <Content>{children}</Content>
    </LayoutContainer>
    </ButtonClickedContext.Provider>
  );
};

export default Layout;
