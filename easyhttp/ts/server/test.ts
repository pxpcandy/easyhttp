import { fstat } from 'fs';
import * as server from '../index'
import * as fs from 'fs'

server.create((req: any, res: any) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./index.html', null, (error: any, data: any) => {
        if(error) {
            res.writeHead(404);
            res.write("404");
        } else {
            res.write(data);
        }
        
        res.end();
    });
});

server.start();