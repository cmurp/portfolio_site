import styled from "styled-components";
import World from "./world.jsx";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    align-items: center;
`;

const HelloWorld = styled.div`
    flex: 1;
    padding: 2rem;
    /* background-color: #00000099; */
    color: ${(props: any) => props.theme.colors.textPrimary};
    font-size: 2rem;
    `;

const UnderstatedHello = styled.h1`
    font-size: 2rem;
    color: ${(props: any) => props.theme.colors.accent};
    font-weight: normal;
`;

const BoldName = styled.h1`
    font-size: 2rem;
    color: ${(props: any) => props.theme.colors.textPrimary};

`;

const AccentedDescription = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    color: #0000;
    -webkit-text-stroke: .5px ${(props: any) => props.theme.colors.accent};
`;

const StyledLink = styled.a`
    color: ${(props: any) => props.theme.colors.accent};
    text-decoration: underline;
    &:hover {
        color: ${(props: any) => props.theme.colors.textPrimary};
        background-color: ${(props: any) => props.theme.colors.accent};
    }
`;

const BoldSpan = styled.span`
    font-weight: bold;
    color: #0000;
    -webkit-text-stroke: .5px ${(props: any) => props.theme.colors.accent};
`;


const About = () => {
    return (
        <Container>
            <HelloWorld>
                <UnderstatedHello>Hi!</UnderstatedHello>
                <BoldName>I'm Chris Murphy,</BoldName>
                <AccentedDescription>full stack software engineer.</AccentedDescription>
            </HelloWorld>
            <World />
            <p>Organizing toys in <BoldSpan>Summerfield, NC</BoldSpan></p>
            <p>Organizing bytes at <StyledLink href="https://www.ibm.com/products/z-anomaly-analytics">IBM Z Anomaly Analytics</StyledLink></p>
        </Container>
    )};

export default About;
