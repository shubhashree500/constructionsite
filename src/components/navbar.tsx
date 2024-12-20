"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="fixed top-0 left-0 w-full z-20 bg-black bg-opacity-70 text-white py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 lg:px-8">
                {/* Logo */}
                <Link href="/">
                    <img
                        src="/logo.png"
                        alt="Logo"
                        className="h-12 w-auto object-contain cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-110"
                    />
                </Link>

                {/* Hamburger Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden focus:outline-none"
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>

                {/* Navigation Links */}
                <nav
                    className={`${isMenuOpen ? "flex" : "hidden"
                        } absolute top-16 left-0 w-full bg-black bg-opacity-90 md:bg-transparent md:static md:flex md:gap-6 md:items-center flex-col md:flex-row text-center`}
                >
                    <Link
                        href="/about"
                        className="block py-2 md:py-0 text-lg font-semibold hover:text-blue-500 transform transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer"
                    >
                        About
                    </Link>
                    <Link
                        href="/chairman-desk"
                        className="block py-2 md:py-0 text-lg font-semibold hover:text-blue-500 transform transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer"
                    >
                        Chairman&apos;s Desk
                    </Link>
                    <Link
                        href="/projects"
                        className="block py-2 md:py-0 text-lg font-semibold hover:text-blue-500 transform transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer"
                    >
                        Projects
                    </Link>
                    <Link
                        href="/contact-us"
                        className="block py-2 md:py-0 text-lg font-semibold hover:text-blue-500 transform transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer"
                    >
                        Contact Us
                    </Link>
                </nav>
            </div>
        </div>
    );
}
