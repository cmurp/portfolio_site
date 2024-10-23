import React from "react";
import styled, { useTheme, ThemeInterface } from "styled-components";


interface Props {
    children: React.ReactNode;
  }

interface AsciiProps {
    theme: any;
}

const TextDisplay = styled.div<AsciiProps>`
    font-size: ${(props: AsciiProps) => props.theme.fontSizes.medium};
    margin-bottom: 2rem;
    font-weight: ${(props: AsciiProps) => props.theme.fontWeights.bold};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    max-width: 35vw;
`;

const Pre = styled.pre`
    font-size: .55vw; 
    color: white;
    white-space: pre;
    line-height: .6vw;
    font-family: 'VT323', monospace;
`

const Ascii: React.FC<Props> = ({ children}) => {
    const theme = useTheme();
    return (
        <TextDisplay theme={theme}>
            <Pre>
                {children}
            </Pre>
        </TextDisplay>
    );
};


export default Ascii;

