import styled from "styled-components";

const StyledAbout = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 2rem;
    overflow-y: scroll;
    background-color: ${(props: any) => props.theme.colors.main};
    color: ${(props: any) => props.theme.colors.textPrimary};
`;

const About = () => {
    return (
        <StyledAbout>
            <h1>About</h1>
            <p>Some information about me.</p>
        </StyledAbout>
    )};

export default About;
