import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import {RouterModule, Routes} from '@angular/router';
import { EmployesComponent } from './employes/employes.component';
import { IncidentsComponent } from './incidents/incidents.component';
import { EditEmployeComponent } from './edit-employe/edit-employe.component';
import { EditIncidentComponent } from './edit-incident/edit-incident.component';
import { EmployeFormComponent } from './employe-form/employe-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {EmployesService} from './service/employes.service';
import {IncidentsService} from './service/incidents.service';
import {SingleEmployeComponent} from './employes/single-employe/single-employe.component';
import{ HttpClientModule} from '@angular/common/http';
import { IncidentFormComponent } from './incident-form/incident-form.component';
import { SingleIncidentComponent } from './incidents/single-incident/single-incident.component';



const appRoutes: Routes = [
  {path: 'editI', component: EditIncidentComponent},
  {path: 'editE', component: EditEmployeComponent},
  {path: 'employe', component: EmployesComponent},
  {path: 'employe-form', component: EmployeFormComponent},
  {path: 'incident-form', component: IncidentFormComponent},
  {path: 'employe/:id', component: SingleEmployeComponent},
  {path: 'incident/:id', component: SingleIncidentComponent},
  {path: 'about', component: AboutComponent},
  {path: 'incident', component: IncidentsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    EmployesComponent,
    IncidentsComponent,
    EditEmployeComponent,
    EditIncidentComponent,
    EmployeFormComponent,
    SingleEmployeComponent,
    IncidentFormComponent,
    SingleIncidentComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EmployesService,
    IncidentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
