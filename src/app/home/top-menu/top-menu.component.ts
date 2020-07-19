import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
	selector: 'app-top-menu',
	templateUrl: './top-menu.component.html',
	styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
	@Input()
	public page: string;
	@Input()
	public isAuthenticated: string;
	constructor(private shared: SharedService) { }

	ngOnInit(): void {
		
	}

}
