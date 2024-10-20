"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
	Brush,
	ChevronRight,
	Image as ImageIcon,
	Save,
	Upload,
	Wand2,
	Eye,
	Palette,
	RotateCcw,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
	const features = [
		{
			icon: ImageIcon,
			title: "Advanced Filters",
			description: "Apply stunning filters with a single click",
		},
		{
			icon: Wand2,
			title: "AI-Powered Editing",
			description: "Leverage AI for intelligent image enhancements",
		},
		{
			icon: Upload,
			title: "Easy Uploads",
			description:
				"Upload images from your device or cloud storage seamlessly",
		},
		{
			icon: Save,
			title: "Save & Share",
			description:
				"Save your edited images and share them directly on social media",
		},
		{
			icon: Eye,
			title: "Image Preview",
			description: "Preview your edits in real-time before saving",
		},
		{
			icon: Palette,
			title: "Color Adjustment",
			description: "Fine-tune colors with a variety of tools and sliders",
		},
		{
			icon: RotateCcw,
			title: "Rotate & Flip",
			description: "Rotate or flip images to get the perfect angle",
		},
		{
			icon: Brush,
			title: "Freehand Drawing",
			description: "Draw freely on your images with a variety of brushes",
		},
	];

	const howItWorks = [
		{
			title: "Upload Your Image",
			description: "Choose an image from your device or cloud.",
		},
		{
			title: "Edit & Enhance",
			description:
				"Use our powerful editing tools to enhance your image.",
		},
		{
			title: "Save & Share",
			description: "Save your edits and share your masterpiece.",
		},
	];

	const faqs = [
		{
			question: "Is it free to use?",
			answer: "Yes, we offer a free trial with access to all features.",
		},
		{
			question: "Can I export my images in different formats?",
			answer: "Absolutely! You can export in JPEG, PNG, GIF, and more.",
		},
		{
			question: "What types of images can I upload?",
			answer: "You can upload any standard image format, including JPG, PNG, and GIF.",
		},
	];

	const fadeIn = {
		initial: { opacity: 0, y: 20 },
		animate: { opacity: 1, y: 0 },
		transition: { duration: 0.6 },
	};

	const slideIn = {
		initial: { opacity: 0, x: -100 },
		animate: { opacity: 1, x: 0 },
		transition: { duration: 0.6 },
	};

	const bounceIn = {
		initial: { scale: 0.5 },
		animate: { scale: 1 },
		transition: { duration: 0.6 },
	};

	return (
		<main className="px-6 pt-12 min-h-screen mt-24 container mx-auto">
			<motion.section className="text-center mb-20" {...fadeIn}>
				<motion.h1
					className="text-5xl font-bold mb-6"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					Transform Your Images with AI-Powered Editing
				</motion.h1>
				<motion.p
					className="text-xl mb-8 text-muted-foreground"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
				>
					Unleash your creativity with our cutting-edge image editing
					tools
				</motion.p>
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, delay: 0.6 }}
				>
					<Link href="/create">
						<Button size="lg">
							Get Started <ChevronRight className="ml-2" />
						</Button>
					</Link>
				</motion.div>
			</motion.section>

			<motion.section
				className="grid md:grid-cols-3 gap-6 mb-20"
				{...fadeIn}
			>
				{features.map((feature, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: index * 0.2 }}
					>
						<Card className="border hover:shadow-lg duration-300 dark:shadow-md dark:hover:shadow-slate-700 hover:-translate-y-1">
							<CardContent className="p-6">
								<feature.icon className="w-12 h-12 mb-4 text-chart-1" />
								<h3 className="text-xl font-semibold mb-2">
									{feature.title}
								</h3>
								<p className="text-gray-400">
									{feature.description}
								</p>
							</CardContent>
						</Card>
					</motion.div>
				))}
			</motion.section>

			<motion.section className="mb-20" {...slideIn}>
				<h2 className="text-3xl font-bold mb-6">How It Works</h2>
				<p className="text-xl mb-8 text-gray-400">
					Follow these simple steps to transform your images.
				</p>
				<motion.div className="grid md:grid-cols-3 gap-6">
					{howItWorks.map((step, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.2 }}
						>
							<Card className="border hover:shadow-lg duration-300 hover:-translate-y-1">
								<CardContent className="p-6">
									<h3 className="text-xl font-semibold mb-2">
										<span className="text-chart-1">
											{index + 1}.{" "}
										</span>
										{step.title}
									</h3>
									<p className="text-gray-400">
										{step.description}
									</p>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</motion.div>
			</motion.section>

			<motion.section className="mb-20" {...fadeIn}>
				<h2 className="text-3xl font-bold mb-6">What Our Users Say</h2>
				<div className="flex flex-wrap justify-start gap-6">
					{[
						{
							quote: "EmageXpert transformed my images effortlessly!",
							name: "Sarah J.",
						},
						{
							quote: "The AI-powered features are incredible!",
							name: "John D.",
						},
						{
							quote: "Easiest editing experience I've ever had!",
							name: "Emma R.",
						},
					].map((testimonial, index) => (
						<motion.div
							key={index}
							className="max-w-xs w-full"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.2 }}
						>
							<Card className="border hover:shadow-lg duration-300 hover:-translate-y-1">
								<CardContent className="p-6 text-left">
									<p className="text-xl italic mb-4">
										"{testimonial.quote}"
									</p>
									<p className="text-chart-2">
										- {testimonial.name}
									</p>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</motion.section>

			<motion.section className="mb-20" {...bounceIn}>
				<h2 className="text-3xl font-bold mb-6">
					Frequently Asked Questions
				</h2>
				<motion.div className="grid md:grid-cols-3 gap-6">
					{faqs.map((faq, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.2 }}
						>
							<Card className="border hover:shadow-lg duration-300 hover:-translate-y-1">
								<CardContent className="p-6">
									<h3 className="text-xl font-semibold mb-2">
										<span className="text-chart-1">
											{index + 1}.{" "}
										</span>
										{faq.question}
									</h3>
									<p className="text-muted-foreground">
										{faq.answer}
									</p>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</motion.div>
			</motion.section>

			<motion.section className="text-center" {...fadeIn}>
				<h2 className="text-3xl font-bold mb-6">
					Ready to Elevate Your Images?
				</h2>
				<p className="text-xl mb-8 text-gray-400">
					Join thousands of creators and start editing like a pro
					today.
				</p>
				<Link href="/signup">
					<Button size="lg" variant="secondary" className="border">
						Start Free Trial
					</Button>
				</Link>
			</motion.section>

			<motion.footer
				className="text-center py-6 text-gray-500 border-t mt-6"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.8, delay: 1 }}
			>
				© 2024 EmageXpert &nbsp; ❤️
				<a
					className="hover:underline"
					href="https://github.com/alok-x0s1"
				>
					Alok Yadav
				</a>
			</motion.footer>
		</main>
	);
}
