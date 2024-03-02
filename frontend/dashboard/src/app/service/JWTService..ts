import { Injectable, NgModule } from '@angular/core';
import { jwtDecode } from "jwt-decode";


@Injectable()
@NgModule()
export class JWTService {
    constructor() { }

    getDecodedToken(token: string): any {
        const decoded = jwtDecode(token);
        return decoded;
    }
}