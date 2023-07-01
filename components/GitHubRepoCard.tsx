
import {ChevronDown, Circle, Plus, Star} from "lucide-react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {ReactNode} from "react";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import {
    DropdownMenu, DropdownMenuCheckboxItem,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import Link from "next/link";


function CardDescription(props: { children: ReactNode }) {
    return (
        <p className="text-sm text-gray-500">
            {props.children}
        </p>
    );
}

export function GitHubRepoCard({title, description, stars,  updatedAt, link, ...props} : {
    title: string,
    description: string,
    stars: number,
    updatedAt: string,
    link: string,
    [key: string]: any
}) {

    return (
        <Card>
            <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
                <div className="space-y-1">
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>
                        {description}
                    </CardDescription>
                </div>
                <div className="flex items-center space-x-1 rounded-md bg-secondary text-secondary-foreground">
                    <Link href={link} target="_blank">
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
                    <div className="flex items-center">
                        <Circle className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
                        TypeScript
                    </div>
                    <div className="flex items-center">
                        <Star className="mr-1 h-3 w-3" />
                        {stars}
                    </div>
                    <div>{updatedAt}</div>
                </div>
            </CardContent>
        </Card>
    )
}
