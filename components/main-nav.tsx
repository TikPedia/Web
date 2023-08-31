"use client"
import Link from "next/link"

import {cn} from "@/lib/utils"
import {usePathname} from "next/navigation";
import React from "react";
import { Icons } from "@/components/icons"
export function MainNav({ className,  ...props}: React.HTMLAttributes<HTMLElement>) {
    const pathname = usePathname()
    return (
        <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
                <Icons.logo className="h-6 w-6" />
                <span className="hidden font-bold sm:inline-block">
          TikPedia
        </span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
                <Link
                    href="/docs"
                    className={cn(
                        "transition-colors hover:text-foreground/80",
                        pathname === "/docs" ? "text-foreground" : "text-foreground/60"
                    )}
                >
                    Documentation
                </Link>
                <Link
                    href="/docs/components"
                    className={cn(
                        "transition-colors hover:text-foreground/80",
                        pathname?.startsWith("/docs/components")
                            ? "text-foreground"
                            : "text-foreground/60"
                    )}
                >
                    Components
                </Link>
                <Link
                    href="/themes"
                    className={cn(
                        "transition-colors hover:text-foreground/80",
                        pathname?.startsWith("/themes")
                            ? "text-foreground"
                            : "text-foreground/60"
                    )}
                >
                    Themes
                </Link>
                <Link
                    href="/examples"
                    className={cn(
                        "transition-colors hover:text-foreground/80",
                        pathname?.startsWith("/examples")
                            ? "text-foreground"
                            : "text-foreground/60"
                    )}
                >
                    Examples
                </Link>
                <Link
                    href={"siteConfig.links.github"}
                    className={cn(
                        "hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block"
                    )}
                >
                    GitHub
                </Link>
            </nav>
        </div>
    )
}
