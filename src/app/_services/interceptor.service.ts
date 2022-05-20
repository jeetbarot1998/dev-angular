import { HttpInterceptor, HttpRequest,HttpHandler, HttpEvent } from "@angular/common/http";
import { throwError, Observable } from "rxjs";
import { catchError, finalize, tap } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { BoostService } from "./Boost.service";



@Injectable({
    providedIn:'root'
})

export class InterceptorService implements HttpInterceptor{

    constructor(private boostService: BoostService){}
    count = 0;
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const transformedRequest = req.clone({
            headers: req.headers.set('Authorization',localStorage.getItem('currentUser'))
        })

        this.boostService.ShowSpinnerSubject.next(true);
        this.count++
        return next.handle(transformedRequest).pipe(
            catchError((err)=>{
                debugger
                return throwError(err)
            }),
            finalize(() => {
                this.count--;
                if(this.count==0){
                    this.boostService.ShowSpinnerSubject.next(false)
                }
            })
        )
    }
}

