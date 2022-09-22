import * as React from 'react';
import { PlainDate } from '../shared/date';
import { Pet } from './pet';
import type { CustomerAppointmentSet } from '../context/appointment.hooks';

export function Customer({ data }: { data: CustomerAppointmentSet }) {
  return (
    <>
      <div className="customer-info">
        <img src={data.customer.avatar} alt={`${data.customer.name}'s avatar`} />
        <div>
          <p>{data.customer.name}</p>
        </div>
      </div>
      <ul className="pets">
        {data.appointments.map((appt) => {
          const when = new PlainDate(appt.when);
          return (
            <li key={appt.id}>
              <Pet pet={appt.pet} when={when} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
