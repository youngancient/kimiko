import Image from "next/image";
import React from "react";
import Container from "./Container";

interface Feature {
    image: string;
    text: string;
    header: string;
    learnMoreText: string;
}

const Features: React.FC = () => {
    const features: Feature[] = [
        {
            image: "/Hero.svg",
            header: "Medication Delivery",
            text: "Share a real testimonial that hits some of your benefits from one of your popular customers.",
            learnMoreText: "Learn More >",
        },
        {
            image: "/Hero.svg",
            header: "Effective Reminders",
            text: "Make sure you only pick the right sentence to keep it short and simple.",
            learnMoreText: "Learn More >",
        },
        {
            image: "/Hero.svg",
            header: "Effective Reminders",
            text: "This is an awesome landing page template I've seen. I would use this for anything.",
            learnMoreText: "Learn More >",
        },
        {
            image: "/Hero.svg",
            header: "Doctor Collaboration",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam quibusdam id ipsa harum quos repellat aliquid qui ducimus placeat cum ullam consequatur repudiandae dignissimos explicabo, obcaecati, quis ad dolore modi?",
            learnMoreText: "Learn More >",
        },
        {
            image: "/Hero.svg",
            header: "Rewarding Motivations",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam quibusdam id ipsa harum quos repellat aliquid qui ducimus placeat cum ullam consequatur repudiandae dignissimos explicabo, obcaecati, quis ad dolore modi?",
            learnMoreText: "Learn More >",
        },
    ];

    return (
        <div className="mt-10 bg-[#FBFBFD] p-2">
            <div className="flex flex-col gap-3 items-center justify-center">
                <h1 className="lg:w-[577px] text-[#006] text-2xl lg:text-6xl font-bold">Distinctive Features</h1>
                <span className="lg:w-[703px] text-center text-black">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam quibusdam id ipsa harum quos repellat aliquid qui ducimus placeat cum ullam consequatur repudiandae dignissimos explicabo, obcaecati, quis ad dolore modi?
                </span>
            </div>
            <Container>
                <div className="grid grid-flow-col auto-cols-fr features gap-10 justify-center">
                    {features.map((feature, index) => (
                        <div key={index} className="md:max-w-[300px] lg:max-w-[450px] border-2 rounded-lg border-gray border-opacity-10 ">
                            <div className="flex flex-col gap-6 justify-between w-full h-full  px-10 rounded-2xl py-10 dark:bg-trueGray-800">
                                <Image src={feature.image} width="40" height="40" alt="Avatar" className="rounded-lg" />
                                <h1 className="font-bold text-2xl whitespace-nowrap">{feature.header}</h1>
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
