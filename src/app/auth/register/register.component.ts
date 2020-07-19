import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AuthServiceService } from "../auth-service.service";

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	formData: any = {};

	constructor(private auth: AuthServiceService) { }

	ngOnInit(): void {
	}

	register(): void {
		this.auth.register(this.formData)
	}

}
