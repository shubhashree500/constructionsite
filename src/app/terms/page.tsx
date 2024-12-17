"use client";

import { motion } from "framer-motion";

export default function TermsAndConditions() {
    return (
        <div className="max-w-7xl mx-auto py-16 px-4">
            {/* Animated Page Heading */}
            <motion.h1
                className="text-4xl font-bold mb-8 text-center"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                Terms and Conditions
            </motion.h1>

            {/* Animated Content Sections */}
            <motion.div
                className="text-lg text-gray-700 leading-7"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.3,
                        },
                    },
                }}
            >
                {/* Section 1 */}
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                    <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                    <p className="mb-4">
                        Welcome to our website! These terms and conditions outline the rules and regulations for the use of our website. By accessing or using this website, you agree to comply with these terms. Please read them carefully.
                    </p>
                </motion.div>

                {/* Section 2 */}
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                    <h2 className="text-2xl font-semibold mb-4">2. Acceptance of Terms</h2>
                    <p className="mb-4">
                        By accessing and using this website, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, you must not use our website.
                    </p>
                </motion.div>

                {/* Section 3 */}
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                    <h2 className="text-2xl font-semibold mb-4">3. Use of Website</h2>
                    <p className="mb-4">
                        You agree to use this website for lawful purposes only and in a manner that does not infringe on the rights of others or restrict their use of the website.
                    </p>
                </motion.div>

                {/* Section 4 */}
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                    <h2 className="text-2xl font-semibold mb-4">4. Privacy Policy</h2>
                    <p className="mb-4">
                        We value your privacy. Please refer to our{" "}
                        <a href="/privacy-policy" className="text-blue-600">
                            Privacy Policy
                        </a>{" "}
                        to understand how we collect, use, and protect your data.
                    </p>
                </motion.div>

                {/* Section 5 */}
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                    <h2 className="text-2xl font-semibold mb-4">5. User Responsibilities</h2>
                    <p className="mb-4">
                        As a user, you are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
                    </p>
                </motion.div>

                {/* Add other sections similarly */}
                {/* Section 6 */}
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                    <h2 className="text-2xl font-semibold mb-4">6. Prohibited Activities</h2>
                    <p className="mb-4">
                        You are prohibited from engaging in activities that could harm or disrupt the website, including but not limited to hacking, transmitting harmful code, or spreading viruses.
                    </p>
                </motion.div>

                {/* Section 7 */}
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                    <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
                    <p className="mb-4">
                        Our website and its content are provided "as is" without warranties of any kind. We are not responsible for any direct or indirect damages arising from your use of the website.
                    </p>
                </motion.div>

                {/* Section 10 */}
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                    <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
                    <p className="mb-4">
                        If you have any questions or concerns about these terms, please feel free to{" "}
                        <a href="/contact-us" className="text-blue-600">
                            contact us
                        </a>
                        .
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
}
