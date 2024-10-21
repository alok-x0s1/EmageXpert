import { useImageContext } from "@/context/imageContext";
import { Button } from "./ui/button";

const ImageEditorBar = () => {
	const { state, updateState } = useImageContext();
	return (
		<div className="w-full flex justify-start items-center border-b">
			<div className="flex flex-wrap">
				<Button
					variant={state.edit ? "default" : "outline"}
					onClick={() => updateState("edit")}
					className="py-5 px-8 text-base"
				>
					Edit
				</Button>
				<Button
					variant={state.filters ? "default" : "outline"}
					onClick={() => updateState("filters")}
					className="py-5 px-8 text-base"
				>
					Filters
				</Button>
				<Button
					variant={state.presets ? "default" : "outline"}
					onClick={() => updateState("presets")}
					className="py-5 px-8 text-base"
				>
					Presets
				</Button>
				<Button
					variant={state.color ? "default" : "outline"}
					onClick={() => updateState("color")}
					className="py-5 px-8 text-base"
				>
					Color
				</Button>
				<Button
					variant={state.layers ? "default" : "outline"}
					onClick={() => updateState("layers")}
					className="py-5 px-8 text-base"
				>
					Layers
				</Button>
				<Button
					variant={state.shape ? "default" : "outline"}
					onClick={() => updateState("shape")}
					className="py-5 px-8 text-base"
				>
					Shape
				</Button>
			</div>
		</div>
	);
};

export default ImageEditorBar;
