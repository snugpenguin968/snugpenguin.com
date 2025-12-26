export type ContentBlock =
    | { type: 'paragraph'; content: string }
    | { type: 'heading'; level: 1 | 2 | 3; content: string }
    | { type: 'image'; src: string; caption?: string }
    | { type: 'video'; src: string; caption?: string }
    | { type: 'code'; language: string; content: string };

export type BlogPost = {
    slug: string;
    title: string;
    date: string;
    summary: string;
    coverImage?: string;
    tags: string[];
    content: ContentBlock[];
};

export const blogPosts: BlogPost[] = [
    {
        slug: "hello-world",
        title: "Hi",
        date: "December 25, 2025",
        summary: "Improving my online presence",
        tags: ["PORTFOLIO", "DESIGN"],
        content: [
            { type: 'heading', level: 1, content: "Overview" },
            { type: 'paragraph', content: "I finally made a personal website!" },
            { type: 'heading', level: 2, content: "Some Notes" },
            { type: 'paragraph', content: "I decided to use a Model-View-Adapter (MVA) architecture for this project because of COMP 318. This structure makes the codebase incredibly modular and easy to test." },
            //             {
            //                 type: 'code', language: 'typescript', content: `// Example Adapter
            // export const HeroAdapter = () => {
            //   const model = useHeroModel();
            //   return <HeroView {...model} />;
            // };` },
            { type: 'paragraph', content: "Shoutout to Google Antigravity, Gemini 3 Pro, and [Cindy Tso](https://www.linkedin.com/in/cindy-tso-184718217/) for the design." },
        ],
    },
];
