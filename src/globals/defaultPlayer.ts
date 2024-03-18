import CustomizedPairOfSocks from '@/types/customizedPairOfSocks';
import fieldIds from './fieldIds';

export const playerObject: CustomizedPairOfSocks = {
  quantity: 1,
  productId: 1,
  baseId: undefined,
  customizationFields: {
    [fieldIds.number]: '',
    [fieldIds.name]: '',
    [fieldIds.color]: '#9ca3af',
    [fieldIds.bandColor]: '#9ca3af',
    [fieldIds.image]: '/images/example-logo.png',
  },
};
