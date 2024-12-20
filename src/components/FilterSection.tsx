"use client"; // Explicitly mark this component as a client-side component

import { useState } from "react";
import Image from 'next/image'; // Importing Image component for optimization

// Define a more specific type for the filters
interface FilterParams {
    bhk: string;
    location: string;
    minBudget: string;
    maxBudget: string;
}

export default function FilterSection({ onSearch }: { onSearch: (filters: FilterParams) => void }) {
    const [bhk, setBhk] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const [minBudget, setMinBudget] = useState<string>("");
    const [maxBudget, setMaxBudget] = useState<string>("");

    // Handle the search logic
    const handleSearch = () => {
        const filters: FilterParams = { bhk, location, minBudget, maxBudget };
        onSearch(filters);
    };

    return (
        <div className="max-w-7xl mx-auto mt-12 p-8 bg-[#1A1A1A] shadow-xl rounded-lg">
            {/* Section 1: Picture and Text */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Picture Section */}
                <div className="bg-[#2A2A2A] p-4 border-2 border-[#9F8E7D] rounded-md shadow-md transform hover:scale-105 transition-transform duration-300">
                    {/* Using Next.js Image component for optimization */}
                    <Image
                        src="/service.jpg" // Path to the image in the 'public' folder
                        alt="Property"
                        width={400} // Set width for image
                        height={300} // Set height for image
                        className="object-cover w-full h-72 rounded-md"
                    />
                </div>

                {/* Text Section */}
                <div className="bg-[#2A2A2A] p-6 border-2 border-[#9F8E7D] rounded-md shadow-md flex flex-col justify-center hover:shadow-2xl transition-shadow duration-300">
                    <h2 className="text-3xl font-bold text-[#9F8E7D] mb-4">Our Services</h2>
                    <p className="text-[#9F8E7D] text-lg">
                        We provide premium property services, ensuring you find the best home tailored to your needs.
                    </p>
                </div>
            </div>

            {/* Divider Line */}
            <div className="w-full border-t-4 border-[#9F8E7D] my-8"></div>

            {/* Section 2: Find Your Dream Home + Filters */}
            <div
                className="p-6 bg-[#2A2A2A] border-2 border-[#9F8E7D] rounded-md shadow-md animate-fadeIn opacity-0 transition-opacity duration-1000"
                style={{ animationFillMode: "forwards" }}
            >
                <h3 className="text-2xl font-bold text-[#9F8E7D] mb-6 text-center">Find Your Dream Home</h3>

                {/* 4-Box Grid for Filters */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* BHK Filter */}
                    <div className="bg-[#2A2A2A] p-4 border border-[#9F8E7D] rounded-md shadow-sm hover:shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <label className="block mb-2 font-semibold text-[#9F8E7D]">BHK</label>
                        <select
                            value={bhk}
                            onChange={(e) => setBhk(e.target.value)}
                            className="w-full p-3 border border-[#9F8E7D] rounded-md bg-[#1A1A1A] text-[#9F8E7D] focus:ring focus:[#9F8E7D]"
                        >
                            <option value="">Select BHK</option>
                            <option value="2">2 BHK</option>
                            <option value="3">3 BHK</option>
                            <option value="4">4 BHK</option>
                            <option value="5">5 BHK</option>
                        </select>
                    </div>

                    {/* Location Filter */}
                    <div className="bg-[#2A2A2A] p-4 border border-[#9F8E7D] rounded-md shadow-sm hover:shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <label className="block mb-2 font-semibold text-[#9F8E7D]">Location</label>
                        <select
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="w-full p-3 border border-[#9F8E7D] rounded-md bg-[#1A1A1A] text-[#9F8E7D] focus:ring focus:[#9F8E7D]"
                        >
                            <option value="">Select Location</option>
                            <option value="Bhubaneswar">Bhubaneswar</option>
                            <option value="Cuttack">Cuttack</option>
                            <option value="Puri">Puri</option>
                            <option value="Rourkela">Rourkela</option>
                        </select>
                    </div>

                    {/* Min Budget */}
                    <div className="bg-[#2A2A2A] p-4 border border-[#9F8E7D] rounded-md shadow-sm hover:shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <label className="block mb-2 font-semibold text-[#9F8E7D]">Min Budget</label>
                        <select
                            value={minBudget}
                            onChange={(e) => setMinBudget(e.target.value)}
                            className="w-full p-3 border border-[#9F8E7D] rounded-md bg-[#1A1A1A] text-[#9F8E7D] focus:ring focus:[#9F8E7D]"
                        >
                            <option value="">Min</option>
                            <option value="500000">5 Lac</option>
                            <option value="1000000">10 Lac</option>
                            <option value="2000000">20 Lac</option>
                        </select>
                    </div>

                    {/* Max Budget */}
                    <div className="bg-[#2A2A2A] p-4 border border-[#9F8E7D] rounded-md shadow-sm hover:shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <label className="block mb-2 font-semibold text-[#9F8E7D]">Max Budget</label>
                        <select
                            value={maxBudget}
                            onChange={(e) => setMaxBudget(e.target.value)}
                            className="w-full p-3 border border-[#9F8E7D] rounded-md bg-[#1A1A1A] text-[#9F8E7D] focus:ring focus:[#9F8E7D]"
                        >
                            <option value="">Max</option>
                            <option value="500000">5 Lac</option>
                            <option value="1000000">10 Lac</option>
                            <option value="2000000">20 Lac</option>
                        </select>
                    </div>
                </div>

                {/* Search Button */}
                <div className="mt-8 text-center">
                    <button
                        onClick={handleSearch}
                        className="py-3 px-6 bg-[#9F8E7D] text-[#1A1A1A] font-bold rounded-md shadow-md hover:bg-[#9F8E7D] hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
}
