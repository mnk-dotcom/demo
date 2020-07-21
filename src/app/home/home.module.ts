import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuardService } from '../auth/auth-guard.service';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		children: [
			{ path: 'topic1', component: HomeComponent }
		],
		canActivate: [AuthGuardService]
	}
];

@NgModule({
  declarations: [HomeComponent, TopMenuComponent],
  imports: [
	CommonModule,
	RouterModule.forChild(routes),
	FormsModule,
	ReactiveFormsModule
  ],
  providers: [AuthGuardService]
})
export class HomeModule { }
