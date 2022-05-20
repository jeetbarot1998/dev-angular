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
        this.currentUser = this.authenticationService.currentUserValue;
        if (this.currentUser.token){
            this.token = this.currentUser.token
        }
        else{
            this.token = this.currentUser
        }
        // if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `${this.token}`
                }
            });
        // }

        return next.handle(request);
    }
}