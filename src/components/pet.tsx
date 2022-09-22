import * as React from 'react';
import { PlainDate } from '../shared/date';
import { Pet } from '../types';

const icons = {
  canine: new URL('../assets/dog.png', import.meta.url),
  feline: new URL('../assets/cat.png', import.meta.url),
};

export function Pet({ pet, when }: { pet: Pet, when: PlainDate }) {
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
