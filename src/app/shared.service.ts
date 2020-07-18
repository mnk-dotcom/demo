import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class SharedService {
	public isAuthenticated: boolean = false;
	public token: string;
	constructor() { }
}
