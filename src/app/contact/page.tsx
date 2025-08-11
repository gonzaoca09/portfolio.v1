// Dummy imports

export default async function Page() {
 
 
  return (
    <>
    <div className="grid grid-cols-1 items-center justify-items-center  pt-16 p-8 pb-20 gap-5 ">
      <div className="bg-gray-800 p-10 rounded-lg border-2 border-gray-700  hover:border-gray-500 transition-all duration-300">
        <div className="bg-gray-700 hover:shadow-xl/20 p-8 rounded-lg w-3xl transition-all duration-300">
          <h1 className="text-3xl font-bold">Let&apos;s connect 🚀</h1>
          <h2 className="m-3 font-google">If you want to know more about me or my work, or if you would just like to say hello, send me a message. I&apos;d love to hear from you.
          </h2>
          <form action="">
            <input type="text" placeholder="Email" className="w-full p-2 mt-2 border border-gray-300 rounded-lg bg-white text-black"/>
            <textarea placeholder="Message" className="w-full p-2 mt-2 border border-gray-300 rounded-lg h-32 bg-white text-black"></textarea>
            <button className="btn mt-2 w-full rounded-box bg-gray-500 border-gray-200 shadow-emerald-800">Send</button>
          </form>
        </div>
      </div>

    </div>
    
    </>
      
  )
}
