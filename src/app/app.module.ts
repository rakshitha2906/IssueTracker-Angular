import { APP_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { IssuesComponent } from './issues/issues.component';
import { SidebarComponent } from './sharedFolder/sidebar/sidebar.component';
import { DashboardComponent } from './sharedfolder/dashboard/dashboard.component';
import { IssuetypeComponent } from './sharedfolder/issuetype/issuetype.component';
import { CreateformsComponent } from './sharedFolder/createforms/createforms.component';
import { IssuelistComponent } from './sharedFolder/issuelist/issuelist.component';
import { IssueListCardComponent } from './sharedFolder/issue-list-card/issue-list-card.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CreateComponent,
    IssuesComponent,
    SidebarComponent,
    DashboardComponent,
    IssuetypeComponent,
    CreateformsComponent,
    IssuelistComponent,
    IssueListCardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
