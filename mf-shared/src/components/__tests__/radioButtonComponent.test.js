import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import RadioButtonComponent from '../radioButtonComponent';

describe('Radio button component', () => {
  it('should render with label', () => {
    const { getByLabelText } = render(<RadioButtonComponent label='dummy label' />);
    expect(getByLabelText(/dummy label/)).toBeInTheDocument();
  });
  it('should render without label', () => {
    const { container } = render(<RadioButtonComponent />);
    expect(
      container.getElementsByClassName('sh-checkbox__label')
    ).toHaveLength(0);
  });
  it('should render as controlled radio button component', () => {
    const mockFn = jest.fn();
    const { container } = render(
      <RadioButtonComponent 
        checked={true} 
        onChange={mockFn}
      />
    );
    expect(container.innerHTML.search('checked')).toBeTruthy();
  });
  it('should notify check box change state', () => {});
});