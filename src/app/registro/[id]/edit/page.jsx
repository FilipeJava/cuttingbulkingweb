import NavBar from "@/components/NavBar";
import { getRegistro } from "@/actions/registro";
import Form from "./Form";

export default async function FormRegistroEdit({params}){
    const registro = await getRegistro(params.id)

    return(
        <>
            <NavBar active={"registro"} />

            <main className="bg-slate-900 mt-10 p-8 rounded max-w-lg m-auto">
                <h2 className="text-xl text-slate-100">Editar registro</h2>

                <Form registro={registro} />
               
            </main>
        </>
    )
}