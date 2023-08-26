import NavBar from '@/components/NavBar';
import { Ultra } from 'next/font/google';
import Image from 'next/image'

const Taxa = () => {
  return (
    <>
      <NavBar active={"taxaBasal"} />

      <main className='bg-slate-950 m-20 p-8'><h2>Taxa Basal</h2></main>

    </>

  )
};

export default Taxa;

