import * as React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { AppointmentProvider } from './context/appointment.context';
import { AppointmentsPage } from './pages/appointments.page';

export function App() {
  return (
    <BrowserRouter>
      <AppointmentProvider>
        <header />
        <main>
          <Routes>
            <Route path="/" element={<AppointmentsPage />} />
          </Routes>
        </main>
        <footer />
      </AppointmentProvider>
    </BrowserRouter>
  );
}
