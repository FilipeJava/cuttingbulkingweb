import Link from "next/link";

const Notfound = ()=>{
    return(
        <main className="bg-slate-950 m-20 p-8 flex flex-col gap-4">
            <h2> 404 - Pagina Não Encontrada</h2>
            <Link href="/">Voltar Para Home</Link>
        </main>
        
    )
};

export default Notfound;