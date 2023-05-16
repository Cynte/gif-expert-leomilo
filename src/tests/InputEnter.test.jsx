import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { InputEnter } from '../components/InputEnter';
import '@testing-library/jest-dom/extend-expect';

describe('Testing component InputEnter', () => {

    it('renders an input with given placeholder text', () => {
      const placeholder = 'Enter text here...';
      const { getByPlaceholderText } = render(<InputEnter onEnter={() => {}} placeholder={placeholder} />);
      expect(getByPlaceholderText(placeholder)).toBeInTheDocument();
    });
  
    it('renders an input with empty string as placeholder text if placeholder prop is not provided', () => {
      const { getByRole } = render(<InputEnter onEnter={() => {}} />);
      const input = getByRole('textbox');
      expect(input.placeholder).toBe('');
    });
  
    it('works properly when form is submitted with non-empty input value', () => {
      const mockOnEnter = jest.fn();
      const inputValue = 'Test input value';
      const { getByRole, getByDisplayValue } = render(<InputEnter onEnter={mockOnEnter} />);
      const input = getByRole('textbox');
      fireEvent.change(input, { target: { value: inputValue } });
      expect(getByDisplayValue(inputValue)).toBeInTheDocument();
      fireEvent.submit(input);
      expect(mockOnEnter).toHaveBeenCalledWith(inputValue);
      expect(getByDisplayValue('')).toBeInTheDocument();
    });
  
    it('does not call onEnter function when form is submitted with empty input value', () => {
      const mockOnEnter = jest.fn();
      const { getByRole } = render(<InputEnter onEnter={mockOnEnter} />);
      const input = getByRole('textbox');
      fireEvent.submit(input);
      expect(mockOnEnter).not.toHaveBeenCalled();
    });
  });