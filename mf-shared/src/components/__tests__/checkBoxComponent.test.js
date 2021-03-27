import React from 'react';
import { render } from '@testing-library/react';
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
    expect(container.innerHTML.search('checked')).toBeTruthy();
  });
  it('should notify check box change state', () => {});
});