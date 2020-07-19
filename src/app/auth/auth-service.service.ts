import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

import { SharedService } from '../shared.service';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class AuthServiceService {
	public url: string = environment.url;
	public user: IUser;
	constructor(private shared: SharedService, private http: HttpClient, private router: Router) { }
	// ...
	public isAuthenticated(): boolean {
		return this.shared.token === "20nasser!mustafa!khalid20";
	}

	public login(username, password) {
		this.http.post(`${this.url}/login`, { login: username, password }).subscribe(
			result => {
				this.shared.isAuthenticated = true;
				this.shared.token = "20nasser!mustafa!khalid20";
				this.router.navigate(['/home']);
			},
			error => {
				alert('Oups something went wrong');
				this.router.navigate(['/auth/login'])
			})
	}

	public register(userData: any) {
		this.http.post(`${this.url}/register`, userData).subscribe(
			result => {
				this.shared.isAuthenticated = true;
				this.shared.token = "20nasser!mustafa!khalid20";
				this.router.navigate(['/auth/login']);
			},
			error => {
				alert('Oups something went wrong');
			})
	}

}

export interface IUser {
	name: string,
	login: string,
	profil: string,
	email: string
}