import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthComponent } from './auth.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterCompleteComponent } from './register-complete/register-complete.component';

const routes: Routes = [
	{
		path: '',
		component: AuthComponent,
		children: [
			{ path: 'login', component: LoginComponent },
			{ path: 'register', component: RegisterComponent },
			{ path: 'register-success', component: RegisterCompleteComponent }
		]
	}
];

@NgModule({
	declarations: [LoginComponent, RegisterComponent, AuthComponent, RegisterCompleteComponent],
	imports: [
		RouterModule.forChild(routes),
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule
	],
	providers: []
})
export class AuthModule { }
