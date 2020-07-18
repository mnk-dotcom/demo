import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	public username: string;
	public password: string;
	public notAuthenticated: boolean = true;


	constructor(private router: Router) { }

	ngOnInit(): void {
	}

	login() {
		if (this.username === 'admin' && this.password === 'admin') {
			this.router.navigateByUrl('/home');
			this.notAuthenticated = !this.notAuthenticated;
		}
	}
}
