export interface Customer {
  id: string
  pets: Pet[]
  name: string
  avatar: string
}

export interface Pet {
  id: string
  name: string
  species: 'canine' | 'feline'
  breed: string
  sex: 'male' | 'female'
}

export interface Appointment {
  id: string
  when: string
  customer: Customer
  pet: Pet
}

export interface AppointmentState {
  isLoading: boolean
  error: Error | null
  appointments: Appointment[] | null
}

export interface AppointmentReducerAction {
  type: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any
}
