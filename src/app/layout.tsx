import type { Metadata } from "next";
import "./globals.css";
import Header from '../components/Navbar';
import Footer from "@/components/Footer";

 
export const metadata: Metadata = {
  title: "Gonzalo Ocaranza | Jr. Fullstack Developer Portfolio",
  description: "Portfolio Web - HGO",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) { 
  return (
    <html lang="en" data-theme="dark">
      <body

        className={` antialiased pt-10 `}
      >
        <Header />
        <main className="container w-full my-18">{children}</main>
         <Footer />
      </body>
    </html>
  );
}
