import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { ActionDetails, AirExportBlreleaseDeskDetails, ExportCustomerServiceDetails, ExportDocumentationDetails, ExportLclDetails, ExportPlannerDetails, Globals, ImportCustomerServiceDetails, ImportDocumentationDetails, ImportLclDetails, ImportTranshipmentDeskDetails, Shipment, ShipmentCount, UserDetails, UserLogin } from "../model/user-details.model";
import { Air_Export_CustomerService, Air_Import_CustomerService, Export_LCL_CustomerService, Import_LCL_CustomerService } from "../model/export-model";
//import {UserDetails} from 'src\\app\\models\\UserDetails';

// const BASE_URL = "https://18.140.188.121:8080"
 const BASE_URL = "http://localhost:8080"
//const BASE_URL = "https://os.onlinetracking.co:8080"

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    private exportSalesSupportCountDetails = '/api/v1/facade/export/getExportSalesSupportSeaDetailsInfo';
    private importSalesSupportCountDetails = '/api/v1/facade/import/getImportSalesSupportSeaDetailsInfo';
    private exportLclCountDetails = '/api/v1/facade/export/getExportLCLDetails';
    private exportLclWithinslaDetails = '/api/v1/facade/export/getExportLCLDetailsWithinsla';
    //private exportLclOutOfSlaDetails = '/api/v1/facade/export/getExportLCLDetailsOutofsla';
    private exportLclOutOfSlaDetails = '/api/v1/facade/export/getExportLCLDetailsOutofslav1';
    private exportFclCountDetails = '/api/v1/facade/export/getExportFCLDetails';
    private exportFclWithinslaDetails = '/api/v1/facade/export/getExportFCLDetailsWithinsla';
    private exportFclOutOfSlaDetails = '/api/v1/facade/export/getExportFCLDetailsOutofsla';
    private exportDocumentationCountDetails = '/api/v1/facade/export/getExportDocumentationServiceCount';
    private exportDocumentationWithinslaDetails = '/api/v1/facade/export/getExportDocumentationServicewithinsla';
    private exportDocumentationOutofslaDetails = '/api/v1/facade/export/getExportDocumentationServiceOutofsla';
    private exportPlannerCountDetails = '/api/v1/facade/export/getExportPlannerServiceCount';
    private exportPlannerWithinslaDetails = '/api/v1/facade/export/getExportPlannerServicewithinsla';
    private exportPlannerOutofslaDetails = '/api/v1/facade/export/getExportPlannerServiceOutofsla';
    private exportBlReleaseDeskCountDetails = '/api/v1/facade/export/getExportBLReleaseDeskSeaDetails';
    private exportBlreleaseDeskWithinslaDetails = '/api/v1/facade/export/getExportBLReleaseDeskSeaDetailsWithinsla';
    private exportBlreleaseDeskOutOfSlaDetails = '/api/v1/facade/export/getExportBLReleaseDeskSeaDetailsOutofsla';
    private importLclCountDetails = '/api/v1/facade/import/getImportLCLDetails';
    private importLclWithinslaDetails = '/api/v1/facade/import/getImportLCLDetailsWithinsla';
    private importLclOutOfSlaDetails = '/api/v1/facade/import/getImportLCLDetailsOutofsla';
    private importDocumentationCountDetails = '	/api/v1/facade/import/getImportDocumentationDetails';
    private importDocumentationWithinslaDetails = '/api/v1/facade/import/getImportDocumentationDetailsWithinsla';
    private importDocumentationOutofslaDetails = '	/api/v1/facade/import/getImportDocumentationDetailsOutofsla';
    private importtranshipmentDeskCountDetails = '	/api/v1/facade/import/getImportTranshipmentSeaDetails';
    private importtranshipmentDeskWithinslaDetails = '/api/v1/facade/import/getImportTranshipmentSeaDetailsWithinsla';
    private importtranshipmentDeskOutofslaDetails = '/api/v1/facade/import/getImportTranshipmentSeaDetailsOutofsla';
    private airexportSalesSupportCountDetails = '/api/v1/facade/export/getExportSalesSupportAirDetailsInfo';
    private airimportSalesSupportCountDetails = '/api/v1/facade/import/getImportSalesSupportDetailsAirInfo';
    private airexportDocumentationCountDetails = '/api/v1/facade/export/getExportDocumentationAirCount';
    private airexportDocumentationWithinslaDetails = '/api/v1/facade/export/getExportDocumentationAirWithinsla';
    private airexportDocumentationOutofslaDetails = '/api/v1/facade/export/getExportDocumentationAirOutofsla';
    private airexportPlannerCountDetails = '/api/v1/facade/export/getExportPlannerAirCount';
    private airexportPlannerWithinslaDetails = '/api/v1/facade/export/getExportPlannerAirWithinsla';
    private airexportPlannerOutofslaDetails = '/api/v1/facade/export/getExportPlannerAIrOutofsla';
    private airexportCustomerCountDetails = '/api/v1/facade/export/getAirExportCustomerServiceDetails';
    private airexportCustomerWithinslaDetails = '/api/v1/facade/export/getAirExportCustomerServiceDetailsWithinsla';
    private airexportCustomerOutofslaDetails = '/api/v1/facade/export/getAirExportCustomerServiceDetailsOutofsla';
    private airexportBlreleaseDeskCountDetails = '/api/v1/facade/export/getExportBLReleaseDeskAirDetails';
    private airexportBlreleaseDeskWithinslaDetails = '/api/v1/facade/export/getExportBLReleaseDeskAirDetailsWithinsla';
    private airexportBlreleaseDeskOutofslaDetails = '/api/v1/facade/export/getExportBLReleaseDeskAirDetailsOutofsla';
    private airimportCustomerCountDetails = '/api/v1/facade/import/getImportCustomerServiceAirDetails';
    private airimportCustomerWithinslaDetails = '/api/v1/facade/import/getImportCustomerServiceAirDetailsWithinsla';
    private airimportCustomerOutofslaDetails = '/api/v1/facade/import/getImportCustomerServiceAirDetailsOutofsla';
    private airimportDocumentationCountDetails = '/api/v1/facade/import/getImportDocumentationAirDetails';
    private airimportDocumentationWithinslaDetails = '/api/v1/facade/import/getImportDocumentationAirDetailsWithinsla';
    private airimportDocumentationOutofslaDetails = '/api/v1/facade/import/getImportDocumentationAirDetailsOutofsla';
    private airimporttranshipmentDeskCountDetails = '	/api/v1/facade/import/getImportTranshipmentAirDetails';
    private airimporttranshipmentDeskWithinslaDetails = '/api/v1/facade/import/getImportTranshipmentAirDetailsWithinsla';
    private airimporttranshipmentDeskOutofslaDetails = '/api/v1/facade/import/getImportTranshipmentAirDetailsOutofsla';




    constructor(private http: HttpClient, private globals: Globals) { }

    getLoginInfo() {
        return this.http.get<any>(BASE_URL);
    }

    submitLoginInfo(_userDetailsRef: UserLogin) {
        const httpheaders = new HttpHeaders({
            'Authorization': 'Basic ' + btoa(_userDetailsRef.email + ':' + '123'),
            'Content-Type': 'application/json'
        });
        const jsonData = JSON.stringify(_userDetailsRef);
        return this.http.post(BASE_URL + "/api/v1/facade/user/loginInfo1", jsonData, {  headers: httpheaders ,  observe: 'response', withCredentials : true });
    }

    getShipmentCount(_shipment: Shipment): Observable<any> {
        const jsonData = JSON.stringify(_shipment);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post<any>(BASE_URL + "/api/v1/facade/shipment/getShipmentCount", jsonData, { headers: headers });

        //return this.http.post<any>(BASE_URL + "/api/v1/facade/shipment/getShipmentCount", jsonData);
    }

    getExportSalesSupportCustomerServiceInfo(): Observable<any> {
        const jsonData = JSON.stringify(this.globals.userDetails);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post<Export_LCL_CustomerService>(BASE_URL + "/api/v1/facade/export/getExportSalesSupportSeaInfo", jsonData, { headers: headers });
    }

    getImportSalesSupportCustomerServiceInfo(): Observable<any> {
        const jsonData = JSON.stringify(this.globals.userDetails);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post<Import_LCL_CustomerService>(BASE_URL + "/api/v1/facade/import/getImportSalesSupportSeaInfo", jsonData, { headers: headers });
    }

    getExportLCLCustomerServiceInfo(): Observable<any> {
        const jsonData = JSON.stringify(this.globals.userDetails);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post<Export_LCL_CustomerService>(BASE_URL + "/api/v1/facade/export/getLCLCustomerServiceInfo", jsonData, { headers: headers });
    }

    getImportLCLCustomerServiceInfo(): Observable<any> {
        const jsonData = JSON.stringify(this.globals.userDetails);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post<Import_LCL_CustomerService>(BASE_URL + "/api/v1/facade/import/getImportLCLCustomerServiceInfo", jsonData, { headers: headers });
    }

    getExportFCLCustomerServiceInfo(): Observable<any> {
        const jsonData = JSON.stringify(this.globals.userDetails);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post<Export_LCL_CustomerService>(BASE_URL + "/api/v1/facade/export/getFCLCustomerServiceInfo", jsonData, { headers: headers });
    }

    getImportFCLCustomerServiceInfo(): Observable<any> {
        const jsonData = JSON.stringify(this.globals.userDetails);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post<Import_LCL_CustomerService>(BASE_URL + "/api/v1/facade/import/getImportFCLCustomerServiceInfo", jsonData, { headers: headers });
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

    getExportBLreleaseDeskCustomerServiceInfo(): Observable<any> {
        const jsonData = JSON.stringify(this.globals.userDetails);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post<Export_LCL_CustomerService>(BASE_URL + "/api/v1/facade/export/getExportBLReleaseDeskSeaInfo", jsonData, { headers: headers });
    }

    getImportDocumentationCustomerServiceInfo(): Observable<any> {
        const jsonData = JSON.stringify(this.globals.userDetails);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post<Import_LCL_CustomerService>(BASE_URL + "/api/v1/facade/import/getImportDocumentationCustomerServiceInfo", jsonData, { headers: headers });
    }

    getImportTranshipmentDeskCustomerServiceInfo(): Observable<any> {
        const jsonData = JSON.stringify(this.globals.userDetails);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post<Import_LCL_CustomerService>(BASE_URL + "/api/v1/facade/import/getImportTranshipmentServiceSeaInfo", jsonData, { headers: headers });
    }

    getAirExportSalesCustomerServiceInfo(): Observable<any> {
        const jsonData = JSON.stringify(this.globals.userDetails);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post<Air_Export_CustomerService>(BASE_URL + "/api/v1/facade/export/getExportSalesSupportAirInfo", jsonData, { headers: headers });
    }

    getAirExportCsCustomerServiceInfo(): Observable<any> {
        const jsonData = JSON.stringify(this.globals.userDetails);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post<Air_Export_CustomerService>(BASE_URL + "/api/v1/facade/export/getAirExportCustomerServiceInfo", jsonData, { headers: headers });
    }

    getAirExportDocumentationCustomerServiceInfo(): Observable<any> {
        const jsonData = JSON.stringify(this.globals.userDetails);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post<Air_Export_CustomerService>(BASE_URL + "/api/v1/facade/export/getExportDocumentationServiceAirInfo", jsonData, { headers: headers });
    }

    getAirExportPlannerCustomerServiceInfo(): Observable<any> {
        const jsonData = JSON.stringify(this.globals.userDetails);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post<Air_Export_CustomerService>(BASE_URL + "/api/v1/facade/export/getExportPlannerServiceAirInfo", jsonData, { headers: headers });
    }

    getAirExportBlreleaseDeskCustomerServiceInfo(): Observable<any> {
        const jsonData = JSON.stringify(this.globals.userDetails);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post<Air_Export_CustomerService>(BASE_URL + "/api/v1/facade/export/getExportBLReleaseDeskAirInfo", jsonData, { headers: headers });
    }

    getAirImportSalesCustomerServiceInfo(): Observable<any> {
        const jsonData = JSON.stringify(this.globals.userDetails);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post<Air_Import_CustomerService>(BASE_URL + "/api/v1/facade/import/getImportSalesSupportAirInfo", jsonData, { headers: headers });
    }

    getAirImportCSCustomerServiceInfo(): Observable<any> {
        const jsonData = JSON.stringify(this.globals.userDetails);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post<Air_Import_CustomerService>(BASE_URL + "/api/v1/facade/import/getImportCustomerServiceAirInfo", jsonData, { headers: headers });
    }

    getAirImportDocumentationCustomerServiceInfo(): Observable<any> {
        const jsonData = JSON.stringify(this.globals.userDetails);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post<Air_Import_CustomerService>(BASE_URL + "/api/v1/facade/import/getImportDocumentationServiceAirInfo", jsonData, { headers: headers });
    }

    getAirImportTranshipmentDeskCustomerServiceInfo(): Observable<any> {
        const jsonData = JSON.stringify(this.globals.userDetails);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post<Air_Import_CustomerService>(BASE_URL + "/api/v1/facade/import/getImportTranshipmentServiceAirInfo", jsonData, { headers: headers });
    }

    // postData(action: string): Observable<any> {
    //     return this.http.post<any>(BASE_URL + this.backendUrl,+{action});
    // }

    getExportSalesSupportDetailsCount(action: string): Observable<any> {
        const exportSalesSupportDetails = new ExportLclDetails();
        exportSalesSupportDetails.action = action;
        exportSalesSupportDetails.company = this.globals.userDetails.companyId;
        const jsonData = JSON.stringify(exportSalesSupportDetails);
        console.log('jsonData', jsonData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const urlWithParams = `${BASE_URL}${this.exportSalesSupportCountDetails}`;
        // const variable = encodeURIComponent(`${action}`);
        return this.http.post<any>(urlWithParams, jsonData, { headers: headers });
    }

    getImportSalesSupportDetailsCount(action: string): Observable<any> {
        const importSalesSupportDetails = new ExportLclDetails();
        importSalesSupportDetails.action = action;
        const jsonData = JSON.stringify(importSalesSupportDetails);
        console.log('jsonData', jsonData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const urlWithParams = `${BASE_URL}${this.importSalesSupportCountDetails}`;
        // const variable = encodeURIComponent(`${action}`);
        return this.http.post<any>(urlWithParams, jsonData, { headers: headers });
    }

    getAirImportSalesSupportDetailsCount(action: string): Observable<any> {
        const airimportSalesSupportDetails = new ImportLclDetails();
        airimportSalesSupportDetails.action = action;
        const jsonData = JSON.stringify(airimportSalesSupportDetails);
        console.log('jsonData', jsonData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const urlWithParams = `${BASE_URL}${this.airimportSalesSupportCountDetails}`;
        // const variable = encodeURIComponent(`${action}`);
        return this.http.post<any>(urlWithParams, jsonData, { headers: headers });
    }

    getExportLclDetailsCount(action: string): Observable<any> {
        const exportLclDetails = new ExportLclDetails();
        exportLclDetails.action = action;
        exportLclDetails.company = this.globals.userDetails.companyId;
        //exportLclDetails.branch = this.globals.userDetails.homeBranch;
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

    getExportFclDetailsCount(action: string): Observable<any> {
        const exportFclDetails = new ActionDetails();
        exportFclDetails.action = action;
        const jsonData = JSON.stringify(exportFclDetails);
        console.log('jsonData', jsonData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const urlWithParams = `${BASE_URL}${this.exportFclCountDetails}`;
        // const variable = encodeURIComponent(`${action}`);
        return this.http.post<any>(urlWithParams, jsonData, { headers: headers });
    }

    getExportFclDetailsWithinSla(action: string): Observable<any> {
        console.log("action", action);
        const exportFclDetailsWithinsla = new ActionDetails();
        exportFclDetailsWithinsla.action = action;
        const jsonData = JSON.stringify(exportFclDetailsWithinsla.action);
        console.log('jsonData', jsonData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const urlWithParams = `${BASE_URL}${this.exportFclWithinslaDetails}`;
        // const variable = encodeURIComponent(`${action}`);
        return this.http.post<any>(urlWithParams, jsonData, { headers: headers });
    }

    getExportFclDetailsOutOfSla(action: string): Observable<any> {
        console.log("action", action);
        const exportFclDetailsOutofsla = new ActionDetails();
        exportFclDetailsOutofsla.action = action;
        const jsonData = JSON.stringify(exportFclDetailsOutofsla.action);
        console.log('jsonData', jsonData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const urlWithParams = `${BASE_URL}${this.exportFclOutOfSlaDetails}`;
        // const variable = encodeURIComponent(`${action}`);
        return this.http.post<any>(urlWithParams, jsonData, { headers: headers });
    }

    getExportBlreleaseDeskDetailsCount(action: string): Observable<any> {
        const exportBlreleaseDeskDetails = new ExportLclDetails();
        exportBlreleaseDeskDetails.action = action;
        const jsonData = JSON.stringify(exportBlreleaseDeskDetails);
        console.log('jsonData', jsonData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const urlWithParams = `${BASE_URL}${this.exportBlReleaseDeskCountDetails}`;
        // const variable = encodeURIComponent(`${action}`);
        return this.http.post<any>(urlWithParams, jsonData, { headers: headers });
    }

    getExportBlreleaseDeskDetailsWithinSla(action: string): Observable<any> {
        console.log("action", action);
        const exportBlreleaseDeskDetailsWithinsla = new ExportLclDetails();
        exportBlreleaseDeskDetailsWithinsla.action = action;
        const jsonData = JSON.stringify(exportBlreleaseDeskDetailsWithinsla.action);
        console.log('jsonData', jsonData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const urlWithParams = `${BASE_URL}${this.exportBlreleaseDeskWithinslaDetails}`;
        // const variable = encodeURIComponent(`${action}`);
        return this.http.post<any>(urlWithParams, jsonData, { headers: headers });
    }

    getExportBlreleaseDeskDetailsOutOfSla(action: string): Observable<any> {
        console.log("action", action);
        const exportBlreleaseDeskDetailsOutofsla = new ExportLclDetails();
        exportBlreleaseDeskDetailsOutofsla.action = action;
        const jsonData = JSON.stringify(exportBlreleaseDeskDetailsOutofsla.action);
        console.log('jsonData', jsonData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const urlWithParams = `${BASE_URL}${this.exportBlreleaseDeskOutOfSlaDetails}`;
        // const variable = encodeURIComponent(`${action}`);
        return this.http.post<any>(urlWithParams, jsonData, { headers: headers });
    }

    getImportLclDetailsCount(action: string): Observable<any> {
        const importLclDetails = new ImportLclDetails();
        importLclDetails.action = action;
        const jsonData = JSON.stringify(importLclDetails);
        console.log('jsonData', jsonData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const urlWithParams = `${BASE_URL}${this.importLclCountDetails}`;
        // const variable = encodeURIComponent(`${action}`);
        return this.http.post<any>(urlWithParams, jsonData, { headers: headers });
    }

    getImportLclDetailsWithinSla(action: string): Observable<any> {
        console.log("action", action);
        const importLclDetailsWithinsla = new ImportLclDetails();
        importLclDetailsWithinsla.action = action;
        const jsonData = JSON.stringify(importLclDetailsWithinsla.action);
        console.log('jsonData', jsonData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const urlWithParams = `${BASE_URL}${this.importLclWithinslaDetails}`;
        // const variable = encodeURIComponent(`${action}`);
        return this.http.post<any>(urlWithParams, jsonData, { headers: headers });
    }

    getImportLclDetailsOutOfSla(action: string): Observable<any> {
        console.log("action", action);
        const importLclDetailsOutofsla = new ImportLclDetails();
        importLclDetailsOutofsla.action = action;
        const jsonData = JSON.stringify(importLclDetailsOutofsla.action);
        console.log('jsonData', jsonData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const urlWithParams = `${BASE_URL}${this.importLclOutOfSlaDetails}`;
        // const variable = encodeURIComponent(`${action}`);
        return this.http.post<any>(urlWithParams, jsonData, { headers: headers });
    }

    // getImportFclDetailsCount(action: string): Observable<any> {
    //     const importLclDetails = new ImportLclDetails();
    //     importLclDetails.action = action;
    //     const jsonData = JSON.stringify(importLclDetails);
    //     console.log('jsonData', jsonData);
    //     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    //     const urlWithParams = `${BASE_URL}${this.importLclCountDetails}`;
    //     // const variable = encodeURIComponent(`${action}`);
    //     return this.http.post<any>(urlWithParams, jsonData, { headers: headers });
    // }

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

    getImportDocumentationCountDetails(action: string): Observable<any> {
        const importDocumentationDetails = new ImportDocumentationDetails();
        importDocumentationDetails.action = action;
        const jsonData = JSON.stringify(importDocumentationDetails);
        console.log('jsonData', jsonData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const urlWithParams = `${BASE_URL}${this.importDocumentationCountDetails}`;
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

    getImportDocumentationWithinslaDetails(action: string): Observable<any> {
        console.log("action", action);
        const importDocumentationDetailsWithinsla = new ImportDocumentationDetails();
        importDocumentationDetailsWithinsla.action = action;
        const jsonData = JSON.stringify(importDocumentationDetailsWithinsla.action);
        console.log('jsonData', jsonData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const urlWithParams = `${BASE_URL}${this.importDocumentationWithinslaDetails}`;
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

    getImportDocumentationDetailsOutOfSla(action: string): Observable<any> {
        console.log("action", action);
        const importDocumentationDetailsOutofsla = new ImportDocumentationDetails();
        importDocumentationDetailsOutofsla.action = action;
        const jsonData = JSON.stringify(importDocumentationDetailsOutofsla.action);
        console.log('jsonData', jsonData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const urlWithParams = `${BASE_URL}${this.importDocumentationOutofslaDetails}`;
        // const variable = encodeURIComponent(`${action}`);
        return this.http.post<any>(urlWithParams, jsonData, { headers: headers });
    }

    getExportPlannerCountDetails(action: string): Observable<any> {
        const exportPlannerDetails = new ExportPlannerDetails();
        exportPlannerDetails.action = action;
        const jsonData = JSON.stringify(exportPlannerDetails);
        console.log('jsonData', jsonData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const urlWithParams = `${BASE_URL}${this.exportPlannerCountDetails}`;
        // const variable = encodeURIComponent(`${action}`);
        return this.http.post<any>(urlWithParams, jsonData, { headers: headers });
    }

    getExportPlannerWithinslaDetails(action: string): Observable<any> {
        console.log("action", action);
        const exportPlannerDetails = new ExportPlannerDetails();
        exportPlannerDetails.action = action;
        const jsonData = JSON.stringify(exportPlannerDetails.action);
        console.log('jsonData', jsonData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const urlWithParams = `${BASE_URL}${this.exportPlannerWithinslaDetails}`;
        // const variable = encodeURIComponent(`${action}`);
        return this.http.post<any>(urlWithParams, jsonData, { headers: headers });
    }

    getExportPlannerOutOfSlaDetails(action: string): Observable<any> {
        console.log("action", action);
        const exportPlannerDetails = new ExportPlannerDetails();
        exportPlannerDetails.action = action;
        const jsonData = JSON.stringify(exportPlannerDetails.action);
        console.log('jsonData', jsonData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const urlWithParams = `${BASE_URL}${this.exportPlannerOutofslaDetails}`;
        // const variable = encodeURIComponent(`${action}`);
        return this.http.post<any>(urlWithParams, jsonData, { headers: headers });
    }

    getImporttranshipmentDeskCountDetails(action: string): Observable<any> {
        const importtranshipmentDeskDetails = new ImportTranshipmentDeskDetails();
        importtranshipmentDeskDetails.action = action;
        const jsonData = JSON.stringify(importtranshipmentDeskDetails);
        console.log('jsonData', jsonData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const urlWithParams = `${BASE_URL}${this.importtranshipmentDeskCountDetails}`;
        // const variable = encodeURIComponent(`${action}`);
        return this.http.post<any>(urlWithParams, jsonData, { headers: headers });
    }

    getImporttranshipmentDeskWithinslaDetails(action: string): Observable<any> {
        console.log("action", action);
        const importtranshipmentDeskDetailsWithinsla = new ImportTranshipmentDeskDetails();
        importtranshipmentDeskDetailsWithinsla.action = action;
        const jsonData = JSON.stringify(importtranshipmentDeskDetailsWithinsla.action);
        console.log('jsonData', jsonData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const urlWithParams = `${BASE_URL}${this.importtranshipmentDeskWithinslaDetails}`;
        // const variable = encodeURIComponent(`${action}`);
        return this.http.post<any>(urlWithParams, jsonData, { headers: headers });
    }

    getImporttranshipmentDeskDetailsOutOfSla(action: string): Observable<any> {
        console.log("action", action);
        const importtranshipmentDeskDetailsOutofsla = new ImportTranshipmentDeskDetails();
        importtranshipmentDeskDetailsOutofsla.action = action;
        const jsonData = JSON.stringify(importtranshipmentDeskDetailsOutofsla.action);
        console.log('jsonData', jsonData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const urlWithParams = `${BASE_URL}${this.importtranshipmentDeskOutofslaDetails}`;
        // const variable = encodeURIComponent(`${action}`);
        return this.http.post<any>(urlWithParams, jsonData, { headers: headers });
    }

    getAirExportSalesSupportDetailsCount(action: string): Observable<any> {
        const airexportSalesSupportDetails = new ExportLclDetails();
        airexportSalesSupportDetails.action = action;
        const jsonData = JSON.stringify(airexportSalesSupportDetails);
        console.log('jsonData', jsonData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const urlWithParams = `${BASE_URL}${this.airexportSalesSupportCountDetails}`;
        // const variable = encodeURIComponent(`${action}`);
        return this.http.post<any>(urlWithParams, jsonData, { headers: headers });
    }

    getAirExportDocumentationDetailsCount(action: string): Observable<any> {
        const airexportDocumentationDetails = new ExportLclDetails();
        airexportDocumentationDetails.action = action;
        const jsonData = JSON.stringify(airexportDocumentationDetails);
        console.log('jsonData', jsonData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const urlWithParams = `${BASE_URL}${this.airexportDocumentationCountDetails}`;
        // const variable = encodeURIComponent(`${action}`);
        return this.http.post<any>(urlWithParams, jsonData, { headers: headers });
    }

    getAirExportDocumentationDetailsWithinsla(action: string): Observable<any> {
        console.log("action", action);
        const airexportDocumentationWithinslaDetails = new ExportDocumentationDetails();
        airexportDocumentationWithinslaDetails.action = action;
        const jsonData = JSON.stringify(airexportDocumentationWithinslaDetails.action);
        console.log('jsonData', jsonData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const urlWithParams = `${BASE_URL}${this.airexportDocumentationWithinslaDetails}`;
        // const variable = encodeURIComponent(`${action}`);
        return this.http.post<any>(urlWithParams, jsonData, { headers: headers });
    }

    getAirExportDocumentationDetailsOutOfSla(action: string): Observable<any> {
        console.log("action", action);
        const airexportDocumentationDetailsOutofsla = new ExportDocumentationDetails();
        airexportDocumentationDetailsOutofsla.action = action;
        const jsonData = JSON.stringify(airexportDocumentationDetailsOutofsla.action);
        console.log('jsonData', jsonData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const urlWithParams = `${BASE_URL}${this.airexportDocumentationOutofslaDetails}`;
        // const variable = encodeURIComponent(`${action}`);
        return this.http.post<any>(urlWithParams, jsonData, { headers: headers });
    }

    getAirExportPlannerCountDetails(action: string): Observable<any> {
        const airexportPlannerDetails = new ExportPlannerDetails();
        airexportPlannerDetails.action = action;
        const jsonData = JSON.stringify(airexportPlannerDetails);
        console.log('jsonData', jsonData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const urlWithParams = `${BASE_URL}${this.airexportPlannerCountDetails}`;
        // const variable = encodeURIComponent(`${action}`);
        return this.http.post<any>(urlWithParams, jsonData, { headers: headers });
    }

    getAirExportPlannerWithinslaDetails(action: string): Observable<any> {
        console.log("action", action);
        const airexportPlannerDetails = new ExportPlannerDetails();
        airexportPlannerDetails.action = action;
        const jsonData = JSON.stringify(airexportPlannerDetails.action);
        console.log('jsonData', jsonData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const urlWithParams = `${BASE_URL}${this.airexportPlannerWithinslaDetails}`;
        // const variable = encodeURIComponent(`${action}`);
        return this.http.post<any>(urlWithParams, jsonData, { headers: headers });
    }

    getAirExportPlannerOutOfSlaDetails(action: string): Observable<any> {
        console.log("action", action);
        const airexportPlannerDetails = new ExportPlannerDetails();
        airexportPlannerDetails.action = action;
        const jsonData = JSON.stringify(airexportPlannerDetails.action);
        console.log('jsonData', jsonData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const urlWithParams = `${BASE_URL}${this.airexportPlannerOutofslaDetails}`;
        // const variable = encodeURIComponent(`${action}`);
        return this.http.post<any>(urlWithParams, jsonData, { headers: headers });
    }
    getAirExportCustomerCountDetails(action: string): Observable<any> {
        const airexportCustomerCountDetails = new ExportCustomerServiceDetails();
        airexportCustomerCountDetails.action = action;
        const jsonData = JSON.stringify(airexportCustomerCountDetails);
        console.log('jsonData', jsonData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const urlWithParams = `${BASE_URL}${this.airexportCustomerCountDetails}`;
        // const variable = encodeURIComponent(`${action}`);
        return this.http.post<any>(urlWithParams, jsonData, { headers: headers });
    }

    getAirExportCustomerWithinslaDetails(action: string): Observable<any> {
        console.log("action", action);
        const airexportCustomerWithinslaDetails = new ExportCustomerServiceDetails();
        airexportCustomerWithinslaDetails.action = action;
        const jsonData = JSON.stringify(airexportCustomerWithinslaDetails.action);
        console.log('jsonData', jsonData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const urlWithParams = `${BASE_URL}${this.airexportCustomerWithinslaDetails}`;
        // const variable = encodeURIComponent(`${action}`);
        return this.http.post<any>(urlWithParams, jsonData, { headers: headers });
    }

    getAirExportCustomerOutOfSlaDetails(action: string): Observable<any> {
        console.log("action", action);
        const airexportCustomerOutofslaDetails = new ExportCustomerServiceDetails();
        airexportCustomerOutofslaDetails.action = action;
        const jsonData = JSON.stringify(airexportCustomerOutofslaDetails.action);
        console.log('jsonData', jsonData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const urlWithParams = `${BASE_URL}${this.airexportCustomerOutofslaDetails}`;
        // const variable = encodeURIComponent(`${action}`);
        return this.http.post<any>(urlWithParams, jsonData, { headers: headers });
    }

    getAirExportBlreleaseDeskCountDetails(action: string): Observable<any> {
        const airexportBlreleaseDeskDetails = new AirExportBlreleaseDeskDetails();
        airexportBlreleaseDeskDetails.action = action;
        const jsonData = JSON.stringify(airexportBlreleaseDeskDetails);
        console.log('jsonData', jsonData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const urlWithParams = `${BASE_URL}${this.airexportBlreleaseDeskCountDetails}`;
        // const variable = encodeURIComponent(`${action}`);
        return this.http.post<any>(urlWithParams, jsonData, { headers: headers });
    }

    getAirExportBlreleaseDeskWithinslaDetails(action: string): Observable<any> {
        console.log("action", action);
        const airexportBlreleaseDeskDetails = new AirExportBlreleaseDeskDetails();
        airexportBlreleaseDeskDetails.action = action;
        const jsonData = JSON.stringify(airexportBlreleaseDeskDetails.action);
        console.log('jsonData', jsonData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const urlWithParams = `${BASE_URL}${this.airexportBlreleaseDeskWithinslaDetails}`;
        // const variable = encodeURIComponent(`${action}`);
        return this.http.post<any>(urlWithParams, jsonData, { headers: headers });
    }

    getAirExportBlreleaseDeskOutOfSlaDetails(action: string): Observable<any> {
        console.log("action", action);
        const airexportBlreleaseDeskDetails = new AirExportBlreleaseDeskDetails();
        airexportBlreleaseDeskDetails.action = action;
        const jsonData = JSON.stringify(airexportBlreleaseDeskDetails.action);
        console.log('jsonData', jsonData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const urlWithParams = `${BASE_URL}${this.airexportBlreleaseDeskOutofslaDetails}`;
        // const variable = encodeURIComponent(`${action}`);
        return this.http.post<any>(urlWithParams, jsonData, { headers: headers });
    }

    getAirImportCustomerCountDetails(action: string): Observable<any> {
        const airimportCustomerCountDetails = new ImportCustomerServiceDetails();
        airimportCustomerCountDetails.action = action;
        const jsonData = JSON.stringify(airimportCustomerCountDetails);
        console.log('jsonData', jsonData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const urlWithParams = `${BASE_URL}${this.airimportCustomerCountDetails}`;
        // const variable = encodeURIComponent(`${action}`);
        return this.http.post<any>(urlWithParams, jsonData, { headers: headers });
    }

    getAirImportCustomerWithinslaDetails(action: string): Observable<any> {
        console.log("action", action);
        const airimportCustomerWithinslaDetails = new ImportCustomerServiceDetails();
        airimportCustomerWithinslaDetails.action = action;
        const jsonData = JSON.stringify(airimportCustomerWithinslaDetails.action);
        console.log('jsonData', jsonData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const urlWithParams = `${BASE_URL}${this.airimportCustomerWithinslaDetails}`;
        // const variable = encodeURIComponent(`${action}`);
        return this.http.post<any>(urlWithParams, jsonData, { headers: headers });
    }

    getAirImportCustomerOutOfSlaDetails(action: string): Observable<any> {
        console.log("action", action);
        const airexportCustomerOutofslaDetails = new ImportCustomerServiceDetails();
        airexportCustomerOutofslaDetails.action = action;
        const jsonData = JSON.stringify(airexportCustomerOutofslaDetails.action);
        console.log('jsonData', jsonData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const urlWithParams = `${BASE_URL}${this.airimportCustomerOutofslaDetails}`;
        // const variable = encodeURIComponent(`${action}`);
        return this.http.post<any>(urlWithParams, jsonData, { headers: headers });
    }

    getAirImportDocumentationDetailsCount(action: string): Observable<any> {
        const airimportDocumentationDetails = new ExportLclDetails();
        airimportDocumentationDetails.action = action;
        const jsonData = JSON.stringify(airimportDocumentationDetails);
        console.log('jsonData', jsonData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const urlWithParams = `${BASE_URL}${this.airimportDocumentationCountDetails}`;
        // const variable = encodeURIComponent(`${action}`);
        return this.http.post<any>(urlWithParams, jsonData, { headers: headers });
    }

    getAirImportDocumentationDetailsWithinsla(action: string): Observable<any> {
        console.log("action", action);
        const airimportDocumentationWithinslaDetails = new ExportDocumentationDetails();
        airimportDocumentationWithinslaDetails.action = action;
        const jsonData = JSON.stringify(airimportDocumentationWithinslaDetails.action);
        console.log('jsonData', jsonData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const urlWithParams = `${BASE_URL}${this.airimportDocumentationWithinslaDetails}`;
        // const variable = encodeURIComponent(`${action}`);
        return this.http.post<any>(urlWithParams, jsonData, { headers: headers });
    }

    getAirImportDocumentationDetailsOutOfSla(action: string): Observable<any> {
        console.log("action", action);
        const airimportDocumentationDetailsOutofsla = new ExportDocumentationDetails();
        airimportDocumentationDetailsOutofsla.action = action;
        const jsonData = JSON.stringify(airimportDocumentationDetailsOutofsla.action);
        console.log('jsonData', jsonData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const urlWithParams = `${BASE_URL}${this.airimportDocumentationOutofslaDetails}`;
        // const variable = encodeURIComponent(`${action}`);
        return this.http.post<any>(urlWithParams, jsonData, { headers: headers });
    }

    getAirImporttranshipmentDeskCountDetails(action: string): Observable<any> {
        const airimporttranshipmentDeskDetails = new ImportTranshipmentDeskDetails();
        airimporttranshipmentDeskDetails.action = action;
        const jsonData = JSON.stringify(airimporttranshipmentDeskDetails);
        console.log('jsonData', jsonData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const urlWithParams = `${BASE_URL}${this.airimporttranshipmentDeskCountDetails}`;
        // const variable = encodeURIComponent(`${action}`);
        return this.http.post<any>(urlWithParams, jsonData, { headers: headers });
    }

    getAirImporttranshipmentDeskWithinslaDetails(action: string): Observable<any> {
        console.log("action", action);
        const airimporttranshipmentDeskDetailsWithinsla = new ImportTranshipmentDeskDetails();
        airimporttranshipmentDeskDetailsWithinsla.action = action;
        const jsonData = JSON.stringify(airimporttranshipmentDeskDetailsWithinsla.action);
        console.log('jsonData', jsonData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const urlWithParams = `${BASE_URL}${this.airimporttranshipmentDeskWithinslaDetails}`;
        // const variable = encodeURIComponent(`${action}`);
        return this.http.post<any>(urlWithParams, jsonData, { headers: headers });
    }

    getAirImporttranshipmentDeskDetailsOutOfSla(action: string): Observable<any> {
        console.log("action", action);
        const airimporttranshipmentDeskDetailsOutofsla = new ImportTranshipmentDeskDetails();
        airimporttranshipmentDeskDetailsOutofsla.action = action;
        const jsonData = JSON.stringify(airimporttranshipmentDeskDetailsOutofsla.action);
        console.log('jsonData', jsonData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const urlWithParams = `${BASE_URL}${this.airimporttranshipmentDeskOutofslaDetails}`;
        // const variable = encodeURIComponent(`${action}`);
        return this.http.post<any>(urlWithParams, jsonData, { headers: headers });
    }


}