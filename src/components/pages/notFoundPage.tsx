import styled from "styled-components";
import React from "react";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Link } from "react-router-dom";

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


const NotFoundPage: React.FC = () => {
    return (
        <Container>
            <Player
                autoplay
                loop
                src="anims/404.json"
                style={{ height: '300px', width: '300px' }}
                >
                <Controls visible={false}/>
            </Player>
            <HomeButton to="/">Return Home</HomeButton>
            <p>Page not found</p>
        </Container>
    )
}

export default NotFoundPage;