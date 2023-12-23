import { Button } from './Button'
import Typed from 'react-typed'

export function Hero() {
  return (
    <main className='flex justify-center items-center flex-col'>
      <div className='w-full px-8'>
        <div className='flex flex-col items-center font-medium text-5xl md:text-7xl w-full tracking-wide mt-32'>
          <div className='flex justify-between md:max-w-[1020px] xs:min-w-[320px] xs:max-w-[560px]'>
            <h1 className='text-center'>
              Scale your team with the best nearshore
            </h1>
          </div>

          <div className='px-24 py-6'>
            <Typed
              strings={[
                'software talent',
                'react developers',
                '.net developers',
                'ror developers',
                'ios developers',
                'mobile developers',
                'python developers',
                'qa analyst',
              ]}
              backDelay={1500}
              typeSpeed={85}
              backSpeed={85}
              loop
            />
          </div>
        </div>

        <div className='w-full pt-14 pb-7'>
          <Button title='Schedule a Call >' />
        </div>

        <div className='w-full py-10'>
          <h1 className='text-3xl py-2 text-blue-400'>Moving banner</h1>
        </div>
      </div>
    </main>
  )
}
