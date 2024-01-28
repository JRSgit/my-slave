'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import SaldoTotal from './SaldoTotal'
import { useSelector } from 'react-redux'

const Header = () => {
  const { user } = useSelector(state => state.user)
  const navigate = useRouter()

  const handleLogout = async () => {
    localStorage.removeItem('userName')
    localStorage.removeItem('userId')
    localStorage.removeItem('user')
    location.reload()

  }

  return (
    <nav className='w-full h-20 flex items-center justify-between md:px-5 px-4 bg-[#09203f] '>
      <h1 className='md:text-4xl text-xl text-white font-bold'>$MySlave</h1>
      <SaldoTotal />
      {user?.name ? (
        <div className=' flex flex-col items-end'>
          <Link className='text-white md:text-xl text-sm font-medium hover:border-b border-red-500 cursor-pointer' href=''>
            {user?.name.substring(0, 7)}...
          </Link>
          <button className='hover:bg-orange-500 hover:border-orange-700 px-2 rounded-full md:text-lg text-sm' onClick={handleLogout}>Sair</button>

        </div>

      ) : (
        <Link className='text-white text-xl font-medium hover:border-b border-red-500 cursor-pointer' href='login'>
          Login
        </Link>
      )

      }
    </nav>
  )
}

export default Header