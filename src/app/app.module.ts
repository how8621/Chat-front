import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginDialogComponent } from './dialog/login-dialog/login-dialog.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginDialogComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSliderModule,
        MatDialogModule,
        MatButtonModule
    ],
    entryComponents: [
        LoginDialogComponent,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
