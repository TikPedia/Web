import { Metadata } from "next"

import Link from "next/link"

import { cn } from "@/lib/utils"
import {buttonVariants} from "@/components/ui/button";
import {UserSignupForm} from "@/components/user-signup-form";
import * as React from "react";

export const metadata: Metadata = {
    title: "Sign Up",
    description: "Sign up for a new account",
}

export default function SignUpPage() {
    return (
        <div className="flex-row lg:p-8 content-center items-center h-full justify-center w-full">
            <div className="flex flex-row justify-end">
                <Link
                href="/login"
                className={cn(
                    buttonVariants({variant: "ghost"}),
                    "m-4 "
                )}
                >
                    Login
                </Link>
            </div>
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col space-y-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Create an account
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Sign up with Github
                    </p>
                </div>
                <UserSignupForm />
            </div>
        </div>
    )
}
