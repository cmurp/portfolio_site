import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from './contact';

test('renders social links with accessible labels', () => {
  render(<Contact />);

  // This will fail initially because these labels don't exist yet
  const githubLink = screen.getByLabelText(/GitHub Profile/i);
  const linkedinLink = screen.getByLabelText(/LinkedIn Profile/i);
  const twitterLink = screen.getByLabelText(/Twitter Profile/i);

  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute('href', 'https://github.com/cmurp');
  expect(githubLink).toHaveAttribute('target', '_blank');
  expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');

  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/chris-murphy-50912b122/');
  expect(linkedinLink).toHaveAttribute('target', '_blank');
  expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');

  expect(twitterLink).toBeInTheDocument();
  expect(twitterLink).toHaveAttribute('href', 'https://twitter.com/__ChrisMurphy__');
  expect(twitterLink).toHaveAttribute('target', '_blank');
  expect(twitterLink).toHaveAttribute('rel', 'noopener noreferrer');
});
