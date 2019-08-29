export class Incidents{

    constructor(
                public Objet: string,
                public Description: string,
                public Service: string,
                public Date: string,
                public Date_target: string,
                public Status: string,
                public Discussion: string,
                public Employe: string) {
        this.Objet = Objet;
        this.Description = Description;
        this.Service = Service;
        this.Date = Date;
        this.Date_target = Date_target;
        this.Status = Status;
        this.Discussion = Discussion;
        this.Employe = Employe;
    }

}
