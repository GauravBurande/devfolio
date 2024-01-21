"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
// import apiClient from "@/libs/api"
import { useSession } from "next-auth/react"

const profileFormSchema = z.object({
    username: z
        .string()
        .min(2, {
            message: "Username must be at least 2 characters.",
        })
        .max(30, {
            message: "Username must not be longer than 30 characters.",
        }),
    name: z
        .string()
        .min(2, {
            message: "Name must be at least 2 characters.",
        })
        .max(50, {
            message: "Name must not be longer than 50 characters.",
        }),
    helloText: z.string()
        .min(4, {
            message: "Hello text must be at least 10 characters.",
        })
        .max(80, {
            message: "Hello text must not be longer than 80 characters.",
        }),
    headline: z.string()
        .min(10, {
            message: "Headline must be at least 10 characters.",
        })
        .max(150, {
            message: "Headline must not be longer than 80 characters.",
        }),
    about: z.string().min(20, {
        message: "Your bio must be at least 20 characters.",
    })
        .max(160, {
            message: "Your bio must not be longer than 160 characters.",
        }),
    complexStructure: z
        .string()
        .optional(),
})


const complexValue = {
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
// This can come from database if user has saved their info after upadating exsiting values.
// let portfolio = window.localStorage.getItem('portfolio')
// if (portfolio) {
//     portfolio = JSON.parse(portfolio);
// // }
// const withoutComplexValues = { name: portfolio.name, username: portfolio.username, helloText: portfolio.helloText, headline: portfolio.headline, about: portfolio.about }
// const withComplexValues = { work: portfolio.work, projects: portfolio.projects, skills: portfolio.skills }

const defaultValues = {
    helloText: "👋 Hey there, I'm John Doe",
    headline: "A Full Stack Engineer and Opensource Contributor",
    about: "I own a computer.",
    complexStructure: JSON.stringify(complexValue, null, 2),
}

export function ProfileForm() {
    const form = useForm({
        resolver: zodResolver(profileFormSchema),
        defaultValues,
        mode: "onChange",
    })


    // const { data: session } = useSession();
    async function onSubmit(data) {
        try {
            const dataWithoutComplexstructure = { ...data }
            delete dataWithoutComplexstructure.complexStructure;
            const complexStructure = JSON.parse(data.complexStructure)
            const portfolio = { ...dataWithoutComplexstructure, ...complexStructure }

            // const email = session.user.email
            // const updatedUser = await apiClient.post('/portfolio', { portfolio, email })
            localStorage.setItem('portfolio', JSON.stringify(portfolio))
            //  if (updatedUser) {
            toast({
                title: "You submitted the following info:",
                description: (
                    <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                        <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                    </pre>
                ),
            })
            //  }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="johndoe" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is just your username. It can be your real name or a
                                pseudonym. This will be the slug for your portfolio page.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="john doe" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your full name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="helloText"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Hello text</FormLabel>
                            <FormControl>
                                <Input placeholder="Hello!" {...field} />
                            </FormControl>
                            <FormDescription>
                                Greeting message for your portfolio visitors.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="headline"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Headline</FormLabel>
                            <FormControl>
                                <Input placeholder="Hello!" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is mainly about what you do.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="about"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>About</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Tell us a little bit about yourself"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                tell us a little bit about you
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="complexStructure"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>complexStructure</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="this is complex structure that I was unable to build in the ample amount of time"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                This is complex structure that I was unable to build in the ample amount of time, so deal with it.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Update profile</Button>
            </form>
        </Form>
    )
}
