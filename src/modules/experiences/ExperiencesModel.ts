export type ExperienceItem = {
    id: string;
    year: string;
    title: string;
    description: string;
    tags: string[];
    image?: string; // Placeholder for now
    link?: string;
};

export type ExperienceSegment = {
    id: string;
    title: string;
    items: ExperienceItem[];
};

export const useExperiencesModel = () => {
    const segments: ExperienceSegment[] = [
        {
            id: "professional",
            title: "Professional Work",
            items: [
                {
                    id: "job1",
                    year: "2025",
                    title: "Wealthfront",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
                    tags: ["JAVA", "PLACEHOLDER", "SKILL"],
                },
                {
                    id: "job2",
                    year: "2024",
                    title: "Tech Company",
                    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                    tags: ["REACT", "TYPESCRIPT", "NEXT.JS"],
                },
            ],
        },
        {
            id: "projects",
            title: "Projects",
            items: [
                {
                    id: "proj1",
                    year: "2024",
                    title: "SnugPenguin",
                    description: "Personal portfolio website built with Next.js and Tailwind CSS. Featuring a custom MVA architecture.",
                    tags: ["NEXT.JS", "TAILWIND", "MVA"],
                },
            ],
        },
        {
            id: "university",
            title: "University",
            items: [
                {
                    id: "uni1",
                    year: "2023",
                    title: "Rice University TA",
                    description: "Teaching Assistant for COMP 123. Helped students understand fundamental algorithms and data structures.",
                    tags: ["TEACHING", "ALGORITHMS"],
                },
            ],
        },
        {
            id: "other",
            title: "Other",
            items: [
                {
                    id: "hack1",
                    year: "2023",
                    title: "Hackathon Winner",
                    description: "Won 1st place at RiceHack for building an innovative accessibility tool.",
                    tags: ["HACKATHON", "ACCESSIBILITY"],
                },
            ],
        },
    ];

    return {
        title: "Experiences",
        segments,
    };
};
