// FadeTransition.js
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './FadeTransition.css';

const FadeTransition = ({ children, in: inProp }) => {
  return (
    <CSSTransition
      in={inProp}
      timeout={300}
      classNames="fade"
      unmountOnExit
    >
      {children}
    </CSSTransition>
  );
};

export default FadeTransition;
