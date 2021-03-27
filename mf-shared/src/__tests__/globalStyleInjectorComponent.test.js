import React from 'react';
import { render } from '@testing-library/react';
import GlobalStyleInjectorComponent from '../globalStyleInjectorComponent';

//TODO: should do shallow rendering instead
// or mock all the dependencies
describe('Global style injector component', () => {
  it('should render', () => {
    const { getByTestId } = render(<GlobalStyleInjectorComponent />);
    expect(getByTestId('globalStyle')).toBeTruthy();
  });
});