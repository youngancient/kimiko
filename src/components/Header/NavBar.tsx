import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";
import ThemeChanger from "../DarkSwitch";
import Image from "next/image";

const Layout = () => {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigation = ["Home", "Features", "About Us"];
    const router = useRouter();

    useEffect(() => {
        const closeDropdownOnClickOutside = (e: MouseEvent) => {
            if (isMenuOpen && dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('click', closeDropdownOnClickOutside);

        return () => {
            document.removeEventListener('click', closeDropdownOnClickOutside);
        };
    }, [isMenuOpen]);

    // const drawer = () => {
    //     setIsOpen(!isOpen);
    // };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="w-full " ref={dropdownRef}>
            <nav className="container overflow-x-hidden relative border-b border-[#CCE4FF] flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/">
                        <span className="flex items-center space-x-2 text-2xl font-medium">
                            <span>
                                <Image
                                    src="/Logo.svg"
                                    alt="N"
                                    width="142"
                                    height="40"
                                    className=""
                                />
                            </span>
                        </span>
                    </Link>

                    <div className="hidden text-center lg:flex lg:items-center">
                        <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
                            {navigation.map((menu, index) => (
                                <li className="mr-3 nav__item" key={index}>
                                    <Link
                                        href="/"
                                        className="inline-block px-4 py-2 text-lg font-bold text-gray dark:text-blue hover:text-blue focus:text-blue dark:focus:bg-gray dark:hover:text-white focus:outline-none"
                                    >
                                        {menu}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="hidden mr-3 space-x-4 lg:flex nav__item">
                        <Link href="/" passHref>
                            <button
                                className="px-10 py-3 text-white bg-blue rounded-full md:ml-5"
                                onClick={() => router.push("/auth/signup")}
                            >
                                Create Account
                            </button>
                        </Link>
                        <ThemeChanger />
                    </div>

                    {/* Responsive menu button for mobile */}
                    <div className="lg:hidden">
                        <button
                            aria-label="Toggle Menu"
                            aria-expanded={isMenuOpen}
                            onClick={toggleMenu}
                            className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                        >
                            <svg
                                className="w-6 h-6 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                                    />
                                ) : (
                                    <path
                                        fillRule="evenodd"
                                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Responsive side bar for mobile */}
            <aside className={` lg:hidden   transform top-0 bg-white dark:bg-black left-0 w-64 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <ul className="items-center flex flex-col gap-4 justify-center  pt-20 list-none lg:pt-0 lg:flex">
                    {navigation.map((menu, index) => (
                        <li className="mr-3 nav__item" key={index}>
                            <Link
                                href="/"
                                className="block px-4 py-2 text-lg font-bold text-gray dark:text-blue hover:text-blue focus:text-blue dark:focus:bg-gray dark:hover:text-white focus:outline-none"
                            >
                                {menu}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="lg:hidden flex flex-col mt-4 gap-4 items-center nav__item">
                    <Link href="/" passHref>
                        <button
                            className="px-10 py-3 text-white bg-blue rounded-full md:ml-5"
                            onClick={() => router.push("/auth/signup")}
                        >
                            Create Account
                        </button>
                    </Link>
                    <ThemeChanger />
                </div>
            </aside>
        </div>
    );
};

export default Layout;
