"use client";
import { Paperclip } from '@/components/icons/Paperclip';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';

export default function Home() {

  const [isCopied, setIsCopied] = useState(false);

  const copy = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigator.clipboard.writeText('gonzaoca9@gmail.com');
    
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  

  return (
    <div className="grid grid-cols-1 items-center justify-items-center  pt-16 p-8 pb-20 gap-5">
     <div className="grid grid-cols-1 w-1/2 text-center gap-5">
     
        <h2 className=" z-10 font-size text-5xl leading-16">
          I help founders turn ideas into seamless <span className="font-bold">digital experiences</span>
        </h2>
        
        <h1 className=" z-10 font-google text-xl">
          Hello, I&apos;m Gonzalo Full Stack Developer
        </h1>
     </div>
     <div className=" z-10 grid grid-cols-2 gap-5">
        <button className="btn w-2/3 rounded-box bg-linear-to-r from-[#1D5CFC] to-[#4F3AF7]  border-[#3e3e3e] text-gray-200"><Link href="/contact">Let&apos;s connect</Link></button>
        <button onClick={copy} className="btn rounded-box">
          <Paperclip />
          {isCopied ? 'Copied to clipboard!' : 'gonzaoca9@gmail.com' } 
        </button>
        
     </div>
     
    </div>
 
  );
}
