import { Injectable } from "@angular/core";

export class UserDetails {
    email: string;
    password: string;
    id: number;
    companyId: number;
    status: string;
    deptName: string;
    homeDeptId: number;
    roles: string[];
    productRoles!: [];
    companyIds: string[];
    branchIds: UserCompanyBranch[] = [];
    companyInfo: UserCompany[] = [];
    selectedCompany = 0;
    selectedBranch = 0;
    constructor() {
        this.email = '';
        this.password = '';
        this.id = 0;
        this.companyId = 0;
        this.status = '';
        this.deptName = '';
        this.homeDeptId = 0;
        this.roles = [];
        this.productRoles = [];
        this.companyIds = [];
    }
}

export interface UserCompany {
    companyId: number;
    companyName: string;
    status?: string;
}

export interface UserCompanyBranch {
    companyId?: number;
    branchId: number;
    branchName: string;
    status?: string;
}

export class branchIds{

    companyId : string;
    branchId : string;
    status : string;
    constructor() {
        this.companyId = '';
        this.branchId = '';
        this.status = '';
    }
}

export class ActionDetails {
    action: string;
    company : number;
    branch: number;
deptid: number;
    constructor() {
        this.action = '';
        this.company = 0;
        this.branch = 0; 
        this.deptid = 0;
    }
}

export class ExportLclDetails {
    action: string;
    company : number;
    branch: number;
    deptid: number;
    constructor() {
        this.action = '';
        this.company = 0;
        this.branch = 0;
        this.deptid = 0
    }
}

export class ImportLclDetails {
    action: string;
    company : number;
    branch: number;
    deptid: number;
    constructor() {
        this.action = '';
        this.company = 0;
        this.branch = 0;
        this.deptid = 0;
    }
}

export class ExportDocumentationDetails {
    action: string;
    company : number;
    branch: number;
deptid: number;
    constructor() {
        this.action = '';
        this.company = 0;
        this.branch = 0; 
        this.deptid = 0;
    }
}

export class ImportDocumentationDetails {
    action: string;
    company : number;
    branch: number;
deptid: number;
    constructor() {
        this.action = '';
        this.company = 0;
        this.branch = 0; 
        this.deptid = 0;
    }
}

export class ExportPlannerDetails {
    action: string;
    company : number;
    branch: number;
deptid: number;
    constructor() {
        this.action = '';
        this.company = 0;
        this.branch = 0; 
        this.deptid = 0;
    }
}

export class ExportCustomerServiceDetails {
    action: string;
    company : number;
    branch: number;
deptid: number;
    constructor() {
        this.action = '';
        this.company = 0;
        this.branch = 0; 
        this.deptid = 0;
    }
}

export class ImportCustomerServiceDetails {
    action: string;
    company : number;
    branch: number;
deptid: number;
    constructor() {
        this.action = '';
        this.company = 0;
        this.branch = 0; 
        this.deptid = 0;
    }
}

export class AirExportBlreleaseDeskDetails {
    action: string;
    company : number;
    branch: number;
deptid: number;
    constructor() {
        this.action = '';
        this.company = 0;
        this.branch = 0; 
        this.deptid = 0;
    }
}

export class ImportTranshipmentDeskDetails {
    action: string;
    company : number;
    branch: number;
deptid: number;
    constructor() {
        this.action = '';
        this.company = 0;
        this.branch = 0; 
        this.deptid = 0;
    }
}

export class UserLogin {
    email: string;
    password: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }
}

export class ShipmentCount {
    count = 0;
}

export class Shipment {
    private companyId: number;
    private deptId: number;
    private mode: string;
    constructor(companyId: number, deptId: number, mode: string) {
        this.companyId = companyId;
        this.deptId = deptId;
        this.mode = mode;
    }
}

export class Chart_ExportLcl {
    private name: string;
    private data: string[];
    count: any;
    constructor(name: string, data: string[]) {
        this.name = name;
        this.data = data;
    }
}

export class Chart_AirExportLcl {
    private name: string;
    private data: string[];
    count: any;
    constructor(name: string, data: string[]) {
        this.name = name;
        this.data = data;
    }
}

export class Chart_ImportLcl {
    private name: string;
    private data: string[];
    count: any;
    constructor(name: string, data: string[]) {
        this.name = name;
        this.data = data;
    }
}

export class Chart_AirImportLcl {
    private name: string;
    private data: string[];
    count: any;
    constructor(name: string, data: string[]) {
        this.name = name;
        this.data = data;
    }
}

@Injectable()
export class Globals {
    isUserLoggedIn = false;
    id = 0;
    email = "";
    companyId = 0;
    deptName = "";
    homeDeptId = 0;
    productRoles = [];
    status = "";
    roles = "";
    userDetails: UserDetails = new UserDetails();
    companyIds: UserCompany[] = [];
    branchIds: UserCompanyBranch[] = [];
    homeBranch = "";
    selectedCompany = 0;
    selectedBranch = 0;
}

export class ChartData {
    private name: string;
    private y: string;
    count: any;
    constructor(name: string, y: string) {
        this.name = name;
        this.y = y;
    }
}
