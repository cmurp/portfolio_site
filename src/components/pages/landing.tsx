// landing.tsx
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Ascii from '../branding/ascii.styled';
import { NAME_ASCII } from '../../constants';

const Canvas = styled.canvas`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const ContentWrapper = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MainContent = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AlignmentContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
`;

const AsciiContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  mix-blend-mode: difference;
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6rem;
  height: 6rem;
  border: solid white;
  border-radius: 100%;
  background-color: rgba(255, 255, 255, 1.0);
`;

const TagLine = styled.span`
  font-size: 1.5em;
  margin-top: 1rem;
  color: ${props => props.theme.colors.textSecondary};
  text-align: center;
  
  &::after {
    content: "";
    display: block;
    margin: auto;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      ${props => props.theme.colors.textSecondary},
      transparent
    );
    width: 70%;
    margin-top: 0.5rem;
  }
`;

interface Star {
  x: number;
  y: number;
  z: number;
}
const Landing: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateDimensions = () => {
      // Get the window dimensions instead of parent element
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      const pixelRatio = window.devicePixelRatio || 1;
      
      // Set actual canvas dimensions
      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      
      // Set display size
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      // Scale context
      ctx.scale(pixelRatio, pixelRatio);
    };

    // Initialize stars with better visibility
    const makeStars = (count: number): Star[] => {
      return Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth - window.innerWidth/2,
        y: Math.random() * window.innerHeight - window.innerHeight/2,
        z: Math.random() * 1000
      }));
    };

    let stars = makeStars(2000);
    let animationFrameId: number;

    const render = (time: number) => {
      // Clear the canvas
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;

      // Update and draw stars
      stars.forEach(star => {
        star.z -= 0.5; // Slowed down the speed slightly

        if (star.z <= 1) {
          star.z = 1000;
          star.x = Math.random() * window.innerWidth - window.innerWidth/2;
          star.y = Math.random() * window.innerHeight - window.innerHeight/2;
        }

        const x = cx + star.x / (star.z * 0.001);
        const y = cy + star.y / (star.z * 0.001);

        if (x >= 0 && x < window.innerWidth && y >= 0 && y < window.innerHeight) {
          const size = (1 - star.z / 1000) * 3; // Made stars slightly larger
          const intensity = Math.floor((1 - star.z / 1000) * 255);
          ctx.fillStyle = `rgb(${intensity},${intensity},${intensity})`;
          ctx.fillRect(x, y, size, size);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    // Handle resize
    const handleResize = () => {
      updateDimensions();
    };

    window.addEventListener('resize', handleResize);
    updateDimensions(); // Initial setup
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <Canvas ref={canvasRef} />
      
      <ContentWrapper>
        <MainContent>
          <AlignmentContainer>
            <Overlay />
            <AsciiContainer>
              <Ascii>{NAME_ASCII}</Ascii>
            </AsciiContainer>
          </AlignmentContainer>
          
          <TagLine>
            Software Engineer
          </TagLine>
        </MainContent>
      </ContentWrapper>
    </div>
  );
};

export default Landing;