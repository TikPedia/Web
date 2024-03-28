import Link from "next/link"


import { cn } from "@/lib/utils"

import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ModeToggle } from "@/components/ModeToggle"
import {Button, buttonVariants} from "@/components/ui/button";

export function SiteHeader() {
    return (
        <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
            <div className="container flex h-14 items-center">
                <MainNav />
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">

                    <nav className="flex items-center">
                        <Link
                            href={"siteConfig.links.github"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div
                                className={cn(
                                    buttonVariants({
                                        variant: "ghost",
                                    }),
                                    "w-9 px-0"
                                )}
                            >
                                <Icons.gitHub className="h-4 w-4" />
                                <span className="sr-only">GitHub</span>
                            </div>
                        </Link>
                        <Link
                            href={"siteConfig.links.twitter"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div
                                className={cn(
                                    buttonVariants({
                                        variant: "ghost",
                                    }),
                                    "w-9 px-0"
                                )}
                            >
                                <Icons.twitter className="h-4 w-4 fill-current" />
                                <span className="sr-only">Twitter</span>
                            </div>
                        </Link>
                        <ModeToggle />
                    </nav>
                </div>
            </div>
        </header>
    )
}
