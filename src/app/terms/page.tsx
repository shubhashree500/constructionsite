"use client";

import { motion } from "framer-motion";

export default function TermsAndConditions() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4">
            <motion.div
                className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                {/* Animated Page Heading */}
                <motion.h1
                    className="text-4xl font-extrabold mb-10 text-center text-gray-800"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Terms and Conditions
                </motion.h1>

                {/* Animated Content Sections */}
                <motion.div
                    className="text-lg text-gray-700 leading-8 space-y-8"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2,
                            },
                        },
                    }}
                >
                    {/* Section Template */}
                    {[
                        {
                            title: "1. Introduction",
                            content:
                                "Welcome to our website! These terms and conditions outline the rules and regulations for the use of our website. By accessing or using this website, you agree to comply with these terms. Please read them carefully.",
                        },
                        {
                            title: "2. Acceptance of Terms",
                            content:
                                "By accessing and using this website, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, you must not use our website.",
                        },
                        {
                            title: "3. Use of Website",
                            content:
                                "You agree to use this website for lawful purposes only and in a manner that does not infringe on the rights of others or restrict their use of the website.",
                        },
                        {
                            title: "4. Privacy Policy",
                            content:
                                'We value your privacy. Please refer to our <a href="/privacy-policy" class="text-blue-600">Privacy Policy</a> to understand how we collect, use, and protect your data.',
                        },
                        {
                            title: "5. User Responsibilities",
                            content:
                                "As a user, you are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.",
                        },
                        {
                            title: "6. Prohibited Activities",
                            content:
                                "You are prohibited from engaging in activities that could harm or disrupt the website, including but not limited to hacking, transmitting harmful code, or spreading viruses.",
                        },
                        {
                            title: "7. Limitation of Liability",
                            content:
                                'Our website and its content are provided "as is" without warranties of any kind. We are not responsible for any direct or indirect damages arising from your use of the website.',
                        },
                        {
                            title: "10. Contact Us",
                            content:
                                'If you have any questions or concerns about these terms, please feel free to <a href="/contact-us" class="text-blue-600">contact us</a>.',
                        },
                    ].map((section, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            className="space-y-4"
                        >
                            <h2 className="text-2xl font-semibold text-gray-800">{section.title}</h2>
                            <p
                                className="text-gray-700"
                                dangerouslySetInnerHTML={{ __html: section.content }}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}
