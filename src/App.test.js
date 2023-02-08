import { render, screen } from '@testing-library/react';
import App from './App';
// import Bisection from './course/Bisection';

test('renders learn react link', () => {
  render(<App />);
  // render(<Bisection/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
