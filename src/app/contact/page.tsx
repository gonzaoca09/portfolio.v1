import sendEmail from "../api/sendEmail";


 

export default async function Page() {

  
  // This function is used to send an email when the form is submitted.
  async function handleSubmit(formData: FormData) {
    "use server";
    
    await sendEmail(formData);
  }

  return (
    <>
    <section className="grid grid-cols-1 items-center justify-items-center  gap-5 ">
      <div className=" z-10 grid grid-rows-1 mb-2 w-auto ">
          <h2 className="font-google">CONTACT</h2>
          <h1 className="text-5xl font-bold mb-6">Get in touch🚀</h1>
      </div>
    <div>
      <div className="tabs tabs-border justify-center">
        <input type="radio" name="my_tabs_2" className="tab " aria-label="Fill a Form 📖" defaultChecked/>
        {/*TODO arreglar el espaciado de los componentes */}
        <div className="tab-content p-10 pl-80">
          <div className=" bg-[#3e3e3e] border-2 p-8 rounded-lg w-3xl hover:shadow-lg shadow-stone-800 border-gray-900 hover:border-gray-500 transition-all duration-300">
            <p className="font-google mb-5 text-lg">If you want to know more about me or my work, or if you would just like to say hello, send me a message. I&apos;d love to hear from you. 🪴</p>
            <form action={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="label ml-1 ">Name</label>
                  <input type="text" id="name" name="name" placeholder="Name" className="w-full p-2 mt-2 border border-[#3e3e3e] rounded-lg bg-[#1c1c1c] text-white"/>
                </div>
                <div>
                  <label className="label ml-1">Email</label>
                  <input type="email" id="email" name="email" placeholder="Email" className="w-full p-2 mt-2 border border-[#3e3e3e] rounded-lg bg-[#1c1c1c] text-white"/>
                </div>
              </div>
              <label className="label ml-1 mt-5">Message</label>
              <textarea id="message" name="message" placeholder="Hey, How it's going?" className="w-full p-2 mt-2 border border-[#3e3e3e] rounded-lg h-32 bg-[#1c1c1c] text-white"></textarea>
              <button type="submit" className="btn mt-2 w-full rounded-box bg-linear-to-r from-[#1D5CFC] to-[#4F3AF7] border-[#3e3e3e] text-gray-200">Send</button>
            </form>
          </div>
        </div>

        {/*TODO crear componente para bookear una call por meet */}
        <input type="radio" name="my_tabs_2" className="tab" aria-label="Quick Connect 📩"  />
        <div className="tab-content p-10 pl-80">
          <div className=" bg-[#3e3e3e] border-2 p-8 rounded-lg w-3xl hover:shadow-lg shadow-stone-800 border-gray-900 hover:border-gray-500 transition-all duration-300">
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
        </div>
      </div>
    </div>
    </section>

    </>
      
  )
}
