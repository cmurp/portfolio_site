import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import styled, { ThemeProvider } from 'styled-components';


import ErrorPage from './error-page';
import Contact from "./components/contact";
import About from "./components/about";
import Navigation from './components/navigation/navigation';
import { useOrientation } from './hooks/useOrientation';
import Blog from './components/blog/blog';
import Landing from './components/landing';

import { GlobalStyle } from './GlobalStyle';
import theme from './theme';
import './App.css';

const Layout = () => {
  interface ContainerProps {
    isVertical?: boolean;
  }
    
  const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: ${({ isVertical }: ContainerProps) => (isVertical ? 'column':'row')};
    height: 100vh;
    overflow: hidden;
  `;
  const {isVertical,} = useOrientation();
  return (
    <>
        <Container isVertical={isVertical}>
          <Navigation />
          <Outlet />
        </Container>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>  
  )
}

export default App;