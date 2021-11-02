import React from 'react';
import { render } from '@testing-library/react';
import App from '../AppAuth';

//TODO: should do shallow rendering instead
// or mock all the dependencies
describe('App (mf-name)', () => {
	it('should render properly', () => {
		const { container } = render(<App />);
		expect(container).toBeTruthy();
	});
});
