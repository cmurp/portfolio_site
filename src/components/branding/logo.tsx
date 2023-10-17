import React from 'react';
import styled from 'styled-components';
import { BsGlobeAmericas } from 'react-icons/bs';

interface LogoProps {
  alt: string;
}

const StyledLogo = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const LogoContainer = styled.div`
  font-size: 2rem;
`

//const logonum=Math.floor(Math.random() * 4) + 1;
const src = 'logo4.png';

const Logo: React.FC<LogoProps> = ({ alt }) => {
  return (
  <LogoContainer>
    <BsGlobeAmericas/>
  </LogoContainer>
  );
  // return <StyledLogo src={src} alt={alt} />;
};

export default Logo;