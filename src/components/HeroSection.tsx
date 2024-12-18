"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Slider Image and Text Content Arrays
const sliderImages = [
    "/slider2.jpg",
    "/slider3.jpg",
    "/slider4.png",
];

const sliderTexts = [
    {
        heading: "Building the Future",
        description: "We create structures that stand the test of time.",
        subText: "Unlock Your Future - We help you find your dream home.",
    },
    {
        heading: "Unlock Your Door to Your Perfect Home",
        description: "Crafting exceptional spaces tailored to your needs.",
        subText: "Turning your vision into a lasting reality.",
    },
    {
        heading: "Quality That Lasts",
        description: "We ensure quality in every brick and corner.",
        subText: "We build dreams with quality and trust.",
    },
];

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [transitioning, setTransitioning] = useState(false);

    // Automatic Slide Transition Effect
    useEffect(() => {
        const interval = setInterval(() => {
            setTransitioning(true);
            setTimeout(() => {
                setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
                setTransitioning(false);
            }, 500);  // Timing for transition
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-screen overflow-hidden">
            {/* Background Image Slider */}
            <div
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${transitioning ? "opacity-0" : "opacity-100"}`}
                style={{
                    backgroundImage: `url('${sliderImages[currentSlide]}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            ></div>

            {/* Navbar Section */}
            <div className="absolute top-0 left-0 w-full z-20 bg-transparent text-white py-2">
                <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
                    {/* Logo */}
                    <div>
                        <Link href="/" passHref>
                            <span className="text-3xl font-extrabold cursor-pointer">
                                <img
                                    src="/logo.png"
                                    alt="Logo"
                                    className="h-20 w-auto object-contain"
                                />
                            </span>
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex gap-6">
                        <Link href="/about" passHref>
                            <span className="text-lg font-semibold hover:scale-110 transition duration-300 cursor-pointer" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                About
                            </span>
                        </Link>
                        <Link href="/chairman-desk" passHref>
                            <span className="text-lg font-semibold hover:scale-110 transition duration-300 cursor-pointer" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                Chairman&apos;s Desk
                            </span>
                        </Link>
                        <Link href="/projects" passHref>
                            <span className="text-lg font-semibold hover:scale-110 transition duration-300 cursor-pointer" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                Projects
                            </span>
                        </Link>
                        <Link href="/contact-us" passHref>
                            <span className="text-lg font-semibold hover:scale-110 transition duration-300 cursor-pointer" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                Contact Us
                            </span>
                        </Link>
                    </nav>
                </div>
            </div>

            {/* Overlay for Text Content */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
                <div className="text-center text-white px-4">
                    {/* Dynamic Heading */}
                    <h1 className="text-5xl font-bold animate-fadeInUp delay-300">
                        {sliderTexts[currentSlide].heading}
                    </h1>

                    {/* Dynamic Description */}
                    <p className="text-xl mt-4 animate-fadeInUp delay-500">
                        {sliderTexts[currentSlide].description}
                    </p>

                    {/* Dynamic SubText */}
                    <p className="text-2xl mt-6 animate-fadeInUp delay-700">
                        {sliderTexts[currentSlide].subText}
                    </p>
                </div>
            </div>
        </section>
    );
}
