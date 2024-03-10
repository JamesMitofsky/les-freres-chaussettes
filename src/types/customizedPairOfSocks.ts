/** @example
 * const exampleOrder: CustomizedPairOfSocks = {
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
type CustomizedPairOfSocks = {
  quantity: number;
  productId: number;
  baseId: number | undefined;
  customizationFields: { fieldId: number; value: string | undefined }[];
};

export default CustomizedPairOfSocks;
