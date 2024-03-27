import CustomizedPairOfSocks from '@/types/customizedPairOfSocks';
import fieldIds from './fieldIds';
import baseIds from './baseIds';

export const playerObject: CustomizedPairOfSocks = {
  quantity: 1,
  productId: 1,
  // TO CHANGE WHILE USER SELECT SIZE
  base: {
    id: baseIds.S,
    size: "S"
  },
  customizationValues: [
    {
      field: {
        id: fieldIds.number,
      },
      value: undefined
    },
    {
      field: {
        id: fieldIds.name,
      },
      value: undefined
    },
    {
      field: {
        id: fieldIds.color,
      },
      value: "#000000"
    },
    {
      field: {
        id: fieldIds.bandColor,
      },
      value: "#000000"
    },
  ],
};
