import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AuthServiceService, IUser } from "../auth-service.service";

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	formData: any = {};

	constructor(private auth: AuthServiceService, private router: Router) { }

	ngOnInit(): void {
	}

	register(): void {
		this.auth.register(this.formData)
			.subscribe(
				(result: IUser) => {
					this.auth.user = result;
					localStorage.setItem('auth-token', this.auth.user.token);
					localStorage.setItem('current-user', JSON.stringify(this.auth.user));
					this.router.navigate(['/home']);
				},
				error => {
					alert('Oups something went wrong');
				})
	}

}
