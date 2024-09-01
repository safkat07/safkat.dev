import React from 'react'
import CardWrapper from '../Reuseable/CardWrapper'

const StatCard = ({ number, label }) => {
    return (
      <div className="flex flex-col justify-center items-center p-4 min-w-[100px] bg-gradient-to-t from-[#202020] to-[#161616] rounded-2xl">
        <h2 className="text-4xl font-bold">{number}</h2>
        <p className="text-sm text-gray-400 mt-2 w-3/4 text-center mx-auto">{label}</p>
      </div>
    );
  };


const ClientsDisplaySection = () => {
  return (
      <CardWrapper className='min-h-52 m-auto flex justify-center items-center gap-5'>
        <StatCard number="+01" label="YEARS EXPERIENCE" />
      <StatCard number="+2" label="CLIENTS WORLDWIDE" />
      <StatCard number="+6" label="TOTAL PROJECTS" />
   </CardWrapper>
  )
}

export default ClientsDisplaySection
