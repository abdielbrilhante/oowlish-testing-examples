import * as React from 'react';
import { Customer } from '../components/customer';
import { useAppointmentList, useSearchInput } from '../context/appointment.hooks';

export function AppointmentsPage() {
  const { customers, isLoading } = useAppointmentList();
  const handleSearchChange = useSearchInput();

  return (
    <div>
      <label htmlFor="search">
        <div>Search by customer or pet name</div>
        <input
          type="text"
          placeholder="Type in search..."
          onChange={handleSearchChange}
        />
      </label>

      {isLoading ? (
        <div className="loading">Please wait...</div>
      ) : (
        <ul className="customers">
          {customers.map((set) => (
            <li key={set.customer.id}>
              <Customer data={set} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
