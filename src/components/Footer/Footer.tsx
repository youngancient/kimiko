import { FooterStyle } from "@/styles/Footer/Footer";
import { Logo } from "../Icons/Icons";
import Link from "next/link";
import { Facebook, Insta, Linkedin, X } from "../Icons/Socials";

interface ILinks {
    name : string;
    href : string;
}
const Links:ILinks[] = [
    {name : "Home", href : "#"},
    {name : "Features", href : "#"},
    {name : "Help", href : "#"},
    {name : "Privacy", href : "#"},
]

const Footer = () => {
    return (  
        <FooterStyle className="dark:bg-black dark:text-white">
            <div className="first">

            <div className="logo">
                <Logo />
            </div>
            <div className="links ">
                {Links.map(({name,href})=>(
                    <Link href={href} key={name}><p>{name}</p></Link>
                ))}
            </div>
            </div>
            <div className="socials">
                <Link href="#"><Facebook /></Link>
                <Link href="#"><X /></Link>
                <Link href="#"><Insta /></Link>
                <Link href="#"><Linkedin /></Link>
            </div>
        </FooterStyle>
    );
}
 
export default Footer;