import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";


@Injectable({
    providedIn:'root'
})

export class BoostService{
    ShowSpinnerSubject = new BehaviorSubject<boolean>(false);
    ShowSpinnerSubjectObservable = this.ShowSpinnerSubject.asObservable();
    

    ShowSpinnerCancelSubject = new BehaviorSubject<boolean>(false);
    ShowSpinnerCancelSubjectObservable = this.ShowSpinnerCancelSubject.asObservable();

    StopServiceCall = new Subject<boolean>();
    StopServiceCallObservable = this.StopServiceCall.asObservable();
    
}



