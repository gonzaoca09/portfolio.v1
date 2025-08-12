import Image from 'next/image'

export default async function Page() {
 
 
  return (
      <div className="grid grid-cols-2 gap-4 pt-10 p-8 pb-20">
        <div className="px-18">
          <h2 className='text-sm'>MORE ABOUT ME</h2>
          <h1 className='font-bold mb-5'>I&apos;m Mauro, a creative engineer</h1>
          <p className='text-lg font-google'>
            I&apos;m Mauro Sebastian Torrez, a proactive full-stack developer passionate about creating dynamic web experiences. From frontend to backend, I thrive on solving complex problems with clean, efficient code. <br /><br /> My expertise spans React, Next.js, and Node.js, and I&apos;m always eager to learn more. When I&apos;m not immersed in work, I&apos;m exploring new ideas and staying curious.<br /><br /> Life&apos;s about balance, and I love embracing every part of it. I believe in waking up each day eager to make a difference!
          </p>
        </div>
          <Image src="https://placehold.co/600x400" alt="Imagen-perfil" width={600} height={400} />
      </div>
  )
}
