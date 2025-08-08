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
  };

  

  return (
    <div className="grid grid-cols-1 items-center justify-items-center  pt-16 p-8 pb-20 gap-5">
     <div className="grid grid-cols-1 w-1/2 text-center gap-5">
       <h2 className="font-size text-5xl leading-16">
        I help founders turn ideas into seamless <span className="font-bold">digital experiences</span>
      </h2>
      <h1 className="font-google text-xl">
        Hello, I&apos;m Gonzalo Full Stack Developer
      </h1>
     </div>
     <div className="grid grid-cols-2 gap-5">
      <button className="btn btn-primary"><Link href="/contact">Let&apos;s connect</Link></button>
      <button onClick={copy} className="btn cursor-copy">
        <Paperclip />
         {isCopied ? 'Copied to clipboard!' : 'gonzaoca9@gmail.com' } 
      </button>
     </div> 
    </div>

  );
}
