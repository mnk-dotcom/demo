import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FirstTopicComponent } from './first-topic/first-topic.component';
import { SecondTopicComponent } from './second-topic/second-topic.component';
import { ThirdTopicComponent } from './third-topic/third-topic.component';

const routes: Routes = [
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'first-topic',
		component: FirstTopicComponent
	},
	{
		path: 'second-topic',
		component: SecondTopicComponent
	},
	{
		path: 'third-topic',
		component: ThirdTopicComponent
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
