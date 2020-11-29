import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-login-dialog',
    templateUrl: './login-dialog.component.html',
    styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {

    public username = '';

    constructor(
        @Inject(MAT_DIALOG_DATA)
        public data: { name: string }
    ) { }

    ngOnInit() {
    }

}
