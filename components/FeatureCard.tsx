"use client"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import Lottie from "lottie-react";
import Gradient from 'rgt'

import  ai from "@/public/animations/ai.json";
import  pub from "@/public/animations/pub.json";
import  analytics from "@/public/animations/analytics.json";
import  knowledge from "@/public/animations/knowledge.json";
import  video from "@/public/animations/video.json";
import  settings from "@/public/animations/settings.json";
import { useState} from "react";


const features = [
    {
        title: "AI Video Creation",
        description: "Create videos using AI",
        animationFile: ai,
    },
    {
        title: "Publishing",
        description: "Publish videos to TikTok and YouTube",
        animationFile: pub,
    },
    {
        title: "Analytics",
        description: "Track your videos performance",
        animationFile: analytics,
    },
    {
        title: "Personalization",
        description: "Customize your videos",
        animationFile: settings,
    },
    {
        title: "Knowledge",
        description: "Wikipedia articles for your videos",
        animationFile: knowledge,
    },
    {
        title: "Automated Video Editing",
        description: "Automated video editing with audio and video effects",
        animationFile: video,
    }
]


function FeatureCard({title, description, animationFile}: {
    title: string,
    description: string,
    animationFile: any
}) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        console.log("enter")
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        console.log("leave")
        setIsHovered(false);
    };

    const defaultOptions = {
        loop: true,
        autoplay: isHovered,
        animationData: animationFile,
    };


    const emptyOptions = {
        loop: false,
        autoplay: false,
        animationData: animationFile,
    };


    return (
        <Card className={"flex flex-col"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <CardHeader>
                <div className={"w-full"}>
                    {isHovered ? (
                        <Lottie key="hoveredAnimation" {...defaultOptions} style={{height: 200}} />
                    ) : (
                        <Lottie key="emptyAnimation" {...emptyOptions} style={{height: 200}} />
                    )}
                </div>

                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>{description}</CardDescription>
            </CardContent>
        </Card>
    )
}

export default function Features() {

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
                    TikPedia anaylize current trends and create videos using AI. You can publish videos to TikTok and
                    YouTube.
                    You can also track your videos performance and customize your videos. TikPedia also provides
                    Wikipedia articles for your videos.
                </p>
            </div>
            <div className={"flex flex-row basis-full sm:justify-center"}>
                <div className={"grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-8"}>
                    {features.map((feature, index) => (
                       <FeatureCard
                           title={feature.title}
                           description={feature.description}
                           animationFile={feature.animationFile}
                           key={feature.title}
                       />
                    ))}
                </div>
            </div>
        </div>
    )
}
