'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Modal from './Modal'

const licoes = [
  {
    titulo: 'A Importância dos Ativos',
    text1: 'Pai Rico, Pai Pobre: Kiyosaki enfatiza a distinção entre ativos e passivos, incentivando a aquisição de ativos que gerem renda.',
    text2: 'O Homem Mais Rico da Babilônia: Clason destaca a importância de investir sabiamente, multiplicando o dinheiro através de investimentos que tragam retornos consistentes.',
    text3: 'Similaridade: Ambos os autores concordam que construir um portfólio de ativos é crucial para a prosperidade financeira a longo prazo.'
  },
  {
    titulo: 'Educação Financeira',
    text1: 'Pai Rico, Pai Pobre: Kiyosaki destaca a necessidade de uma educação financeira sólida, argumentando que a falta de conhecimento pode levar a decisões financeiras prejudiciais.',
    text2: 'O Homem Mais Rico da Babilônia: Clason aborda a importância do aprendizado contínuo sobre finanças para tomar decisões informadas e bem-sucedidas.',
    text3: 'Similaridade: Ambos enfatizam que a ignorância financeira pode ser prejudicial e que a busca constante por conhecimento financeiro é uma ferramenta poderosa.',
  },
  {
    titulo: 'Disciplina Financeira',
    text1: 'Pai Rico, Pai Pobre: Kiyosaki destaca a necessidade de disciplina financeira, seja no controle dos gastos ou na criação de fontes adicionais de renda.',
    text2: 'O Homem Mais Rico da Babilônia: Clason ressalta a importância da disciplina nas despesas, economizando consistentemente e evitando dívidas desnecessárias.',
    text3: 'Similaridade: Ambos reconhecem que a disciplina financeira é fundamental para alcançar a estabilidade e o crescimento financeiro.',
  },
  {
    titulo: 'Conclusão',
    text1: 'Ao explorar as páginas de "Pai Rico, Pai Pobre" e "O Homem Mais Rico da Babilônia", torna-se evidente que, apesar das diferenças contextuais, as lições sobre controle financeiro pessoal se alinham de maneiras notáveis. Ambos os autores enfatizam a importância dos ativos, da educação financeira e da disciplina como pilares fundamentais para a construção de uma base financeira sólida. Ao aplicar esses princípios atemporais em sua vida, você estará no caminho certo para conquistar a independência financeira e o sucesso duradouro.',
  },
]

