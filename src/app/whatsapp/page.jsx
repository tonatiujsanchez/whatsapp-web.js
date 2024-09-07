'use client'
import React, { useState } from 'react'
import ReactWhatsapp from '../../libs';

const WhatsappPage = () => {

    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');
  

    return (
        <div className="h-screen w-screen justify-center items-center">
            <h1 className="title">React Whatsapp</h1>
            <section className="flex flex-col gap-5 max-w-[20rem]">
                <input
                    id="number"
                    placeholder="Number"
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                />
                <input
                    id="message"
                    placeholder="Message"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
                <ReactWhatsapp number={number} message={message}>
                    Open Whatsapp
                </ReactWhatsapp>
            </section>
        </div>
    )
}

export default WhatsappPage