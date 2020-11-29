import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginDialogComponent } from './dialog/login-dialog/login-dialog.component';
import { FormsModule } from '@angular/forms';
import { GameRoomComponent } from './game-room/game-room.component';
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginDialogComponent,
        GameRoomComponent,
        LoginComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSliderModule,
        MatDialogModule,
        MatButtonModule,
        MatInputModule,
    ],
    entryComponents: [
        LoginDialogComponent,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
