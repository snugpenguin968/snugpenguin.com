export type ExperienceItem = {
    id: string;
    year: string;
    title: string;
    description: string;
    tags: string[];
    image?: string;
    link?: string;
};

export type StandardExperienceSegment = {
    type: 'standard';
    id: string;
    title: string;
    items: ExperienceItem[];
};

export type CourseItem = {
    name: string;
    link?: string;
};

export type CourseworkSegment = {
    type: 'coursework';
    id: string;
    title: string;
    courses: CourseItem[];
};

export type SkillItem = {
    name: string;
    link?: string;
};

export type SkillGroup = {
    category: string;
    skills: SkillItem[];
};

export type SkillsSegment = {
    type: 'skills';
    id: string;
    title: string;
    groups: SkillGroup[];
};

export type ExperienceSegment = StandardExperienceSegment | CourseworkSegment | SkillsSegment;
