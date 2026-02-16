import styled from "styled-components";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Link } from "react-router-dom";
import React from "react";


const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5em;
`;

const HomeButton = styled(Link)`
    width: 250px;  
    background-color: transparent;
    border: 1px solid white;
    border-radius: 5px;
    padding: 0.5em 1em;
    margin-bottom: 1em;
    cursor: pointer;
    transition: all 0.5s ease;
    text-decoration: none;
    text-align: center;
    &:hover {
        background-color: white;
        color: black !important;
    }
    &:-webkit-any-link {
        color: white;
    }
`;

const AnimContainer = styled.div`
    position: relative;
    width: 100vw;
`;

const FiveHundred = styled.div`
    position: absolute;
    font-size: 10em;
    mix-blend-mode: difference;
    color: white; /* start with a base color, usually white or black */
    top: 0%;
    width: 100%;
    text-align: center;
`;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container>
          <AnimContainer>
            <Player
              autoplay
              loop
              src="anims/background.json"
              style={{ height: '300px', width: '100%' }}
            >
              <Controls visible={false} />
            </Player>
            <FiveHundred>500</FiveHundred>
          </AnimContainer>
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <i>{this.state.error ? (this.state.error.statusText || this.state.error.message) : 'Unknown error'}</i>
          <HomeButton to="/">Return Home</HomeButton>
        </Container>
      );
    }



    return this.props.children;
  }
}

export default ErrorBoundary;