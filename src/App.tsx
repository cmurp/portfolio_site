import { useState } from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider
} from "react-router-dom";
import { styled, ThemeProvider } from 'styled-components';

import { GlobalStyle } from './GlobalStyle';
import theme from './theme';
import './App.css';

import ErrorPage from './error-page';
import Contact from "./components/contact";
import About from "./components/about";
import Blog from './components/blog/blog';
import Landing from './components/landing';
import { NavigationActivatedContext } from "./context/NavigationActivatedContext";
import Layout from "./Layout";
import CanvasBackground from "./components/CanvasBackground.styled";

const AppContainer = () => {
  const Container = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
  `;

  return (
    <>
      <CanvasBackground />
      <Container>
          <Outlet />
      </Container>
    </>
  );
}

/** Landing page will have it's own navigation, 
  * everything else will use the Layout component with standard navigation.
  */
const router = createBrowserRouter([
  {
    element: <AppContainer />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Landing />
      },
      {
        path: "blog",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Blog />,
          }
        ]
      },
      {
        path: "about",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <About />,
          }
        ]
      },
      {
        path: "contact",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Contact />,
          }
        ]
     }
    ]
  }
]);

function App() {
  const [ navActivated, setNavActivated ] = useState<boolean>(false);

  return (
    <ThemeProvider theme={theme}>
      <NavigationActivatedContext.Provider value={{navActivated, setNavActivated}}>
      <GlobalStyle />
      <RouterProvider router={router} />
      </NavigationActivatedContext.Provider>
    </ThemeProvider>  
  )
}

export default App;