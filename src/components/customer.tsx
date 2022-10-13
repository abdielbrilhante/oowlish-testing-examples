import * as React from 'react';
import { PlainDate } from '../shared/date';
import { petListLabel } from '../shared/utils';
import { PetItem } from './pet';
import type { CustomerAppointmentSet } from '../context/appointment.hooks';

export function Customer({ data }: { data: CustomerAppointmentSet }) {
  return (
    <>
      <div className="customer-info">
        <img src={data.customer.avatar} alt={`${data.customer.name}'s avatar`} />
        <div>
          <p>{data.customer.name}</p>
          <p>{petListLabel(data.customer.pets)}</p>
        </div>
      </div>
      <ul className="pets">
        {data.appointments.map((appt) => {
          const when = new PlainDate(appt.when);
          return (
            <li key={appt.id}>
              <PetItem pet={appt.pet} when={when} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
