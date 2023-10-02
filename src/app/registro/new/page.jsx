"use client"

import { create } from "@/actions/registro";
import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
import TextInput from "@/components/TextInput";
import { useState } from "react";
import {redirect} from 'next/navigation'



export default function FormRegistro() {

    const [message , setMessage]=useState("")

    async function handleSubmit(formData){
       const resp = await create(formData)

       if (resp.error){
        setMessage(resp.error)
     
        return
       }
       setMessage("registro inlcuido")

       redirect("/registro")
       

    }

    return (
        <>
            <NavBar active={"registro"} />

            <main className='bg-slate-950 mt-10 p-8 max-w-lg m-auto'>

            <h2>Registro Calorico</h2>

            <form action={handleSubmit}> 
            <TextInput name ="tipo" id= "tipo" label="tipo"/>
            <TextInput name ="descricao" id= "descricao" label="descricao"/>
            <TextInput name ="data" id= "data" label="data"/>
            <TextInput name ="calorias" id= "calorias" label="calorias"/>


            <div className="flex justify-around">
                <Button href="/registro" variant="secondary">Cancelar</Button>
                <Button element="salvar">Salvar</Button>
            </div>

             

            </form>

            <p>{message}</p>  

            </main>


        </>

    )
}



// <span>{registro.tipo}</span>
// <span>{registro.descricao}</span>
// <span>{registro.data}</span>
// <span>{registro.calorias}</span>