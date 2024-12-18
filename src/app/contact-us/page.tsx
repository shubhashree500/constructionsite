"use client";

import { motion } from "framer-motion";

export default function ContactUs() {
    return (
        <div className="bg-gradient-to-b from-blue-50 to-white py-16 px-4">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-200"
            >
                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-4xl font-extrabold text-center text-black mb-4"
                >
                    Get in Touch
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-lg text-gray-600 text-center mb-8"
                >
                    Have questions? We&apos;re here to help and would love to hear from you.
                </motion.p>

                {/* Contact Form */}
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Name Input */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                        >
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                aria-label="Your Name"
                                className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter your full name"
                                required
                            />
                        </motion.div>

                        {/* Email Input */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.5 }}
                        >
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                aria-label="Your Email"
                                className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter your email"
                                required
                            />
                        </motion.div>
                    </div>

                    {/* Phone Number Input */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                    >
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                            Your Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            aria-label="Your Phone Number"
                            className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your phone number"
                            required
                        />
                    </motion.div>

                    {/* Message Textarea */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.7 }}
                    >
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            aria-label="Your Message"
                            className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Write your message here"
                            required
                        ></textarea>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.8 }}
                        className="text-center"
                    >
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            type="submit"
                            className="px-6 py-3 bg-black text-white font-bold rounded-lg shadow hover:bg-blue-500 hover:scale-105 transform transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-opacity-50"
                        >
                            Send Message
                        </motion.button>
                    </motion.div>
                </form>
            </motion.div>
        </div>
    );
}
