import { useState, useMemo } from "react";
import { createBrowserRouter, useLocation, Outlet, useNavigate, RouterProvider } from 'react-router-dom';
import { styled, ThemeProvider } from 'styled-components';

import { GlobalStyle } from './GlobalStyle';
import theme from './theme';
import './App.css';

import ErrorBoundary from './components/pages/error-boundary';
import Contact from "./components/pages/contact";
import About from "./components/pages/about";
import Blog from './components/pages/blog/blog';
import Landing from './components/pages/landing';
import { NavigationActivatedContext } from "./context/NavigationActivatedContext";
import Layout from "./Layout";
import CustomCursor from "./components/effects/CustomCursor";
import NotFoundPage from "./components/pages/notFoundPage";
import Work from "./components/pages/works/work";


/** Landing page will have it's own navigation, 
  * everything else will use the Layout component with standard navigation.
  */
const AppContainer = () => {
  // Get current route to determine active section
  const location = useLocation();
  const currentSection = useMemo(() => {
    const path = location.pathname;
    if (path === '/') return 'home';
    return path.split('/')[1] || 'home';
  }, [location]);

  return (
    <>
      <Layout currentSection={currentSection}>
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
        {/* <CustomCursor /> */}
      </Layout>
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppContainer />,
    children: [
      {
        path: "/",
        element: <Landing />
      },
      {
        path: "blog",
        element: <Blog />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "work",
        element: <Work />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "*",
        element: <NotFoundPage />
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