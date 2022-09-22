import { AppointmentReducerAction, AppointmentState } from '../types';

export function appointmentReducer(state: AppointmentState, action: AppointmentReducerAction) {
  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === 'SET_ERROR') {
    return {
      ...state,
      error: action.payload,
      isLoading: false,
    };
  }

  if (action.type === 'SET_APPOINTMENTS') {
    return {
      ...state,
      appointments: action.payload,
      isLoading: false,
    };
  }

  return state;
}
