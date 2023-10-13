import styled from "styled-components";
import { useState, useRef, useEffect } from "react";

const Canvas = styled.canvas`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`;

const CanvasBackground = () => {
  const [dimensions, setDimensions] = useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  });
  const canvasRef = useRef(null);
/*************** */
    
/*************** */
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    //Our first draw
    context.fillStyle = '#000000'
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);

    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
      canvas.width = dimensions.width;
      canvas.height = dimensions.height;
      context.fillStyle = '#000000'
      context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    }

    window.addEventListener('resize', handleResize);

    const makeStars = count => {
      const out = [];
      for (let i = 0; i < count; i++) {
        const s = {
          x: Math.random() * 1600 - 800,
          y: Math.random() * 900 - 450,
          z: Math.random() * 1000
        };
        out.push(s);
      }
      return out;
    };

    let stars = makeStars(10000);

    const clear = () => {
      context.fillStyle = "black";
      context.fillRect(0, 0, canvas.width, canvas.height);
    };

    const putPixel = (x, y, brightness) => {
      const intensity = brightness * 255;
      const rgb = "rgb(" + intensity + "," + intensity + "," + intensity + ")";
      context.fillStyle = rgb;
      context.fillRect(x, y, 1, 1);
    };

    const moveStars = distance => {
      const count = stars.length;
      for (var i = 0; i < count; i++) {
        const s = stars[i];
        s.z -= distance;
        while (s.z <= 1) {
          s.z += 1000;
        }
      }
    };

    let prevTime;
    const init = time => {
      prevTime = time;
      requestAnimationFrame(tick);
    };

    const tick = time => {
      let elapsed = time - prevTime;
      prevTime = time;

      moveStars(elapsed * 0.1);

      clear();

      const cx = dimensions.width / 2;
      const cy = dimensions.height / 2;

      const count = stars.length;
      for (var i = 0; i < count; i++) {
        const star = stars[i];

        const x = cx + star.x / (star.z * 0.001);
        const y = cy + star.y / (star.z * 0.001);

        if (x < 0 || x >= dimensions.width || y < 0 || y >= dimensions.height) {
          continue;
        }

        const d = star.z / 1000.0;
        const b = 1 - d * d;

        putPixel(x, y, b);
        
      }

      requestAnimationFrame(tick);
    };

    requestAnimationFrame(init);
  }, []);

  return (
    <Canvas ref={canvasRef} />
  );
}

export default CanvasBackground;