import NavBar from '@/components/NavBar';
import { Ultra } from 'next/font/google';
import Image from 'next/image'

const Objetivo = () => {
  return (
    <>
      <NavBar active={"objetivo"} />

      <main className='bg-slate-950 m-20 p-8'><h2>Objetivo</h2></main>

    </>

  )
};

export default Objetivo;

