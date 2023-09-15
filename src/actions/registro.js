'use server'

import { revalidatePath } from "next/cache"

export async function create(formData){
const url = "http://bulkingcutting-production.up.railway.app/bulkingcutting/api/registrocalorico/1"


const options = {
    method:"POST",
    body: JSON.stringify(Object.fromEntries(formData)),
    headers : {
        "Content-Type": "application/json"
    }

}

    const resp =fetch(url,options)

    if ( (await resp).status !== 201){
        return {message : "Erro ao cadastrar"}
    }

    revalidatePath("/registro")
    return {message : "Registro efetuado"}
}

