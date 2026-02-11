import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders software engineer tagline', () => {
  render(<App />);
  const linkElements = screen.getAllByText(/software engineer/i);
  expect(linkElements.length).toBeGreaterThan(0);
});
