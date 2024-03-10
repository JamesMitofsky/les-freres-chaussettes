type CustomizedPairOfSocks = {
  quantity: number;
  productId: number;
  baseId: number;
  customizationFields: {
    fieldId: number;
    value: string;
  }[];
};

export default CustomizedPairOfSocks;
