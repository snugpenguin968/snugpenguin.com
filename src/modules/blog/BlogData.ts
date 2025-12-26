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
        title: "Hello World: Introducing My New Portfolio",
        date: "December 25, 2025",
        summary: "A look into the design and architecture of my new portfolio website built with Next.js and MVA.",
        tags: ["PORTFOLIO", "DESIGN", "MVA"],
        content: [
            { type: 'heading', level: 1, content: "Welcome to SnugPenguin.com" },
            { type: 'paragraph', content: "I'm excited to share my new portfolio website with you all. It's been a labor of love, combining my passion for design with my engineering skills." },
            { type: 'heading', level: 2, content: "The Architecture" },
            { type: 'paragraph', content: "I decided to use a Model-View-Adapter (MVA) architecture for this project. This allows me to strictly separate my business logic (Model) from my UI (View), with an Adapter wiring them together." },
            {
                type: 'code', language: 'typescript', content: `// Example Adapter
export const HeroAdapter = () => {
  const model = useHeroModel();
  return <HeroView {...model} />;
};` },
            { type: 'paragraph', content: "This structure makes the codebase incredibly modular and easy to test." },
        ],
    },
];
