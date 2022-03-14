import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import decode from 'jwt-decode';

import { environment } from '@environments/environment';
import { User } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    public getToken(): string {
        return localStorage.getItem('token');
      }
    
      public isAuthenticated(): boolean {
        // get the token
        const token = this.getToken();
        // return a boolean indicating whether or not the token is expired
        return tokenNotExpired(token);
      }

    login(Name: string, Email_id: string, Secret_key:any) {
        let requestHeaders = new HttpHeaders().set('Content-Type', 'text')
        .append('Name', Name)
        .append('Email_id', Email_id)
        .append('Secret_key', Secret_key);
        return this.http.post<any>(`${environment.apiUrl}/Jwt_Token/key_gen`, 'a' ,{
            headers: requestHeaders
        })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user['token']));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}

function tokenNotExpired(token: string): boolean {
    throw new Error('Function not implemented.');
}
