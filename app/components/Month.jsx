


const Month = () => {

  return (
    <div className='flex flex-col w-full max-h-15 mt-5 px-4 items-center justify-center'>
      <h1 className='md:text-4xl text-md text-center font-bold mb-4'>Demostrativo Mensal</h1>
      <div className='flex gap-3 flex-wrap text-white'>
        <button className='px-2 bg-blue-800 w-fit rounded-md text-lg focus:bg-orange-500' autoFocus>Jan</button>
        <button className='px-2 bg-blue-800 w-fit rounded-md text-lg focus:bg-orange-500'>Fev</button>
        <button className='px-2 bg-blue-800 w-fit rounded-md text-lg focus:bg-orange-500'>Mar</button>
        <button className='px-2 bg-blue-800 w-fit rounded-md text-lg focus:bg-orange-500'>Abr</button>
        <button className='px-2 bg-blue-800 w-fit rounded-md text-lg focus:bg-orange-500'>Mai</button>
        <button className='px-2 bg-blue-800 w-fit rounded-md text-lg focus:bg-orange-500'>Jun</button>
        <button className='px-2 bg-blue-800 w-fit rounded-md text-lg focus:bg-orange-500'>Jul</button>
        <button className='px-2 bg-blue-800 w-fit rounded-md text-lg focus:bg-orange-500'>Ago</button>
        <button className='px-2 bg-blue-800 w-fit rounded-md text-lg focus:bg-orange-500'>Set</button>
        <button className='px-2 bg-blue-800 w-fit rounded-md text-lg focus:bg-orange-500'>Out</button>
        <button className='px-2 bg-blue-800 w-fit rounded-md text-lg focus:bg-orange-500'>Nov</button>
        <button className='px-2 bg-blue-800 w-fit rounded-md text-lg focus:bg-orange-500'>Dez</button>
      </div>
    </div>
  )
}

export default Month