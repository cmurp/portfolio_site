// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mock canvas for lottie-player and other canvas libraries
if (typeof HTMLCanvasElement !== 'undefined') {
  HTMLCanvasElement.prototype.getContext = () => {
    return {
      fillStyle: '',
      fillRect: jest.fn(),
      scale: jest.fn(),
      clearRect: jest.fn(),
      translate: jest.fn(),
    } as any;
  };
}

// Mock react-globe.gl because it is ESM and causes Jest issues
jest.mock('react-globe.gl', () => {
  return function MockGlobe() {
    return null;
  };
});
