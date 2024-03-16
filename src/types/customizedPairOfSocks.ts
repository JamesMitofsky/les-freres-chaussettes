/* eslint-disable @typescript-eslint/no-unused-vars */

/** @example
 * const exampleOrder: ServerCustomizedPairOfSocks = {
    quantity: 1,
    productId: 1,
    baseId: sockSizeIds.small,
    customizationFields: [
      { fieldId: fieldIds.number, value: '10' },
      { fieldId: fieldIds.name, value: 'Loan' },
      { fieldId: fieldIds.color, value: '#00000' },
      { fieldId: fieldIds.bandColor, value: '#fffff' },
      { fieldId: fieldIds.image, value: 'https://customURL' },
    ],
};
 */
type ServerCustomizedPairOfSocks = {
  quantity: number;
  productId: number;
  baseId: number | undefined;
  customizationFields: { fieldId: number; value: string | undefined }[];
};

/** @example
 * const objectExample: CustomizedPairOfSocks = {
      quantity: 1,
      productId: 1,
      baseId: sockSizeIds.small,
      customizationFields: {
        [fieldIds.number]: '10',
        [fieldIds.name]: 'Loan',
        [fieldIds.color]: '#00000',
        [fieldIds.bandColor]: '#fffff',
        [fieldIds.image]: 'https://customURL',
      },
  };
 */
type CustomizedPairOfSocks = {
  quantity: number;
  productId: number;
  baseId: number | undefined;
  customizationFields: Record<number, string | undefined>;
};

export default CustomizedPairOfSocks;
