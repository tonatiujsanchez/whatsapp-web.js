'use client'

import axios from "axios"
import { error } from "console"
import { FormEvent, useState } from "react"

const WwebPage = () => {

    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)


    const handleMessageSubmit = async(ev:FormEvent) => {
        ev.preventDefault()
        setLoading(true)

        // fetch('/api/send-message',{
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         phoneNumber: phone,
        //         message: message
        //     })
        // })
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data)
        //     setLoading(false)
        // })
        // .catch((error)=>{
        //     console.log(error)
        // })
        try {
            
            const { data } = await axios.post('/api/send-message', {
                phoneNumber: phone,
                message: message
            })
            console.log(data)

        } catch (error) {
            console.log(error)
        }finally {
            setLoading(false)
        }
    }

    
    return (
        <div className="h-screen w-full flex justify-center items-center">
            <form
                onSubmit={handleMessageSubmit} 
                className="w-[400px] flex flex-col gap-4"
            >
                <div className="flex flex-col gap-1">
                    <label htmlFor="phone" className="text-slate-500 font-bold text-sm">Telefono</label>
                    <input 
                        type="text"
                        placeholder="telefono"
                        className="px-2 py-2 rounded-lg"
                        value={ phone }
                        onChange={ ({ target }) => setPhone( target.value ) }
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="message" className="text-slate-500 font-bold text-sm">Mensaje</label>
                    <input 
                        type="text"
                        placeholder="message"
                        className="px-2 py-2 rounded-lg"
                        value={ message }
                        onChange={ ({ target }) => setMessage( target.value ) }
                    />
                </div>
                <button
                    type="submit"
                    className="border-2 border-emerald-600 text-emerald-600 px-2 py-2 rounded-xl bg-white hover:bg-emerald-600 hover:text-white transition-all duration-500"
                >
                    {
                        loading ? 'Enviando...' : 'Enviar mensaje'
                    }
                </button>
            </form>
        </div>
    )
}

export default WwebPage