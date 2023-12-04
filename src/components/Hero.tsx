import Image from "next/image";
import Container from "./Container";
import { useRouter } from "next/router";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";


interface HeroProps { }

const Hero: React.FC<HeroProps> = () => {
    const router = useRouter();
    const svg1Ref = useRef<HTMLImageElement>(null);
    const svg2Ref = useRef<HTMLImageElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const tl = gsap.timeline();

        // Animate the first SVG to come from the right
        tl.fromTo(
            svg1Ref.current,
            { x: "100%" },
            { x: 0, opacity: 1, duration: 1 }
        );

        // Animate the heading to come from the left
        tl.fromTo(
            headingRef.current,
            { x: "-100%" },
            { x: 0, opacity: 1, duration: 1 },
            "-=0.5"
        );

        // Animate the second SVG to go to the center
        tl.fromTo(
            svg2Ref.current,
            { y: "-100%" },
            { y: 0, opacity: 1, duration: 1 },
            "-=0.5"
        );
    }, []);

    return (
        <>
            <Container className="flex flex-wrap lg:flex-row-reverse">
                <div ref={svg1Ref} className="flex  items-center justify-center w-full lg:w-1/2">
                    <div className="relative">
                        <Image
                            src="/Hero.svg"
                            width="517"
                            height="697"
                            className={"object-cover "}
                            alt="Hero Illustration"
                            placeholder="empty"
                        />
                    <div ref={svg1Ref} className="absolute top-0 left-0     ">
                        <Image
                            src="/Pill.svg"
                            width="108"
                            height="73"
                            className={"object-cover"}
                            alt="Hero Illustration"
                            placeholder="empty"
                        />
                    </div>
                    </div>
                    
                <div ref={svg1Ref} className="absolute -bottom-0  left-0   ">
                    <Image
                        src="/HeroSecond.svg"
                        width="330"
                        height="185"
                        className={"object-cover"}
                        alt="Hero Illustration"
                        placeholder="empty"
                    />
                </div>
                </div>
                <div ref={headingRef} className="flex items-center w-full mt-20 lg:w-1/2">
                    <div className="max-w-2xl flex flex-col gap-10 mb-8">
                        <div>
                        <h1 className="text-3xl font-bold leading-snug tracking-tight text-blue lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                            Never Miss a Dose !
                        </h1>
                        <p className="py-5 text-lg leading-normal text-black lg:text-lg  dark:text-white">
                            Manage Your Meds Like a Pro with Kimiko managing a chronic condition like diabetes or hypertension long-term can feel overwhelming. Juggling multiple medications along with doctor appointments and lifestyle changes is a constant balancing act.
                        </p>
                        </div>

                        <div className="flex flex-row md:flex-row justify-between lg:gap-8 lg:justify-start items-center">
                            <button className="px-2 py-3 whitespace-nowrap text-white bg-blue rounded-full " onClick={()=> router.push("/auth/signup")}>
                                Create Account
                            </button>
                            <button className="px-2 py-3 whitespace-nowrap text-blue border rounded-full ">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
                
            </Container>
        </>
    );
};

export default Hero;
