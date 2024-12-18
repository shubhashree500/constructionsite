import Link from 'next/link'; // Import Link component for routing

export default function Footer() {
    return (
        <footer className="bg-[#9F8E7D] text-black py-10 font-body">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                {/* Logo and Contact Info */}
                <div>
                    <h2 className="text-2xl font-header font-bold mb-4">Suvam Constructions</h2>
                    <p className="italic">Every Construction Matters!</p>
                    <div className="mt-4 text-sm">
                        <p>Srabani Enclave, Ekamra College, Old Gate,</p>
                        <p>Old Town, Bhubaneswar, Odisha, 751010</p>
                        <p className="mt-2">
                            Email:{" "}
                            <a
                                href="mailto:suvamconstruction@gmail.com"
                                className="text-black-400 hover:text-white transition duration-300"
                            >
                                suvamconstruction@gmail.com
                            </a>
                        </p>
                        <p>
                            Phone:{" "}
                            <a
                                href="tel:+919853011904"
                                className="hover:text-white transition duration-300"
                            >
                                +91-9853011904
                            </a>
                            ,{" "}
                            <a
                                href="tel:+91-8917598148"
                                className="hover:text-white transition duration-300"
                            >
                                0674-3528144
                            </a>
                        </p>
                    </div>
                </div>

                {/* About Us */}
                <div>
                    <h2 className="text-2xl font-header font-bold mb-4">About Us</h2>
                    <p className="text-sm">
                        Established in 2000, on the pillars of trust, reliability, and strong
                        service orientation, Suvam Construction provides ethical real estate
                        services.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h2 className="text-2xl font-header font-bold mb-4">Links</h2>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link
                                href="/"
                                passHref
                                className="hover:text-white hover:underline transition duration-300"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                passHref
                                className="hover:text-white hover:underline transition duration-300"
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact-us"
                                passHref
                                className="hover:text-white hover:underline transition duration-300"
                            >
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/chairman-desk"
                                passHref
                                className="hover:text-white hover:underline transition duration-300"
                            >
                                Chairman&apos;s Desk
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/projects"
                                passHref
                                className="hover:text-white hover:underline transition duration-300"
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/terms"
                                passHref
                                className="hover:text-white hover:underline transition duration-300"
                            >
                                Terms and Conditions
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-10 border-t border-gray-500 text-black pt-6 text-center px-4 text-sm">
                <p>&copy; {new Date().getFullYear()} Suvam Constructions. All Rights Reserved.</p>
                <p className="text-xs text-gray-800 mt-2">
                    Disclaimer: All information provided on this website is for informational
                    purposes only and should not be construed as legal, financial, or professional
                    advice.
                </p>
            </div>
        </footer>
    );
}
