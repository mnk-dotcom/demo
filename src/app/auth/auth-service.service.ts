import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
	providedIn: 'root'
})
export class AuthServiceService {
	public user: IUser;
	constructor(private http: HttpClient) { 
		this.user = JSON.parse(localStorage.getItem('current-user'));
	 }
	// ...
	public isAuthenticated(): boolean {
		return localStorage.getItem('auth-token') === this.user.token;
	}

	public login(username, password) {
		return this.http.post(`/api/users/login`, { login: username, password })
	}

	public register(userData: any) {
		return this.http.post(`/register`, userData)
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