
import Image from 'next/image'
import Carousel  from './carousel';
import Banner from './banner';


export default function Home() {
  return (

    <main className="">
        
        <Carousel/>
        
        <Banner/>
        <div className="flex min-h-screen flex-col items-center justify-between px-24">
            <h2 className='text-white' initial={{x: 100}} animate={{ x: 0 }}>hola</h2>
        </div>
    

    </main>
    
  )
}
