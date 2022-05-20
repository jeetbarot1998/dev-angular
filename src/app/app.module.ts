import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';
import {InterceptorService} from './_services/interceptor.service'
import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';;
import { TityaBdayComponent } from './titya-bday/titya-bday.component';;
import { HomeGridComponent } from './home-grid/home-grid.component'
// import { GridComponent } from './gridster/gridster.component'
import { AgGridModule} from 'ag-grid-angular'

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule,
        AgGridModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        TityaBdayComponent,
        HomeGridComponent,
       // GridComponent    
    ],
    providers: [
        // InterceptorService,
        // { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }