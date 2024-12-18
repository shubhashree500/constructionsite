// src/app/projects/page.tsx

"use client"; // This marks the component as a client-side component

import { useState } from "react";
import { motion } from "framer-motion";
import OngoingProjects from "../../components/ongoingProjects"; // Correct path to your OngoingProjects component
import CompletedProjects from "../../components/completedProjects"; // Correct path to your CompletedProjects component

export default function ProjectsPage() {
    const [activeTab, setActiveTab] = useState('ongoing'); // or 'completed'

    return (
        <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-16 px-4">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-200"
            >
                {/* Tab buttons */}
                <div className="flex justify-center mb-8">
                    <motion.button
                        onClick={() => setActiveTab('ongoing')}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-2 font-bold rounded-lg shadow-sm mx-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${activeTab === 'ongoing'
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 text-black hover:bg-blue-100"
                            }`}
                    >
                        Ongoing Projects
                    </motion.button>
                    <motion.button
                        onClick={() => setActiveTab('completed')}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-2 font-bold rounded-lg shadow-sm mx-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${activeTab === 'completed'
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 text-black hover:bg-blue-100"
                            }`}
                    >
                        Completed Projects
                    </motion.button>
                </div>

                {/* Tab content */}
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    {activeTab === 'ongoing' ? <OngoingProjects /> : <CompletedProjects />}
                </motion.div>
            </motion.div>
        </div>
    );
}
