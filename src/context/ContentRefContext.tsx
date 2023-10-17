import React, { createContext, useContext, useRef } from 'react';

export const ContentRefContext = createContext<React.RefObject<HTMLDivElement> | null>(null);

export const useContentRefContext = () => {
  const context = useContext(ContentRefContext);
  if (!context) {
    throw new Error('useContentRef must be used within ContentRefProvider');
  }
  return context;
};
