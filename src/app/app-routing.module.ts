import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./shared/components/login/login.component";
import { RegisterComponent } from "./shared/components/register/register.component";
import { AuthGuard } from './shared/guards/auth.guard';
import { NoAuthGuard } from './shared/guards/no-auth.guard';

const router: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [NoAuthGuard]
    },
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: 'game',
        loadChildren: () => import('./game/game.module').then(m => m.GameModule),
        canActivate: [AuthGuard]
    },
]

@NgModule({
    imports: [RouterModule.forRoot(router)],
    exports: [RouterModule],
})
export class AppRoutingModule {}