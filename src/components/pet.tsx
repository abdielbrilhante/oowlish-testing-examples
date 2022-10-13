import * as React from 'react';
import { icons } from '../assets';
import { PlainDate } from '../shared/date';
import { Pet } from '../types';

export function PetItem({ pet, when }: { pet: Pet, when: PlainDate }) {
  return (
    <>
      <img src={icons[pet.species].href} alt={`${pet.species} icon`} aria-hidden />
      <div className="pet-info">
        <div>
          {pet.name}
        </div>
        <div>
          <span className="pet-sex">
            {pet.sex}
          </span>
          {' '}
          <span className="pet-species">
            {pet.breed}
          </span>
        </div>
        <div>
          {when.format()}
        </div>
      </div>
      {when.isAfter(PlainDate.today()) ? (
        <div className="followup-tag">
          Follow up on {when.add(1, 'month').format()}
        </div>
      ) : null}
    </>
  );
}
