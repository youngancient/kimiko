import { useEffect, useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const ScrollUp: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.pageYOffset > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            className={`${isVisible
                    ? 'block'
                    : 'hidden'
                } fixed bottom-5 right-5 p-2 rounded-full bg-blue text-white cursor-pointer`}
            onClick={scrollToTop}
        >
            <BsFillArrowUpCircleFill size={20}/>
        </button>
    );
};

export default ScrollUp;
