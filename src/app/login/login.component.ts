import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from 'src/app/dialog/login-dialog/login-dialog.component';
import { MatInput } from '@angular/material/input';

import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(
        private readonly dialog: MatDialog,
        private readonly userService: UserService,
        private router: Router,
    ) { }

    ngOnInit() {
        this.openLoginDialog();
    }

    public openLoginDialog() {
        const dialogRef = this.dialog.open(LoginDialogComponent, { disableClose: true });

        dialogRef.afterClosed().subscribe(result => {
            this.userService.userName = result;

            // 画面遷移
            this.router.navigateByUrl('/game-room');
        });
    }
}
