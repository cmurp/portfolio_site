import styled, { ThemeProvider } from 'styled-components';
import { useOrientation } from './hooks/useOrientation';
import Navigation from './components/navigation/navigation';
import { ContentRefContext } from "./context/ContentRefContext";
import { useRef } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  interface ContainerProps {
    isVertical?: boolean;
  }
    
  const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: ${({ isVertical }: ContainerProps) => (isVertical ? 'column':'row')};
    height: 100vh;
  `;

  const Content = styled.div`
    overflow-y: auto;
  `;

  const {isVertical,} = useOrientation();
  const contentRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <ContentRefContext.Provider value={contentRef}>
      <Container isVertical={isVertical}>
        <Navigation />
        <Content ref={contentRef}>
          <Outlet />
        </Content>
      </Container>
      </ContentRefContext.Provider>
    </>
  );
}

export default Layout;