import { render } from '@testing-library/react';

import { App } from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
