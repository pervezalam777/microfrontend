import React from 'react';
import { render, act, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import CheckBoxComponent from '../checkBoxComponent';

describe('Checkbox component', () => {
  it('should render with label', () => {
    const { getByLabelText } = render(<CheckBoxComponent label='dummy label' />);
    expect(getByLabelText(/dummy label/)).toBeInTheDocument();
  });
  it('should render without label', () => {
    const { container } = render(<CheckBoxComponent />);
    expect(
      container.getElementsByClassName('sh-checkbox__label')
    ).toHaveLength(0);
  });
  it('should render as controlled checkbox', () => {
    const mockFn = jest.fn();
    const { container } = render(
      <CheckBoxComponent 
        checked={true} 
        onChange={mockFn}
      />
    );
    const input = container.getElementsByTagName('input')[0];
    expect(input).toBeChecked();
  });

  it('should notify check box change state', () => {
    const mockFn = jest.fn();
    const { container } = render(
      <CheckBoxComponent 
        onChange={mockFn}
      />
    );
    const input = container.getElementsByTagName('input')[0];
    expect(input).not.toBeChecked();
    act(() => {
      fireEvent.click(input);
    })
    expect(input).toBeChecked();
    expect(mockFn).toHaveBeenCalled();
  });
});