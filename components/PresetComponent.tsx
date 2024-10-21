import { FilterSettings } from "./ImageEditor";
import { Button } from "./ui/button";
import { Palette } from "lucide-react";

interface FilterPresetsProps {
	presets: Record<string, FilterSettings>;
	selectedPreset: string;
	handlePresetChange: (preset: string) => void;
}

const PresetsComponent: React.FC<FilterPresetsProps> = ({
	presets,
	selectedPreset,
	handlePresetChange,
}) => {
	return (
		<div className="flex flex-wrap gap-3">
			{Object.keys(presets).map((preset) => (
				<Button
					key={preset}
					variant={
						selectedPreset === preset ? "secondary" : "outline"
					}
					className="w-fit py-5 px-10"
					onClick={() => handlePresetChange(preset)}
				>
					<Palette className="w-4 h-4 mr-1" />
					{preset.charAt(0).toUpperCase() + preset.slice(1)}
				</Button>
			))}
		</div>
	);
};

export default PresetsComponent;
