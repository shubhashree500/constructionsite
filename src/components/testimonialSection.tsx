"use client";

export default function TestimonialsSection() {
    const testimonials = [
        { id: 1, name: "The Mathews", text: "“I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.”" },
        { id: 2, name: "Lars & Mary Williams", text: "“I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.”" },
        { id: 3, name: "Chris Parks", text: "“I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.”" },
    ];

    return (
        <div className="border-4 border-[#9F8E7D] rounded-lg overflow-hidden">
            <section className="flex">
                {/* Left Section */}
                <div className="w-1/4 bg-[#9F8E7D] flex items-center justify-center p-8">
                    <h2 className="text-white text-5xl font-bold">Testimonials</h2>
                </div>

                {/* Right Section */}
                <div className="w-3/4 grid grid-cols-1 md:grid-cols-3 divide-x divide-gray-600 bg-[#1A1A1A]">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="flex flex-col items-center justify-center text-center p-8 text-gray-300"
                        >
                            <p className="mb-4">{testimonial.text}</p>
                            <h3 className="text-[#9F8E7D] text-xl font-semibold">{testimonial.name}</h3>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
