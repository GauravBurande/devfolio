"use client";

import MobileNavSheet from '@/components/MobileNavSheet';
import { ModeToggle } from '@/components/ThemeToggle';
import { socialIcons } from '@/libs/constants';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from "@/lib/utils"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useEffect, useState } from 'react';
// import apiClient from '@/libs/api';

const johndoe = {
    "usernames": "johndoe",
    "name": "John Doe",
    "helloText": `👋 Hey there, I'm John Doe`,
    "headline": "A Full Stack Engineer and Opensource Contributor",
    "about": "Passionate web developer with a love for clean code and creating awesome digital experiences, that you will like and everyone will like!",
    "work": [
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
        },
    ],
    "projects": [
        {
            "title": "E-commerce Platform",
            "role": "developer",
            "description": "Built a responsive e-commerce platform with user authentication and product management.",
            "stack": ["TailwindCSS", "NextJS", "MongoDB"],
            "url": "https://example.com/ecommerce"
        },
        {
            "title": "Portfolio Website",
            "role": "designer",
            "description": "Designed and developed a personal portfolio website to showcase skills and projects.",
            "stack": ["HTML", "CSS", "JavaScript"],
            "url": "https://example.com/portfolio"
        },
        {
            "title": "Blog Platform",
            "role": "maintainer",
            "description": "Created a dynamic blog platform with user accounts and commenting functionality.",
            "stack": ["React", "Node.js", "Express", "MongoDB"],
            "url": "https://example.com/blog"
        },
        {
            "title": "Social Media Dashboard",
            "role": "developer",
            "description": "Developed a social media dashboard with real-time updates and interactive data visualizations.",
            "stack": ["Vue.js", "Firebase", "Chart.js"],
            "url": "https://example.com/social-dashboard"
        },
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

// async function getUser(username) {
//     const res = await apiClient.get('/portfolio', { username });
//     const user = await res.json()

//     return user
// }

const PortFolio = ({ params }) => {

    const [user, setUser] = useState(johndoe)

    useEffect(() => {
        const portfolio = window.localStorage.getItem('portfolio');
        setUser(JSON.parse(portfolio))
    }, [params.username])

    try {
        if (!params.username === "johndoe") {


            // const username = params.username
            // const res = await getUser(username)
            // user = JSON.parse(JSON.stringify(res))
            // console.log("portfolio: " + JSON.stringify(user))
        }
    } catch (error) {
        console.error(error)
    }
    const links = [];

    // Function to add a link to the 'links' array if the property exists in the 'user' object
    const addLink = (label, href) => {
        if (user[label] && user[label].length > 0) {
            links.push({ label, href });
        }
    };

    addLink('skills', '#skills');
    addLink('projects', '#projects');
    addLink('work', '#work');

    return (
        <main className='pb-20'>
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
                                <h1 className="font-bold">{user.name}</h1>
                            </Link>
                        </div>
                        <div className="hidden sm:flex justify-center gap-6 items-center">
                            {links.map((link) => (
                                <Link
                                    href={link.href}
                                    key={link.href}
                                    className="transition-colors capitalize hover:text-foreground text-foreground/70"
                                    title={link.label}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        {
                            user.socials ? user.socials.map((social) => (
                                <Link className='hidden sm:block' href={social.value} key={social.name}>
                                    {socialIcons[social.name]}
                                </Link>
                            )) : ""
                        }
                        <ModeToggle />
                        <MobileNavSheet socials={user.socials} links={links} />
                    </div>
                </nav>
            </header>
            <section className="relative  pt-28 md:pt-40 pb-60 md:pb-52">
                <div className="absolute inset-0 bg-[url(/graphic.webp)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
                <div className="flex flex-col items-center justify-center text-center space-y-12 lg:space-y-8 relative mx-auto">
                    <p className={`font-bold text-5xl leading-tight lg:leading-normal sm:text-6xl md:text-7xl px-5 md:px-7 lg:px-10`}>
                        {user.helloText}
                    </p>
                    <h2 className='text-center text-4xl'>
                        {user.headline}
                    </h2>
                    <h3 className='text-xl max-w-4xl px-5 text-center'>
                        {user.about}
                    </h3>
                </div>
            </section>
            {user.projects.length > 0 && <section id='projects' className='container mt-10'>
                <h3 className='text-lg mb-14 capitalize font-semibold'>Projects</h3>
                <div className='flex flex-col gap-16 items-start'>
                    {user.projects.map(project => (
                        <div key={project.title}>
                            <div className='flex items-center gap-5'>
                                <div className='bg-accent p-3 rounded-md border-2'>
                                    <Image
                                        src={'/project.svg'}
                                        alt={`${project.title}`}
                                        className="w-6"
                                        priority={true}
                                        width={32}
                                        height={32}
                                    />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <div className='flex items-center gap-3'>
                                        {project.title && <p className='font-semibold text-foreground/75 text-lg'>{project.title}</p>}
                                        {project.role && <p className='bg-primary/10 px-2 py-[2px] text-xs border-2 rounded-md'>{project.role}</p>}
                                        {project.url && <Link className='hover:text-primary/80' href={project.url}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>
                                        </Link>}
                                    </div>
                                    <div className='flex flex-wrap items-center gap-4'>
                                        {project.stack.length > 0 && project.stack.map(tech => (
                                            <p className='bg-primary/30 border-2 px-3 py-0.5 text-xs rounded-md' key={tech}>
                                                {tech}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {project.description && <div className=' mt-3'>
                                {project.description}
                            </div>}
                        </div>
                    ))}
                </div>
            </section>}
            {user.skills.length > 0 && <section id='skills' className='container mt-20'>
                <h3 className='text-lg capitalize mb-5 font-semibold'>skills</h3>
                <div className='flex flex-wrap gap-3 items-center'>
                    {user.skills.map(skill => (
                        <p className='bg-primary/30 border-2 px-3 py-0.5 text-xs rounded-md' key={skill}>
                            {skill}
                        </p>
                    ))}
                </div>
            </section>}
            {user.work.length > 0 && <section id='work' className='container mt-20'>
                <h3 className='text-lg capitalize mb-10 font-semibold'>work</h3>
                <div className='flex flex-wrap gap-3 items-center'>
                    {user.work.map(work => (
                        <Card key={work.company} className={cn("w-[380px]")}>
                            <CardHeader>
                                <CardTitle>{work.position}</CardTitle>
                                <CardDescription>{work.company}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex flex-wrap items-center gap-2">
                                {work.responsibilities.map((responsibility, index) => (
                                    <div
                                        key={index}
                                        className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                                    >
                                        <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                        <div className="space-y-1">
                                            <p className="text-sm font-medium leading-none">
                                                {responsibility}
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                {work.startDate} - {work.endDate}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>}
        </main>
    )
}

export default PortFolio
