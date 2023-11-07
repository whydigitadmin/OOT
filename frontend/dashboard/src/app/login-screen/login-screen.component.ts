import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { LoginService } from '../service/login.service';
import { Globals, UserDetails, UserLogin } from '../model/user-details.model';
import { Router } from '@angular/router';



@Component({
	selector: 'app-login-screen',
	templateUrl: './login-screen.component.html',
	styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {

	loading = false;
	public localstorage_item: any = {};
	isLoggedIn$: Observable<boolean> | undefined;
	errors: any = [];
	public errormsg = '';
	public errorDiv = false;
	public logindata: any = {};
	public logDiv: any = localStorage.getItem("logout_msg") ? true : false;
	public logmsg: any = localStorage.getItem("logout_msg")
		? localStorage.getItem("logout_msg")
		: "";
	private unsubscribe: Subject<any> | undefined;


	loginForm: FormGroup ;

	constructor(private formBuilder: FormBuilder , private loginService: LoginService , private router: Router , private globals : Globals) {
		
		
		this.loginForm = this.formBuilder.group({
			username: [null , [Validators.required, Validators.email , Validators.minLength(3) , Validators.maxLength(100) ] ],
			password :  [null , [Validators.required , Validators.minLength(2) , Validators.maxLength(10)] ]
		  });
	}

	ngOnInit(): void {

	}


	isControlHasError(controlName: string, validationType: string): boolean {
		const control = this.loginForm.controls[controlName];
		if (!control) {
			return false;
		}

		const result = control.hasError(validationType) && (control.dirty || control.touched);
		return result;
	}


	submit() {
		const controls = this.loginForm.controls;
		
		this.loading = true;

		const formData = new UserLogin(this.logindata.username , this.logindata.password);
		this.loginService.submitLoginInfo(formData).subscribe( response => {			
			if(response !=null){				
				this.globals.isUserLoggedIn = true;
				this.globals.id = response['id'];
				this.globals.companyId = response ['companyId'];
				this.globals.deptName = response ['deptName'];
				this.globals.homeDeptId = response ['homeDeptId'];
				this.globals.email = response['email'];
				this.globals.productRoles = response['productRoles'];
				this.globals.userDetails = response;
				localStorage.setItem('user_data',JSON.stringify(this.globals));
   				localStorage.setItem('roles',JSON.stringify(this.globals.productRoles));					
				this.router.navigateByUrl('/dashboard');
			}
			else{

			}
		})
		

		
	}
}
