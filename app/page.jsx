'use client'
import { useEffect, useState } from 'react'
import Card from './components/Card'
import Header from './components/Header'
import { findUser } from './services/axios'
import Layout from './components/Layout'
import Month from './components/Month'

import { useSelector } from 'react-redux'
import Banner from './components/Banner'


export default function Home() {
  const { user } = useSelector(state => state.user)
  // const [user, setUser] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    setLoading(true)
    const getUserData = async () => {
      if (!user.id) {
        return
      }
      try {
        const res = await findUser(user.id)
        localStorage.setItem('userName', res.name)
        localStorage.setItem('user', JSON.stringify(res))

      } catch (err) {
        setLoading(false)
        return console.log(err)
      }

    }

    if (!localStorage.getItem("user")) {
      getUserData()
    }

    setLoading(false)
    // setTimeout(() => {
    // }, 3000)
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-start ">
      <Header />
      <Banner img='/capa.png' />
      {
        user.id &&
        <Month />
      }
      <div className='flex flex-wrap items-center justify-start md:justify-center md:p-5 mt-5 w-full gap-8'>
        {
          loading ? (

            <div className='md:w-[220px] w-[220px] md:h-[220px] h-[120px] items-center justify-center flex m-auto rounded-full border-8 border-red-500 animate-ping'>
              <h1 className='text-xl'>Carregando...</h1>
            </div>

          ) : (
            user.id ? (
              <>
                <Card
                  titulo='Receita' valor={- 1400.00} cor='bg-green-600'
                />

                <Card
                  titulo='Despesa' valor={- 1400.00} cor='bg-red-600'
                />
                <Card
                  titulo='Ativo' valor={- 1400.00} cor='bg-blue-600' data={''}
                />
                <Card
                  titulo='Passivo' valor={- 1400.00} cor='bg-orange-600'
                />
              </>

            ) : (
              <>
                <Layout />
              </>
            )
          )
        }

      </div>
    </main>
  )
}
