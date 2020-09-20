import React from 'react';
import ReactDOM from 'react-dom';
import { Appointment } from '../src/Appointment';

describe('Appointment', () => {
	let customer;
	let container;
	beforeEach(() => {
		container = document.createElement('div');
	});

	const render = component => ReactDOM.render(component, container);
	it('renders the customer first name', () => {
		customer = { firstName: 'Ashley' };
		// component = <Appointment customer={customer} />;
		// document.body.appendChild(container);

		render(<Appointment customer={customer} />, container);
		expect(container.textContent).toMatch('Ashley');
	});

	it('renders the customer first name', () => {
		customer = { firstName: 'Jordan' };
		const component = <Appointment customer={customer} />;
		// document.body.appendChild(container);

		render(component, container);
		expect(container.textContent).toMatch('Jordan');
	});
});
