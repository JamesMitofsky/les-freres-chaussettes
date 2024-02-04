type CustomizationValue =
  | { fieldId: 'custom_txt_color'; value: string }
  | { fieldId: 'custom_player_number'; value: number }
  | { fieldId: 'custom_player_name'; value: string };

type Base = 'small' | 'medium' | 'large';

type CartProduct = {
  quantity: number;
  productId: number;
  base: Base;
  customizationValues: CustomizationValue[];
};

export default CartProduct;
