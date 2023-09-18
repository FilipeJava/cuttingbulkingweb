"use client"

import { update } from "@/actions/registro";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import { ArrowLeftIcon, CheckIcon } from "@heroicons/react/24/outline";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function Form({registro}) {
    const [registroEdit, setRegistroEdit] = useState(registro)
    const [error, setError] = useState("")

    function handleFieldChange(field, value){
        setRegistroEdit({
            ...registroEdit,
            [field]: value
        })
    }

    async function handleSubmit(){
        const response = await update(registroEdit)
        if (response?.error){
            setError(response.error)
            return
        }

        redirect("/registro")
    }
    
    return (
        <form action={handleSubmit}>
            <TextInput 
                name="tipo" 
                id="tipo" 
                label="tipo" 
                value={registroEdit.tipo}  
                onChange={e => handleFieldChange("tipo", e.target.value)}
            />
            <TextInput 
                name="descricao" 
                id="descricao" 
                label="descricao" 
                value={registroEdit.descricao} 
                onChange={e => handleFieldChange("descricao", e.target.value)}
            />
            <TextInput 
                name="data" 
                id="data" 
                label="data" 
                value={registroEdit.data} 
                onChange={e => handleFieldChange("data", e.target.value)}
            />
            <TextInput 
                name="calorias" 
                id="calorias" 
                label="calorias" 
                value={registroEdit.calorias} 
                onChange={e => handleFieldChange("calorias", e.target.value)}
            />

            <div className="flex justify-around">
                <Button href="/registro" variant="secondary" icon={<ArrowLeftIcon className="h6 w-6" />}>
                    cancelar
                </Button>
                <Button element="button" icon={<CheckIcon className="h6 w-6" />}>
                    salvar
                </Button>

            </div>
            <p className="text-red-400">{error}</p>

        </form>
    )
}