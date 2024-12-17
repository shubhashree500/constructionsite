/* eslint-disable react/no-unescaped-entities */
export default function ChairmanDesk() {
    return (
        <div className="max-w-7xl mx-auto py-16 px-4 flex items-center animate-fadeIn">
            {/* Left Section: Image */}
            <div className="w-1/2 flex justify-center items-center animate-slideInLeft">
                <img
                    src="/public/chairman.jpg"
                    alt="Chairman"
                    className="rounded-lg shadow-lg w-3/4 object-cover"
                />
            </div>

            {/* Right Section: Text */}
            <div className="w-1/2 pl-8 animate-slideInRight">
                <h1 className="text-4xl font-bold text-gray-800 mb-6 animate-fadeIn">Welcome to Suvam Constructions</h1>
                <p className="text-gray-700 leading-7 mb-6 animate-fadeIn">
                    We are here since 2000. At the heart of our journey lies a simple yet profound vision: to create spaces that inspire and transform lives.
                    Real estate is more than just bricks and mortar; it’s about building dreams, shaping communities, and leaving a lasting legacy.
                </p>
                <p className="text-gray-700 leading-7 mb-6 animate-fadeIn">
                    Over the years, we have committed ourselves to upholding the highest standards of integrity, innovation, and excellence.
                    Our projects are a reflection of our belief in creating homes and commercial spaces that combine aesthetic appeal, functionality, and long-term value.
                </p>
                <p className="text-gray-700 leading-7 mb-6 animate-fadeIn">
                    As we continue to grow, our focus remains on understanding and exceeding the expectations of our clients. Your trust drives us to constantly innovate,
                    improve, and deliver solutions that redefine what real estate can achieve.
                </p>
                <p className="text-gray-700 leading-7 mb-6 animate-fadeIn">
                    Thank you for choosing Suvam Constructions as your partner in this journey. Together, let’s build a future we can all be proud of.
                </p>
                <p className="text-gray-700 leading-7 animate-fadeIn">
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
