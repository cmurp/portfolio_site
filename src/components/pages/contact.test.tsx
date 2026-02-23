import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Contact from './contact';

test('renders contact links with accessible attributes', () => {
  render(
    <BrowserRouter>
      <Contact />
    </BrowserRouter>
  );

  // Check GitHub link
  // Initially this will fail because there is no accessible name "GitHub Profile"
  const githubLink = screen.getByRole('link', { name: /github profile/i });
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute('href', 'https://github.com/cmurp');
  expect(githubLink).toHaveAttribute('target', '_blank');
  expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');

  // Check LinkedIn link
  const linkedinLink = screen.getByRole('link', { name: /linkedin profile/i });
  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/chris-murphy-50912b122/');
  expect(linkedinLink).toHaveAttribute('target', '_blank');
  expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');

  // Check Twitter link
  const twitterLink = screen.getByRole('link', { name: /twitter profile/i });
  expect(twitterLink).toBeInTheDocument();
  expect(twitterLink).toHaveAttribute('href', 'https://twitter.com/__ChrisMurphy__');
  expect(twitterLink).toHaveAttribute('target', '_blank');
  expect(twitterLink).toHaveAttribute('rel', 'noopener noreferrer');
});
