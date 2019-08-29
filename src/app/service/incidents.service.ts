import {Incidents} from '../models/Incidents';
import { Subject} from 'rxjs/internal/Subject';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

//permet l'injection de HttpClient dans le service
@Injectable()
export class IncidentsService{

  public router: Router
  // creation du  Subject qui émettra la liste des incidents quand le service est demandé
  incidents$ = new Subject<Incidents[]>();


  // tslint:disable-next-line:typedef-whitespace
  incidentsList: Incidents[] = [
   /* {
      Objet:"probleme d'impression",
      Description:"l'imprimante ne fonctionne pas",
      Service:'ressource humaine',
      Date:'',
      Date_target:'',
      Status:'',
      Discussion:'pas en resolue',
      Employe:'',
    },
    {
      Objet:"probleme de reseau",
      Description:"pas de connexion internet depuis ce matin",
      Service:"toute l'entreprise",
      Date:'',
      Date_target:'',
      Status:'en attente',
      Discussion:'il est possible que la fibre optique soit cassé',
      Employe:''
    }*/
  ];

  //injection de HttpClient
  constructor(private httpClient: HttpClient) {
  }


  //ajouter un employe à la liste
  addIncident(incident: Incidents) {
    this.incidentsList.push(incident);
    this.emitIncidents();
  }

  //Emettre les nouveaux objects employés
  emitIncidents() {
    this.incidents$.next(this.incidentsList.slice()); //la methode slice permet de parcourir incidentsList
  }

  removeIncident(index: number) {
    this.incidentsList.splice(index, 1);
    // console.log( this.incidentsList);


    // this.router.navigate(['/incidents']);

  }

  modifyIncident(index: number, incident: Incidents) {

    this.incidentsList.splice(index, 1, incident);
    // console.log( this.incidentsList);


    // this.router.navigate(['/incidents']);

  }


  saveData() {
    this.httpClient
    //méthode put pour mettre à jour mes données dans le backend
      .put('https://idesk-angular.firebaseio.com/incidents.json', this.incidentsList)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur de sauvegarde !' + error);
        }
      )
  }

  getData() {
    this.httpClient
      .get<any[]>('https://idesk-angular.firebaseio.com/incidents.json')
      .subscribe(
        (response)=> {
          this.incidentsList = response;
          this.emitIncidents();
        },
        (error)=> {
          console.log('Erreur de chargement ! ' + error);
        }
      );
  }






}
