import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Image from 'next/image'
import Link from 'next/link'

const route = () => {
  return (
    <>
      <Header />
      <Banner img='/capa1.png' />
      <div className="flex flex-col w-full">
        <div className="flex flex-wrap md:mt-20 md:mb-20 mt-20 mb-10">
          <Image width={2000} height={2000} alt='' src='/pairico.png' className=' md:w-[48%] bg-cover' />
          <p className='indent-8 md:text-2xl text-base md:w-[48%] w-full p-4 mt-10 md:mb-10'>
            "Meu pai rico construiu um sólido alicerce financeiro para Mike e para mim. Já
            que éramos apenas crianças, ele criou uma forma muito simples de ensinar."
            <br />
            <small className='font-bold'>Robert T. Kiyosaki</small>
          </p>

        </div>

        <div className="flex flex-col bg-cover bg-no-repeat bg-center md:h-[500px]" style={{ backgroundImage: 'url("/fluxo.png")' }}>
          <div className="bg-black/80 flex flex-wrap md:p-10 p-4 h-full gap-6">
            <p className=" md:p-4 text-[#ccc] md:w-1/2 w-full md:text-xl text-lg">
              <strong>Regra Número Um.</strong> Você tem que conhecer a diferença entre um ativo e um
              passivo e comprar ativos. Se você deseja ser rico, isso é tudo o que você
              precisa conhecer. E a Regra Número Um e é a única regra. Isto pode parecer
              absurdamente simples, porque não se tem idéia do quanto é profunda. A
              maioria das pessoas tem dificuldades financeiras porque não conhece a
              diferença entre um ativo e um passivo.
            </p>
            <p className=" md:p-4 text-[#ccc] md:text-xl md:w-1/2 w-full ml-0  md:ml-[50%] text-lg">
              "Se você quer ficar rico, você tem que ler e entender os números." Ouvi meu
              pai rico repetir isso mil vezes. E também aprendi: "Os ricos adquirem ativos e
              os pobres e a classe média adquirem obrigações."
            </p>

          </div>

        </div>

        <div className='flex flex-col mt-10 items-center md:h-[500px] mb-10'>
          <h1 className='text-2xl md:text-4xl text-center mb-4'>A lição do Pai Rico</h1>

          <video controls src='/video.mp4' className='md:w-1/2 w-full  h-full  mb-10' />
        </div>

        <div className="flex gap-5 w-full flex-wrap justify-center mb-10">
          <Image width={2000} height={2000} alt='' src='/ativo.png' className='md:w-[32%] w-full border-2' />
          <Image width={2000} height={2000} alt='' src='/passivo.png' className='md:w-[32%] w-full border-2' />
          <Image width={2000} height={2000} alt='' src='/fluxo.png' className='md:w-[32%] w-full border-2' />
          <Image width={2000} height={2000} alt='' src='/fluxopobre.png' className='md:w-[32%] w-full border-2' />
          <Image width={2000} height={2000} alt='' src='/fluxorica.png' className='md:w-[32%] w-full border-2' />
          <Image width={2000} height={2000} alt='' src='/fluxomedia.png' className='md:w-[32%] w-full border-2' />
        </div>

        <div className='flex w-full flex-wrap px-3 gap-4 items-start bg-[#09203f] py-10'>
          <div className='flex gap-4 flex-col md:w-[48%] w-full text-[#ccc] px-3'>
            <p className='md:text-lg text-base indent-8'>
              O primeiro passo é ter controle total das suas finanças,
              construir ativos significativos e fazer o seu dinheiro trabalhar para você.
              A sabedoria compartilhada por grandes autores como Robert T. Kiyosaki
              em "Pai Rico, Pai Pobre" e George S. Clason em "O Homem Mais Rico da
              Babilônia" revela que o caminho para a independência financeira
              começa com o conhecimento e a ação consciente.
            </p>
            <p className='md:text-lg text-base indent-8'>
              Para dar inicio a sua edução financeira há um espaço digital que vai
              além da teoria, oferecendo ferramentas práticas para transformar
              suas finanças pessoais. Ao se cadastrar, você terá acesso a recursos especializados que o guiarão na jornada
              para o controle financeiro e aprenderá a construir ativos geradores de
              renda passiva.
            </p>

            <h1>O que você ganhará ao se cadastrar em $$MySlave?</h1>
            <p className='md:text-lg text-base '>
              1 - <strong>Controle Financeiro Efetivo:</strong> Explore ferramentas intuitivas
              para monitorar suas despesas, registrar suas receitas e entender
              a verdadeira situação das suas finanças. Ganhe poder sobre o seu dinheiro.
            </p>
            <p className='md:text-lg text-base '>
              2 - <strong>Construção de Ativos Sustentáveis:</strong> Aprenda a identificar e criar
              ativos que geram renda passiva. Deixe de ser apenas um espectador
              no mundo financeiro e torne-se um construtor de riqueza.
            </p>
            <p className='md:text-lg text-base '>
              3 - <strong>Educação Financeira Contínua:</strong> Desfrute de conteúdo educacional
              atualizado regularmente, inspirado nos princípios eternos de
              Kiyosaki e Clason. Mantenha-se à frente, aprendendo constantemente
              sobre estratégias financeiras eficazes.
            </p>

          </div>

          <div className='md:w-[48%] w-full flex flex-col items-center'>
            <Link href={''} className='text-[#ccc] text-xl text-center mb-5 bg-blue-500 p-4 rounded-md'>Cadastre-se e tenha acesso a essa aplicação</Link>
            <p className='md:w-[70%] w-full indent-8 text-[#ccc] text-center mb-3'>
              Cadastre todos os seu novimentos financeiros, despesas, receitas, ativos, passivos e tenha
              em mãos o controle de suas finanças.
            </p>
            <video autoPlay muted src='/video.mp4' className='md:w-full w-full  h-full  mb-10' />
            <p className='md:w-[70%] w-full  text-[#ccc] text-center md:text-lg text-lg md:mb-3 mb-10 p-4 bg-orange-500 rounded-lg'>
              Receba o ebook Pai rico, Pai Pobre, e mais
              o ebook do Homem mais rico da Babilônia Grátis.
            </p>
            <Link href={''} className='text-[#ccc] text-xl text-center mb-5 bg-blue-800 hover:bg-blue-500 p-4 rounded-xl'>
              Cadastre-se Agora
            </Link>
            <Link href='login' className='text-[#ccc] text-xl text-center mb-5 bg-blue-800 hover:bg-blue-500 p-4 rounded-xl'>
              Login
            </Link>

          </div>

        </div>

      </div>
    </>
  )
}

export default route