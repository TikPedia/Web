"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area";

const examples = [
    {
        name: "Dashboard",
        href: "/examples/dashboard",
        code: "https://github.com/shadcn/ui/tree/main/apps/www/app/examples/dashboard",
    },
    {
        name: "Trends",
        href: "/trending",
        code: "https://github.com/shadcn/ui/tree/main/apps/www/app/examples/dashboard",
    },
    {
        name: "Process",
        href: "/processing",
        code: "https://github.com/shadcn/ui/tree/main/apps/www/app/examples/dashboard",
    },
    {
        name: "Render",
        href: "/rendering",
        code: "https://github.com/shadcn/ui/tree/main/apps/www/app/examples/dashboard",
    },
    {
        name: "Publisher",
        href: "/rendering",
        code: "https://github.com/shadcn/ui/tree/main/apps/www/app/examples/dashboard",
    },
]

interface ExamplesNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Nav({ className, ...props }: ExamplesNavProps) {
    const pathname = usePathname()

    return (
        <div className="relative">
            <ScrollArea className="max-w-[600px] lg:max-w-none">
                <div className={cn("mb-4 flex items-center", className)} {...props}>
                    {examples.map((example) => (
                        <Link
                            href={example.href}
                            key={example.href}
                            className={cn(
                                "flex items-center px-4",
                                pathname?.startsWith(example.href)
                                    ? "font-bold text-primary"
                                    : "font-medium text-muted-foreground"
                            )}
                        >
                            {example.name}
                        </Link>
                    ))}
                </div>
                <ScrollBar orientation="horizontal" className="invisible" />
            </ScrollArea>
            <ExampleCodeLink
                pathname={pathname === "/" ? "/examples/dashboard" : pathname}
            />
        </div>
    )
}

interface ExampleCodeLinkProps {
    pathname: string | null
}

export function ExampleCodeLink({ pathname }: ExampleCodeLinkProps) {
    const example = examples.find((example) => pathname?.startsWith(example.href))

    if (!example?.code) {
        return null
    }

    return (
        <Link
            href={example?.code}
            target="_blank"
            rel="nofollow"
            className="absolute right-0 top-0 hidden items-center rounded-[0.5rem] text-sm font-medium md:flex"
        >
            View code
            <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
    )
}
