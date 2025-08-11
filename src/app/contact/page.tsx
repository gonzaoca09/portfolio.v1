
import NeatBackground from "@/components/NeatGradient";
import ToggleComponent from "@/components/ToggleComponent";

export default async function Page() {
 
 
  return (
    <>
    <section className="grid grid-cols-1 items-center justify-items-center  pt-10 p-8 pb-20 gap-5 ">
      <div className=" z-10 grid grid-rows-1 mb-8 w-auto ">
          <h2 className="font-google">CONTACT</h2>
          <h1 className="text-5xl font-bold mb-6">Get in touch🚀</h1>
      </div>
    <div className="">
      <NeatBackground />
      <ToggleComponent />
    </div>
    </section>

    </>
      
  )
}
