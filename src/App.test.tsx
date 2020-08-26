import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('App renders Header', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Compete with your friends this week!/i);
  expect(linkElement).toBeInTheDocument();
});
