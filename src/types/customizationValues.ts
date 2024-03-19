import CustomizationField from "./customizationField";

type CustomizationValue = {
    id: number
    field: CustomizationField; //The field linked to this value 
    value: string;
}

export default CustomizationValue