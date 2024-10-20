"use client";

import { motion } from "framer-motion";
import { Home, RefreshCcw } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delay: 0.3,
				when: "beforeChildren",
				staggerChildren: 0.2,
			},
		},
	};

	const childVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				type: "spring",
				damping: 12,
				stiffness: 100,
			},
		},
	};

	const numberVariants = {
		hidden: { scale: 0.5, opacity: 0 },
		visible: {
			scale: 1,
			opacity: 1,
			transition: {
				type: "spring",
				damping: 10,
				stiffness: 100,
			},
		},
	};

	return (
		<div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
			<motion.div
				className="text-center"
				variants={containerVariants}
				initial="hidden"
				animate="visible"
			>
				<motion.div
					className="text-9xl font-bold mb-8 flex justify-center"
					variants={childVariants}
				>
					<motion.span
						variants={numberVariants}
						className="text-primary"
					>
						4
					</motion.span>
					<motion.div
						animate={{
							rotate: [0, 10, -10, 10, 0],
							transition: {
								repeat: Infinity,
								duration: 2,
								ease: "easeInOut",
							},
						}}
						className="text-primary"
					>
						0
					</motion.div>
					<motion.span
						variants={numberVariants}
						className="text-primary"
					>
						4
					</motion.span>
				</motion.div>
				<motion.h1
					className="text-4xl font-bold mb-4 text-foreground"
					variants={childVariants}
				>
					Oops! Page Not Found
				</motion.h1>
				<motion.p
					className="text-xl mb-8 text-muted-foreground"
					variants={childVariants}
				>
					The page you are looking for might have been removed, had
					its name changed, or is temporarily unavailable.
				</motion.p>
				<motion.div
					className="flex flex-col sm:flex-row justify-center gap-4"
					variants={childVariants}
				>
					<Link href="/">
						<Button size="lg" className="w-full sm:w-auto">
							<Home className="mr-2 h-4 w-4" /> Go Home
						</Button>
					</Link>
					<Button
						variant="outline"
						size="lg"
						className="w-full sm:w-auto"
						onClick={() => window.location.reload()}
					>
						<RefreshCcw className="mr-2 h-4 w-4" /> Reload Page
					</Button>
				</motion.div>
			</motion.div>
		</div>
	);
}
