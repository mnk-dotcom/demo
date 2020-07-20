import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class AuthServiceService {
	public url: string = environment.url;
	public user: IUser;
	constructor(private http: HttpClient, private router: Router) { }
	// ...
	public isAuthenticated(): boolean {
		return localStorage.getItem('auth-token') === "20nasser!mustafa!khalid20";
	}

	public login(username, password) {
		this.http.post(`${this.url}/api/users/login`, { login: username, password }).subscribe(
			result => {
				this.user = {
					id: 1,
					nom: "administrateur",
					prenom: "admin",
					login: "admin",
					password: "admin",
					passwordinbyte: null,
					profils: [
						{
							id: 1,
							name: "Administrateur",
							privileges: [
								{
									id: 1,
									name: "Utilisateur"
								},
								{
									id: 2,
									name: "Profil"
								},
								{
									id: 3,
									name: "Projet"
								},
								{
									id: 4,
									name: "Env"
								}
							]
						}
					],
					datecreation: null,
					mail: "admin@test.com",
					tel: "06613444444",
					token: "20nasser!mustafa!khalid20"
				}
				localStorage.setItem('auth-token', this.user.token);
				this.router.navigate(['/home']);
			},
			error => {
				this.user = {
					id: 1,
					nom: "administrateur",
					prenom: "admin",
					login: "admin",
					password: "admin",
					passwordinbyte: null,
					profils: [
						{
							id: 1,
							name: "Administrateur",
							privileges: [
								{
									id: 1,
									name: "Utilisateur"
								},
								{
									id: 2,
									name: "Profil"
								},
								{
									id: 3,
									name: "Projet"
								},
								{
									id: 4,
									name: "Env"
								}
							]
						}
					],
					datecreation: null,
					mail: "admin@test.com",
					tel: "06613444444",
					token: "20nasser!mustafa!khalid20"
				}
				localStorage.setItem('auth-token', this.user.token);
				localStorage.setItem('current-user', JSON.stringify(this.user));				
				this.router.navigate(['/home']);
			})
	}

	public register(userData: any) {
		this.http.post(`${this.url}/register`, userData).subscribe(
			result => {
				localStorage.setItem('auth-token', "20nasser!mustafa!khalid20");
				this.router.navigate(['/auth/login']);
			},
			error => {
				alert('Oups something went wrong');
			})
	}

}

export interface IUser {
	id: number,
	nom: string,
	prenom: string,
	login: string,
	password: string,
	passwordinbyte: string,
	profils: IProfil[],
	datecreation: Date,
	mail: string,
	tel: string,
	token: string
}

export interface IProfil {
	id: number,
	name: string,
	privileges: IPrivilege[]
}

export interface IPrivilege {
	id: number,
	name: string
}