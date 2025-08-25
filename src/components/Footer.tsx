import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex justify-between bg-gray-800 rounded-4xl text-white py-15 px-25 max-w-4xl min-w-10/12 min-h-50 my-25">
            <div className=" text-center">
                <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
            </div>
            <div>
                <h4 className="font-google">General</h4>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About me</Link></li>
                    <li><Link href="/work">Work</Link></li>
                    <li><Link href="/blog">Blogs</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
        </footer>
    );
}