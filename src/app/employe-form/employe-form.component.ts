import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {EmployesService} from '../service/employes.service';
import {Employes} from '../models/Employes';
import {Router} from '@angular/router';



@Component({
  selector: 'app-employe-form',
  templateUrl: './employe-form.component.html',
  styleUrls: ['./employe-form.component.css']
})
export class EmployeFormComponent implements OnInit {
  employeForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private employeService: EmployesService,
              private router: Router ) {}// permmet de rerouter vers la liste des employes après ajout d'un employé

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.employeForm = this.formBuilder.group({
      Identifiant: ['', Validators.required],
      Nom: ['', Validators.required],
      Prenom: ['', Validators.required],
      Age: ['', Validators.required],
      Departement: ['', Validators.required],
      Fonction: ['', Validators.required],
      Telephone: ['', Validators.required],
      Email: ['', Validators.required]
    });
  }

  // soumission du formulaire
  onSubmitForm()
  {
    // tslint:disable-next-line:comment-format
    const formValue = this.employeForm.value; //récupération des values du formulaire
    const newEmploye = new Employes(   // création d'un nouvel employé avec ces values
      formValue['Identifiant'],
      formValue['Nom'],
      formValue['Prenom'],
      formValue['Age'],
      formValue['Departement'],
      formValue['Fonction'],
      formValue['Telephone'],
      formValue['Email']

    );
    this.employeService.addEmploye(newEmploye);
    this.router.navigate(['/employe']);

  }

}
