import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FirstTopicComponent } from './first-topic/first-topic.component';
import { SecondTopicComponent } from './second-topic/second-topic.component';
import { ThirdTopicComponent } from './third-topic/third-topic.component';
import { AuthGuardService } from "../app/auth-guard.service";

const routes: Routes = [
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: '',
		component: HomeComponent,
		canActivate: [AuthGuardService]
	},
	{
		path: 'home',
		component: HomeComponent,
		canActivate: [AuthGuardService]
	},
	{
		path: 'first-topic',
		component: FirstTopicComponent,
		canActivate: [AuthGuardService]
	},
	{
		path: 'second-topic',
		component: SecondTopicComponent,
		canActivate: [AuthGuardService]
	},
	{
		path: 'third-topic',
		component: ThirdTopicComponent,
		canActivate: [AuthGuardService]
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
