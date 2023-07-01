import Gradient from 'rgt'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Circle} from "lucide-react";

import {GitHubRepoCard} from "@/components/GitHubRepoCard";
import {ModeToggle} from "@/components/ModeToggle";

function Title() {
    return (
    <h1 className="relative max-w-2xl text-5xl font-semibold text-center sm:text-left md:text-6xl lg:text-7xl u-text-gray-900">
        <Gradient dir="left-to-right" from="#00DFD8" to="#007CF0">
            TikPedia
        </Gradient>
    </h1>
    )
}
function Description() {
    return (
        <h2 className="max-w-lg text-xl text-center text-gray-500 sm:w-3/5 sm:text-left dark:text-gray-100 leading-8">
            TikPedia is a SaaS platform for creating and managing video content produced by AI.
        </h2>
    )
}

function Features() {

    const features = [
        {
            title: "AI Video Creation",
            description: "Create videos using AI",
            image: <Circle />,
        },
        {
            title: "Publishing",
            description: "Publish videos to TikTok and YouTube",
            image: <Circle />,
        },
        {
            title: "Analytics",
            description: "Track your videos performance",
            image: <Circle />,
        },
        {
            title: "Personalization",
            description: "Customize your videos",
            image: <Circle />,
        },
        {
            title: "Knowledge",
            description: "Wikipedia articles for your videos",
            image: <Circle />,
        },
        {
            title: "Automated Video Editing",
            description: "Automated video editing with audio and video effects",
            image: <Circle />,
        }
    ]

    return (
        <div className={"flex flex-row gap-4  flex-wrap"}>
            <div className={"flex flex-row basis-full "}>
                <h2 className={"text-3xl font-semibold md:text-4xl lg:text-5xl max-w-lg pb-6 sm:max-w-xl md:max-w-3xl lg:max-w-4xl u-text-gray-900"}>
                    The new generation of <Gradient dir="left-to-right" from="#00DFD8" to="#007CF0">
                    video creation
                </Gradient>
                </h2>
            </div>
            <div className={"flex flex-row basis-full"}>
                <p className={"text-lg xl:text-xl 2xl:text-2xl u-text-gray-500 sm:max-w-xl md:max-w-3xl lg:max-w-4xl"}>
                    TikPedia anaylize current trends and create videos using AI. You can publish videos to TikTok and YouTube.
                    You can also track your videos performance and customize your videos. TikPedia also provides Wikipedia articles for your videos.
                </p>
            </div>
            <div className={"flex flex-row basis-full sm:justify-center"}>
              <div className={"grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-8"}>
                  {features.map((feature, index) => (
                      <Card key={index} className={"flex flex-col"}>
                          <CardHeader>
                              <CardTitle>{feature.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                              <CardDescription>{feature.description}</CardDescription>
                          </CardContent>
                      </Card>
                  ))}
              </div>
            </div>
        </div>
    )
}

interface GithubProject {
    full_name: string
    description: string
    stargazers_count: number
    updated_at: string
    html_url: string
}
async function GithubProjects() {

    const projects : GithubProject[] = await fetch("http://127.0.0.1:3000/api/github").then(res => res.json())

    return (
        <div className={"grid md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-8"}>
            {projects.map((project, index) => (
                <GitHubRepoCard key={index} title={project.full_name} description={project.description} stars={project.stargazers_count} updatedAt={project.updated_at} link={project.html_url} />
            ))}
        </div>
    )
}

export default async function Home() {

    return (
        <main className="container flex flex-wrap gap-8">

           <div className={"flex flex-col self-center gap-4 basis-full"}>
               <div className={"flex flex-row"}>
                     {Title()}
               </div>
               <div className={"flex flex-row"}>
                     {Description()}
               </div>
               <div className={"flex flex-row my-8"}>
                   {Features()}
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
                <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
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
                    <ModeToggle />
                </div>
            </footer>
        </main>

    )
}
