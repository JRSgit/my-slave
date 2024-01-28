'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { login } from '../services/axios'
import { useRouter } from 'next/navigation'

import { useDispatch, useSelector } from 'react-redux'
import { storeUser } from '../lib/redux/userSlice'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useRouter()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)

  const { reset, register, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const handleLogin = async (data) => {
    setLoading(true)
    try {
      const res = await login(data)

      if (res) {
        setLoading(false)
        setError(res)
      }

      // dispatch(storeUser(res))
      // setLoading(false)
      // reset()
      // navigate.push('/')

    } catch (err) {
      setLoading(false)
      setError(err.message)
      return

    }



  }

  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <form onSubmit={handleSubmit(handleLogin)} className='md:w-1/2 w-full p-8 bg-white/50 flex flex-col gap-4 rounded-lg'>
        <h1 className='text-4xl font-bold text-[#09203f] mb-4'>$MySlave</h1>
        {loading &&
          <div className='w-10 h-10 rounded-full bg-[#09203f]  border-4 border-red-500 animate-ping m-auto' />
        }
        {
          error && <p className='text-xl text-orange-600 text-center'>{error}</p>
        }
        <input
          {...register('email', { required: true })}
          className='p-3 bg-gray-500 w-full text-xl rounded-md'
          type="text" placeholder='Email' name='email' />
        <input
          {...register('password', { required: true })}
          className='p-3 bg-gray-500 w-full text-xl rounded-md'
          type="password" placeholder='Senha' name='password' />

        <input
          className='p-3 bg-[#09203f] w-full text-xl rounded-md cursor-pointer'
          type="submit" value='Entrar' />
      </form>
    </div>
  )
}

export default Login