export class Employes{


    constructor( public Identifiant: number,
                 public Nom: string,
                 public Prenom: string,
                 public Age: number,
                 public Departement: string,
                 public Fonction: string,
                 public Telephone: number,
                 public Email: string) {
        this.Identifiant = Identifiant;
        this.Nom = Nom;
        this.Prenom = Prenom;
        this.Age = Age;
        this.Departement = Departement;
        this.Fonction = Fonction;
        this.Telephone = Telephone;
        this.Email = Email;
    }

}
