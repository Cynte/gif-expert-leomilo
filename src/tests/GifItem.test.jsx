import React from 'react';
import { render } from '@testing-library/react';
import { GifItem } from '../components/GifItem';
import '@testing-library/jest-dom/extend-expect';

describe('GifItem', () => {
  const gif = {
    id: 'abc123',
    url: 'https://giphy.com/abc123',
    title: 'Test GIF'
  };

  it('renders the GIF with correct alt text', () => {
    const { getByAltText } = render(<GifItem {...gif} />);
    expect(getByAltText(gif.title)).toBeInTheDocument();
  });

  it('renders the GIF with correct link', () => {
    const { getByRole } = render(<GifItem {...gif} />);
    const link = getByRole('link');
    expect(link).toHaveAttribute('href', gif.url);
  });

  it('throws a prop type error when required props are missing', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    render(<GifItem />);
    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });
});