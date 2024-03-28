import CustomizationField from './customizationField';

type CustomizationValue = {
  id?: number;
  field: CustomizationField;
  value?: string;
};

export default CustomizationValue;
