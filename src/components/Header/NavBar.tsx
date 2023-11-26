import Link from "next/link";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import ThemeChanger from "../DarkSwitch";
import { useRouter } from "next/router";

const Navbar: React.FC = () => {
    const navigation = ["Home", "Features", "About Us"];
    const router = useRouter();
    return (
        <div className="w-full">
            <nav className="container border-b border-[#CCE4FF] relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
                {/* Logo  */}
                <Disclosure>
                    {({ open }) => (
                        <>
                            <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                                <Link href="/">
                                    <span className="flex items-center space-x-2 text-2xl font-medium ">
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

                                <Disclosure.Button
                                    aria-label="Toggle Menu"
                                    className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                                >
                                    <svg
                                        className="w-6 h-6 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        {open ? (
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
                                </Disclosure.Button>

                                <Disclosure.Panel className="flex flex-col gap-6 items-center shadow w-full my-5 p-10 lg:hidden">
                                    {navigation.map((item, index) => (
                                        <Link key={index} href="/" passHref>
                                            <Link href="/" className="w-full px-4 py-2 -ml-4 text-xl text-gray font-bold rounded-md dark:text-blue hover:text-blue focus:text-blue  dark:focus:bg-gray focus:outline-none">
                                                {item}
                                            </Link>
                                        </Link>
                                    ))}
                                    <Link href="/" passHref>
                                        <Link href="/" className="w-full px-6 py-2 mt-3 text-center text-white bg-blue rounded-md lg:ml-5">
                                            Get Started
                                        </Link>
                                    </Link>

                                    <ThemeChanger />
                                </Disclosure.Panel>
                            </div>
                        </>
                    )}
                </Disclosure>

                {/* menu  */}
                <div className="hidden text-center lg:flex lg:items-center">
                    <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
                        {navigation.map((menu, index) => (
                            <li className="mr-3 nav__item" key={index}>
                                {/* <Link href="/" passHref> */}
                                    <Link href="/" className="inline-block px-4 py-2 text-lg font-bold text-gray dark:text-blue hover:text-blue focus:text-blue  dark:focus:bg-gray dark:hover:text-white focus:outline-none">
                                        {menu}
                                    </Link>
                                {/* </Link> */}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="hidden mr-3 space-x-4 lg:flex nav__item">
                    <Link href="/" passHref>
                        <button className="px-10 py-3 text-white bg-blue rounded-full md:ml-5" onClick={()=> router.push("/auth/signup")}>
                            Create Account
                        </button>
                    </Link>

                    <ThemeChanger />
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
