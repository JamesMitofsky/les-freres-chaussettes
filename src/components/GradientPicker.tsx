import { useCallback } from 'react';
import { CirclePicker, ColorResult } from 'react-color';

const possibleColors = [
  "#FF5733", // Vivid Orange
  "#FFD700", // Gold
  "#00FFFF", // Cyan
  "#FF69B4", // Hot Pink
  "#00FF00", // Lime Green
  "#8A2BE2", // Blue Violet
  "#FF4500", // Orange Red
  "#40E0D0", // Turquoise
  "#FFD700", // Goldenrod
  "#8B008B", // Dark Magenta
  "#FF8C00", // Dark Orange
  "#008080", // Teal
  "#FF1493", // Deep Pink
  "#808000", // Olive
  "#9400D3"  // Dark Violet
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
    <div className="align-center flex flex-col justify-center items-center">
      <CirclePicker
        colors={[...possibleColors]}
        width="100%"
        circleSpacing={40}
        circleSize={30}
        className="max-w-md justify-center"
        onChangeComplete={handleColorChange}
      />
    </div>
  );
}
