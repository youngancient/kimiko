import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Container from "./Container";

const Faq: React.FC = () => {
  const data = [
    {
      title: "What is Kimiko?",

      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus beatae delectus odit ut iste veritatis eum adipisci id rerum reprehenderit quis sed nisi corrupti vitae eius, quas voluptatum atque voluptates.",
    },
    {
      title: "How does Kimiko help me manage my meds?",

      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus beatae delectus odit ut iste veritatis eum adipisci id rerum reprehenderit quis sed nisi corrupti vitae eius, quas voluptatum atque voluptates.",
    },
    {
      title: "How does Kimiko help me track my health?",

      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus beatae delectus odit ut iste veritatis eum adipisci id rerum reprehenderit quis sed nisi corrupti vitae eius, quas voluptatum atque voluptates.",
    },
    {
      title: "How can I get started with Kimiko?",

      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus beatae delectus odit ut iste veritatis eum adipisci id rerum reprehenderit quis sed nisi corrupti vitae eius, quas voluptatum atque voluptates.",
    },
    {
      title: "Is Kimiko safe and secure?",

      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus beatae delectus odit ut iste veritatis eum adipisci id rerum reprehenderit quis sed nisi corrupti vitae eius, quas voluptatum atque voluptates.",
    },
  ];


  const [filteredData, setFilteredData] = useState(data);

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  

  const handleQuestionClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };


  const [isAnimated, setIsAnimated] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const element = document?.getElementById("faq-section");

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
    <div id="faq-section" className="bg-[#CCE4FF] dark:bg-black">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex relative flex-col gap-10 md:items-center justify-center"
        >
          <div className="flex flex-col justify-center items-center gap-2">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={isAnimated ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="md:leading-[52px] text-[#091E42] dark:text-white py-2 md:text-4xl text-center text-3xl font-extrabold"
            >
              Frequently Asked Questions (FAQS)
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={isAnimated ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-md font-normal text-center text-[#667085] dark:text-white"
            >
              Your Questions, Our Answers: Navigating Kimiko with Confidence
            </motion.p>
          </div>

          <>
            {filteredData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={isAnimated ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5}}
                className="cursor-pointer p-3 w-full px-3 bg-[#B2D7FF] rounded-xl"
              >
                <div
                  className="flex items-center justify-between mb-4"
                  onClick={() => handleQuestionClick(index)}
                >
                  <div className="flex w-full justify-between items-center">
                    <div className="flex flex-col p-3 gap-4">
                      <span className="text-[#091E42] w-[200px] md:w-full font-bold text-lg lg:text-xl">
                        {item.title}
                      </span>
                    </div>
                    <span>
                      {expandedIndex === index ? (
                        <svg
                          width="37"
                          height="37"
                          viewBox="0 0 37 37"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19 13H5"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="37"
                          height="37"
                          viewBox="0 0 37 37"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19.375 13.625C19.375 13.0037 18.8713 12.5 18.25 12.5C17.6287 12.5 17.125 13.0037 17.125 13.625L17.125 17H13.75C13.1287 17 12.625 17.5037 12.625 18.125C12.625 18.7464 13.1287 19.25 13.75 19.25H17.125V22.625C17.125 23.2463 17.6287 23.75 18.25 23.75C18.8713 23.75 19.375 23.2463 19.375 22.625L19.375 19.25H22.75C23.3713 19.25 23.875 18.7464 23.875 18.125C23.875 17.5037 23.3713 17 22.75 17H19.375V13.625Z"
                            fill="white"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.25 2C9.34441 2 2.125 9.21941 2.125 18.125C2.125 27.0306 9.34441 34.25 18.25 34.25C27.1556 34.25 34.375 27.0306 34.375 18.125C34.375 9.21941 27.1556 2 18.25 2ZM4.375 18.125C4.375 10.462 10.587 4.25 18.25 4.25C25.913 4.25 32.125 10.462 32.125 18.125C32.125 25.788 25.913 32 18.25 32C10.587 32 4.375 25.788 4.375 18.125Z"
                            fill="white"
                          />
                        </svg>
                      )}
                    </span>

                  </div>
                </div>
                <Transition
                  show={expandedIndex === index}
                  enter="transition-opacity duration-50"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity duration-50"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="text-gray p-3 text-base">{item.answer}</div>
                </Transition>
              </motion.div>
            ))}
          </>
        </motion.div>
      </Container>
    </div>
  );
};

export default Faq;
