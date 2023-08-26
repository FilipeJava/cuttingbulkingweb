import NavBar from '@/components/NavBar';
import { Ultra } from 'next/font/google';
import Image from 'next/image'

const Resultado = () => {
  return (
    <>
      <NavBar active={"resultado"}/>

      <main className='bg-slate-950 m-20 p-8'><h2>Resultados</h2></main>


    </>

  )
};

export default Resultado;

