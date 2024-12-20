"use client";
import { FilterParams } from "../type/type";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import FilterSection from "../components/FilterSection";
import TestimonialsSection from "@/components/testimonialSection";
import 'animate.css';

export default function Home() {
  // Handle the filter search logic
  const handleSearch = (filters: FilterParams) => {
    console.log("Filters:", filters);
    // Add your search/filter logic here
  };

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-full h-screen -z-10">

        {/* Hero Section: Stays fixed at the back */}
        <div className="fixed top-0 left-0 w-full h-screen -z-10">
          <HeroSection />
        </div>
      </div>


      {/* Main Content: Scrolls over the Hero Section */}
      <main className="relative z-10">
        {/* Spacer to push content below Hero Section */}
        <section className="h-screen"></section>

        {/* Filter Section */}
        <section className="py-0 px-4 bg-[#1A1A1A] border-b-2 border-black">
          <FilterSection onSearch={handleSearch} />
        </section>

        {/* Projects Section */}
        <section className="py-0 px-4 bg-[#1A1A1A]">
          <ProjectsSection />
        </section>

        {/* Testimonials Section */}
        <section className="py-0 px-4 bg-[#1A1A1A]">
          <TestimonialsSection />
        </section>
      </main>
    </div>
  );
}
