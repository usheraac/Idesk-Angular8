import { Component, OnInit, OnDestroy } from '@angular/core';
import { Incidents } from '../models/Incidents';
import {IncidentsService} from '../service/incidents.service';
import {Subscription} from 'rxjs/internal/Subscription';
import {Router} from '@angular/router';


@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.css']
})
export class IncidentsComponent implements OnInit , OnDestroy{

  incidentsList : Incidents[];  // creation  d'une lise d'incident
  incidentsSubscription: Subscription; // variable de subscription au service

  constructor(
    private incidentsService: IncidentsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.incidentsSubscription = this.incidentsService.incidents$.subscribe(
      (incidents: Incidents[]) =>{
        this.incidentsList = incidents.slice();
      }
    );
    this.incidentsService.emitIncidents();
  }

  //fonction de suppression
  onDeleteIncidents(index: number){
    if (confirm('Voulez vous Clôturer cet incident?')){
      alert('il a été clôre');
      this.incidentsService.removeIncident(index);
      this.incidentsList.splice(index, 1);

     // console.log( this.incidentsList);
      this.router.navigate(['/incident/']);
    }
  }

  onModifyIncidents(index: number){
    this.router.navigate(['/incident/' + index]);
  }

  //récuperation des données du backend
  onFetchList(){
    this.incidentsService.getData();
  }

  //sauvegarde des données sur le backend
  onSaveList(){
    this.incidentsService.saveData();
  }

  // destruction de  la Subscription
  ngOnDestroy() {
    this.incidentsSubscription.unsubscribe();
  }
}
