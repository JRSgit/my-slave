import Image from 'next/image'
import React from 'react'


const Banner = ({ img }) => {
  return (
    <div className='w-full md:h-[500px]'>
      <Image src={img} alt='logo' width={2000} height={2000} className='w-full h-full bg-cover bg-center' />
    </div>
  )
}

export default Banner