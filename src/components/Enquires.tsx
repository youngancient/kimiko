import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Container from "./Container";
import Link from "next/link";
import { useRouter } from "next/router";

const Enquires: React.FC = () => {
    const router = useRouter();
    const [isAnimated, setIsAnimated] = useState(false);
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const element = document?.getElementById("enquires-section");

            if (element) {
                const elementPosition = element.offsetTop;
                const elementHeight = element.offsetHeight;

                const isScrollIn = scrollPosition > elementPosition - window.innerHeight / 2;
                const isScrollOut = scrollPosition < elementPosition - window.innerHeight / 2 - elementHeight;

                if (isScrollIn || isScrollOut) {
                    setIsAnimated(true);
                    controls.start({ opacity: 1, y: 0 });
                } else {
                    setIsAnimated(false);
                    controls.start({ opacity: 0, y: -20 });
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [controls]);
    return (
        <div 
            id="enquires-section"
        className="relative bg-[#CCE4FF] rounded-b-xl pb-20 overflow-hidden dark:bg-black mt-10   mb-10">
            <Image
                src="/Enquires.svg"
                width="616"
                height="617"
                className={"absolute z-10 object-cover"}
                alt="Hero Illustration"
                placeholder="empty"
            />
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={isAnimated ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
            className="px-1 md:px-8 container mt-20 mx-auto xl:px-0">
                <div className=" flex  flex-col     gap-10 md:items-center justify-center">
                    <Image
                        src="/Smiling lady.jpg"
                        width="1350"
                        height="721"
                        className={"object-cover w-full rounded-2xl h-[521px] relative"}
                        alt="Hero Illustration"
                        placeholder="empty"
                    />
                    <div

                        className="flex absolute flex-col justify-center  items-center gap-10"
                    >

                        <span
                            className="px-1 py-2 mx-3 text-[#1F4D36] bg-[#B2D7FF] rounded-lg"
                        >
                            We thrive where conventional medicine is ignored
                        </span>
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={controls}
                            transition={{ duration: 0.5 }}
                            className="md:leading-[52px] text-white py-2 md:text-5xl text-center text-3xl font-extrabold"
                        >
                            Use bla bla bla bla bla bla
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: -20 }}
                            animate={controls}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-md font-normal text-center text-white md:w-[686px] dark:text-white"
                        >
                            Wisdom doctors go beyond surface-level appointments and help you treat the root cause of your health issues so you dont have to keep dealing with symptoms
                        </motion.p>

                        <Link href="/" passHref>
                            <motion.button
                                initial={{ opacity: 0, y: -20 }}
                                animate={controls}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="px-10 py-3 text-white bg-blue rounded-full md:ml-5"
                                onClick={() => router.push("/auth/signup")}
                            >
                                Sign Me Up To Premium
                            </motion.button>
                        </Link>
                    </div>


                </div>
            </motion.div>
            <Image
                src="/Scribble.svg"
                width="730"
                height="176"
                className={" z-10 absolute right-0 object-cover"}
                alt="Hero Illustration"
                placeholder="empty"
            />
        </div>
    );
};

export default Enquires;
