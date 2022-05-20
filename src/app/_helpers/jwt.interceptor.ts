import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '@app/_services';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    token: string;
    currentUser: any;
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        // this.currentUser = this.authenticationService.getToken;
        this.currentUser = localStorage.getItem('currentUser');
        // try{
        //     this.token = this.currentUser.token
        // }    
        // catch{
        //     this.token = this.currentUser
        // }
        // if (this.currentUser.token && this.currentUser.token){
        //     this.token = this.currentUser.token
        // }
        // else{
        //     this.token = this.currentUser
        // }
        // if (request['url'] != 'http://localhost:8080/Jwt_Token/key_gen' && request['url'] != 'https://buddiez-backend-api.herokuapp.com/Jwt_Token/key_gen' ) {
            if(this.currentUser != null){
            request = request.clone({
                setHeaders: {
                    Authorization: `${this.currentUser}`
                }
            });
        }

        return next.handle(request);
    }
}