import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MdButtonModule, MdCheckboxModule } from '@angular/material';
import { MdIconModule, MdInputModule, MdCardModule, MdSelectModule,
  MdMenuModule, MdTabsModule, MdProgressSpinnerModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ModelsComponent } from './models/models.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'models', component: ModelsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: HomeComponent },
  { path: '', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ModelsComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(routes, { useHash: false }), BrowserModule, BrowserAnimationsModule,
    MdButtonModule, MdCheckboxModule, MdInputModule, MdCardModule, MdSelectModule, MdIconModule,
    MdMenuModule, MdTabsModule, MdProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
