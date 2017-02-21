import { InMemoryDataService } from './shared/data.service';
import { InMemoryDbService, InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { routing } from './app.routing';
import { LogServiceService } from './services/log-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';

// import { InMemoryWebApiModile} from 'angular-in-memory-web-api';


import { BeerHousenService } from './services/beer-housen.service';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [BeerHousenService, LogServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
