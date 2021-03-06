import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { User } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/ShipmentDetails/shipment_details`);
    }

    testGet() {
        return this.http.get(`${environment.apiUrl}/MovieSearch/test_api`);
    }
}