function Layout() {
  const [openModal, setOpenModal] = useState(false)
  const [titulo, setTitulo] = useState()
  const [text, setText] = useState()

  const handleSetLicoes = async (licoe) => {
    setText(licoe)
    setTitulo(licoe.titulo)
    setOpenModal(!openModal)
  }

  return (
    <div className='w-full h-full flex flex-col items-center justify-center mt-20'>
      <div className='w-full flex  flex-wrap gap-5 min-h-[400px] md:p-2 md:bg-none  mb-10 bg-filho bg-cover bg-no-repeat bg-center '>
        <div className=' md:w-[48%] w-full flex flex-col gap-5 md:bg-none p-6 max-md:bg-black/80 '>
          <p className='lg:text-xl md:text-lg text-base indent-8  text-justify md:text-black  rounded-md p-2md:text-black text-[#ccc]'>
            "Pai Rico, Pai Pobre" de Robert Kiyosaki. Neste livro, o autor
            compartilha suas experiências com dois pais de diferentes origens
            financeiras e como isso o ajudou a moldar sua visão sobre dinheiro
            e sucesso. Descubra como você também pode aprender com essas lições
            e alcançar a independência financeira.
          </p>
          <p className='lg:text-xl md:text-lg text-base indent-8 text-justify md:text-black md:bg-none rounded-md p-2md:text-black text-[#ccc]'>
            A principal diferença entre o pai rico e o pai pobre de Robert
            Kiyosaki é a forma como cada um encarava o dinheiro e o trabalho.
            O pai pobre, apesar de ser altamente instruído e inteligente, tinha
            uma mentalidade de trabalhar por dinheiro, ou seja, ele acreditava
            que o caminho para o sucesso financeiro era por meio de um emprego
            estável e um salário fixo.
          </p>

        </div>
        <Image src='/filhodinheiro.jpg' alt='' width={2000} height={2000} className='md:w-[48%] h-full bg-cover hidden md:flex' />
      </div>

      <div className='w-full md:h-[550px] overflow-hidden md:gap-10 gap-4 bg-rico bg-cover bg-no-repeat bg-center flex flex-col  mb-10'>
        <div className='md:w-[50%] h-fit p-6 rounded-lg flex items-start bg-black/80 mt-5 md:ml-5'>
          <p className='md:text-xl indent-8 text-[#ccc] p-4 text-base'>
            Por outro lado, o pai rico tinha uma abordagem diferente,
            ensinando a importância de fazer o dinheiro trabalhar para si,
            em vez de trabalhar pelo dinheiro. Ele enfatizava a educação
            financeira e a busca por oportunidades de investimento e empreendedorismo.
          </p>
        </div>
        <div className='md:w-[50%] md:ml-[48%]  h-fit p-6 rounded-lg bg-black/80  flex justify-end'>
          <p className='md:text-xl indent-8  text-center text-[#ccc] p-4 text-base'>
            Essas perspectivas opostas proporcionaram a Kiyosaki uma visão
            abrangente das diferentes mentalidades em relação ao dinheiro e à
            riqueza. Ao observar e absorver os ensinamentos de ambos os pais,
            ele pôde desenvolver uma compreensão mais profunda sobre as
            complexidades da independência financeira e as diferentes abordagens
            para alcançá-la.
          </p>
        </div>
      </div>

      <div className='w-full md:flex flex-col justify-normal items-start rounded-md md:h-[500px] bg-[#09203f] px-4 py-10 gap-1 md:gap-5 mb-10'>
        <div className="flex w-full md:flex-wrap gap-5 justify-center items-center mb-10">
          <img
            className='md:w-[45%] w-[50%]'
            src="https://a-static.mlcdn.com.br/1500x1500/livro-pai-rico-pai-pobre-20-anos/dioshop/10a/2bf8b82cb585a13122a66b7d6716e3c5.jpg" alt="" />
          <Image width={2000} height={2000} alt='' src='/maisrico.jpg' className='md:w-[40%] w-[45%]' />
        </div>
        <div className="flex flex-col gap-5 items-center">
          <h2 className='text-white md:text-xl text-md font-semibold text-center mb-5'>
            Lições de Controle Financeiro em "Pai Rico, Pai Pobre"
            e "O Homem Mais Rico da Babilônia"
          </h2>

          <p className='md:text-lg text-md indent-8 md:w-[80%] w-full text-justify md:px-6 text-[#ccc] font-light'>
            Você já parou para pensar que, independentemente da época ou contexto
            cultural, as lições sobre controle financeiro pessoal podem ser
            surpreendentemente semelhantes? Dois livros notáveis, "Pai Rico,
            Pai Pobre" de Robert T. Kiyosaki e "O Homem Mais Rico da Babilônia"
            de George S. Clason, oferecem insights poderosos sobre como
            administrar as finanças pessoais de maneira eficaz. Vamos explorar
            as semelhanças entre essas obras e as valiosas lições que compartilham.
          </p>
          <ul className='md:w-[80%] text-[#ccc] text-lg md:mt-10'>
            {
              licoes && licoes.map((licoe, i) => (
                <li key={i} onClick={() => handleSetLicoes(licoe)} className='cursor-pointer hover:border-b p-2'>
                  {i + 1}. {licoe.titulo}
                </li>
              ))
            }

          </ul>
          {
            openModal &&
            <Modal setOpenModal={setOpenModal} titulo={titulo}>
              <p className='text-[#ccc] text-md mb-5'>
                {text.text1}
              </p>

              <p className='text-[#ccc] text-md mb-5'>
                {text.text2}
              </p>
              <p className='text-[#ccc] text-md mb-5'>
                {text.text3}
              </p>
            </Modal>
          }
        </div>
      </div>


      <Link href='/licao' className='md:text-4xl text-xl text-center bg-blue-800 p-4 rounded-lg hover:bg-blue-500 transition-all text-[#ccc] hover:text-white'>
        A lição mais importante do Pai Rico
      </Link>


      <p className='indent-4 md:w-1/2 mb-10'>
        Cadastre-se na plataforma e comerce a orgamisar sua vida financeira,
        lembre-se esse é um pilar principal no sucesso de sua vida, familiar e profissional
      </p>
      <Link href='login' className='mb-4 bg-blue-600 px-4 py-2 rounded-lg'>Login</Link>
      <Link href='register' className='mb-10 bg-blue-600 px-4 py-2 rounded-lg'>Registrar-se</Link>

    </div>
  )
}

export default Layout