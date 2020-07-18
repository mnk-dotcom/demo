import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FirstTopicComponent } from './first-topic/first-topic.component';
import { SecondTopicComponent } from './second-topic/second-topic.component';
import { ThirdTopicComponent } from './third-topic/third-topic.component';
import { TopMenuComponent } from './top-menu/top-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FirstTopicComponent,
    SecondTopicComponent,
    ThirdTopicComponent,
    TopMenuComponent
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	FormsModule,
	ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
