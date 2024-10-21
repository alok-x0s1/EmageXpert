import React, { useState } from "react";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export interface ShapeData {
	shape: "rectangle" | "circle" | "triangle" | "line" | "ellipse";
	size: number;
	color: string;
}

interface ShapeSelectorProps {
	onApplyShape: (shapeData: ShapeData) => void;
}

const ShapeComponent: React.FC<ShapeSelectorProps> = ({ onApplyShape }) => {
	const [shape, setShape] = useState<
		"rectangle" | "circle" | "triangle" | "line" | "ellipse"
	>("rectangle");
	const [size, setSize] = useState(100);
	const [color, setColor] = useState("blue");

	const handleApplyShape = () => {
		onApplyShape({ shape, size, color });
	};

	return (
		<div className="flex flex-col gap-5">
			<div className="flex gap-2 items-center">
				<label className="text-md font-medium">Shape</label>
				<Select
					value={shape}
					onValueChange={(value) =>
						setShape(
							value as
								| "rectangle"
								| "circle"
								| "triangle"
								| "line"
								| "ellipse"
						)
					}
					defaultValue="rectangle"
				>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Select a shape" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>Shapes</SelectLabel>
							<SelectItem value="rectangle">Rectangle</SelectItem>
							<SelectItem value="circle">Circle</SelectItem>
							<SelectItem value="triangle">Triangle</SelectItem>
							<SelectItem value="line">Line</SelectItem>
							<SelectItem value="ellipse">Ellipse</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>

			<div className="flex gap-2 items-center">
				<label className="text-md font-medium">Size</label>
				<Input
					type="number"
					value={size}
					onChange={(e) => setSize(parseInt(e.target.value))}
					placeholder="Enter size"
					className="w-[100px]"
				/>
			</div>

			<div className="flex gap-2 items-center">
				<label className="text-md font-medium">Color</label>
				<Input
					type="color"
					value={color}
					onChange={(e) => setColor(e.target.value)}
					placeholder="Enter color"
					className="w-[60px]"
				/>
			</div>

			<Button
				onClick={handleApplyShape}
				className="w-fit"
				variant="secondary"
			>
				Apply Shape
			</Button>
		</div>
	);
};

export default ShapeComponent;
