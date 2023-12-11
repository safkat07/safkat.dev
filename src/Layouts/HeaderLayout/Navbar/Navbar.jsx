import { Fade, Fade as Hamburger } from 'hamburger-react'

const Navbar = () => {
    return (
        <section className='px-5  fixed w-full'>
            <div className='flex md:h-10  justify-between items-center'>
                <div>
                    <p className='text-2xl -tracking-[-.1rem]'>safkat.dev</p>
                </div>
                <div>
                    <div className='hidden md:flex'>
                        <Fade></Fade>
                    </div>
                    <ul className='flex md:flex-row  flex-col uppercase justify-center md:space-x-4 lg:space-x-7 items-center'>
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