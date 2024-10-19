"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight, Image as ImageIcon, Layers, Wand2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
	const features = [
		{
			icon: ImageIcon,
			title: "Advanced Filters",
			description: "Apply stunning filters with a single click",
		},
		{
			icon: Layers,
			title: "Layer Management",
			description: "Easily manage and edit multiple layers",
		},
		{
			icon: Wand2,
			title: "AI-Powered Editing",
			description: "Leverage AI for intelligent image enhancements",
		},
	];

	const fadeIn = {
		initial: { opacity: 0, y: 20 },
		animate: { opacity: 1, y: 0 },
		transition: { duration: 0.6 },
	};

	return (
		<main className="px-6 py-12 min-h-screen mt-24 container mx-auto">
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
				className="grid md:grid-cols-3 gap-8 mb-20"
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
		</main>
	);
}
