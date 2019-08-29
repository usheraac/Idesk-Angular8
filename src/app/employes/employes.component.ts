/* tslint:disable:comment-format */
import { Component, OnInit, OnDestroy } from '@angular/core';
import {Employes} from '../models/Employes';
import {EmployesService} from '../service/employes.service';
import {Subscription} from 'rxjs/internal/Subscription';
import {Router} from '@angular/router';


@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.css']
})

export class EmployesComponent implements OnInit , OnDestroy  {


  // tslint:disable-next-line:typedef-whitespace
  employesList : Employes[];  // creation  d'une lise d'employe
  employesSubscription: Subscription;

  constructor(private employesService: EmployesService,
              private router: Router) { }

  // récuperation de la liste des employés dans le service quand la page employé devient active
  ngOnInit(){
    this.employesSubscription = this.employesService.employes$.subscribe(
      (employes: Employes[]) =>{
        this.employesList = employes.slice();
      }
    );
    this.employesService.emitEmployes();
  }


  //fonction de suppression
  onDeleteEmployes(index: number){
    if (confirm('Voulez vous vraiment supprimer cet employé?')){
      alert('il a été bien supprimé');
      this.employesService.removeEmploye(index);
      this.employesList.splice(index, 1);

      console.log( this.employesList);
      this.router.navigate(['/employe/']);
    }
  }

  onModifyEmployes(index: number){
    this.router.navigate(['/employe/' + index]);

  }

  //récuperation des données du backend
  onFetchList(){
    this.employesService.getData();

  }

  //sauvegarde des données sur le backend
  onSaveList(){
    this.employesService.saveData();
  }


// destruction de  la Subscription
  ngOnDestroy() {
    this.employesSubscription.unsubscribe();
  }


}



