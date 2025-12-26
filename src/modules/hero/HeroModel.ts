export const useHeroModel = () => {
    return {
        title: "John Tian",
        subtitle: "// 1x engineer @ Rice University",
        scrollText: "Scroll Down",
        about: {
            title: "Hi, I'm John!",
            bio: [
                "I'm a computer science student at Rice University. ",
                "I'm broadly interested in backend development, infrastructure, and systems.",
                "I also love food 😋.",
            ],
            photoSrc: "/me.png",
        },
        experiencesLink: {
            label: "Check out my experiences",
            href: "/experiences",
        },
        blogLink: {
            label: "Read my blog",
            href: "/blog",
        },
    };
};
