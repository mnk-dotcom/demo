import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { IUser } from 'src/app/auth/auth-service.service';

@Component({
	selector: 'app-top-menu',
	templateUrl: './top-menu.component.html',
	styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
	@Input()
	public page: string;
	public collapse: boolean = false;
	public user: IUser;
	constructor(public shared: SharedService) { 
	 }

	ngOnInit(): void {
		this.shared.auth.user = JSON.parse(localStorage.getItem('current-user'))
	}

	logout() {
		localStorage.removeItem('auth-token');
		localStorage.removeItem('current-user');
	}

}
