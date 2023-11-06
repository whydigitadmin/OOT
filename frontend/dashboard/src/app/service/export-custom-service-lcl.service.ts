import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { Shipment } from "../model/user-details.model";

const BASE_URL  = "http://localhost:8080"
@Injectable({  
    providedIn :'root' 
})
export class LoginService{
    constructor(private http: HttpClient){}

   

    getShipmentCount(_shipment: Shipment): Observable<any> {
        const jsonData = JSON.stringify(_shipment);        
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post<any>(BASE_URL + "/api/v1/facade/shipment/getShipmentCount", jsonData, { headers: headers });        
    }
}