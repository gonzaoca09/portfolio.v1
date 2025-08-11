"use client"

import { useState } from "react";

export default function ToggleComponent() {
  const [option, setOption] = useState("form"); // "form" es la opción por defecto

  return (
    <div>
      <div className=" grid grid-cols-2 items-center justify-items-center  z-10  h-8 mb-5 border-2 p-8 rounded-lg w-3xl hover:shadow-lg shadow-stone-800  bg-[#3e3e3e] border-gray-900 hover:border-gray-500 transition-all duration-300">
        <button
          onClick={() => setOption("form")}
          className={option === "form" ? "active" : ""}
        >
         <span> Fill a Form 📖</span> 
        </button>
        <button
          onClick={() => setOption("call")}
          className={option === "call" ? "active" : ""}
        >
          <span> Quick Connect 📩</span> 
        </button>
      </div>

      <div>
        {option === "form" ? (
          <FormComponent />
        ) : (
          <QuickConnectComponent />
        )}
      </div>
    </div>
  );
}

function FormComponent() {
  return (
    <>
    <div className=" relative z-10 bg-[#3e3e3e] border-2 p-8 rounded-lg w-3xl hover:shadow-lg shadow-stone-800 border-gray-900 hover:border-gray-500 transition-all duration-300">
        <p className="font-google mb-5 text-lg">If you want to know more about me or my work, or if you would just like to say hello, send me a message. I&apos;d love to hear from you. 🪴</p>
        <form action="post">
            <div className="grid grid-cols-2 gap-4">
                <input type="text" id="name" placeholder="Name" className="w-full p-2 mt-2 border border-[#3e3e3e] rounded-lg bg-[#1c1c1c] text-white"/>
                <input type="email" id="email" placeholder="Email" className="w-full p-2 mt-2 border border-[#3e3e3e] rounded-lg bg-[#1c1c1c] text-white"/>
            </div>
            <textarea placeholder="Hey, How it's going?" className="w-full p-2 mt-2 border border-[#3e3e3e] rounded-lg h-32 bg-[#1c1c1c] text-white"></textarea>
            <button className="btn mt-2 w-full rounded-box bg-linear-to-r from-[#1D5CFC] to-[#4F3AF7] border-[#3e3e3e] text-gray-200">Send</button>
        </form>
    </div>
    </>
  )
}

function QuickConnectComponent() {
  return (
    <>
      <div className=" relative z-10 bg-[#3e3e3e] border-2 p-8 rounded-lg w-3xl hover:shadow-lg shadow-stone-800 border-gray-900 hover:border-gray-500 transition-all duration-300">
        <p className="font-google mb-5 text-lg"></p>
        <form action="post">
            <div className="grid grid-cols-2 gap-4">
                <input type="text" id="name" placeholder="Name" className="w-full p-2 mt-2 border border-[#3e3e3e] rounded-lg bg-[#1c1c1c] text-white"/>
                <input type="email" id="email" placeholder="Email" className="w-full p-2 mt-2 border border-[#3e3e3e] rounded-lg bg-[#1c1c1c] text-white"/>
            </div>
            <textarea placeholder="Hey, How it's going?" className="w-full p-2 mt-2 border border-[#3e3e3e] rounded-lg h-32 bg-[#1c1c1c] text-white"></textarea>
            <button className="btn mt-2 w-full rounded-box bg-linear-to-r from-[#1D5CFC] to-[#4F3AF7] border-[#3e3e3e] text-gray-200">Send</button>
        </form>
    </div>
    </>
  );
}