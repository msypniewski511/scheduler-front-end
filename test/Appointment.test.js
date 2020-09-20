import React from 'react';
import ReactDOM from 'react-dom';
import { Appointment, AppointmentsDayView } from '../src/Appointment';

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

	beforeEach(() => {
		container = document.createElement('div');
	});

	const render = component => ReactDOM.render(component, container);

	it('renders a div ith the right id', () => {
		render(<AppointmentsDayView appointments={[]} />);
		expect(container.querySelector('div#appointmentsDayView')).not.toBeNull();
	});

	it('renders multiple appointments in an ol element', () => {
		const today = new Date();
		const appointments = [{ startsAt: today.setHours(12, 0) }, { startsAt: today.setHours(13, 0) }];
		render(<AppointmentsDayView appointments={appointments} />);
		expect(container.querySelector('ol')).not.toBeNull();
		expect(container.querySelector('ol').children).toHaveLength(2);
	});

	it('renders each appointment in an li', () => {
		const today = new Date();
		const appointments = [{ startsAt: today.setHours(12, 0) }, { startsAt: today.setHours(13, 0) }];
		render(<AppointmentsDayView appointments={appointments} />);
		expect(container.querySelectorAll('li')).toHaveLength(2);
		expect(container.querySelectorAll('li')[0].textContent).toEqual('12:00');
		expect(container.querySelectorAll('li')[1].textContent).toEqual('13:00');
	});
});
