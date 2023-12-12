import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

import { Typewriter } from 'react-simple-typewriter'
import './banner.css'
const Banner = () => {


    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }
    return (
        <div className='bg-black'>
            <div className='flex justify-between  max-w-7xl mx-auto items-center'>
                <div className='flex   space-y-5  text-2xl flex-col items-start'>
                    <a  href="">
                        <FaGithub className="hover:-translate-y-2 transition-all duration-500"></FaGithub>
                    </a>
                    <a href="">
                        <FaLinkedin className="hover:-translate-y-2 transition-all duration-500"></FaLinkedin>
                    </a>
                    <a href="">
                        <FaFacebook className="hover:-translate-y-2 transition-all duration-500"></FaFacebook>
                    </a>
                    <a href="">
                        <FaInstagram className="hover:-translate-y-2 transition-all duration-500"></FaInstagram>
                    </a>

                </div>
                <div className='flex flex-col  h-[90.8vh] items-center justify-center'>
                    <p className='lg:text-5xl text-2xl font-ubu '>Hey , <span className='text-[#EE264A]'>there....</span>🖐️</p>
                    <p className='lg:text-6xl text-3xl lg:pt-2  font-ubu'>I'<span className='text-[#EE264A]'>m</span> Safkat <span className='text-[#EE264A]'>Sharif</span> Sadli</p>
                    <p className='lg:pt-3 font-ubu text-3xl lg:text-6xl' >
                        A{' '}
                        <span id='chnage' >

                            <Typewriter
                                words={['Frontend Developer', 'Mern-Stack Developer', " Tech Enthusiast"]}
                                loop={1}
                                typeSpeed={300}
                                deleteSpeed={1000}
                                delaySpeed={1000}
                                onLoopDone={handleDone}

                            />
                        </span>
                    </p>
                </div>
                <div>
                    right
                </div>
            </div>
        </div>

    );
};

export default Banner;