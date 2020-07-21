import { Component, OnInit } from '@angular/core';
import { IUser } from '../auth/auth-service.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	user: IUser;
	constructor() { }

	ngOnInit(): void {
		this.user = JSON.parse(localStorage.getItem('current-user'));
	}

}
