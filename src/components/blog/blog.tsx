import React, { Ref, useEffect } from 'react';
import styled from 'styled-components';

import Content from './content';
import { ButtonClickedContext } from './context/buttonClicked';

interface Props {
  children: React.ReactNode;
  isVertical?: boolean;
}

const Blog: React.FC<Props> = ({ children }) => {
  const [isClicked, setIsClicked] = React.useState<boolean>(false);
  const clickToRender = useEffect(() => {
        window.addEventListener('keydown', (key) => {
          if (key.key === 'Enter')
            setIsClicked(true);
        });
    }, []);

  return (
    <ButtonClickedContext.Provider value={{ isClicked, setIsClicked }}>
      <Content>{children}</Content>
    </ButtonClickedContext.Provider>
  );
};

export default Blog;