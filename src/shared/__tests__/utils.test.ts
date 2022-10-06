import { times } from 'lodash';
import { Pet } from '../../types';
import { petListLabel } from '../utils';

describe('petListLabel', () => {
  function createPet(): Pet {
    return {
      id: 'rand',
      breed: 'Labrador',
      sex: 'male',
      name: 'Spot',
      species: 'canine',
    };
  }

  it.each([
    ['empty list', 0, 'No pets'],
    ['single pet', 1, '1 pet'],
    ['multiple pets', 4, '4 pets'],
  ])('generates appropriate label for a %s', (label, count, result) => {
    const pets = times(count, createPet);
    expect(petListLabel(pets)).toBe(result);
  });
});
