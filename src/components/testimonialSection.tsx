"use client";

export default function TestimonialsSection() {
    const testimonials = [
        { id: 1, name: "The Mathews", text: "“I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.”" },
        { id: 2, name: "Lars & Mary Williams", text: "“I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.”" },
        { id: 3, name: "Chris Parks", text: "“I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.”" },
    ];

    return (
        <section className="py-16 px-4 bg-[#1A1A1A]">
            <div className="max-w-7xl mx-auto text-center">
                {/* Title Section */}
                <div className="mb-12">
                    <h2 className="text-4xl font-bold text-[#9F8E7D]">Testimonials</h2>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-[#2A2A2A] text-gray-300 p-6 rounded-lg shadow-md transform hover:scale-105 hover:shadow-xl transition-all duration-300"
                        >
                            <p className="text-lg mb-4 italic">&quot;{testimonial.text}&quot;</p>

                            <h3 className="text-[#9F8E7D] text-xl font-semibold">{testimonial.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
