import * as http from 'http';
import * as fs from 'fs';

export let port: number = 8000;
let server: any;

export const create = (callback?: any) => {
    server = http.createServer(callback);
}

export const listenFor = (eventType: string, callback?: any) => {
    server.on(eventType, callback);
}

export const setPort = (newPort: number) => {
    port = newPort;
}

// --- KEEP AT EOF --- //
export const start = (print: boolean = true) => {
    server.listen(port);
    
    if(print) {
        console.log("Successfully started server - port: " + port);
    }
}

export const close = (print: boolean = true) => {
    server.close();

    if(print) {
        console.log("Successfully started server");
    }
}