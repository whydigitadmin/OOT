import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable, tap } from "rxjs";
import { UserLogin } from "../model/user-details.model";
import { Injectable } from "@angular/core";

@Injectable()
export class LoginInterceptor 
implements HttpInterceptor{

    constructor(private router : Router){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
        let modifiedRequest = req; 

        if(sessionStorage.getItem("details")) {
           let  userLogin  = JSON.parse((sessionStorage.getItem("details"))!);
            
           let email = userLogin.email;
           let password = '123';
              
            const httpheaders = new HttpHeaders({ 
                'Authorization': 'Basic ' + btoa(email + ':' + password),
                'Content-Type': 'application/json'
            });

            modifiedRequest = req.clone({
                headers: httpheaders
            });

        }
        return next.handle(modifiedRequest);
    }

}