import React from 'react'

const Modal = ({ children, setOpenModal, titulo }) => {
  return (
    <div className='w-full  h-full flex justify-center fixed z-10 bg-black/90 inset-0 p-5 '>
      <div className='md:w-1/2  m-auto w-full '>
        <div className='flex items-center justify-between mb-5'>
          <h1 className='text-2xl font-medium text-white '>{titulo}</h1>
          <button
            onClick={() => setOpenModal(false)}
            className='text 4xl w-8 h-8 rounded-full bg-gray-500'>X</button>
        </div>
        {children}

      </div>
    </div>
  )
}

export default Modal