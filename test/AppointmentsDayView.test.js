import React from 'react';
import ReactDOM from 'react-dom';
import { Appointment, AppointmentsDayView } from '../src/AppointmentsDayView';
import ReactTestUtils from 'react-dom/test-utils';
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

describe('AppointmentsDayView', () => {
	let container;
	const today = new Date();
	const appointments = [
		{
			startsAt: today.setHours(12, 0),
			customer: { firstName: 'Ashley' },
		},
		{
			startsAt: today.setHours(13, 0),
			customer: { firstName: 'Jordan' },
		},
	];
	beforeEach(() => {
		container = document.createElement('div');
		render(<AppointmentsDayView appointments={appointments} />);
	});

	const render = component => ReactDOM.render(component, container);

	it('renders a div ith the right id', () => {
		render(<AppointmentsDayView appointments={[]} />);
		expect(container.querySelector('div#appointmentsDayView')).not.toBeNull();
	});

	it('renders multiple appointments in an ol element', () => {
		expect(container.querySelector('ol')).not.toBeNull();
		expect(container.querySelector('ol').children).toHaveLength(2);
	});

	it('renders each appointment in an li', () => {
		expect(container.querySelectorAll('li')).toHaveLength(2);
		expect(container.querySelectorAll('li')[0].textContent).toEqual('12:00');
		expect(container.querySelectorAll('li')[1].textContent).toEqual('13:00');
	});

	it('initially shows a message saying there are no appointments today', () => {
		render(<AppointmentsDayView appointments={[]} />);
		expect(container.textContent).toMatch('There are no appointments scheduled for today.');
	});

	it('selects the firs appointment by default', () => {
		expect(container.textContent).toMatch('Ashley');
	});

	it('has a button element in each li', () => {
		expect(container.querySelectorAll('li > button')).toHaveLength(2);
		expect(container.querySelectorAll('li > button')[0].type).toEqual('button');
	});

	it('renders another appointment when selected', () => {
		const button = container.querySelectorAll('button')[1];
		ReactTestUtils.Simulate.click(button);
		expect(container.textContent).toMatch('Jordan');
	});
});
