'use client'
import { useForm } from 'react-hook-form'
import { Store } from '../services/axios'

const Form = ({ path, setOpenModal, camBack }) => {
  const { reset, register, handleSubmit } = useForm({
    defaultValues: {
      title: '',
      authorId: parseInt(localStorage.getItem('userId')),
      valor: 0,
    },
    mode: 'onChange'
  })


  const handleSave = async (data) => {
    // const id = localStorage.getItem('userId')
    data.valor = parseInt(data.valor)
    try {
      const res = await Store(path, data)
      camBack(res)
      setOpenModal()
    } catch (err) {
      console.log(err)
    }
    reset()
  }

  return (
    <form onSubmit={handleSubmit(handleSave)} className='flex flex-col gap-3 w-full items-center'>
      <input
        {...register('title', { required: true })}
        className='p-2 bg-slate-500 rounded-md w-full outline-none border-none' type="text" placeholder='Titulo' name='title' />
      <input
        {...register('valor', { required: true })}
        className='p-2 bg-slate-500 rounded-md w-full outline-none border-none' type="number" placeholder='Valor R$' name='valor' />
      <input className='p-4 bg-blue-700 text-xl rounded-md w-fit cursor-pointer' type="submit" value='Salvar' />
    </form>

  )
}

export default Form