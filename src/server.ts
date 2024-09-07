import { Client, LocalAuth } from 'whatsapp-web.js'
import qrcode from 'qrcode-terminal';

console.log("Hola desde server.js")

const client = new Client({
    authStrategy: new LocalAuth(),
})

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.initialize();

