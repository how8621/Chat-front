import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from 'src/app/dialog/login-dialog/login-dialog.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

    constructor(
        private readonly dialog: MatDialog,
    ) {}

    ngOnInit() {
        this.openLoginDialog();
    }

    public openLoginDialog() {
        this.dialog.open(LoginDialogComponent, { disableClose: true });
    }
}
