import { useCallback } from 'react';
import { CirclePicker, ColorResult } from 'react-color';

const possibleColors = [
  '#E2E2E2',
  '#ff75c3',
  '#ffa647',
  '#ffe83f',
  '#9fff5b',
  '#70e2ff',
  '#cd93ff',
  '#09203f',
] as const;

export type AllowedColors = (typeof possibleColors)[number];

type GradiantPickerProps = {
  setHexColor: (color: any) => void;
};


export function GradientPicker({ setHexColor }: GradiantPickerProps) {
  const handleColorChange = useCallback((color: ColorResult) => {
    console.log(color.hex);
    setHexColor(color.hex);
  }, [setHexColor]);
  
  return (
    <div className="align-center flex flex-col justify-center">
      <CirclePicker
        width="100%"
        circleSpacing={30}
        circleSize={30}
        className="m-auto"
        onChangeComplete={handleColorChange}
      />
    </div>
  );
}
