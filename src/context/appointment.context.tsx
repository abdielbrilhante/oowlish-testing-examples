import * as React from 'react';
import { AppointmentState } from '../types';
import { appointmentReducer } from './appointment.reducer';

const initialState: AppointmentState = {
  isLoading: false,
  appointments: null,
  error: null,
};

export const appointmentContext = React.createContext({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  async fetchAppointments(search: string) { },
  state: initialState,
});

export function AppointmentProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer(appointmentReducer, initialState);

  const fetchAppointments = React.useCallback(async (search: string) => {
    dispatch({ type: 'SET_LOADING', payload: false });
    try {
      const response = await fetch(`http://localhost:7171/appointments?search=${search}`);
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();
      dispatch({ type: 'SET_APPOINTMENTS', payload: data });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error });
    }
  }, [dispatch]);

  const contextValue = React.useMemo(() => ({
    fetchAppointments,
    state,
  }), [fetchAppointments, state]);

  return (
    <appointmentContext.Provider value={contextValue} >
      {children}
    </appointmentContext.Provider>
  );
}
