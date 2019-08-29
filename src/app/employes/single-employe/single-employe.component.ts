import { Component, OnInit } from '@angular/core';
import {Employes} from '../../models/Employes';
import {EmployesService} from '../../service/employes.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-single-employe',
  templateUrl: './single-employe.component.html',
  styleUrls: ['./single-employe.component.css']
})
export class SingleEmployeComponent implements OnInit {
  index: number;
  employes: Employes;
  employeForm: FormGroup;

  constructor(
      private employeService: EmployesService,
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router) {
  }

  ngOnInit() {
    // snapshot permet de faire capture des params à l'instant ou la route est utilisée
    this.index = this.route.snapshot.params['id'];
    this.employes = this.employeService.employesList[this.index];
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
  onSubmitForm() {
    // récupération des values du formulaire
    const formValue = this.employeForm.value;
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
    this.employeService.modifyEmploye(this.index, newEmploye);
    this.router.navigate(['/employe']);

  }


}
