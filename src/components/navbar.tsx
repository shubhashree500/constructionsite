"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollingUp, setScrollingUp] = useState(true); // Track scroll direction

    useEffect(() => {
        let lastScrollY = window.scrollY; // Store the last scroll position
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setScrollingUp(false); // Scrolling down
            } else {
                setScrollingUp(true); // Scrolling up
            }
            lastScrollY = window.scrollY;
        };

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);
        return () => {
            // Clean up the event listener on component unmount
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`fixed top-0 left-0 w-full z-50 bg-transparent text-white py-4 font-poppins transition-all duration-300 ${scrollingUp ? "translate-y-0" : "-translate-y-full"
                } sm:hidden md:block lg:block`} // Show navbar only on md and larger screens
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 lg:px-8">
                {/* Logo on the Left */}
                <div className="flex items-center">
                    <Link href="/">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={94} // Increased size
                            height={94}
                            className="h-16 w-auto object-contain cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                    </Link>
                </div>

                {/* Hamburger Menu Icon (Visible on Small Screens) */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="block md:hidden text-white focus:outline-none z-50"
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
                        } absolute top-16 right-0 w-full z-50 md:static md:flex md:gap-6 md:items-center bg-transparent md:bg-transparent flex-col md:flex-row text-right`}
                >
                    <Link href="/about">
                        <span className="block py-2 md:py-0 text-lg font-semibold hover:text-blue-400 transition-all duration-300">
                            About
                        </span>
                    </Link>
                    <Link href="/chairman-desk">
                        <span className="block py-2 md:py-0 text-lg font-semibold hover:text-blue-400 transition-all duration-300">
                            Chairman&apos;s Desk
                        </span>
                    </Link>
                    <Link href="/projects">
                        <span className="block py-2 md:py-0 text-lg font-semibold hover:text-blue-400 transition-all duration-300">
                            Projects
                        </span>
                    </Link>
                    <Link href="/contact-us">
                        <span className="block py-2 md:py-0 text-lg font-semibold hover:text-blue-400 transition-all duration-300">
                            Contact Us
                        </span>
                    </Link>
                </nav>
            </div>
        </div>
    );
}
