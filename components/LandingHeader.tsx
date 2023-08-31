"use client"
import Lottie from "lottie-react";
import Gradient from 'rgt'
import server from "@/public/animations/server.json";

function Title() {
    return (
        <h1 className="relative max-w-2xl text-5xl font-semibold text-center sm:text-left md:text-6xl lg:text-7xl u-text-gray-900">
            <Gradient dir="left-to-right" from="#00DFD8" to="#007CF0">
                TikPedia
            </Gradient>
        </h1>
    )
}

export function LandingHeader() {

    return (
        <div className={"flex flex-row w-full gap-8 justify-between"}>

            <div className={"flex flex-col m-8 gap-8 self-center basis-2/4"}>
                {Title()}
                <div className={"flex flex-row"}>
                    <h2
                        className="max-w-lg text-xl text-center text-gray-500 sm:w-3/5 sm:text-left dark:text-gray-100 leading-8 selectable"
                    >
                        TikPedia is a SaaS platform for creating and managing video content produced by AI.
                    </h2>
                </div>


            </div>
            <div className={"flex m-4 justify-end basis-4/4" }>
                <Lottie animationData={server} style={{height: 500}} />
            </div>
        </div>
    )
}
