import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
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


const About = () => {
    return (
        <Container>
            <HelloWorld>
                <UnderstatedHello>Hi!</UnderstatedHello>
                <BoldName>I'm Chris Murphy,</BoldName>
                <AccentedDescription>full stack software engineer.</AccentedDescription>
            </HelloWorld>
        </Container>
    )};

export default About;
