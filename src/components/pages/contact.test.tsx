import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from './contact';

// Mock the icons to avoid rendering issues if any
jest.mock('react-icons/ci', () => ({
  CiTwitter: () => <span data-testid="twitter-icon" />,
  CiLinkedin: () => <span data-testid="linkedin-icon" />,
}));
jest.mock('react-icons/di', () => ({
  DiGithubAlt: () => <span data-testid="github-icon" />,
}));

test('renders contact links with correct accessibility attributes', () => {
  render(<Contact />);

  // Check GitHub link
  const githubLink = screen.getByLabelText(/GitHub Profile/i);
  (expect(githubLink) as any).toBeInTheDocument();
  (expect(githubLink) as any).toHaveAttribute('href', 'https://github.com/cmurp');
  (expect(githubLink) as any).toHaveAttribute('target', '_blank');
  (expect(githubLink) as any).toHaveAttribute('rel', 'noopener noreferrer');

  // Check LinkedIn link
  const linkedinLink = screen.getByLabelText(/LinkedIn Profile/i);
  (expect(linkedinLink) as any).toBeInTheDocument();
  (expect(linkedinLink) as any).toHaveAttribute('href', 'https://www.linkedin.com/in/chris-murphy-50912b122/');

  // Check Twitter link
  const twitterLink = screen.getByLabelText(/Twitter Profile/i);
  (expect(twitterLink) as any).toBeInTheDocument();
  (expect(twitterLink) as any).toHaveAttribute('href', 'https://twitter.com/__ChrisMurphy__');

  // Check Email link
  const emailLink = screen.getByLabelText(/Email Chris Murphy/i);
  (expect(emailLink) as any).toBeInTheDocument();
  (expect(emailLink) as any).toHaveAttribute('href', 'mailto:chrismurphy@hey.com');
  (expect(emailLink) as any).toHaveTextContent('chrismurphy@hey.com');
});
