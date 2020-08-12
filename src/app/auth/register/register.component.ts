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
		delete this.formData.passwordConfirmation;
		console.log(this.formData);
		this.auth.register(this.formData)
			.subscribe(
				(result: any) => {
					// this.auth.user = result;
					// localStorage.setItem('auth-token', this.auth.user.token);
					// localStorage.setItem('current-user', JSON.stringify(this.auth.user));
					this.router.navigate(['/register-success'], {
						queryParams: {
							message: `user ${this.formData.nom} ${this.formData.prenom} has been added successfully !`
						}
					});
				},
				error => {
					alert('Oups something went wrong');
				})
	}

}
