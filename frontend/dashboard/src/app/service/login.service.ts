import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { Shipment, ShipmentCount, UserDetails, UserLogin } from "../model/user-details.model";
//import {UserDetails} from 'src\\app\\models\\UserDetails';

const BASE_URL  = "http://localhost:8080"
@Injectable({  
    providedIn :'root' 
})
export class LoginService{
    constructor(private http: HttpClient){}

    getLoginInfo(){
        return this.http.get<any>(BASE_URL);
    }

    submitLoginInfo(_userDetailsRef: UserLogin) : Observable<UserDetails>{
        //return this.http.post<UserInfo>(API_URL);
        const jsonData = JSON.stringify(_userDetailsRef);
        return this.http.post<UserDetails>(BASE_URL+ "/api/v1/facade/user/loginInfo1" , jsonData);
    }

    getShipmentCount(_shipment: Shipment): Observable<any> {
        const jsonData = JSON.stringify(_shipment);        
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post<any>(BASE_URL + "/api/v1/facade/shipment/getShipmentCount", jsonData, { headers: headers });

        //return this.http.post<any>(BASE_URL + "/api/v1/facade/shipment/getShipmentCount", jsonData);
      }
}