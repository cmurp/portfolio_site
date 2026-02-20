import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from './contact';

describe('Contact Page', () => {
  test('renders social links with accessible labels', () => {
    render(<Contact />);

    const githubLink = screen.getByLabelText(/GitHub Profile/i);
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/cmurp');
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');

    const linkedinLink = screen.getByLabelText(/LinkedIn Profile/i);
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/chris-murphy-50912b122/');

    const twitterLink = screen.getByLabelText(/Twitter Profile/i);
    expect(twitterLink).toBeInTheDocument();
    expect(twitterLink).toHaveAttribute('href', 'https://twitter.com/__ChrisMurphy__');
  });

  test('renders email address', () => {
    render(<Contact />);
    expect(screen.getByText('chrismurphy@hey.com')).toBeInTheDocument();
  });
});
