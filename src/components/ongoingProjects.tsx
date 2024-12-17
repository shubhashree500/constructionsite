// src/app/projects/ongoing.tsx

const ongoingProjects = [
    { id: 1, title: 'Project A', description: 'Description of Project A', imageUrl: '/Project1.jpg' },
    { id: 2, title: 'Project B', description: 'Description of Project B', imageUrl: '/Project2.jpg' },
    // Add more ongoing projects here
];

export default function OngoingProjects() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ongoingProjects.map((project) => (
                <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <p className="text-gray-600 mt-2">{project.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
