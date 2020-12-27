import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
    selector: 'app-chat-room',
    templateUrl: './chat-room.component.html',
    styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {

    public username = '';
    public message = '';
    public chatLog = '';

    constructor(
        private readonly userService: UserService,
    ) { }

    ngOnInit() {
        this.username = this.userService.userName;
    }

    public messageSend(event?: any) {
        if (this.message) {
            this.chatLog += `\n${this.username} : ${this.message}`;
            this.message = '';
        }
    }
}
