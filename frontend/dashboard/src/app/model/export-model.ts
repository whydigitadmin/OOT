import { Injectable } from "@angular/core";

export class Export_LCL_CustomerService {

    action: string = "";
    dept: string = "";
    id: number = 0;
    count: number = 0;
    outOfSLA: number = 0;
    withinSLA: number = 0;
    product: string = "";
    pendinActions: any;
}

export class Import_LCL_CustomerService {

    action: string = "";
    dept: string = "";
    id: number = 0;
    count: number = 0;
    outOfSLA: number = 0;
    withinSLA: number = 0;
    product: string = "";
    pendinActions: any;
}

export class Export_LCL_Details {

    action: string = "";
    dept: string = "";
    product: string = "";
    ref_date: string = "";
    ref_mode: string = "";
    ref_no: string = "";
    ref_type: string = "";
    sno: number = 0;
}

export class Air_Export_CustomerService {

    action: string = "";
    dept: string = "";
    id: number = 0;
    count: number = 0;
    outOfSLA: number = 0;
    withinSLA: number = 0;
    product: string = "";
}

export class Air_Import_CustomerService {

    action: string = "";
    dept: string = "";
    id: number = 0;
    count: number = 0;
    outOfSLA: number = 0;
    withinSLA: number = 0;
    product: string = "";
}
