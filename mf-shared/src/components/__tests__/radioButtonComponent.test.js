import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';
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
    const input = container.getElementsByTagName('input')[0];
    expect(input).toBeChecked();
  });
  
  it('should notify check box change state', () => {
    const mockFn = jest.fn();
    function RadioGroup() {
      return (
        <div>
           <RadioButtonComponent
              name='gender'
              label='male'
              id='male'  
              onChange={mockFn}
            />
            <RadioButtonComponent
              name='gender'
              label='female'
              id='female'  
              onChange={mockFn}
            />
        </div>
      )
    }

    const {container} = render(<RadioGroup />);
    const inputs = container.getElementsByTagName('input');
    for(let input of inputs){
      expect(input).not.toBeChecked();
    }
    
    act(() => {
      fireEvent.click(inputs[0])
    })
    expect(inputs[0]).toBeChecked();
    expect(inputs[1]).not.toBeChecked();
    
    act(() => {
      fireEvent.click(inputs[1]);
    })
    expect(inputs[0]).not.toBeChecked();
    expect(inputs[1]).toBeChecked();
  });
});