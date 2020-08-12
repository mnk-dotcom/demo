import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-complete',
  templateUrl: './register-complete.component.html',
  styleUrls: ['./register-complete.component.css']
})
export class RegisterCompleteComponent implements OnInit {
public message: string;

  constructor(private route: ActivatedRoute) { 
	
  }

  ngOnInit(): void {
	this.route.queryParams.subscribe(result => {
		this.message = result.message;
	})
  }

}
