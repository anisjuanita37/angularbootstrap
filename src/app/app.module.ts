import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { AdduserComponent } from './adduser/adduser.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Routes, RouterModule } from '@angular/router';
import { AddjobComponent } from './addjob/addjob.component';
import { JobsComponent } from './jobs/jobs.component';
import { LandingComponent } from './landing/landing.component';

const appRoutes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'users', component: UsersComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'adduser', component: AdduserComponent }, 
  { path: 'addjob', component: AddjobComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AdduserComponent,
    HeaderComponent,
    FooterComponent,
    AddjobComponent,
    JobsComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
