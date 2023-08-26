import NavBar from '@/components/NavBar';
import { Ultra } from 'next/font/google';
import Image from 'next/image'

const Home = ()=>{
  return(
    <>
  <NavBar/>

    <div className='flex items-center justify-center pb-6 pt-32'>
      <h2 className='text-3xl'>Bem vindo!</h2>
    </div>

    <div className='flex flex-row py-3 items-center justify-center'>
      <div className='flex flex-col px-5'>
        <div className='pb-4'>
            <button className='bg-slate-950 w-72 h-24 px-2 py-4 rounded-xl'>Informações do usuário</button>
        </div>
        <div className='pb-4'>
            <button className='bg-slate-950 w-72 h-24 px-2 py-4 rounded-xl'>Percentual de Gordura</button>
        </div>
        <div className='pb-4'>
            <button className='bg-slate-950 w-72 h-24 px-2 py-4 rounded-xl'>Registro Calórico</button>
        </div>
      
      </div>

      <div className='flex flex-col'>
      <div className='pb-4'>
            <button className='bg-slate-950 w-72 h-24 px-2 py-4 rounded-xl'>Taxa metabólica basal</button>
        </div>
        <div className='pb-4'>
            <button className='bg-slate-950 w-72 h-24 px-2 py-4 rounded-xl'>Metas e objetivos</button>
        </div>
        <div className='pb-4'>
            <button className='bg-slate-950 w-72 h-24 px-2 py-4 rounded-xl'>Resultados</button>
        </div>
      </div>

    
    </div>  


  </>

)};

export default Home;

