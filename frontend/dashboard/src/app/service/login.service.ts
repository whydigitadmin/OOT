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
    private exportDocumentationWithinslaDetails = '/api/v1/facade/export/getExportDocumentationServicewithinsla';
    private exportDocumentationOutofslaDetails = '/api/v1/facade/export/getExportDocumentationServiceOutofsla';

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
        const exportDocumentationDetails = new ExportDocumentationDetails();
        exportDocumentationDetails.action = action;
        const jsonData = JSON.stringify(exportDocumentationDetails);
        console.log('jsonData', jsonData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const urlWithParams = `${BASE_URL}${this.exportDocumentationCountDetails}`;
        // const variable = encodeURIComponent(`${action}`);
        return this.http.post<any>(urlWithParams, jsonData, { headers: headers });
    }

    getExportDocumentationWithinslaDetails(action: string): Observable<any> {
        console.log("action", action);
        const exportDocumentationDetailsWithinsla = new ExportDocumentationDetails();
        exportDocumentationDetailsWithinsla.action = action;
        const jsonData = JSON.stringify(exportDocumentationDetailsWithinsla.action);
        console.log('jsonData', jsonData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const urlWithParams = `${BASE_URL}${this.exportDocumentationWithinslaDetails}`;
        // const variable = encodeURIComponent(`${action}`);
        return this.http.post<any>(urlWithParams, jsonData, { headers: headers });
    }

    getExportDocumentationDetailsOutOfSla(action: string): Observable<any> {
        console.log("action", action);
        const exportDocumentationDetailsOutofsla = new ExportDocumentationDetails();
        exportDocumentationDetailsOutofsla.action = action;
        const jsonData = JSON.stringify(exportDocumentationDetailsOutofsla.action);
        console.log('jsonData', jsonData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const urlWithParams = `${BASE_URL}${this.exportDocumentationOutofslaDetails}`;
        // const variable = encodeURIComponent(`${action}`);
        return this.http.post<any>(urlWithParams, jsonData, { headers: headers });
    }

}