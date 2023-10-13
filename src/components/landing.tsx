import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const rippleAnimation = keyframes`
  0% {
    text-shadow: 0 0 0.5em #FF0000, 0 0 0.5em #FF0000, 0 0 0.5em #FF0000;
  }
  50% {
    text-shadow: 0 0 0.2em #FF0000, 0 0 0.2em #FF0000, 0 0 0.5em #FF0000;
  }
  100% {
    text-shadow: 0 0 0.5em #FF0000, 0 0 0.5em #FF0000, 0 0 0.5em #FF0000;
  }
`;

const liquid = keyframes`
  0%, 100% {
    text-shadow: 3px 0px 2px #000, -3px 0px 2px #000, 0px 3px 2px #000, 0px -3px 2px #000;
  }
  50% {
    text-shadow: 3px 3px 2px #000, -3px -3px 2px #000, -3px 3px 2px #000, 3px -3px 2px #000;
  }
`;

const moveBackground = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: 100% 0;
  }
`;

const MainText = styled.h1`
  font-size: 3em;
  text-shadow: 0px 1px 0px #fff, 0px 2px 0px #fff, 0px 3px 0px #ccc, 0px 4px 0px #ccc, 0px 5px 0px #aaa, 0px 6px 1px rgba(0,0,0,.1), 0px 0px 5px rgba(0,0,0,.1), 0px 1px 3px rgba(0,0,0,.3), 0px 3px 5px rgba(0,0,0,.2), 0px 5px 10px rgba(0,0,0,.25), 0px 10px 10px rgba(0,0,0,.2), 0px 20px 20px rgba(0,0,0,.15);
  position: relative;
  background-clip: text;
  background-color: blue;
  color: transparent;
  -webkit-background-clip: text;
  transition: opacity 2s ease;
  animation: move-background 5s infinite linear;
`;

const TagLine = styled.span`
  font-size: 1.5em;
  color: grey;
  &::after {
    content: "";
    display: block;
    margin: auto;
    height: 2px;
    background: linear-gradient(to right, transparent, grey, transparent);
    width: 50%;
  }
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
`;

const Landing: React.FC = () => {
  useEffect(() => {
    const text = document.querySelector('.main-text');
    if (text) {
      text.classList.add('animate-text');
    }
  }, []);

  return (
    <Container>
      <MainText>Chris Murphy</MainText>
      <TagLine>
        Web Developer & Software Engineer
      </TagLine>
    </Container>
  );
};

export default Landing;