import Image from "next/image";
import Container from "./Container";
import { useRouter } from "next/router";


interface HeroProps { }

const Hero: React.FC<HeroProps> = () => {
    const router = useRouter();
    return (
        <>
            <Container className="flex flex-wrap lg:flex-row-reverse">
                <div className="flex items-center justify-center w-full lg:w-1/2">
                    <div className="relative">
                        <Image
                            src="/Hero.svg"
                            width="616"
                            height="617"
                            className={"object-cover "}
                            alt="Hero Illustration"
                            placeholder="empty"
                        />
                    <div className="absolute bottom-0 right-20   xl:right-[200px]">
                        <Image
                            src="/HeroSecond.svg"
                            width="616"
                            height="617"
                            className={"object-cover"}
                            alt="Hero Illustration"
                            placeholder="empty"
                        />
                    </div>
                    </div>
                </div>
                <div className="flex items-center w-full mt-10 lg:w-1/2">
                    <div className="max-w-2xl flex flex-col gap-10 mb-8">
                        <div>
                        <h1 className="text-4xl font-bold leading-snug tracking-tight text-blue lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                            Never Miss a Dose !
                        </h1>
                        <p className="py-5 text-xl leading-normal text-black lg:text-lg  dark:text-white">
                            Manage Your Meds Like a Pro with Kimiko managing a chronic condition like diabetes or hypertension long-term can feel overwhelming. Juggling multiple medications along with doctor appointments and lifestyle changes is a constant balancing act.
                        </p>
                        </div>

                        <div className="flex flex-row md:flex-row gap-10 items-center">
                            <button className="px-10 py-3 whitespace-nowrap text-white bg-blue rounded-full " onClick={()=> router.push("/auth/signup")}>
                                Create Account
                            </button>
                            <button className="px-10 py-3 whitespace-nowrap text-blue border bg-white rounded-full ">
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
