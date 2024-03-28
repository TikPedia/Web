
import {Circle, Star} from "lucide-react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {ReactNode} from "react";
import {Button} from "@/components/ui/button";
import Link from "next/link";

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

function CardDescription(props: { children: ReactNode }) {
    return (
        <p className="text-sm text-gray-500">
            {props.children}
        </p>
    );
}


function LanguageBadges(project: Project) {


    const LANGUAGES_COLORS = {
        "TypeScript": "fill-sky-400 text-sky-400",
        "JavaScript": "fill-yellow-400 text-yellow-400",
        "Python": "fill-green-400 text-green-400",
        "Unknown": "fill-gray-400 text-gray-400",
    } as Record<string, string>;

    const all = Object.entries(project.languages)


    let highestLanguage: string | null = null;
    let highestLines = 0;

    for (const language in project.languages) {
        const lines = project.languages[language];
        if (lines > highestLines) {
            highestLines = lines;
            highestLanguage = language;
        }
    }


    const mostUsed = {
        language: highestLanguage ?? "Unknown",
        color: LANGUAGES_COLORS[highestLanguage ?? "Unknown"],
    }

    console.log(LANGUAGES_COLORS)

    return (
        <div className="flex items-center">
            <Circle className={"mr-1 h-3 w-3" + mostUsed.color} />
            { mostUsed.language }
        </div>
    )
}

export function GitHubRepoCard({project} : {
    project: Project
}) {

    return (
        <Card>
            <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
                <div className="space-y-1">
                    <CardTitle>{project.name}</CardTitle>
                    <CardDescription>
                        {project.description}
                    </CardDescription>
                </div>
                <div className="flex items-center space-x-1 rounded-md bg-secondary text-secondary-foreground">
                    <Link href={project.html_url} target="_blank">
                        <Button
                            variant="secondary"
                        >
                            <Star className="mr-2 h-4" />
                            Star
                        </Button>
                    </Link>

                </div>
            </CardHeader>
            <CardContent>
                <div className="flex space-x-4 text-sm text-muted-foreground">
                    { LanguageBadges(project) }
                    <div className="flex items-center">
                        <Star className="mr-1 h-3 w-3" />
                        {project.stargazers_count}
                    </div>
                    <div>{project.updated_at}</div>
                </div>
            </CardContent>
        </Card>
    )
}
