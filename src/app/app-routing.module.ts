import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthServiceService } from './auth/auth-service.service';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/auth/login',
		pathMatch: 'full' 
	},
	{
		path: 'auth',
		loadChildren: () => import(`./auth/auth.module`).then(m => m.AuthModule)
	},
	{
		path: 'home',
		loadChildren: () => import(`./home/home.module`).then(m => m.HomeModule),
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: [AuthGuardService]
})
export class AppRoutingModule { }
