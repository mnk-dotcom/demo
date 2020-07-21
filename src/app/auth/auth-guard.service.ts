import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthServiceService } from './auth-service.service';

@Injectable({
	providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

	constructor(private router: Router, private auth: AuthServiceService) { }
	canActivate(): boolean {
		if (!this.auth.isAuthenticated()) {
			this.router.navigate(['auth/login']);
			return false;
		}
		return true;
	}
}
