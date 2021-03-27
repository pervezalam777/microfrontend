import React from 'react';
import { render } from '@testing-library/react';
import App from '../AppFrntHost';

//TODO: should do shallow rendering instead
// or mock all the dependencies
describe('App frontend host', () => {
  it('should render properly', () => {
    render(<App />);
  });
});