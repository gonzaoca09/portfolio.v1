import TrackElementViewport from '@/components/ScrollWork'
import Image from 'next/image'

export default async function Page() {
 
 
  return (
    <div>
      <div className="grid grid-rows-1 justify-center items-center my-30 w-auto ">
          <h2 className="font-google text-center"></h2>
          <h1 className="text-5xl font-bold ">Some of my curated works 📖</h1>
      </div>
     <TrackElementViewport />
    </div>  
  )
}
