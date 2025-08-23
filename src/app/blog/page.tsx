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
    <div className="flex flex-col items-center justify-center max-w-[1800px]">  
      <div className=' mb-15'>
          <h1>blogs</h1>
          <h2>My ideas, thoughts, and life</h2>
        </div>
      <div className="flex items-center aling-middle p-5 max-w-[1440px] min-w-[800px]">
        <div className=" w-full">
          <div className="flex flex-col items gap-5">
            <Card title="The construction of this site" description='Exploring the architecture and design principles behind this site.' imageUrl='https://placehold.co/600x400' />
            <Card title="Understanding React" description='A deep dive into React and its ecosystem.' imageUrl='https://placehold.co/600x400' />
            <Card title="Backend Development" description='Best practices for building robust backend systems.' imageUrl='https://placehold.co/600x400' />
          </div>
        </div>

        <div className=" max-w-[350px] self-baseline">
            <p className="text-2xl text-bold mb-3 text-start text-gray-500 text-s">Newest to oldest</p>
            <div className='flex gap-3 flex-wrap text-xs'>
              {topics.map(topic => (
                <div className="font-google border p-3 rounded-lg" key={topic.id}>
                  <div className=''>{topic.name}</div>
                </div>
              ))}
            </div>
        </div>

      </div>
   </div>
  )
}
