import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    font-size: 2rem;
    position: relative;
    display: inline-block;
    overflow: hidden;
    height: 2.5rem;
`;

const CharSpan = styled.span`
    display: inline-block;
    opacity: 1;
    transform: translate(0, 0);
    transition: opacity 0.5s, transform 0.5s, filter 0.5s;
`;

interface DisintegrateTextProps {
    children: string;
}

const DisintegrateText: React.FC<DisintegrateTextProps> = ({ children }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleDisintegrate = () => {
            if (!containerRef.current) return;

            const chars = containerRef.current.querySelectorAll('span');
            chars.forEach(char => {
                const x = (Math.random() - 0.5) * 1000;
                const y = (Math.random() - 0.5) * 1000;
                const delay = Math.random() * 2000;

                setTimeout(() => {
                    char.style.opacity = '0';
                    char.style.transform = `translate(${x}px, ${y}px)`;
                    char.style.filter = `blur(${Math.random() * 10}px)`;
                }, delay);
            });
        };

        containerRef.current?.addEventListener('click', handleDisintegrate);

        return () => {
            containerRef.current?.removeEventListener('click', handleDisintegrate);
        };
    }, []);

    return (
        <StyledContainer ref={containerRef}>
            {Array.from(children).map((char, index) => (
                <CharSpan key={index}>{char}</CharSpan>
            ))}
        </StyledContainer>
    );
};

export default DisintegrateText;
