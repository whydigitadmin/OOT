import { Injectable } from "@angular/core";

export class UserDetails {
    email : string;
    password : string;
    id : number;
    companyId : number;
    status : string;
    deptName : string;
    homeDeptId : number;
    roles : string[] ;
    productRoles!: [];

    constructor() {
        this.email = '';
        this.password = '';
        this.id = 0;
        this.companyId = 0;
        this.status = '';
        this.deptName = '';
        this.homeDeptId = 0;
        this.roles = [];
        this.productRoles =[];
    }
}

export class ExportLclDetails {
    action : string;

    constructor() {
        this.action = '';
    }
}

export class UserLogin {
    private email : string;
    private password : string;

    constructor(email: string, password : string){
        this.email = email;
        this.password = password;
    }
}

export class ShipmentCount{
    count = 0;
}

export class Shipment {
    private companyId : number;
    private deptId : number;
    private mode : string;
    constructor(companyId : number , deptId : number ,  mode : string ){
        this.companyId = companyId;
        this.deptId = deptId;
        this.mode = mode;
    }
}


@Injectable()
export class Globals{
    isUserLoggedIn = false;
    id  = 0;
    email = "";
    companyId = 0;
    deptName  = "";
    homeDeptId  = 0;
    productRoles = [];
    status = "";
    roles = "";
    userDetails: UserDetails = new UserDetails();
}
