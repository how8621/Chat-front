import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from 'src/app/dialog/login-dialog/login-dialog.component';
import { MatInput } from '@angular/material/input';

import { UserService } from 'src/app/services/user/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

    constructor(
        private readonly dialog: MatDialog,
        private readonly userService: UserService,
    ) { }

    ngOnInit() {
        this.openLoginDialog();
    }

    public openLoginDialog() {
        const dialogRef = this.dialog.open(LoginDialogComponent, { disableClose: true });

        dialogRef.afterClosed().subscribe(result => {
            this.userService.userName = result;

            // TODO: 画面遷移
        });
    }
}
