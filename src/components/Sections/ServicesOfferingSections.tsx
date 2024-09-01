import { FaNodeJs } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import CardWrapper from "../Reuseable/CardWrapper";

const techIcons = [
    { id: 1, icon: FaNodeJs, label: "Node.js" },
    { id: 2, icon: FaJsSquare, label: "JavaScript" },
    { id: 3, icon: RiNextjsFill, label: "Next.js" },
    { id: 4, icon: RiReactjsLine, label: "React.js" },
    { id: 5, icon: SiMongodb, label: "MongoDB" }
  ];


const ServicesOfferingSections = () => {
  return (
      <CardWrapper className='min-h-52 p-7  flex flex-col justify-between items-start h-full'>
            <div className="flex gap-4 justify-center items-center mx-auto ">
      {techIcons.map((tech) => (
        <div key={tech.id} className="flex flex-col items-center">
          <tech.icon className="text-5xl text-white" />
        </div>
      ))}
          </div>

          <div className="mt-5">
          <p className='uppercase text-gray-500 text-sm'>specialization</p>
          <h1 className='text-white text-xl font-semibold.'>Experts in</h1>
        </div>
        </CardWrapper>
  )
}

export default ServicesOfferingSections
