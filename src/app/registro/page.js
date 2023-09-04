import NavBar from '@/components/NavBar';
import RegistroRow from './RegistroRow';
import Button from '@/components/Button';

 async function getRegistros(){

  const url = "http://localhost:8080/bulkingcutting/api/usuario/registro/1"

  const response =  await fetch(url)
 
  return response.json()
}



export default  async function Registro()  {

  const data =  await getRegistros()

  

  return (
    <>
      <NavBar active={"registro"} />

      <main className='bg-slate-950 m-20 p-8'>

      <div className='flex justify-between'>
      <h2>Registro Calorico</h2>
      <Button href="/registro/new">criar registro</Button>
      </div>
        
        
        <div>
          <div id='data' className='text-slate-300' >

          {data.map(registro =>{
            return <RegistroRow registro={registro}/>
          })}
       
          </div>
            
        </div> 

        

        </main>

    </>

  )
};



