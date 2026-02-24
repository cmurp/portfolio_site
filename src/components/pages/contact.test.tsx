import { render, screen } from '@testing-library/react';
import Contact from './contact';

test('renders contact links with accessible labels and security attributes', () => {
  render(<Contact />);

  // GitHub Link
  const githubLink = screen.getByLabelText(/github/i);
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute('href', 'https://github.com/cmurp');
  expect(githubLink).toHaveAttribute('target', '_blank');
  expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');

  // LinkedIn Link
  const linkedinLink = screen.getByLabelText(/linkedin/i);
  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/chris-murphy-50912b122/');
  expect(linkedinLink).toHaveAttribute('target', '_blank');
  expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');

  // Twitter Link
  const twitterLink = screen.getByLabelText(/twitter/i);
  expect(twitterLink).toBeInTheDocument();
  expect(twitterLink).toHaveAttribute('href', 'https://twitter.com/__ChrisMurphy__');
  expect(twitterLink).toHaveAttribute('target', '_blank');
  expect(twitterLink).toHaveAttribute('rel', 'noopener noreferrer');
});
