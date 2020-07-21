import { Injectable } from '@angular/core';
import { AuthServiceService } from './auth/auth-service.service';

@Injectable({
	providedIn: 'root'
})
export class SharedService {
	constructor(public auth: AuthServiceService) {}
}
