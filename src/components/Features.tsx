import Image from "next/image";
import React, { ReactNode } from "react";
import Container from "./Container";
import { IconWrapperStyles } from "@/styles/Icon/Icon";
import { Delivery, DocIcon, Education, RewardIcon, ReminderIcon } from "./Icons/Icons";

interface Feature {
    icon : ReactNode;
    color: string;
    text: string;
    header: string;
    learnMoreText: string;
}

const Features: React.FC = () => {
    const features: Feature[] = [
        {
            icon : <Delivery />,
            color : "#D7ECFF",
            header: "Medication Delivery",
            text: "Share a real testimonial that hits some of your benefits from one of your popular customers.",
            learnMoreText: "Learn More >",
        },
        {
            icon : <ReminderIcon />,
            color : "#F9EDC4",
            header: "Effective Reminders",
            text: "Make sure you only pick the right sentence to keep it short and simple.",
            learnMoreText: "Learn More >",
        },
        {
            icon: <Education />,
            header: "Effective Reminders",
            color : "#E7F6EC",
            text: "This is an awesome landing page template I've seen. I would use this for anything.",
            learnMoreText: "Learn More >",
        },
        {
            icon: <DocIcon />,
            header: "Doctor Collaboration",
            color : "#E7F6EC",
            text: "Your care team tracks adherence to proactively prevent issues",
            learnMoreText: "Learn More >",
        },
        {
            icon : <RewardIcon />,
            color : "#FFE7CC",
            header: "Rewarding Motivations",
            text: "Achieve your health goals and earn points to treat yourself",
            learnMoreText: "Learn More >",
        },
    ];

    return (
        <div className="mt-10 bg-[#FBFBFD] p-2">
            <div className="flex flex-col gap-3  items-center justify-center">
                <h1 className="lg:w-[577px] overflow-hidden mt-10 text-[#006] text-3xl lg:text-5xl font-bold">Distinctive Features</h1>
                <span className="lg:w-[703px] text-center p-3 lg:p-0 text-black">
                With Kimiko, you get a smart and simple way to take your meds, track your health, and connect with your care team.
                </span>
            </div> 
            <Container>
                <div className="grid grid-flow-col auto-cols-fr features gap-10 justify-center">
                    {features.map((feature, index) => (
                        <div key={index} className="md:max-w-[300px] lg:max-w-[450px] border-2 rounded-lg border-gray border-opacity-10 ">
                            <div className="flex flex-col gap-6 justify-between w-full h-full  px-4 rounded-2xl py-10 dark:bg-trueGray-800">
                                <IconWrapperStyles color={feature.color}>
                                    {feature.icon}
                                </IconWrapperStyles>
                                <h1 className="font-bold text-xl lg:text-2xl whitespace-nowrap">{feature.header}</h1>
                                <p className="text-base text-black leading-normal dark:text-white">{feature.text}</p>
                                <span className="text-gray font-bold cursor-pointer">{feature.learnMoreText}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Features;
