import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const MainText = styled.h1`
  margin-top: -20%;
  font-size: 3em;
  text-shadow:  0px 1px 0px ${(props: any) => props.theme.colors.textPrimary}, 
                0px 2px 0px black,
                0px 3px 0px ${(props: any) => props.theme.colors.textSecondary},
                0px 4px 0px black,
                0px 5px 0px ${(props: any) => props.theme.colors.textPrimary},  
                0px 6px 1px ${(props: any) => props.theme.colors.main}, 
                0px 0px 5px rgba(0,0,0,.1), 
                0px 1px 3px rgba(0,0,0,.3), 
                0px 3px 5px rgba(0,0,0,.2), 
                0px 5px 10px rgba(0,0,0,.25), 
                0px 10px 10px rgba(0,0,0,.2), 
                0px 20px 20px rgba(0,0,0,.15);
  position: relative;
  background-clip: text;
  background-color: ${(props: any) => props.theme.colors.textOnAccent};
  color: transparent;
  -webkit-background-clip: text;
  transition: opacity 2s ease;
  animation: move-background 5s infinite linear;
`;

const TagLine = styled.span`
  font-size: 1.5em;
  color: ${(props: any) => props.theme.colors.textSecondary};
  &::after {
    content: "";
    display: block;
    margin: auto;
    height: 2px;
    background: linear-gradient(to right, transparent, ${(props: any) => props.theme.colors.textSecondary}, transparent);
    width: 70%;
  }
`;

const NavButton = styled(Link)`
  width: 250px;  
  background-color: transparent;
  border: 1px solid white;
  border-radius: 10px;
  padding: 0.5em 1em;
  color: white;
  font-size: 1.5em;
  margin-top: 1em;
  cursor: pointer;
  transition: all 0.5s ease;
  text-decoration: none;
  &:hover {
    background-color: white;
    color: black;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${props => keyframes`
    0% {
      box-shadow: 0 0 3px ${props.theme.colors.textPrimary}, 
                  0 0 4px ${props.theme.colors.textPrimary};
    }
    100% {
      box-shadow: 0 0 10px ${props.theme.colors.textPrimary}, 
                  0 0 15px ${props.theme.colors.textPrimary};
    }
  `} 2s infinite alternate;
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
        Full Stack Software Engineer
      </TagLine>
      <NavButton key="About Me" to="about">About Me</NavButton>
      <NavButton key="View My Work" to="http://github.com/cmurp">View My Work</NavButton>
      <NavButton key="Contact Me" to="contact">Contact Me</NavButton>
    </Container>
  );
};

export default Landing;
