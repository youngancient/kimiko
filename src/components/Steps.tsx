import React, { useEffect, useState } from "react";
import Container from "./Container";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

interface Step {
  number: string;
  text: string;
}

const Steps: React.FC = () => {
  const steps: Step[] = [
    { number: "Step 1", text: "Create an account on Kimiko by registering with your necessary credentials" },
    { number: "Step 2", text: "Create your profile and enter your medication details" },
    { number: "Step 3", text: "Set your reminders and preferences." },
    { number: "Step 4", text: "Connect with your caregiver and doctor to share your real-time progress about your health" },
  ];

  const [isAnimated, setIsAnimated] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const element = document?.getElementById("steps-section");

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
    <div id="steps-section" className="bg-[#3395FF] dark:bg-black">
      <Container>
        <div className="flex flex-col gap-3 items-start justify-start">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={isAnimated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:w-[577px] overflow-hidden mt-10 text-white text-3xl lg:text-5xl font-bold"
          >
            Its quick and simple to get started
          </motion.h1>
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={isAnimated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:w-[703px] text-white"
          >
            You can start using Kimiko in just four steps
          </motion.span>
        </div>
        <div className="flex flex-col lg:flex-row-reverse gap-3 items-center justify-start mt-5">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isAnimated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <Image
              src="/kimiko.png"
              width="616"
              height="617"
              className={"object-cover"}
              alt="Kimiko"
              placeholder="empty"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isAnimated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="w-full border-2 p-3 lg:p-10 rounded-xl border-gray bg-[#F3F9FF] border-opacity-10"
          >
            {steps.map((item, index) => (
              <div className="mt-5 " key={index}>
                <span className="flex items-center gap-2">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="10.5" cy="10.5" r="9.5" fill="#1A87FF" stroke="#CCE4FF" />
                    <path
                      d="M6.5 10.5L9.5 13.5L14.5 8.5"
                      stroke="#CCE4FF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <h1 className="font-bold text-lg dark:text-black">{item.number}</h1>
                </span>

                <p className="text-normal lg:w-[510px] font-normal text-black">
                  {item.text}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default Steps;

