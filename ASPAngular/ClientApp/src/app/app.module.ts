import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
//import { EmplDataComponent } from './empl-data/empl-data.component';
import { Employee } from './empl-data/empl-data.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent//,
        //EmplDataComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
    //    RouterModule.forRoot([
    //        { path: '', component: HomeComponent, pathMatch: 'full' }//,
    //        //{ path: 'empl-data', component: EmplDataComponent },
    //    ])
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }