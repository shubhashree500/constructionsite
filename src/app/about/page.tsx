import Image from 'next/image';

export default function AboutAndVisionSection() {
    return (
        <>
            {/* About Section */}
            <section className="py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
                    {/* Text Content */}
                    <div className="flex-1 animate__animated animate__fadeInLeft">
                        <h2 className="text-4xl font-bold text-maroon mb-4 font-header">About Us</h2>
                        <p className="text-gray-600 text-lg leading-relaxed font-body">
                            We are Suvam Constructions (since 2000). We believe that finding the perfect
                            property is more than just a transaction. It&apos;s a milestone in your journey. With
                            a passion for real estate and a commitment to excellence, we specialize in
                            connecting individuals, families, and businesses with spaces they’ll love to call
                            their own. Our every project depicts your own story.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mt-4 font-body">
                            Our team of dedicated professionals brings unmatched expertise, local knowledge,
                            and personalized service to every client interaction. Whether you&apos;re buying,
                            selling, or investing, we prioritize your goals and work tirelessly to deliver
                            results that exceed expectations.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="flex-1 animate__animated animate__fadeInRight">
                        <Image
                            src="/about.jpg"
                            alt="About Us"
                            className="w-full rounded-lg shadow-lg"
                            width={600}
                            height={400}
                        />
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
                    {/* Image */}
                    <div className="flex-1 animate__animated animate__fadeInLeft">
                        <Image
                            src="/vision.jpg"
                            alt="Our Vision"
                            className="w-full rounded-lg shadow-lg"
                            width={600}
                            height={400}
                        />
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 animate__animated animate__fadeInRight">
                        <h2 className="text-4xl font-bold text-maroon mb-4 font-header">Our Vision</h2>
                        <p className="text-gray-600 text-lg leading-relaxed font-body">
                            At the heart of our mission is a vision to create a sustainable and innovative future.
                            We aim to lead the construction industry by embracing cutting-edge technology,
                            environmental responsibility, and exceptional design.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mt-4 font-body">
                            Our goal is to build a better world, one project at a time, with structures that
                            not only serve but also inspire generations to come.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
