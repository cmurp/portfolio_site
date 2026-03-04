// landing.tsx
import React, { useEffect, useRef, useState } from 'react';
import { styled, keyframes } from 'styled-components';
import Ascii from '../branding/ascii.styled';
import { NAME_ASCII } from '../../constants';

/* =====================  ANIMATIONS  ===================== */
const spin = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`;

/* const spin3D = keyframes`
  from {
    transform: rotate3d(0.5, 0.5, 0.5, 0deg);
  }
  to {
    transform: rotate3d(0.5, 0.5, 0.5, 360deg);
  }
`; */

/* =====================  SOLAR SYSTEM  ===================== */
const SpinnerBox = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

const SolarSystem = styled.div`
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface OrbitProps {
  size: number;
  duration: number;
}

const Orbit = styled.div<OrbitProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #fafbfc;
  border-radius: 50%;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  animation: ${spin} ${(props) => props.duration}s linear infinite;
`;

const Planet = styled.div`
  position: absolute;
  top: -5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: white;
`;

const Sun = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: white;
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  background-color: rgba(255, 255, 255, 0.0);
`;

const SolarSystemComponent: React.FC = () => {
  return (
    <Overlay>
      <SpinnerBox>
        <SolarSystem>
          <Orbit size={265} duration={12}>
            <Planet />
            <Orbit size={200} duration={7.4}>
              <Planet />
              <Orbit size={120} duration={3}>
                <Planet />
                <Sun />
              </Orbit>
            </Orbit>
          </Orbit>
        </SolarSystem>
      </SpinnerBox>
    </Overlay>
  );
};

/* =====================  BACKGROUND STARFIELD  ===================== */

const Canvas = styled.canvas`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

/* =====================  MAIN CONTENT WRAPPERS  ===================== */
const ContentWrapper = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

/**
 * We'll apply the tilt transform to MainContent.
 * We let it remain absolutely positioned & full width,
 * and we’ll add a dynamic style prop for the 3D tilt.
 */
interface MainContentProps {
  transformStyle: string;
}
const MainContent = styled.div<MainContentProps>`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.1s ease-out;

  /* We'll inject our tilt transform here. */
  transform: ${(props) => props.transformStyle};
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

const TagLine = styled.div`
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  letter-spacing: 0.1em;
  margin-top: 2rem;
  position: relative;
  text-transform: uppercase;
  
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -0.5rem;
    width: 3rem;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background: rgba(255, 255, 255, 0.1);
    animation: scan 6s linear infinite;
  }
`;

/* =====================  STAR FIELD LOGIC  ===================== */
interface Star {
  x: number;
  y: number;
  z: number;
}

const Landing: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Keep track of our dynamic 3D transform:
  const [transformStyle, setTransformStyle] = useState('perspective(800px)');

  useEffect(() => {
    /* 
     * ==============
     * 1) STAR FIELD
     * ==============
     */
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateDimensions = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const pixelRatio = window.devicePixelRatio || 1;

      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(pixelRatio, pixelRatio);
    };

    const makeStars = (count: number): Star[] => {
      return Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth - window.innerWidth / 2,
        y: Math.random() * window.innerHeight - window.innerHeight / 2,
        z: Math.random() * 1000,
      }));
    };

    let stars = makeStars(2000);
    let animationFrameId: number;

    const render = () => {
      if (!ctx) return;
      // Clear the canvas
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;

      // Update and draw stars
      stars.forEach((star) => {
        star.z -= 0.5;

        if (star.z <= 1) {
          star.z = 1000;
          star.x =
            Math.random() * window.innerWidth - window.innerWidth / 2;
          star.y =
            Math.random() * window.innerHeight - window.innerHeight / 2;
        }

        const x = cx + star.x / (star.z * 0.001);
        const y = cy + star.y / (star.z * 0.001);

        if (
          x >= 0 &&
          x < window.innerWidth &&
          y >= 0 &&
          y < window.innerHeight
        ) {
          const size = (1 - star.z / 1000) * 3;
          const intensity = Math.floor((1 - star.z / 1000) * 255);
          ctx.fillStyle = `rgb(${intensity},${intensity},${intensity})`;
          ctx.fillRect(x, y, size, size);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    const handleResize = () => {
      updateDimensions();
    };

    window.addEventListener('resize', handleResize);
    updateDimensions();
    animationFrameId = requestAnimationFrame(render);

    /* 
     * ==========
     * 2) 3D TILT
     * ==========
     */
    // We’ll set up separate listeners for mouse vs. device orientation
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    function handleMouseMove(e: MouseEvent) {
      // (x, y) relative to center of screen from [-0.5, 0.5]
      const xRatio = e.clientX / window.innerWidth - 0.5;
      const yRatio = e.clientY / window.innerHeight - 0.5;

      // Multiply to define how dramatic the tilt is
      const tiltX = yRatio * 10; // rotateX is from Y movement
      const tiltY = xRatio * 10; // rotateY is from X movement

      setTransformStyle(
        `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`
      );
    }

    function handleDeviceOrientation(e: DeviceOrientationEvent) {
      // Not all devices report all angles reliably, so we do some null checks.
      // Typically, beta is the front-back tilt (range: -180 to 180),
      // and gamma is the left-right tilt (range: -90 to 90).
      const beta = e.beta ?? 0; 
      const gamma = e.gamma ?? 0; 

      // Scale it down a bit so it’s not too wobbly
      const tiltX = beta * 0.2;
      const tiltY = gamma * 0.2;

      setTransformStyle(
        `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`
      );
    }

    if (isMobile) {
      // For mobile, listen to device orientation.
      window.addEventListener('deviceorientation', handleDeviceOrientation);
    } else {
      // For desktop, listen to mouse movements.
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      // Remove tilt listeners
      if (isMobile) {
        window.removeEventListener(
          'deviceorientation',
          handleDeviceOrientation
        );
      } else {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <Canvas ref={canvasRef} />
      <ContentWrapper>
        {/*
          We apply our dynamic 3D transform style to MainContent
          via the transformStyle state.
        */}
        <MainContent transformStyle={transformStyle}>
          <AlignmentContainer>
            <SolarSystemComponent />
            <AsciiContainer>
              <Ascii>{NAME_ASCII}</Ascii>
            </AsciiContainer>
          </AlignmentContainer>
          <TagLine>Software Engineer</TagLine>
        </MainContent>
      </ContentWrapper>
    </div>
  );
};

export default Landing;
