import {Metadata} from "next";
import {Progress} from "@/components/ui/progress";
import * as React from "react";


export const metadata: Metadata = {
    title: "Logout",
    description: "Logout from TikPedia.",
}

export default function LogoutPage() {

    return (
        <div>
            <h2 className="text-3xl font-bold tracking-tight">Logout....</h2>
            <Progress value={33} />
        </div>
    )

}


