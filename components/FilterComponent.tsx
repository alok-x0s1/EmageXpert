import { FilterSettings } from "./ImageEditor";
import { Slider } from "./ui/slider";
import { SunMedium, Contrast, Palette } from "lucide-react";

interface FilterAdjustmentsProps {
	filters: FilterSettings;
	handleFilterChange: (type: keyof FilterSettings, value: number[]) => void;
}

const FilterComponent: React.FC<FilterAdjustmentsProps> = ({
	filters,
	handleFilterChange,
}) => {
	return (
		<div className="flex flex-col gap-8">
			<div className="space-y-2">
				<div className="flex items-center justify-between">
					<label className="text-sm font-medium flex items-center gap-2">
						<SunMedium className="w-4 h-4" /> Brightness
					</label>
					<span className="text-sm text-muted-foreground">
						{filters.brightness}%
					</span>
				</div>
				<Slider
					value={[filters.brightness]}
					min={0}
					max={200}
					step={1}
					onValueChange={(value) =>
						handleFilterChange("brightness", value)
					}
				/>
			</div>

			<div className="space-y-2">
				<div className="flex items-center justify-between">
					<label className="text-sm font-medium flex items-center gap-2">
						<Contrast className="w-4 h-4" /> Contrast
					</label>
					<span className="text-sm text-muted-foreground">
						{filters.contrast}%
					</span>
				</div>
				<Slider
					value={[filters.contrast]}
					min={0}
					max={200}
					step={1}
					onValueChange={(value) =>
						handleFilterChange("contrast", value)
					}
				/>
			</div>

			<div className="space-y-2">
				<div className="flex items-center justify-between">
					<label className="text-sm font-medium flex items-center gap-2">
						<Palette className="w-4 h-4" /> Saturation
					</label>
					<span className="text-sm text-muted-foreground">
						{filters.saturation}%
					</span>
				</div>
				<Slider
					value={[filters.saturation]}
					min={0}
					max={200}
					step={1}
					onValueChange={(value) =>
						handleFilterChange("saturation", value)
					}
				/>
			</div>
			<div className="space-y-2">
				<div className="flex items-center justify-between">
					<label className="text-sm font-medium flex items-center gap-2">
						<Palette className="w-4 h-4" /> Blur
					</label>
					<span className="text-sm text-muted-foreground">
						{filters.blur}%
					</span>
				</div>
				<Slider
					value={[filters.blur]}
					min={0}
					max={100}
					step={1}
					onValueChange={(value) => handleFilterChange("blur", value)}
				/>
			</div>
			<div className="space-y-2">
				<div className="flex items-center justify-between">
					<label className="text-sm font-medium flex items-center gap-2">
						<Palette className="w-4 h-4" /> Hue
					</label>
					<span className="text-sm text-muted-foreground">
						{filters.hue}%
					</span>
				</div>
				<Slider
					value={[filters.hue]}
					min={0}
					max={100}
					step={1}
					onValueChange={(value) => handleFilterChange("hue", value)}
				/>
			</div>
			<div className="space-y-2">
				<div className="flex items-center justify-between">
					<label className="text-sm font-medium flex items-center gap-2">
						<Palette className="w-4 h-4" /> GrayScale
					</label>
					<span className="text-sm text-muted-foreground">
						{filters.grayscale}%
					</span>
				</div>
				<Slider
					value={[filters.grayscale]}
					min={0}
					max={100}
					step={1}
					onValueChange={(value) =>
						handleFilterChange("grayscale", value)
					}
				/>
			</div>
			<div className="space-y-2">
				<div className="flex items-center justify-between">
					<label className="text-sm font-medium flex items-center gap-2">
						<Palette className="w-4 h-4" /> Opacity
					</label>
					<span className="text-sm text-muted-foreground">
						{filters.opacity}%
					</span>
				</div>
				<Slider
					value={[filters.opacity]}
					min={0}
					max={200}
					step={1}
					onValueChange={(value) =>
						handleFilterChange("opacity", value)
					}
				/>
			</div>
		</div>
	);
};

export default FilterComponent;
