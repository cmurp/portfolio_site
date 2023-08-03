import { useState, useEffect } from 'react';

/*
Determine whether the window has more space vertically or horizontally.
Sets up a listener for window resize events and returns the state object for tracking.
*/
export const useOrientation = () => {
  const [isVertical, setIsVertical] = useState<boolean>(window.innerHeight > window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setIsVertical(window.innerHeight > window.innerWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { isVertical, setIsVertical };
};