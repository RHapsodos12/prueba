import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.page.html',
  styleUrls: ['./encuesta.page.scss'],
})
export class EncuestaPage implements OnInit {
  hora: string;

  constructor(public alertController: AlertController) {
    this.hora="Valor seleccionado:"
   }
  
  logForm(): void{
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: "¡Enviado!, tu tiempo aquí son: ",
      subHeader: this.hora,

      buttons: ['OK']
    });
    await alert.present();
  }
  ngOnInit() {
  }

}
