import { NextResponse } from 'next/server'
import { Client, LocalAuth } from 'whatsapp-web.js'
import qrcode from 'qrcode-terminal';


const client = new Client({})

// client.on('ready', () => {
//     console.log('Client is ready!');
// });

// client.on('qr', qr => {
//     qrcode.generate(qr, { small: true });
// });

// client.initialize();


export async function GET(request: Request) {
    //   client.on('qr', (qr) => {
    //       // Mostrar el QR en la terminal
    //       qrcode.generate(qr, { small: true }, (qrCode) => {
    //         console.log('Escanea este código QR para iniciar sesión en WhatsApp:');
    //         console.log(qrCode);
    //       });
    //     });

    //     client.on('ready', () => {
    //       console.log('Cliente listo para enviar mensajes!');
    //     });

    client.on('ready', () => {
        console.log('Client is ready!');
    });

    client.on('qr', qr => {
        qrcode.generate(qr, { small: true });
    });

    client.initialize();

    return NextResponse.json(
        { error: 'OK! QR-CODE' },
        { status: 200 }
    );
}




export async function POST(request: Request) {

    // const { phoneNumber='7571250112', message='Hola mundo! 🍕' } = await request.json();

    // if (!phoneNumber || !message) {
    //     return NextResponse.json(
    //         { error: 'Número de teléfono y un mensaje requeridos' },
    //         { status: 400 }
    //     );
    // }

    console.log('Llegamos al endpoint 🚀')

    try {

        client.once('ready', () => {
            client.sendMessage(`7571250112@c.us`, 'Hola mundo! 🍕')
                .then(() => {
                    console.log('Mensaje enviado con éxito');
                    // NextResponse.json(
                    //     { msg: 'Mensaje enviado con éxito' },
                    //     { status: 200 }
                    // )
                })
                .catch((err) => {
                    console.error('Error al enviar el mensaje: ', err);
                    // return NextResponse.json(
                    //     { error: 'Error al enviar el mensaje' },
                    //     { status: 400 }
                    // );
                });
        });

        client.initialize();

        return NextResponse.json(
            { error: 'OK!' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error: ', error);
        return NextResponse.json({ error: 'Error al enviar el mensaje.' }, { status: 500 });
    }
}