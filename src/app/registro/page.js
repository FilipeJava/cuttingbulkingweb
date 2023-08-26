import NavBar from '@/components/NavBar';
import { Ultra } from 'next/font/google';
import Image from 'next/image'

const Registro = () => {
  return (
    <>
      <NavBar active={"registro"} />

      <main className='bg-slate-950 m-20 p-8'><h2>Registro Calorico</h2></main>

    </>

  )
};

export default Registro;

