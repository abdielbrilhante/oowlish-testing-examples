import { Pet } from '../types';

export function petListLabel(pets: Pet[]) {
  if (!pets.length) {
    return 'No pets';
  }

  if (pets.length === 1) {
    return '1 pet';
  }

  return `${pets.length} pets`;
}
