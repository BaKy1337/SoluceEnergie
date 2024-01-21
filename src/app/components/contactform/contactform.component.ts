import { Component, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss'],
})
export class ContactformComponent {
  @ViewChild('fullname') inputFullname: any;
  @ViewChild('email') inputEmail: any;
  @ViewChild('phone') inputPhone: any;
  @ViewChild('message') inputMessage: any;


  listOfProjects: string[] = [
    "Isolation",
    "Pompe à chaleur",
    "Panneaux photovoltaïques",
    "Autre",
    "Chauffe-eau solaire / Ballon thermodynamique",
    "Système solaire combiné",
  ];
  fullname : string = "";
  email : string = "";
  phone : string = "";
  message : string = "";
  selectedProjects: string[] = [];

  constructor(private _snackBar: MatSnackBar) {}

  public sendEmail() {
    if (this.fullname == '' || this.email == '' || this.phone == '' || this.message == '' || this.selectedProjects.length < 1) {
      this._snackBar.open("Veuillez remplir tous les champs", '', {
        duration: 5000,
        horizontalPosition: 'end',
        verticalPosition: 'top',
        panelClass: ['error__snackbar']
      });
      return;
    }
    emailjs.init('xlymoyHRoM-mCMQL9');
    emailjs.send("service_6j0kynv","template_53or91r",{
        fullname: this.fullname,
        email: this.email,
        phone: this.phone,
        Projects: this.selectedProjects,
        message: this.message,
        }).then(
          (result: EmailJSResponseStatus) => {
            this._snackBar.open('Votre message sera traité dans les plus brefs délais !', '', {
              duration: 5000,
              horizontalPosition: 'end',
              verticalPosition: 'top',
              panelClass: ['success__snackbar']
            });
            this.inputFullname.nativeElement.value = '';
            this.inputEmail.nativeElement.value = '';
            this.inputPhone.nativeElement.value = '';
            this.inputMessage.nativeElement.value = '';
            this.selectedProjects = [];
          },
          (error) => {
            this._snackBar.open("Une erreur est survenue lors de l'envoi, veuillez réessayer", '', {
              duration: 5000,
              horizontalPosition: 'end',
              verticalPosition: 'top',
              panelClass: ['error__snackbar']
            });
          }
        );

    
  }

  inputChanges(type: any, value:any){
    switch(type){
      case 'fullname':
        this.fullname = value.value;
        break;
      case 'email':
        this.email = value.value;
        break;
      case 'phone':
        this.phone = value.value;
        break;
      case 'message':
        this.message = value.value;
        break;
      default:
        break;
    }
    
  }

  selectProject(project: string) {
    if (this.selectedProjects.includes(project)){
      this.selectedProjects.splice(this.selectedProjects.indexOf(project), 1);
      return;
    };

    this.selectedProjects.push(project);

    console.log(this.selectedProjects);
    
  }
}
