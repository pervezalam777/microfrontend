import React from 'react';
import { render } from '@testing-library/react';
import App from '../AppShared';

//TODO: should do shallow rendering instead
// or mock all the dependencies
describe('App shared', () => {
  it('should render properly', () => {
    render(<App />);
  });
});