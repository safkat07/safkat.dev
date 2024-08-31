import MaxWidthWrapper from "./MaxWidthWrapper"
import { CgMenuRight } from "react-icons/cg";


const Navbar = () => {
  return (
      <MaxWidthWrapper className="mt-2.5">
          <nav className="flex justify-between items-center">
              <div className="cursor-pointer">
                  <p className="md:text-3xl text-2xl  font-medium">
                  Safkat.dev
                 </p>
              </div>
              <ul className="lg:flex justify-center items-center lg:text-xl gap-x-10  hidden   ">
                  <li>Home</li>
                  <li>About</li>
                  <li>Works</li>
                  <li>Contact</li>
              </ul>
              <button className="text-xl bg-[#2b2a2a] hover:bg-white transition-all duration-500 hover:text-black p-2.5 px-7 font-semibold rounded-2xl  lg:block hidden">
                  Lets talk
              </button>
              <button className="md:text-3xl text-2xl border p-2.5 rounded-full hover:bg-white lg:hidden block">
                <CgMenuRight/>
              </button>
          </nav>
    </MaxWidthWrapper>
  )
}

export default Navbar
