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
                    <li><Link rel="stylesheet" href="/" />Home</li>
                    <li><Link rel="icon" type="image/x-icon" href="https://example.com/favicon.ico" /></li>
                    <li><Link rel="apple-touch-icon" href="https://example.com/apple-touch-icon.png" /></li>
                    <li><Link rel="manifest" href="https://example.com/site.webmanifest" /></li>
                </ul>
            </div>
        </footer>
    );
}