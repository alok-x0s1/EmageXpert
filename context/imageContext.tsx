"use client";

import { createContext, useContext, useState, ReactNode } from "react";

const initialState = {
	edit: true,
	layers: false,
	color: false,
	filters: false,
	shape: false,
	presets: false,
};

interface ImageContextType {
	edit: boolean;
	layers: boolean;
	color: boolean;
	filters: boolean;
	shape: boolean;
	presets: boolean;
}

interface ImageContextProviderType {
	state: ImageContextType;
	updateState: (key: keyof ImageContextType) => void;
}

const ImageContext = createContext<ImageContextProviderType | undefined>(
	undefined
);

export const ImageContextProvider = ({ children }: { children: ReactNode }) => {
	const [state, setState] = useState<ImageContextType>(initialState);

	const updateState = (key: keyof ImageContextType) => {
		setState((prevState) => ({
			edit: false,
			layers: false,
			color: false,
			filters: false,
			shape: false,
			presets: false,
			[key]: true,
		}));
	};

	return (
		<ImageContext.Provider value={{ state, updateState }}>
			{children}
		</ImageContext.Provider>
	);
};

export const useImageContext = () => {
	const context = useContext(ImageContext);
	if (!context) {
		throw new Error(
			"useImageContext must be used within an ImageContextProvider"
		);
	}
	return context;
};
