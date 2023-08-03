import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import Layout from './components/blog/blog';
import { GlobalStyle } from './GlobalStyle';
import theme from './theme';

import { useOrientation } from './hooks/useOrientation';
import Navigation from './components/navigation/navigation';
import Blog from './components/blog/blog';

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

function App() {
  const {isVertical, setIsVertical} = useOrientation();

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <LayoutContainer isVertical={isVertical}>
          <Navigation />
          <Blog>TEST</Blog>
        </LayoutContainer>
      </ThemeProvider>
    </>
  );
}

export default App;