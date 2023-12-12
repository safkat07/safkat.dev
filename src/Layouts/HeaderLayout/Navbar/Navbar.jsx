import { Fade, } from 'hamburger-react'
import { useState } from 'react';
import Headroom from 'react-headroom';

const Navbar = () => {
    const [open, isOpen] = useState(false)
    return (
        <Headroom>


            <section className='lg:px-16 px-2  bg-black w-full'>
                <div className='flex   h-16 justify-between items-center'>
                    <div>
                        <a href='#' className='lg:text-[2vw] text-3xl lg:-tracking-[-.1rem]'>safkat.<span className='text-[#EE264A]'>dev</span><span className='font-ubu'>{"</>"}</span></a>
                    </div>
                    <div>
                        <div onClick={() => isOpen(!open)} className=''>
                            <Fade></Fade>
                        </div>
                        <ul className={
                            open ? 'flex lg:flex-row flex-col text-center transition-all righ duration-[1500ms] h-screen  bg-gradient-to-tr from-gray-900 via-cool-gray-700 to-gray-400 text-[2em] lg:text-[3em] absolute left-0 right-0 opacity-100 rounded-r-none top-16  uppercase justify-center lg:space-y-0 space-y-7 space-x-7 items-center' :
                                'flex lg:flex-row  text-center bg-gradient-to-tr from-gray-900 via-gray-700 to-gray-400 h-screen transition-all righ duration-[1500ms]  text-[2em] rounded-e-full rounded-r-full lg:text-[3em] absolute -left-[100%] right-[100%] top-16 flex-col opacity-0  uppercase justify-center  space-x-7 items-center'
                        }>
                            <li><a className="transition-all hover:text-[#EE264A] duration-1000  lg:hover:px-2 lg:hover:tracking-widest" href="#">Home</a></li>
                            <li><a className="transition-all hover:text-[#EE264A] duration-1000  lg:hover:px-2 hover:tracking-widest" href="#about">About</a></li>
                            <li><a className="transition-all hover:text-[#EE264A] duration-1000  lg:hover:px-2 hover:tracking-widest" href="#projects">Projects</a></li>
                            <li><a className="transition-all hover:text-[#EE264A] duration-1000  lg:hover:px-2 hover:tracking-widest" href="#">Contact</a></li>
                        </ul>
                        {/* <ul className='lg:flex lg:flex-row hidden  flex-col uppercase justify-center md:space-x-4 lg:space-x-7 items-center'>
                            <li><a className="transition-all hover:text-[#EE264A] duration-700  hover:px-2 hover:tracking-widest" href="#">Home</a></li>
                            <li><a className="transition-all hover:text-[#EE264A]  duration-700  hover:px-2 hover:tracking-widest" href="#about">About</a></li>
                            <li><a className="transition-all hover:text-[#EE264A]  duration-700  hover:px-2 hover:tracking-widest" href="#projects">Projects</a></li>
                            <li><a className="transition-all hover:text-[#EE264A]  duration-700  hover:px-2 hover:tracking-widest" href="#">Contact</a></li>
                        </ul> */}
                    </div>
                </div>
            </section>
        </Headroom>
    );
};

export default Navbar;