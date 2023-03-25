import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Drinks component', () => {
  const { container } = render(<App />);
  const header = container.querySelector('header');
  expect(header).toBeInTheDocument();
});
