import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Video Conferencing App",
	description:
		"A video conferencing app built with Next.js, Tailwind CSS & Stream API.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-dark-2`}>{children}</body>
		</html>
	);
}
