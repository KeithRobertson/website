import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

test('renders the banner', () => {
  render(<App />);

  expect(screen.getByText(/Keith Robertson/i)).toBeInTheDocument();
});
