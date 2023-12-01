import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Transition } from "@headlessui/react";
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

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleQuestionClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  // Your gsap animation code...

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredData(filtered);
  };

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
    <div className=" bg-[#CCE4FF] dark:bg-black">
      <Container>
        <div className=" flex relative flex-col     gap-10 md:items-center justify-center">
          <div
            ref={headingRef}
            className="flex flex-col justify-center  items-center gap-2"
          >
            <h1 className="md:leading-[52px] text-[#091E42] dark:text-white py-2 md:text-4xl text-center   text-3xl font-extrabold">
              Frequently Asked Questions (FAQS)
            </h1>
            <p className="text-md  font-normal text-center  text-[#667085] dark:text-white">
              Your Questions, Our Answers: Navigating Kimiko with Confidence
            </p>
          </div>

          <>
            {filteredData.map((item, index) => (
              <div
                key={index}
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
                    </span>
                  </div>
                </div>
                <Transition
                  show={expandedIndex === index}
                  enter="transition-opacity duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="text-gray p-3 text-base">{item.answer}</div>
                </Transition>
              </div>
            ))}
          </>
        </div>
      </Container>
    </div>
  );
};

export default Faq;
