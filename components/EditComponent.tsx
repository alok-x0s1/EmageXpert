import { Button } from "./ui/button";
import {
	FlipHorizontal,
	FlipVertical,
	RotateCcw,
	RotateCw,
} from "lucide-react";

interface EditControlsProps {
	isFlippedHorizontally: boolean;
	isFlippedVertically: boolean;
	toggleFlipHorizontal: () => void;
	toggleFlipVertical: () => void;
	handleRotate: (angle: number) => void;
}

const EditComponent: React.FC<EditControlsProps> = ({
	isFlippedHorizontally,
	isFlippedVertically,
	toggleFlipHorizontal,
	toggleFlipVertical,
	handleRotate,
}) => {
	return (
		<div className="flex gap-2 flex-col">
			<Button
				variant={isFlippedHorizontally ? "default" : "outline"}
				onClick={toggleFlipHorizontal}
				className="w-fit"
			>
				<FlipHorizontal className="w-4 h-4 mr-2" /> Flip Horizontally
			</Button>
			<Button
				variant={isFlippedVertically ? "default" : "outline"}
				onClick={toggleFlipVertical}
				className="w-fit"
			>
				<FlipVertical className="w-4 h-4 mr-2" /> Flip Vertically
			</Button>
			<Button
				variant="outline"
				onClick={() => handleRotate(-90)}
				className="w-fit"
			>
				<RotateCcw className="w-4 h-4 mr-2" /> Rotate Counter-Clockwise
			</Button>
			<Button
				variant="outline"
				onClick={() => handleRotate(90)}
				className="w-fit"
			>
				<RotateCw className="w-4 h-4 mr-2" /> Rotate Clockwise
			</Button>
		</div>
	);
};

export default EditComponent;
