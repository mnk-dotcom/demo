import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { SharedService } from './shared.service';

@Injectable({
	providedIn: 'root'
})
export class AuthServiceService {

	constructor(private shared: SharedService) { }
	// ...
	public isAuthenticated(): boolean {
		return this.shared.token === "20nasser!mustafa!khalid20";
	}

	login(username, password) {
		if (username === 'admin' && password === 'admin') {
			this.shared.isAuthenticated = true;
			this.shared.token = "20nasser!mustafa!khalid20";
			return true;
		}
		return false;
	}

}
