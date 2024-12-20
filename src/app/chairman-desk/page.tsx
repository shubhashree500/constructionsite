/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

export default function ChairmanDesk() {
    return (
        <div className="max-w-7xl mx-auto py-16 px-4 flex flex-col md:flex-row items-center animate-fadeIn space-y-8 md:space-y-0 md:space-x-8">
            {/* Left Section: Image */}
            <div className="w-full md:w-1/2 flex justify-center items-center animate-slideInLeft">
                <Image
                    src="/chairman.jpg"
                    alt="Chairman"
                    className="rounded-lg shadow-lg w-3/4 object-cover"
                    width={400}
                    height={400}
                />
            </div>

            {/* Right Section: Text */}
            <div className="w-full md:w-1/2 animate-slideInRight">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 animate-fadeIn">
                    Welcome to Suvam Constructions
                </h1>
                <p className="text-gray-700 text-base md:text-lg leading-7 mb-6 animate-fadeIn">
                    We are here since 2000. At the heart of our journey lies a simple yet profound vision: to create spaces that inspire and transform lives.
                    Real estate is more than just bricks and mortar; it&apos;s about building dreams, shaping communities, and leaving a lasting legacy.
                </p>
                <p className="text-gray-700 text-base md:text-lg leading-7 mb-6 animate-fadeIn">
                    Over the years, we have committed ourselves to upholding the highest standards of integrity, innovation, and excellence.
                    Our projects are a reflection of our belief in creating homes and commercial spaces that combine aesthetic appeal, functionality, and long-term value.
                </p>
                <p className="text-gray-700 text-base md:text-lg leading-7 mb-6 animate-fadeIn">
                    As we continue to grow, our focus remains on understanding and exceeding the expectations of our clients. Your trust drives us to constantly innovate,
                    improve, and deliver solutions that redefine what real estate can achieve.
                </p>
                <p className="text-gray-700 text-base md:text-lg leading-7 mb-6 animate-fadeIn">
                    Thank you for choosing Suvam Constructions as your partner in this journey. Together, let&apos;s build a future we can all be proud of.
                </p>
                <p className="text-gray-700 text-base md:text-lg leading-7 animate-fadeIn">
                    <strong>Warm regards,</strong>
                    <br />
                    Hemant Samantaray,
                    <br />
                    Chairman,
                    <br />
                    Suvam Constructions
                </p>
            </div>
        </div>
    );
}
