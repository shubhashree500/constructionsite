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
            }, 500);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-screen overflow-hidden">
            {/* Background Image Slider */}
            <div
                className={`absolute inset-0 transition-transform duration-700 ease-in-out ${transitioning ? "scale-110" : "scale-100"
                    }`}
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
                            <span className="text-lg font-semibold hover:scale-110 transition duration-300 cursor-pointer"
                                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                About
                            </span>
                        </Link>
                        <Link href="/chairman-desk" passHref>
                            <span className="text-lg font-semibold hover:scale-110 transition duration-300 cursor-pointer"
                                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                Chairman's Desk
                            </span>
                        </Link>
                        <Link href="/projects" passHref>
                            <span className="text-lg font-semibold hover:scale-110 transition duration-300 cursor-pointer"
                                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                Projects
                            </span>
                        </Link>
                        <Link href="/contact-us" passHref>
                            <span className="text-lg font-semibold hover:scale-110 transition duration-300 cursor-pointer"
                                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                Contact Us
                            </span>
                        </Link>
                    </nav>
                </div>
            </div>

            {/* Overlay for Text Content */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
                <div className="text-center text-white">
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



// "use client";

// import Link from "next/link";

// export default function Navbar() {
//     return (
//         <div>
//             <nav className="bg-transparent text-black py-0.5">  {/* Reduced padding for navbar height */}
//                 <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
//                     {/* Left side (Logo) */}
//                     <div className="flex-grow flex justify-start">
//                         <Link href="/" className="text-3xl font-extrabold">
//                             <img
//                                 src="/logo.png"
//                                 alt="Logo"
//                                 className="h-36 w-auto max-h-36 object-contain"  // Increased logo height
//                             />
//                         </Link>
//                     </div>

//                     {/* Right side (Navigation Links) */}
//                     <div className="flex gap-6 flex-grow justify-end relative">
//                         <Link
//                             href="/about"
//                             className="text-lg hover:scale-110 transition duration-300 ease-in-out font-semibold"  // Increased font size, added zoom effect
//                             style={{ fontFamily: "'Montserrat', sans-serif" }} // Apply different font for nav links
//                         >
//                             About
//                         </Link>
//                         <Link
//                             href="/chairman-desk"
//                             className="text-lg hover:scale-110 transition duration-300 ease-in-out font-semibold"
//                             style={{ fontFamily: "'Montserrat', sans-serif" }}
//                         >
//                             Chairman's Desk
//                         </Link>

//                         <Link
//                             href="/projects"
//                             className="text-lg hover:scale-110 transition duration-300 ease-in-out font-semibold"
//                             style={{ fontFamily: "'Montserrat', sans-serif" }}
//                         >
//                             Projects
//                         </Link>

//                         <Link
//                             href="/contact-us"
//                             className="text-lg hover:scale-110 transition duration-300 ease-in-out font-semibold"
//                             style={{ fontFamily: "'Montserrat', sans-serif" }}
//                         >
//                             Contact Us
//                         </Link>
//                     </div>
//                 </div>
//             </nav >

//             {/* Marquee Section */}
//             <div className="bg-black text-white py-2">
//                 <marquee behavior="scroll" direction="left" className="text-sm font-medium">
//                     📞 <a href="tel:+91-9853011904" className="text-white hover:underline">+1 (123) 456-7890</a> &nbsp; |
//                     📞 <a href="tel:0674-3528144" className="text-white hover:underline">0674-3528144</a> &nbsp; |
//                     ✉️ <a href="mailto:contact@construction.com" className="text-white hover:underline">contact@construction.com</a>
//                 </marquee>
//             </div >
//         </div >
//     );
// } 