import TrackElementViewport from '@/components/ScrollWork'


export default async function Page() {
 
 
  return (
    <div>
      <div className=" z-10 grid grid-rows-1 justify-center items-center  mb-30 w-auto ">
          <h2 className="font-google text-center"></h2>
          <h1 className="text-5xl font-bold ">Some of my curated works 📖</h1>
      </div>
     <TrackElementViewport />
    </div>  
  )
}
