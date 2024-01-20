import { ModeToggle } from '@/components/ThemeToggle';
import { Icons } from '@/components/icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const user = {
    "name": "John Doe",
    "headline": "I'm a Full Stack Engineer and Opensource Contributor",
    "bio": "Passionate web developer with a love for clean code and creating awesome digital experiences, that you will like and everyone will like!",
    "workExperience": [
        {
            "position": "Front-end Developer",
            "company": "Tech Innovations Inc.",
            "startDate": "January 2020",
            "endDate": "Present",
            "responsibilities": ["Developing responsive web applications", "Collaborating with cross-functional teams"]
        },
        {
            "position": "Intern",
            "company": "Digital Solutions Ltd.",
            "startDate": "May 2019",
            "endDate": "December 2019",
            "responsibilities": ["Assisting in website development", "Learning and implementing best practices"]
        }
    ],
    "projects": [
        {
            "title": "E-commerce Platform",
            "description": "Built a responsive e-commerce platform with user authentication and product management.",
            "technologies": ["TailwindCSS", "NextJS", "MongoDB"],
            "url": "https://example.com/ecommerce"
        },
        {
            "title": "Portfolio Website",
            "description": "Designed and developed a personal portfolio website to showcase skills and projects.",
            "technologies": ["HTML", "CSS", "JavaScript"],
            "url": "https://example.com/portfolio"
        }
    ],
    "skills": ["MongoDB", "TailwindCSS", "JavaScript", "React", "Node.js", "NextJS", "Git"],
    "socials": [
        {
            name: "email",
            value: "mailto:john.doe@example.com",
        },
        {
            name: "linkedin",
            value: "https://www.linkedin.com/in/johndoe",
        },
        {
            name: "github",
            value: "https://github.com/johndoe",
        },
        {
            name: "twitter",
            value: "https://twitter.com/johndoe",
        },
    ]
}

const socialIcons = {
    email: <><Icons.email className="h-5 w-5 hover:text-primary" /></>,
    linkedin: <Icons.linkedin className="h-5 w-5 hover:text-primary" />,
    github: <Icons.gitHub className="h-4 w-4 hover:text-primary" />,
    twitter: <Icons.twitter className="h-4 w-4 hover:text-primary" />,
}

const links = [
    {
        href: "/#skills",
        label: "Skills",
    },
    {
        href: "/#projects",
        label: "Projects",
    },
    {
        href: "/#work",
        label: "Work",
    },
];

const portfolio = ({ params }) => {

    console.log("slug: " + params.user);
    return (
        <main>
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <nav
                    className="container flex items-center justify-between md:px-16 py-3 mx-auto"
                    aria-label="Global"
                >
                    <div className="flex items-center gap-6">
                        <div className="flex lg:flex-1">
                            <Link
                                className="flex items-center gap-1 shrink-0"
                                href="/"
                                title={`${user.name} | Portfolio`}
                            >
                                <Image
                                    src={'/avatar.svg'}
                                    alt={`${user.name} logo`}
                                    className="w-7"
                                    priority={true}
                                    width={32}
                                    height={32}
                                />
                                <span className="font-bold">{user.name}</span>
                            </Link>
                        </div>
                        <div className="hidden sm:flex justify-center gap-6 items-center">
                            {links.map((link) => (
                                <Link
                                    href={link.href}
                                    key={link.href}
                                    className="transition-colors hover:text-foreground text-foreground/70"
                                    title={link.label}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        {
                            user.socials.map((social) => (
                                <Link className='hidden sm:block' href={social.value} key={social.name}>
                                    {socialIcons[social.name]}
                                </Link>
                            ))
                        }
                        <ModeToggle />
                    </div>
                </nav>
            </header>
            <section></section>
            <footer></footer>
        </main>
    )
}

export default portfolio
