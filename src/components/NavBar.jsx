import Link from "next/link";



const NavBar = ({active})=>{
    return(
        <nav className=' flex justify-between items-center bg-slate-950 px-6 py-4'>
        <ul className='flex gap-12 items-end'>
          <li> <Link href='/'><h1 className='text-2xl'>Cutting&Bulking</h1></Link></li>
          <li> <Link href='/taxaBasal' className={active=="taxaBasal"&&"text-slate-500"}>Taxa basal</Link></li>
          <li> <Link href='/gordura' className={active=="gordura"&&"text-slate-500"}>Gordura</Link></li>
          <li> <Link href='/objetivo' className={active=="objetivo"&&"text-slate-500"}>Objetivo</Link></li>
          <li> <Link href='/registro' className={active=="registro"&&"text-slate-500"}>Registro Calorico</Link></li>
          <li> <Link href='/resultado' className={active=="resultado"&&"text-slate-500"}>Resultados</Link></li>
        </ul>
        <div className='h-14 w-14 rounded-full overflow-hidden '>
          <img src='https://i.pravatar.cc/100' alt='avatar' />
        </div>
      </nav>
    )
};

export default NavBar;