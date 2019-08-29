import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Incidents} from '../models/Incidents';
import { IncidentsService} from '../service/incidents.service';
import {Router} from '@angular/router';
import {EmployesService} from '../service/employes.service';
import {Employes} from '../models/Employes';

@Component({
  selector: 'app-incident-form',
  templateUrl: './incident-form.component.html',
  styleUrls: ['./incident-form.component.css']
})
export class IncidentFormComponent implements OnInit {
  incidentForm : FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private incidentService: IncidentsService,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.incidentForm = this.formBuilder.group({
      Objet: ['', Validators.required],
      Description: ['', Validators.required],
      Service: ['', Validators.required],
      Date: ['', Validators.required],
      Date_target: ['', Validators.required],
      Status: ['', Validators.required],
      Discussion: ['', Validators.required],
      Employe: ['', Validators.required]
    });
  }

  onSubmitForm()
  {
    // tslint:disable-next-line:comment-format
    const formValue = this.incidentForm.value; //récupération des values du formulaire
    const newIncident = new Incidents(   // création d'un nouvel employé avec ces values
      formValue['Objet'],
      formValue['Description'],
      formValue['Service'],
      formValue['Date'],
      formValue['Date_target'],
      formValue['Status'],
      formValue[' Discussion'],
      formValue[' Employe']

    );
    this.incidentService.addIncident(newIncident);
    this.router.navigate(['/incident']);
  }

}
