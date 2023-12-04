import React, { useEffect, useState } from "react";
import Container from "./Container";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

interface Step {
  number: string;
  text: string;
}

const Benefit: React.FC = () => {
  const steps: Step[] = [
    {
      number: "Reduce healthcare costs through improved adherence",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis nemo, eius repellendus repudiandae alias neque doloribus quam placeat ipsam optio dolores fugiat, eligendi, eaque quisquam cumque iste facilis hic tempore!",
    },
    {
      number: "Focus on your health, not intricate medication schedules",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis nemo, eius repellendus repudiandae alias neque doloribus quam placeat ipsam optio dolores fugiat, eligendi, eaque quisquam cumque iste facilis hic tempore!",
    },
    {
      number: "Build healthy habits with personalized support",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis nemo, eius repellendus repudiandae alias neque doloribus quam placeat ipsam optio dolores fugiat, eligendi, eaque quisquam cumque iste facilis hic tempore!",
    },
    {
      number: "Empowerment through education and doctor collaboration",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis nemo, eius repellendus repudiandae alias neque doloribus quam placeat ipsam optio dolores fugiat, eligendi, eaque quisquam cumque iste facilis hic tempore!",
    },
  ];

  const [isAnimated, setIsAnimated] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const element = document?.getElementById("benefit-section");

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
    <div id="benefit-section" className="bg-white dark:bg-black">
      <Container>
        <div className="flex flex-col lg:flex-row   gap-6 items-center justify-start mt-5">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isAnimated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <Image
              src="/benefit.png"
              width="600"
              height="230"
              className={"object-cover w-full"}
              alt="Kimiko"
              placeholder="empty"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isAnimated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
          >
            <div className="flex flex-col gap-3  items-start justify-start">
              <span className="uppercase  text-blue font-bold">
                Benefit Surplus
              </span>
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={isAnimated ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="lg:w-[577px] overflow-hidden  text-[#006] dark:text-white text-3xl lg:text-5xl font-bold"
              >
                Distinctive Features
              </motion.h1>
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={isAnimated ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="lg:w-[703px]  text-black dark:text-white"
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perspiciatis nemo, eius repellendus repudiandae alias neque
                doloribus quam placeat ipsam optio dolores fugiat, eligendi,
                eaque quisquam cumque iste facilis hic tempore!
              </motion.span>
            </div>

            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={isAnimated ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="mt-5 border p-3 rounded-lg border-[#FBFBFD] bg-[#FBFBFD]"
              >
                <span className="flex items-center gap-2">
                  <svg
                    className="w-8 h-8 lg:w-5 lg:h-5"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="10.5"
                      cy="10.5"
                      r="9.5"
                      fill="#1A87FF"
                      stroke="#CCE4FF"
                    />
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

                <p className="text-normal lg:w-[510px]  font-normal text-black">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default Benefit;
