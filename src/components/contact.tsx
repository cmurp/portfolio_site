import { Form } from "react-router-dom";
import styled from "styled-components";
import { CiTwitter, CiLinkedin } from "react-icons/ci";
import { DiGithubAlt } from "react-icons/di";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BusinessCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 370px;
    height: 200px;
    align-items: center;
    background: rgba( 255, 255, 255, 0.1 );
    box-shadow: 0 0px 24px 0 ${({ theme }) => theme.colors.shadow};
    backdrop-filter: blur( 2px );
    -webkit-backdrop-filter: blur( 2px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`

const Header = styled.h1`
  margin-top: .2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const BoldSpan = styled.span`
    font-weight: bold;
    color: #0000;
    -webkit-text-stroke: .5px ${(props: any) => props.theme.colors.accent};
`;

const Tagline = styled.span`
    font-size: 1rem;
    font-style: italic;
    text-decoration: underline;
    color: ${(props: any) => props.theme.colors.textPrimary};
`;


const ContactInfo = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

const Icon = styled.a`
    font-size: 2.5rem;
    color: ${(props: any) => props.theme.colors.secondaryAccent};
    text-decoration: none;
`;


export default function Contact() {
  return (
    <Container>
      <BusinessCard>
        <Header>
          <BoldSpan>Chris Murphy</BoldSpan> 
          <Tagline>software engineer</Tagline>
        </Header>
        <ContactInfo>
          <Icon href="http://github.com/cmurp"><DiGithubAlt></DiGithubAlt></Icon>
          <Icon href="https://www.linkedin.com/in/chris-murphy-50912b122/"><CiLinkedin></CiLinkedin></Icon>
          <Icon href="https://twitter.com/__ChrisMurphy__"><CiTwitter></CiTwitter></Icon>
        </ContactInfo>
        chrismurphy@hey.com
      </BusinessCard>
    </Container>
  );
}