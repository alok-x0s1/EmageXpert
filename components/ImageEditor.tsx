"use client";

import { Download, RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import ImageEditorBar from "./ImageEditorBar";
import { useImageContext } from "@/context/imageContext";
import EditComponent from "./EditComponent";
import FilterComponent from "./FilterComponent";
import PresetsComponent from "./PresetComponent";
import ColorComponent from "./ColorComponent";
import ShapeComponent, { ShapeData } from "./ShapeComponent";

interface ImageEditorProps {
	image: File | null;
}

export interface FilterSettings {
	brightness: number;
	contrast: number;
	saturation: number;
	hue: number;
	blur: number;
	grayscale: number;
	opacity: number;
}

const initialFilters: FilterSettings = {
	brightness: 100,
	contrast: 100,
	saturation: 100,
	hue: 0,
	blur: 0,
	grayscale: 0,
	opacity: 100,
};

const ImageEditor: React.FC<ImageEditorProps> = ({ image }) => {
	const [editedImage, setEditedImage] = useState<string | null>(null);
	const [filters, setFilters] = useState({
		brightness: 100,
		contrast: 100,
		saturation: 100,
		hue: 0,
		blur: 0,
		grayscale: 0,
		opacity: 100,
	});
	const [selectedPreset, setSelectedPreset] = useState<string>("none");
	const [isFlippedHorizontally, setIsFlippedHorizontally] = useState(false);
	const [isFlippedVertically, setIsFlippedVertically] = useState(false);
	const [rotation, setRotation] = useState(0);
	const [selectedColor, setSelectedColor] = useState<string>("");
	const { state } = useImageContext();
	const [shapeData, setShapeData] = useState<ShapeData | null>(null);

	const presets: Record<string, FilterSettings> = {
		none: initialFilters,
		vintage: {
			brightness: 110,
			contrast: 85,
			saturation: 80,
			hue: 0,
			blur: 0,
			grayscale: 10,
			opacity: 100,
		},
		noir: {
			brightness: 90,
			contrast: 120,
			saturation: 40,
			hue: 0,
			blur: 0,
			grayscale: 100,
			opacity: 100,
		},
		vivid: {
			brightness: 105,
			contrast: 110,
			saturation: 130,
			hue: 0,
			blur: 0,
			grayscale: 0,
			opacity: 100,
		},
		sepia: {
			brightness: 100,
			contrast: 95,
			saturation: 60,
			hue: 20,
			blur: 0,
			grayscale: 30,
			opacity: 100,
		},
		bright: {
			brightness: 120,
			contrast: 100,
			saturation: 100,
			hue: 0,
			blur: 0,
			grayscale: 0,
			opacity: 100,
		},
		dark: {
			brightness: 80,
			contrast: 115,
			saturation: 90,
			hue: 0,
			blur: 0,
			grayscale: 0,
			opacity: 100,
		},
		pastel: {
			brightness: 110,
			contrast: 90,
			saturation: 70,
			hue: 0,
			blur: 0,
			grayscale: 20,
			opacity: 100,
		},
		frosted: {
			brightness: 100,
			contrast: 95,
			saturation: 80,
			hue: 0,
			blur: 5,
			grayscale: 0,
			opacity: 90,
		},
		soft: {
			brightness: 110,
			contrast: 90,
			saturation: 90,
			hue: 0,
			blur: 2,
			grayscale: 5,
			opacity: 100,
		},
		warm: {
			brightness: 105,
			contrast: 100,
			saturation: 120,
			hue: 15,
			blur: 0,
			grayscale: 0,
			opacity: 100,
		},
		cool: {
			brightness: 95,
			contrast: 100,
			saturation: 110,
			hue: -15,
			blur: 0,
			grayscale: 0,
			opacity: 100,
		},
		dramatic: {
			brightness: 85,
			contrast: 140,
			saturation: 80,
			hue: 0,
			blur: 0,
			grayscale: 0,
			opacity: 100,
		},
		monochrome: {
			brightness: 90,
			contrast: 100,
			saturation: 0,
			hue: 0,
			blur: 0,
			grayscale: 100,
			opacity: 100,
		},
		dreamy: {
			brightness: 120,
			contrast: 85,
			saturation: 100,
			hue: 5,
			blur: 10,
			grayscale: 0,
			opacity: 95,
		},
	};

	useEffect(() => {
		if (image) {
			applyFilters();
		}
	}, [
		filters,
		image,
		isFlippedHorizontally,
		isFlippedVertically,
		rotation,
		selectedColor,
		shapeData,
	]);

	const applyFilters = () => {
		const canvas = document.createElement("canvas");
		const ctx = canvas.getContext("2d");
		const img = new Image();

		img.onload = () => {
			if (ctx) {
				canvas.width = img.width;
				canvas.height = img.height;

				ctx.save();
				if (isFlippedHorizontally) {
					ctx.scale(-1, 1);
					ctx.translate(-canvas.width, 0);
				}
				if (isFlippedVertically) {
					ctx.scale(1, -1);
					ctx.translate(0, -canvas.height);
				}

				if (rotation !== 0) {
					ctx.translate(canvas.width / 2, canvas.height / 2);
					ctx.rotate((rotation * Math.PI) / 180);
					ctx.translate(-canvas.height / 2, -canvas.width / 2);
				}

				ctx.filter = `
					brightness(${filters.brightness}%) 
					contrast(${filters.contrast}%) 
					saturate(${filters.saturation}%)
					hue-rotate(${filters.hue}deg)
					blur(${filters.blur}px)
					grayscale(${filters.grayscale}%)
					opacity(${filters.opacity})
					`;

				ctx.drawImage(img, 0, 0, img.width, img.height);
				ctx.restore();
				if (shapeData) {
					ctx.fillStyle = shapeData.color;
					ctx.strokeStyle = shapeData.color;
					const size = shapeData.size;
					const canvasHeight = canvas.height;
					const canvasWidth = canvas.width;

					const bottomY = canvasHeight - 50;
					const shapeX = (canvasWidth - size) / 2;

					switch (shapeData.shape) {
						case "rectangle":
							ctx.fillRect(
								shapeX,
								bottomY - size / 2,
								size,
								size / 2
							);
							break;
						case "circle":
							ctx.beginPath();
							ctx.arc(
								canvasWidth / 2,
								bottomY - size / 2,
								size / 2,
								0,
								2 * Math.PI
							); 
							ctx.fill();
							break;
						case "triangle":
							ctx.beginPath();
							ctx.moveTo(shapeX, bottomY);
							ctx.lineTo(shapeX + size, bottomY);
							ctx.lineTo(shapeX + size / 2, bottomY - size);
							ctx.closePath();
							ctx.fill();
							break;
						case "line":
							ctx.beginPath();
							ctx.moveTo(shapeX, bottomY);
							ctx.lineTo(shapeX + size, bottomY);
							ctx.stroke();
							break;
						case "ellipse":
							ctx.beginPath();
							ctx.ellipse(
								canvasWidth / 2,
								bottomY - size / 4,
								size,
								size / 2,
								0,
								0,
								2 * Math.PI
							);
							ctx.fill();
							break;
						default:
							break;
					}
				}

				setEditedImage(canvas.toDataURL());
			}
		};

		if (image) {
			img.src = URL.createObjectURL(image);
		}
	};

	const handleFilterChange = (
		type: keyof typeof filters,
		value: number[]
	) => {
		setFilters((prev) => ({
			...prev,
			[type]: value[0],
		}));
		setSelectedPreset("none");
	};

	const handlePresetChange = (preset: keyof typeof presets) => {
		setSelectedPreset(preset);
		setFilters(presets[preset] || presets.none);
	};

	const handleDownload = () => {
		if (editedImage) {
			const link = document.createElement("a");
			link.download = "emagexpert-edited.jpg";
			link.href = editedImage;
			link.click();
		}
	};

	const handleReset = () => {
		setFilters(initialFilters);
		setSelectedPreset("none");
		setIsFlippedHorizontally(false);
		setIsFlippedVertically(false);
		setRotation(0);
		setShapeData(null);
	};

	const toggleFlipHorizontal = () => {
		setIsFlippedHorizontally((prev) => !prev);
	};

	const toggleFlipVertical = () => {
		setIsFlippedVertically((prev) => !prev);
	};

	const handleRotate = (angle: number) => {
		setRotation((prevRotation) => prevRotation + angle);
	};

	return (
		<>
			<div className="w-full max-w-5xl bg-card border">
				<ImageEditorBar />
				<div className="p-6">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="flex flex-col gap-4">
							<div className="relative overflow-hidden bg-black/10 aspect-square">
								<img
									src={
										editedImage ||
										URL.createObjectURL(image!)
									}
									alt="Preview"
									className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
								/>
							</div>

							<div className="flex gap-4">
								<Button variant="outline" onClick={handleReset}>
									<RotateCcw className="w-4 h-4 mr-2" /> Reset
								</Button>
								<Button onClick={handleDownload}>
									<Download className="w-4 h-4 mr-2" /> Save
								</Button>
							</div>
						</div>

						<div className="space-y-6 relative">
							{state.edit && (
								<EditComponent
									isFlippedHorizontally={
										isFlippedHorizontally
									}
									isFlippedVertically={isFlippedVertically}
									toggleFlipHorizontal={toggleFlipHorizontal}
									toggleFlipVertical={toggleFlipVertical}
									handleRotate={handleRotate}
								/>
							)}

							{state.filters && (
								<FilterComponent
									filters={filters}
									handleFilterChange={handleFilterChange}
								/>
							)}

							{state.presets && (
								<PresetsComponent
									presets={presets}
									selectedPreset={selectedPreset}
									handlePresetChange={handlePresetChange}
								/>
							)}

							{state.color && (
								<ColorComponent
									selectedColor={selectedColor}
									setSelectedColor={setSelectedColor}
								/>
							)}

							{state.shape && (
								<ShapeComponent onApplyShape={setShapeData} />
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ImageEditor;
