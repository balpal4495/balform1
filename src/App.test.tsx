import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders a submit button', () => {
  const { getByText } = render(<App />);
  const submitElement = getByText(/Submit/i);
  expect(submitElement).toBeInTheDocument();
});