import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the home page', () => {
  render(<App />);
  const linkElement = screen.getByText(/boas vindas/i);
  expect(linkElement).toBeInTheDocument();
});
