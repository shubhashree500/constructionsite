"use client";

import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import FilterSection from "../components/FilterSection";
import TestimonialsSection from "@/components/testimonialSection";

export default function Home() {
  const handleSearch = (filters: any) => {
    console.log("Filters:", filters);
    // Add your search/filter logic here
  };

  return (
    <div className="relative">
      {/* Hero Section: Stays fixed at the back */}
      <div className="fixed top-0 left-0 w-full h-screen -z-10">
        <HeroSection />
      </div>

      {/* Main Content: Scrolls over the Hero Section */}
      <div className="relative z-10">
        {/* Spacer to push content below Hero Section */}
        <section className="h-screen"></section>

        {/* Filter Section */}
        <section className="py-16 px-4 bg-[#9F8E7D] border-b-2 border-black">
          <FilterSection onSearch={handleSearch} />
        </section>

        {/* Projects Section */}
        <ProjectsSection />
        {/* Testimonials Section */}
        <TestimonialsSection />

      </div>
    </div>
  );
}
