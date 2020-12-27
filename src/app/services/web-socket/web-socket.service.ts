import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/index';

@Injectable({
    providedIn: 'root'
})
export class WebSocketService {

    private url = 'http://localhost:3000';
    private socket: any;

    constructor() { }

    public connect(queryString: any) {
        // this.socket = io(this.url, { query: queryString });
    }

    public emit(emitName: string, data?: any) {
        this.socket.emit(emitName, data);
    }

    public on(onName: string) {
        const observable = new Observable(observer => {
            this.socket.on(onName, (data) => {
                observer.next(data);
            });

            return () => { this.socket.disconnect(); };
        });
        return observable;
    }
}
