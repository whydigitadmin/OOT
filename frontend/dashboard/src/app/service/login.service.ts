import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { ExportLclDetails, Globals, Shipment, ShipmentCount, UserDetails, UserLogin } from "../model/user-details.model";
import { Export_LCL_CustomerService } from "../model/export-model";
//import {UserDetails} from 'src\\app\\models\\UserDetails';

//const BASE_URL = "https://18.140.188.121:8080"
const BASE_URL = "http://localhost:8081"

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    private backendUrl = '/api/v1/facade/export/getExportLCLDetails';

    constructor(private http: HttpClient, private globals: Globals) { }

    getLoginInfo() {
        return this.http.get<any>(BASE_URL);
    }

    submitLoginInfo(_userDetailsRef: UserLogin): Observable<UserDetails> {
        //return this.http.post<UserInfo>(API_URL);
        const jsonData = JSON.stringify(_userDetailsRef);
        return this.http.post<UserDetails>(BASE_URL + "/api/v1/facade/user/loginInfo1", jsonData);
    }

    getShipmentCount(_shipment: Shipment): Observable<any> {
        const jsonData = JSON.stringify(_shipment);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post<any>(BASE_URL + "/api/v1/facade/shipment/getShipmentCount", jsonData, { headers: headers });

        //return this.http.post<any>(BASE_URL + "/api/v1/facade/shipment/getShipmentCount", jsonData);
    }

    getExportLCLCustomerServiceInfo(): Observable<any> {
        const jsonData = JSON.stringify(this.globals.userDetails);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post<Export_LCL_CustomerService>(BASE_URL + "/api/v1/facade/export/getLCLCustomerServiceInfo", jsonData, { headers: headers });
    }

    getExportFCLCustomerServiceInfo(): Observable<any> {
        const jsonData = JSON.stringify(this.globals.userDetails);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post<Export_LCL_CustomerService>(BASE_URL + "/api/v1/facade/export/getFCLCustomerServiceInfo", jsonData, { headers: headers });
    }

    getExportPlannerCustomerServiceInfo(): Observable<any> {
        const jsonData = JSON.stringify(this.globals.userDetails);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post<Export_LCL_CustomerService>(BASE_URL + "/api/v1/facade/export/getExportPlannerServiceInfo", jsonData, { headers: headers });
    }

    getExportDocumentationCustomerServiceInfo(): Observable<any> {
        const jsonData = JSON.stringify(this.globals.userDetails);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post<Export_LCL_CustomerService>(BASE_URL + "/api/v1/facade/export/getExportDocumentationServiceInfo", jsonData, { headers: headers });
    }

    // postData(action: string): Observable<any> {
    //     return this.http.post<any>(BASE_URL + this.backendUrl,+{action});
    // }

    getExportLclDetails(action: string): Observable<any> {
        const exportLclDetails = new ExportLclDetails();
        exportLclDetails.action = action;
        const jsonData = JSON.stringify(exportLclDetails);
        console.log('jsonData', jsonData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const urlWithParams = `${BASE_URL}${this.backendUrl}`;
        // const variable = encodeURIComponent(`${action}`);
        return this.http.post<any>(urlWithParams, jsonData, { headers: headers });
    }

    // postData(action: string): Observable<any> {
    //     let urlWithParams = `${BASE_URL}${this.backendUrl}`;

    //     if (action.trim() !== '') {
    //         urlWithParams += `?action=${encodeURIComponent(action)}`;
    //     }

    //     return this.http.post<any>(urlWithParams, {});
    // }

    // getData(action: string): Observable<any> {
    //     // Include action as a query parameter in the URL
    //     return this.http.get(`${this.backendUrl}?action=${action}`);
    // }
}