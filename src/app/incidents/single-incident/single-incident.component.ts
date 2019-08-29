import { Component, OnInit } from '@angular/core';
import {Incidents} from '../../models/Incidents';
import { IncidentsService} from '../../service/incidents.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';



@Component({
  selector: 'app-single-incident',
  templateUrl: './single-incident.component.html',
  styleUrls: ['./single-incident.component.css']
})
export class SingleIncidentComponent implements OnInit {
  index: number;
  incident: Incidents;
  incidentForm: FormGroup;

  constructor(
    private incidentService: IncidentsService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    // snapshot permet de faire capture des params à l'instant ou la route est utilisée
    this.index = this.route.snapshot.params['id'];
    this.incident = this.incidentService.incidentsList[this.index];
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

  onSubmitForm() {
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
    this.incidentService.modifyIncident(this.index, newIncident);
    this.router.navigate(['/incident']);


  }
}

