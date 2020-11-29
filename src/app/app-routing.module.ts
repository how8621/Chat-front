import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from 'src/app/login/login.component';
import { GameRoomComponent } from 'src/app/game-room/game-room.component';


const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // 첫 화면
    { path: 'login', component: LoginComponent},
    { path: 'game-room', component: GameRoomComponent},
    { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
