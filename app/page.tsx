import Gradient from 'rgt'
import {Button} from "@/components/ui/button";

import {GitHubRepoCard} from "@/components/GitHubRepoCard";
import {ModeToggle} from "@/components/ModeToggle";
import {MainNav} from "@/components/main-nav";
import Features from "@/components/FeatureCard";
import {LandingHeader} from "@/components/LandingHeader";
import "./locomotive.css"

interface Project {
    name: string;
    description: string;
    html_url: string;
    homepage: string;
    languages_url: string;
    languages: {
        [key: string]: number;
    },
    updated_at: string;
    stargazers_count: number;
}



function Description() {
    return (
        <h2 className="max-w-lg text-xl text-center text-gray-500 sm:w-3/5 sm:text-left dark:text-gray-100 leading-8">
            TikPedia is a SaaS platform for creating and managing video content produced by AI.
        </h2>
    )
}



async function GithubProjects() {

    const projects = await fetch("http://127.0.0.1:3000/api/github").then(res => res.json())

    return (
        <div className={"grid md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-8"}>
            {projects.map((project: Project, index: number) => (
                <GitHubRepoCard key={index} project={project}/>
            ))}
        </div>
    )
}

export default async function Home() {

    return (
        <>
            <MainNav/>
            <main className="container flex flex-wrap gap-8">
                <div className={"flex flex-col self-center gap-4 basis-full"}>
                    <LandingHeader/>
                    <div className={"flex flex-row my-8"}>
                        <Features/>
                    </div>
                    <div className={
                        "flex flex-row gap-4 md:justify-left lg:justify-left xl:justify-left sm:justify-center"
                    }>
                        <Button variant={"default"}>Get Started</Button>
                        <Button variant={"ghost"}>Github</Button>
                    </div>
                </div>

                <div className={"flex flex-col self-center gap-4 basis-full"}>
                    <h2 className={"text-3xl font-semibold md:text-4xl lg:text-5xl max-w-lg pb-6 sm:max-w-xl md:max-w-3xl lg:max-w-4xl u-text-gray-900"}>
                        Open <Gradient dir="left-to-right" from="#00DFD8" to="#007CF0">
                        Source
                    </Gradient>
                    </h2>
                    <div className={"flex flex-row basis-full sm:justify-center"}>
                        {await GithubProjects()}
                    </div>
                </div>

                <footer>
                    <div
                        className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
                        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                            <p className="text-center text-sm leading-loose md:text-left">
                                Built by{" "}
                                <a
                                    href={""}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="font-medium underline underline-offset-4"
                                >
                                    shadcn
                                </a>
                                . Hosted on{" "}
                                <a
                                    href="https://vercel.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="font-medium underline underline-offset-4"
                                >
                                    Vercel
                                </a>
                                . The source code is available on{" "}
                                <a
                                    href={""}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="font-medium underline underline-offset-4"
                                >
                                    GitHub
                                </a>
                                .
                            </p>
                        </div>
                        <ModeToggle/>
                    </div>
                </footer>
            </main>
        </>
    )
}
