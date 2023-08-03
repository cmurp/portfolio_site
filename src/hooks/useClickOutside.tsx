import { useRef, useEffect, useState } from 'react';

/*

*/
export const useClickOutside = (initialState: boolean, isVertical: boolean) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(initialState);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isVertical &&
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false); // Clicked outside the container
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVertical]);

  return { isOpen, setIsOpen, containerRef };
};