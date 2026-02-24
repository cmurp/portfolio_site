import { Form } from "react-router-dom";
import styled from "styled-components";
import { CiTwitter, CiLinkedin } from "react-icons/ci";
import { DiGithubAlt } from "react-icons/di";

// 1) Outer container fully uses the parent’s black background,
//    so we leave background transparent. We center content with flexbox.
const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* Optional: If you use a specific monospace or "VT323," you can do: */
  font-family: 'VT323', monospace;
  color: white;
`;

// 2) BusinessCard with a semi-transparent background, border, and subtle box-shadow
//    to match the "NavigationIsland" style from the main layout.
const BusinessCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* Size constraints */
  width: 320px;
  min-height: 180px;
  padding: 1rem;

  /* Terminal-like styling */
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);

  transition: all 300ms ease-in-out;
`;

// 3) Header area with name + tagline
const Header = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem 0;

  /* Slightly larger text than normal body copy */
  font-size: 1.25rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

const BoldSpan = styled.span`
  font-weight: bold;
  color: transparent;
  -webkit-text-stroke: 0.5px rgba(255, 255, 255, 0.8);
  margin-bottom: 0.25rem;
`;

const Tagline = styled.span`
  font-size: 1rem;
  font-style: italic;
  text-decoration: underline;
  color: rgba(255, 255, 255, 0.7);
`;

// 4) Contact info row: icons + email
const ContactInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem; /* spacing between icons */
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
`;

//
// Icon link style that matches your nav icons' hover glow
//
const IconLink = styled.a`
  position: relative;
  width: 2rem;
  height: 2rem;
  color: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: transparent;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 200ms ease-in-out;
  text-decoration: none;

  &:hover {
    color: white;
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
  }

  svg {
    width: 16px;
    height: 16px;
    transition: opacity 200ms ease-in-out;
  }
`;

const Email = styled.div`
  color: rgba(255, 255, 255, 0.7);
  margin: 0.25rem 0;
  font-size: 0.875rem;
  text-align: center;

  &:hover {
    color: rgba(255, 255, 255, 1);
  }
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
          <IconLink href="https://github.com/cmurp" aria-label="GitHub">
            <DiGithubAlt />
          </IconLink>
          <IconLink href="https://www.linkedin.com/in/chris-murphy-50912b122/" aria-label="LinkedIn">
            <CiLinkedin />
          </IconLink>
          <IconLink href="https://twitter.com/__ChrisMurphy__" aria-label="Twitter">
            <CiTwitter />
          </IconLink>
        </ContactInfo>

        <Email>chrismurphy@hey.com</Email>
      </BusinessCard>
    </Container>
  );
}
