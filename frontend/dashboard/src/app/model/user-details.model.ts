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
    branchIds: branchIds[] = [];
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

    constructor() {
        this.action = '';
    }
}

export class ExportLclDetails {
    action: string;
    company : number;
    constructor() {
        this.action = '';
        this.company = 0;
    }
}

export class ImportLclDetails {
    action: string;

    constructor() {
        this.action = '';
    }
}

export class ExportDocumentationDetails {
    action: string;

    constructor() {
        this.action = '';
    }
}

export class ImportDocumentationDetails {
    action: string;

    constructor() {
        this.action = '';
    }
}

export class ExportPlannerDetails {
    action: string;

    constructor() {
        this.action = '';
    }
}

export class ExportCustomerServiceDetails {
    action: string;

    constructor() {
        this.action = '';
    }
}

export class ImportCustomerServiceDetails {
    action: string;

    constructor() {
        this.action = '';
    }
}

export class AirExportBlreleaseDeskDetails {
    action: string;

    constructor() {
        this.action = '';
    }
}

export class ImportTranshipmentDeskDetails {
    action: string;

    constructor() {
        this.action = '';
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
    companyIds: string[] = [];
    branchIds: branchIds[] = [];
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
