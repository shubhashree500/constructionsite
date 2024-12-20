"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <div className="fixed top-0 left-0 w-full z-20 bg-transparent text-white py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
                {/* Logo on the Left */}
                <div className="flex items-center">
                    <Link href="/">
                        <img
                            src="/logo.png"
                            alt="Logo"
                            className="h-16 w-auto object-contain cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                    </Link>
                </div>

                {/* Navigation Links on the Right */}
                <nav className="flex gap-6 items-center">
                    <Link
                        href="/about"

                        className="text-lg font-semibold hover:text-blue-500 transform transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer"
                    >
                        About
                    </Link>
                    <Link
                        href="/chairman-desk"
                        className="text-lg font-semibold hover:text-blue-500 transform transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer"
                    >
                        Chairman&apos;s Desk
                    </Link>
                    <Link
                        href="/projects"
                        className="text-lg font-semibold hover:text-blue-500 transform transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer"
                    >
                        Projects
                    </Link>
                    <Link
                        href="/contact-us"
                        className="text-lg font-semibold hover:text-blue-500 transform transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer"
                    >
                        Contact Us
                    </Link>
                </nav>
            </div>
        </div>
    );
}
