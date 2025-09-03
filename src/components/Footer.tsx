import Link from "next/link";
import { GitIcon, XIcon, LnIcon } from './icons/icons';
import CenterUnderline from './fancy/text/underline-center';

export default function Footer() {
    return (
        <footer className="flex justify-between bg-[#1a1a1a] rounded-4xl text-white py-15 px-25 max-w-4xl min-w-10/12 min-h-50 my-25">
            <div className="flex flex-col gap-8 text-center">
                <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
                <p className=" text-sm">Made with ❤️ by Gonzalo</p>
            </div>
            <div className="flex flex-col gap-3">
                <h6 className="font-google">General</h6>
                <ul className="flex flex-col gap-3">
                    <li><Link href="/"><CenterUnderline>Home</CenterUnderline></Link></li>
                    <li><Link href="/about"><CenterUnderline>About me</CenterUnderline></Link></li>
                    <li><Link href="/work"><CenterUnderline>Work</CenterUnderline></Link></li>
                    <li><Link href="/blog"><CenterUnderline>Blogs</CenterUnderline></Link></li>
                    <li><Link href="/contact"><CenterUnderline>Contact</CenterUnderline></Link></li>
                </ul>
            </div>
            <div className="flex flex-col gap-3">
                <h6 className="font-google">Social</h6>
                <ul className="flex flex-col gap-2">
                    <li ><Link className="flex gap-2" href=""><GitIcon /><CenterUnderline>Git Hub</CenterUnderline></Link></li>
                    <li ><Link className="flex gap-2" href=""><LnIcon /><CenterUnderline>Linkedin</CenterUnderline></Link></li>
                    <li ><Link className="flex gap-2" href=""><XIcon /><CenterUnderline>Twitter</CenterUnderline></Link></li>
                </ul>
            </div>
        </footer>
    );
}