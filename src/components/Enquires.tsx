import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import Container from "./Container";
import Link from "next/link";
import { useRouter } from "next/router";

const Enquires: React.FC = () => {
    const router = useRouter();
   

    return (
        <div className="relative bg-[#CCE4FF] rounded-b-xl pb-20 overflow-hidden dark:bg-black mt-10   mb-10">
            <Image
                src="/Enquires.svg"
                width="616"
                height="617"
                className={"absolute z-10 object-cover"}
                alt="Hero Illustration"
                placeholder="empty"
            />
            <div className="px-1 md:px-8 container mt-20 mx-auto xl:px-0">
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
                        <h1 className="md:leading-[52px] text-white  py-2 md:text-5xl text-center   text-3xl font-extrabold">
                            Use bla bla bla bla bla bla
                        </h1>
                        <p className="text-md  font-normal text-center  text-white md:w-[686px] dark:text-white">
                            Wisdom doctors go beyond surface-level appointments and help you treat the root cause of your health issues so you dont have to keep dealing with symptoms
                        </p>

                        <Link href="/" passHref>
                            <button
                                className="px-10 py-3 text-white bg-blue rounded-full md:ml-5"
                                onClick={() => router.push("/auth/signup")}
                            >
                                Sign Me Up To Premium
                            </button>
                        </Link>
                    </div>


                </div>
            </div>
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
