'use server'
import { revalidatePath } from "next/cache"

//ajuste 
export async function create(formData){
const url = "https://bulkingcutting-production.up.railway.app/bulkingcutting/api/registrocalorico/1"

const options = {
    method:"POST",
       headers : {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(Object.fromEntries(formData))
}
    const resp = fetch(url, options)
    if ( (await resp).status !== 201){
        return {message : "Erro ao cadastrar"}
    }
    revalidatePath("/registro")
    return {message : "Registro efetuado"}
}

export async function getRegistros(){
    await new Promise(r => setTimeout(r, 5000));
    const response = await fetch("https://bulkingcutting-production.up.railway.app/bulkingcutting/api/usuario/registro/1",  { next: { revalidate: 0 } })
    return response.json()
}

export async function getRegistro(id){
    const getUrl = "https://bulkingcutting-production.up.railway.app/bulkingcutting/api/registrocalorico/" + id
    const response = await fetch(getUrl)

    const json = await response.json()
    
    if (!response.ok){
        return {error: "Falha ao carregar registro. " + json.message}
    }

    return json
}

export async function destroy(id){
    const deleteUrl = "https://bulkingcutting-production.up.railway.app/bulkingcutting/api/registrocalorico/" + id
    
    const options = {
        method: "DELETE"
    }

    const response = await fetch(deleteUrl, options)

    if (!response.ok){
        const json = await response.json()
        return {error: "Falha ao apagar registro."}
    }

    revalidatePath("/registro")
}

export async function update(registro){
    const updateUrl = "https://bulkingcutting-production.up.railway.app/bulkingcutting/api/registrocalorico/" + registro.id

    const options = {
        method: "PUT",
        body: JSON.stringify(registro) ,
        headers: {
            "Content-Type": "application/json"
        }
    }

    const response = await fetch(updateUrl, options)

    if (!response.ok){
        const json = await response.json()
        return {error: "Erro ao atualizar" + json.message }
    }

    revalidatePath("/registro")

    return {ok: "registro alterado com sucesso"}
}

  ///bulkingcutting/api/usuario/