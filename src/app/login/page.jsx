"use client"

import Image from 'next/image'
import loginImage from '@/images/login.jpg'
import TextInput from '@/components/TextInput'
import Button from '@/components/Button'

export default function Login() {

    return (
        <div className='flex h-screen'>
            <aside className='hidden lg:flex'>
                <Image
                    src={loginImage}
                    alt="imagem de um bodybuilder"
                    className='h-full w-full object-cover' />
            </aside>
            <main className='flex flex-col items-center justify-center h-screen w-full'>
                <h1 className='text-5xl font-bold'>CuttingBulking</h1>
                <form>
                    <TextInput name="email" label="e-mail" />
                    <TextInput name="senha" label="senha" type="password" />
                    <Button  href='/'>entrar</Button>
                </form>
            </main>
        </div>
    )
}