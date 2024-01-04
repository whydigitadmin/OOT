import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { ExportDocumentationDetails, ExportLclDetails, Globals, Shipment, ShipmentCount, UserDetails, UserLogin } from "../model/user-details.model";
import { Export_LCL_CustomerService } from "../model/export-model";
//import {UserDetails} from 'src\\app\\models\\UserDetails';

//const BASE_URL = "https://18.140.188.121:8080"
const BASE_URL = "http://localhost:8080"

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    private exportLclCountDetails = '/api/v1/facade/export/getExportLCLDetails';
    private exportLclWithinslaDetails = '/api/v1/facade/export/getExportLCLDetailsWithinsla';
    private exportLclOutOfSlaDetails = '/api/v1/facade/export/getExportLCLDetailsOutofsla';
    private exportDocumentationCountDetails = '/api/v1/facade/export/getExportDocumentationServiceCount';

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

    getExportLclDetailsCount(action: string): Observable<any> {
        const exportLclDetails = new ExportLclDetails();
        exportLclDetails.action = action;
        const jsonData = JSON.stringify(exportLclDetails);
        console.log('jsonData', jsonData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const urlWithParams = `${BASE_URL}${this.exportLclCountDetails}`;
        // const variable = encodeURIComponent(`${action}`);
        return this.http.post<any>(urlWithParams, jsonData, { headers: headers });
    }

    getExportLclDetailsWithinSla(action: string): Observable<any> {
        console.log("action", action);
        const exportLclDetailsWithinsla = new ExportLclDetails();
        exportLclDetailsWithinsla.action = action;
        const jsonData = JSON.stringify(exportLclDetailsWithinsla.action);
        console.log('jsonData', jsonData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const urlWithParams = `${BASE_URL}${this.exportLclWithinslaDetails}`;
        // const variable = encodeURIComponent(`${action}`);
        return this.http.post<any>(urlWithParams, jsonData, { headers: headers });
    }

    getExportLclDetailsOutOfSla(action: string): Observable<any> {
        console.log("action", action);
        const exportLclDetailsOutofsla = new ExportLclDetails();
        exportLclDetailsOutofsla.action = action;
        const jsonData = JSON.stringify(exportLclDetailsOutofsla.action);
        console.log('jsonData', jsonData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const urlWithParams = `${BASE_URL}${this.exportLclOutOfSlaDetails}`;
        // const variable = encodeURIComponent(`${action}`);
        return this.http.post<any>(urlWithParams, jsonData, { headers: headers });
    }

    getExportDocumentationCountDetails(action: string): Observable<any> {
        const exportLclDetails = new ExportDocumentationDetails();
        exportLclDetails.action = action;
        const jsonData = JSON.stringify(exportLclDetails);
        console.log('jsonData', jsonData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const urlWithParams = `${BASE_URL}${this.exportDocumentationCountDetails}`;
        // const variable = encodeURIComponent(`${action}`);
        return this.http.post<any>(urlWithParams, jsonData, { headers: headers });
    }

    // getExportLclDetailsWithinSla(action: string, withinsla: any): Observable<any> {
    //     const exportLclDetails1 = new ExportLclDetails();
    //     exportLclDetails1.action = action;
    //     exportLclDetails1["withinsla"] = withinsla;

    //     // Convert the ExportLclDetails instance and additional parameter to query strings
    //     const queryParams = new HttpParams()
    //         .set('action', action)
    //         .set('withinsla', withinsla)

    //     // Log the query parameters to the console
    //     console.log('queryParams', queryParams.toString());

    //     // Set the Content-Type header to application/json (optional for GET requests)
    //     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    //     // Construct the URL by combining BASE_URL, this.backendUrl, and the query parameters
    //     const urlWithParams = `${BASE_URL}${this.backendUrl1}?${queryParams.toString()}`;

    //     // Make an HTTP GET request using Angular's HttpClient.get method
    //     return this.http.get<any>(urlWithParams, { headers: headers });
    // }

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