export type Project = {
    year: string;
    title: string;
    description: string;
    tags: string[];
};

export const useProjectsModel = () => {
    const projects: Project[] = [
        {
            year: "2024",
            title: "Project One",
            description: "A brief description of the first project. This is a placeholder text to demonstrate the layout and typography. It should be concise but informative.",
            tags: ["React", "Next.js", "TypeScript"],
        },
        {
            year: "2023",
            title: "Project Two",
            description: "Description for the second project. Highlighting key features and technologies used. The design focuses on readability and visual appeal.",
            tags: ["Node.js", "GraphQL", "PostgreSQL"],
        },
    ];

    return {
        title: "Selected Works",
        projects,
    };
};
