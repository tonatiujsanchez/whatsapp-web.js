import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
// import { Client, LocalAuth } from 'whatsapp-web.js'
// import qrcode from 'qrcode-terminal';

// const client = new Client({
    // authStrategy: new LocalAuth(),
// })

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {  

    console.log("Hola desde el middleware 🚛🚚🚛🚛")

    // client.on('ready', () => {
    //     console.log('Client is ready!');
    // });

    // client.on('qr', qr => {
    //     qrcode.generate(qr, { small: true });
    // });

    // client.initialize();


    NextResponse.next()

}

// export const config = {
//     matcher: '/*',
// }