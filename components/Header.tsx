"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";

const Header = () => {
	return (
		<header className="p-6 flex justify-between items-center fixed top-0 w-full z-50 h-fit border-b bg-background">
			<motion.div
				initial={{ opacity: 0, x: -20 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.5 }}
				className="text-2xl font-bold"
			>
				<Link href="/">EmageXpert</Link>
			</motion.div>
			<motion.nav
				initial={{ opacity: 0, x: 20 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.5 }}
				className="flex items-center gap-4"
			>
				<Button variant="secondary">Login</Button>
				<ModeToggle />
			</motion.nav>
		</header>
	);
};

export default Header;
