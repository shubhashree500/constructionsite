"use client"; // Marks this component as a client-side component

const completedProjects = [
    { id: 1, title: 'Project X', description: 'Description of Project X', imageUrl: '/images/project-x.jpg' },
    { id: 2, title: 'Project Y', description: 'Description of Project Y', imageUrl: '/images/project-y.jpg' },
    // Add more completed projects here
];

export default function CompletedProjects() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {completedProjects.map((project) => (
                <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-56 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <p className="text-gray-600 mt-2">{project.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
