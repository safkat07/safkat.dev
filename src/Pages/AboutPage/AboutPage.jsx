import RedFont from '../../Components/Useable/RedFont/RedFont';
import img from '../../assets/images/abtimg.png'

const AboutPage = () => {
    return (
        <section id="about" className='bg-[#000] h-screen'>
            <div className="max-w-7xl mx-auto">
                <div className='flex justify-evenly items-center'>
                <div className='w-1/2'>
                    <img className='w-72 border-8 mx-auto  rounded-full' src={img} alt="" />
                    <p className='  rounded-tl-3xl rounded-tr-lg rounded-bl-lg md rounded-br-3xl  w-1/2 mx-auto   font-pops  text-center text-[1.5rem] bg-gradient-to-tr from-blue-500 via-red-600 to-pink-500'>Chill Developer</p>
                </div>
                <div className='text-start w-1/2'>
                    <h2 className='text-4xl font-ubu'>Hello, Good People<span className='text-[#EE264A]'>!!</span></h2>
                    <p className='text-xl font-pops text-justify'>Welcome to my website man. You know my name right?</p>
                    <p className='text-xl font-pops text-justify'>What you <span className='text-[#EE264A] text-3xl font-semibold'>DON'T</span> know me yet? That's so sad.</p>
                    <p className='text-xl pb-2 font-pops text-justify'>I'm <span className='text-4xl font-semibold'>Safkat<span className='text-[#EE264A]'> Sharif</span> Sadli</span>, a Web Developer and Guitar Player from Dhaka, Bangladesh.</p>
                    <p className='text-xl font-pops text-justify'>I Know about <RedFont redtxt={'HTML'}></RedFont> , <RedFont redtxt={'CSS'}></RedFont> , <RedFont redtxt={"TailwindCSS"}></RedFont> , <RedFont redtxt={"react"}></RedFont> , some <RedFont redtxt={"expressjs"}></RedFont> , some <RedFont redtxt={"NodeJS"}></RedFont> , <RedFont redtxt={"MongoDB"}></RedFont> and <RedFont redtxt={"Firebase"}></RedFont>.</p>
                    <p className='text-xl font-pops text-justify'>I just love to design websites, I am not also <RedFont redtxt={"dedicated"}></RedFont> but also a <RedFont redtxt={"motivated"}></RedFont> web developer. I can ensure that you won't regrate after working with me. </p>
                    
                </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;