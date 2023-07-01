"use client"
import { Metadata } from "next"
import {Button, buttonVariants} from "@/components/ui/button";
import {Icons} from "@/components/icons";
import * as React from "react";
import Link from "next/link";
import {cn} from "@/lib/utils";
import { useSession, signIn, signOut } from 'next-auth/react';
import {useRouter} from "next/router";
import {useEffect} from "react";

export default function LoginPage() {


    return (
        <div className="flex-row lg:p-8 content-center items-center h-full justify-center w-full">
           <div className="flex flex-row justify-end">
               <Link
                   href="/signup"
                   className={cn(
                       buttonVariants({variant: "ghost"}),
                       "m-4 "
                   )}
               >
                   Sign Up
               </Link>
           </div>
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col space-y-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Login
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Use Github to login
                    </p>
                </div>
                <Button variant="outline" type="button" onClick={() => signIn()}>
                    <Icons.gitHub className="mr-2 h-4 w-4" />
                    Github
                </Button>
            </div>
        </div>
    )
}
