import { Fade, } from 'hamburger-react'
import { useState } from 'react';

const Navbar = () => {
    const [open , isOpen] = useState(false)
    return (
        <section className='lg:px-5 px-2  bg-black w-full'>
            <div className='flex    justify-between items-center'>
                <div>
                    <p className='lg:text-2xl text-3xl lg:-tracking-[-.1rem]'>safkat.<span className='text-[#EE264A]'>dev</span></p>
                </div>
                <div>
                    <div onClick={() => isOpen(!open)} className='lg:hidden flex '>
                        <Fade></Fade>
                    </div>
                    <ul className={
                        open? 'flex lg:flex-row lg:hidden text-center transition-all righ duration-700 h-screen  bg-black space-y-5 text-[2em] absolute left-0 right-0  opacity-100 top-16 flex-col uppercase justify-center  lg:space-x-7 items-center' :
                        'flex lg:flex-row lg:hidden text-center bg-black h-screen transition-all righ duration-700 space-y-5 text-[2em] absolute left-0 right-0 md:right-96 top-16 flex-col opacity-0 uppercase justify-center  lg:space-x-7 items-center'
                    }>
                        <li><a className="transition-all duration-700  lg:hover:px-2 lg:hover:tracking-widest" href="#">Home</a></li>
                        <li><a className="transition-all duration-700  lg:hover:px-2 hover:tracking-widest" href="#">About</a></li>
                        <li><a className="transition-all duration-700  lg:hover:px-2 hover:tracking-widest" href="#">Projects</a></li>
                        <li><a className="transition-all duration-700  lg:hover:px-2 hover:tracking-widest" href="#">Contact</a></li>
                    </ul>
                    <ul className='lg:flex lg:flex-row hidden  flex-col uppercase justify-center md:space-x-4 lg:space-x-7 items-center'>
                        <li><a className="transition-all duration-700  hover:px-2 hover:tracking-widest" href="#">Home</a></li>
                        <li><a className="transition-all duration-700  hover:px-2 hover:tracking-widest" href="#">About</a></li>
                        <li><a className="transition-all duration-700  hover:px-2 hover:tracking-widest" href="#">Projects</a></li>
                        <li><a className="transition-all duration-700  hover:px-2 hover:tracking-widest" href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Navbar;