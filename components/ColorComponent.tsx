import { HexColorPicker } from "react-colorful";

interface ColorPickerProps {
	selectedColor: string;
	setSelectedColor: (color: string) => void;
}

const ColorComponent: React.FC<ColorPickerProps> = ({
	selectedColor,
	setSelectedColor,
}) => {
	const handleColorChange = (color: any) => {
		setSelectedColor(color.hex);
	};

	return (
		<div className="space-y-4">
			<div>
				<label className="text-md font-medium">Select Color</label>
				<HexColorPicker
					color={selectedColor}
					onChange={handleColorChange}
					className="mt-2"
				/>
			</div>
		</div>
	);
};

export default ColorComponent;
