// src/app/projects/page.tsx

"use client"; // This marks the component as a client-side component

import OngoingProjects from "../../components/ongoingProjects"; // Correct path to your OngoingProjects component
import CompletedProjects from "../../components/completedProjects"; // Correct path to your CompletedProjects component
import { useState } from "react";

export default function ProjectsPage() {
    const [activeTab, setActiveTab] = useState('ongoing'); // or 'completed'

    return (
        <div>
            <div>
                {/* Tab buttons to switch between ongoing and completed projects */}
                <button onClick={() => setActiveTab('ongoing')}>Ongoing Projects</button>
                <button onClick={() => setActiveTab('completed')}>Completed Projects</button>
            </div>

            {/* Display Ongoing or Completed Projects based on activeTab */}
            {activeTab === 'ongoing' ? <OngoingProjects /> : <CompletedProjects />}
        </div>
    );
}
