import img from '../../../assets/images/img3.png'
import { Typewriter } from 'react-simple-typewriter'
import './banner.css'
const Banner = () => {


    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }
    return (
        <div className='bg-black min-h-screen'>
            <div className='flex flex-col h-screen items-center justify-center'>
                <p className='lg:text-5xl text-2xl font-ubu '>Hey , <span className='text-[#EE264A]'>there....</span>🖐️</p>
                <p className='lg:text-6xl text-3xl lg:pt-2  font-ubu'>I'<span className='text-[#EE264A]'>m</span> Safkat <span className='text-[#EE264A]'>Sharif</span> Sadli</p>
                <p className='lg:pt-3 font-ubu text-3xl lg:text-6xl' >
                    {' '}
                    <span id='chnage' >

                        <Typewriter
                            words={['A Frontend Developer', 'A Mern-Stack Developer', "A Tech Enthusiast"]}
                            loop={1}
                            typeSpeed={200}
                            deleteSpeed={300}
                            delaySpeed={1000}
                            onLoopDone={handleDone}

                        />
                    </span>
                </p>
            </div>
        </div>

    );
};

export default Banner;