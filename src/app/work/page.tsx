import TrackElementViewport from '@/components/scrollWith'


export default async function Page() {
 
 
  return (
    <div>
      <div className=" z-10 grid grid-rows-1 mb-2 w-auto ">
          <h2 className="font-google">Work</h2>
          <h1 className="text-5xl font-bold mb-6">Some of my curated works</h1>
      </div>
     <TrackElementViewport />
    </div>  
  )
}
