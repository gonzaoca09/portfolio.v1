import Card from '@/components/Card';
import { div } from 'motion/react-client';
// Dummy imports

export default async function Page() {

const topics = [
  { id: 1, name: 'JavaScript' },
  { id: 2, name: 'React' },
  { id: 3, name: 'Backend' },
  { id: 4, name: 'APIs' },
  { id: 5, name: 'Performance' },
  { id: 6, name: 'Testing' },
  { id: 7, name: 'Tools' },
  { id: 8, name: 'Career' },
  { id: 9, name: 'Remote' },
  { id: 10, name: 'Trends' }
]

 
  return (
      <div className="grid grid-cols-2 g-15 justify-center text-center items-center aling-middle max-w-[1800px] mx-auto px-40 py-4">

        <div className=' col-span-2 '>
          <h1>blogs</h1>
          <h2>My ideas, thoughts, and life</h2>
        </div>

        <div className="col-span-1 w-full">
          <div className="flex flex-col items gap-5">
            <Card />
            <Card />
            <Card />
          </div>
        </div>

        <div className="col-span-1 flex-col max-w-110">
            <div>
              <p className="text-2xl text-bold mb-3 text-start text-gray-500 text-s">Newest to oldest</p>
            </div>
            <span># Topics</span>
            <div className='flex gap-3 flex-wrap text-xs'>
              {topics.map(topic => (
                <div className="font-google border p-3 rounded-lg" key={topic.id}>
                  <div className=''>{topic.name}</div>
                </div>
              ))}
            </div>
        </div>

      </div>
  )
}
