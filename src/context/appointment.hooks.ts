import * as React from 'react';
import { omit } from 'lodash-es';
import { Appointment, Customer } from '../types';
import { appointmentContext } from './appointment.context';

export interface CustomerAppointmentSet {
  customer: Customer
  appointments: Omit<Appointment, 'customer'>[]
}

export function useAppointmentList() {
  const { state } = React.useContext(appointmentContext);

  const customers = React.useMemo(() => {
    if (!state.appointments) {
      return [];
    }

    const byCustomerId: Record<string, CustomerAppointmentSet> = {};
    for (const appt of state.appointments) {
      byCustomerId[appt.customer.id] = byCustomerId[appt.customer.id] ?? {
        customer: appt.customer,
        appointments: [],
      };

      byCustomerId[appt.customer.id].appointments.push(omit(appt, 'customer'));
    }

    return Object.values(byCustomerId);
  }, [state.appointments]);

  return { ...state, customers };
}

export function useSearchInput() {
  const timer = React.useRef(0);
  const { fetchAppointments } = React.useContext(appointmentContext);

  return React.useCallback((event: React.ChangeEvent) => {
    clearTimeout(timer.current);
    const search = (event.target as HTMLInputElement).value;
    if (search.length > 2) {
      timer.current = setTimeout(() => {
        fetchAppointments(search);
      }, 300);
    }
  }, [fetchAppointments]);
}
