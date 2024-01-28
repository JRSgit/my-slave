'use client'
import { useEffect, useState } from 'react'
import { format, parseISO, set } from 'date-fns'
import { FaTrashCan } from "react-icons/fa6";
import { UseSelector, useSelector } from 'react-redux';

import Form from './Form'
import Modal from './Modal'
import { deleteItems, getDados } from '../services/axios'


const Card = ({ titulo, cor }) => {
  const { user } = useSelector(state => state.user)
  const [openModal, setOpenModal] = useState(false)
  const [valor, setValor] = useState(0)
  const [dados, setDados] = useState()
  const [loading, setLoading] = useState(false)
  const [retorno, setRetorno] = useState()

  const saldo = valor

  useEffect(() => {
    setLoading(true)
    const getDado = async () => {
      const path = titulo.toLowerCase()


      const res = await getDados(path, user.id)
      setDados(res)
      setLoading(false)


      getMonth(res)
    }
    getDado()


  }, [retorno])

  const camBack = async (r) => {
    setRetorno(r)
  }

  const selfSaldo = async (date) => {
    let bn = 0
    for (let i = 0; i < date.length; i++) {
      bn += date[i].valor
    }
    setValor(bn)

  }

  const handleDelete = async (id) => {
    const delet = confirm('Quer apagar este item?')
    if (!delet) return
    try {
      await deleteItems(titulo, id)
      setRetorno()
    } catch (err) {
      console.log(err.message)
    }

  }

  const getMonth = async (res) => {
    //const mesAtual = new Date().getMonth()
    if (!res) return
    const month = []
    await res.map((r) => {
      if (new Date().getMonth(r.createdAt) === 0) {
        month.push(r)
      }
    })
    setDados(month)
    selfSaldo(month)
  }

  return (
    <>
      {
        loading ? (
          <div className='w-20 h-20 rounded-full bg-red-500 animate-pulse' />
        )
          :
          (
            <div className={`md:p-8 p-2 bg-slate-400 shadow-md relative shadow-slate-300 w-full lg:max-w-[500px] max-h-[300px] rounded-lg`} >
              <h1 className='text-xl font-normal'>{titulo}</h1>
              <strong className={`text-sm px-2 py-1 bg-gray-400 rounded-full font-medium ${titulo === "Despesa" ? 'text-red-800' : titulo === 'Passivo' ? 'text-red-500' : 'text-green-800'} mb-10`} >
                R$ {titulo === 'Despesa' ? ` - ${saldo}` : titulo === 'Passivo' ? ` - ${saldo}` : `${saldo}`}
              </strong>
              <button
                title='receitas'
                onClick={() => setOpenModal(!openModal)}
                className='text-xl w-8 h-8 hover:bg-green-400 hover:text-2xl rounded-full bg-gray-500 absolute top-6 right-5'>+</button>
              {

                dados ? (
                  <table className='w-full table mt-5  overflow-scroll max-h-[200px]'>
                    <thead className='bg-red-400 text-center'>
                      <tr className=''>
                        <td className='border-x border-gray-500'>Descrição</td>
                        <td className='border-x border-gray-500'>Data</td>
                        <td className='border-x border-gray-500'>Valor</td>
                        <td className='border-x border-gray-500'><FaTrashCan size={15} color='red' /></td>
                      </tr>
                    </thead>
                    <tbody>
                      {dados.map((dados, i) => (
                        <tr key={dados.id} className={i % 2 == 1 ? 'bg-slate-500' : ''}>
                          <td className='border-x border-gray-500'>{dados.title.substring(0, 14)}..</td>
                          <td className='text-sm border-x border-gray-500 text-center'>{format(parseISO(dados.createdAt), "dd-MM-yy")}</td>
                          <td className='text-sm border-x border-gray-500 text-right'>R$ {dados.valor.toFixed(2)}</td>
                          <td
                            onClick={() => handleDelete(dados.id)}
                            className='text-sm border-x  border-gray-500 bg-gray-300 flex items-center h-full w-full justify-center cursor-pointer hover:bg-gray-500'>
                            <FaTrashCan size={15} />
                          </td>
                        </tr>

                      ))}
                    </tbody>
                  </table>

                ) : (
                  <table className='w-full table mt-5 max-h-[200px] overflow-scroll'>
                    <thead className='bg-red-400 text-center'>
                      <tr className=''>
                        <td className='border-x border-gray-500'>Descrição</td>
                        <td className='border-x border-gray-500'>Data</td>
                        <td className='border-x border-gray-500'>Valor</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Title</td>
                        <td>Data</td>
                        <td>Valor</td>
                      </tr>
                    </tbody>
                  </table>

                )
              }
            </div>
          )
      }
      {
        openModal &&
        <Modal setOpenModal={setOpenModal} titulo={titulo}>
          <Form path={titulo.toLowerCase()} setOpenModal={setOpenModal} camBack={camBack} />
        </Modal>
      }
    </>
  )
}

export default Card