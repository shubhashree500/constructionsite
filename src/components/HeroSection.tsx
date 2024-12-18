"use client";

import { useState, useEffect } from "react";

// Slider Image and Text Content Arrays
const sliderImages = [
    "/ongoing3.jpg",
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
                className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${transitioning ? "opacity-0 scale-110" : "opacity-100 scale-100"}`}
                style={{
                    backgroundImage: `url('${sliderImages[currentSlide]}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            ></div>

            {/* Overlay for Text Content */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
                <div className="text-center text-white px-4">
                    {/* Dynamic Heading */}
                    <h1 className="text-5xl font-bold animate__animated animate__fadeInUp animate__delay-300ms">
                        {sliderTexts[currentSlide].heading}
                    </h1>

                    {/* Dynamic Description */}
                    <p className="text-xl mt-4 animate__animated animate__fadeInUp animate__delay-500ms">
                        {sliderTexts[currentSlide].description}
                    </p>

                    {/* Dynamic SubText */}
                    <p className="text-2xl mt-6 animate__animated animate__fadeInUp animate__delay-700ms">
                        {sliderTexts[currentSlide].subText}
                    </p>
                </div>
            </div>
        </section>
    );
}
