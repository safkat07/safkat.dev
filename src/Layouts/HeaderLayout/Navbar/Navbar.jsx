import { Fade, } from 'hamburger-react'
import { useState } from 'react';

const Navbar = () => {
    const [open , isOpen] = useState(false)
    return (
        <section className='px-5  fixed w-full'>
            <div className='flex md:h-10  justify-between items-center'>
                <div>
                    <p className='text-2xl -tracking-[-.1rem]'>safkat.dev</p>
                </div>
                <div>
                    <div onClick={() => isOpen(!open)} className='lg:hidden flex '>
                        <Fade></Fade>
                    </div>
                    <ul className={
                        open? 'flex lg:flex-row lg:hidden text-center transition-all righ duration-700 space-y-5 text-[2em] absolute left-0 right-0  opacity-100 top-16 flex-col uppercase justify-center  lg:space-x-7 items-center' :
                        'flex lg:flex-row lg:hidden text-center transition-all righ duration-700 space-y-5 text-[2em] absolute left-0 right-0 md:right-96 top-16 flex-col opacity-0 uppercase justify-center  lg:space-x-7 items-center'
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