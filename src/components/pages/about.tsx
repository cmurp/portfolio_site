import styled from "styled-components";
import World from "../branding/world.jsx";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HelloWorld = styled.div`
    flex: 1;
    padding: 2rem;
    color: ${(props: any) => props.theme.colors.textPrimary};
    font-size: 2rem;
    `;

const UnderstatedHello = styled.span`
    font-size: 2rem;
    color: ${(props: any) => props.theme.colors.accent};
    font-weight: normal;
`;

const BoldName = styled.span`
    font-size: 2rem;
    color: ${(props: any) => props.theme.colors.textPrimary};

`;

const AccentedDescription = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    color: transparent;
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

/* const BoldSpan = styled.span`
    font-weight: bold;
    color: transparent;
    -webkit-text-stroke: .5px ${(props: any) => props.theme.colors.accent};
`; */

const Location = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 1.5;
    color: ${(props: any) => props.theme.colors.textPrimary};
    font-size: 1rem;
`


const About = () => {
    return (
        <Container>
            <HelloWorld>
                <UnderstatedHello>Hi!</UnderstatedHello>&nbsp;
                <BoldName>I'm Chris Murphy,</BoldName>
                <AccentedDescription>full stack software engineer.</AccentedDescription>
            </HelloWorld>
            <div>
            I work at <StyledLink href="https://www.ibm.com/products/z-anomaly-analytics">IBM Z Anomaly Analytics</StyledLink>
            </div>
            <Location>
                <p>Location:</p>
                <World />
            </Location>
        </Container>
    )};

export default About;
