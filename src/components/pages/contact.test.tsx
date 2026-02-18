import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from './contact';

// Mock react-icons to avoid issues with rendering specific icons
jest.mock('react-icons/ci', () => ({
  CiTwitter: () => <svg data-testid="twitter-icon" />,
  CiLinkedin: () => <svg data-testid="linkedin-icon" />,
}));
jest.mock('react-icons/di', () => ({
  DiGithubAlt: () => <svg data-testid="github-icon" />,
}));

describe('Contact Page', () => {
  test('renders contact information', () => {
    render(<Contact />);
    expect(screen.getByText('Chris Murphy')).toBeInTheDocument();
    expect(screen.getByText('software engineer')).toBeInTheDocument();
  });

  test('social links have accessible names and security attributes', () => {
    render(<Contact />);

    const githubLink = screen.getByRole('link', { name: /github/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/cmurp');
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');

    const linkedinLink = screen.getByRole('link', { name: /linkedin/i });
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/chris-murphy-50912b122/');
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');

    const twitterLink = screen.getByRole('link', { name: /twitter/i });
    expect(twitterLink).toBeInTheDocument();
    expect(twitterLink).toHaveAttribute('href', 'https://twitter.com/__ChrisMurphy__');
    expect(twitterLink).toHaveAttribute('target', '_blank');
    expect(twitterLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('email is a mailto link', () => {
    render(<Contact />);
    // The email should be a link
    const emailLink = screen.getByRole('link', { name: /chrismurphy@hey.com/i });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute('href', 'mailto:chrismurphy@hey.com');
  });
});
