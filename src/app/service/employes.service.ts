import {Employes} from '../models/Employes';
import { Subject} from 'rxjs/internal/Subject';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

//permet l'injection de HttpClient dans le service
@Injectable()
export class EmployesService {

  public router: Router
  // creation du  Subject qui émettra la liste des employes quand le service est demandé
  employes$ = new Subject<Employes[]>();


  // tslint:disable-next-line:typedef-whitespace
  employesList: Employes[] = [
 /*   {
      Identifiant: 14299,
      Nom: 'isaac',
      Prenom: 'isaac',
      Age: 18,
      Departement: 'info',
      Fonction: 'support',
      Telephone: 560044,
      Email: 'djokoisaac@gmai.com',


    },
    {
      Identifiant: 14200,
      Nom: 'usher',
      Prenom: 'isaac',
      Age: 30,
      Departement: 'comptable',
      Fonction: 'economique',
      Telephone: 4005,
      Email: 'usher@gmai.com',


    }*/
    ];

  //injection de HttpClient
  constructor(private httpClient: HttpClient) {
  }


  //ajouter un employe à la liste
  addEmploye(employe: Employes) {
    this.employesList.push(employe);
    this.emitEmployes();
  }

  //Emettre les nouveaux objects employés
  emitEmployes() {
    this.employes$.next(this.employesList.slice()); //la methode slice permet de parcourir employesList
  }

  removeEmploye(index: number) {
    this.employesList.splice(index, 1);
    // console.log( this.employesList);


    // this.router.navigate(['/incidents']);

  }

  modifyEmploye(index: number, employe: Employes) {

    this.employesList.splice(index, 1, employe);
    // console.log( this.employesList);


    // this.router.navigate(['/incidents']);

  }


  saveData() {
    this.httpClient
    //méthode put pour mettre à jour mes données dans le backend
      .put('https://idesk-angular.firebaseio.com/employes.json', this.employesList)
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
      .get<any[]>('https://idesk-angular.firebaseio.com/employes.json')
      .subscribe(
        (response)=> {
          this.employesList = response;
          this.emitEmployes();
        },
        (error)=> {
          console.log('Erreur de chargement ! ' + error);
        }
        );
  }






}
