import { ExperienceSegment } from "./ExperiencesTypes";

export const useExperiencesModel = () => {
    const segments: ExperienceSegment[] = [
        {
            type: 'standard',
            id: "professional",
            title: "Professional Work",
            items: [
                {
                    id: "job1",
                    year: "2025",
                    title: "Software Engineer Intern @ Wealthfront",
                    description: "Post-trade data replication system for brokerage infrastructure.",
                    tags: ["JAVA", "SQL", "MariaDB", "Hibernate", "Guice", "Apache Airflow", "Message Queues", "System Design"],
                    image: "/wealthfront.png",
                },
                {
                    id: "job2",
                    year: "2024",
                    title: "Software Engineer Intern @ General Atomics",
                    description: "Simulation and visualization for drones and guided projectiles. ",
                    tags: ["C++", "C#", ".NET", "Vue.js", "Node.js", "Express.js", "TypeScript"],
                    image: "/general_atomics.jpg",
                },
            ],
        },
        {
            type: 'standard',
            id: "projects",
            title: "Projects",
            items: [
                {
                    id: "proj1",
                    year: "2025",
                    title: "Labshare",
                    description: "Inventory management and resource sharing for research labs.",
                    tags: ["Go", "AWS", "Microsoft Azure AI", "NGINX", "Docker", "CI/CD", "React Native", "TypeScript"],
                    image: "/labshare.png",
                },
            ],
        },
        {
            type: 'standard',
            id: "university",
            title: "University",
            items: [
                {
                    id: "uni1",
                    year: "Spring 2026",
                    title: "Workshops @ Rice Datathon",
                    description: "Getting students excited about data science!",
                    tags: ["Data Science", "Machine Learning"],
                    image: "/datathon.png",
                },
                {
                    id: "uni2",
                    year: "Fall 2025",
                    title: "COMP 382 TA",
                    description: "Teaching Assistant for Reasoning About Algorithms.",
                    tags: ["Algorithms", "Data Structures", "Proofs"],
                    image: "/rice.png",
                },
                {
                    id: "uni3",
                    year: "Fall 2025",
                    title: "Industry Outreach @ HackRice15",
                    description: "Logistics with sponsors, judges, mentors, and keynote speaker. ",
                    tags: ["Emailing", "Grocery Shopping"],
                    image: "/hackrice.png",
                },
                {
                    id: "uni4",
                    year: "Fall 2025 - Spring 2026",
                    title: "Tech Lead @ Texas Hearing Institute",
                    description: "Data warehouse project.",
                    tags: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "ETL"],
                    image: "/riceapps.png",
                },
                {
                    id: "uni5",
                    year: "Fall 2024 - Spring 2025",
                    title: "Research Engineer @ Rice Wireless",
                    description: "Stress-testing framework for network interface cards.",
                    tags: ["C++", "C", "Linux", "DPDK", "Computer Networks"],
                    image: "/ricewireless.jpg",
                },
                {
                    id: "uni6",
                    year: "Fall 2024 - Spring 2025",
                    title: "Software Engineer @ Texas Hearing Institute",
                    description: "Speech therapy app to help diagnose child hearing loss.",
                    tags: ["React Native", "TypeScript", "Supabase", "Agile"],
                    image: "/riceapps.png",
                },
                {
                    id: "uni7",
                    year: "Fall 2024 - Spring 2025",
                    title: "COMP 140 TA",
                    description: "Teaching Assistant for Rice's introductory CS class.",
                    tags: ["Recipes"],
                    image: "/rice.png",
                },
                {
                    id: "uni8",
                    year: "Fall 2023 - Spring 2024",
                    title: "Software Engineer @ Houston Museum of Natural Science",
                    description: "Mobile app companion for the Cockrell Butterfly Center.",
                    tags: ["React Native", "Expo Go", "TypeScript", "GraphQL", "Apollo", "MongoDB", "Agile"],
                    image: "/riceapps.png",
                },
            ],
        },
        {
            type: 'coursework',
            id: "coursework",
            title: "Coursework",
            courses: [
                { name: "Data Structures and Algorithms" },
                { name: "Object-Oriented Program Design" },
                { name: "Computer Systems" },
                { name: "Computer Networks" },
                { name: "Database Systems" },
                { name: "Operating Systems" },
                { name: "Deep Learning Systems" },
                { name: "Programming Languages and Compilers" },
                { name: "Machine Learning" },
                { name: "Probabilistic Data Structures and Algorithms" },
                { name: "Operations Research and Optimization" },
                { name: "Honors Linear Algebra" },
                { name: "Honors Multivariable Calculus" }
            ]
        },
        {
            type: 'standard',
            id: "other",
            title: "Other",
            items: [
                {
                    id: "other1",
                    year: "Fall 2025",
                    title: "CalHacks12",
                    description: "Basically a vacation.",
                    tags: ["Vibes"],
                    image: "/calhacks.png",
                },
                {
                    id: "other2",
                    year: "Summer 2025",
                    title: "YC Summer Meetup",
                    description: "Met some YC partners, founders, and cool people interning in the area.",
                    tags: ["Free Food", "Free merch"],
                    image: "/yc.png",
                },
                {
                    id: "other3",
                    year: "Summer 2025",
                    title: "Greylock Tech Fair",
                    description: "Learned about some cool companies.",
                    tags: ["Free Food", "Free merch"],
                    image: "/greylock.png",
                },
                {
                    id: "other4",
                    year: "Summer 2025",
                    title: "UC Berkeley AI Hackathon",
                    description: "Gave up and went hiking instead.",
                    tags: ["Photography"],
                    image: "/aihackathon.png",
                },
                {
                    id: "other5",
                    year: "Spring 2025",
                    title: "Susquehanna International Group Technology Discovery Day",
                    description: "Went to Philly and learned about market making 😎.",
                    tags: ["Free Food", "Free merch"],
                    image: "/sig.png",
                },
            ],
        },
        /*
        {
            type: 'skills',
            id: "skills",
            title: "Skills",
            groups: [
                {
                    category: "Languages",
                    skills: [
                        { name: "Java" },
                        { name: "Python" },
                        { name: "TypeScript" },
                        { name: "JavaScript" },
                        { name: "Go" },
                        { name: "C" },
                        { name: "C++" },
                        { name: "C#" },
                        { name: "Haskell" }
                    ]
                },
                {
                    category: "Frameworks",
                    skills: [
                        { name: "Spring" },
                        { name: "Spring Boot" },
                        { name: "Flask" },
                        { name: "React.js" },
                        { name: "React Native" },
                        { name: "Vue.js" },
                        { name: "Next.js" },
                        { name: "Node.js" },
                        { name: "Express.js" },
                        { name: "Tailwind" }
                    ]
                },
                {
                    category: "Technologies",
                    skills: [
                        { name: "SQL" },
                        { name: "MongoDB" },
                        { name: "PostgreSQL" },
                        { name: "MySQL" },
                        { name: "MariaDB" },
                        { name: "Hibernate" },
                        { name: "Supabase" },
                        { name: "Redis" },
                        { name: "Amazon Web Services (AWS)" },
                        { name: "Apache Kafka" },
                        { name: "Apache Airflow" },
                        { name: "RabbitMQ" },
                        { name: "Apollo Server/Client" },
                        { name: "GraphQL" },
                        { name: "Docker" },
                        { name: "Terraform" },
                        { name: "Nginx" },
                        { name: "Git/Github" },
                        { name: "Jenkins" },
                        { name: "Linux" }
                    ]
                }
            ]
        }
        */
    ];

    return {
        title: "Experiences",
        segments,
    };
};
