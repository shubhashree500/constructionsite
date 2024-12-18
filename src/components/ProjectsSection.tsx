"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectsSection() {
    const projects = [
        { id: 1, image: "/ongoing1.jpg", title: "Project 1", status: "Ongoing" },
        { id: 2, image: "/Project1.jpg", title: "Project 2", status: "Completed" },
        { id: 3, image: "/ongoing2.jpg", title: "Project 3", status: "Ongoing" },
        { id: 4, image: "/Project2.jpg", title: "Project 4", status: "Completed" },
        { id: 5, image: "/ongoing3.jpg", title: "Project 5", status: "Ongoing" },
        { id: 6, image: "/Project3.jpg", title: "Project 6", status: "Completed" },
    ];

    const ongoingProjects = projects.filter(
        (project) => project.status === "Ongoing"
    );
    const completedProjects = projects.filter(
        (project) => project.status === "Completed"
    );

    return (
        <section className="py-16 px-4 bg-[#9F8E7D]">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8 text-white">Our Projects</h2>

                {/* Ongoing Projects */}
                <div className="mb-12">
                    <h3 className="text-2xl font-semibold text-white mb-6">Ongoing Projects</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Large Image with Animation */}
                        <motion.div
                            className="relative w-full h-[60vh] rounded-lg overflow-hidden"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <Image
                                src={ongoingProjects[0]?.image || "/placeholder.jpg"}
                                alt="Ongoing Large Project"
                                layout="fill"
                                objectFit="cover"
                                className="transition-transform duration-300"
                            />
                            <div className="absolute inset-0 flex justify-center items-end p-4">
                                <button className="bg-black text-white font-semibold py-2 px-4 rounded-md bg-opacity-80">
                                    View
                                </button>
                            </div>
                        </motion.div>

                        {/* Two Smaller Images with Animation */}
                        <div className="flex flex-col gap-6">
                            {ongoingProjects.slice(1, 3).map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    className="relative w-full h-[30vh] rounded-lg overflow-hidden shadow-md"
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 flex justify-center items-end p-4">
                                        <button className="bg-black text-white font-semibold py-2 px-4 rounded-md bg-opacity-80">
                                            View
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Completed Projects */}
                <div>
                    <h3 className="text-2xl font-semibold text-white mb-6">Completed Projects</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {completedProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 hover:shadow-xl"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="relative h-48 w-full">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                                    <button className="w-full bg-black text-white font-semibold py-2 rounded-md bg-opacity-80">
                                        View
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
