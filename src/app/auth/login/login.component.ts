import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthServiceService, IUser } from "../auth-service.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	public username: string;
	public password: string;
	public notAuthenticated: boolean = true;


	constructor(private authService: AuthServiceService, private router: Router) { }

	ngOnInit(): void {
	}

	login() {
		this.authService.login(this.username, this.password).subscribe(
			(result: IUser) => {
				this.authService.user = result;
				localStorage.setItem('auth-token', this.authService.user.token);
				localStorage.setItem('current-user', JSON.stringify(this.authService.user));
				this.router.navigate(['/home']);
			},
			error => {
				alert('Oups something went wrong');	
			});
	}

}
