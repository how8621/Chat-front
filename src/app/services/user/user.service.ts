import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private username = '';

    constructor() { }

    public get userName(): string {
        return this.username;
    }

    public set userName(username: string) {
        this.username = username;
    }
}
