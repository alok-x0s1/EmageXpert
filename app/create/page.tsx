"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDropzone } from "react-dropzone";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ImageEditor from "@/components/ImageEditor";

export default function ImageUpload() {
	const [image, setImage] = useState<File | null>(null);

	const onDrop = useCallback((acceptedFiles: File[]) => {
		setImage(acceptedFiles[0]);
	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: { "image/*": [] },
		multiple: false,
	});

	const handleRemove = () => {
		setImage(null);
	};

	return (
		<div className="min-h-screen bg-background flex items-center flex-col gap-12 justify-center px-4 py-32">
			{!image && (
				<Card className="w-full max-w-md bg-card">
					<CardContent className="p-6">
						<motion.h1
							className="text-3xl font-bold text-primary mb-6 text-center"
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
						>
							Upload Your Image
						</motion.h1>
						<AnimatePresence mode="wait">
							<motion.div
								key="dropzone"
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.9 }}
								transition={{ duration: 0.3 }}
							>
								<div
									{...getRootProps()}
									className={`border-2 border-dashed p-8 text-center cursor-pointer transition-colors ${
										isDragActive
											? "border-primary"
											: "border-muted"
									}`}
								>
									<input {...getInputProps()} />
									<Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
									<p className="text-muted-foreground mb-2">
										Drag & drop an image here, or click to
										select
									</p>
									<Button variant="secondary" size="sm">
										Select Image
									</Button>
								</div>
							</motion.div>
						</AnimatePresence>
					</CardContent>
				</Card>
			)}

			{image && <ImageEditor image={image} />}
		</div>
	);
}
