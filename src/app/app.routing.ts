import { Routes, RouterModule } from '@angular/router';
// import { GridComponent } from './gridster/gridster.component';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { TityaBdayComponent } from './titya-bday/titya-bday.component';
import { AuthGuard } from './_helpers';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'tityabday', component: TityaBdayComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },

    // { path: 'gridster', component: GridComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);