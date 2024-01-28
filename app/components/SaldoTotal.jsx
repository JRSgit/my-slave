'use client'
import { useEffect, useState } from "react"
import { getDados } from "../services/axios"
import { useSelector } from "react-redux"


const SaldoTotal = () => {
  const { user } = useSelector(state => state.user)

  const [receita, setReceita] = useState()
  const [despesa, setDespesa] = useState()
  // const [ativo, setAtivo] = useState()
  // const [passivo, setPassivo] = useState()

  const path = [
    'receita',
    'despesa'
  ]


  useEffect(() => {

    if (user.id) {
      const saldo = async () => {
        path.map(async (m, i) => {
          const resp = await getDados(m, user.id)
          const total = await selfSaldo(resp)

          if (i === 0) {
            setReceita(total)
          }
          if (i === 1) {
            setDespesa(total)
          }

        })
      }
      saldo()

    } else {
      return
    }


  }, [])

  const selfSaldo = async (date) => {
    let bn = 0
    for (let i = 0; i < date.length; i++) {
      bn += date[i].valor
    }
    return bn

  }

  const cor = receita && receita - despesa < 0 ? 'text-red-500' : 'text-green-500'

  return (
    <>
      {
        user.id &&
        <div className="flex items-center gap-2 w-fit">
          <h1 className="md:text-xl text-sm text-center">Saldo Total</h1>
          {
            receita && <p className={`${cor} w-fit px-4 py-1 md:text-xl text-sm flex items-center justify-center h-fit rounded-full bg-blue-800 border border-blue-400`}>
              {receita - despesa < 0 ? '' : '+'} {receita - despesa}
            </p>
          }
        </div>
      }

    </>
  )
}

export default SaldoTotal